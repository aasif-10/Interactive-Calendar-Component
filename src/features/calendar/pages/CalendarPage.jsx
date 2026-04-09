import React from "react";
import HeroSection from "../components/HeroSection";
import CalendarGrid from "../components/CalendarGrid";
import NotesPanel from "../components/NotesPanel";
import { useCalendar } from "../context/CalendarContext";
import { format } from "date-fns";
import styles from "../styles/calendar.module.css";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1774637777045-e7390fc657e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D", // Jan: Winter/Snow
  "https://images.unsplash.com/photo-1445543949571-ffc3e0e2f55e?auto=format&fit=crop&q=80&w=1000", // Feb: Frost/Cozy
  "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=1000", // Mar: Early Spring
  "https://images.unsplash.com/photo-1774871111668-e3a76bb786ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D", // Apr: Spring Greenery
  "https://images.unsplash.com/photo-1774931112148-7ca296d596e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDB8fHxlbnwwfHx8fHw%3D", // May: Flowers
  "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?auto=format&fit=crop&q=80&w=1000", // Jun: Sunny Beach
  "https://images.unsplash.com/photo-1774477178005-bff823e43be8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1MHx8fGVufDB8fHx8fA%3D%3D", // Jul: Palm Trees
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1000", // Aug: Late Summer
  "https://images.unsplash.com/photo-1440847899694-90043f91c7f9?auto=format&fit=crop&q=80&w=1000", // Sep: Early Autumn
  "https://images.unsplash.com/photo-1774637184972-6a12518f12f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4MXx8fGVufDB8fHx8fA%3D%3D", // Oct: Fall Leaves
  "https://images.unsplash.com/photo-1520262454473-a1a82276a574?auto=format&fit=crop&q=80&w=1000", // Nov: Moody Fog
  "https://images.unsplash.com/photo-1775458014077-f60db9657a52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMTV8fHxlbnwwfHx8fHw%3D", // Dec: Winter Mountains
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
