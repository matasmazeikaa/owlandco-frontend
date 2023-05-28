<script lang="ts" setup>
import { FormKitMessages } from '@formkit/vue';

const {
	alreadySubscribed,
	hasSubmited,
	isLoading,
	submitForm,
} = useSubscriber();

const { findOne } = useStrapi();

const { data: subscribeSection } = await useAsyncData(
	'subscribe-section',
	() => findOne<{ title: string, description: string }>('subscribe-section', {
		populate: '*',
	}),
);

const data = computed(() => subscribeSection.value?.data.attributes);

</script>

<template>
	<div class="section-padding text-white text-center xl:mt-200 xl:mb-160 md:mt-160 mb:mb-120 my-64">
		<div class="rounded-[1.6rem] section-padding relative max-w-screen-xl mx-auto bg-primary-purple py-48 md:py-96">
			<NuxtImg
				src="/assets/images/subscribe-background.png"
				class="w-full h-full absolute left-0 top-0 z-0"
				alt="subscriptions background"
			/>

			<img
				src="/assets/icons/fun-arrow-1.svg"
				alt=""
				class="absolute md:bottom-0 md:left-[15%] w-[12.4rem] md:w-auto -bottom-[5rem] left-40"
			>

			<img
				src="/assets/icons/fun-arrow-2.svg"
				alt=""
				class="absolute w-[8rem] -right-[1%] -top-[4.5rem] md:-top-[7.5rem] md:right-[2%]  md:w-auto"
			>

			<h1
				v-if="hasSubmited"
				class="mb-16"
			>
				Thank you for subscribing to our newsletter!
			</h1>

			<div
				v-else
				class="relative z-10 mb-32 md:mb-40"
			>
				<h1
					class="mb-16"
					data-aos="fade-up"
				>
					{{ data?.title }}
				</h1>
				<p
					class="text-secondary-french-gray body-2-gray-french md:text-body-1 mx-auto max-w-[55.6rem] mb-32 md:mb-40"
					data-aos="fade-up"
				>
					{{ data?.description }}
				</p>
				<FormKit
					type="form"
					:classes="{ form: 'flex flex-col items-baseline md:flex-row justify-center gap-16 ' }"
					:submit-attrs="{
						inputClass: 'hidden',
						ignore: true
					}"
					help=""
					data-aos="fade-up"

					@submit="submitForm"
				>
					<div class="hidden">
						<FormKitMessages/> <!-- 👀 form messages will appear here -->
					</div>
					<FormKit
						type="text"
						name="name"
						label="Full name"
						placeholder="Full name"
						validation="required"
					/>
					<FormKit
						type="text"
						name="email"
						label="Email address"
						placeholder="Email address"
						validation="required|email"
					/>

					<Button
						:is-loading="isLoading"
					>
						Subscribe now
					</Button>
				</FormKit>
			</div>
			<div
				class="flex justify-center text-left"
				data-aos="fade-up"
			>
				<NuxtImg
					class="mr-16 w-120"
					src="/assets/images/subscribed-people.png"
					alt="already subscribed people"
				/>
				<div>
					<p class="text-button">{{ alreadySubscribed }}+</p>
					<p class="text-body-3 text-secondary-french-gray">already subscribed</p>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.subscribe-section-background {
	background: url(/assets/images/subscribe-background.png) no-repeat center;
}

[data-type~="submit"] .formkit-outer {
	display: none;

}
</style>
