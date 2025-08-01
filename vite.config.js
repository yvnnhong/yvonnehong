import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//either i need a trailing slash or i dont???!! idk!!

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/yvonnehong',  // HAS TO MATCH GITHUB REPO NAME + REMOVE TRAILING SLASH!
})
