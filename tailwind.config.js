/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          honeymilk: "#f6beb0",     // Honey Milk
          yellow: "#ffe3b3",    // Light Yellow
          dreamy: "#cdb4db",    // Light Dreamy
          fairy: "#ffc8dd",     // Light Fairy
          crystal: "#bde0fe",   // Light Crystal
        },
        dark: {
          plum: "#5a189a",      // Dark Plum
          indigo: "#3c096c",    // Dark Indigo
          orchid: "#7b2cbf",    // Dark Orchid
          peach: "#ff6f61",     // Dark Peach
          honey: "#ffb347",     // Dark Honey
          yellow: "#ffd60a",    // Dark Yellow
        },
      },
       backgroundImage: {
        'homepage-gradient': 'linear-gradient(135deg, #ffe3b3 0%, #bde0fe 100%)',
        'homepage-gradient-dark': 'linear-gradient(135deg, #3c096c 0%, #5a189a 100%)',
      }
    },
  },
  plugins: [],
};
