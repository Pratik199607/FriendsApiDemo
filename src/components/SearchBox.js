import React from "react";
import "./SearchBox.css";

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<input
				className="custText"
				type="search"
				placeholder="Search friend"
				onChange={searchChange}
			/>
		</div>
	);
};

export default SearchBox;
