import { ClockIcon } from "lucide-react";
import { TaskAvatars } from "./TaskAvatars";

interface TaskFooterProps {
  createdAt: string;
}

export const TaskFooter = ({ createdAt }: TaskFooterProps) => {
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

