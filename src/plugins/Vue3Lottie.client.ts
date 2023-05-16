import Vue3Lottie from 'vue3-lottie';

export default defineNuxtPlugin(() => ({
	provide: {
		lottie: Vue3Lottie,
	},
}));
