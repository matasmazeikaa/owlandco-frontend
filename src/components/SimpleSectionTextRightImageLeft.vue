<script lang="ts" setup>
interface Props {
	title: string;
	subtitle: string;
	image: string;
}

defineProps<Props>();
</script>

<template>
	<div class="section-padding mb-120 md:mb-200">
		<div class=" max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center">
			<div class='mt-32 md:mb-0 md:mr-64 w-full md:w-7/12 flex justify-end max-w-[63rem]'>
				<NuxtImg
					class='rounded-[4rem] w-full'
					:src="image"
					alt="people sitting in a house"
				/>
			</div>

			<div class="ml-auto md:w-5/12">
				<div >
					<h2 class="text-h4 mb-16 md:text-h3">{{ title }}</h2>
					<p class="body-2-gray md:body-1-gray">{{ subtitle }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
