import React from 'react';
import photo from '../assets/download.png';
import { formatCurrency } from '../utilities/formatCurrency';

const Card = ({ products }) => {
	const quantity = 1;

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
							<button>Add to Cart</button>
						) : (
							<div>
								<div>
									<button>-</button>
									<div>
										<span>{quantity}</span> in cart
									</div>
									<button>+</button>
								</div>
								<button>Remove</button>
							</div>
						)}
					</div>
				</div>
			);
		});
	}
};

export default Card;
