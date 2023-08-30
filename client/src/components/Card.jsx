import { useContext } from 'react';
import photo from '../assets/download.png';
import { CartContext } from '../context/CartContext';
import { formatCurrency } from '../utilities/formatCurrency';

const Card = ({ products }) => {
	const cart = useContext(CartContext);
	let productQuantity = cart.getProductQuantity(products._id);
	console.log(cart.items);

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
				</div>
			);
		});
	}
};

export default Card;

// <div className='mt-auto'>
// 	{productQuantity < 0 ? (
// 		<>
// 			<div>
// 				<div>
// 					<button className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
// 						-
// 					</button>
// 					<div>
// 						<span>{productQuantity}</span> in cart
// 					</div>
// 					<button className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
// 						+
// 					</button>
// 				</div>
// 				<button className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'>
// 					Remove
// 				</button>
// 			</div>
// 		</>
// 	) : (
// 		<button
// 			className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
// 			onClick={() => cart.addOneToCart(product._id)}
// 		>
// 			Add to Cart
// 		</button>
// 	)}
// </div>;
