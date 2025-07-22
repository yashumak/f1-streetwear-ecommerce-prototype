// ✅ IMPROVEMENT: Centralized design system for consistency and maintainability
export const designTokens = {
  colors: {
    racing: {
      primary: "#dc2626",
      secondary: "#991b1b",
      accent: "#ef4444",
    },
    neutral: {
      black: "#000000",
      gray: {
        900: "#111827",
        800: "#1f2937",
        700: "#374151",
        600: "#4b5563",
        400: "#9ca3af",
        300: "#d1d5db",
      },
      white: "#ffffff",
    },
  },
  spacing: {
    section: "py-16 md:py-24",
    container: "max-w-7xl mx-auto px-4",
    card: "p-6 md:p-8",
  },
  typography: {
    heading: "font-black tracking-tight",
    body: "font-medium",
    button: "font-bold tracking-wide",
  },
} as const
