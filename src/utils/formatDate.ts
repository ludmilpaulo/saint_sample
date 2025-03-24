// formatDate.ts

import { format, isValid } from 'date-fns';

/**
 * Formats a date string into a specified format.
 *
 * @param {string | Date} date - The date string or Date object to format.
 * @param {string} formatString - The desired date format (e.g., 'MMM dd, yyyy').
 * @returns {string} - The formatted date string, or 'Invalid Date' if the input is invalid.
 */
export const formatDate = (date: string | Date, formatString: string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;

  if (isValid(dateObj)) {
    return format(dateObj, formatString);
  } else {
    return 'Invalid Date';
  }
};

/**
 * Formats a date string into a short month format (e.g. "Sep").
 *
 * @param {string | Date} date - The date string or Date object to format.
 * @returns {string} - The formatted month string, or 'Invalid' if the input is invalid.
 */

export const formatMonthShort = (date: string | Date): string => {
  return formatDate(date, 'MMM');
};

/**
 * Formats a date string into a day of the month format (e.g. "25").
 *
 * @param {string | Date} date - The date string or Date object to format.
 * @returns {string} - The formatted day of the month, or 'Date' if the input is invalid.
 */

export const formatDateDay = (date: string | Date): string => {
  return formatDate(date, 'dd');
};

/**
 * Formats a date string into a day of the week format (e.g. "Monday").
 *
 * @param {string | Date} date - The date string or Date object to format.
 * @returns {string} - The formatted day of the week, or 'Invalid' if the input is invalid.
 */

export const formatDateDayOfWeek = (date: string | Date): string => {
  return formatDate(date, 'EEEE');
};

/**
 * Formats a date string into a day of the week short format (e.g. "Mon").
 *
 * @param {string | Date} date - The date string or Date object to format.
 * @returns {string} - The formatted day of the week short, or 'Invalid' if the input is invalid.
 */

export const formatDateDayOfWeekShort = (date: string | Date): string => {
  return formatDate(date, 'EEE');
};

/**
 * Formats a date string into a year format (e.g. "2024").
 *
 * @param {string | Date} date - The date string or Date object to format.
 * @returns {string} - The formatted year, or 'Invalid' if the input is invalid.
 */

export const formatDateYear = (date: string | Date): string => {
  return formatDate(date, 'yyyy');
};