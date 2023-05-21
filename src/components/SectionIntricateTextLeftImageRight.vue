<script lang="ts" setup>
interface Props {
	title: string;
	subtitle: string;
	image: string;
	imageAlt: string;
	firstSubItem: {
		title: string;
		subtitle: string;
	};
	secondSubItem: {
		title: string;
		subtitle: string;
	};
}

defineProps<Props>();
</script>

<template>
	<div class="section-padding 2xl:my-200 lg:my-160 my-120">
		<div class=" max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
			<div class="md:mr-64 md:w-5/12">
				<div class="mb-32">
					<h2
						class="text-h4 mb-16 md:text-h3"
						data-aos="fade-up"
					>
						{{ title }}
					</h2>
					<p
						class="body-2-gray md:body-1-gray mb-24 md:mb-32"
						data-aos="fade-up"
					>
						{{ subtitle }}
					</p>
					<div class="flex gap-8 md:gap-32">
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
				</div>
			</div>

			<div
				class='w-full md:w-7/12 ml-auto flex justify-end max-w-[63rem]'
				data-aos="fade-up"
			>
				<NuxtImg
					class='rounded-[4rem] w-full'
					:src="image"
					:alt="imageAlt"
				/>
			</div>
		</div>
	</div>
</template>
