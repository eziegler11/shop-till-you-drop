import axios from 'axios';
import { createContext, useState } from 'react';

// Context (cart, addToCart, removeCart)
// Provider gives your React app access to all the things in your context
export const CartContext = createContext({
	items: [],
	getProductQuantity: () => {},
	addOneToCart: () => {},
	removeOneFromCart: () => {},
	deleteFromCart: () => {},
	// getTotalCost: () => {},
});

export function CartProvider({ children }) {
	const [cartProducts, setCartProducts] = useState([]);

	// { id: 1, quantity: 1 }

	function getProductQuantity(_id) {
		const quantity = cartProducts.find(
			(product) => product._id === _id
		)?.quantity;

		if (quantity === undefined) {
			return 0;
		}
		return quantity;
	}

	function addOneToCart(_id) {
		const quantity = getProductQuantity(_id);

		if (quantity === 0) {
			// product is not in cart
			setCartProducts([
				...cartProducts,
				{
					_id: _id,
					quantity: 1,
				},
			]);
		} else {
			// product is in cart
			setCartProducts(
				cartProducts.map(
					(product) =>
						product._id === _id // if condition
							? { ...product, quantity: product.quantity + 1 } // if statement is true
							: product // if statement is false
				)
			);
		}
	}

	function removeOneFromCart(_id) {
		const quantity = getProductQuantity(_id);

		if (quantity == 1) {
			deleteFromCart(_id);
		} else {
			setCartProducts(
				cartProducts.map(
					(product) =>
						product._id === _id // if condition
							? { ...product, quantity: product.quantity - 1 } // if statement is true
							: product // if statement is false
				)
			);
		}
	}

	function deleteFromCart(_id) {
		// [] if an object meets a condition, add the object to array
		setCartProducts((cartProducts) =>
			cartProducts.filter((currentProduct) => {
				return currentProduct._id != _id;
			})
		);
	}
		
	// async function getOneProduct(itemId) {
	// 	try {
	// 		const res = await axios.get(`http://localhost:3001/product/${itemId}`);
	// 		return res.data;
	// 	} catch (err) {
	// 		console.error(err);
	// 		throw err;
	// 	}
	// }

	// async function getTotalCost() {
	// 	let totalCost = 0;

	// 	const promises = cartProducts.map(async (cartItem) => {
	// 		const productData = await getOneProduct(cartItem._id);
	// 		totalCost += productData.price * cartItem.quantity;
	// 	});

	// 	await Promise.all(promises);

	// 	console.log(totalCost);
	// 	return totalCost;
	// }

	// can I pass totalCost in the contextValue?
	// and call the cart.geTotalCost on the cart page using useState or something

	// should be a way to have the price come through, if the ID is coming through

	const contextValue = {
		items: cartProducts,
		getProductQuantity,
		addOneToCart,
		removeOneFromCart,
		deleteFromCart,
		// getTotalCost,
	};

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
}

export default CartProvider;
