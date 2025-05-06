// @ts-check
import { defineConfig } from 'astro/config';

// Remove the @astrojs/tailwind import
// import tailwind from "@astrojs/tailwind";

// Import the vite plugin directly
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://christolanguages.com',
  // Remove the integrations array if it only contained tailwind
  // integrations: [tailwind()]

  // Add the vite plugin config
  vite: {
    // Use @ts-ignore to suppress the type error
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});