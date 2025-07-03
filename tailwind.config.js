/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        foreground: "var(--color-foreground)",
        surface: {
          DEFAULT: "var(--color-surface)",
          100: "var(--color-surface-100)",
          200: "var(--color-surface-200)",
          300: "var(--color-surface-300)",
          400: "var(--color-surface-400)",
          500: "var(--color-surface-500)",
          600: "var(--color-surface-600)",
          700: "var(--color-surface-700)",
          800: "var(--color-surface-800)",
          900: "var(--color-surface-900)",
          light: {
            DEFAULT: "var(--color-surface-light)",
            100: "var(--color-surface-light-100)",
            200: "var(--color-surface-light-200)",
            300: "var(--color-surface-light-300)",
            400: "var(--color-surface-light-400)",
            500: "var(--color-surface-light-500)",
            600: "var(--color-surface-light-600)",
            700: "var(--color-surface-light-700)",
            800: "var(--color-surface-light-800)",
          },
        },
        primary: {
          DEFAULT: "var(--color-primary)",
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
          light: {
            DEFAULT: "var(--color-primary-light)",
            100: "var(--color-primary-light-100)",
            200: "var(--color-primary-light-200)",
            300: "var(--color-primary-light-300)",
            400: "var(--color-primary-light-400)",
            500: "var(--color-primary-light-500)",
            600: "var(--color-primary-light-600)",
            700: "var(--color-primary-light-700)",
            800: "var(--color-primary-light-800)",
          },
        },
      },
    },
    container: {
                center: true,
                padding: "1rem",
                screens: {
                    sm: "576px",
                    md: "768px",
                    lg: "992px",
                    xl: "1200px",
                    "2xl": "1400px",
                },
            },
    plugins: [],
  }
}
