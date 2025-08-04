import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import netlify from "@netlify/vite-plugin";

export default defineConfig({
  plugins: [react(), netlify()],
  server: {
    headers: {
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
        assetFileNames: 'assets/[name].[ext]' // Ensure proper asset naming
      }
    }
  }
})