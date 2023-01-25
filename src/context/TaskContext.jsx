import { createContext } from "react";
import { useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const data = [];
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  };
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((e) => e.id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
