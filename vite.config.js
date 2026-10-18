import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const hmrClientPort = env.WDS_SOCKET_PORT ? Number(env.WDS_SOCKET_PORT) : undefined;

  return {
    plugins: [react()],
    server: {
      host: "0.0.0.0",
      port: 3000,
      strictPort: true,
      allowedHosts: true,
      hmr: hmrClientPort ? { clientPort: hmrClientPort } : true,
    },
    preview: {
      host: "0.0.0.0",
      port: 3000,
      strictPort: true,
      allowedHosts: true,
    },
    build: {
      outDir: "dist",
      sourcemap: false,
    },
  };
});
