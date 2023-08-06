import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ErrorMessage } from "../types/error/error";
import {
  PlaidLinkOnSuccessMetadata,
  PlaidLinkOnExitMetadata,
  PlaidLinkStableEvent,
  PlaidLinkOnEventMetadata,
  PlaidLinkError,
} from 'react-plaid-link';

/**
 * Creates a string of CSS classes.
 * @param inputs - Class values to be combined.
 * @returns The string of CSS classes.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Throws an error if one is present.
 * @param error - The error message to process.
 * @throws If an error is present.
 */
export const processErrorIfPresent = (error: ErrorMessage) => {
  if (error !== undefined) {
    const { http_body } = error;
    throw new Error(JSON.stringify(http_body));
  }
};

/**
 * Formats a date string or a timestamp into a string representation.
 * @param input - The date string or the timestamp.
 * @returns The formatted date string.
 */
export function formatDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

/**
 * Generates a random integer within the provided range.
 * @param min - The lower bound of the range.
 * @param max - The upper bound of the range.
 * @returns A random integer within the provided range.
 */
export const randomIntFromInterval = (min: number, max: number) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Formats a number to two decimal points.
 * @param input - The number to format.
 * @returns The formatted number string.
 */
export function formatToTwoDecimalPoints(input: number): string {
  return input.toFixed(2);
}

/**
 * Replaces all underscores in a string with spaces and convert the string to lower case.
 * @param input - The string to format.
 * @returns The formatted string.
 */
export function removeUnderScores(input: string): string {
  // Replace all underscores with spaces
  const formatted = input.replace(/_/g, " ");

  return formatted.toLowerCase();
}

/**
 * Converts a Date object into a "time ago" string.
 * @param date - The date to convert.
 * @returns A string representing how long ago the date was.
 */
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

/**
 * Rounds a number to two decimal places.
 * @param num - The number to round.
 * @returns The rounded number.
 */
export function roundToTwoDecimalPlaces(num: number): number {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}

/**
 * Converts a YYYYMM format string into a Month Year string.
 * @param dateString - The date string to convert.
 * @returns The formatted date string.
 */
export function convertToMonth(dateString: string): string {
  const year = dateString.substr(0, 4);
  const month = dateString.substr(4, 2);

  // Convert the month number to its name
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const monthNumber = parseInt(month, 10) - 1;
  const monthName = monthNames[monthNumber];

  return `${monthName} ${year}`;
}

/**
 * Logs event details to the console.
 * @param eventName - The name of the event.
 * @param metadata - Metadata related to the event.
 * @param error - Any errors related to the event.
 */
export const logEvent = (
  eventName: PlaidLinkStableEvent | string,
  metadata:
    | PlaidLinkOnEventMetadata
    | PlaidLinkOnSuccessMetadata
    | PlaidLinkOnExitMetadata,
  error?: PlaidLinkError | null
) => {
};

/**
 * Logs successful Plaid Link events.
 * @param params - Metadata related to the success event.
 * @param userId - The ID of the user.
 */
export const logSuccess = async (
  { institution, accounts, link_session_id }: PlaidLinkOnSuccessMetadata,
  userId: number
) => {
  logEvent('onSuccess', {
    institution,
    accounts,
    link_session_id,
  });
};

/**
 * Logs Plaid Link exit events.
 * @param error - Any errors related to the event.
 * @param params - Metadata related to the exit event.
 * @param userId - The ID of the user.
 */
export const logExit = async (
  error: PlaidLinkError | null,
  { institution, status, link_session_id, request_id }: PlaidLinkOnExitMetadata,
  userId: number
) => {
  logEvent(
    'onExit',
    {
      institution,
      status,
      link_session_id,
      request_id,
    },
    error
  );

  const eventError = error || {};
};

/**
 * Replaces all underscores in a string with spaces.
 * @param str - The string to format.
 * @returns The formatted string.
 */
export function replaceUnderscoreWithSpace(str: string): string {
  return str.replace(/_/g, " ");
}