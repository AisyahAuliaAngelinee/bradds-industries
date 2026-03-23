"use client";

import Image from "next/image";
import React from "react";

export default function ProductImageSlider({
	images,
	name,
}: {
	images: string[];
	name: string;
}) {
	const [currentIndex, setCurrentIndex] = React.useState(0);

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	const handleNext = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	return (
		<React.Fragment>
			{/* MAIN IMAGE */}
			<Image
				src={images[currentIndex]}
				alt={name}
				fill
				className="object-contain rounded-md"
			/>

			{/* LEFT BUTTON */}
			<button
				type="button"
				onClick={handlePrev}
				className="absolute left-2 top-1/2 -translate-y-1/2 px-2 py-1 shadow text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-300 rounded-full">
				◀
			</button>

			{/* RIGHT BUTTON */}
			<button
				type="button"
				onClick={handleNext}
				className="absolute right-2 top-1/2 -translate-y-1/2 px-2 py-1 shadow text-white cursor-pointer hover:bg-white hover:text-black transition-all duration-300 rounded-full">
				▶
			</button>
		</React.Fragment>
	);
}
