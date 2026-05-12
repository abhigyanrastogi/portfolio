import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'portfolio_app',
      remotes: {
        pingPongRemote: '/projects/ping-pong/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
})
