import axios from 'axios';
import { useContext, useState, useEffect } from 'react';
import CartProduct from '../components/cartProduct';
import { CartContext } from '../context/CartContext';

const Cart = () => {
	const cart = useContext(CartContext);
	const productsCount = cart.items.reduce(
		(sum, products) => sum + products.quantity,
		0
	);
	const [products, setProducts] = useState([]);
	const cartItems = cart.items;
	const cartNames = getProductNamesFromMongoDB(cartItems);

	function getProductNamesFromMongoDB(cartItems) {
		const matchedProducts = [];

		cartItems.forEach((cartItem) => {
			const matchedMongoProduct = products.find(
				(mongoProduct) => mongoProduct._id === cartItem._id
			);

			if (matchedMongoProduct) {
				matchedProducts.push(matchedMongoProduct);
			}
		});

		return matchedProducts;
	}

	console.log(cartItems);

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
		<div>
			<h1>Shopping Cart: {productsCount}</h1>
			<div>
				{productsCount > 0 ? (
					<>
						<p>Items in your cart:</p>
						{cartNames.map((currentProduct, index) => (
							<div key={index}>
								<CartProduct
									id={currentProduct._id}
									quantity={currentProduct.quantity}
									product={currentProduct.name}
								></CartProduct>
							</div>
						))}

						

						<h1>Total: $0.00</h1>

						<button className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
							Purchase Items
						</button>
					</>
				) : (
					<h1>There are no products in your cart</h1>
				)}
			</div>
		</div>
	);
};

export default Cart;
