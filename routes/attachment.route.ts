import express, { Router } from 'express';
import protect from '../middleware/authentication';
import attachmentController from '../controllers/attachment.controller';

const router: Router = express.Router();

router.post('/attachments', protect, attachmentController.createAttachment);
router.get('/attachments/message', protect, attachmentController.getAttachmentsbyID);

export default router;
