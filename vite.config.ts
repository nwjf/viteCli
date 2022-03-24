import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  envDir: '.env', // 环境变量目录
  envPrefix: 'PODCAST', // env前缀，此前缀的变量才会变识别
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    host: '0.0.0.0',
    port: 2000,
  },
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
    }),
  ],
  build: {
    // 包大小限制默认500kb，调整到1000kb
    chunkSizeWarningLimit: 1000,

    // 代码分割
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            const target = id.includes('node_modules/.pnpm/')
              ? 'node_modules/.pnpm/'
              : 'node_modules/';
            return id
              .toString()
              .split(target)[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
})
