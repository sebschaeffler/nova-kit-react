import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "dark",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsla(var(--primary)/ <alpha-value>)",
          foreground: "hsla(var(--primary-foreground)/ <alpha-value>)",
          hover: "hsla(var(--primary-hover)/ <alpha-value>)",
          hoverText: "hsla(var(--primary-hover)/ <alpha-value>)",
          disabled: "hsla(var(--primary-disabled)/ <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsla(var(--secondary)/ <alpha-value>)",
          foreground: "hsla(var(--secondary-foreground)/ <alpha-value>)",
          hover: "hsla(var(--secondary-hover)/ <alpha-value>)",
          hoverText: "hsla(var(--secondary-hover-text)/ <alpha-value>)",
          disabled: "hsla(var(--secondary-disabled)/ <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsla(var(--destructive)/ <alpha-value>)",
          foreground: "hsla(var(--destructive-foreground)/ <alpha-value>)",
          hover: "hsla(var(--destructive-hover)/ <alpha-value>)",
          hoverText: "hsla(var(--destructive-hover-text)/ <alpha-value>)",
          disabled: "hsla(var(--destructive-disabled)/ <alpha-value>)",
        },
        success: {
          DEFAULT: "hsla(var(--success)/ <alpha-value>)",
          foreground: "hsla(var(--success-foreground)/ <alpha-value>)",
          hover: "hsla(var(--success-hover)/ <alpha-value>)",
          hoverText: "hsla(var(--success-hover-text)/ <alpha-value>)",
          disabled: "hsla(var(--success-disabled)/ <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsla(var(--muted)/ <alpha-value>)",
          foreground: "hsla(var(--muted-foreground)/ <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsla(var(--accent)/ <alpha-value>)",
          foreground: "hsla(var(--accent-foreground)/ <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsla(var(--popover)/ <alpha-value>)",
          foreground: "hsla(var(--popover-foreground)/ <alpha-value>)",
        },
        card: {
          DEFAULT: "hsla(var(--card)/ <alpha-value>)",
          foreground: "hsla(var(--card-foreground)/ <alpha-value>)",
        },
        // Nova
        "underline-link": {
          DEFAULT: "hsla(var(--underline-link)/ <alpha-value>)",
          hover: "hsla(var(--underline-link-hover)/ <alpha-value>)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
} satisfies Config;
