import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import mongoose, { connect } from 'mongoose';
import productRouter from './routes/productRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/', productRouter);
app.use('/search', productRouter);
app.use('/products', productRouter);

const uri = process.env.MONGODB_URL;

const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
};

// mongoose.connect('mongodb://localhost:27017/test', {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// });

const connectDB = async () => {
	await mongoose
		.connect(uri, options)
		.then(() => {
			console.log('mongo connected');
		})
		.catch((e) => console.log(e));
};

// const db = mongoose.connection;
// db.on('error', console.error.bind(console.error, 'MongoDB connection error:'));
// db.once('open', () => {
// 	console.log('Connected to MongoDB');
// });

connectDB().then(() => {
	app.listen(3001, () => {
		console.log('Server is running on port 3001');
	});
});
