<script setup lang="ts">
import { ITestimonial } from '~/types';

const TESTIMONIALS_SECTION = {
	testimonials: [
		{
			text: 'Lorem ipsum dolor  scelerisque aenean interdum cras nunc id pellentesque.',
			fullName: 'John Doe',
		},
		{
			text: 'Lorem ipsum dolor sit amet consectetur. Magna sodales scelerisque aenean interdum cras nunc id pellentesque.',
			fullName: 'Sara Croft',
		},
		{
			text: 'Lorem ipsum dolor sit. Magna sodales scelerisque aenean interdum cras nunc id pellentesque.',
			fullName: 'John Ferio',
		},
	] as ITestimonial[],
};

const {
	index: activeTestimonialIndex,
	next: goToNextTestimonial,
	prev: goToPrevTestimonial,
	setIndex: setCurrentTestimonial,
	activeItem: activeTestimonial,
} = useCarousel<ITestimonial>({
	length: TESTIMONIALS_SECTION.testimonials.length,
	items: TESTIMONIALS_SECTION.testimonials,
});

const swiperInstance = useSwiper();

const controlledSwiper = ref<typeof swiperInstance>({});
const setControlledSwiper = (swiper: any) => {
	controlledSwiper.value = swiper;
};
</script>

<template>
	<div class="relative testimonials-section section-padding my-120 lg:my-160 2xl:my-200  py-[16rem] md:py-120 lg:py-[18rem] 2xl:py-[32rem] md:px-120">
		<div class="image-cover-yellow-dark" />
		<div class="max-w-screen-xl mx-auto text-white relative z-100">
			<img
				class="mb-24"
				src="/assets/icons/quote.svg"
				alt=""
			/>
			<div class="max-w-[80rem] text-left">
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
						v-for="testimonial in TESTIMONIALS_SECTION.testimonials"
						:key="testimonial.fullName"
					>
						<div :key="activeTestimonial.text">
							<h3 class="text-h4 md:text-h3 mb-16 md:mb-32">{{ testimonial.text }}</h3>
							<h6 class="mb-32 md:mb-54">{{ testimonial.fullName }}</h6>
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
						:length="TESTIMONIALS_SECTION.testimonials.length"
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
.testimonials-section {
	background: url('/assets/images/testimonials-background.png');
	background-size: cover;
	background-position: 80%;
	background-repeat: no-repeat;
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

@screen md {
	.testimonials-section {
	background: url('/assets/images/testimonials-background.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
}
</style>
