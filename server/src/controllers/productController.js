import Product from '../models/Product.js';
export const listProducts = async (_, res) => res.json(await Product.find().sort({ createdAt: -1 }));
export const addProduct = async (req, res) => res.status(201).json(await Product.create(req.body));
export const updateProduct = async (req, res) => res.json(await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }));
export const deleteProduct = async (req, res) => { await Product.findByIdAndDelete(req.params.id); res.json({ ok: true }); };
