import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    modulePreload: {
      resolveDependencies(_url, deps) {
        return deps.filter(
          (dep) => !dep.includes("motion-") && !dep.includes("email-")
        );
      },
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react-router-dom")) return "react";
          if (id.includes("node_modules/react-dom")) return "react";
          if (id.includes("node_modules/react/")) return "react";
          if (id.includes("node_modules/framer-motion")) return "motion";
          if (id.includes("node_modules/@emailjs")) return "email";
          if (id.includes("node_modules")) return "vendor";
        },
      },
    },
  },
});