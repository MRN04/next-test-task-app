import { useQuery } from "@tanstack/react-query";
import { getTasks } from "./services";
import { Task } from "./types";
import { groupTasksByStatus } from "@/lib/utils";

export const useGetTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(),
    select: (data: Task[]) => groupTasksByStatus(data),
  });
};

