<script lang="ts" setup>
interface Props {
	secondary?: boolean;
	white?: boolean;
	black?: boolean;
	to?: string;
	isLoading?: boolean;
}

defineProps<Props>();
</script>

<template>
	<div class="inline-flex">
		<NuxtLink
			v-if="to"
			class="btn-primary inline-block"
			:class="{
				'backdrop-blur-sm bg-white bg-opacity-10 text-white': secondary,
				'bg-transparent border border-gray-200': white,
				'bg-primary-black text-primary-yellow border-gray-200': black,
			}"
			:to="to"
		>
			<span class="text-button whitespace-pre"><slot /></span>
		</NuxtLink>
		<button
			v-else
			class="btn-primary relative"
			:class="{
				'backdrop-blur-sm bg-white bg-opacity-10 text-white': secondary,
				'bg-transparent border border-gray-200': white,
				'bg-primary-black text-primary-yellow border-gray-200': black,
				'btn-primary--loading': isLoading,
			}"
		>
			<Transition name="fade">
				<div class=" absolute top-0 left-0 w-full h-full flex items-center justify-center">
					<div
						v-if="isLoading"
						class="loader fadeIn"
					/>
				</div>
			</Transition>
			<span class="whitespace-pre">
				<slot />
			</span>
		</button>
	</div>
</template>

<style>

.btn-primary--loading span {
	opacity: 1;
	animation: fadeOut 0.3s ease-in-out;
}

.btn-primary--loading span {
	opacity: 0;
}

.loader {
	width: 24px;
	height: 24px;
	border-radius: 50%;
	position: relative;
	animation: rotate 1s linear infinite
}

.loader::before , .loader::after {
	content: "";
	box-sizing: border-box;
	position: absolute;
	inset: 0px;
	border-radius: 50%;
	border: 5px solid #FFF;
	animation: prixClipFix 2s linear infinite ;
}

.loader::after{
transform: rotate3d(90, 90, 0, 180deg );
border-color: var(--primary-purple);
}

@keyframes rotate {
	0%   {transform: rotate(0deg)}
	100%   {transform: rotate(360deg)}
}

@keyframes fadeOut {
	from { opacity: 1; }
	to { opacity: 0; }
}

@keyframes fadeIn {
	from { opacity: 0; }
	to { opacity: 1; }
}

.fadeIn {
	opacity: 1;
}

@keyframes prixClipFix {
	0%   {clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)}
	50%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)}
	75%, 100%  {clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)}
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
