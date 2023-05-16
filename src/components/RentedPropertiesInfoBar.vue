<script lang="ts" setup>
interface Props {
	items: {
		title: string;
		value: string;
	}[];
}

defineProps<Props>();
</script>

<template>
	<div class="grid grid-cols-2 gap-y-16 gap-x-32 justify-center md:gap-0 md:flex mx-auto w-fit backdrop-blur-sm bg-white bg-opacity-10 rounded-[2.4rem] p-16 md:py-20 md:px-36">
		<div
			v-for="(item, index) in items"
			:key="item.title"
			class="text-center flex items-center relative md:after:hidden after:even:hidden after:box-content after:w-[0.5px] after:h-[40px] after:absolute after:-right-16 after:bg-white"
		>
			<div>
				<h3 class="text-h5 md:text-h3 whitespace-nowrap">{{ item.value }}</h3>
				<p class="button-1 lowercase">{{ item.title }}</p>
			</div>
			<div
				v-if="index !== items.length - 1"
				class="separator hidden md:block"
			/>
		</div>
	</div>
</template>

<style scoped>
.separator {
	width: 0.5px;
	background: white;
	height: 100%;
	margin: 0 3vw;
	height: 4rem;
}

</style>
