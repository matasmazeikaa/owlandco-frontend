<script lang="ts" setup>
import {
	disableBodyScroll, enableBodyScroll,
} from 'body-scroll-lock';

interface Props {
	items: {
		to: string;
		title: string;
	}[]
}

withDefaults(defineProps<Props>(), {
	items: () => [
		{
			to: '/rent',
			title: 'Rent',
		},
		{
			to: '/management',
			title: 'Management',
		},
		{
			to: '/investment',
			title: 'Investment',
		},
		{
			to: '/about',
			title: 'About',
		},
	],
});

const isMobileMenuOpen = ref(false);

watch(isMobileMenuOpen, (value) => {
	if (value) {
		disableBodyScroll(document.body);
	} else {
		enableBodyScroll(document.body);
	}
});
</script>

<template>
	<header>
		<nav class="bg-white border-gray-200 py-20 md:py-16 section-padding">
			<div class="flex flex-wrap justify-between items-center mx-auto">
				<NuxtLink
					to="/"
					class="w-[9.1rem] lg:w-[12.4rem] absolute lg:left-[6rem] -top-[1.6rem] lg:top-0 z-10 "
					data-aos="fade-down"
					aria-label="Home"
				>
					<HeaderLogo class="w-full"/>
				</NuxtLink>
				<div class="lg:flex justify-between items-center ml-[20rem] w-full hidden">
					<ul class="gap-32 hidden lg:flex">
						<li
							v-for="(item, index) in items"
							:key="item.title"
							data-aos="fade-down"
							:data-aos-delay="100 * (index + 1)"
						>
							<NuxtLink
								:to="item.to"
								class="text-body-3 text-black"
							>
								{{ item.title }}
							</NuxtLink>
						</li>
					</ul>
					<div class="hidden lg:block">
						<Button
							to="/valuation"
							white
							class="mr-16"
							data-aos="fade-down"

							data-aos-delay="300"
						>
							Get valuation
						</Button>
						<Button
							to="/contact"
							data-aos="fade-down"

							data-aos-delay="400"
						>
							Contact us
						</Button>
					</div>
				</div>
				<div
					id="hamburger-1"
					class="hamburger block ml-auto lg:hidden relative z-10"
					:class="{ 'is-active': isMobileMenuOpen }"
					@click="isMobileMenuOpen = !isMobileMenuOpen"
				>
					<span class="line"></span>
					<span class="line"></span>
					<span class="line"></span>
				</div>
			</div>
		</nav>

		<div
			class="popup"
			:class="{ 'popup--active': isMobileMenuOpen }"
		>
			<div class="h-full flex flex-col items-center justify-center p-16">
				<ul class="flex flex-col text-center mt-auto">
					<li
						v-for="item in items"
						:key="item.title"
					>
						<NuxtLink
							:to="item.to"
							class="text-body-1 hover:opacity-75 transition-opacity block text-black p-20"
							@click="isMobileMenuOpen = false"
						>
							{{ item.title }}
						</NuxtLink>
					</li>
				</ul>

				<div class="flex flex-col text-center mt-auto max-w-[32.8rem] w-full">
					<Button
						to="/valuation"
						white
						class="mb-16"
						@click="isMobileMenuOpen = false"
					>
						Get valuation
					</Button>
					<Button
						to="/contact"
						@click="isMobileMenuOpen = false"
					>
						Contact us
					</Button>
				</div>
			</div>
		</div>
	</header>
</template>

<style>
.col {
  display: block;
  float:left;
  margin: 1% 0 1% 1.6%;
}

.col:first-of-type {
  margin-left: 0;
}

/* CLEARFIX */

.cf:before,
.cf:after {
    content: " ";
    display: table;
}

.cf:after {
    clear: both;
}

.cf {
    *zoom: 1;
}

/* ALL */

.row .three{
  padding: 80px 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #2c3e50;
  color: #ecf0f1;
  text-align: center;
}

.hamburger .line{
  width: 18px;
  height: 2px;
  background-color: black;
  display: block;
  margin: 4px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger:hover{
  cursor: pointer;
}

#hamburger-1.is-active .line:nth-child(2){
  opacity: 0;
}

#hamburger-1.is-active .line:nth-child(1){
  -webkit-transform: translateY(1px) rotate(45deg);
  -ms-transform: translateY(1px) rotate(45deg);
  -o-transform: translateY(1px) rotate(45deg);
  transform: translateY(5px) rotate(45deg);
}

#hamburger-1.is-active .line:nth-child(3){
  -webkit-transform: translateY(-1px) rotate(-45deg);
  -ms-transform: translateY(-1px) rotate(-45deg);
  -o-transform: translateY(-1px) rotate(-45deg);
  transform: translateY(-7px) rotate(-45deg);
}

.popup {
  background-color: white;
  width: 100vw;
  height: 100vh;
  z-index: 9;
  position: fixed;
  top: 0;
  transform: translateX(100%);
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}

.popup.popup--active {
  transform: translateX(0);
}

.popup .menu_box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 5.33vw 12.8vw;
  text-transform: uppercase;
}

.popup .menu_box_column {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 17.2vw;
}

.popup .menu_box_left {
  position: relative;
  margin-right: 4.53vw;
}

.popup .menu_box_right {
  position: relative;
}

.popup .menu_box_text {
  font-size: 10rem;
  color: #fff;
}

.popup .menu_box_text_wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent 50%, rgba(0, 0, 0, 0.9));
  background: -webkit-linear-gradient(0deg, transparent 50%, rgba(0, 0, 0, 0.9));
}

.popup .menu_box_number {
  font-size: 3.2vw;
  color: #b1b1b1;
}

</style>
