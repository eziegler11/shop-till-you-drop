import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
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

	// Calculate subtotal for each item
	const calculateSubtotal = (quantity, price) => {
		return quantity * price;
	};

	// Calculate total cost of all items in cart
	const totalCost = cartItems.reduce((total, item) => {
		const product = cartNames.find((product) => product._id === item._id);

		if (product) {
			const subtotal = calculateSubtotal(item.quantity, product.price);
			return total + subtotal;
		}

		return total;
	}, 0);

	// Format total cost to 2 decimal places
	const formattedTotalCost = totalCost.toFixed(2);

	return (
		<div>
			<h1 className='font-extrabold text-[#222328] text-[32px] mb-7'>
				Shopping Cart: {productsCount}
			</h1>
			<div>
				{productsCount > 0 ? (
					<>
						<p className='font-semibold text-[#222328] text-[25px]'>
							Items in your cart:
						</p>
						{cartNames.map((currentProduct) => {
							const shoppingItem = cartItems.find(
								(item) => item._id === currentProduct._id
							);

							if (shoppingItem) {
								return (
									<CartProduct
										key={currentProduct._id}
										id={currentProduct._id}
										product={currentProduct.name}
										subtotal={calculateSubtotal(
											shoppingItem.quantity,
											currentProduct.price
										)}
										quantity={shoppingItem ? shoppingItem.quantity : 0}
									></CartProduct>
								);
							}

							return null;
						})}

						<h3 className='font-semibold text-[#222328] text-[25px] mt-3'>
							Total Cost: ${formattedTotalCost}
						</h3>

						<button className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm px-3 py-1.5 transition-all my-1'>
							Purchase Items
						</button>
					</>
				) : (
					<h1 className='font-semibold text-[#222328] text-[25px]'>
						There are no products in your cart
					</h1>
				)}
			</div>
		</div>
	);
};

export default Cart;
