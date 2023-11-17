import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from 'path';
export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	resolve: {
		alias: {
			$components: path.resolve(__dirname, './src/lib/components'),
			$assets: path.resolve(__dirname, './src/assets'),
			$store: path.resolve(__dirname, './src/lib/store'),
			$utils: path.resolve(__dirname, './src/lib/utils'),
			$service: path.resolve(__dirname, './src/lib/service'),
			$firebase: path.resolve(__dirname, './src/lib/firebase'),
		}
	}
});
