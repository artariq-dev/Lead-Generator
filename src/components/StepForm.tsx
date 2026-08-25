"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const emptySubscribe = () => () => {};

function useHydrated() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

interface StepOption {
  label: string;
  value: string;
}

interface StepQuestion {
  id: string;
  stem?: string;
  label?: string;
  options: StepOption[];
}

interface StepConfig {
  id: string;
  questions: StepQuestion[];
}

interface StepAnswer {
  questionId: string;
  value: string;
}

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function StepForm({
  config,
  reportPath,
  loadingText,
}: {
  config: StepConfig;
  reportPath: string;
  loadingText: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const [answers, setAnswers] = useState<StepAnswer[]>([]);
  const hydrated = useHydrated();
  const advanceRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  const prefilled = useMemo(() => {
    const map: Record<string, string> = {};
    if (!hydrated) return map;
    searchParams.forEach((value, key) => {
      map[key] = value;
    });
    return map;
  }, [hydrated, searchParams]);

  const questions = useMemo(
    () =>
      hydrated
        ? config.questions.map((q) => ({ ...q, options: shuffle(q.options) }))
        : config.questions,
    [config.questions, hydrated],
  );

  // Skip questions already answered via URL (e.g. first question from the hero)
  const firstUnanswered = useMemo(() => {
    if (!hydrated) return 0;
    return config.questions.findIndex((q) => !prefilled[q.id]);
  }, [config.questions, prefilled, hydrated]);

  useEffect(() => {
    if (!hydrated || firstUnanswered <= 0) return;
    setStep(firstUnanswered);
    const initial = config.questions
      .slice(0, firstUnanswered)
      .filter((q) => prefilled[q.id])
      .map((q) => ({ questionId: q.id, value: prefilled[q.id] }));
    setAnswers(initial);
    setDirection(1);
  }, [hydrated, firstUnanswered, config.questions, prefilled]);

  const question = questions[step];
  const isLast = step === questions.length - 1;
  const isComplete = answers.length === questions.length;

  useEffect(() => {
    if (!isComplete) return;
    const params = new URLSearchParams();
    answers.forEach((a) => params.set(a.questionId, a.value));
    router.push(`${reportPath}?${params.toString()}`);
  }, [isComplete, answers, reportPath, router]);

  const select = useCallback(
    (value: string) => {
      const existing = answers.findIndex((a) => a.questionId === question.id);
      const next = [...answers];
      if (existing >= 0) {
        next[existing] = { questionId: question.id, value };
      } else {
        next.push({ questionId: question.id, value });
      }
      setAnswers(next);
      setDirection(1);

      if (isLast) return;

      clearTimeout(advanceRef.current);
      advanceRef.current = setTimeout(() => {
        setStep((s) => s + 1);
      }, 200);
    },
    [answers, question.id, isLast],
  );

  useEffect(() => {
    return () => clearTimeout(advanceRef.current);
  }, []);

  const back = () => {
    setDirection(-1);
    setStep(Math.max(0, step - 1));
  };

  if (isComplete) {
    return (
      <div className="bg-white border border-gray-200 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)] text-center">
        <p className="text-sm text-gray-500">{loadingText}</p>
      </div>
    );
  }

  const currentAnswer = answers.find((a) => a.questionId === question.id);

  return (
    <div className="bg-white border border-gray-200 p-6 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] tracking-wider uppercase text-gray-400">
            Factor {step + 1} of {questions.length}
          </span>
          <span className="text-[10px] text-gray-400">
            {Math.round(((step + 1) / questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full h-1 bg-gray-200 ">
          <div
            className="h-1 bg-blue-600 transition-all duration-300"
            style={{ width: `${((step + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={step}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {question.stem ? (
            <div className="mb-6">
              <p className="text-sm lg:text-base font-bold text-gray-900  leading-relaxed">
                {question.stem}{" "}
                <span
                  className={`inline-block min-w-[8rem] border-b-2 border-dashed px-1 pb-0.5 align-baseline transition-colors ${
                    currentAnswer
                      ? "text-blue-600 border-blue-600"
                      : "text-gray-400 border-gray-300"
                  }`}
                >
                  {currentAnswer
                    ? question.options.find((o) => o.value === currentAnswer.value)?.label
                    : "…"}
                </span>
              </p>
            </div>
          ) : (
            <h2 className="text-sm lg:text-base font-bold text-gray-900  mb-4">
              {question.label}
            </h2>
          )}

          <div className={question.stem ? "flex flex-wrap gap-2" : "space-y-2"}>
            {question.options.map((option) => (
              <button
                key={`${question.id}-${option.value}`}
                onClick={() => select(option.value)}
                className={`${
                  question.stem
                    ? "px-3.5 py-2.5"
                    : "w-full text-left px-4 py-3"
                } text-sm border cursor-pointer transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] ${
                  currentAnswer?.value === option.value
                    ? "border-blue-600 bg-blue-50  text-gray-900 "
                    : "border-gray-200  text-gray-700  hover:border-gray-300 "
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between mt-6">
        <button
          onClick={back}
          className={`text-xs text-gray-500 hover:text-gray-900  cursor-pointer transition-colors ${
            step === 0 ? "invisible" : ""
          }`}
        >
          ← Back
        </button>
        <span className="text-xs text-gray-400">
          {currentAnswer ? "Completed" : "Tap to complete"}
        </span>
      </div>
    </div>
  );
}
