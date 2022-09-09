import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression';


export default defineConfig({
  server: {
    port: 8080,
  },
  plugins: [viteCompression()],
})