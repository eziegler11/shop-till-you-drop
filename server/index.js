import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import ProductModel from './models/Product.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/test');

app.get('/getProducts', (req, res) => {
	ProductModel.find()
		.then((products) => res.json(products))
		.catch((error) => res.json(error));
});

app.listen(3001, () => {
	console.log('Server is running on port 3001');
});
