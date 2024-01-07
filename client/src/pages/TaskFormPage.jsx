import { useForm } from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { addTask, getTaskById, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTaskById(params.id);
        console.log(task);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs(task.date).utc().format());
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      addTask(dataValid);
    }
    navigate("/tasks");
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("title")}
            autoFocus
          />
          <label htmlFor="description">Description</label>

          <textarea
            rows="3"
            placeholder="Description"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("description")}
          ></textarea>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            {...register("date")}
          />
          <button className="bg-indigo-500 px-3 py-2 rounded-md ">Save</button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
