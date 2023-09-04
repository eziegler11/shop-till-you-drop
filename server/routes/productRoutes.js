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

export default router;