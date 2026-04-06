import { useState } from "react";
import { TaskInput } from "@/components/TaskInput";
import { TaskList } from "@/components/TaskList";
import { TaskFilters } from "@/components/TaskFilters";
import { CheckCircle2 } from "lucide-react";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (title, dueDate) => {
    setTasks((prev) => [
      { id: crypto.randomUUID(), title, completed: false, dueDate },
      ...prev,
    ]);
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-background flex items-start justify-center px-4 py-16">
      <div className="w-full max-w-lg space-y-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
            <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">
              Tasks
            </h1>
            <p className="text-sm text-muted-foreground">
              {tasks.length === 0
                ? "No tasks yet"
                : `${completedCount} of ${tasks.length} completed`}
            </p>
          </div>
        </div>

        <TaskInput onAdd={addTask} />
        <TaskFilters
          current={filter}
          onChange={setFilter}
          counts={{
            all: tasks.length,
            active: tasks.length - completedCount,
            completed: completedCount,
          }}
        />
        <TaskList
          tasks={filteredTasks}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      </div>
    </div>
  );
};

export default Index;
