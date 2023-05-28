<script lang="ts" setup>
import { IProperty } from '~/types';
import {
	SwiperAutoplay, SwiperEffectCreative,
} from '~~/.nuxt/imports';

interface Props {
   property: IProperty;
}

defineProps<Props>();

const swiperInstance = useSwiper();

const controlledSwiper = ref<typeof swiperInstance>({} as typeof swiperInstance);
const setControlledSwiper = (swiper: any) => {
	controlledSwiper.value = swiper;
};
</script>

<template>
	<div class="relative text-left p-16 lg:p-24 pt-0 rounded-[1.6rem] bg-[length:200px_100px]">
		<div class="card-background"/>

		<Swiper
			v-if="property?.images?.data?.length"
			:modules="[SwiperAutoplay, SwiperEffectCreative]"
			:slides-per-view="1"
			loop
			:effect="'creative'"
			class="mb-24 h-[16.8rem] w-[24rem] lg:w-full lg:h-[24rem] rounded-[1.6rem] overflow-hidden relative"
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
				:length="property?.images?.data?.length"
				size="12px"
				:active-indicator-index="controlledSwiper.realIndex"
				@on-click="controlledSwiper?.slideTo($event)"
			/>
			<SwiperSlide
				v-for="(image, index) in property.images.data"
				:key="image.attributes.url"
				class="!rounded-[1.6rem] !overflow-hidden w-[24rem] h-[16.8rem] lg:w-[36rem] lg:h-[24rem]"
			>
				<NuxtImg
					provider="cloudinary"
					class="w-[24rem] h-[16.8rem] lg:w-[36rem] lg:h-[24rem] rounded-[1.6rem] z-[2] relative mx-auto"
					:src="image.attributes.hash"
					quality="85"
					width="600"
					height="600"
					:alt="`${property.address} - property image ${index}`"
				/>
			</SwiperSlide>
		</Swiper>

		<div class="z-[3] relative text-white">
			<Capsule
				class="mb-20"
				:available-from="property.availableFrom"
			/>
			<p class="text-h6 mb-8">{{ property.address }}</p>
			<p class="text-h5 mb-16">£{{ property.price }} per month</p>
			<div class="flex gap-16 mb-24">
				<div class="flex items-center">
					<img
						class="mr-8 text-button"
						src="@/assets/icons/bed.svg"
						alt=""
					/>
					<p>{{ property.bedrooms }}</p>
				</div>
				<div class="flex items-center">
					<img
						class="mr-8 text-button"
						src="@/assets/icons/bath.svg"
						alt=""
					/>
					<p>{{ property.bathrooms }}</p>
				</div>
			</div>

			<div class="flex items-center cursor-pointer text-gray-french hover:opacity-75 transition-opacity">
				<NuxtLink
					class="text-button flex gap-8 text-gray-french mr-8"
					:to="`/rent/${property.slug}`"
					:aria-label="`Learn more about ${property.address}`"
				>
					Learn more
					<ArrowRight class="text-button" />
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<style scoped>
.card-background {
	height: 80%;
	color: var(--primary-purple);
	width: 100%;
	position: absolute;
	left: 0;
	bottom: 0;
	background-color: var(--primary-purple);
	border-radius: 1.6rem;
	z-index: 1;
}

@screen lg {
	.card-background {
		color: var(--primary-purple);
		width: 100%;
		height: 60%;
		position: absolute;
		left: 0;
		bottom: 0;
		background-color: var(--primary-purple);
		border-radius: 1.6rem;
		z-index: 1;
	}
}
</style>
