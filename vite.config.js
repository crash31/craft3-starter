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
        // polyfillDynamicImport: 'vite/dynamic-import-polyfill',
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
  server: {
    host: '0.0.0.0',
    https: true,
  },
  // server: {
  //   https: true,
  //   hmr: {
  //     host: 'craft3-starter.test',
  //     port: 3000,
  //     protocol: 'wss'
  //   }
  // },
  resolve: {
    alias: {
      '@': '/src/',
    }
  }
});