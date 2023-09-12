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
		<div className='container mx-auto py-8'>
			<div className='flex flex-wrap justify-center'>
				<div className='max-w-sm bg-white rounded-lg shadow-lg mx-4 mb-8'>
					<div className='px-6 py-4'>
						<div className='mb-4'>
							<img src={imagePath} alt={product.name} className='w-full' />
						</div>
						<h1 className='text-xl font-semibold mb-2'>{product.name}</h1>
						<p className='text-gray-700 text-base mb-2'>
							{formatCurrency(product.price)}
						</p>
						<p className='text-gray-700 text-base'>{product.category}</p>
					</div>
					<div className='px-6 pb-4'>
						{productQuantity > 0 ? (
							<>
								<div className='flex items-center mb-2'>
									<button
										onClick={() => cart.removeOneFromCart(product._id)}
										className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm px-3 py-1.5'
									>
										-
									</button>
									<div className='mx-3'>
										<span>{productQuantity}</span> in cart
									</div>
									<button
										onClick={() => cart.addOneToCart(product._id)}
										className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm px-3 py-1.5'
									>
										+
									</button>
								</div>
								<button
									onClick={() => cart.deleteFromCart(product._id)}
									className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm px-3 py-1.5'
								>
									Remove
								</button>
							</>
						) : (
							<button
								onClick={() => cart.addOneToCart(product._id)}
								className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm w-full px-4 py-2'
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
