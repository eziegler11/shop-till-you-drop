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
