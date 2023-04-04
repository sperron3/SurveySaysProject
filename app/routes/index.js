import { Router } from 'express';
import {DisplaySurveyHomePage} from "../controllers/index.js";

const router = Router();

router.get('/', DisplaySurveyHomePage);
router.get('/home', DisplaySurveyHomePage);

export default router;