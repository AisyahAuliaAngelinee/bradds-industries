import { z } from "zod";

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
export const shippingFormSchema = z.object({
	name: z.string().min(1, "Name is required!"),
	email: z.string().email().min(1, "Email is required!"),
	phone: z
		.string()
		.min(10, "Phone number must be between 10 and 13 digits!")
		.max(13, "Phone number must be between 10 and 13 digits!")
		.regex(/^(?:\+62|62|0)8[1-9][0-9]{7,10}$/, "Phone number invalid"),
	address: z.string().min(1, "Address is required!"),
	city: z.string().min(1, "City is required!"),
	postalCode: z
		.string()
		.length(5, "Postal code must be 5 digits!")
		.regex(/^\d+$/, "Postal code must contain only numbers!"),
});
export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;
export const paymentFormSchema = z.object({
	cardHolder: z.string().min(1, "Card holder is required!"),
	cardNumber: z.string().length(16, "Card number is required!"),
	expirationDate: z
		.string()
		.regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration date must be in MM/YY"),
	cvv: z.string().length(3, "CVV is required!"),
});
export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;
export type CartStoreStateType = {
	cart: CartItemsType;
	hasHydrated: boolean;
};
export type CartStoreActionType = {
	addToCart: (product: CartItemType) => void;
	removeFromCart: (product: CartItemType) => void;
	clearCart: () => void;
};
