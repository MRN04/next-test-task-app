import { Task } from "@/services/types";
import { ClockIcon, MoreHorizontalIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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

const TaskHeader = ({ title }: { title: string }) => (
  <div className="flex items-start justify-between flex-shrink-0">
    <h3 className="font-medium text-dark-text line-clamp-2 flex-1 pr-2 text-base">
      {title}
    </h3>
    <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0">
      <MoreHorizontalIcon className="w-4 h-4" />
    </button>
  </div>
);

const TaskDescription = ({ description }: { description: string }) => (
  <p className="text-sm text-dark-text/60 line-clamp-3 flex-1 overflow-y-auto min-h-0">
    {description}
  </p>
);

const TaskFooter = ({ createdAt }: { createdAt: string }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  return (
    <div className="flex items-center justify-between pt-2 flex-shrink-0">
      <span className="inline-flex items-center gap-1 text-xs text-white bg-primary-green px-2 py-1.5 rounded-sm">
        <ClockIcon className="w-4 h-4 text-white" />
        {formattedDate}
      </span>
      <TaskAvatars />
    </div>
  );
};

const TaskAvatars = () => (
  <div className="flex -space-x-2">
    {[1, 2, 3].map((index) => (
      <div
        key={index}
        className="w-8 h-8 rounded-full bg-gray-text border-2 border-white"
      />
    ))}
  </div>
);
