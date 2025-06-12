/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./layouts/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./sections/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "var(--black)",
        orange: "var(--orange)",
        gray: "var(--gray)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
      },
      fontFamily: {
        title: ["var(--font-title)"],
        body: ["var(--font-body)"],
      },
      animation: {
        "scroll-infinite": "var(--animate-scroll-infinite)",
      },
      keyframes: {
        "scroll-infinite": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-400%)" },
        },
      },
    },
  },
  plugins: [],
};
