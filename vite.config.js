import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Ensures the server is accessible from other devices
    port: 5173, // Use your desired port (default for Vite is 5173)
  },
});