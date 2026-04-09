/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { useDateRange } from "../hooks/useDateRange";
import { useNotes } from "../hooks/useNotes";

export const CalendarContext = createContext(null);

/**
 * Custom hook to consume the calendar global state.
 */
export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
};

/**
 * Provider wrapping the application to coordinate dates, bounds, and user notes.
 */
export const CalendarProvider = ({ children }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const {
    startDate,
    endDate,
    hoverDate,
    setHoverDate,
    toggleDate,
    resetRange,
    selectNext7Days,
    selectNextWeekend,
  } = useDateRange();

  const { notes, getNote, setNote } = useNotes();

  const handlePrevMonth = useCallback(() => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1),
    );
  }, []);

  const handleNextMonth = useCallback(() => {
    setCurrentDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1),
    );
  }, []);

  const value = useMemo(
    () => ({
      currentDate,
      setCurrentDate,
      startDate,
      endDate,
      hoverDate,
      setHoverDate,
      toggleDate,
      resetRange,
      selectNext7Days,
      selectNextWeekend,
      handlePrevMonth,
      handleNextMonth,
      notes,
      getNote,
      setNote,
    }),
    [
      currentDate,
      setCurrentDate,
      startDate,
      endDate,
      hoverDate,
      setHoverDate,
      toggleDate,
      resetRange,
      selectNext7Days,
      selectNextWeekend,
      handlePrevMonth,
      handleNextMonth,
      notes,
      getNote,
      setNote,
    ],
  );

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};
