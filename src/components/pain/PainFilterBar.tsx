"use client";

interface FieldOption {
  id: string;
  label: string;
}

interface PainFilterBarProps {
  field: string;
  fieldOptions: FieldOption[];
  onSelectField: (id: string) => void;
  total: number;
  totalGroups: number;
}

export function PainFilterBar({
  field,
  fieldOptions,
  onSelectField,
  total,
  totalGroups,
}: PainFilterBarProps) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 mb-3 shadow-[3px_3px_0px_#e5e7eb] dark:shadow-[3px_3px_0px_#374151]">
      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
        {fieldOptions.map((f) => (
          <button
            key={f.id}
            onClick={() => onSelectField(f.id)}
            className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 border transition-all duration-150 cursor-pointer pixel-btn ${
              field === f.id
                ? "bg-[#f0e6d4] border-[#f0e6d4] text-gray-900 shadow-[3px_3px_0px_#d4c5a8]"
                : "bg-gray-800 border-gray-800 text-gray-100 dark:bg-gray-200 dark:border-gray-200 dark:text-gray-800 hover:bg-[#f0e6d4] hover:border-[#f0e6d4] hover:text-gray-900 dark:hover:bg-[#f0e6d4] dark:hover:border-[#f0e6d4] dark:hover:text-gray-900"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between flex-wrap gap-2">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Showing <span className="font-bold text-gray-900 dark:text-white">{total}</span>
          {" "}of <span className="font-bold text-gray-900 dark:text-white">{totalGroups}</span> groups
        </p>
        <span className="flex items-center gap-2 text-[9px] text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            critical
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            warning
          </span>
        </span>
      </div>
    </div>
  );
}
