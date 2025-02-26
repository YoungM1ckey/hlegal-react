import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Гарантирует, что пути работают на продакшене
  build: {
    outDir: 'dist', // Vercel ищет index.html в dist
  },
  server: {
    open: true
  }
})
