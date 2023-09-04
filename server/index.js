import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routes/productRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', productRouter);
app.use('/search', productRouter);

mongoose.connect('mongodb://localhost:27017/test', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
	console.log('Connected to MongoDB');
});


// // Gets all products on load and displays them on the home
// app.get('/products', (req, res) => {
// 	ProductModel.find()
// 		.then((products) => res.json(products))
// 		.catch((error) => res.json(error));
// });

// // Allows the User to Search for specific products
// app.get('/search/products', async (req, res) => {
//   try {
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

app.listen(3001, () => {
	console.log('Server is running on port 3001');
});
