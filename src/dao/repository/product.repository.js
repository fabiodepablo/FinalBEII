const Product = require('../models/product.model');

class ProductRepository {
    static async getAll() {
        return await Product.find();
    }

    static async getById(id) {
        return await Product.findById(id);
    }

    static async create(productData) {
        const product = new Product(productData);
        return await product.save();
    }

    static async update(id, productData) {
        return await Product.findByIdAndUpdate(id, productData, { new: true });
    }

    static async delete(id) {
        return await Product.findByIdAndDelete(id);
    }
}

module.exports = ProductRepository;
