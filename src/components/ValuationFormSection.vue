<script lang="ts" setup>
const VALUATION_FORM_SECTION = {
	title: 'Find out your home’s value for sale or rent',
	subtitle: 'Lorem ipsum dolor sit amet consectetur. Neque facilisi tristique tristique netus est cras. Felis vel sed arcu diam eget luctus.',
	items: [
		{
			title: 'Trusted agents',
			subtitle: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
			icon: '/assets/icons/badge-fill.svg',
		},
		{
			title: 'Best Value for Your Property',
			subtitle: 'Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.',
			icon: '/assets/icons/hand-money.svg',
		},
	],
};

const form = reactive({
	name: '',
	email: '',
	phone: '',
	message: '',
	bedrooms: 1,
});

const handleBedroomsChange = (value: number) => {
	const newValue = form.bedrooms + value;

	if (newValue < 1) {
		return;
	}

	if (newValue > 9) {
		return;
	}

	form.bedrooms += value;
};

const handleBedroomsInput = (value: string) => {
	if (value.length === 0) {
		form.bedrooms = 1;

		return;
	}

	const numberValue = Number(value);

	console.log(numberValue, 'numberValue');

	if (Number.isNaN(numberValue)) {
		return;
	}

	if (numberValue < 1) {
		form.bedrooms = 1;
	}

	if (numberValue > 9) {
		form.bedrooms = 9;
	}
};
</script>

<template>
	<div class="section-padding items-center max-w-screen-xl mx-auto pt-48 md:pt-80 grid grid-cols-1 lg:grid-cols-2 gap-40 lg:gap-80">
		<div class="flex flex-col">
			<h1 class="text-h4 md:text-h1 mb-8 md:mb-24">{{ VALUATION_FORM_SECTION.title }}</h1>
			<p class="body-2-gray md:body-1-gray mb-24 md:mb-40">{{ VALUATION_FORM_SECTION.subtitle }}</p>

			<div class="flex flex-col gap-40">
				<div
					v-for="item in VALUATION_FORM_SECTION.items"
					:key="item.title"
				>
					<img
						:src="item.icon"
						class="mb-16 md:mb-24"
					/>
					<h5 class="text-h5">{{ item.title }}</h5>
					<p class="body-2-gray">{{ item.subtitle }}</p>
				</div>
			</div>
		</div>

		<div class="py-48 px-16 md:px-48 bg-primary-purple rounded-[4rem] h-max relative">
			<div class="contact-form-background w-full h-full absolute top-0 left-0 pointer-events-none" />
			<h2 class="mb-32 text-h4 md:text-h2 text-white">Send us a message</h2>
			<FormKit
				type="form"
				:classes="{ form: 'flex flex-col items-baseline gap-24' }"
				:submit-attrs="{
					inputClass: 'btn-primary w-full',
					outer: '!w-full',
					ignore: false
				}"
				help=""
				submit-label="Send valuation request"
			>
				<div class="hidden">
					<FormKitMessages/> <!-- 👀 form messages will appear here -->
				</div>
				<FormKit
					outer-class="!w-full"
					type="text"
					name="name"
					label="First name"
					placeholder="Full name"
					validation="required"
				/>
				<FormKit
					outer-class="!w-full"
					type="text"
					name="email"
					label="Email address"
					placeholder="Email address"
					validation="required|email"
				/>
				<FormKit
					outer-class="!w-full"
					type="text"
					name="number"
					label="Phone number"
					placeholder="Phone number (optional)"
					validation="number"
				/>
				<FormKit
					outer-class="!w-full"
					type="text"
					name="message"
					label="Your message"
					placeholder="Your message"
					validation="required"
				/>
				<div class="flex items-center text-white relative flex-wrap gap-16">
					<p class="text-body-2">I want to</p>
					<FormKit
						type="checkbox"
						label="I want to"
						:options="['Rent', 'Sell']"
						decorator-icon="happy"
						validation="required|min:1"
					/>
				</div>
				<div
					id="bedrooms"
					class="flex items-center text-white relative flex-wrap gap-16"
				>
					<p class="text-body-2">Bedrooms</p>
					<div class="flex items-center">
						<FormKit
							type="button"
							@click="handleBedroomsChange(-1)"
						>
							-
						</FormKit>
						<FormKit
							v-model="form.bedrooms"
							type="number"
							name="bedrooms"
							:value="form.bedrooms"
							validation-visibility="live"
							validation="number|min:1|max:9|required"
							@input="handleBedroomsInput($event)"
						>
							<FormKitMessages/> <!-- 👀 form messages will appear here -->
						</FormKit>
						<FormKit
							type="button"
							@click="handleBedroomsChange(1)"
						>
							+
						</FormKit>
					</div>
				</div>
			</FormKit>
		</div>
	</div>
</template>

<style>
[data-type~="checkbox"] .formkit-options {
	color: white;
	display: flex;
	gap: 0.8rem;
}
[data-type~="checkbox"] .formkit-legend {
	display: none;
}
[data-type~="checkbox"] .formkit-decorator-icon {
	display: none;
}
[data-type~="checkbox"] .formkit-wrapper {
	display: flex;
	gap: 0.8rem;
	padding: 1.4rem;
	font-size: 1.6rem;
	border: 1px solid white;
	border-radius: 9999px;
}
[data-type~="checkbox"] .formkit-messages {
	position: absolute;
	left: 0;
	font-size: 1.2rem;
    color: rgb(239 68 68 / var(--tw-text-opacity));
}

[data-type~="number"] .formkit-wrapper {
    display: flex;
    padding: 1.4rem 3rem;
    font-size: 1.6rem;
    border: 1px solid white;
    border-radius: 9999px;
    width: 8rem;
    align-items: center;
    justify-content: center;
	padding-left: 4.7rem;
	margin: 0 0.8rem;
}

[data-type~="number"] .formkit-input {
	background: transparent;
	width: 2.4rem;
}
[data-type~="number"] .formkit-input:focus {
	outline: none;
}

[data-type~="button"] .formkit-wrapper {
	width: 5.2rem;
	height: 5.2rem;
	border-radius: 9999px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid white;

}
[data-type~="number"] .formkit-messages {
	display: none;
}

#bedrooms .formkit-wrapper {
	display: hidden;
}

[data-type~="button"] .formkit-input {
	width: 5.2rem;
	height: 5.2rem;
}
[data-type~="number"] .formkit-input {
	background: transparent;
	width: 2.4rem;
}
[data-type~="number"] .formkit-input:focus {
	outline: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
