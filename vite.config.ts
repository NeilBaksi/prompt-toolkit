import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base must match the GitHub repo name for Pages deployment:
// https://<user>.github.io/prompt-toolkit/
export default defineConfig({
  plugins: [react()],
  base: '/prompt-toolkit/',
})
