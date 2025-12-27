// vite.config.ts
import { defineConfig } from "vite"; // Import the Vite config helper
import path from "path"; // Helps us create absolute paths for cleaner imports

export default defineConfig({
  // Root directory of your source code (default is project root, but we keep it in "src")
  root: "src",

  // Build configuration
  build: {
    outDir: "../dist", // Output directory for production build (outside src)
    sourcemap: true, // Helps with debugging after build
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Entry point of your framework
      name: "MyFramework", // Global name when included via <script>
      fileName: (format) => `my-framework.${format}.js`, // Output file naming
    },
    rollupOptions: {
      external: [], // Add external dependencies here (e.g., react, vue)
      output: {
        globals: {}, // Define globals for external deps
      },
    },
  },

  // Plugins can extend Vite (like React, Vue, etc.)
  plugins: [],

  // Resolve config helps simplify import paths
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // So you can do `import x from "@/utils/x"`
    },
  },

  // Dev server options (when running `vite dev`)
  server: {
    port: 3000, // Local dev server runs on http://localhost:3000
    open: true, // Auto-open browser on start
  },
});
