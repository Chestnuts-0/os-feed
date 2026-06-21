import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" 让构建产物用相对路径，适配 GitHub Pages 子路径部署
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
