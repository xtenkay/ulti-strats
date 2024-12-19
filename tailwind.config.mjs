import { t } from './dist/_astro/client.DSlHJlSR';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#B068FF",
        "primary-light": "#FFDCED",
        secondary: "#00D7B0",
        "secondary-light": "#B8FFF3",
        highlighter: "#FAF77D",
        "highlighter-dark": "#C5C207",
        "slate-900": "#18181B",
        "slate-800": "#1B1B1F",
        "slate-700": "#202127",
        "slate-600": "#27272A",
        "slate-500": "#2B2F36",
        "slate-400": "#414853",
      },
    },
  },
  plugins: [require(`precss`), require(`autoprefixer`)],
};
