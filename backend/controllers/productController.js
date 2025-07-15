import db from '../db/db.js';

export const getProducts = async (req, res) => {
  const products = await db('products').select('*');
  res.json(products);
};

export const getProduct = async (req, res) => {
  const product = await db('products').where({ id: req.params.id }).first();
  if (!product) return res.status(404).json({ message: 'Not found' });
  res.json(product);
};

export const addProduct = async (req, res) => {
  const { name, price, category } = req.body;
  const [id] = await db('products').insert({ name, price, category });
  res.status(201).json({ id, name, price, category });
};

export const updateProduct = async (req, res) => {
  const { name, price, category } = req.body;
  await db('products').where({ id: req.params.id }).update({ name, price, category });
  res.json({ message: 'Updated successfully' });
};

export const deleteProduct = async (req, res) => {
  await db('products').where({ id: req.params.id }).del();
  res.json({ message: 'Deleted successfully' });
};
