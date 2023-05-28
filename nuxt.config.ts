const APP_META = {
	title: 'Owl & Co',
	description: 'Discover personalised property management and investment services in East London and Essex with Owl & Co, your trusted family-owned letting agency.',
	favicon: '/favicon.ico',
	url: 'https://myapp.com',
	language: 'en',
};

export default defineNuxtConfig({
	// app config
	extends: ['nuxt-seo-kit'],

	// server side rendering
	ssr: true,

	// source directory
	srcDir: 'src',

	// alias
	alias: {
		modules: '~/modules',
	},

	css: ['~/assets/css/tailwind.css'],

	// runtime config
	runtimeConfig: {
		public: {
			siteUrl: APP_META.url || 'https://example.com',
			siteName: APP_META.title,
			siteDescription: APP_META.description,
			language: APP_META.language,
		},
	},

	strapi: {
		url: 'http://127.0.0.1:1337',
	},

	// typescript
	typescript: {
		typeCheck: true,
		tsConfig: {
			compilerOptions: {
				forceConsistentCasingInFileNames: true,
			},
		},
	},

	// components
	components: {
		dirs: [
			{
				path: '~/components',
				pathPrefix: false,
			},
		],
	},

	// imports
	imports: {
		dirs: [
			'stores',
			'composables',
		],
	},

	image: {
		cloudinary: {
			baseURL: 'https://res.cloudinary.com/ddcyo820z/image/upload/',
		},
	},

	// modules
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/image-edge',
		'@formkit/nuxt',
		'@pinia/nuxt',
		'@unlighthouse/nuxt',
		'@vueuse/nuxt',
		'nuxt-headlessui',
		'@nuxtjs/eslint-module',
		'@nuxtjs/strapi',
		'nuxt-swiper',
	],

	eslint: {
		eslintPath: 'eslint',
	},

	// headlessui
	headlessui: {
		prefix: 'H',
	},

	// pinia
	pinia: {
		autoImports: ['defineStore'],
	},

	// unlighthouse
	unlighthouse: {},
});
