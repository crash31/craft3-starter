import legacy from '@vitejs/plugin-legacy'
import ViteRestart from 'vite-plugin-restart';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: './web/dist/',
    rollupOptions: {
      input: {
        app: '/src/js/app.ts',
        polyfillDynamicImport: 'vite/dynamic-import-polyfill',
      }
    },
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    ViteRestart({
      reload: [
          '/templates/**/*',
      ],
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@': '/src/',
    }
  }
});