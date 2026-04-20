import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        gocine: 'gocine.html',
        services: 'services.html',
        portfolio: 'portfolio.html',
        contact: 'contact.html',
      }
    }
  }
})
