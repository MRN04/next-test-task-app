import { Task, TaskStatus } from "@/services/types";
import { TaskCard } from "./TaskCard";

interface TaskColumnProps {
  status: TaskStatus;
  tasks: Task[];
  draggedTaskId: string | null;
  isDragOver: boolean;
  onDragStart: (task: Task) => void;
  onDragEnd: () => void;
  onDragOver: (e: React.DragEvent) => void;
  onDragLeave: () => void;
  onDrop: () => void;
}

export const TaskColumn = ({
  status,
  tasks,
  draggedTaskId,
  isDragOver,
  onDragStart,
  onDragEnd,
  onDragOver,
  onDragLeave,
  onDrop,
}: TaskColumnProps) => {
  const columnTitle = status.charAt(0).toUpperCase() + status.slice(1);
  const isEmpty = tasks.length === 0;

  return (
    <div className="flex flex-col h-full">
      {/* Column Header */}
      <div className="flex items-center justify-between mb-4 flex-shrink-0">
        <h2 className="text-base font-medium text-dark-text">
          {columnTitle} ({tasks.length})
        </h2>
      </div>

      {/* Tasks Drop Zone */}
      <div
        className={`space-y-4 flex-1 overflow-y-auto rounded-lg transition-colors ${isDragOver ? "bg-primary-green/5 border-2 border-primary-green/30" : ""
          }`}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {isEmpty ? (
          <EmptyColumn isDragOver={isDragOver} />
        ) : (
          tasks.map((task) => (
            <TaskCard
              key={`${task.id}-${task.status}`}
              task={task}
              onDragStart={() => onDragStart(task)}
              onDragEnd={onDragEnd}
              isDragging={draggedTaskId === task.id}
            />
          ))
        )}
        <div className="w-full h-[150px] lg:w-[260px] lg:h-[216px] border-2 border-dashed border-gray-text/40 rounded-lg" />
      </div>
    </div>
  );
};

const EmptyColumn = ({ isDragOver }: { isDragOver: boolean }) => {
  return (
    <div
      className={`border-2 border-dashed rounded-lg p-8 text-center text-sm min-h-[100px] flex items-center justify-center transition-colors ${isDragOver
        ? "border-primary-green bg-primary-green/5 text-primary-green"
        : "border-gray-200 text-gray-400"
        }`}
    >
      {isDragOver ? "Drop here" : "No tasks"}
    </div>
  );
};

