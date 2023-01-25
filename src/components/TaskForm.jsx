import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setDescription("");
    setTitle("");
  };

  return (
    <div className="w-4/12 mx-auto bg-gray-800 p-7 rounded-md">
      <form onSubmit={handleSubmit} className=" mx-auto flex flex-wrap gap-2">
        <h2 className="text-white">Crea tu tarea</h2>
        <input
          autoFocus
          required
          placeholder="Escribe tu tarea aqui"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 w-full p-1 rounded-sm"
        />
        <textarea
          className="bg-slate-300 w-full p-1 rounded-sm"
          placeholder="Escribe la descripcion aca"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        ></textarea>
        <button className="bg-green-700 py-1 px-5 mx-auto text-white rounded-sm hover:bg-green-400 duration-300">
          Enviar
        </button>
      </form>
    </div>
  );
};
