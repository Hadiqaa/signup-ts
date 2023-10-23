import express, { Router } from 'express';
import userController from '../controllers/user.controller';

const router: Router = express.Router();

router.get('/users', userController.getUsers);
router.put('/updatename/:userId', userController.updateUsername);

export default router;