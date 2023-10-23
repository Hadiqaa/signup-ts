import express, { Router } from 'express';

const REACT_APP_API_VERSION = process.env.REACT_APP_API_VERSION || '/api';
const router: Router = express.Router();

// Import route modules
import UserRoute from './user.route';
import AuthRoute from './auth.route';
import AttachmentRoute from './attachment.route';
import GroupRoute from './group.route';
import MessageRoute from './message.route';
import GroupMemberRoute from './groupmember.route';

// Register routes
const routes = [
  UserRoute,
  AuthRoute,
  AttachmentRoute,
  GroupRoute,
  MessageRoute,
  GroupMemberRoute,
];

routes.forEach((route) => {
  router.use(`${REACT_APP_API_VERSION}`, route);
});

export default router;
