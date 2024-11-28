import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [react(),
    federation({
      name: "app",
      remotes: {
        remoteApp: "http://localhost:5002/assets/remoteEntry.js",
        
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: {
    port: 5000, 
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})
