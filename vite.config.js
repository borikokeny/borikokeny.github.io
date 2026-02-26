import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: "/", 
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/scss/_variables.scss";`,
      },
    },
  },
}));
