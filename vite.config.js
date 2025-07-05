// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Carpeta de salida para la build
    outDir: 'shop',
    /**
     * (opcional) vacía la carpeta antes de cada build;
     * si prefieres conservar archivos previos, pon false
     */
    emptyOutDir: true
  }
})
