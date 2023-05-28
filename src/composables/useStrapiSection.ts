import { COMPONENT_CMS_MAP } from '@/types';

export const useStrapiSection = (sections: any) => {
	const sectionsWithComponents = sections.map((section: any) => {
		const component = COMPONENT_CMS_MAP[section.__component as any];

		return {
			...section,
			component: defineAsyncComponent(() => import(`@/components/${component}.vue`)),
		};
	});

	return {
		sectionsWithComponents,
	};
};
