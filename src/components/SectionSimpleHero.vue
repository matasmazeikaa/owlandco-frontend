<script lang="ts" setup>
import { IHero } from '~/types';

defineProps<IHero>();
</script>

<template>
	<div class="section-padding mb-120 lg:mb-160 2xl:mb-200">
		<div class="relative overflow-hidden rounded-[4rem] mx-auto text-white text-center flex justify">
			<NuxtImg
				provider="cloudinary"
				class="absolute inset-0 w-full h-full object-cover object-center z-[-1] rounded-[4rem]"
				:src="backgroundImage?.data?.attributes?.hash || 'none'"
				quality="85"
				sizes="xxl:100vw xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
				preload
			/>

			<div class="main-bg-cover"/>
			<div class="py-[4.4rem] md:py-120 container mx-auto z-[3] relative flex flex-col justify-center items-center">
				<h1
					class="mb-8 md:mb-24 max-w-[96rem]"
					data-aos="fade-up"

					data-aos-delay="100"
				>
					{{ title }}
				</h1>
				<p
					class="body-1-white mb-24 md:mb-40 max-w-[55.6rem]"
					data-aos="fade-up"

					data-aos-delay="200"
				>
					{{ subtitle }}
				</p>

				<div
					class="flex"
				>
					<Button
						v-for="button in ctaButton"
						:key="button.text"
						data-aos="fade-up"
						data-aos-delay="300"
						:to="button?.page?.data?.attributes.url"
					>
						{{ button.text }}
					</Button>
				</div>
			</div>
		</div>
	</div>
</template>
