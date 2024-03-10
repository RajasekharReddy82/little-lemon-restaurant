import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    host: "localhost",
    open: true,
    port: 3000,
  },
  preview: {
    host: "localhost",
    open: true,
    port: 3000,
  },
  build: {
    outDir: "build",
  },
  plugins: [react()],
});
