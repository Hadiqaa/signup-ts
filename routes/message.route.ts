import express, { Router } from 'express';
import messageController from '../controllers/message.controller'
const router: Router = express.Router();
import protect from '../middleware/authentication';

router.post('/createmessage', protect,  messageController.sendMessage) ;
router.get('/groups/:group_id/messages');

export default router;