"use client";

import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

// styles
import "swiper/css";
import React, { useMemo } from "react";
import { Check, Flame, ShoppingCart } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function ProductCard({ product }: { product: ProductType }) {
	const [productTypes, setProductTypes] = React.useState({
		size: product.sizes[0],
		color: product.colors[0],
	});
	const [activeCheck, setActiveCheck] = React.useState<string | null>(null);

	const firstColors = product.colors[0];

	const images = useMemo(() => {
		return product.images[firstColors] || [];
	}, [product.images, firstColors]);

	const isSoldOut = product.stocks === 0;

	const handleProductType = ({
		type,
		value,
	}: {
		type: "size" | "color";
		value: string;
	}) => {
		setProductTypes((prev) => ({
			...prev,
			[type]: value,
		}));

		if (type === "color") {
			setActiveCheck(value);

			setTimeout(() => {
				setActiveCheck(null);
			}, 800); // durasi animasi
		}
	};

	return (
		<div className="shadow-lg rounded-lg overflow-hidden">
			{/* IMAGE */}
			<Link href={`/products/${product.id}`}>
				<Swiper
					modules={[Autoplay]}
					autoplay={{ delay: 3000 }}
					loop={images.length > 1}
					preventClicks={true}
					preventClicksPropagation={true}>
					{images.map((img, index) => (
						<SwiperSlide key={index}>
							<div className="relative aspect-2/3">
								<Image
									src={img}
									alt={product.name}
									fill
									className="object-cover hover:scale-105 transition-all duration-300"
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
								{product.isLimted && !isSoldOut && (
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
			</Link>

			{/* PRODUCT DETAIL */}
			<div className="flex flex-col gap-4 p-4">
				<h1 className="font-semibold">{product.name}</h1>
				<p className="text-sm text-gray-500">{product.shortDescription}</p>

				{/* PRODUCT TYPES */}
				<div className="flex items-center gap-4 text-xs select-none">
					{/* SIZES */}
					<div className="flex flex-col gap-1">
						<span className="text-gray-500">Size</span>
						<select
							name="size"
							id="size"
							className="ring ring-gray-300 rounded-md px-2 py-1"
							onChange={(e) =>
								handleProductType({ type: "size", value: e.target.value })
							}>
							{product.sizes.map((size) => (
								<option key={size} value={size}>
									{size.toUpperCase()}
								</option>
							))}
						</select>
					</div>

					{/* COLORS */}
					<div className="flex flex-col gap-1">
						<span className="text-gray-500">Color</span>
						<div className="flex items-center gap-2">
							{product.colors.map((color) => (
								<div
									key={color}
									onClick={() => {
										if (product.stocks === 0) return;
										handleProductType({ type: "color", value: color });
									}}>
									<Tooltip>
										<TooltipTrigger>
											<div
												className={`relative cursor-pointer w-4 h-4 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${color === "white" && "ring ring-gray-500"}`}
												style={{ background: color }}>
												<span
													className={`absolute text-green-500 text-xs font-bold transition-all duration-300 ${activeCheck === color ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
													✓
												</span>
											</div>
										</TooltipTrigger>
										<TooltipContent>
											<p>{color.toUpperCase()}</p>
										</TooltipContent>
									</Tooltip>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* PRICE AND ADD TO CART */}
				<div className="flex items-center justify-between gap-2 select-none">
					<p className="font-medium text-sm">
						Rp{product.price.toLocaleString("id-ID")}
					</p>

					{product.stocks > 0 ? (
						<button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-2 text-xs cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2">
							<ShoppingCart className="size-4" />
							Add to cart
						</button>
					) : (
						<span className="text-red-500 font-bold text-md tracking-widest rounded-md border-2 border-red-500 px-2 py-1 bg-black/60 shadow-[0_0_10px_rgba(255,0,0,0.7)]">
							SOLD OUT
						</span>
					)}
				</div>
			</div>
		</div>
	);
}
