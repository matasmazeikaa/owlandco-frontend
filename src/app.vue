<template>
	<Html
		lang="en"
		class="h-full"
	>
		<Body class="h-full">
			<NuxtLayout class="h-full">
				<SeoKit />
				<NuxtPage class="h-full"/>
			</NuxtLayout>
		</Body>
	</Html>
</template>

<script setup lang="ts">
import AOS from 'aos';
import 'aos/dist/aos.css';

const { findOne } = useStrapi();
const { data } = await useAsyncData(
	'global',
	() => findOne<any>('global', {
		populate: '*',
	}),
); // You can also use <link> for styles

// ..
onMounted(() => {
	AOS.init({
		duration: 1000,
		once: true,
	});
});

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
