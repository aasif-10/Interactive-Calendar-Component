import React from "react";
import clsx from "clsx";
// eslint-disable-next-line no-unused-vars
import { isSameDay, isBetweenDays } from "../services/dateHelpers";
import styles from "../styles/calendar.module.css";

/**
 * Renders an individual day cell in the calendar grid.
 * Handles interaction states (selected, hovered, in range) and displays indicators like notes.
 */
export default function CalendarDay({
  date,
  isToday,
  isWeekend,
  isSelectedStart,
  isSelectedEnd,
  isInRange,
  isInHoverRange,
  onSelect,
  onMouseEnter,
  hasNote,
}) {
  const isSingleDaySelected = isSelectedStart && isSelectedEnd;

  return (
    <button
      onClick={() => onSelect(date)}
      onMouseEnter={() => onMouseEnter?.(date)}
      className={clsx(styles.dayCell, styles.fadeIn, {
        [styles.isToday]: isToday && !isSelectedStart && !isSelectedEnd,
        [styles.isWeekend]: isWeekend,
        [styles.selectedStart]: isSelectedStart && !isSingleDaySelected,
        [styles.selectedEnd]: isSelectedEnd && !isSingleDaySelected,
        [styles.selectedSingle]: isSingleDaySelected,
        [styles.inRange]: isInRange,
        [styles.inHoverRange]: isInHoverRange && !isInRange,
      })}
      aria-label={date.toDateString()}
      aria-pressed={isSelectedStart || isSelectedEnd || isInRange}
    >
      {date.getDate()}
      {hasNote && <span className="dayNoteIndicator" />}
    </button>
  );
}
