import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) return 'firebase';
            if (id.includes('framer-motion') || id.includes('recharts')) return 'ui';
            if (id.includes('react')) return 'vendor';
            return 'vendor';
          }
        }
      }
    }
  }
})
