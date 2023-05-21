<script lang="ts" setup>
const FOOTER = {
	about: 'About Owlandco',
	aboutSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis.',
	servicesLinks: [
		{
			title: 'Rent',
			link: '/rent',
		},
		{
			title: 'Management',
			link: '/management',
		},
		{
			title: 'Investment',
			link: '/investment',
		},
		{
			title: 'Valuation',
			link: '/valuation',
		},
	],
	companyLinks: [
		{
			title: 'About',
			link: '/about',
		},
		{
			title: 'Contact us',
			link: '/contact',
		},
	],
};
</script>

<template>
	<footer class="section-padding">
		<div class="max-w-screen-xl mx-auto pt-80 md:pb-64 py-40">
			<div class="footer-top-part">
				<div class="mr-120 max-w-[41.6rem]">
					<h5 class="mb-8 md:mb-16">About Owlandco</h5>
					<p class="body-2-gray mb-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus ridiculus in mattis.</p>
					<div class="flex gap-16">
						<img
							class="cursor-pointer hover:opacity-75 transition-opacity"
							src="/assets/icons/facebook.svg"
							width="44"
							height="44"
							alt="facebook social"
						/>
						<img
							class="cursor-pointer hover:opacity-75 transition-opacity"
							src="/assets/icons/twitter.svg"
							width="44"
							height="44"
							alt="twitter social"
						/>
						<img
							class="cursor-pointer hover:opacity-75 transition-opacity"
							src="/assets/icons/google-plus.svg"
							width="44"
							height="44"
							alt="google plus social"
						/>
					</div>
				</div>

				<div class="flex flex-col gap-16">
					<h6>Services</h6>
					<NuxtLink
						v-for="service in FOOTER.servicesLinks"
						:key="service.title"
						class="body-2-gray"
						:to="service.link"
					>
						{{service.title}}
					</NuxtLink>
				</div>

				<div class="flex flex-col gap-16">
					<h6>Services</h6>
					<NuxtLink
						v-for="company in FOOTER.companyLinks"
						:key="company.title"
						class="body-2-gray"
						:to="company.link"
					>
						{{company.title}}
					</NuxtLink>
				</div>
			</div>

			<div class="h-[0.5px] bg-gray-french my-40 md:my-64" />

			<div class="flex items-center gap-16 flex-wrap justify-between">
				<p class="body-2-black">Owlandco {{ new Date().getFullYear() }}, All rights reserved</p>
				<NuxtLink
					class="body-2-black"
					to="/privacy-policy"
				>
					Privacy policy
				</NuxtLink>
			</div>
		</div>
	</footer>
</template>

<style scoped>
.footer-top-part {
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 4rem;
}

@screen md {
	.footer-top-part {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
	}
}
</style>
