<script setup lang="ts">
import { Strapi4ResponseSingle } from '~/types';

const { findOne } = useStrapi();

const { data: testimonialSection } = await useAsyncData(
	'testiomonials',
	() => findOne<{backgroundImage: Strapi4ResponseSingle<{hash: string}>, testimonials: {fullName: string, text: string}[]}>('testimonial-section', {
		populate: '*',
	}),
);

const backgroundImage = computed(() => testimonialSection.value?.data.attributes.backgroundImage.data.attributes.hash ?? '');
const testimonials = computed(() => testimonialSection.value?.data.attributes.testimonials ?? []);

const swiperInstance = useSwiper();

const controlledSwiper = ref<typeof swiperInstance>({} as typeof swiperInstance);
const setControlledSwiper = (swiper: any) => {
	controlledSwiper.value = swiper;
};
</script>

<template>
	<div class="relative section-padding my-120 lg:my-160 2xl:my-200  py-[16rem] md:py-120 lg:py-[18rem] 2xl:py-[32rem] md:px-120">
		<NuxtImg
			provider="cloudinary"
			class="absolute inset-0 w-full h-full testimonials-background z-[-1]"
			:src="backgroundImage"
			quality="85"
			sizes="xxl:100vw xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
			alt="people that gave testimonials in a background"
		/>

		<div class="image-cover-yellow-dark" />
		<div class="max-w-screen-xl mx-auto text-white relative z-100">
			<img
				class="mb-24"
				src="/assets/icons/quote.svg"
				alt=""
			/>
			<div
				class="max-w-[80rem] text-left"
				data-aos="fade-up"
			>
				<Swiper
					:slides-per-view="1"
					loop
					:effect="'creative'"
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
					<SwiperSlide
						v-for="testimonial in testimonials"
						:key="testimonial.fullName"
					>
						<div>
							<p class="text-h4 md:text-h3 mb-16 md:mb-32">{{ testimonial.text }}</p>
							<p class="mb-32 md:mb-54">{{ testimonial.fullName }}</p>
						</div>
					</SwiperSlide>
				</Swiper>

				<div class="flex items-center gap-24">
					<ArrowRight
						class="cursor-pointer hover:opacity-75 transition-opacity rotate-180"
						role="button"
						alt="previous testimonial"
						aria-label="previous testimonial"
						@click="controlledSwiper.slidePrev()"
					/>
					<Indicators
						:active-indicator-index="controlledSwiper.realIndex"
						:length="testimonials.length"
						@on-click="controlledSwiper?.slideTo($event)"
					/>
					<ArrowRight
						class="cursor-pointer hover:opacity-75 transition-opacity"
						role="button"
						alt="next testimonial"
						aria-label="next testimonial"
						@click="controlledSwiper.slideNext()"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.testimonials-background {
	object-fit: cover;
	object-position: 81%;
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
</style>
