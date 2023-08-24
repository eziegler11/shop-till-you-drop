import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';

import connectDB from './mongodb/connect.js';
import ProductSchema from './mongodb/models/product.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
	res.send('This route is working');
});

const startServer = async () => {
	try {
		connectDB(process.env.MONGODB_URL);
		app.listen(8080, () =>
			console.log('Server is running on port http://localhost:8080')
		);
	} catch (error) {
		console.log(error);
	}
};

startServer();

// Need to download images for the products and save in a folder
// Need to connect routes from server to client
// Allows the cards to be created for each product
// Then in the cards, associate the images with the products

// Need to create a get route on the "search" button
// Allows the user to search for a product using req.params.body
// Then the search will be sent to the server
// Server will return and the client will display the results

// Need to make a cart page
// Update cart to show a number next to the icon
// Server saves client data to know which products the user added to the cart, in order to return these on the cart page
