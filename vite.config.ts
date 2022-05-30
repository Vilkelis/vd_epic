import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import EnvironmentPlugin from 'vite-plugin-environment'
import tsconfigPaths from 'vite-tsconfig-paths'

// @ts-ignore
import { envList } from './env.config'

const sourcemapEnabled = process.env.VITE_SOURCEMAP_ENABLED === 'true'

export default defineConfig({
  build: {
    outDir: 'build',
    sourcemap: sourcemapEnabled,
  },
  plugins: [
    react(),
    tsconfigPaths(),
    EnvironmentPlugin(envList as unknown as string[]),
  ],
  resolve: {
    alias: {
      api: resolve(__dirname, '/src/api'),

      // TODO - catch missed asset by linter:
      assets: resolve(__dirname, '/assets'),

      components: resolve(__dirname, '/src/components'),
      constants: resolve(__dirname, '/src/constants'),
      contexts: resolve(__dirname, '/src/contexts'),
      domain: resolve(__dirname, '/src/domain'),
      hooks: resolve(__dirname, '/src/hooks'),
      models: resolve(__dirname, '/src/models'),
      utils: resolve(__dirname, '/src/utils'),
    },
  },
  // @ts-ignore
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/utils/test/setup.ts',
  },
})
