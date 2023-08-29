// import cors from 'cors';
// import express from 'express';
// import ProductModel from '../models/Product.js'

// const app = express();
// app.use(cors());
// app.use(express.json());

// const router = express.Router();

// // Gets all products on load and displays them on the home page
// app.get('/', (req, res) => {
// 	ProductModel.find()
// 		.then((products) => res.json(products))
// 		.catch((error) => res.json(error));
// });

// // Allows the User to Search for specific products
// app.get('/', async (req, res) => {
// 	try {
// 		const searchText = req.query.q || '';
// 		const products = await ProductModel.find(
// 			{ $text: { $search: searchText } },
// 			{ score: { $meta: 'textScore' } }
// 		).sort({ score: { $meta: 'textScore' } });
// 		res.json(products);
// 	} catch (error) {
// 		console.error(error);
// 		res.status(500).json({ message: 'Server error' });
// 	}
// });

// export default router;