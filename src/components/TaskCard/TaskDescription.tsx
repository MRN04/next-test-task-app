interface TaskDescriptionProps {
  description: string;
}

export const TaskDescription = ({ description }: TaskDescriptionProps) => (
  <p className="text-sm text-dark-text/60 line-clamp-3 flex-1 overflow-y-auto min-h-0">
    {description}
  </p>
);

