<script lang="ts" setup>
import {
	IProperty, Strapi4ResponseData,
} from '@/types';

interface Props {
	properties: Strapi4ResponseData<IProperty>[];
}

defineProps<Props>();
</script>

<template>
	<div class="max-w-screen-x mx-auto">
		<div class="grid grid-flow-col gap-x-16 overflow-x-scroll max-w-screen-xl lg:flex items-center w-full justify-between mb-32 lg:mb-56">
			<PropertyCard
				v-for="(property, index) in properties || []"
				:key="property.attributes.slug"
				class="w-[27.2rem] lg:w-[30%] mx-auto lg:mx-[1.4rem] first:ml-0 last:mr-0"
				:property="property.attributes"
				data-aos="fade-up"

				:data-aos-delay="100 * index + 1"
			/>
		</div>
	</div>
</template>
