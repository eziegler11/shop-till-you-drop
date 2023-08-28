import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
	const [searchText, setSearchText] = useState('');

	const handleSearch = () => {
		onSearch(searchText);
	};

	return (
		<div>
			<input
				type='text'
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
			/>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
};

export default SearchBar;
