<script lang="ts" setup>
interface Props {
  length: number;
  activeIndicatorIndex?: number;
  size: string;
}

interface Emits {
  // eslint-disable-next-line no-unused-vars
  (eventName: 'on-click', payload: number): void;
}

const props = withDefaults(defineProps<Props>(), {
	activeIndicatorIndex: 0,
	size: '18px',
});

defineEmits<Emits>();

const isIndicatorActive = (index: number) => index === props.activeIndicatorIndex;
</script>

<template>
	<div class="indicator-container">
		<div
			v-for="(indicator, index) in length"
			:key="indicator"
			class="indicator cursor-pointer"
			:class="{
				'indicator--active': isIndicatorActive(index),
				'hover:opacity-75 transition-opacity': !isIndicatorActive(index)
			}"
			role="button"
			@click="$emit('on-click', index)"
		/>
	</div>
</template>

<style scoped>
.indicator-container {
  display: flex;
  align-items: center;
  gap: 0.8rem;

}

.indicator-container__indicator {
    width: 1.6rem;
    height: auto;
    border-radius: 50%;
    background-color: #e5e5e5;
}

.indicator {
  width: v-bind(size);
  height: v-bind(size);
  border-radius: 50%;
  background: #FFFFFF66;
  border: 1px solid var(--primary);
}

.indicator--active {
	background-color: #fff;
}
</style>
