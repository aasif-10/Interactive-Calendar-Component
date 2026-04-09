import React, { useMemo } from "react";
import {
  getDaysInMonth,
  getFirstDayOfMonth,
  isSameDay,
  isBetweenDays,
  getPublicHoliday,
} from "../services/dateHelpers";
import { format } from "date-fns";
import CalendarDay from "./CalendarDay";
import { useCalendar } from "../context/CalendarContext";
import styles from "../styles/calendar.module.css";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/**
 * Renders the main calendar date matrix and coordinate mapping.
 * Calculates empty days to align the 1st of the month, maps data to standard Day cells.
 */
export default function CalendarGrid() {
  const { currentDate, startDate, endDate, toggleDate, notes } = useCalendar();

  const { year, month } = useMemo(
    () => ({
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
    }),
    [currentDate],
  );

  const daysInMonth = getDaysInMonth(year, month);
  const startDayOfWeek = getFirstDayOfMonth(year, month);

  const days = useMemo(() => {
    const list = [];
    for (let i = 0; i < startDayOfWeek; i++) {
      list.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      list.push(new Date(year, month, i));
    }
    return list;
  }, [year, month, daysInMonth, startDayOfWeek]);

  const today = new Date();

  return (
    <div className={styles.calendarSection}>
      <div className={styles.weekdays}>
        {WEEKDAYS.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className={styles.grid}>
        {days.map((date, index) => {
          if (!date) {
            return <div key={`empty-${index}`} className={styles.empty} />;
          }

          const isToday = isSameDay(date, today);
          const isWeekend = date.getDay() === 0 || date.getDay() === 6;
          const holidayName = getPublicHoliday(date);

          let isSelectedStart = isSameDay(date, startDate);
          let isSelectedEnd = isSameDay(date, endDate);
          let isInRange = isBetweenDays(date, startDate, endDate);

          if (startDate && !endDate && isSameDay(date, startDate)) {
            isSelectedStart = true;
            isSelectedEnd = true;
          }

          const dayKey = `day_${format(date, "yyyy-MM-dd")}`;
          const hasNote = !!notes[dayKey];

          return (
            <CalendarDay
              key={date.toISOString()}
              date={date}
              isToday={isToday}
              holidayName={holidayName}
              isWeekend={isWeekend}
              isSelectedStart={isSelectedStart}
              isSelectedEnd={isSelectedEnd}
              isInRange={isInRange}
              onSelect={toggleDate}
              hasNote={hasNote}
            />
          );
        })}
      </div>
    </div>
  );
}
