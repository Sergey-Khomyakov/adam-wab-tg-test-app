import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl';

let version = 1;

// https://vitejs.dev/config/
export default defineConfig({
  base: '/adam-wab-tg-test-app/',
  plugins: [
    // Allows using React dev server along with building a React application with Vite.
    // https://npmjs.com/package/@vitejs/plugin-react-swc
    react(),
    // Allows using the compilerOptions.paths property in tsconfig.json.
    // https://www.npmjs.com/package/vite-tsconfig-paths
    tsconfigPaths(),
    // Allows using self-signed certificates to run the dev server using HTTPS.
    // https://www.npmjs.com/package/@vitejs/plugin-basic-ssl
    basicSsl(),
    {
      name: 'version-plugin',
      enforce: 'post',
      transform(code, id) {
        if (id.endsWith('.js') || id.endsWith('.css')) {
          // изменять версию файла
          const newVersion = `v${version++}`;
          code = code.replace(/v\d+/, newVersion);
        }
        return code;
      },
    },
  ],
  publicDir: './public',
  server: {
    // Exposes your dev server and makes it accessible for the devices in the same network.
    host: true,
  },
});

