import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Carpathians', // для GitHub Pages
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
    }),
  ],
 
})