import express, { Router } from 'express';
// import GroupController from '../controllers/group.controller';

const router: Router = express.Router();

router.post('/groups');
router.get('/users/:user_id/groups');
router.delete('/groups/:group_id');

export default router;