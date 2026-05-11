import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import { signToken } from '../utils/jwt.js';

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash, role: 'customer' });
  res.json({ token: signToken(user), user: { name: user.name, role: user.role } });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: 'Invalid credentials' });
  res.json({ token: signToken(user), user: { name: user.name, role: user.role } });
};

export const adminLogin = async (req, res) => {
  const { username, password } = req.body;
  const ok = username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD;
  if (!ok) return res.status(401).json({ message: 'Invalid admin credentials' });
  let admin = await User.findOne({ email: 'govind@padmavati.local' });
  if (!admin) {
    const hash = await bcrypt.hash(password, 10);
    admin = await User.create({ name: 'Govind Singh', email: 'govind@padmavati.local', password: hash, role: 'admin' });
  }
  res.json({ token: signToken(admin), user: { name: admin.name, role: admin.role } });
};
