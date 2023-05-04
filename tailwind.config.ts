import formkit from '@formkit/themes/tailwindcss';
import headlessui from '@headlessui/tailwindcss';
import type { Config } from 'tailwindcss';

const rootDir = process.cwd();

export default <Partial<Config>>{
	content: [
		`${rootDir}/nuxt.config.ts`,
		`${rootDir}/formkit.config.ts`,
	],
	theme: {},
	plugins: [
		headlessui({}),
		formkit,
	],
};
