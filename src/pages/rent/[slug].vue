<script setup lang="ts">
import {
	IBreadcrumb, IProperty,
} from '~/types';
import {
	SwiperAutoplay, SwiperEffectCreative,
} from '~~/.nuxt/imports';

export interface PaginationByPage {
  page: number
  pageSize: number
  total: number;
  withCount?: boolean
}

const { find } = useStrapi();
const route = useRoute();

const { slug } = route.params;

const { data: properties } = await useAsyncData(
	'propertyPage',
	() => find<IProperty>('properties', {
		populate: [
			'images',
			'similarProperties',
			'similarProperties.images',
		],
		filters: {
			slug,
		},
	}),
);

const property = computed(() => properties?.value?.data[0].attributes as IProperty || {
	images: {
		data: [],
	},
	similarProperties: {
		data: [],
	},
});

const similarProperties = computed(() => property?.value?.similarProperties?.data ?? []);
const images = computed(() => property?.value?.images?.data ?? []);

const breadcrumbs = computed((): IBreadcrumb[] => [
	{
		name: 'Home',
		to: '/',
	},
	{
		name: 'Rent',
		to: '/rent',
	},
	{
		name: property.value.address,
	},
]);

const swiperInstance = useSwiper();

const controlledSwiper = ref<typeof swiperInstance>({} as typeof swiperInstance);
const setControlledSwiper = (swiper: any) => {
	controlledSwiper.value = swiper;
};
</script>

<template>
	<div class="section-padding">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-x-48 gap-y-40 max-w-screen-xl mx-auto">
			<div>
				<Swiper
					v-if="images.length"
					:modules="[SwiperAutoplay, SwiperEffectCreative]"
					:slides-per-view="1"
					loop
					:effect="'creative'"
					class="max-w-[63.2rem] h-fit w-full rounded-[1.6rem] overflow-hidden relative"
					:creative-effect="{
						prev: {
							shadow: false,
							translate: [
								'-20%', 0, -1
							],
						},
						next: {
							translate: [
								'100%', 0, 0
							],
						},
					}"
					@swiper="setControlledSwiper"
				>
					<Indicators
						class="absolute bottom-16 left-0 z-[2] w-full justify-center items-center"
						:length="images.length"
						size="12px"
						:active-indicator-index="controlledSwiper.realIndex"
						@on-click="controlledSwiper?.slideTo($event)"
					/>
					<SwiperSlide
						v-for="image in images"
						:key="image.attributes.url"
						class="!rounded-[1.6rem] !overflow-hidden max-w-[63.2rem] w-full lg:"
					>
						<NuxtImg
							provider="cloudinary"
							class="w-full max-w-[63.2rem] lg rounded-[1.6rem] z-[2] relative mx-auto"
							:src="image.attributes.hash"
							quality="85"
							width="632"
							height="484"
						/>
					</SwiperSlide>
				</Swiper>

				<div class="mt-8 md:mt-16 max-w-[63.2rem] mx-auto grid grid-cols-3 gap-16">
					<NuxtImg
						v-for="image in property.images.data.slice(Math.max(property.images.data.length - 3, 1))"
						:key="image.attributes.hash"
						provider="cloudinary"
						class="rounded-[1.6rem]"
						:src="image.attributes.hash"
						quality="85"
						width="200"
						height="160"
					/>
				</div>
			</div>

			<div class="bg-primary-purple text-white rounded-[4rem] p-24 md:p-48 lg:h-[47.1rem]">
				<Capsule
					:available-from="property.availableFrom"
					class="mb-16"
				/>
				<h1 class="text-h5 mb-16 md:text-h3">{{ property.address }}</h1>
				<div class="flex items-center mb-24 md:mb-32">
					<h3 class="text-h5 md:text-h3 text-primary-yellow mr-8">{{ property.price }}</h3>
					<h3 class="text-button md:text-h5">per month</h3>
				</div>

				<div class="flex flex-wrap gap-24 md:gap-32 mb-24 md:mb-40">
					<div class="flex items-center">
						<IconBathroomWithBackground class="md:w-56 md:mr-16 mr-8 w-44"/>
						<div>
							<p class="text-body-3 md:mb-4 md:text-button">Bedrooms</p>
							<p class="text-h6 md:text-h4">{{ property.bedrooms }}</p>
						</div>
					</div>
					<div class="flex items-center">
						<IconBathroomWithBackground class="md:w-56 md:mr-16 mr-8 w-44"/>
						<div>
							<p class="text-body-3 md:mb-4 md:text-button">Bathrooms</p>
							<p class="text-h6 md:text-h4">{{ property.bathrooms }}</p>
						</div>
					</div>
				</div>

				<Button
					to="/contact"
					class="w-full text-center"
				>
					Schedule a viewing
				</Button>
			</div>
		</div>
	</div>

	<div class="section-padding mb-64 mt-40 md:mt-80 md:mb-120">
		<div class="max-w-screen-xl mx-auto">
			<div class="max-w-[63.2rem]">
				<h3 class="text-h5 md:text-h4 mb-12 md:mb-16">About this property</h3>
				<p class="text-body-3 md:text-body-1 text-gray">{{ property.about }}</p>
			</div>
		</div>
	</div>

	<div class="max-w-screen-xl mx-auto separator-vertical"/>

	<div
		v-if="similarProperties.length"
		class="section-padding mb-64 mt-40 md:mt-80 md:mb-120"
	>
		<div class="max-w-screen-xl mx-auto">
			<h2 class="text-h4 md:text-h2 mb-32 md:mb-56 text-center">Similar properties in this area</h2>
			<PropertyCardsSetOf3 :properties="similarProperties"/>
		</div>
	</div>

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
	background: url('/assets/images/room.png');
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
