import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		rollupOptions: {
			output: {
				// Adjusting file naming conventions
				entryFileNames: 'js/[name]-[hash].js',
				chunkFileNames: 'js/[name]-[hash].js',
				assetFileNames: ({ name }) => {
					if (/\.(gif|jpe?g|png|svg|ico|webp)$/i.test(name)) {
						// Moving images to 'images' folder inside 'assets'
						return 'images/[name]-[hash][extname]';
					}

					// Other assets like fonts or CSS files can be handled here similarly
					return 'assets/[name]-[hash][extname]';
				},
			},
		},
	},
});
