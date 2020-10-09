import { Router } from 'express';
import usersRouter from './users';
import postsRouter from './posts';

const router = Router();

// user router
router.use('/', usersRouter);

// post router
router.use('/post', postsRouter);

export default router;
