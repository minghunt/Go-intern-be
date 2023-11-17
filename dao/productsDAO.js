import Product from '../models/productsModel.js';

const getAllProducts = async () => {
    try {
        const products = await Product.find();
        return products;
    } catch (error) {
        throw error;
    }
};
const getProductById = async (productId) => {
    try {
        const products = await Product.findOne({
            id: { $eq: productId },
        });
        return products;
    } catch (error) {
        throw error;
    }
};
const createProduct = async (productData) => {
    try {
        const newProduct = new Product(productData);
        const savedProduct = await newProduct.save();
        return savedProduct;
    } catch (error) {
        throw error;
    }
};
const updateProduct = async (productId, productData) => {
    try {
        const updatedProduct = await Product.updateOne(
            { id: productId} ,
            productData);
        return updatedProduct;
    } catch (error) {
        throw error;
    }
};
const deleteProduct = async (productId) => {
    try {
        await Product.deleteOne({ id: productId});
    } catch (error) {
        throw error;
    }
};
export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};