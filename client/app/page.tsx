import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
	return (
		<div className="">
			<div className="relative aspect-3/1 mb-12">
				<Image src="/featured.png" alt="featured" fill />
			</div>
			<ProductList />
		</div>
	);
}
