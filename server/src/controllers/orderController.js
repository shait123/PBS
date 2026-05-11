import Order from '../models/Order.js';
export const createOrder = async (req, res) => res.status(201).json(await Order.create(req.body));
export const listOrders = async (_, res) => res.json(await Order.find().sort({ createdAt: -1 }));
