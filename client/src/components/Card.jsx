import React from 'react';

const Card = (props) => {
	const { products } = props;

	if (products.length > 0) {
		return products.map((product, index) => {
			return (
				<div key={product._id}>
					<h3>{product.name}</h3>
					<p>{product.price}</p>
					<p>{product.category}</p>
				</div>
			);
		});
	} else {
		return <h3>No products</h3>;
	}
};

export default Card;
