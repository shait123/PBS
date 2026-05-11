import { Router } from 'express';
import { listProducts, addProduct, updateProduct, deleteProduct } from '../controllers/productController.js';
import { protect, authorize } from '../middleware/auth.js';
const r = Router();
r.get('/', listProducts);
r.post('/', protect, authorize('admin'), addProduct);
r.put('/:id', protect, authorize('admin'), updateProduct);
r.delete('/:id', protect, authorize('admin'), deleteProduct);
export default r;
