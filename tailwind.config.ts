import formkit from '@formkit/themes/tailwindcss';
import headlessui from '@headlessui/tailwindcss';
import type { Config } from 'tailwindcss';

export default <Partial<Config>>{
	content: [
		'./src/assets/**/*.{vue,js,css}',
		'./src/components/**/*.{vue,js}',
		'./src/layouts/**/*.vue',
		'./src/pages/**/*.vue',
		'./src/server/**/*.{js,ts}',
		'./src/plugins/**/*.{js,ts}',
		'./formkit.config.ts',
	],

	// --primary-dark: '#181717',
	// --primary-golden-gradient: 'linear-gradient(169.09deg, #AE862E 26.88%, #F7EF89 52.95%, #D2AC47 78.25%, #EDC968 101.25%);',
	// --primary-yellow: '#E5CE68',
	// --primary-tekhelet: '#3d348B',
	// --primary-white: '#FFFFFF',
	// --secondary-gray: '#5B5757',

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#3d348B',
					yellow: '#E5CE68',
					black: '#181717',
					purple: '#260026',
					dark: {
						purple: '#520052',
					},
				},
				secondary: {
					platinum: {
						DEFAULT: '#E1E0E0',
					},
				},
				black: {
					DEFAULT: '#181717',
				},
				gray: {
					DEFAULT: '#5B5757',
					french: '#C2B8C2',
				},
			},
			fontSize: {
				h1: [
					'5.6rem',
					{
						fontWeight: '700',
						lineHeight: '6.4rem',
					},
				],
				'h1-mobile': [
					'2.8rem',
					{
						fontWeight: '700',
					},
				],
				h2: [
					'4.8rem',
					{
						fontWeight: '700',
						lineHeight: '5.6rem',
					},
				],
				'h2-mobile': [
					'5.6rem',
					{
						fontWeight: '700',
					},
				],
				h3: [
					'4rem',
					{
						fontWeight: '700',
						lineHeight: '4.8rem',
					},
				],
				'h3-mobile': [
					'4.8rem',
					{
						fontWeight: '700',
						lineHeight: '3.2rem',
					},
				],
				h4: [
					'2.8rem',
					{
						fontWeight: '700',
						lineHeight: '3.2rem',
					},
				],
				h5: [
					'2.4rem',
					{
						fontWeight: '700',
						lineHeight: '3.2rem',
					},
				],
				'h5-mobile': [
					'3.2rem',
					{
						fontWeight: '700',
					},
				],
				h6: [
					'1.6rem',
					{
						fontWeight: '600',
					},
				],
				'h6-mobile': [
					'1.6rem',
					{
						fontWeight: '600',
					},
				],
				'body-1': [
					'1.8rem',
					{
						fontWeight: '400',
						lineHeight: '2.8rem',
					},
				],
				'body-1-md': [
					'1.8rem',
					{
						fontWeight: '400',
						lineHeight: '2.4rem',
					},
				],
				'body-2': [
					'1.6rem',
					{
						fontWeight: '400',
						lineHeight: '2.4rem',
					},
				],
				'body-2-mobile': [
					'2.4rem',
					{
						fontWeight: '400',
					},
				],
				'body-3': [
					'1.4rem',
					{
						fontWeight: '400',
					},
				],
				'body-3-mobile': [
					'2rem',
					{
						fontWeight: '400',
					},
				],
				button: [
					'1.4rem',
					{
						fontWeight: '600',
						lineHeight: '2rem',
					},
				],
				tag: [
					'1.2rem',
					{
						fontWeight: '400',
						lineHeight: '1.6rem',
					},
				],
			},
			spacing: {
				32: '3.2rem',
				36: '3.6rem',
				40: '4rem',
				42: '4.2rem',
				96: '9.6rem',
				90: '9rem',
				80: '8rem',
				54: '5.4rem',
				16: '1.6rem',
				48: '4.8rem',
				72: '7.2rem',
				8: '0.8rem',
				24: '2.4rem',
				52: '5.2rem',
				14: '1.4rem',
				20: '2rem',
				64: '6.4rem',
				56: '5.6rem',
				100: '10rem',
				120: '12rem',
				200: '20rem',
				12: '1.2rem',
			},
		},
	},
	plugins: [
		headlessui({}),
		formkit,
	],
};
