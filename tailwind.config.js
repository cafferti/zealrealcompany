/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        forumSerif: ['Forum', 'serif'],
        forum: ['Forum', 'sans-serif'], // Add Forum font family
      },
    },
  },
  plugins: [],
}
