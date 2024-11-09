/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan your React components for classes
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3A6F5C", // Green for primary elements
        secondary: "#FFC107", // Gold for secondary highlights (e.g., buttons)
        accent: "#2C2C2C", // Dark gray for text and icons
        background: "#F7F7F7", // Light off-white for page background
      },
    },
  },
  plugins: [],
};
