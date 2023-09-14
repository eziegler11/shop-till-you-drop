import cors from 'cors';
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

mongoose.connect('mongodb://127.0.0.1:27017/test', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console.error, 'MongoDB connection error:', error));
db.once('open', () => {
	console.log('Connected to MongoDB');
});

app.listen(8080, () => {
	console.log('Server is running on port 8080');
});