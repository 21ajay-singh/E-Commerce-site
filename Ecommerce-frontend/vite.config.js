import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/

// const ngrokHost= '';

export default defineConfig({
  plugins: [ tailwindcss(), react()],
  // server: {
  //   // This tells Vite which external hosts are allowed to access the server
  //   allowedHosts: [
  //     ngrokHost,   // <--- Add your specific Ngrok hostname here
  //     'localhost', // Always good to keep localhost
  //     '127.0.0.1',
  //     // You can also use a wildcard to allow all subdomains of ngrok-free.app (use with caution)
  //     // '*.ngrok-free.app' 
  //   ],
  //   // You may also need this for public access:
  //   host: '0.0.0.0' 
  // },
})
