import * as dotenv from 'dotenv';
import express from 'express';

import Product from '../models/Product.js';

dotenv.config();

const router = express.Router();

// GET ALL PRODUCTS
router.route('/products').get(async (req, res) => {
	try {
		const products = await Product.find({});
		res.status(200).json({ success: true, data: products });
	} catch (err) {
		res.status(500).json({
			success: false,
			message: 'Fetching products failed, please try again',
		});
	}
});

export default router;
