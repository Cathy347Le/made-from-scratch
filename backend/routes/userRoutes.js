import express from 'express';
const router = express.Router();
import { authUser, getUserProfile } from '../controllers/userControllers.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);

export default router;
