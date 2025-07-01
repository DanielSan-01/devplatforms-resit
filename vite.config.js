import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',
  base: '/devplatforms-resit/',
  build: {
    outDir: 'dist'
  }
}) 