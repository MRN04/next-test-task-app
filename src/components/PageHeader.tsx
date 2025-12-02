import { getFormattedDate } from "@/lib/utils";

export const PageHeader = ({ title }: { title: string }) => {
  const { day, month, year, date } = getFormattedDate();

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