// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/',
// });

import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), ''); // '' loads all env variables

  return {
    plugins: [react()],
    base: '/',
    define: {
      'process.env.REACT_APP_GOOGLE_MAP_API_KEY': JSON.stringify(env.REACT_APP_GOOGLE_MAP_API_KEY),
    },
  };
});
