import { Router } from 'express';
import usersRouter from './users';
import postsRouter from './posts';
import apptsRouter from './appts';

const router = Router();

// user router
router.use('/', usersRouter);

// post router
router.use('/post', postsRouter);
router.use('/appt', apptsRouter);

export default router;
