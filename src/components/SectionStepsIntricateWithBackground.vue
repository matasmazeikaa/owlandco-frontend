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
		<div class="max-w-screen-xl mx-auto text-left md:text-center">
			<div class="md:mb-56 mb-32">
				<h2
					class="text-h4 md:text-h2 mb-16"
					data-aos="fade-up"
				>
					{{ title }}
				</h2>
				<p
					class="body-1-gray-french  md:mx-auto max-w-[55.6rem]"
					data-aos="fade-up"
				>
					{{ subtitle }}
				</p>
			</div>

			<div class="grid grid-cols-1 mb-32 md:mb-56 md:grid-cols-3 gap-x-[13.6rem] gap-y-64">
				<div
					v-for="(item, index) in items"
					:key="item.title"
					class="relative md:flex items-center first:pl-0 last:pr-0 after:-right-[6.8rem] after:h-full after:w-[0.5px] after:absolute last:after:hidden after:bg-primary-dark-purple"
					data-aos="fade-up"
					:data-aos-delay="100 * (index + 1)"
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

			<Button
				:to="ctaLink"
				data-aos="fade-up"
			>
				{{ ctaText }}
			</Button>
		</div>
	</div>
</template>
