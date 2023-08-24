import { useState, useEffect } from 'react';

import { Card, SearchField } from '../components';

// Displays products, if there are any
// Maps through each product and passes the product data to the Card
// Otherwise, returns the title
const RenderProducts = ({ data, title }) => {
	if (data?.length > 0) {
		return data.map((product) => <Card key={product._id} {...product} />);
	}
	return (
		<h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2>
	);
};

const Home = () => {
	// Updates the state of the products and the products that match the search text
	const [products, setProducts] = useState(null);
	const [searchText, setsearchText] = useState('');

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch('http://localhost:8080/api/v1', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json',
					},
				});

				if(response.ok) {
					const result = await response.json();

					setProducts(result.data);
				}
			} catch (error) {
				console.log(error);
			}
		}

		fetchProducts();
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
				{products ? (
					<div className='flex justify-center items-center'>
						<Card />
					</div>
				) : (
					<>
						{/* Or if the user searched, display those products */}
						{searchText && (
							<h2 className='font-medium text-[#666e75] text-xl mb-3'>
								Showing products for
								<span className='text-[#222328]'> {searchText}</span>
							</h2>
						)}
						<div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'>
							{/* if the user searched, display those products or display all products */}
							{searchText ? (
								<RenderProducts data={[]} title='No products found' />
							) : (
								<RenderProducts data={products} title='All products' />
							)}
						</div>
					</>
				)}
			</div>
		</section>
	);
};
export default Home;
