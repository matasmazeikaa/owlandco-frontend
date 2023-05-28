<script lang="ts" setup>
import { ICTAButton } from '~/types';

interface Props {
	title: string;
	description: string;
	ctaButton?: ICTAButton;
	firstSubItem?: {
		title: string;
		subtitle: string;
	};
	secondSubItem?: {
		title: string;
		subtitle: string;
	};
}

defineProps<Props>();
</script>

<template>
	<div class="section-padding mb-120 md:mb-160">
		<div class="max-w-screen-xl mx-auto bg-primary-yellow py-48 md:py-96 section-padding rounded-[4rem] text-center">
			<h2
				class="text-h4 md:text-h1 mb-16"
				data-aos="fade-up"
			>
				{{title }}
			</h2>
			<p
				class="body-2-gray max-w-[55.6rem] mb-32 md:mb-40 md:body-1-gray mx-auto"
				:class="{ 'md:mb-56': firstSubItem || secondSubItem }"
				data-aos="fade-up"
			>
				{{description}}
			</p>

			<div
				v-if="firstSubItem && secondSubItem"
				class="flex gap-24 flex-col md:flex-row md:gap-32 mb-32 md:mb-56 justify-center"
				data-aos="fade-up"
			>
				<div>
					<h5 class="text-h5 md:text-h3 md:mb-8">{{ firstSubItem.title }}</h5>
					<p class="text-gray text-body-3 md:text-button">{{ firstSubItem.subtitle }}</p>
				</div>
				<div>
					<h5 class="text-h5 md:text-h3 md:mb-8">{{ secondSubItem.title }}</h5>
					<p class="text-gray text-body-3 md:text-button">{{ secondSubItem.subtitle }}</p>
				</div>
			</div>

			<Button
				v-if="ctaButton"
				:to="ctaButton.page.data.attributes.url"
				black
				data-aos="fade-up"
			>
				{{ ctaButton.text }}
			</Button>
		</div>
	</div>
</template>
