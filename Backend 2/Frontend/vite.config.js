import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    proxy:{
      '/api':'http://localhost:4000',
    }

    // this will not only append it will create a proxy that the request coming is from this url only
  },
  plugins: [react()],
})


