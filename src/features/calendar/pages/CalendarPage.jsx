import React from "react";
import HeroSection from "../components/HeroSection";
import CalendarGrid from "../components/CalendarGrid";
import NotesPanel from "../components/NotesPanel";
import { useCalendar } from "../context/CalendarContext";
import { format } from "date-fns";
import styles from "../styles/calendar.module.css";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1506744626753-1fa44df31c25?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=1000",
];

/**
 * Displays the entire wall calendar page context by composing
 * the HeroSection alongside the CalendarGrid.
 */
export default function CalendarPage() {
  const { currentDate } = useCalendar();
  const imageIndex = currentDate.getMonth() % HERO_IMAGES.length;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.calendarWrapper}>
        <HeroSection heroImage={HERO_IMAGES[imageIndex]} />
        <CalendarGrid />
        <div className={styles.notesSection}>
          <NotesPanel monthKey={format(currentDate, "yyyy-MM")} />
        </div>
      </div>
    </div>
  );
}
