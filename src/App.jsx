import CalendarPage from "./features/calendar/pages/CalendarPage";
import { CalendarProvider } from "./features/calendar/context/CalendarContext";
import { ThemeProvider } from "./features/calendar/context/ThemeContext";
import "./App.css";

/**
 * Top level App layout nesting all standard context providers logically around the UI.
 */
function App() {
  return (
    <ThemeProvider>
      <CalendarProvider>
        <CalendarPage />
      </CalendarProvider>
    </ThemeProvider>
  );
}

export default App;
