<script lang="ts" setup>
import gsap from 'gsap';
import {
	ref, reactive, watch,
} from 'vue';

const propertiesForRent = reactive({
	number: 0,
});
const propertiesForSale = reactive({
	number: 0,
});
const propertyValuations = reactive({
	number: 0,
});
const completedInvestments = reactive({
	number: 0,
});

const propertiesForRentChange = ref(0);
const propertiesForSaleChange = ref(0);
const propertyValuationsChange = ref(0);
const completedInvestmentsChange = ref(0);

watch(propertiesForRentChange, (n) => {
	gsap.to(propertiesForRent, {
		duration: 4,
		number: Number(n) || 0,
	});
});

watch(propertiesForSaleChange, (n) => {
	gsap.to(propertiesForSale, {
		duration: 4,
		number: Number(n) || 0,
	});
});

watch(propertyValuationsChange, (n) => {
	gsap.to(propertyValuations, {
		duration: 4,
		number: Number(n) || 0,
	});
});

watch(completedInvestmentsChange, (n) => {
	gsap.to(completedInvestments, {
		duration: 4,
		number: Number(n) || 0,
	});
});

onMounted(() => {
	propertiesForRentChange.value = 75;
	propertiesForSaleChange.value = 42;
	propertyValuationsChange.value = 562;
	completedInvestmentsChange.value = 2.5;
});
</script>

<template>
	<div class="grid grid-cols-2 xl:min-w-[112rem] gap-y-16 lg:grid-cols-4 w-full place-items-center backdrop-blur-sm bg-white bg-opacity-10 rounded-[2.4rem] p-16 md:py-20 md:px-36">
		<div
			class="text-center justify-center w-full flex items-center relative"
		>
			<div>
				<p class="text-h5 md:text-h3 whitespace-nowrap">{{ propertiesForRent.number.toFixed(0) }}</p>
				<p class="button-1 lowercase">properties for rent</p>
			</div>
			<div class="separator-horizontal w-[0.5px] absolute -right-[-1px] h-[4rem]"/>
		</div>
		<div
			class="text-center justify-center w-full flex items-center relative"
		>
			<div>
				<p class="text-h5 md:text-h3 whitespace-nowrap">{{ propertiesForSale.number.toFixed(0) }}</p>
				<p class="button-1 lowercase">properties for sale</p>
			</div>
			<div class="separator-horizontal w-[0.5px] absolute -right-[-1px] h-[4rem] hidden lg:block"/>
		</div>
		<div
			class="text-center justify-center w-full flex items-center relative"
		>
			<div>
				<p class="text-h5 md:text-h3 whitespace-nowrap">{{ propertyValuations.number.toFixed(0) }}+</p>
				<p class="button-1 lowercase">property valuations</p>
			</div>
			<div class="separator-horizontal w-[0.5px] absolute -right-[-1px] h-[4rem]"/>
		</div>
		<div
			class="text-center justify-center w-full flex items-center relative"
		>
			<div>
				<p class="text-h5 md:text-h3 whitespace-nowrap">£{{ completedInvestments.number.toFixed(1) }}M</p>
				<p class="button-1 lowercase">completed investments</p>
			</div>
		</div>
	</div>
</template>
