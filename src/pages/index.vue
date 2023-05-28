<script lang="ts" setup>
const {
	hero,
	sections,
} = await useStrapiPage('home');
</script>

<template>
	<div class="section-padding">
		<div class="relative mx-auto text-white text-center flex justify">
			<NuxtImg
				provider="cloudinary"
				class="absolute inset-0 w-full h-full object-cover object-center z-[-1] rounded-[4rem]"
				src="room_deb086402d.png"
				quality="85"
				sizes="xxl:100vw xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
				preload
			/>
			<div class="main-bg-cover"/>
			<div class="pt-[4.4rem] pb-24 pr-24 pl-24 md:pb-80 md:pt-120 2xl:pt-[28.4rem] 2xl:pb-120 max-w-screen-xl mx-auto z-[3] relative flex flex-col justify-center items-center">
				<h1
					class="mb-8 md:mb-24 max-w-[80rem]"
					data-aos="fade-up"
					data-aos-delay="50"
				>
					{{ hero?.title }}
				</h1>

				<p
					data-aos="fade-up"
					data-aos-delay="100"

					class="body-1-white mb-24 md:mb-40 max-w-[55.6rem]"
				>
					{{ hero?.subtitle }}
				</p>

				<div
					class="flex mb-24 md:mb-80"
					data-aos="fade-up"
					data-aos-delay="200"
				>
					<Button
						class="mr-16"
						to="/rent"
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

				<RentedPropertiesInfoBar
					data-aos="fade-up"
					data-aos-delay="300"
				/>
			</div>
		</div>
	</div>

	<Component
		:is="section.component"
		v-for="section in sections"
		:key="section.id"
		v-bind="section"
	/>

	<TestimonialsSection />

	<SubscribeSection />
</template>
