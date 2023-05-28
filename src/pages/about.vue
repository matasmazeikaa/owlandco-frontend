<script setup lang="ts">
const {
	sections,
	hero,
} = await useStrapiPage('about');
</script>

<template>
	<SectionSimpleHero
		v-bind="hero"
	/>

	<Component
		v-bind="section"
		:is="section.component"
		v-for="section in sections"
		:key="section.id"
	/>

	<TestimonialsSection />

	<SubscribeSection />
</template>
