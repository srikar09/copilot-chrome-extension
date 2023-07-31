import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ErrorMessage } from "../types/error/error";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const processErrorIfPresent = (error: ErrorMessage) => {
  if (error !== undefined) {
    const { http_body } = error;
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
  const formatted = input.replace(/_/g, " ");

  return formatted.toLowerCase();
}

export function timeAgo(date: Date): string {
  const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) {
    return `${Math.floor(interval)} years ago`;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return `${Math.floor(interval)} months ago`;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return `${Math.floor(interval)} days ago`;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return `${Math.floor(interval)} hours ago`;
  }
  interval = seconds / 60;
  if (interval > 1) {
    return `${Math.floor(interval)} minutes ago`;
  }
  return `${Math.floor(seconds)} seconds ago`;
}

export function roundToTwoDecimalPlaces(num: number): number {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
