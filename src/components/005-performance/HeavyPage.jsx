// import { FixedSizeList as List } from "react-window";

// const Row = ({ index, style }) => (
//   <div style={style} className="border-b border-gray-200 px-4 py-2">
//     Row #{index + 1}
//   </div>
// );

// export default function HeavyPage() {
//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Heavy Page</h1>
//       <List height={500} itemCount={1000} itemSize={35} width="100%">
//         {Row}
//       </List>
//     </div>
//   );
// }

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

export default function HeavyPage({ tasks = generateTasks() }) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Heavy Page</h1>
      {tasks.map((task, index) => (
        <div key={task.id}>Row #{index + 1}</div>
      ))}
    </div>
  );
}
