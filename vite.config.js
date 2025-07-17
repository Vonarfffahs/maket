import { defineConfig } from "vite";

export default defineConfig({
  // Корневая директория проекта
  root: ".",

  // Директория для сборки
  build: {
    outDir: "dist",
    assetsDir: "assets",
    // Оптимизация для продакшена
    minify: "terser",
    rollupOptions: {
      output: {
        // Разделение CSS и JS
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff2?|eot|ttf|otf/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },

  // Настройки сервера разработки
  server: {
    port: 3000,
    open: true,
    host: true,
  },

  // Публичная директория для статических файлов
  publicDir: "public",

  // Алиасы для путей
  resolve: {
    alias: {
      "@": "/src",
      "@assets": "/src/assets",
    },
  },

  // Поддержка TypeScript
  esbuild: {
    target: "es2020",
  },
});
