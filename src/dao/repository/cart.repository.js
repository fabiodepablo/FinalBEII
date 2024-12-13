const Cart = require('../models/cart.model');

exports.addProduct = async (cartId, product, quantity) => {
    const cart = await Cart.findById(cartId);
    cart.products.push({ product, quantity });
    return await cart.save();
};
