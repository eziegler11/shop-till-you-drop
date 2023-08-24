import axios from 'axios';
import { useEffect, useState } from 'react';

import { SearchField } from '../components';

// Displays products, if there are any
// Maps through each product and passes the product data to the Card
// Otherwise, returns the title
// const RenderProducts = ({ data, name }) => {
// 	if (data?.length > 0) {
// 		return data.map((product) => <Card key={product._id} {...product} />);
// 	}

// 	return (
// 		<h2 className='mt-5 font-bold text-[#6469ff] text-xl uppercase'>{name}</h2>
// 	);
// };

const Home = () => {
	// Updates the state of the products and the products that match the search text
	const [products, setProducts] = useState([]);
	const [searchText, setsearchText] = useState('');

	useEffect(() => {
		axios
			.get('http://localhost:3001/getProducts')
			.then((products) => setProducts(products.data))
			.catch((error) => console.log(error));
	}, []);

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
					{products.map((products) => {
						<p>{products.name}</p>;
					})}
				</div>
			</div>
		</section>
	);
};
export default Home;
