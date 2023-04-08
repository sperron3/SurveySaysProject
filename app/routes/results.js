import { Router } from 'express';
import {DisplaySurveyDetailsPage, DisplaySurveyResults, ProcessResultsDelete} from '../controllers/results.js';

const router = new Router();

router.get('/results-list', DisplaySurveyResults);
router.get('/results-delete/:id', ProcessResultsDelete);
router.get('/results-details/:id', DisplaySurveyDetailsPage);

export default router;