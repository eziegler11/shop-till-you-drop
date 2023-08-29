import React from 'react';

const Card = ({ products }) => {
	if (products.length > 0) {
		return products.map((product) => {
			return (
				<div key={product._id}>
					<h3>{product.name}</h3>
					<p>{product.price}</p>
					<p>{product.category}</p>
				</div>
			);
		});
	}
};

export default Card;
