import React from "react";
import {
  PenTool,
  Calendar as CalendarIcon,
  List as ListIcon,
} from "lucide-react";
import { useCalendar } from "../context/CalendarContext";
import { format, differenceInDays } from "date-fns";
import styles from "../styles/calendar.module.css";

/**
 * A right-side panel displaying range summary and contextual notes.
 */
export default function NotesPanel({ monthKey }) {
  const { startDate, endDate, notes, setNote, resetRange } = useCalendar();

  let noteKey = `month_${monthKey}`;
  let noteTitle = "Monthly Notes";
  let notePlaceholder = "General notes for the month...";

  if (startDate && endDate) {
    noteKey = `range_${format(startDate, "yyyy-MM-dd")}_${format(endDate, "yyyy-MM-dd")}`;
    noteTitle = `Range Note`;
    notePlaceholder = "Add notes for this duration...";
  } else if (startDate) {
    noteKey = `day_${format(startDate, "yyyy-MM-dd")}`;
    noteTitle = `Daily Note`;
    notePlaceholder = "Add note for this day...";
  }

  const currentText = notes[noteKey] || "";

  const savedNotesKeys = Object.keys(notes)
    .filter((k) => notes[k] && k !== noteKey)
    .slice(0, 4);

  return (
    <>
      <div className={styles.summaryCard}>
        <div className={styles.summaryHeader}>
          <h4>Selected Range</h4>
          {(startDate || endDate) && (
            <button className={styles.resetButton} onClick={resetRange}>
              Clear
            </button>
          )}
        </div>
        <div className={styles.summaryDates}>
          {!startDate && !endDate && (
            <div
              className={styles.summaryDate}
              style={{ color: "var(--subtext)" }}
            >
              None selected
            </div>
          )}
          {startDate && (
            <div className={styles.summaryDate}>
              Start: {format(startDate, "MMM d, yyyy")}
            </div>
          )}
          {endDate && (
            <div className={styles.summaryDate}>
              End: {format(endDate, "MMM d, yyyy")}
            </div>
          )}
          {startDate && endDate && (
            <div
              className={styles.summaryDate}
              style={{
                fontSize: "0.9rem",
                color: "var(--subtext)",
                marginTop: "0.5rem",
              }}
            >
              Duration: {Math.abs(differenceInDays(endDate, startDate)) + 1}{" "}
              days
            </div>
          )}
        </div>
      </div>

      <div className={styles.notesPanel}>
        <div className={styles.notesHeader}>
          <PenTool size={18} /> {noteTitle}
        </div>
        <textarea
          className={styles.notesTextarea}
          value={currentText}
          onChange={(e) => setNote(noteKey, e.target.value)}
          placeholder={notePlaceholder}
          aria-label={noteTitle}
        />
      </div>

      {savedNotesKeys.length > 0 && (
        <div
          className={styles.notesPanel}
          style={{ flex: "unset", minHeight: "120px" }}
        >
          <div className={styles.notesHeader}>
            <ListIcon size={18} /> Recent Notes
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              marginTop: "1rem",
            }}
          >
            {savedNotesKeys.map((k) => (
              <div
                key={k}
                style={{
                  fontSize: "0.85rem",
                  padding: "0.5rem",
                  background: "var(--day-hover-bg)",
                  borderRadius: "6px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                <strong>{k.replace(/_|day|month|range/g, " ").trim()}</strong>:{" "}
                {notes[k]}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
