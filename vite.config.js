import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Yeh line zaroori hai. Yeh batata hai ki website root par deploy hogi.
  base: '/', 
})