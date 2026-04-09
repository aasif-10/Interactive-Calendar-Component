import React from "react";
import { format } from "date-fns";
import { ChevronLeft, ChevronRight, Sun, Moon } from "lucide-react";
import styles from "../styles/calendar.module.css";
import NotesPanel from "./NotesPanel";
import { useCalendar } from "../context/CalendarContext";
import { useTheme } from "../context/ThemeContext";

/**
 * Top promotional hero section.
 * Contains month navigation, theme toggling, and displays the notes panel.
 */
export default function HeroSection({ heroImage }) {
  const { currentDate, handlePrevMonth, handleNextMonth } = useCalendar();
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={styles.heroSection}
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <div className={styles.monthNav}>
          <button
            className={styles.navButton}
            onClick={handlePrevMonth}
            aria-label="Previous month"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className={styles.navButton}
            onClick={handleNextMonth}
            aria-label="Next month"
          >
            <ChevronRight size={24} />
          </button>

          <button
            className={`${styles.navButton} ${styles.themeToggle}`}
            onClick={toggleTheme}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div style={{ flex: 1 }}></div>

        <div>
          <h1 className={styles.heroTitle}>{format(currentDate, "MMMM")}</h1>
          <p className={styles.heroYear}>{format(currentDate, "yyyy")}</p>
          <p className={styles.heroSubtitle}>Plan your schedule</p>
        </div>
      </div>
    </div>
  );
}
