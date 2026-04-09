import React from "react";
import { format } from "date-fns";
import { RefreshCw } from "lucide-react";
import styles from "../styles/calendar.module.css";

/**
 * Renders the formatted date range display and a reset button.
 */
export default function DateRangePicker({ startDate, endDate, onReset }) {
  /**
   * Helper function to generate display text based on current selection.
   */
  const getRangeText = () => {
    if (!startDate && !endDate) return "Select a date range";
    if (startDate && !endDate)
      return `Selected: ${format(startDate, "MMM d, yyyy")}`;
    return `${format(startDate, "MMM d")} - ${format(endDate, "MMM d, yyyy")}`;
  };

  return (
    <div className={styles.controlsRow}>
      <div className={styles.rangeDisplay}>{getRangeText()}</div>
      {(startDate || endDate) && (
        <button
          className={styles.resetButton}
          onClick={onReset}
          aria-label="Clear selection"
        >
          <RefreshCw size={14} style={{ marginRight: 4, display: "inline" }} />
          Clear
        </button>
      )}
    </div>
  );
}
