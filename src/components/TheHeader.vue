<script lang="ts" setup>
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
</script>

<template>
	<header>
		<nav class="bg-white border-gray-200 py-16 section-padding">
			<div class="flex flex-wrap justify-between items-center mx-auto">
				<HeaderLogo class="absolute left-[6rem] z-10"/>
				<div class="lg:flex justify-between items-center ml-[20rem] w-full hidden">
					<ul class="gap-32 hidden lg:flex">
						<li
							v-for="item in items"
							:key="item.title"
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
						>
							Get valuation
						</Button>
						<Button to="/contact">Contact us</Button>
					</div>

					<div
						id="hamburger-1"
						class="hamburger block lg:hidden"
						:class="{ 'is-active': isMobileMenuOpen }"
						@click="isMobileMenuOpen = !isMobileMenuOpen"
					>
						<span class="line"></span>
						<span class="line"></span>
						<span class="line"></span>
					</div>
				</div>
			</div>
		</nav>
	</header>
</template>

<style>

* ONE */

.col {
  display: block;
  float:left;
  margin: 1% 0 1% 1.6%;
}

.col:first-of-type {
  margin-left: 0;
}

.container{
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  position: relative;
  text-align: center;
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
</style>
