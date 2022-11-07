import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/ how about this?
export default defineConfig({
  plugins: [react()],
});
