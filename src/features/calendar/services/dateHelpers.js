/**
 * Returns the total number of days in a given month and year.
 */
export const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

/**
 * Returns the index of the day of the week for the first day of the month (0 = Sunday).
 */
export const getFirstDayOfMonth = (year, month) => {
  return new Date(year, month, 1).getDay(); // 0 is Sunday, 1 is Monday
};

/**
 * Checks if two dates represent the exact same calendar day.
 */
export const isSameDay = (date1, date2) => {
  if (!date1 || !date2) return false;
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
};

/**
 * Checks if the first date is strictly before the second date.
 */
export const isBeforeDay = (date1, date2) => {
  if (!date1 || !date2) return false;
  const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  return d1 < d2;
};

/**
 * Checks if the first date is strictly after the second date.
 */
export const isAfterDay = (date1, date2) => {
  if (!date1 || !date2) return false;
  const d1 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const d2 = new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
  return d1 > d2;
};

/**
 * Checks if a given date falls strictly between a start and end date.
 */
export const isBetweenDays = (date, start, end) => {
  if (!date || !start || !end) return false;
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const e = new Date(end.getFullYear(), end.getMonth(), end.getDate());

  // ensure s is before e, just in case
  const lower = s < e ? s : e;
  const upper = s > e ? s : e;
  return d > lower && d < upper;
};
