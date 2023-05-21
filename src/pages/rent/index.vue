<script setup lang="ts">
import {
	IProperty, PaginationByPage, Strapi4ResponseMany,
} from '~/types';

const RENT_PAGE_HERO_SECTION = {
	title: 'Find the best property to rent for your family',
	subtitle: 'Lorem ipsum dolor sit amet consectetur. Neque facilisi tristique tristique netus est cras. Felis vel sed arcu diam eget luctus.',
	ctaText: 'Get valuation',
	ctaLink: '/valuation',
	backgroundImage: '~/assets/images/page-about-us-hero-cover.png',

};

const searchIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
			<g clip-path="url(#clip0_170_1684)">
			<path d="M15.5006 14H14.7106L14.4306 13.73C15.6306 12.33 16.2506 10.42 15.9106 8.39002C15.4406 5.61002 13.1206 3.39002 10.3206 3.05002C6.09063 2.53002 2.53063 6.09001 3.05063 10.32C3.39063 13.12 5.61063 15.44 8.39063 15.91C10.4206 16.25 12.3306 15.63 13.7306 14.43L14.0006 14.71V15.5L18.2506 19.75C18.6606 20.16 19.3306 20.16 19.7406 19.75C20.1506 19.34 20.1506 18.67 19.7406 18.26L15.5006 14ZM9.50063 14C7.01063 14 5.00063 11.99 5.00063 9.50002C5.00063 7.01002 7.01063 5.00002 9.50063 5.00002C11.9906 5.00002 14.0006 7.01002 14.0006 9.50002C14.0006 11.99 11.9906 14 9.50063 14Z" fill="#5B5757"/>
			</g>
			<defs>
			<clipPath id="clip0_170_1684">
			<rect width="24" height="24" fill="white"/>
			</clipPath>
			</defs>
			</svg>`;

const DEFAULT_PAGINATION = {
	page: 1,
	pageSize: 9,
};

const { find } = useStrapi();

const propertySearch = ref('');
const propertySort = ref('asc');
const totalProperties = ref(0);

const { data: properties } = await useAsyncData(
	'rentProperties',
	() => find<IProperty>('properties', {
		populate: 'images',
		filters: {
			address: {
				$contains: '',
			},
		},
		pagination: {
			page: DEFAULT_PAGINATION.page,
			pageSize: DEFAULT_PAGINATION.pageSize,
		},
	}),
);

const {
	currentPage,
	currentPageSize,
	pageCount,
	next: nextPage,
	prev: prevPage,
} = useOffsetPagination({
	page: 1,
	pageSize: 9,
	total: totalProperties,
});

const fetchProperties = async () => {
	const {
		data,
		meta,
	} = await find<IProperty>('properties', {
		populate: 'images',
		filters: {
			address: {
				$contains: propertySearch.value,
			},
		},
		sort: [
			// @ts-ignore
			{
				price: propertySort.value,
			},
		],
		pagination: {
			page: currentPage.value,
			pageSize: currentPageSize.value,
		},
	});

	totalProperties.value = (meta?.pagination as PaginationByPage)?.total ?? 1;

	properties.value = {
		...properties.value,
		data,
	} as Strapi4ResponseMany<IProperty>;
};

totalProperties.value = (properties.value?.meta?.pagination as PaginationByPage)?.total ?? 1;

const handlePropertySearch = async (value: string) => {
	propertySearch.value = value;
};

const handlePropertySort = (value: string) => {
	propertySort.value = value;
};

watch(propertySearch, () => {
	currentPage.value = 1;

	fetchProperties();
});

watch(propertySort, () => {
	fetchProperties();
});

watch(currentPage, () => {
	fetchProperties();
});
</script>

<template>
	<SectionSimpleHero
		:title="RENT_PAGE_HERO_SECTION.title"
		:subtitle="RENT_PAGE_HERO_SECTION.subtitle"
		:cta-link="RENT_PAGE_HERO_SECTION.ctaLink"
		:cta-text="RENT_PAGE_HERO_SECTION.ctaText"
		:background-image="RENT_PAGE_HERO_SECTION.backgroundImage"
		class="!mb-0"
	/>

	<div
		id="rent-search"
		class="section-padding pt-40 pb-64 md:pb-120 md:pt-80"
	>
		<div class="mx-auto max-w-screen-xl flex flex-col lg:flex-row gap-16 lg:justify-between items-start lg:items-center mb-40 md:mb-56">
			<div class="flex flex-col lg:flex-row items-start lg:items-center justify-center">
				<p class="text-body-3  md:text-body-2 mr-16 mb-12 lg:mb-0">Search by street name</p>
				<FormKit
					outer-class="max-w-[40rem]"
					:prefix-icon="searchIcon"
					type="text"
					name="search"
					placeholder="Street name"
					:value="propertySearch"
					@input="handlePropertySearch"
				/>
			</div>

			<div class="flex flex-col lg:flex-row items-start lg:items-center justify-center mr-16">
				<p class="text-body-3 md:text-body-2 mb-12 lg:mb-0 mr-16">Sort by</p>
				<FormKit
					type="select"
					name="filter"
					suffix-icon
					:options="[
						{
							label: 'Price low to high',
							value: 'asc'
						},
						{
							label: 'Price high to low',
							value: 'desc'
						},
					]"
					@input="handlePropertySort"
				/>
			</div>
		</div>

		<div class="mb-40 md:mb-56 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-24 max-w-screen-xl mx-auto">
			<PropertyCard
				v-for="property in properties?.data || []"
				:key="property.attributes.slug"
				class="max-w-[40.8rem] w-full mx-auto"
				:property="property.attributes"
			/>
		</div>

		<div class="flex gap-8 justify-center">
			<button
				class="flex justify-center items-center py-16 px-14 border border-primary-black rounded-full w-40 h-40 md:w-52 md:h-52"
				@click="prevPage"
			>
				<ChevronLeft/>
			</button>

			<button
				v-for="item in pageCount"
				:key="item"
				class="flex justify-center items-center py-16 px-14 border border-primary-black rounded-full w-40 h-40 md:w-52 md:h-52"
				:class="{ 'bg-primary-black text-white': currentPage === item, }"
				:disabled="currentPage === item"
				@click="currentPage = item"
			>
				{{ item }}
			</button>

			<button
				class="flex justify-center items-center py-16 px-14 border border-primary-black rounded-full w-40 h-40 md:w-52 md:h-52"
				@click="nextPage"
			>
				<ChevronLeft class="rotate-180"/>
			</button>
		</div>
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
