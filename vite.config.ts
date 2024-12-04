import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/preact-ts/',
  plugins: [preact()],
})
