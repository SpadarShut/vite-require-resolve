import { defineConfig } from 'vite'
// import { theme } from './src/theme'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        // modifyVars: theme,
      }
    }
  }
})
