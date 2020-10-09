import { Router } from 'express';
import { Auth } from '../../utils';
import postController from '../../controllers/post.controllers';

const router = Router();

// crud for post
router.post('/', Auth.required, postController.createPost);
router.get('/', postController.getPost);
router.put('/', Auth.required, postController.updatePost);
router.delete('/', Auth.required, postController.deletePost);

export default router;
