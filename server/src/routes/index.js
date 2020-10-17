import { Router } from 'express';
import apiRouter from './api';
import uploadFile from '../utils/upload';

const router = Router();

// upload router
router.post('/upload', uploadFile, (req, res, next) => {
  res.send(req.file);
  console.log(req.file);
});

// api router
router.use('/api', apiRouter);

export default router;
