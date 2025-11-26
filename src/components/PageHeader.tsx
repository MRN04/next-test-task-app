export const PageHeader = ({ title }: { title: string }) => {
  const day = new Date().toLocaleDateString('en-US', { weekday: 'long' });
  const month = new Date().toLocaleDateString('en-US', { month: 'long' });
  const year = new Date().getFullYear();
  const date = new Date().toLocaleDateString('en-US', { day: '2-digit' });

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-xl font-medium">{title}</h1>
      <div>
        <p className="text-gray-text text-sm">
          <span className="text-primary-green">{day}, </span> 
          {date} {month} {year}
        </p>
      </div>
    </div>
  );
};