import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      tablet: "768px",
      desktop: "1024px",
    },
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
        heading: ["Big Shoulders Display", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#151515",
        accent: "#d5966c",
        subtle: "#444444",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      return addComponents({
        '[class^="text-heading"]': {
          fontFamily: "theme('fontFamily.heading')",
          fontWeight: "900",
          textTransform: "uppercase",
        },
        '[class^="text-body"]': {
          fontWeight: "300",
        },
        ".text-heading-xl": {
          fontSize: "60px",
          lineHeight: "55px",
          ['@media (min-width: theme("screens.tablet"))']: {
            fontSize: "70px",
            lineHeight: "65px",
          },
          ['@media (min-width: theme("screens.desktop"))']: {
            fontSize: "96px",
            lineHeight: "88px",
          },
        },
        ".text-heading-l": {
          fontSize: "50px",
          lineHeight: "45px",
          ['@media (min-width: theme("screens.tablet"))']: {
            fontSize: "55px",
            lineHeight: "50px",
          },
          ['@media (min-width: theme("screens.desktop"))']: {
            fontSize: "70px",
            lineHeight: "70px",
          },
        },
        ".text-heading-m": {
          fontSize: "50px",
          lineHeight: "45px",
          ['@media (min-width: theme("screens.desktop"))']: {
            fontSize: "60px",
            lineHeight: "50px",
          },
        },
        ".text-heading-s": {
          fontSize: "32px",
          lineHeight: "32px",
          ['@media (min-width: theme("screens.desktop"))']: {
            fontSize: "36px",
            lineHeight: "36px",
          },
        },
        ".text-body-m": {
          fontSize: "18px",
          lineHeight: "28px",
          ['@media (min-width: theme("screens.desktop"))']: {
            fontSize: "22px",
            lineHeight: "32px",
          },
        },
        ".text-body-s": {
          fontSize: "16px",
          lineHeight: "26px",
          ['@media (min-width: theme("screens.desktop"))']: {
            fontSize: "18px",
            lineHeight: "28px",
          },
        },
      });
    }),
  ],
};
