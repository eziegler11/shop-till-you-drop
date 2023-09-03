import express from 'express';
import getAllProducts from '../controller/productCtrl.js';

const router = express.Router();

router.get('/', getAllProducts);

export default {productRoute};