import express, { Router } from 'express';
import messageController from '../controllers/message.controller'
const router: Router = express.Router();
import protect from '../middleware/authentication';

router.post('/createmessage', protect,  messageController.sendMessage) ;
router.get('/groupmessages', protect, messageController.getGroupMessages);
router.get('/usermessages', protect , messageController.getMessagesOfUsers)
export default router;