<script lang="ts" setup>
interface Props {
	title: string;
	steps: {
		title: string;
		description: string;
	}[];
	isLines?: boolean;
	noSeparators: boolean;
}

defineProps<Props>();
</script>

<template>
	<div class="section-padding my-120 md:my-[16rem]">
		<div class="mx-auto max-w-screen-xl">
			<h2 class="mb-32 md:mb-56 text-center">{{ title }}</h2>

			<div class="grid grid-cols-1 md:grid-cols-3 gap-x-[13.6rem] gap-y-32 md:gap-y-56">
				<div
					v-for="(step, index) in steps"
					:key="step.title"
					class="max-w-[33.6rem] relative"
				>
					<div class="flex justify-center items-center bg-primary-purple text-white rounded-full w-40 h-40 mb-16 md:mb-24">
						<p class="text-button">{{ index + 1 }}</p>
					</div>
					<h3 class="text-h5 mb-8">{{ step.title }}</h3>
					<p class="body-2-gray">{{ step.description }}</p>

					<div
						v-if="index !== steps.length - 1 && !noSeparators"
						class="separator-horizontal -right-[6.8rem] top-0 absolute hidden md:block"
					/>

					<LongArrowDown
						v-if="index === 0 && !isLines && !noSeparators"
						class="absolute -right-[11rem] top-[15rem]  hidden md:block "
					/>
					<LongArrowTop
						v-if="index === 1 && !isLines && !noSeparators"
						class="absolute -right-[11rem] top-[8rem]  hidden md:block"
					/>
				</div>
			</div>
		</div>
	</div>
</template>
