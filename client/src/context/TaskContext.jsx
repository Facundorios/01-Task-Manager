import { createContext, useContext, useState } from "react";
import {
  addTaskRequest,
  getTasksRequest,
  deleteTaskRequest,
  getTaskByIdRequest,
  updateTaskRequest
} from "../api/tasks";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTask debe estar dentro del proveedor TaskContext");
  }

  return context;
};

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addTask = async (task) => {
    try {
      const res = await addTaskRequest(task);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getTaskById = async (id) => {
    try {
      const res = await getTaskByIdRequest(id);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

const updateTask = async (id, task) => {
  try {
    const res = await updateTaskRequest(id, task);
    console.log(res)
  } catch (error) {
    console.log(error)
  }
}

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        getTasks,
        getTaskById,
        deleteTask,
        updateTask
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
