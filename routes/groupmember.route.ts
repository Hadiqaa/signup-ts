import express, { Router } from 'express';
import protect from '../middleware/authentication';
import GroupMemberController from '../controllers/groupmember.controller';

const router: Router = express.Router();

router.post('/groupmembers/add', protect, GroupMemberController.addMemberToGroup );
router.delete('/groupmembers/remove', protect, GroupMemberController.removeMemberFromGroup);

export default router;