/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "768px",
        md: "992px",
        lg: "1200px",
      },
      colors: {
        "main-color": "var(--text-color)",
      
      },
      backgroundColor: {
        "main-background": "var(--parent-background)",
        "seconde-background": "var(--element-background)",
      },
      boxShadowColor: {
        "shadow-color": "var(--shadow-color)",
      },
    },
  },
  plugins: [],
};
