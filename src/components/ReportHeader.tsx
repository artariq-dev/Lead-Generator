export function ReportHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="mb-8">
      <p className="text-[10px] tracking-wider uppercase text-blue-600 mb-1">
        {eyebrow}
      </p>
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{title}</h1>
      <p className="text-xs text-gray-500">{subtitle}</p>
    </div>
  );
}
