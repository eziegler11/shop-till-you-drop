import axios from 'axios';
import { useEffect, useState } from 'react';

import ProductCard from '../components/productCard';

const Home = () => {
	// Updates the state of the products and the products that match the search text
	const [searchResults, setSearchResults] = useState([]);
	const [products, setProducts] = useState([
		{
			name: '',
			price: '',
			category: '',
		},
	]);

	// Displays all products on home page on render
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://shop-till-you-drop.onrender.com/products'
				);
				setProducts(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className=''>
			<div>
				<h1 className='font-extrabold text-[#222328] text-[32px]'>Products</h1>
				<p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>
					Browse through the products that we have for sale
				</p>
			</div>

			{/* <div className='mt-16'>
				<SearchBar onSearch={setSearchResults} />
			</div> */}

			<div>
				<div className='grid gap-3 xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-4'>
					{searchResults.length > 0 ? (
						<ProductCard product={searchResults} />
					) : (
						products.map((products, index) => (
							<div key={index}>
								<ProductCard
									key={products._id}
									product={products}
								/>
							</div>
						))
					)}
				</div>
			</div>
		</section>
	);
};
export default Home;

// Future Development:

// Fix query to search both the name & the category
// Need to add a number next to the cart
// Need to associate a user with their own individual cart / local storage? cookies?
// Need to create a checkout page with Stripe
