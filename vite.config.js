import { defineConfig } from "vite";

// base "./" keeps every asset path relative, so dist/ works from any host
// or sub-folder (S3/Amplify, GitHub Pages, a preview sandbox).
export default defineConfig({
  base: "./",
  server: { port: 3000 },
  build: {
    target: "es2020",
    cssCodeSplit: false,
    assetsInlineLimit: 0,
  },
});
