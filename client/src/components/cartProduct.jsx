import axios from "axios";
import { CartContext } from "../context/CartContext";
import { useContext, useEffect, useState } from "react";

function CartProduct(props) {
	const cart = useContext(CartContext);
	// const [products, setProducts] = useState([]);
	// const cartItems = cart.items;
	// const cartNames = getProductNamesFromMongoDB(cartItems);
	
	// function getProductNamesFromMongoDB (cartItems) {
	// 	const matchedProducts = [];
		
	// 	cartItems.forEach((cartItem) => {
	// 		const matchedMongoProduct = products.find(
	// 			(mongoProduct) => mongoProduct._id === cartItem._id
	// 			);
				
	// 			if (matchedMongoProduct) {
	// 				matchedProducts.push(matchedMongoProduct.name);
	// 			}
	// 		});
			
	// 		return matchedProducts;
	// 	}
		
	// useEffect(() => {
	// 	axios
	// 		.get('http://localhost:3001/products')
	// 		.then((response) => {
	// 			setProducts(response.data);
	// 		})
	// 		.catch((error) => {
	// 			console.error(error);
	// 		});
	// }, []);

    return (
			<>
				<div>
					{/* {cartNames.map((productName, index) => (
						<h3 key={index}>{productName}</h3>
					))
					} */}
					</div>
					<div>
					<h3>{props.product}</h3>
					<p>{props.quantity} total</p>
					{/* <p>${props.quantity * products.price}</p> */}
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

// Still working on props