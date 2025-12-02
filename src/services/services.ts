import { BASE_URL } from "@/lib/constants";

export const getTasks = async () => {
  const response = await fetch(`${BASE_URL}/tasks`);
  const data = await response.json();
  return data;
}