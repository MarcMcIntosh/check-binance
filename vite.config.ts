/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const dev = command !== "build" ? {} : { "import.meta.vitest": "undefined" };
  return {
    define: {
      ...dev,
    },
    plugins: [react()],
    test: {
      includeSource: ["src/**/*.{js,ts}"],
      globals: true,
      environment: "jsdom",
      // you might want to disable it, if you don't have tests that rely on CSS
      // since parsing CSS is slow
      css: true,
      setupFiles: ["./src/utils/test-setup.ts"],
    },
  };
});
