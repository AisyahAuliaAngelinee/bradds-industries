import ProductList from "@/components/ProductList";
import Image from "next/image";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ category: string }>;
}) {
	const category = (await searchParams).category;
	return (
		<div className="">
			<div className="relative w-full mb-12">
				<Image
					src="/featured.png"
					alt="featured"
					width={1920}
					height={640}
					className="w-full h-auto"
					priority
				/>
			</div>
			<ProductList category={category} params="homepage" />
		</div>
	);
}
