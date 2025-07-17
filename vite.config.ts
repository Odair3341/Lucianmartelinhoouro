import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    port: 80,
    strictPort: true,
    cors: true,
    allowedHosts: [
      'oliveira-martelinho-sistema.onrender.com'
    ]
  }
})
