import mongoose from 'mongoose';
const schema = new mongoose.Schema({ userId: String, items: Array, total: Number, status: { type: String, default: 'processing' } }, { timestamps: true });
export default mongoose.model('Order', schema);
