import mongoose from 'mongoose';
const schema = new mongoose.Schema({ name: String, category: String, price: Number, stock: Number, featured: Boolean, images: [String], rating: Number }, { timestamps: true });
export default mongoose.model('Product', schema);
