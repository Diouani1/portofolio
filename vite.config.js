import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Update this to 'dist'
  },
  publicDir: "dist", // Specify the directory containing your static assets (CSS files)
  css: {
    modules: true, // Disable CSS modules unless you need them
  },
});
