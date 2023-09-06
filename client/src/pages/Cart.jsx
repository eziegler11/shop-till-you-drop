import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
	const cart = useContext(CartContext);
	const [total, setTotal] = useState(() => {
		let setTotal = cart.getTotalCost();
	});

	// const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
	const productsCount = 3;

	return (
		<div>
			<h1>Shopping Cart: {productsCount}</h1>
			<div>
				{productsCount > 0 ? (
					<>
						<p>Items in your cart:</p>
						{cart.items.map((currentProduct, index) => (
							<h1 key={index}>{currentProduct.id}</h1>
						))}

						<h1>Total: {setTotal}</h1>

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
