import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ErrorMessage } from "../types/error/error";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const processErrorIfPresent = (error: ErrorMessage) => {
  if (error !== undefined) {
    const { http_body, http_status_code } = error;
    throw new Error(JSON.stringify(http_body));
  }
};

export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

export const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function formatToTwoDecimalPoints(input: number): string {
  return input.toFixed(2);
}

export function removeUnderScores(input: string): string {
  // Replace all underscores with spaces
  let formatted = input.replace(/_/g, " ");

  return formatted.toLowerCase();
}
