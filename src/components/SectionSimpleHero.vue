<script lang="ts" setup>
interface Props {
	title: string;
	subtitle: string;
	backgroundImage: string;
	ctaText: string;
	ctaLink: string;
}

defineProps<Props>();
</script>

<template>
	<div class="section-padding mb-120 lg:mb-160 2xl:mb-200">
		<div class="relative mx-auto text-white text-center flex justify main-bg">
			<div class="main-bg-cover"/>
			<div class="py-[4.4rem] md:py-120 container mx-auto z-[3] relative flex flex-col justify-center items-center">
				<h1 class="mb-8 md:mb-24 max-w-[96rem]">
					{{ title }}
				</h1>
				<p class="body-1-white mb-24 md:mb-40 max-w-[55.6rem]">
					{{ subtitle }}
				</p>

				<div class="flex mb-24">
					<Button :to="ctaLink">{{ ctaText }}</Button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.main-bg {
	background: url(v-bind(backgroundImage));
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 4rem;
	width: 100%;
}

.main-bg-cover {
	background: linear-gradient(180deg, #181717 0%, rgba(24, 23, 23, 0) 70.56%);
	opacity: 0.88;
	width: 100%;
	height: 100%;
	border-radius: 4rem;
	position: absolute;
	left: 0;
	top: 0;
}
</style>
