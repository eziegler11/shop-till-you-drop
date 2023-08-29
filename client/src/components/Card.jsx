import photo from '../assets/download.png';
import { formatCurrency } from '../utilities/formatCurrency';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Card = ({ products }) => {
	const quantity = 1;
	const cart = useContext(CartContext);
	const productQuantity = cart.getProductQuantity(products._id);

	if (products.length > 0) {
		return products.map((product) => {
			return (
				<div
					key={product._id}
					className='rounded-xl group relative shadow-card hover:shadow-cardhover card p-2'
				>
					<img
						className='w-full h-auto object-cover rounded-xl p-2'
						src={photo}
						alt={product.name}
					/>
					<h3 className='text-sm overflow-y-auto text-center'>
						{product.name}
					</h3>
					<div className='text-sm mt-5 flex justify-between items-center gap-2'>
						<p>{formatCurrency(product.price)}</p>
						<p>{product.category}</p>
					</div>
					<div className='mt-auto'>
						{quantity === 0 ? (
							<button className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
								Add to Cart
							</button>
						) : (
							<div>
								<div>
									<button className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
										-
									</button>
									<div>
										<span>{quantity}</span> in cart
									</div>
									<button className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
										+
									</button>
								</div>
								<button className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
									Remove
								</button>
							</div>
						)}
					</div>
				</div>
			);
		});
	}
};

export default Card;
