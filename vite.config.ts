import { reactRouter } from '@react-router/dev/vite';
import path from 'node:path';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import styleX from 'vite-plugin-stylex';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    minify: 'esbuild',
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Only chunk modules that aren't external
          if (id.includes('node_modules')) {
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'i18n';
            }
            if (id.includes('@stylexjs')) {
              return 'stylex';
            }
            // Don't manually chunk react/react-dom as they're handled by React Router
            return 'vendor';
          }
        },
      },
    },
    // Enable source maps for production debugging (optional)
    sourcemap: false,
    // Optimize build performance
    target: 'es2022',
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router', 'i18next', 'react-i18next'],
  },
  plugins: [
    reactRouter(),
    babel({
      babelConfig: {
        plugins: [['babel-plugin-react-compiler']],
        presets: ['@babel/preset-typescript'], // if you use TypeScript
      },
      filter: /\.[jt]sx?$/,
    }),
    tsconfigPaths(),
    // StyleX plugin - version warning is acceptable
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    styleX() as any,
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './app'),
    },
  },
});
