import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import axios from 'axios';

const productCard = (props) => {
	//props.product is the product data
	const product = props.product;
	const cart = useContext(CartContext);
	const productQuantity = cart.getProductQuantity(product._id);
	const imagePath = `/images/${product._id}.jpg`;
	const [dataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		axios.get('http://localhost:3001/products').then((response) => {
			setDataLoaded(true);
		});
	}, []);

	if (!dataLoaded) {
		return <div>Loading...</div>;
	}

	// /images/64e7dd164a29a28eaf4b577f.jpg

	return (
		<div className='my-3'>
			<div>
				<div className='shadow-lg rounded-bl-lg rounded-br-lg min-w-fit'>
					<img
						src={imagePath}
						alt={product.name}
						className='h-52 w-full object-cover rounded-tl-lg rounded-tr-lg'
					/>
					<div className='text-center pt-2'>
						<h1 className='text-xl font-semibold pb-2 h-24 xs:h-10 sm:h-24'>
							{product.name}
						</h1>
						<p className='text-gray-700 pb-2 italic'>
							{formatCurrency(product.price)}
						</p>
						<p className='text-gray-700 pb-2'>{product.category}</p>
						{productQuantity > 0 ? (
							<div className='pb-2'>
								<>
									<div className='block'>
										<button
											onClick={() => cart.removeOneFromCart(product._id)}
											className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm px-3 py-1.5 transition-all m-3'
										>
											-
										</button>
										<span>{productQuantity}</span> in cart
										<button
											onClick={() => cart.addOneToCart(product._id)}
											className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm px-3 py-1.5 transition-all m-3'
										>
											+
										</button>
									</div>
									<div>
										<button
											onClick={() => cart.deleteFromCart(product._id)}
											className='text-white bg-green-700 hover:bg-green-800 font-medium rounded-md text-sm px-3 py-1.5 transition-all '
										>
											Remove
										</button>
									</div>
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
