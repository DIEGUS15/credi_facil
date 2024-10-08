import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  const products = await Product.find({
    user: req.user.id,
  }).populate("user");
  res.json(products);
};

export const createProduct = async (req, res) => {
  const { reference, type, name, value, stock, status, description } = req.body;

  const newProduct = new Product({
    reference,
    type,
    name,
    value,
    stock,
    status,
    description,
    user: req.user.id,
  });
  const savedProduct = await newProduct.save();
  res.json(savedProduct);
};

export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id).populate("user");
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });
  return res.sendStatus(204);
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};
