# AI Development Rules

This document outlines the tech stack and development conventions for this project. Adhering to these rules ensures consistency, maintainability, and efficiency.

## Project Goal

To build a modern, light-themed, and interactive clinic management website. The design should feel welcoming, professional, and reflect the natural, health-oriented branding of the clinic.

## Tech Stack Overview

-   **Framework**: React (v18) with Vite as the build tool.
-   **Language**: TypeScript for static typing.
-   **Styling**: Tailwind CSS for a utility-first styling approach.
-   **UI Components**: A combination of **shadcn/ui** for core components and **Aceternity UI** for beautiful, animated, and interactive elements.
-   **Routing**: React Router (`react-router-dom`).
-   **State Management**: Redux Toolkit with Redux Persist.
-   **Animations**: Framer Motion for fluid UI animations.
-   **API Communication**: Axios.
-   **Icons**: Lucide React for a consistent and clean icon set.
-   **Notifications**: React Hot Toast for user-facing alerts.

## Library Usage and Conventions

### UI and Styling

-   **Design Philosophy**: Prioritize a clean, light, and modern user interface. Use animations and interactive elements thoughtfully to enhance user experience without overwhelming it.
-   **Component Libraries**:
    -   Use **shadcn/ui** (`@/components/ui`) for foundational UI elements like buttons, forms, dialogs, and cards. These will be automatically styled by our custom theme.
    -   Use **Aceternity UI** for more complex, visually rich, and animated components (e.g., hero sections, animated grids, text effects).
-   **Styling**: Use **Tailwind CSS** utility classes directly. Use the `cn` helper function from `@/lib/utils.ts` for conditional classes.
-   **Icons**: Exclusively use icons from the **Lucide React** library.

### Color Palette

The color theme is derived directly from the clinic's logo to ensure brand consistency.

-   **Primary (`--primary`)**: A trustworthy blue, used for primary actions, links, and important highlights.
-   **Secondary (`--secondary`)**: A fresh, natural green, used for secondary actions or to highlight health-related information.
-   **Accent (`--accent`)**: A vibrant, sunny yellow, used for call-to-action highlights, informational tags, or decorative elements.
-   **Destructive (`--destructive`)**: A clear red, used for warnings, errors, and deletion confirmations.
-   **Background & Foreground**: A clean, light background (white) with dark text for maximum readability.

### Application Logic & User Experience

-   **Routing**: Manage all client-side routes using **React Router**.
-   **State Management**: Use **Redux Toolkit** for global state and React hooks (`useState`, `useReducer`) for local component state.
-   **API Requests**: Use the pre-configured **Axios** instance at `src/api/axios.ts`.
-   **Animations**: Use **Framer Motion** for custom page transitions and component animations.
-   **Notifications**: Use **React Hot Toast** to provide user feedback.
-   **Dates and Times**: Use **date-fns** for manipulation and the `Calendar` component from shadcn/ui for date picking.