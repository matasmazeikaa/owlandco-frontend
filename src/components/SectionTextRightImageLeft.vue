<script lang="ts" setup>
interface Props {
	title: string;
	description: string;
	image: any;
}

defineProps<Props>();
</script>

<template>
	<div class="section-padding mb-120 md:mb-200">
		<div class=" max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center">
			<div class='mt-32 md:mb-0 md:mr-64 w-full md:w-7/12 flex justify-end max-w-[63rem]'>
				<NuxtImg
					provider="cloudinary"
					quality="85"
					sizes="xxl:100vw xl:100vw lg:100vw md:100vw sm:100vw xs:100vw"
					preload
					:src="image?.data?.attributes?.hash"
					class='rounded-[4rem] w-full'
					data-aos="fade-up"
				/>
			</div>

			<div class="ml-auto md:w-5/12">
				<div >
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
			</div>
		</div>
	</div>
</template>
