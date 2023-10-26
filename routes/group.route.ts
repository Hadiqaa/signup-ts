import express, { Router } from 'express';
import GroupController from '../controllers/group.controller';
import protect from '../middleware/authentication';
const router: Router = express.Router();

router.post('/creategroup', protect, GroupController.createGroup);
router.get('/groups/:group_id/users', protect, GroupController.getUsersOfGroup);
router.delete('/deletegroups', protect, GroupController.deletegroup);

export default router;