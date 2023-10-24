import express, { Router } from 'express';
import userController from '../controllers/user.controller';
import protect from '../middleware/authentication';

const router: Router = express.Router();

router.get('/users', protect, userController.getUsers);
router.put('/updatename/:userId', protect, userController.updateUsername);

export default router;
