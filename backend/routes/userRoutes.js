import express from 'express';
const router = express.Router();
import {
	authUser,
	registerUser,
	getUserProfile,
	updateUserProfile,
} from '../controllers/userControllers.js';
import { protect } from '../middleware/authMiddleware.js';

router.post('/', registerUser);
router.post('/login', authUser);
router
	.get('/profile', protect, getUserProfile)
	.put('/profile', protect, updateUserProfile);

export default router;
