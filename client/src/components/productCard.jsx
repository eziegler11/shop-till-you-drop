import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatCurrency } from '../utilities/formatCurrency';

const productCard = (props) => {
	//props.product is the product data
	const product = props.product;
	const cart = useContext(CartContext);
	const productQuantity = cart.getProductQuantity(product._id);
	const imagePath = `/images/${product._id}.jpg`;

	return (
		<div className='my-20'>
			<div>
				<div>
					<img
						src={imagePath}
						alt={product.name}
						className='h-52 w-full object-cover'
					/>
					<div className='text-center mt-2 mb-2'>
						<h1 className='text-xl font-semibold'>{product.name}</h1>
						<p className='text-gray-700'>{formatCurrency(product.price)}</p>
						<p className='text-gray-700'>{product.category}</p>
						{productQuantity > 0 ? (
							<>
								<button
									onClick={() => cart.removeOneFromCart(product._id)}
									className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm px-3 py-1.5 transition-all'
								>
									-
								</button>
								<span>{productQuantity}</span> in cart
								<button
									onClick={() => cart.addOneToCart(product._id)}
									className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm px-3 py-1.5 transition-all'
								>
									+
								</button>
								<button
									onClick={() => cart.deleteFromCart(product._id)}
									className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm px-3 py-1.5 transition-all'
								>
									Remove
								</button>
							</>
						) : (
							<button
								onClick={() => cart.addOneToCart(product._id)}
								className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm px-3 py-1.5 transition-all'
							>
								Add To Cart
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default productCard;
