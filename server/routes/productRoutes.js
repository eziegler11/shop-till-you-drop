import express from 'express';
import ProductModel from '../models/Product.js';

const router = express.Router();

// Route to GET all Products
router.get('/', async (req, res) => {
	try {
		const products = await ProductModel.find();
		res.json(products);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
});

// Get to GET Product by User Search
router.get('/search', async (req, res) => {
	try {
		const search = await ProductModel.find(req.query);
		res.json(search);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
});

export default router;
