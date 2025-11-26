import { useQuery } from "@tanstack/react-query";
import { Services } from "./services";

export const useGetTasks = () => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => Services.getTasks(),
  });
};