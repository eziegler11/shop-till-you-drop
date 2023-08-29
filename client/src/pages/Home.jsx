import axios from 'axios';
import { useEffect, useState } from 'react';

import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

const Home = () => {
	// Updates the state of the products and the products that match the search text
	const [products, getProducts] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [cart, setCart] = useState({});

	const url = 'http://localhost:3001/';

	// Displays all products on home page on render
	useEffect(() => {
		getAllProducts();
	}, []);

	// Gets all products from the database
	const getAllProducts = async () => {
		await axios
			.get(`${url}products`)
			.then((response) => {
				const allProducts = response.data;
				getProducts(allProducts);
			})
			.catch((error) => console.log(`Error: ${error}`));
	};

	// Queries the database for products that match the search text
	const handleSearch = async (searchText) => {
		try {
			const response = await axios.get(`${url}search/products?q=${searchText}`);
			setSearchResults(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section className='max-w-7xl mx-auto'>
			<div>
				<h1 className='font-extrabold text-[#222328] text-[32px]'>Products</h1>
				<p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>
					Browse through the products that we have for sale
				</p>
			</div>

			<div className='mt-16'>
				<SearchBar onSearch={handleSearch} />
			</div>

			<div className='mt-10'>
				<div className='flex gap-10'>
					{searchResults.length > 0 ? (
						<Card products={searchResults} title='No Search Results Found' />
					) : (
						<Card products={products} title='No products' />
					)}
				</div>
			</div>
		</section>
	);
};
export default Home;

// Need to add images to the product cards
// Need to style product cards

// Fix query to search both the name & the category

// Need a button to add products to the cart
// Need a handleSubmit function on the add to cart button
// Need to add a number next to the cart

// Need to associate a user with their own individual cart / local storage? cookies?

// Need to create a cart page
// Need to create a checkout page with Stripe
