export type ProductType = {
	id: string | number;
	name: string;
	shortDescription: string;
	description: string;
	price: number;
	stocks: number;
	isLimted: boolean;
	sizes: string[];
	colors: string[];
	images: Record<string, string[]>;
};
export type ProductsType = ProductType[];
export type CartItemType = ProductType & {
	quantity: number;
	selectedSize: string;
	selectedColor: string;
};
export type CartItemsType = CartItemType[];
