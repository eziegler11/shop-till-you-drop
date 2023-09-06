import express from 'express';
import ProductModel from '../models/Product.js';

const router = express.Router();

// GET all Products
router.get('/', async (req, res) => {
	try {
		const products = await ProductModel.find();
		res.json(products);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
});

// GET Product by User Search
router.get('/search', async (req, res) => {
	try {
		const search = await ProductModel.find(req.query);
		res.json(search);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
});

// GET Product by ID (for totalCost)
router.get('/product/:id', async (req, res) => {
	console.log(req.params.id);
	try {
		const search = await ProductModel.findById(req.params.id);
		res.json(search);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
});

export default router;
