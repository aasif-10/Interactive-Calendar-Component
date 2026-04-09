# Calendar Application

A custom-built React calendar interface designed with a premium, physical wall-calendar aesthetic.

## Features

- **Holiday Highlighter:** Automatically detects and highlights key public holidays directly on the grid to mimic traditional red-ink calendar dates.
- **Wall Calendar Aesthetic:** Custom CSS-only spiral bindings and paper-like elements simulate a physical desk calendar.
- **Dynamic Hero Images:** The sidebar displays a distinct, high-quality photograph for each month of the year.
- **Light & Dark Mode:** Fully functional theme toggling system using native CSS variables.
- **Interactive Grid:** View full month spreads with precise date manipulation and selection logic.
- **Date Range Selection:** Support for clicking and selecting multiple contiguous dates across the calendar.
- **Integrated Notes:** A dedicated contextual panel to view, add, and manage notes for selected dates.
- **Responsive Architecture:** A 3-column layout that scales gracefully and adapts to different screen sizes.
- **Zero UI Dependencies:** All components are built from scratch using raw React and CSS Modules, without relying on external component libraries.

## Design Choices

- Architecture: The interface is organized into a rigid 3-column layout consisting of a side hero navigation section, the central interactive calendar grid, and a contextual notes panel. This separates concerns and ensures scaling on desktop environments.
- Aesthetic: The visual theme mimics a physical paper wall calendar. The top spiral binding is generated entirely via CSS radial and linear gradients to simulate wire coils and punched holes without relying on external image assets. The grid elements use sharp radii and dedicated borders to mimic paper cells rather than floating digital UI elements.
- Styling: Written entirely using CSS Modules and native CSS variables. No utility-class frameworks like Tailwind were used. This provides strict selector scoping for components and enables toggling between light and dark modes at the global level.
- State Management: Leverages the React Context API to manage global states globally, such as selected date ranges, user notes, and active styling themes, avoiding unnecessary prop-drilling.
- Data Logic: Relies strictly on date-fns for robust date manipulation and difference calculations without importing heavy all-in-one UI packages.

## Setup Instructions

Ensure you have Node.js installed, then follow these steps to run the application locally.

1. Install dependencies
   Run the following command in the root directory:

`	ext
npm install
`

2. Start the development server
   Launch the Vite development server by running:

`	ext
npm run dev
`

3. View the application
   The terminal will output a local URL (typically http://localhost:5173 or http://localhost:5174). Open this URL in your web browser.

4. Build for production
   To create a production-ready build, run:

`	ext
npm run build
`
