import { useState, useEffect } from "react";
import { Task, TaskStatus } from "@/services/types";

export const useTasksDragAndDrop = (initialTasks: Task[]) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<TaskStatus | null>(null);

  useEffect(() => {
    setTasks(initialTasks);
  }, [initialTasks]);

  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDragEnd = () => {
    setDraggedTask(null);
    setDragOverColumn(null);
  };

  const handleDragOver = (status: TaskStatus, e: React.DragEvent) => {
    e.preventDefault();
    setDragOverColumn(status);
  };

  const handleDragLeave = () => {
    setDragOverColumn(null);
  };

  const handleDrop = (newStatus: TaskStatus) => {
    if (!draggedTask) {
      setDragOverColumn(null);
      return;
    }

    if (draggedTask.status !== newStatus) {
      setTasks((prevTasks) => {
        const tasksWithoutDragged = prevTasks.filter(
          (task) => task.id !== draggedTask.id
        );

        return [...tasksWithoutDragged, { ...draggedTask, status: newStatus }];
      });
    }

    setDraggedTask(null);
    setDragOverColumn(null);
  };

  return {
    tasks,
    draggedTask,
    dragOverColumn,
    handleDragStart,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
};
