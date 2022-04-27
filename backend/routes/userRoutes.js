import express from 'express';
const router = express.Router();
import { authUser, getUserProfile } from '../controllers/userControllers.js';

router.post('/login', authUser);
router.get('/profile', getUserProfile);

export default router;
