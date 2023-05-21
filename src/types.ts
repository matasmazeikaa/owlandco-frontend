export type CapsuleBackground = 'gray' | 'yellow' | 'purple' | 'black';

export interface IProperty {
	address: string;
	price: string;
	availableFrom: string;
	bedrooms: number;
	bathrooms: number;
	slug: string;
	about: string;
	images: {
		data: {
			attributes: {
				url: string;
				hash: string;
			}
		}[]
	};
	similarProperties?: {
		data: Strapi4ResponseData<IProperty>[];
	};
}

export interface PaginationByPage {
	page: number
	pageSize: number
	pageCount: number
	total: number;
	withCount?: boolean
  }

export interface ITestimonial {
	text: string;
	fullName: string;
}

export interface ISubscriber {
	email: string;
	firstName: string;
}

export interface IBreadcrumb {
	name: string;
	to: string;
}
