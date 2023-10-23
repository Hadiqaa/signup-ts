import express, { Router } from 'express';


const router: Router = express.Router();

router.post('/group-participants/add');
router.delete('/group-participants/remove');

export default router;