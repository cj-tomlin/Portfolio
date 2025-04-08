import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	
	experimental: {
		svg: true,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
