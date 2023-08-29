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
				placeholder='Search products...'
				onSubmit={handleSearch}
			/>
			<button
				onClick={handleSearch}
				className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
			>
				Search
			</button>
		</div>
	);
};

export default SearchBar;
