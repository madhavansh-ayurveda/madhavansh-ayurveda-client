# AI Development Rules

This document outlines the tech stack and development conventions for this project. Adhering to these rules ensures consistency, maintainability, and efficiency.

## Tech Stack Overview

This is a modern web application built with the following technologies:

-   **Framework**: React (v18) with Vite as the build tool.
-   **Language**: TypeScript for static typing and improved developer experience.
-   **Styling**: Tailwind CSS for a utility-first styling approach.
-   **UI Components**: shadcn/ui, a collection of beautifully designed, accessible components built on Radix UI.
-   **Routing**: React Router (`react-router-dom`) for client-side navigation.
-   **State Management**: Redux Toolkit with Redux Persist for robust and persistent global state.
-   **Animations**: Framer Motion for fluid and complex UI animations.
-   **API Communication**: Axios for making HTTP requests to the backend.
-   **Icons**: Lucide React for a consistent and clean set of icons.
-   **Notifications**: React Hot Toast for user-facing alerts and notifications.

## Library Usage and Conventions

To maintain consistency, please follow these rules when adding or modifying features:

### UI and Styling

-   **Component Library**: **Always** use components from **shadcn/ui** (`@/components/ui`) for common UI elements like buttons, forms, dialogs, cards, etc. Do not reinvent the wheel.
-   **Styling**: Use **Tailwind CSS** utility classes directly in your components. For conditional classes, use the `cn` helper function from `@/lib/utils.ts`. Avoid writing custom CSS files unless absolutely necessary for complex, unique styles.
-   **Icons**: Exclusively use icons from the **Lucide React** library. This ensures visual consistency across the application.

### Application Logic

-   **Routing**: All client-side routes should be managed using **React Router**. Define main page routes within `src/App.tsx`. Use `<Link>` for navigation between pages.
-   **State Management**:
    -   For global application state (e.g., user authentication data), use **Redux Toolkit**.
    -   For state local to a single component or its immediate children, use React's `useState` or `useReducer` hooks.
-   **API Requests**: All communication with the backend API must be done using the pre-configured **Axios** instance located at `src/api/axios.ts`. This ensures consistent handling of base URLs and authentication tokens.

### User Experience

-   **Animations**: Use **Framer Motion** for page transitions and complex component animations. The `PageTransition` component is available for consistent page loads.
-   **Notifications**: Use **React Hot Toast** to provide feedback to the user (e.g., on successful form submission or API errors). A `<Toaster>` is already set up in `App.tsx`.

### Dates and Times

-   **Date Manipulation**: Use the **date-fns** library for all date formatting and calculations.
-   **Date Picking**: Use the `Calendar` component from shadcn/ui, which is built upon `react-day-picker`.