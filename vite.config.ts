import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Icons from 'unplugin-icons/vite'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), Icons({ compiler: 'jsx', jsx: 'react' })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
