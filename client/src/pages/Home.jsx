import axios from 'axios';
import { useEffect, useState } from 'react';

import { SearchField } from '../components';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import SearchCard from '../components/SearchCard';

const Home = () => {
	// Updates the state of the products and the products that match the search text
	const [products, getProducts] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	// const [searchText, setSearchText] = useState('');
	// const [searchedResults, setSearchedResults] = useState(null);
	// const [searchTimeout, setSearchTimeout] = useState(null);
	// const [q, setQ] = useState('');

	// const [searchParam] = useState(['name', 'category']);

	const url = 'http://localhost:3001/';

	// useEffect(() => {
	// 			axios
	// 		.get(`${url}getProducts`)
	// 		.then((response) => {
	// 			const allProducts = response.data;
	// 			getProducts(allProducts);
	// 		})
	// 		.catch((error) => console.log(`Error: ${error}`));
	// }, []);

	// const userSearch = (items) => {
	// return items.filter((item) => {
	// 	return searchParam.some((newItem) => {
	// 		return(
	// 			item[newItem]
	// 			.toString()
	// 			.toLowerCase()
	// 			.indexOf(q.toLowerCase()) > -1
	// 		)
	// 	})
	// })
	// }

	useEffect(() => {
		getAllProducts();
	}, []);

	const getAllProducts = async () => {
		await axios
			.get(`${url}products`)
			.then((response) => {
				const allProducts = response.data;
				getProducts(allProducts);
			})
			.catch((error) => console.log(`Error: ${error}`));
		};

	const handleSearch = async (searchText) => {
			try {
				const response = await axios.get(`${url}search/products?q=${searchText}`);
				setSearchResults(response.data);
			} catch (error) {
				console.error(error);
			}
		};



	// const handleSearchChange = (e) => {
	// 	clearTimeout(searchTimeout);
	// 	setSearchText(e.target.value);

	// 	setSearchTimeout(
	// 	setTimeout(() => {
	// 		const searchResults = products.filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()) || item.category.toLowerCase().includes(searchText.toLowerCase()));

	// 		setSearchedResults(searchResults);
	// 	}, 500)
	// 	);
	// }

	// const searchProduct = async (req, res) => {
	// 	try {
	// 		// const { q } = req.body;
	// 		const products = await ProductModel.find({ name: { $regex: q, $options: 'i' } });

	// 		//  if (products.length < 1) throw new ErrorHandler(404, 'No product found');

	// 		res.status(200).json({
	// 			status: 'success',
	// 			message: 'Product found',
	// 			products,
	// 		})
	// 		console.log(products);
	// 			} catch (error) {
	// 				console.log(error);
	// 	}
	// };

	// const handleSubmit = (e) => {
	// 	// prevent the form from refreshing the whole page
	// 	e.preventDefault();
	// 	// make a popup alert showing the "submitted" text
	// 	searchProduct(search);
	// };
1
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

				<input
					type='search'
					name='search-form'
					id='search-form'
					placeholder='Search products...'
					// value={q}
					// onChange={(e) => setQ(e.target.value)}
				/>
			</div>
			<div>
				<button
					type='button'
					// onClick={(e) => handleSubmit(e)}
					className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
				>
					Search
				</button>
			</div>

			<div className='mt-10'>
				<div className='flex justify-center items-center'>
					{/* <Card products={products} /> */}
					<SearchCard products={searchResults} />
				</div>
			</div>
		</section>
	);
};
export default Home;

// Need to add images to the product cards
// Need to style product cards

// Need to create a query to search for products
// Need to create handleSubmit function on the search button

// Need a button to add products to the cart
// Need a handleSubmit function on the add to cart button
// Need to add a number next to the cart

// Need to associate a user with their own individual cart / local storage? cookies?

// Need to create a cart page
// Need to create a checkout page with Stripe