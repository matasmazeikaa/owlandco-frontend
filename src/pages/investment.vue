<script setup lang="ts">
const INVESTMENT_HERO_SECTION = {
	title: 'Invest in property to build your future wealth with Owlandco',
	subtitle: 'Lorem ipsum dolor sit amet consectetur. Neque facilisi tristique tristique netus est cras. Felis vel sed arcu diam eget luctus.',
	ctaText: 'Contact us',
	ctaLink: '/contact',
	backgroundImage: '/assets/images/room.png',
};

const INVESTMENT_PAGE_SECTION_STEPS = {
	title: 'Property investment process',
	steps: [
		{
			title: 'Set Budget',
			description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
		},
		{
			title: 'Find The Best Option',
			description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
		},
		{
			title: 'Invest & Build Return',
			description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
		},
	],
};

const INVESTMENT_PAGE_SECTION_APPROACH = {
	title: 'Thoughtful approach toward property investment allows us to builds wealth and safety for our clients',
	subtitle: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
	firstSubItem: {
		title: '500+',
		subtitle: 'property valuations',
	},
	secondSubItem: {
		title: '£2.5M',
		subtitle: 'completed investments',
	},
	image: '/assets/images/woman-typing.png',
	imageAlt: 'woman typing about investments on a computer',
};

const INVESTMENT_PAGE_SECTION_STORY = {
	title: 'Your investment story in the property can start today to build your future safety',
	subtitle: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
	image: '/assets/images/page-about-us-people.png',
};

const INVESTMENT_PAGE_SECTION_STORY_TWO = {
	title: 'We ensure that investment options will fit your preferred budget and financial state',
	subtitle: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
	image: '/assets/images/page-about-us-house.png',
};

</script>

<template>
	<SectionSimpleHero
		:title="INVESTMENT_HERO_SECTION.title"
		:subtitle="INVESTMENT_HERO_SECTION.subtitle"
		:cta-text="INVESTMENT_HERO_SECTION.ctaText"
		:cta-link="INVESTMENT_HERO_SECTION.ctaLink"
		:background-image="INVESTMENT_HERO_SECTION.backgroundImage"
	/>

	<SectionIntricateTextLeftImageRight
		:title="INVESTMENT_PAGE_SECTION_APPROACH.title"
		:subtitle="INVESTMENT_PAGE_SECTION_APPROACH.subtitle"
		:first-sub-item="INVESTMENT_PAGE_SECTION_APPROACH.firstSubItem"
		:second-sub-item="INVESTMENT_PAGE_SECTION_APPROACH.secondSubItem"
		:image="INVESTMENT_PAGE_SECTION_APPROACH.image"
		:image-alt="INVESTMENT_PAGE_SECTION_APPROACH.imageAlt"
	/>

	<SectionSteps
		:title="INVESTMENT_PAGE_SECTION_STEPS.title"
		:steps="INVESTMENT_PAGE_SECTION_STEPS.steps"
		is-arrows
		no-separators
	/>

	<SimpleSectionTextLeftImageRight
		:title="INVESTMENT_PAGE_SECTION_STORY.title"
		:subtitle="INVESTMENT_PAGE_SECTION_STORY.subtitle"
		:image="INVESTMENT_PAGE_SECTION_STORY.image"
	/>

	<SimpleSectionTextRightImageLeft
		:title="INVESTMENT_PAGE_SECTION_STORY_TWO.title"
		:subtitle="INVESTMENT_PAGE_SECTION_STORY_TWO.subtitle"
		:image="INVESTMENT_PAGE_SECTION_STORY_TWO.image"
	/>

	<TestimonialsSection />

	<SubscribeSection />
</template>

<style scoped>
.main-bg {
	background: url('/assets/images/page-about-us-hero-cover.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 4rem;
	width: 100%;
}

.main-bg-cover {
	background: linear-gradient(180deg, #181717 0%, rgba(24, 23, 23, 0) 70.56%);
	opacity: 0.88;
	width: 100%;
	height: 100%;
	border-radius: 4rem;
	position: absolute;
	left: 0;
	top: 0;
}</style>
