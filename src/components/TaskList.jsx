import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1 className="text-center text-white mt-16">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-1 gap-2 w-4/12 mx-auto pt-4">
      {tasks.map((e) => (
        <TaskCard key={e.id} e={e} />
      ))}
    </div>
  );
};
