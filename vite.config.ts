import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // 环境变量目录
  envDir: '.env',
  // env前缀，此前缀的变量才会变识别
  envPrefix: 'PODCAST',
  define: {
    'process.env': process.env,
  },
  resolve: {
    // 导入时想要省略的扩展名列表。
    extensions: ['.vue', '.ts', '.js', '.scss', '.css', '.json', '.tsx', '.jsx'],
    // 路径别名，同时./tsconfig.json里面配置ide
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  server: {
    host: '0.0.0.0',
    port: 2000,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "~/styles/element.scss" as *;',
      },
    },
  },
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
    }),
    Components({
      resolvers: [
        ElementPlusResolver({ importStyle: 'sass' }),
      ]
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
