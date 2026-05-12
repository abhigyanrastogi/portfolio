import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/",
  preview: {
    port: 5173,
    cors: true,
  },
  plugins: [
    react(),
    federation({
      name: "portfolio_app",
      remotes: {
        pingPongRemote:{
          type: "module",
          name: "pingPongRemote",
          entry: "http://localhost:5174/remoteEntry.js",
        }
      },
    }),
  ],
});
