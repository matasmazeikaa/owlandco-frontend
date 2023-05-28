import {
	IHero, ISection,
} from '~/types';

export const useStrapiPage = async (page: string) => {
	const { findOne } = useStrapi();

	const { data } = await useAsyncData(
		`${page}Page`,
		() => findOne<{hero: IHero, section: ISection[]}>(`${page}-page`, {
			populate: [
				'hero',
				'hero.backgroundImage',
				'hero.values',
				'hero.values.icon',
				'hero.ctaButton.page',
				'ctaButton',
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

	return {
		hero: computed(() => pageData.value?.hero),
		sections: computed(() => sectionsWithComponents),
	};
};
