import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useBootstrapPrefix } from "react-bootstrap/esm/ThemeProvider";

const Searchbar = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
	};

	const handleSearch = () => {
		if (searchTerm.trim()) {
			navigate(`/ksiazka/${searchTerm}`);
		}
	};
	const handleKeyDown = (e) => {
		if (event.key === "Enter") {
			handleSearch();
		}
	};
	return (
		<div className="search-bar w-full col-span-3">
			<span className="ml-4 pl-2.5 border-l border-t border-b border-gray-300 rounded-md text-start h-12 text-3xl ">
				<input
					type="text"
					placeholder="Wyszukaj książki w naszej bazie"
					className="w-8/12 px-4 outline-none"
					value={searchTerm}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
				/>
				<button
					className="w-1/12 rounded-r-lg bg-[#ff7f50] h-10 inline-table"
					onClick={handleSearch}
				>
					<i className="fas fa-search"></i>
				</button>
			</span>
		</div>
	);
};
export default Searchbar;
