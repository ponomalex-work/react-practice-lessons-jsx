import React, { memo } from "react";

function TaskList({ tasks, onClick }) {
  console.log("TaskList rendered");

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {task.title} - {task.done ? "Done" : "Pending"}
          <button onClick={() => onClick(task.id)}>click</button>
        </li>
      ))}
    </ul>
  );
}

export default memo(TaskList);
