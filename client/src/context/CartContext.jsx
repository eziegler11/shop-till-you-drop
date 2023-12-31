import { createContext, useState } from 'react';

// Context (cart, addToCart, removeCart)
// Provider gives your React app access to all the things in your context
export const CartContext = createContext({
	items: [],
	getProductQuantity: () => {},
	addOneToCart: () => {},
	removeOneFromCart: () => {},
	deleteFromCart: () => {},
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

	const contextValue = {
		items: cartProducts,
		getProductQuantity,
		addOneToCart,
		removeOneFromCart,
		deleteFromCart,
	};

	return (
		<CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
	);
}

export default CartProvider;
