import { useCallback, useMemo, useState } from "react";
import { ThemeDisplay } from "./components/ThemeDisplay";

import s from "./App.module.css";
import { useTheme } from "./contexts/theme-context";
import TaskList from "./components/TaskList";
// import { MemoizedTimer3, Timer3 } from "./components/Timer/Timer";

const generateTasks = () => {
  const tasks = [];

  for (let i = 0; i < 1000; i++) {
    tasks.push({
      id: i,
      title: `Task ${i}`,
      done: Math.random() > 0.5,
    });
  }

  return tasks;
};

function App() {
  const [tasks, setTasks] = useState(generateTasks);
  const [_, rerender] = useState(0);
  const [filter, setFilter] = useState("all");
  const [highlightedTaskId, setHighlightedTaskId] = useState(null);
  const { theme } = useTheme();

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const addTask = () => {
    setTasks((prev) => [
      ...prev,
      {
        id: prev.length,
        title: `Task ${prev.length}`,
        done: false,
      },
    ]);
  };

  console.log("APP rendered");

  const filteredTasks = () => {
    console.log("Filtering ... ");

    switch (filter) {
      case "done":
        return tasks.filter((task) => task.done);
      case "pending":
        return tasks.filter((task) => !task.done);
      default:
        return tasks;
    }
  };

  // const tasksToRender = filteredTasks();
  const tasksToRender = useMemo(filteredTasks, [filter, tasks]);

  // const onTaskClick = (id) => {
  //   setHighlightedTaskId(id);
  // };

  const onTaskClick = useCallback((id) => {
    setHighlightedTaskId(id);
  }, []);

  return (
    <div
      style={{ padding: "40px" }}
      className={theme === "dark" ? s.dark : s.light}
    >
      <ThemeDisplay />
      <h2>Task List</h2>
      <button onClick={() => rerender((prev) => prev + 1)}> render</button>
      <button onClick={addTask}> add task</button>
      <h3>Highlighted Task ID: {highlightedTaskId}</h3>
      <label>
        Filter:
        <select value={filter} onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="pending">Pending</option>
        </select>
      </label>
      {/* <ul>
        {tasksToRender.map((task) => (
          <li key={task.id}>
            {task.title} - {task.done ? "Done" : "Pending"}
          </li>
        ))}
      </ul> */}
      <TaskList tasks={tasksToRender} onClick={onTaskClick} />
    </div>
  );
}

export default App;
