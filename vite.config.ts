import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // パスのエイリアス設定
      '@css': '/src/styles/css',
      '@pages': '/src/pages',
      '@components': '/src/components',
      '@assets': '/src/assets',
    },
  },
})
