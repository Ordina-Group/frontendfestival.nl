// import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		// adapter: adapter({strict: false}),
		// paths: {
        //     base: process.env.NODE_ENV === 'production' ? '/2023' : '',
        // },
		csp: {
			directives: {
				'script-src': ['self']
			}
		}
	}
};

export default config;
