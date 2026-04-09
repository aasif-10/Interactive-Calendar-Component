import { useState, useCallback } from "react";
import { isSameDay, isBeforeDay } from "../services/dateHelpers";
import { addDays, nextSaturday, nextSunday } from "date-fns";

/**
 * Custom hook to manage the state of active date ranges.
 * Handles the logic behind picking start dates vs ranges.
 */
export function useDateRange() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [hoverDate, setHoverDate] = useState(null);

  /**
   * Main function called when a date cell is tapped.
   * If no dates exist, selects the first date. If one date exists, establishes a range.
   * Selecting again replaces the current selection.
   */
  const toggleDate = useCallback(
    (date) => {
      if (!startDate && !endDate) {
        setStartDate(date);
      } else if (startDate && !endDate) {
        if (isSameDay(date, startDate)) {
          setStartDate(null);
        } else if (isBeforeDay(date, startDate)) {
          setEndDate(startDate);
          setStartDate(date);
        } else {
          setEndDate(date);
        }
        setHoverDate(null);
      } else if (startDate && endDate) {
        setStartDate(date);
        setEndDate(null);
      }
    },
    [startDate, endDate],
  );

  /**
   * Wipes any active range state out of the memory block explicitly.
   */
  const resetRange = useCallback(() => {
    setStartDate(null);
    setEndDate(null);
    setHoverDate(null);
  }, []);

  /**
   * Snaps the current selection starting from baseDate out for a week straight.
   */
  const selectNext7Days = useCallback((baseDate = new Date()) => {
    setStartDate(baseDate);
    setEndDate(addDays(baseDate, 6));
    setHoverDate(null);
  }, []);

  const selectNextWeekend = useCallback((baseDate = new Date()) => {
    setStartDate(nextSaturday(baseDate));
    setEndDate(nextSunday(baseDate));
    setHoverDate(null);
  }, []);

  return {
    startDate,
    endDate,
    hoverDate,
    setHoverDate,
    toggleDate,
    resetRange,
    selectNext7Days,
    selectNextWeekend,
  };
}
