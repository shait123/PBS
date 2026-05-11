import { Router } from 'express';
import { signup, login, adminLogin } from '../controllers/authController.js';
const r = Router();
r.post('/signup', signup); r.post('/login', login); r.post('/admin/login', adminLogin);
export default r;
