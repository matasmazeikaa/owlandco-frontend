<script setup lang="ts">
import { IProperty } from '~/types';

export interface PaginationByPage {
  page: number
  pageSize: number
  total: number;
  withCount?: boolean
}

const DEFAULT_PAGINATION = {
	page: 1,
	pageSize: 9,
};

const { find } = useStrapi();
const route = useRoute();

const { slug } = route.params;

console.log(route.params.slug);

const { data: property } = await useAsyncData(
	'properties',
	() => find<IProperty>('properties', {
		populate: 'images',
		filters: {
			slug,
		},
	}),
);

console.log(property);
</script>

<template>
	<div>
	</div>

	<SectionSimpleYellowBackground
		title="Rent your property for maximum return"
		subtitle="Lorem ipsum dolor sit amet consectetur. Neque facilisi tristique tristique netus est cras. Felis vel sed arcu diam eget luctus."
		cta-text="Get valuation"
		cta-link="/valuation"
	/>

	<TestimonialsSection />

	<SubscribeSection />
</template>

<style>

#rent-search [data-family~="text"] .formkit-input {
	font-size: 1.4rem !important;
	font-weight: bold;
	color: #5B5757;
	position: relative;
	display: flex;
	outline: none;
	padding-left: 0.8rem;
}

#rent-search [data-family~="text"] .formkit-inner {
	font-size: 1.4rem !important;
	font-weight: bold;
	color: #5B5757;
	position: relative;
	display: flex;
	padding-left: 2rem;
}

#rent-search .formkit-prefix-icon {
	/* position: absolute; */
	width: 2.4rem;
	/* height: 100%; */
	display: flex;
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
</style>
