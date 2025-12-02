"use client";

import { useGetTasks } from "@/services/queries";
import { Skeleton } from "./ui/skeleton";
import { Task, TaskStatus } from "@/services/types";
import { STATUS_ORDER } from "@/lib/constants";
import { TaskColumn } from "./TaskColumn";
import { useTasksDragAndDrop } from "@/hooks/useTasksDragAndDrop";
import { useMemo } from "react";

export const TasksList = () => {
  const { data, isLoading, error } = useGetTasks();

  const flattenedTasks = useMemo(
    () => (data ? Object.values(data).flat() : []),
    [data]
  );

  const {
    tasks,
    draggedTask,
    dragOverColumn,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  } = useTasksDragAndDrop(flattenedTasks);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(4,260px)] gap-6 overflow-x-auto pb-4 h-full">
      {STATUS_ORDER.map((status: TaskStatus) => (
        <TaskColumn
          key={status}
          status={status}
          tasks={tasks.filter((task: Task) => task.status === status) || []}
          draggedTaskId={draggedTask?.id || null}
          isDragOver={dragOverColumn === status}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragOver={(e) => handleDragOver(status, e)}
          onDragLeave={handleDragLeave}
          onDrop={() => handleDrop(status)}
        />
      ))}
    </div>
  );
};

const LoadingSkeleton = () => (
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

const ErrorMessage = () => (
  <div className="text-red-500">Error loading tasks</div>
);
