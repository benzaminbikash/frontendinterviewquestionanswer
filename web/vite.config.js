import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://programminginterviewquestionandanswer.vercel.app",
  //       changeOrigin: true, // Optional, for better handling of cross-origin requests
  //       rewrite: (path) => path.replace(/^\/api/, ""), // Remove the '/api' prefix
  //     },
  //   },
  // },
  plugins: [react()],
});
