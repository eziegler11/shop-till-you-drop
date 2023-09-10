import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatCurrency } from '../utilities/formatCurrency';

const productCard = (props) => {
	//props.product is our product data
	const product = props.product;
	const cart = useContext(CartContext);
	const productQuantity = cart.getProductQuantity(product._id);
	

	return (
		<div>
			<div>
				<h1>{product.name}</h1>
				<p>{formatCurrency(product.price)}</p>
				<p>{product.category}</p>
				{productQuantity > 0 ? (
					<>
						<div>
							<div>
								<button
									onClick={() => cart.removeOneFromCart(product._id)}
									className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
								>
									-
								</button>
								<div>
									<span>{productQuantity}</span> in cart
								</div>
								<button
									onClick={() => cart.addOneToCart(product._id)}
									className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
								>
									+
								</button>
							</div>
							<button 
                            onClick={() => cart.deleteFromCart(product._id)}
                            className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
								Remove
							</button>
						</div>
					</>
				) : (
					<button
						onClick={() => cart.addOneToCart(product._id)}
						className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
					>
						Add To Cart
					</button>
				)}
			</div>
		</div>
	);
};
export default productCard;
