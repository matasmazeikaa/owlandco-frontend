<script lang="ts" setup>
import { IBreadcrumb } from '@/types';

interface Props {
	breadcrumbs: IBreadcrumb[];
}

defineProps<Props>();
</script>

<template>
	<div class="breadcrumbs mx-auto max-w-screen-xl flex gap-8 mt-40 mb-24 md:mt-48 md:mb-24">
		<NuxtLink
			v-for="breadcrumb in breadcrumbs"
			:key="breadcrumb.name"
			:to="breadcrumb.to"
			class="link flex items-center gap-8 last:text-gray"
		>
			{{ breadcrumb.name }}
			<ChevronLeft class="chevron rotate-180 w-[0.5rem]" />
		</NuxtLink>
	</div>
</template>

<style>
.breadcrumbs .link:last-child .chevron {
	display: none;
}

.link:not(:last-child):hover {
	opacity: 0.75;
	cursor: pointer;
	transition: opacity 0.2s ease-in-out;
}
</style>
