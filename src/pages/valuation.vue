<script lang="ts" setup>

const VALUATION_PAGE_SECTION_STEPS = {
	title: 'Property valuation process',
	steps: [
		{
			title: 'Send Valuation Request',
			description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
		},
		{
			title: 'Online or Real Visit',
			description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
		},
		{
			title: 'Received Valuation',
			description: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
		},
	],
};

</script>

<template>
	<ValuationFormSection />
	<SectionSteps
		:title="VALUATION_PAGE_SECTION_STEPS.title"
		:steps="VALUATION_PAGE_SECTION_STEPS.steps"
		is-arrows
		no-separators
	/>
	<TestimonialsSection />
	<SubscribeSection />
</template>
