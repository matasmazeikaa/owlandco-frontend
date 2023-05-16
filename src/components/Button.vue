<script lang="ts" setup>
interface Props {
	secondary?: boolean;
	white?: boolean;
	black?: boolean;
	to?: string;
}

defineProps<Props>();
</script>

<template>
	<NuxtLink
		v-if="to"
		class="btn-primary"
		:class="{
			'backdrop-blur-sm bg-white bg-opacity-10 text-white': secondary,
			'bg-transparent border border-gray-200': white,
			'bg-primary-black text-primary-yellow border-gray-200': black,
		}"
		:to="to"
	>
		<slot />
	</NuxtLink>
	<button
		v-else
		class="btn-primary"
		:class="{
			'backdrop-blur-sm bg-white bg-opacity-10 text-white': secondary,
			'bg-transparent border border-gray-200': white,
			'bg-primary-black text-primary-yellow border-gray-200': black
		}"
	>
		<slot />
	</button>
</template>
