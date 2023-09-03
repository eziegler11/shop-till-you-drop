import Product from '../models/Product.js';

const getAllProducts = async (req, res) => {
    try {
        const getAllProducts = await Product.find();
        res.json(getAllProducts);
    } catch (error) {
        console.log(error);
    }
}

export default getAllProducts;