import express from 'express';
import * as dotenv from 'dotenv';

import Product from '../mongodb/models/product.js';

dotenv.config();

const router = express.Router();

// GET ALL PRODUCTS
router.get('/', async (req, res) => {
    try {
        const products = await Product.find({});

        res.status(200).json({ success: true, data: products });
    } catch (error) {
        res.status(500).json({ success: false, message: error });
    }
})

export default router;