import { PageHeader } from "@/components/PageHeader";
import { TasksList } from "@/components/TasksList";

export default function Dashboard() {
  return (
    <div className="h-full flex flex-col pt-4 lg:pt-10 px-4 lg:px-8 gap-6 overflow-hidden">
      <PageHeader title="My Tasks" />
      <TasksList />
    </div>
  );
}