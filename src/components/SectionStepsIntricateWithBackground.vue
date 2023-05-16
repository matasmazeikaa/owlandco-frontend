<script lang="ts" setup>
interface Props {
	title: string;
	subtitle: string;
	ctaText: string;
	ctaLink: string;
	items: { title: string, icon: string, subtitle: string }[]
}

defineProps<Props>();
</script>

<template>
	<div class="section-padding py-64 md:py-80 lg:py-120 bg-primary-purple text-white text-center">
		<div class="max-w-screen-xl mx-auto text-center">
			<div class="md:mb-56 mb-32">
				<h2 class="text-h4 md:text-h2 mb-16"> {{ title }} </h2>
				<p class="body-1-gray-french mx-auto max-w-[55.6rem]"> {{ subtitle }} </p>
			</div>

			<div class="flex flex-col gap-64 md:flex-row items-center w-full justify-between mb-32 md:mb-56">
				<div
					v-for="item in items"
					:key="item.title"
					class="relative md:flex md:w-1/3 items-center first:pl-0 last:pr-0  after:box-content after:absolute after:left-0 after:-bottom-32 last:after:hidden after:w-full after:h-[0.5px] after:bg-primary-dark-purple"
				>
					<div class="text-left md:max-w-[33.6rem]">
						<img
							:src="item.icon"
							alt=''
							class="mb-16 md:mb-24"
						/>
						<h3 class="text-h5 mb-8">{{ item.title }}</h3>
						<p class="body-2-gray-french">{{item.subtitle}}</p>
					</div>
				</div>
			</div>

			<Button :to="ctaLink">{{ ctaText }}</Button>
		</div>
	</div>
</template>
