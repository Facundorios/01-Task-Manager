import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, []);

  if (!tasks.length) return <p>No hay tareas</p>;

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {tasks.map((task) => (
        <TaskCard task={task} key={task._id }/>
      ))}
    </div>
  );
}

export default TasksPage;
