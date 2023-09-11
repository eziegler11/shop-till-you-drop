import mongoose from 'mongoose';
import ProductSchema from '../models/Product.js';


const seedProducts = [
	{
		name: 'Airpods Wireless Bluetooth Headphones',
		price: 149.99,
		category: 'Wireless Headphones',
	},
	{
		name: 'iPhone 11 Pro 256GB Memory',
		price: 599.99,
		category: 'Phone',
	},
	{
		name: 'Cannon EOS 80D DSLR Camera',
		price: 929.99,
		category: 'Camera',
	},
	{
		name: 'Sony Playstation 4 Pro White Version',
		price: 399.99,
		category: 'Gaming Console',
	},
	{
		name: 'Bose SoundLink Bluetooth Speaker',
		price: 199.99,
		category: 'Speakers',
	},
	{
		name: 'Logitech G-Series Gaming Mouse',
		price: 49.99,
		category: 'Gaming Mouse',
	},
];

const seedDB = async () => {
	await ProductSchema.insertMany(seedProducts);
	console.log('DB Seeded');
};

seedDB().then(() => {
	mongoose.connection.close();
});
