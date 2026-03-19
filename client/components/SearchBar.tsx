import { Search } from "lucide-react";

export default function SearchBar() {
	return (
		<div className="">
			<Search />
			<input id="search" placeholder="search" className="text-sm outline-0" />
		</div>
	);
}
