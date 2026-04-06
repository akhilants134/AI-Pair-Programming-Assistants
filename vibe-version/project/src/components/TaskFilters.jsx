const labels = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];

export const TaskFilters = ({ current, onChange, counts }) => (
  <div className="flex gap-1 bg-muted p-1 rounded-lg">
    {labels.map(({ key, label }) => (
      <button
        key={key}
        onClick={() => onChange(key)}
        className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
          current === key
            ? "bg-card text-foreground shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {label}
        <span className="ml-1.5 text-xs opacity-60">{counts[key]}</span>
      </button>
    ))}
  </div>
);
