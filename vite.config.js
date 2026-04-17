import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// For GitHub Pages, set base to "/<repo-name>/"
// e.g. if repo is https://github.com/youruser/black-swan-monitor
// use: base: "/black-swan-monitor/"
export default defineConfig({
  plugins: [react()],
  base: "./",
  server: { port: 5173, open: true },
});
