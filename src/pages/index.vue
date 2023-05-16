<script lang="ts" setup>
import propertyManagementIcon from '@/assets/icons/property-management.svg';
import supportIcon from '@/assets/icons/support.svg';
import tenantsManagementIcon from '@/assets/icons/tenants-search-management.svg';
import { IProperty } from '@/types';

const RENTED_PROPERTIES_INFO_BAR_DATA = [
	{
		title: 'Rented Properties',
		value: '3',
	},
	{
		title: 'Total Income',
		value: '$ 1,200',
	},
	{
		title: 'Total Expenses',
		value: '$ 200',
	},
	{
		title: 'Total Profit',
		value: '$ 1,000',
	},
];

const SERVICES_SECTION = {
	title: 'Get the best return for your property investment',
	subtitle: 'Lorem ipsum dolor sit amet consectetur. Neque facilisi tristique tristique netus est cras. Felis vel sed arcu diam eget luctus.',
	services: [
		{
			title: 'Tenants Search Management',
			subtitle: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
			icon: tenantsManagementIcon,
		},
		{
			title: 'Property Management',
			subtitle: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
			icon: propertyManagementIcon,
		},
		{
			title: '24/7 Support',
			subtitle: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
			icon: supportIcon,
		},
	],
	ctaText: 'Learn more',
	ctaLink: '/investment',
};

const PROPERTIES_SECTION = {
	title: 'Properties for rent',
	subtitle: 'Lorem ipsum dolor sit amet consectetur. Neque facilisi tristique tristique netus est cras. Felis vel sed arcu diam eget luctus.',
	properties: [
		{
			location: 'Fencepiece road, Ilford IG6',
			price: '£1,500 per month',
			available: true,
			beds: 3,
			bathrooms: 2,
			images: [],
		},
		{
			location: 'Fencepiece road, Ilford IG6',
			price: '£3,500 per month',
			available: 'Available from 21st of December 2013',
			beds: 4,
			bathrooms: 1,
			images: [],

		},
		{
			location: 'Fencepiece road, Ilford IG6',
			price: '£6,100 per month',
			available: true,
			beds: 5,
			bathrooms: 3,
			images: [],
		},
	] as IProperty[],
	allProperties: 24,
};

</script>

<template>
	<div class="section-padding">
		<div class="relative mx-auto text-white text-center flex justify main-bg">
			<div class="main-bg-cover"/>
			<div class="pt-[4.4rem] pb-24 pr-24 pl-24 md:pb-80 md:pt-120 2xl:pt-[28.4rem] 2xl:pb-120 container mx-auto z-[3] relative flex flex-col justify-center items-center">
				<h1 class="mb-8 md:mb-24 max-w-[80rem]">
					Get the best property for your family with Owlandco
				</h1>
				<p class="body-1-white mb-24 md:mb-40 max-w-[55.6rem]">
					Lorem ipsum dolor sit amet consectetur.
					Neque facilisi tristique tristique netus est cras.
					Felis vel sed arcu diam eget luctus.
				</p>

				<div class="flex mb-24 md:mb-[11.2rem] xl2:mb-[18.4rem]">
					<Button class="mr-16">See rentals</Button>
					<Button secondary>Get valuation</Button>
				</div>

				<RentedPropertiesInfoBar :items="RENTED_PROPERTIES_INFO_BAR_DATA"/>
			</div>
		</div>
	</div>

	<AboutUsSection />

	<SectionStepsIntricateWithBackground
		:title="SERVICES_SECTION.title"
		:subtitle="SERVICES_SECTION.subtitle"
		:items="SERVICES_SECTION.services"
		:cta-link="SERVICES_SECTION.ctaLink"
		:cta-text="SERVICES_SECTION.ctaLink"
	/>

	<div class="section-padding py-64 md:py-80 lg:py-120 text-white text-center">
		<div class="max-w-screen-xl mx-auto text-center">
			<div class=" mb-56">
				<h2 class="text-h4 md:text-h2 text-primary-black mb-16"> {{PROPERTIES_SECTION.title}} </h2>
				<p class="body-2-gray md:body-1-gray mx-auto max-w-[55.6rem]">{{PROPERTIES_SECTION.subtitle}}</p>
			</div>

			<div class="grid grid-flow-col overflow-x-scroll lg:flex items-center w-full justify-between mb-32 lg:mb-56">
				<div
					v-for="(property) in PROPERTIES_SECTION.properties"
					:key="property.location"
					class="flex w-[27.2rem] lg:w-1/3 items-center mx-8 lg:mx-[1.4rem] first:ml-0 last:mr-0"
				>
					<PropertyCard :property="property" />
				</div>
			</div>

			<Button class="mb-16">See all properties</Button>

			<p class="text-body-3 text-gray">{{ PROPERTIES_SECTION.allProperties }} more properties for rent</p>
		</div>
	</div>

	<TestimonialsSection />

	<SubscribeSection />
</template>

<style scoped>

.service-separator {
	width: 0.5px;
	background:#520052;
	margin: 0 3vw;
	height: 148px;
}

.flex-with-separator + .flex-with-separator {
	border-left: 1px solid #520052;
	height: 148px;
}

.main-bg {
	background: url('~/assets/images/room.png');
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
}

.image-cover-yellow {
	background: linear-gradient(68.61deg, #E5CE68 0%, rgba(229, 206, 104, 0) 75.71%);
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	border-radius: 4rem;
}

.image-cover-yellow-dark {
	background: linear-gradient(102.08deg, #E5CE68 0%, rgba(229, 206, 104, 0) 69.19%);
	mix-blend-mode: screen;
opacity: 0.44;
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
