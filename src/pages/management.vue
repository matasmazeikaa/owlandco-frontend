<script setup lang="ts">
import propertyManagementIcon from '@/assets/icons/property-management.svg';
import supportIcon from '@/assets/icons/support.svg';
import tenantsManagementIcon from '@/assets/icons/tenants-search-management.svg';

const INVESTMENT_HERO_SECTION = {
	title: 'Invest in property to build your future wealth with Owlandco',
	subtitle: 'Lorem ipsum dolor sit amet consectetur. Neque facilisi tristique tristique netus est cras. Felis vel sed arcu diam eget luctus.',
	ctaText: 'Contact us',
	ctaLink: '/contact',
	backgroundImage: '~/assets/images/room.png',
};

const INVESTMENT_PAGE_SECTION_STEPS = {
	title: 'Property management process',
	steps: [
		{
			title: 'Sign Agreement',
			description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
		},
		{
			title: 'Advertise Property',
			description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
		},
		{
			title: 'Find Suitable Tenants',
			description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
		},
		{
			title: 'Collect & Transfer Rent',
			description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
		},
		{
			title: 'Communicate with Tenants',
			description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
		},
		{
			title: 'Organize & Inspect Property',
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

const SERVICES_SECTION = {
	title: 'Ease of property management with Owlandco',
	subtitle: 'Lorem ipsum dolor sit amet consectetur. Neque facilisi tristique tristique netus est cras. Felis vel sed arcu diam eget luctus.',
	services: [
		{
			title: 'Monitor & Protect Property',
			subtitle: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
			icon: tenantsManagementIcon,
		},
		{
			title: '24/7 Communication',
			subtitle: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
			icon: propertyManagementIcon,
		},
		{
			title: 'Quarterly Reports',
			subtitle: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
			icon: supportIcon,
		},
	],
	ctaText: 'Learn more',
	ctaLink: '/investment',
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

	<SectionStepsIntricateWithBackground
		:title="SERVICES_SECTION.title"
		:subtitle="SERVICES_SECTION.subtitle"
		:items="SERVICES_SECTION.services"
		:cta-link="SERVICES_SECTION.ctaLink"
		:cta-text="SERVICES_SECTION.ctaText"
	/>

	<SectionSteps
		:title="INVESTMENT_PAGE_SECTION_STEPS.title"
		:steps="INVESTMENT_PAGE_SECTION_STEPS.steps"
		no-separators
	/>

	<SectionSimpleYellowBackground
		title="Pricing"
		subtitle="Lorem ipsum dolor sit amet consectetur. Neque facilisi tristique tristique netus est cras. Felis vel sed arcu diam eget luctus."
		:first-sub-item="{
			title: '10% from the rent',
			subtitle: 'property management'
		}"
		:second-sub-item="{
			title: '1 months rent fee',
			subtitle: 'finding new tenants'
		}"
		cta-text="Contact us"
		cta-link="/contact"
	/>

	<TestimonialsSection />

	<SubscribeSection />
</template>

<style scoped>
.main-bg {
	background: url('~/assets/images/page-about-us-hero-cover.png');
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
