<script setup lang="ts">
const {
	sections,
	hero,
} = await useStrapiPage('valuation');
</script>

<template>
	<ValuationFormSection
		:title="hero?.title"
		:subtitle="hero?.subtitle"
		:values="hero?.values"
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
