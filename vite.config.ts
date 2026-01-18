import { reactRouter } from '@react-router/dev/vite';
import stylex from '@stylexjs/unplugin';
import fs from 'node:fs';
import path from 'node:path';
// import path from 'node:path';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import babel from 'vite-plugin-babel';
// import tsconfigPaths from 'vite-tsconfig-paths';

// Workaround plugin to fix React Router's stale asset references
function fixReactRouterAssets(): Plugin {
  return {
    enforce: 'post',
    name: 'fix-react-router-assets',
    writeBundle() {
      // Read the server manifest to check for stale references
      const serverManifestPath = path.join(
        process.cwd(),
        'build/server/.vite/manifest.json',
      );

      if (fs.existsSync(serverManifestPath)) {
        const manifest = JSON.parse(
          fs.readFileSync(serverManifestPath, 'utf8'),
        );
        const serverBuild = manifest['virtual:react-router/server-build'];

        if (serverBuild?.assets) {
          // Get actual generated CSS files
          const serverAssetsDir = path.join(
            process.cwd(),
            'build/server/assets',
          );
          const actualFiles = fs.existsSync(serverAssetsDir)
            ? fs.readdirSync(serverAssetsDir)
            : [];
          const actualStylexCss = actualFiles.find((f) =>
            f.startsWith('stylex-'),
          );

          // Update the manifest with correct asset reference
          if (actualStylexCss) {
            serverBuild.assets = [`assets/${actualStylexCss}`];
            fs.writeFileSync(
              serverManifestPath,
              JSON.stringify(manifest, null, 2),
            );
          }
        }
      }
    },
  };
}

export default defineConfig({
  // build: {
  //   minify: 'esbuild',
  //   // Optimize chunk splitting
  //   rollupOptions: {
  //     output: {
  //       manualChunks: (id) => {
  //         // Only chunk modules that aren't external
  //         if (id.includes('node_modules')) {
  //           if (id.includes('i18next') || id.includes('react-i18next')) {
  //             return 'i18n';
  //           }
  //           if (id.includes('@stylexjs')) {
  //             return 'stylex';
  //           }
  //           // Don't manually chunk react/react-dom as they're handled by React Router
  //           return 'vendor';
  //         }
  //       },
  //     },
  //   },
  //   // Enable source maps for production debugging (optional)
  //   sourcemap: false,
  //   // Optimize build performance
  //   target: 'es2022',
  // },
  // Optimize dependency pre-bundling
  // optimizeDeps: {
  //   include: ['react', 'react-dom', 'react-router', 'i18next', 'react-i18next'],
  // },
  plugins: [
    stylex.vite({
      aliases: {
        '@/*': [fileURLToPath(new URL('app/*', import.meta.url))],
      },
      dev: process.env.NODE_ENV === 'development',
      fileName: 'stylex.css', // Use stable filename instead of hash
      useCSSLayers: true,
    }),
    fixReactRouterAssets(),
    reactRouter(),
    babel({
      babelConfig: {
        plugins: [['babel-plugin-react-compiler']],
        presets: ['@babel/preset-typescript'], // if you use TypeScript
      },
      filter: /\.[jt]sx?$/,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('app', import.meta.url)),
    },
  },
});
