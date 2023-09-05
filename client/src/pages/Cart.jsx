import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
	const cart = useContext(CartContext);

	// const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
	const productsCount = 3;

	const test = cart.getTotalCost();
	console.log(test);

	return (
		<div>
			<h1>Shopping Cart</h1>
			<div>
				{productsCount > 0 ? (
					<>
						<p>Items in your cart:</p>
						{cart.items.map((currentProduct, index) => (
							<h1 key={index}>{currentProduct._id}</h1>
						))}

						{/* <h1>Total: {cart.getTotalCost()}</h1> */}

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
