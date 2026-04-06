import { useMemo, useState } from "react";

function createTask(title) {
  return {
    id: crypto.randomUUID(),
    title,
    completed: false,
  };
}

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = title.trim();

    if (!trimmed) {
      return;
    }

    setTasks((previousTasks) => [createTask(trimmed), ...previousTasks]);
    setTitle("");
  }

  function toggleTask(taskId) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  const filteredTasks = useMemo(() => {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    }

    if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [filter, tasks]);

  const remainingCount = tasks.filter((task) => !task.completed).length;

  return (
    <main className="layout">
      <section className="panel" aria-label="Task manager application">
        <header className="heading">
          <h1>My Tasks</h1>
          <p>Simple task list built with AI pair programming.</p>
        </header>

        <form className="entry" onSubmit={handleSubmit}>
          <label className="visuallyHidden" htmlFor="task-input">
            Task title
          </label>
          <input
            id="task-input"
            className="entryInput"
            type="text"
            placeholder="What needs to be done?"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <button type="submit" className="entryButton">
            Add Task
          </button>
        </form>

        <div className="chipRow" role="toolbar" aria-label="Filter tasks">
          <button
            type="button"
            className={filter === "all" ? "chip isActive" : "chip"}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            type="button"
            className={filter === "active" ? "chip isActive" : "chip"}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            type="button"
            className={filter === "completed" ? "chip isActive" : "chip"}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>

        <ul className="list" aria-label="Task list">
          {filteredTasks.length === 0 ? (
            <li className="emptyState">No tasks in this view.</li>
          ) : (
            filteredTasks.map((task) => (
              <li key={task.id} className="row">
                <label className="rowLabel">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                  <span className={task.completed ? "text done" : "text"}>
                    {task.title}
                  </span>
                </label>
              </li>
            ))
          )}
        </ul>

        <p className="counter">{remainingCount} tasks remaining</p>
      </section>
    </main>
  );
}
