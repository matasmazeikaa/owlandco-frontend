<script setup lang="ts">import {
	IProperty, PaginationByPage,
} from '~/types';

interface Props {
	title: string;
	description: string;
}

defineProps<Props>();

const { find } = useStrapi();

const { data: properties } = await useAsyncData(
	'homeProperties',
	() => find<IProperty>('properties', {
		populate: 'images',
		sort: [
			// @ts-ignore
			{
				createdAt: 'desc',
			},
		],
		pagination: {
			start: 0,
			limit: 2,
		},
	}),
);

const totalProperties = (properties.value?.meta?.pagination as PaginationByPage)?.total ?? 1;
</script>

<template>
	<div class="section-padding my-64 md:my-80 lg:my-120 text-white text-center">
		<div class="max-w-screen-xl mx-auto text-center">
			<div class=" mb-56">
				<h2
					class="text-h4 md:text-h2 text-primary-black mb-16"
					data-aos="fade-up"
				>
					{{ title }}
				</h2>
				<p
					data-aos="fade-up"
					class="body-2-gray md:body-1-gray mx-auto max-w-[55.6rem]"
				>
					{{ description }}
				</p>
			</div>

			<PropertyCardsSetOf3
				v-if="properties?.data"
				:properties="properties?.data ?? []"
			/>

			<Button
				class="mb-16"
				to="/rent"
				data-aos="fade-up"
			>
				See all properties
			</Button>

			<p
				class="text-body-3 text-gray"
				data-aos="fade-up"
			>
				{{ totalProperties }} more properties for rent
			</p>
		</div>
	</div>
</template>
