class CartDTO {
    constructor(cart) {
      this.id = cart._id;
      this.products = cart.products.map(product => ({
        id: product.product._id,
        name: product.product.name,
        price: product.product.price,
        quantity: product.quantity,
      }));
      this.total = this.products.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
  }
  
  module.exports = CartDTO;
  