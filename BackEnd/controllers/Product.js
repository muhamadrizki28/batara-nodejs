// Import modal
const Product = require('../models/Product.js');

// Get All Products
exports.getProducts = async (req, res) => {
  try {
    const product = await Product.findAll();
    res.send(product);
  } catch (err) {
    console.log(err);
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(product[0]);
  } catch (err) {
    console.log(err);
  }
};

exports.createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.json({
      message: 'Product Created',
    });
  } catch (err) {
    console.log(err);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Product Updated',
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Product Deleted',
    });
  } catch (err) {
    console.log(err);
  }
};
