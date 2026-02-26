import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/Portfolio_2/" : "/", 
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "src/scss/_variables.scss";`,
      },
    },
  },
}));
