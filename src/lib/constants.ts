import { TaskStatus } from "@/services/types";

export const STATUS_ORDER: TaskStatus[] = ['to-do', 'in-progress', 'review', 'completed'];
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;