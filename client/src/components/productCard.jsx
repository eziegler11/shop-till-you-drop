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
		<div className='my-3'>
			<div>
				<div className='shadow-lg rounded-bl-lg rounded-br-lg'>
					<img
						src={imagePath}
						alt={product.name}
						className='h-52 w-full object-cover rounded-tl-lg rounded-tr-lg'
					/>
					<div className='text-center pt-2'>
						<h1 className='text-xl font-semibold pb-2'>{product.name}</h1>
						<p className='text-gray-700 pb-2 italic'>{formatCurrency(product.price)}</p>
						<p className='text-gray-700 pb-2'>{product.category}</p>
						{productQuantity > 0 ? (
							<div className='pb-2'>
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
							</div>
						) : (
							<div className='pb-2'>
								<button
									onClick={() => cart.addOneToCart(product._id)}
									className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm px-3 py-1.5 transition-all'
								>
									Add To Cart
								</button>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
export default productCard;
