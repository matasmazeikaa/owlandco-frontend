export type CapsuleBackground = 'gray' | 'yellow' | 'purple' | 'black';

export interface IProperty {
	address: string;
	price: string;
	availableFrom: string;
	bedrooms: number;
	bathrooms: number;
	slug: string;
	images: {
		data: {
			attributes: {
				url: string;
				hash: string;
			}
		}[]
	};
}

export interface ITestimonial {
	text: string;
	fullName: string;
}
