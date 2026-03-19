import Image from "next/image";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
	return (
		<nav className="w-full flex items-center justify-between border-b border-gray-200 pb-4">
			{/* LEFT */}
			<Link href="/" className="flex items-center">
				<Image
					src="/logo-removebg.png"
					alt="logo"
					width={36}
					height={36}
					className="w-6 h-6 md:w-9 md:h-9"
				/>
				<p className="hidden md:block text-md font-semibold tracking-wider">
					BRRADS INDUSTRIES
				</p>
			</Link>

			{/* RIGHT */}
			<div className="">
				<SearchBar />
			</div>
		</nav>
	);
}
