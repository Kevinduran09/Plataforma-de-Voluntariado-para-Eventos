import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server:{
    host: '0.0.0.0', // Permite el acceso desde la red local
    port: 4000,       // Define el puerto deseado
    
  }
});
