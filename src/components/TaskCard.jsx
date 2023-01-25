import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskCard = ({ e }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-5 rounded-md">
      <h1>{e.title}</h1>
      <p className="text-xs text-gray-500">{e.description}</p>
      <button
        className="bg-red-700 py-1 px-3 rounded-sm hover:bg-red-400 mt-4 "
        onClick={() => deleteTask(e.id)}
      >
        Eliminar
      </button>
    </div>
  );
};
