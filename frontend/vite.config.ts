import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  //we can define this too
  // server:{
  //   proxy : {
  //     '/api': {
  //       target:'http://localhost:3000/'
  //     },
  //     '/images': {
  //       target:'http://localhost:3000/'
  //     }
  //   },
  // }
});
