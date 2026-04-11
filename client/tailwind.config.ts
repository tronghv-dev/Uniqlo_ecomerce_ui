import type { Config } from "tailwindcss";

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        bg: "var(--color-bg)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        primary: "var(--color-primary)",
        "primary-hover": "var(--color-primary-hover)",
        success: "var(--color-success)",
        error: "var(--color-error)",
      },
      fontFamily: {
        sans: [
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        md: "var(--text-md)",
        lg: "var(--text-lg)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
      },
      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
        xl: "var(--space-xl)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      borderColor: {
        DEFAULT: "var(--color-border)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
      },
      dropShadow: {
        "text-on-media": "var(--drop-shadow-text-on-media)",
        "ui-on-media": "var(--drop-shadow-ui-on-media)",
      },
      maxWidth: {
        container: "var(--container-width)",
      },
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },

  plugins: [],
} satisfies Config;

export default config;
