"use client";

import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// styles
import "swiper/css";
import { useMemo } from "react";
import { Flame } from "lucide-react";

export default function ProductCard({ product }: { product: ProductType }) {
	const firstColors = product.colors[0];

	const images = useMemo(() => {
		return product.images[firstColors] || [];
	}, [product.images, firstColors]);

	const isSoldOut = product.stocks === 0;
	const isLimited = product.stocks === "Limited";

	return (
		<div className="shadow-lg rounded-lg overflow-hidden">
			<Link href={`/products/${product.id}`}>
				<div className="">
					<Swiper
						modules={[Autoplay]}
						autoplay={{ delay: 3000 }}
						loop={images.length > 1}
						preventClicks={true}
						preventClicksPropagation={true}
						className="w-full h-full">
						{images.map((img, index) => (
							<SwiperSlide key={index}>
								<div className="relative aspect-2/3">
									<Image
										src={img}
										alt={product.name}
										fill
										className="object-cover"
									/>

									{/* 🔴 SOLD OUT */}
									{isSoldOut && (
										<div className="absolute inset-0 flex items-center justify-center z-10">
											<div className="absolute inset-0 bg-black/40 backdrop-blur-xs" />
											<span className="relative text-red-500 font-bold text-lg tracking-widest rotate-[-25deg] border-2 border-red-500 px-6 py-2 bg-black/60 shadow-[0_0_10px_rgba(255,0,0,0.7)]">
												SOLD OUT
											</span>
										</div>
									)}

									{/* 🟡 LIMITED */}
									{isLimited && !isSoldOut && (
										<div className="absolute top-2 right-2 z-10 flex items-center gap-1 bg-black/70 text-yellow-400 px-2 py-1 rounded shadow">
											<Flame className="w-3 h-3" />
											<span className="text-[10px] font-bold tracking-wide">
												LIMITED
											</span>
										</div>
									)}
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</Link>
		</div>
	);
}
