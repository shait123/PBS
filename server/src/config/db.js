import mongoose from 'mongoose';
export const connectDB = async () => {
  const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/padmavati';
  try { await mongoose.connect(uri); console.log('Mongo connected'); }
  catch (e) { console.log('Mongo unavailable, running without DB'); }
};
