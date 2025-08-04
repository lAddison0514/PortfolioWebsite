import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import netlify from "@netlify/vite-plugin";

export default defineConfig({
  plugins: [react(), netlify()],
  server: {
    headers: {
      'Content-Type': 'application/javascript',
      'X-Content-Type-Options': 'nosniff' // Add this security header
    },
    fs: {
      strict: true // Ensure proper file serving
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add TypeScript extensions
    alias: {
      '@': '/src' // Add path alias if needed
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})