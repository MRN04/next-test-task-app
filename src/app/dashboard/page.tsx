import { PageHeader } from "@/components/PageHeader";
import { TasksList } from "@/components/TasksList";

export default function Dashboard() {
  return (
    <div className="py-10 px-8">
      <PageHeader title="My Tasks" />
      <TasksList />
    </div>
  );
}