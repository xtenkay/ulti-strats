import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://xtenkay.github.io',
	integrations: [
		starlight({
			title: 'NA Ultimate Strats',
			
			
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'UCOB', link: '/guides/ucob/' },
						{ label: 'UWU', link: '/guides/uwu/' },
						{ label: 'TEA', link: '/guides/tea/' },
						{ label: 'DSR', link: '/guides/dsr/' },
						{ label: 'TOP', link: '/guides/top/' },
					],
				},
				{
					label: 'Others',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Credits', link: '/others/credits/' },
						
					],
				},
			],
			pagination:false,
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/custom.css',
			  ],
		}),
	],
});
