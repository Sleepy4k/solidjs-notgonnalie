import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { dirname, resolve } from 'path';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: '',
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    devtools({
      /* features options - all disabled by default */
      autoname: true, // e.g. enable autoname
    }),
    solidPlugin(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@models': resolve(__dirname, './src/models'),
      '@assets': resolve(__dirname, './src/assets'),
      '@consts': resolve(__dirname, './src/consts'),
      '@pages': resolve(__dirname, './src/pages'),
      '@enums': resolve(__dirname, './src/enums'),
      '@interfaces': resolve(__dirname, './src/interaface'),
      '@contexts': resolve(__dirname, './src/contexts'),
      '@utils': resolve(__dirname, './src/utils'),
      '@services': resolve(__dirname, './src/services'),
      '@components': resolve(__dirname, './src/components'),
      '@layouts': resolve(__dirname, './src/layouts')
    }
  },
  server: {
    host: true,
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
