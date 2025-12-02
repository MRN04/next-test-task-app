import { Task } from "@/services/types";
import { cn } from "@/lib/utils";
import { TaskHeader } from "./TaskHeader";
import { TaskDescription } from "./TaskDescription";
import { TaskFooter } from "./TaskFooter";

interface TaskCardProps {
  task: Task;
  onDragStart: () => void;
  onDragEnd: () => void;
  isDragging: boolean;
}

export const TaskCard = ({
  task,
  onDragStart,
  onDragEnd,
  isDragging,
}: TaskCardProps) => {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      className={cn(
        "bg-white rounded-lg pt-4.5 px-4 pb-6 flex flex-col gap-3 transition-all cursor-move border border-gray-100",
        "h-[216px] min-h-[216px] max-h-[216px]",
        "hover:shadow-md",
        isDragging && "opacity-50 scale-95"
      )}
    >
      <TaskHeader title={task.title} />
      <TaskDescription description={task.description} />
      <TaskFooter createdAt={task.createdAt} />
    </div>
  );
};

