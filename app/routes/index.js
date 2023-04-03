import { Router } from 'express';
import { DisplayHomePage } from "../controllers/index.js";

const router = Router();

router.get('/', DisplayHomePage);
router.get('/home', DisplayHomePage);

export default router;