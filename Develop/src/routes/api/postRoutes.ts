import { Router } from 'express';
import { getPosts, getSinglePost } from '../../controllers/postController';

const router = Router();

router.route('/').get(getPosts);
router.route('/:id').get(getSinglePost);

export default router;