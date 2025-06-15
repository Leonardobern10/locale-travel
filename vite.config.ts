import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "./src"),
      "@images": path.resolve(__dirname, "src/assets/img"),
      "@data": path.resolve(__dirname, "src/data"),
      "@types": path.relative(__dirname, "./src/types"),
      "@components": path.relative(__dirname, "src/components"),
    },
  },
});
