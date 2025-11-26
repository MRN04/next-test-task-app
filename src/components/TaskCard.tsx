import { Task } from "@/services/types";
import { ClockIcon, MoreHorizontalIcon } from "lucide-react";

export const TaskCard = ({ task }: { task: Task }) => {
    return (
        <div className="bg-white rounded-lg pt-4.5 px-4 pb-6 flex flex-col gap-3 hover:shadow-md transition-shadow border border-gray-100">
            <div className="flex items-start justify-between">
                <h3 className="font-medium text-dark-text line-clamp-2">
                    {task.title}
                </h3>
                <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors">
                    <MoreHorizontalIcon className="w-4 h-4" />
                </button>
            </div>

            <p className="text-sm text-dark-text/60 line-clamp-3 flex-1">
                {task.description}
            </p>

            <div className="flex items-center justify-between pt-2">
                <span className="inline-flex items-center gap-1 text-xs text-white bg-primary-green px-2 py-1.5 rounded-sm">
                    <ClockIcon className="w-4 h-4 text-white" />
                    {new Date(task.createdAt).toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'short'
                    })}
                </span>

                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gray-text border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-text border-2 border-white"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-text border-2 border-white"></div>
                </div>
            </div>
        </div>
    );
};

