import { useLocalStorage } from "./useLocalStorage";

/**
 * Tracks and saves plain text values across different scoping keys (Day, Range, Month).
 * Saves to local browser storage seamlessly.
 */
export function useNotes() {
  const [notes, setNotes] = useLocalStorage("calendar_all_notes", {});

  /** Retrieves note. Defaults to empty string if missing */
  const getNote = (key) => notes[key] || "";

  /**
   * Sets text locally under given key.
   * Cleans up keys automatically when text goes completely empty.
   */
  const setNote = (key, text) => {
    setNotes((prev) => {
      if (!text) {
        const newNotes = { ...prev };
        delete newNotes[key];
        return newNotes;
      }
      return { ...prev, [key]: text };
    });
  };

  return { notes, getNote, setNote };
}
