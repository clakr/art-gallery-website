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
        ".text-heading-xl": {
          fontFamily: "theme('fontFamily.heading')",
          fontWeight: "900",
          textTransform: "uppercase",
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
        ".text-heading-m": {
          fontFamily: "theme('fontFamily.heading')",
          fontWeight: "900",
          textTransform: "uppercase",
          fontSize: "50px",
          lineHeight: "45px",
          ['@media (min-width: theme("screens.desktop"))']: {
            fontSize: "60px",
            lineHeight: "50px",
          },
        },
        ".text-body-m": {
          fontWeight: "300",
          fontSize: "18px",
          lineHeight: "28px",
          textWrap: "pretty",
          ['@media (min-width: theme("screens.desktop"))']: {
            fontSize: "22px",
            lineHeight: "32px",
          },
        },
      });
    }),
  ],
};
