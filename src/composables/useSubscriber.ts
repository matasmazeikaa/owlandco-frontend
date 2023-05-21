import {
	ISubscriber, PaginationByPage,
} from '~/types';

const DEFAULT_ALREADY_SUBSCRIBED = 658;

export const useSubscriber = () => {
	const isLoading = ref(false);
	const hasSubmited = ref(false);
	const alreadySubscribed = ref(DEFAULT_ALREADY_SUBSCRIBED);

	const {
		find,
		create,
	} = useStrapi<ISubscriber>();

	const fetchSubscribers = async () => {
		const data = await find('subscribers', {
			pagination: {
				start: 1,
				limit: 1,
			},
		});

		alreadySubscribed.value = (data.meta.pagination as PaginationByPage).total + DEFAULT_ALREADY_SUBSCRIBED;

		return data;
	};

	const submitForm = async (data: any) => {
		isLoading.value = true;

		try {
			await create('subscribers', {
				...data,
				...(data.valuationType ? {
					valuationType: data.valuationType.join(', '),
				} : {}),
			});

			await fetchSubscribers();

			hasSubmited.value = true;
		} catch (error) {
			console.error(error);
		} finally {
			isLoading.value = false;
		}
	};

	const { data } = useAsyncData(
		'subscribers',
		() => find('subscribers', {
			pagination: {
				start: 1,
				limit: 1,
			},
		}),
	);

	if (data.value) {
		alreadySubscribed.value = ((data.value?.meta?.pagination as PaginationByPage).total ?? 1) + DEFAULT_ALREADY_SUBSCRIBED;
	}

	return {
		alreadySubscribed,
		isLoading,
		hasSubmited,
		fetchSubscribers,
		submitForm,
	};
};
