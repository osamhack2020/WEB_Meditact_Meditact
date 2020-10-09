import { Router } from 'express';
import apiRouter from './api';

const router = Router();

// api router
router.use('/api', apiRouter);

export default router;
