const Cart = require('../dao/models/cart.model');
const Product = require('../dao/models/product.model');

const createCart = async (req, res) => {
  try {
    const cart = await Cart.create({ products: [] });
    res.status(201).json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el carrito' });
  }
};

const addProductToCart = async (req, res) => {
  try {
    const { cartId } = req.params;
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ error: 'Producto no encontrado' });

    const cart = await Cart.findById(cartId);
    if (!cart) return res.status(404).json({ error: 'Carrito no encontrado' });

    cart.products.push({ product: productId, quantity });
    await cart.save();

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: 'Error al agregar producto al carrito' });
  }
};

const finalizeCart = async (req, res) => {
  try {
    const { cartId } = req.params;
    const cart = await Cart.findById(cartId);

    if (!cart) return res.status(404).json({ error: 'Carrito no encontrado' });
    cart.finalized = true;
    await cart.save();

    res.json({ message: 'Carrito finalizado', cart });
  } catch (error) {
    res.status(500).json({ error: 'Error al finalizar el carrito' });
  }
};

const getCarts = async (req, res) => {
  try {
    const carts = await Cart.find().populate('products.product');
    res.json(carts);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los carritos' });
  }
};

module.exports = { createCart, addProductToCart, finalizeCart, getCarts };
