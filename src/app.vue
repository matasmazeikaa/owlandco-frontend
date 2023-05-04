<template>
	<Html lang="en" class="h-full">
		<Body class="h-full">
			<NuxtLayout>
				<SeoKit />
				<NuxtPage />
			</NuxtLayout>
		</Body>
	</Html>
</template>

<script setup lang="ts">
const { findOne } = useStrapi();
const { data } = await useAsyncData(
	'global',
	() => findOne<any>('global', {
		populate: '*',
	}),
);

useHead({
	title: 'shit',
	link: [
		{
			rel: 'icon',
			type: 'image/x-icon',
			href: useStrapiMedia(data.value?.data?.attributes?.favicon?.data?.attributes?.url || ''),
		},
	],
});
</script>
