<script lang="ts" setup>
interface Props {
	title?: string;
	email?: string;
	phoneNumber?: string;
	address?: string;
	work?: {
		hours: string;
		days: string;
	};
}

defineProps<Props>();

const {
	submitForm,
	isLoading,
	hasSubmited,
} = useSubscriber();
</script>

<template>
	<div class="section-padding ">
		<div class="mx-auto max-w-screen-xl mb-120 md:mb-160 xl:mb-200 pt-48 md:pt-80 grid grid-cols-1 lg:grid-cols-2 gap-40 lg:gap-80">
			<div class="flex flex-col">
				<h1
					class="text-h4 md:text-h1 mb-24 md:mb-40"
					data-aos="fade-right"

					data-aos-delay="100"
				>
					Let’s talk about property or anything else that interests you
				</h1>
				<div class="grid grid-cols-1 gap-y-48 lg:grid-cols-2 md:gap-x-80 md:gap-y-40">
					<div
						data-aos="fade-up"

						data-aos-delay="200"
					>
						<p
							class="text-button md:text-h6 mb-8"
						>
							Email address
						</p>
						<a
							:href="`mailto:${email}`"
							class="text-h6 md:text-h5 relative after:w-full after:content-normal after:absolute after:h-[2px] after:-bottom-4 after:left-0 after:bg-primary-black"
						>
							{{ email }}
						</a>
					</div>
					<div
						data-aos="fade-up"

						data-aos-delay="300"
					>
						<p class="text-button md:text-h6 mb-8">Phone number</p>
						<p class="text-h6 md:text-h5">{{ phoneNumber }}</p>
					</div>
					<div
						data-aos="fade-up"

						data-aos-delay="400"
					>
						<p class="text-button md:text-h6 mb-8">Our address</p>
						<p class="text-h6 md:text-h5">{{ address }}</p>
					</div>
					<div
						data-aos="fade-up"

						data-aos-delay="500"
					>
						<p class="text-button md:text-h6 mb-8">Work hours</p>
						<p class="text-h6 md:text-h5">Monday - Friday</p>
						<p class="text-h6 md:text-h5">9:00 - 17:00</p>
					</div>
				</div>
			</div>

			<div
				class="p-48 bg-primary-purple rounded-[4rem] h-fit relative"
				data-aos="fade-left"

				data-aos-delay="300"
			>
				<div class="contact-form-background w-full h-full absolute top-0 left-0" />
				<h2 class="mb-32 text-h4 md:text-h2 text-white">{{ hasSubmited ?  "Thank you for your message, we will contact you shortly." : "Send us a message"}}</h2>
				<FormKit
					v-if="!hasSubmited"
					type="form"
					:classes="{ form: 'flex flex-col items-baseline gap-24' }"
					:submit-attrs="{
						inputClass: 'hidden',
						outer: '!w-full',
						ignore: false
					}"
					help=""
					@submit="submitForm"
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
						name="phone"
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
						validation="length:3,1024"
					/>

					<Button
						:is-loading="isLoading"
					>
						Subscribe now
					</Button>
				</FormKit>
			</div>
		</div>
	</div>
</template>

<style>
.formkit-actions {
	display: none;
}
</style>
