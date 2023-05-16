export const useCarousel = <T> ({
	length,
	items,
}: { length: number, items: T[] }) => {
	const index = ref(0);

	const indexLength = computed(() => length - 1);

	const next = () => {
		const nextIndex = index.value + 1;

		if (nextIndex > indexLength.value) {
			(index.value = 0);

			return;
		}

		index.value = nextIndex;
	};

	const prev = () => {
		const prevIndex = index.value - 1;

		if (prevIndex < 0) {
			index.value = indexLength.value;

			return;
		}

		index.value = prevIndex;
	};

	const setIndex = (newIndex: number) => {
		index.value = newIndex;
	};

	const activeItem = computed(() => items[index.value]);

	return {
		next,
		prev,
		setIndex,
		index,
		activeItem,
	};
};
