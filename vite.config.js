import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  preview: {
    // Configure preview server to handle SPA routing
    // This ensures all routes fall back to index.html
    port: 4173,
    strictPort: false,
  },
  server: {
    // Ensure dev server handles SPA routing
    // Vite dev server handles this automatically, but we can be explicit
    port: 5173,
    strictPort: false,
  },
})
