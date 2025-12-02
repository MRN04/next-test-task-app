import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormattedDate(date: Date = new Date()) {
  return {
    day: date.toLocaleDateString("en-US", { weekday: "long" }),
    month: date.toLocaleDateString("en-US", { month: "long" }),
    year: date.getFullYear(),
    date: date.toLocaleDateString("en-US", { day: "2-digit" }),
  };
}

export function calculateProfileCompletion(fields: (string | undefined)[]) {
  const filledFields = fields.filter(
    (field) => field && field.trim() !== ""
  ).length;

  return Math.round((filledFields / fields.length) * 100);
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export function groupTasksByStatus<T extends { status: string }>(
  tasks: T[]
): Record<string, T[]> {
  if (!tasks.length) return {};

  return tasks.reduce((acc: Record<string, T[]>, task) => {
    const status = task.status;
    if (!acc[status]) {
      acc[status] = [];
    }
    acc[status].push(task);
    return acc;
  }, {});
}
