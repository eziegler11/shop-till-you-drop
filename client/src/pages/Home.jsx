import axios from 'axios';
import { useEffect, useState } from 'react';

import { SearchField } from '../components';
import Card from '../components/Card';

const Home = () => {
	// Updates the state of the products and the products that match the search text
	const [products, getProducts] = useState('');
	const [searchText, setsearchText] = useState('');

	const url = 'http://localhost:3001/';

	useEffect(() => {
		getAllProducts();
	}, []);

	const getAllProducts = () => {
		axios
			.get(`${url}getProducts`)
			.then((response) => {
				const allProducts = response.data;
				getProducts(allProducts);
			})
			.catch((error) => console.log(`Error: ${error}`));
	};

	return (
		<section className='max-w-7xl mx-auto'>
			<div>
				<h1 className='font-extrabold text-[#222328] text-[32px]'>Products</h1>
				<p className='mt-2 text-[#666e75] text-[16px] max-w[500px]'>
					Browse through the products that we have for sale
				</p>
			</div>

			<form
				className='mt-16 max-w-3xl'
				// onSubmit={handleSubmit}
			>
				<div className='flex flex-col gap-5'>
					{/* Allows the user to search */}
					<SearchField
						labelName='Search'
						type='text'
						name='product'
						placeholder='Search for a product'
						// value={form.name}
						// handleChange={handleChange}
					/>
				</div>
				<div>
					<button
						type='button'
						// onClick
						className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
					>
						Search
					</button>
				</div>
			</form>

			<div className='mt-10'>
				{/* if there are products, display the Card component */}
				<div className='flex justify-center items-center'>
					<Card products={products} />
				</div>
			</div>
		</section>
	);
};
export default Home;
