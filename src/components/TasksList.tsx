"use client"
import { useGetTasks } from "@/services/queries";
import { Skeleton } from "./ui/skeleton";
import { Task } from "@/services/types";

export const TasksList = () => {
  const { data, isLoading, error } = useGetTasks();
  console.log(data);

  return (
    <div className="flex flex-col gap-4">
      {isLoading && <Skeleton className="w-full h-10" />}
      {error && <div className="text-red-500">Error loading tasks</div>}
      {data && data.map((task: Task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
        </div>  
      ))}
    </div>
  );
};