import { Router } from 'express';
import { createOrder, listOrders } from '../controllers/orderController.js';
import { protect, authorize } from '../middleware/auth.js';
const r = Router();
r.post('/', protect, createOrder);
r.get('/', protect, authorize('admin'), listOrders);
export default r;
