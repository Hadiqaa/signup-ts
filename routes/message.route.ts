import express, { Router } from 'express';

const router: Router = express.Router();

router.post('/createmessage') ;
router.get('/groups/:group_id/messages');

export default router;