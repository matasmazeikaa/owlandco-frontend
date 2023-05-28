<script lang="ts" setup>
import { ICTAButton } from '~/types';

interface Props {
	title: string;
	description: string;
	image: any;
	ctaButton?: ICTAButton;
	firstSubItem?: {
		title: string;
		subtitle: string;
	};
	secondSubItem?: {
		title: string;
		subtitle: string;
	};
	nameOverlay?: {
		title: string;
		subtitle: string;
	};
}

defineProps<Props>();

</script>
<template>
	<div class="section-padding mb-64 mt-120 md:mt-160 md:mb-120">
		<div class=" max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
			<div class="mb-32 md:mb-0 md:mr-64 md:w-5/12">
				<div class="mb-24 md:mb-32">
					<h2
						class="text-h4 mb-16 md:text-h3"
						data-aos="fade-up"
					>
						{{ title }}
					</h2>
					<p
						class="body-2-gray md:body-1-gray"
						data-aos="fade-up"
					>
						{{ description }}
					</p>
				</div>

				<div
					v-if="firstSubItem && secondSubItem"
					class="flex gap-8 md:gap-32"
				>
					<div>
						<h5
							class="text-h5 md:text-h3"
							data-aos="fade-up"
						>
							{{ firstSubItem.title }}
						</h5>
						<p
							class="text-body-3 md:text-button"
							data-aos="fade-up"
						>
							{{ firstSubItem.subtitle }}
						</p>
					</div>
					<div>
						<h5
							class="text-h5 md:text-h3"
							data-aos="fade-up"
						>
							{{ secondSubItem.title }}
						</h5>
						<p
							class="text-body-3 md:text-button"
							data-aos="fade-up"
						>
							{{ secondSubItem.subtitle }}
						</p>
					</div>
				</div>

				<Button
					v-if="ctaButton"
					:to="ctaButton.page?.data?.attributes?.url ?? ''"
					data-aos="fade-up"
				>
					{{ ctaButton.text  }}
				</Button>
			</div>

			<div
				class='w-full md:w-7/12 ml-auto flex justify-end max-w-[63rem] relative'
				data-aos="fade-up"
			>
				<NuxtImg
					provider="cloudinary"
					quality="85"
					sizes="xxl:100vw xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
					preload
					class='rounded-[4rem] w-full'
					:src="image?.data?.attributes?.hash"
					alt="about us image"
				/>

				<template v-if="nameOverlay?.title">
					<div
						class="image-cover-yellow"
					/>
					<div class="absolute left-24 bottom-24 md:left-32 md:bottom-32">
						<p
							class="text-h6 md:text-h5"
						>
							{{ nameOverlay.title }}
						</p>
						<p
							class="button"
						>
							{{ nameOverlay.subtitle }}
						</p>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>
