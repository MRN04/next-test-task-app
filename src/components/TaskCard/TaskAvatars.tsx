export const TaskAvatars = () => (
  <div className="flex -space-x-2">
    {[1, 2, 3].map((index) => (
      <div
        key={index}
        className="w-8 h-8 rounded-full bg-gray-text border-2 border-white"
      />
    ))}
  </div>
);

