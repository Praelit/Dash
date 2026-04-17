/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  // Safelist dynamic color classes built via string concat (bg-${tone}-500 etc.)
  safelist: [
    { pattern: /(bg|text|from|to|border|via)-(emerald|rose|amber|orange|yellow|indigo|violet|fuchsia|blue|cyan|sky|teal|lime|pink|slate)-(50|100|200|300|400|500|600|700|800|900)/ },
  ],
  theme: { extend: {} },
  plugins: [],
};
