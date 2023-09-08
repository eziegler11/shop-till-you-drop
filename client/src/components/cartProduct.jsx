import axios from "axios";
import { CartContext } from "../context/CartContext";
import { useContext, useEffect, useState } from "react";

function CartProduct(props) {
    const cart = useContext(CartContext);
    
    // Need to get the name and price from the productData and then associate the props.id with the _id from the productData and return the name instead of the ID and also multiply the price by the quantity

    return (
			<>
				<div>
					{/* <h3>{productData.name}</h3> */}
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