import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages serves a project site from /<repo>/, so built asset URLs need
  // that prefix. Dev keeps serving from / so localhost URLs stay short.
  base: command === 'build' ? '/future-capital-marketing-website/' : '/',
}))
