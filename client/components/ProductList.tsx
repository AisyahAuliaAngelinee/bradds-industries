import { ProductsType } from "@/types/types";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

// TEMPORARY
const products: ProductsType = [
	{
		id: 1,
		name: "GEN 1 WHITE",
		shortDescription: "FIRST GENERATION EDITION",
		description:
			"Code merch edition: FIRST GENERATION WHITE, Bahan: Cotton Combed 30 S, Stock: HABIS",
		price: 150000,
		stocks: 0,
		isLimted: false,
		sizes: ["S", "M", "L"],
		colors: ["white"],
		images: {
			white: ["/products/1st/fg-white.png"],
		},
	},
	{
		id: 2,
		name: "GEN 1 INDUSTRIES",
		shortDescription: "FIRST GENERATION EDITION",
		description:
			"Code merch edition: FIRST GENERATION INDUSTRIES, Bahan: Cotton Combed 30 S",
		price: 150000,
		stocks: 0,
		isLimted: false,
		sizes: ["S", "M", "L"],
		colors: ["white"],
		images: {
			white: ["/products/1st/fg-industries.png"],
		},
	},
	{
		id: 3,
		name: "GEN 1 BLACK",
		shortDescription: "FIRST GENERATION EDITION",
		description:
			"Code merch edition: FIRST GENERATION BLACK, Bahan: Cotton Combed 30 S",
		price: 150000,
		stocks: 0,
		isLimted: false,
		sizes: ["S", "M", "L"],
		colors: ["black"],
		images: {
			black: ["/products/1st/fg-black.png"],
		},
	},
	{
		id: 4,
		name: "GEN 2 BLACK",
		shortDescription: "2nd GENERATION LIMITED EDITION",
		description:
			"Code merch edition: 2nd GENERATION BLACK, Bahan: Cotton Combed 30 S",
		price: 79000,
		stocks: 10,
		isLimted: true,
		sizes: ["M", "L"],
		colors: ["black"],
		images: {
			black: [
				"/products/2nd/2nd-gen-black.png",
				"/products/2nd/2nd-gen-black-front.png",
				"/products/2nd/2nd-gen-black-back.png",
			],
		},
	},
	{
		id: 5,
		name: "GEN 3 BLACK EDITION",
		shortDescription: "BRRADS INDUSTRIES GEN 3 BLACK LIMITED EDITION",
		description:
			"Code merch edition: BRRADS INDUSTRIES GEN 3 BLACK EDITION, Bahan: Cotton Combed 30 S",
		price: 79000,
		stocks: 10,
		isLimted: true,
		sizes: ["M", "L"],
		colors: ["black"],
		images: {
			black: ["/products/3th/3th-gen-black.png"],
		},
	},
	{
		id: 6,
		name: "GEN 3 WHITE EDITION",
		shortDescription: "BRRADS INDUSTRIES GEN 3 WHTIE LIMITED EDITION",
		description:
			"Code merch edition: BRRADS INDUSTRIES GEN 3 WHITE EDITION, Bahan: Cotton Combed 30 S",
		price: 79000,
		stocks: 10,
		isLimted: true,
		sizes: ["M", "L"],
		colors: ["white"],
		images: {
			white: ["/products/3th/3th-gen-white.png"],
		},
	},
	{
		id: 7,
		name: "Black Centurion Edition",
		shortDescription: "BRRADS INDUSTRIES BLACK CENTURION EDITION",
		description:
			"Code merch edition: Black Centurion, Bahan: Cotton Combed 30 S",
		price: 79000,
		stocks: 10,
		isLimted: false,
		sizes: ["M", "L", "XL"],
		colors: ["black"],
		images: {
			black: ["/products/centurion-front.png", "/products/centurion-back.png"],
		},
	},
	{
		id: 8,
		name: "Brrads Simpre!",
		shortDescription: "BRRADS SIMPRE! LESS DRAMA, LET'S BE SIMPRE!",
		description:
			"Code merch edition: Brrads Simpre, Bahan: Cotton Combed 30 S, Sablon: DTF High Quality",
		price: 79000,
		stocks: 10,
		isLimted: false,
		sizes: ["M", "L", "XL"],
		colors: ["black", "white"],
		images: {
			black: ["/products/simpre-black.png"],
			white: ["/products/simpre-white.png"],
		},
	},
];

export default function ProductList({
	category,
	params,
}: {
	category: string;
	params: "homepage" | "products";
}) {
	return (
		<div className="w-full">
			<Categories />
			{params === "products" && <Filter />}
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-12">
				{products.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
			<Link
				href={category ? `/products/?category=${category}` : "/products"}
				className="flex justify-end mt-4 underline text-sm text-gray-500">
				View all products
			</Link>
		</div>
	);
}
