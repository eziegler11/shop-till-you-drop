import mongoose from "mongoose";
import ProductSchema from "./models/product.js";
import connectDB from './mongodb/connect.js';
import * as dotenv from 'dotenv';

dotenv.config();

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

const seedProducts = [
    {
        name: 'Airpods Wireless Bluetooth Headphones',
        price: 149.99,
        image:
    }
]