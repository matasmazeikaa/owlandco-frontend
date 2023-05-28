<script setup lang="ts">import { ISection } from '~/types';

const { findOne } = useStrapi();

const { data } = await useAsyncData(
	'contactPageHeroSection',
	() => findOne<{section: ISection[], title: string, email: string, phoneNumber: string, address: string, work: { hours: string, days: string }}>('contact-page', {
		populate: ['work.*'],
	}),
);

const { sections } = await useStrapiPage('contact');
const contactUsPage = computed(() => data.value?.data.attributes);
</script>

<template>
	<ContactUsSection
		:title="contactUsPage?.title"
		:email="contactUsPage?.email"
		:phone-number="contactUsPage?.phoneNumber"
		:address="contactUsPage?.address"
		:work="contactUsPage?.work"
	/>
	<Component
		v-bind="section"
		:is="section.component"
		v-for="section in sections"
		:key="section.id"
	/>
	<SubscribeSection />
</template>
