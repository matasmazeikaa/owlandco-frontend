import {
	IHero, ISection, ISeo,
} from '~/types';

export const useStrapiPage = async (page: string) => {
	const { findOne } = useStrapi();

	const { data } = await useAsyncData(
		`${page}Page`,
		() => findOne<{hero: IHero, section: ISection[], seo: ISeo}>(`${page}-page`, {
			populate: [
				'hero',
				'hero.backgroundImage',
				'hero.values',
				'hero.values.icon',
				'hero.ctaButton.page',
				'ctaButton',
				'seo',
				'section.image',
				'section.step',
				'section.nameOverlay',
				'section.steps',
				'section.step.icon',
				'section.firstSubItem',
				'section.secondSubItem',
				'section.ctaButton',
				'section.ctaButton.page',
			],
		}),
	);

	const pageData = computed(() => data.value?.data.attributes);

	const { sectionsWithComponents } = useStrapiSection(pageData.value?.section || []);

	const seo = computed(() => pageData.value?.seo);

	useHead({
		title: seo.value?.metaTitle,
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: seo.value?.metaDescription,
			},
		],
	});

	return {
		hero: computed(() => pageData.value?.hero),
		sections: computed(() => sectionsWithComponents),
	};
};
