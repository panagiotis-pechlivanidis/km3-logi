import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { copyFileSync } from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
   base: '/',
   
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        // Copy index.html to 404.html for GitHub Pages SPA routing
        try {
          copyFileSync(path.resolve(__dirname, 'dist/index.html'), path.resolve(__dirname, 'dist/404.html'));
          console.log('✓ Copied index.html to 404.html for GitHub Pages');
        } catch (err) {
          console.warn('Could not copy index.html to 404.html:', err);
        }
      }
    }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
