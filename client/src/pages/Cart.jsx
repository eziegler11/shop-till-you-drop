import axios from 'axios';
import { useContext, useState } from 'react';
import CartProduct from '../components/cartProduct';
import { CartContext } from '../context/CartContext';

const Cart = () => {
	const cart = useContext(CartContext);

	const productsCount = cart.items.reduce(
		(sum, products) => sum + products.quantity,
		0
	);

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
								<CartProduct
									id={currentProduct._id}
									quantity={currentProduct.quantity}
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
