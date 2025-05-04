import { Router } from 'express';
import userRoutes from './api/userRoutes';
import postRoutes from './api/postRoutes';

const router = Router();


router.use('/users', userRoutes);
router.use('/posts', postRoutes);

export default router;
