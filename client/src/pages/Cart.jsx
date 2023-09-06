import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
	const cart = useContext(CartContext);
	// const [total, setTotal] = useState(() => {
	// 	const initialTotal = cart.getTotalCost();
	// 	return initialTotal;
	// });

	// useEffect(() => {
	// 	if (total) {
	// 		setTotal(cart.getTotalCost());
	// 	}
	// }, []);

	// const productsCount = cart.items.quantity;
	const productsCount = cart.items.reduce((sum, products) => sum + products.quantity, 0);
	console.log(cart.items);
	
	// const productsCount = 3;

	return (
		<div>
			<h1>Shopping Cart: {productsCount}</h1>
			<div>
				{productsCount > 0 ? (
					<>
						<p>Items in your cart:</p>
						{cart.items.map((currentProduct, index) => (
							<div key={index}>
								<h1>{currentProduct._id}</h1>
							</div>
						))}

						<h1>Total: {productsCount}</h1>

						<button>Purchase Items</button>
					</>
				) : (
					<h1>There are no products in your cart</h1>
				)}
			</div>
		</div>
	);
};

export default Cart;
