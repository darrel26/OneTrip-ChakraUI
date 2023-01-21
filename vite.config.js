import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://darrel26.github.io/OneTrip-ChakraUI/',
  plugins: [react()],
});
