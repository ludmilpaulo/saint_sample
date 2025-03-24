import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
        quicksand: ["Quicksand"],
        montserrat: ["Montserrat"],
        monoton: ["Monoton"],
        "josefin-sans": ["Josefin Sans"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
