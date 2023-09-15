import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routes/productRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/', productRouter);
app.use('/search', productRouter);
app.use('/products', productRouter);

const uri = process.env.MONGODB_URI;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

const connectDB = async () => {
	await mongoose
		.connect(uri, options)
		.then(() => {
			console.log('mongo connected');
		})
		.catch((e) => console.log(e));
};

connectDB().then(() => {
	app.listen(3001, () => {
		console.log('Server is running on port 3001');
	});
});
