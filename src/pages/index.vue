<script lang="ts" setup>
import propertyManagementIcon from '@/assets/icons/property-management.svg';
import supportIcon from '@/assets/icons/support.svg';
import tenantsManagementIcon from '@/assets/icons/tenants-search-management.svg';
import {
	IProperty, PaginationByPage,
} from '@/types';

const RENTED_PROPERTIES_INFO_BAR_DATA = [
	{
		title: 'properties for rent',
		value: '75',
	},
	{
		title: 'properties for sale',
		value: '42',
	},
	{
		title: 'Property valuations',
		value: '500+',
	},
	{
		title: 'completed investments',
		value: '£2.5M',
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
};

const { find } = useStrapi();

const { data: properties } = await useAsyncData(
	'homeProperties',
	() => find<IProperty>('properties', {
		populate: 'images',
		sort: [
			{
				createdAt: 'desc',
			},
		],
		pagination: {
			start: 1,
			limit: 3,
		},
	}),
);

const totalProperties = (properties.value?.meta?.pagination as PaginationByPage)?.total ?? 1;

console.log(properties);

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

				<div class="flex mb-24 md:mb-80">
					<Button
						class="mr-16"
						to="/rentals"
					>
						See rentals
					</Button>
					<Button
						secondary
						to="/valuation"
					>
						Get valuation
					</Button>
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
		:cta-text="SERVICES_SECTION.ctaText"
	/>

	<div class="section-padding my-64 md:my-80 lg:my-120 text-white text-center">
		<div class="max-w-screen-xl mx-auto text-center">
			<div class=" mb-56">
				<h2 class="text-h4 md:text-h2 text-primary-black mb-16"> {{PROPERTIES_SECTION.title}} </h2>
				<p class="body-2-gray md:body-1-gray mx-auto max-w-[55.6rem]">{{PROPERTIES_SECTION.subtitle}}</p>
			</div>

			<PropertyCardsSetOf3 :properties="properties?.data ?? []" />

			<Button
				class="mb-16"
				to="/rent"
			>
				See all properties
			</Button>

			<p class="text-body-3 text-gray">{{ totalProperties }} more properties for rent</p>
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
