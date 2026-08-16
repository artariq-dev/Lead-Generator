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
    <div className="mb-4">
      <div className="flex flex-wrap gap-2">
        {fieldOptions.map((f) => (
          <button
            key={f.id}
            onClick={() => onSelectField(f.id)}
            className={`text-xs font-semibold px-3.5 py-2 border transition-all duration-150 cursor-pointer ${
              field === f.id
                ? "bg-blue-600 border-blue-600 text-white shadow-[0_1px_3px_rgba(0,0,0,0.15)]"
                : "bg-white border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-600"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-between flex-wrap gap-2 mt-3">
        <p className="text-xs text-gray-400">
          {total} of {totalGroups} groups
        </p>
        <span className="flex items-center gap-3 text-[10px] font-medium text-gray-500">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            critical
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            warning
          </span>
        </span>
      </div>
    </div>
  );
}
