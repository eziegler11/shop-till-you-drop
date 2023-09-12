import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartProduct(props) {
	const cart = useContext(CartContext);

	return (
		<>
			<div>
				<h3 className='text-l font-semibold py-2'>{props.product}</h3>
				<p className='py-1'>{props.quantity} total</p>
				<p className='text-gray-700 pb-2 italic'>${props.subtotal}</p>
				<button
					onClick={() => cart.deleteFromCart(props.id)}
					className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm px-3 py-1.5 transition-all my-2'
				>
					Remove
				</button>
				<hr></hr>
			</div>
		</>
	);
}

export default CartProduct;