<script lang="ts" setup>
import * as dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import {
	CapsuleBackground, IProperty,
} from '~/types';

dayjs.extend(advancedFormat);

interface Props {
   property: IProperty;
}

const props = defineProps<Props>();

const getDateFormat = (date: string) => {
	const availableFrom = dayjs(date);

	return `Available from 
		${availableFrom.format('Do')} of 
		${availableFrom.format('MMMM')} 
		${availableFrom.format('YYYY')}
		`;
};

const availability = computed((): { title: string, background: CapsuleBackground } => {
	const isAvailable = new Date(props.property.availableFrom) > new Date();

	return isAvailable ? {
		title: 'Available',
		background: 'yellow',
	} : {
		title: getDateFormat(props.property.availableFrom),
		background: 'gray',
	};
});
</script>

<template>
	<div class="relative text-left p-16 lg:p-24 pt-0 rounded-[1.6rem] bg-[length:200px_100px]">
		<div class="card-background"/>

		<Swiper
			v-if="property.images.data?.length"
			:modules="[SwiperAutoplay, SwiperEffectCreative]"
			:slides-per-view="1"
			loop
			:effect="'creative'"
			class="mb-24 h-[16.8rem] lg:h-[24rem] rounded-[1.6rem] overflow-hidden relative"
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
		>
			<Indicators
				class="absolute bottom-16 left-0 z-[2] w-full justify-center items-center"
				:length="property.images.data?.length"
				size="12px"
			/>
			<SwiperSlide
				v-for="image in property.images.data"
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
				/>
			</SwiperSlide>
		</Swiper>

		<div class="z-[3] relative text-white">
			<Capsule
				class="mb-20"
				:title="availability.title"
				:background="availability.background"
			/>
			<h6 class="text-h6 mb-8">{{ property.address }}</h6>
			<h5 class="text-h5 mb-16">£{{ property.price }} per month</h5>
			<div class="flex gap-16 mb-24">
				<div class="flex items-center">
					<img
						class="mr-8 text-button"
						src="@/assets/icons/bed.svg"
					/>
					<p>{{ property.bedrooms }}</p>
				</div>
				<div class="flex items-center">
					<img
						class="mr-8 text-button"
						src="@/assets/icons/bath.svg"
					/>
					<p>{{ property.bathrooms }}</p>
				</div>
			</div>

			<div class="flex items-center cursor-pointer text-gray-french hover:opacity-75 transition-opacity">
				<NuxtLink
					class="text-button text-gray-french mr-8"
					:to="`/rent/${property.slug}`"
				>
					Learn more
				</NuxtLink>
				<ArrowRight class="mr-8 text-button" />
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
