<script lang="ts" setup>
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';

import { CapsuleBackground } from '~/types';

dayjs.extend(advancedFormat);

interface Props {
	availableFrom: string;
}

const props = defineProps<Props>();

const getDateFormat = (date: string) => {
	const availableFrom = dayjs(date);

	return `Available from 
		${availableFrom.format('Do')} of 
		${availableFrom.format('MMMM')} 
		${availableFrom.format('YYYY')}
		`;
};

const availability = computed((): { title: string, background: CapsuleBackground } => {
	const isAvailable = new Date(props.availableFrom) > new Date();

	return isAvailable ? {
		title: 'Available',
		background: 'yellow',
	} : {
		title: getDateFormat(props.availableFrom),
		background: 'gray',
	};
});

</script>

<template>
	<p
		class="w-fit rounded-full text-tag text-primary-purple bg-primary-yellow py-[0.4rem] px-[0.8rem]"
		:class="{ '!bg-gray-french': availability.background === 'gray', }"
	>
		{{ availability.title }}
	</p>
</template>
