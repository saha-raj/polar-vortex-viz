export default {
  root: '.',
  publicDir: 'public',
  base: '/polar-vortex-viz/',
  server: {
    port: 5173
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
} 