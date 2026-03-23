import ProductImageSlider from "@/components/ProductImageSlider";
import ProductInteraction from "@/components/ProductInteraction";
import { ProductType } from "@/types/types";
import Image from "next/image";

// TEMPORARY
const product: ProductType = {
	id: 1,
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
};

export const generateMetadata = async ({
	params,
}: {
	params: { id: string };
}) => {
	// TODO: get the product from db
	// TEMPORARY

	return {
		title: product.name,
		describe: product.description,
	};
};

export default async function ProductPage({
	params,
	searchParams,
}: {
	params: Promise<{ id: string }>;
	searchParams: Promise<{ color: string; size: string }>;
}) {
	const { size, color } = await searchParams;

	const selectedSize = size || (product.sizes[0] as string);
	const selectedColor = color || (product.colors[0] as string);

	return (
		<div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
			{/* IMAGE */}
			<div className="w-full lg:w-5/12 relative aspect-2/3">
				<ProductImageSlider
					images={product.images[selectedColor]}
					name={product.name}
				/>
			</div>

			{/* DETAILS */}
			<div className="w-full lg:w-7/12 flex flex-col gap-4">
				<h1 className="text-2xl font-medium">{product.name}</h1>
				<p className="text-gray-500">{product.description}</p>
				<h2 className="text-2xl font-semibold">
					Rp {product.price.toLocaleString("id-ID")}
				</h2>

				{/* INTERACTION */}
				<ProductInteraction
					product={product}
					selectedSize={selectedSize}
					selectedColor={selectedColor}
				/>

				{/* CARD INFO */}
				<div className="flex items-center gap-2 mt-4">
					<Image
						src="/mastercard.png"
						alt="mastercard"
						width={50}
						height={25}
						className="rounded-md"
					/>
				</div>
				<p className="text-gray-500 text-xs">
					By clicking Pay Now, you agree to our{" "}
					<span className="underline hover:text-black">Terms & Conditions</span>{" "}
					and <span className="underline hover:text-black">Privacy Policy</span>
					. You authorize us to charge your selected payment method for the
					total amount shown. All sales are subject to our return and{" "}
					<span className="underline hover:text-black">Refund Policies</span>
				</p>
			</div>
		</div>
	);
}
