import { Check, Trash2, CalendarIcon } from "lucide-react";
import { format, isPast, isToday } from "date-fns";

export const TaskList = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground text-sm">
        No tasks to show
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {tasks.map((task) => {
        const isOverdue =
          task.dueDate &&
          !task.completed &&
          isPast(task.dueDate) &&
          !isToday(task.dueDate);

        return (
          <li
            key={task.id}
            onClick={() => onToggle(task.id)}
            className={`group flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all border ${
              task.completed
                ? "bg-[hsl(var(--task-complete-bg))] border-[hsl(var(--task-complete)/0.2)]"
                : "bg-card border-border hover:border-primary/30"
            }`}
          >
            <div
              className={`h-5 w-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                task.completed
                  ? "bg-[hsl(var(--task-complete))] border-[hsl(var(--task-complete))]"
                  : "border-border"
              }`}
            >
              {task.completed && (
                <Check className="h-3 w-3 text-primary-foreground" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <span
                className={`text-sm block transition-all ${
                  task.completed
                    ? "line-through text-muted-foreground"
                    : "text-foreground"
                }`}
              >
                {task.title}
              </span>
              {task.dueDate && (
                <span
                  className={`text-xs flex items-center gap-1 mt-1 ${
                    task.completed
                      ? "text-muted-foreground"
                      : isOverdue
                        ? "text-destructive"
                        : isToday(task.dueDate)
                          ? "text-primary"
                          : "text-muted-foreground"
                  }`}
                >
                  <CalendarIcon className="h-3 w-3" />
                  {isToday(task.dueDate)
                    ? "Today"
                    : format(task.dueDate, "MMM d, yyyy")}
                  {isOverdue && " · Overdue"}
                </span>
              )}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(task.id);
              }}
              className="opacity-0 group-hover:opacity-100 p-1 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};
