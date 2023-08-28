import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
    category: {
        type: String,
        required: true,
    },
});

ProductSchema.index({ name: 'text', category: 'text' });

const ProductModel = mongoose.model('products', ProductSchema);

export default ProductModel;