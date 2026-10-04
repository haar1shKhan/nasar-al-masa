import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bone: "#F2EFE9",
        stone: { DEFAULT: "#E5E0D6", deep: "#D3CDBF" },
        ink: "#151514",
        charcoal: "#262624",
        smoke: "#6E6B64",
        accent: "#E8891D",
      },
      borderRadius: { DEFAULT: "0", sm: "0", md: "0", lg: "0", xl: "0" },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      spacing: {
        // Section rhythm
        "section": "clamp(6rem, 14vw, 13rem)",
        "section-sm": "clamp(4rem, 8vw, 7rem)",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
