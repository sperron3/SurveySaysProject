import {Router} from 'express';
import {DisplaySurveyResults} from '../controllers/results.js';

const router = new Router();

router.get('/results', DisplaySurveyResults);

export default router;