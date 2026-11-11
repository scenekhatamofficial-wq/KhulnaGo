import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // APK বিল্ডে স্ক্রিন সাদা হওয়া প্রতিরোধ করে
})