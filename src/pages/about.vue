<script setup lang="ts">
const ABOUT_US_HERO_SECTION = {
	title: 'Owlandco is a family-run property business that is helping people to find their new home',
	subtitle: 'Lorem ipsum dolor sit amet consectetur. Neque facilisi tristique tristique netus est cras. Felis vel sed arcu diam eget luctus.',
	ctaLink: '/about',
	ctaText: 'Contact us',
	backgroundImage: '/assets/images/page-about-us-hero-cover.png',
};

const ABOUT_PAGE_SECTION_STEPS = {
	title: 'We are driven by values',
	steps: [
		{
			title: 'Transparency',
			description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
		},
		{
			title: 'Empathy',
			description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
		},
		{
			title: 'Integrity',
			description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
		},
	],
};

</script>

<template>
	<SectionSimpleHero
		:title="ABOUT_US_HERO_SECTION.title"
		:subtitle="ABOUT_US_HERO_SECTION.subtitle"
		:cta-link="ABOUT_US_HERO_SECTION.ctaLink"
		:cta-text="ABOUT_US_HERO_SECTION.ctaText"
		:background-image="ABOUT_US_HERO_SECTION.backgroundImage"
	/>

	<SectionSteps
		:title="ABOUT_PAGE_SECTION_STEPS.title"
		:steps="ABOUT_PAGE_SECTION_STEPS.steps"
		is-lines
	/>

	<SimpleSectionTextLeftImageRight
		title="It all started with small properties around our own home by helping our friends"
		subtitle="Lorem ipsum dolor sit amet consectetur. Neque facilisi tristique tristique netus est cras. Felis vel sed arcu diam eget luctus."
		image="/assets/images/page-about-us-people.png"
	/>

	<SimpleSectionTextRightImageLeft
		title="To this day we at Owlando hold one of the most prestigious properties around the United Kingdom"
		subtitle="Lorem ipsum dolor sit amet consectetur. Neque facilisi tristique tristique netus est cras. Felis vel sed arcu diam eget luctus."
		image="/assets/images/page-about-us-house.png"
	/>

	<TestimonialsSection />

	<SubscribeSection />
</template>
