import express, { Router } from 'express';


const router: Router = express.Router();

router.post('/attachments');
router.get('/attachments/message/:message_id');

export default router;
