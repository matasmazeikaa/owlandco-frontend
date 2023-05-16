<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  totalItems: number;
  page: number;
  pageSize: number;
  isFirstPage: boolean;
  isLastPage: boolean;
}

interface Emits {
  (eventName: 'change-page', payload: { page: number; pageSize: number }): void;
  (eventName: 'next-page'): void;
  (eventName: 'prev-page'): void;
}

const emit = defineEmits<Emits>();
const props = defineProps<Props>();

const itemsFrom = computed(() => {
	if (props.isFirstPage) return 1;

	return props.page * props.pageSize - props.pageSize + 1;
});

const itemsTo = computed(() => {
	if (props.isLastPage) return props.totalItems;

	return props.page * props.pageSize;
});

const itemsCount = computed(
	() => `${itemsFrom.value} - ${itemsTo.value} of ${props.totalItems}`,
);

const isPaginationButtonsVisible = computed(
	() => props.totalItems > props.pageSize,
);
</script>

<template>
	<div class="hp-table-footer">
		<div class="hp-table-footer__select-container">
			<div class="hp-table-footer__count">{{ itemsCount }}</div>
			<div
				v-if="isPaginationButtonsVisible"
				class="hp-table-footer__pagination-buttons"
			>
				<ChevronLeft
					class="hp-table-footer__button"
					primary
					:disabled="props.isFirstPage"
					:class="{ 'hp-table-footer__button--disabled': props.isFirstPage }"
					icon="icon-chevron-left"
					role="button"
					@click="emit('prev-page')"
				/>

				<ChevronRight
					class="hp-table-footer__button"
					primary
					:disabled="isLastPage"
					:class="{ 'hp-table-footer__button--disabled': props.isLastPage }"
					icon="icon-chevron-right"
					role="button"
					@click="emit('next-page')"
				/>
			</div>
		</div>
	</div>
</template>

<style  scoped>
.hp-table-footer {
border-top: 1px solid var(--gray-border);
padding: 16px 24px;
display: flex;
align-items: center;
justify-content: end;
}
.hp-table-footer__pagination-buttons {
display: flex;
align-items: center;
}
.hp-table-footer__select {
margin-right: 24px;
margin-left: 16px;
padding: 14px 12px;
border-radius: 4px;
width: 88px;
height: 48px;
border: 1px solid var(--gray-border);
color: var(--gray);
position: relative;
appearance: none;
position: relative;
}
.hp-table-footer__count {
margin-right: 32px;
}
.hp-table-footer__select-container {
display: flex;
align-items: center;
}
.hp-table-footer__button {
margin: 0;
cursor: pointer;
border-radius: 50%;
}
.hp-table-footer__button:hover {
background-color: var(--gray-hover);
}
.hp-table-footer__button--disabled {
color: var(--gray);
cursor: default;
}
.hp-table-footer__button--disabled:hover {
background-color: transparent;
}
</style>
