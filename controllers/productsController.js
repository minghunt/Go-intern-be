import * as ProductDAO from "../dao/productsDAO.js";

async function getAllProducts(req, res) {
    try{
        const products = await ProductDAO.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function getProductById(req, res) {
    try{
        const productId = req.params.id;
        const product = await ProductDAO.getProductById(productId);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }   
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function createProduct(req, res) {
    try{
        const newProduct = req.body;
        const createdProduct = await ProductDAO.createProduct(newProduct);
        res.status(201).json(createdProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function updateProduct(req, res) {
    try{
        const productId = req.params.id;
        const updatedProduct = req.body;
        const product = await ProductDAO.updateProduct(productId, updatedProduct);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function deleteProduct(req, res) {
    try{
        const productId = req.params.id;
        await ProductDAO.deleteProduct(productId);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
export {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}