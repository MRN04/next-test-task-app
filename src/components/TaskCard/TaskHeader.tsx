import { MoreHorizontalIcon } from "lucide-react";

interface TaskHeaderProps {
  title: string;
}

export const TaskHeader = ({ title }: TaskHeaderProps) => (
  <div className="flex items-start justify-between flex-shrink-0">
    <h3 className="font-medium text-dark-text line-clamp-2 flex-1 pr-2 text-base">
      {title}
    </h3>
    <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors flex-shrink-0">
      <MoreHorizontalIcon className="w-4 h-4" />
    </button>
  </div>
);

