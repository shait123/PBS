import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.get('/api/health', (_, res) => res.json({ ok: true }));
app.listen(process.env.PORT || 5000, () => console.log('Server started'));
