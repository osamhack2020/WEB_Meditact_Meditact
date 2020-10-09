import { Router } from 'express';
import { Auth } from '../../utils';
import userController from '../../controllers/user.controllers';

const router = Router();

// crud user information
router.post('/user', userController.createUser);
router.get('/user', Auth.required, userController.getToken);
router.put('/user', Auth.required, userController.updateUser);
router.delete('/user', Auth.required, userController.deleteUser);

// user information getter for admin user
router.get('/users', Auth.required, userController.getAll);

// login api
router.post('/users/login', userController.login);

export default router;
