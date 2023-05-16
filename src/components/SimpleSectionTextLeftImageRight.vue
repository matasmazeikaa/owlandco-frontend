<script lang="ts" setup>
interface Props {
	title: string;
	subtitle: string;
	image: string;
}

defineProps<Props>();
</script>
<template>
	<div class="section-padding mb-64 mt-120 md:mt-160 md:mb-120">
		<div class=" max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
			<div class="md:mr-64 md:w-5/12">
				<div class="mb-32">
					<h2 class="text-h4 mb-16 md:text-h3">{{ title }}</h2>
					<p class="body-2-gray md:body-1-gray">{{ subtitle }} </p>
				</div>
			</div>

			<div class='w-full md:w-7/12 ml-auto flex justify-end max-w-[63rem]'>
				<NuxtImg
					class='rounded-[4rem] w-full'
					:src="image"
					alt="people sitting in a house"
				/>
			</div>
		</div>
	</div>
</template>
