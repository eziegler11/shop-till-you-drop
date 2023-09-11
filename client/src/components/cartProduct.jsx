import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartProduct(props) {
	const cart = useContext(CartContext);

	return (
		<>
			<div>
				<h3>{props.product}</h3>
				<p>{props.quantity} total</p>
				<p>${props.subtotal}</p>
				<button
					onClick={() => cart.deleteFromCart(props.id)}
					className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
				>
					Remove
				</button>
				<hr></hr>
			</div>
		</>
	);
}

export default CartProduct;