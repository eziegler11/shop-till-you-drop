import axios from 'axios';
import { useEffect, useState } from 'react';

import ProductCard from '../components/productCard';

const Home = () => {
	// Updates the state of the products and the products that match the search text
	const [products, setProducts] = useState([
		{
			name: '',
			price: '',
			category: '',
		},
	]);

	const [searchResults, setSearchResults] = useState([]);

	// Displays all products on home page on render
	useEffect(() => {
		axios
			.get('http://localhost:3001/products')
			.then((response) => {
				setProducts(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
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
				<div className='grid grid-flow-row grid-cols-4 gap-3'>
					{searchResults.length > 0 ? (
						<ProductCard product={searchResults} />
					) : (
						products.map((products, index) => (
							<div key={index}>
								<ProductCard
									className=''
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

// Need to add images to the product cards
// Need to style product cards

// Future Development:

// Fix query to search both the name & the category
// Need to add a number next to the cart
// Need to associate a user with their own individual cart / local storage? cookies?
// Need to create a checkout page with Stripe
