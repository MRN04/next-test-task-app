"use client"
import { useGetTasks } from "@/services/queries";
import { Skeleton } from "./ui/skeleton";
import { Task, TaskStatus } from "@/services/types";
import { useMemo } from "react";
import { STATUS_ORDER } from "@/lib/constants";
import { TaskCard } from "./TaskCard";

export const TasksList = () => {
  const { data, isLoading, error } = useGetTasks();

  const groupedTasks = useMemo(() => {
    if (!data) return {};

    return data.reduce((acc: Record<string, Task[]>, task: Task) => {
      const status = task.status;
      if (!acc[status]) {
        acc[status] = [];
      }
      acc[status].push(task);
      return acc;
    }, {});
  }, [data]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="w-32 h-6 rounded" />
            <Skeleton className="w-full h-48 rounded-lg" />
            <Skeleton className="w-full h-48 rounded-lg" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">Error loading tasks</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(4,260px)] gap-6 overflow-x-auto pb-4 h-full">
      {STATUS_ORDER.map((status: TaskStatus) => {
        const tasks = groupedTasks[status] || [];

        return (
          <div key={status} className="flex flex-col h-full">
            {/* Column Header */}
            <div className="flex items-center justify-between mb-4 flex-shrink-0">
              <h2 className="text-base font-medium text-dark-text">
                {status.charAt(0).toUpperCase() + status.slice(1)} ({tasks.length})
              </h2>
            </div>

            {/* Tasks in this column */}
            <div className="space-y-4 flex-1 overflow-y-auto">
              {tasks.length === 0 ? (
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center text-gray-400 text-sm">
                  No tasks
                </div>
              ) : (
                tasks.map((task: Task) => (
                  <TaskCard key={task.id} task={task} />
                ))
              )}
              <div className="w-[260px] h-[160px] border-2 border-dashed border-gray-text/40 rounded-lg"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};