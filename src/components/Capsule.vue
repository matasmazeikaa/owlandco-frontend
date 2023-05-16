<script lang="ts" setup>
import { CapsuleBackground } from '~/types';

interface Props {
	title: string;
	background: CapsuleBackground;
}

defineProps<Props>();

</script>

<template>
	<p
		class="w-fit rounded-full text-tag text-primary-purple bg-primary-yellow py-[0.4rem] px-[0.8rem]"
		:class="{ '!bg-gray-french': background === 'gray', }"
	>
		{{ title }}
	</p>
</template>
