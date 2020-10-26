import { Router } from 'express';
import { Auth } from '../../utils';
import apptController from '../../controllers/appt.controllers';

const router = Router();

// crud for appt
router.post('/', Auth.required, apptController.createAppt);
router.get('/', Auth.required, apptController.getAll);

router.post('/confirm', Auth.required, apptController.confirmAppt);

export default router;
