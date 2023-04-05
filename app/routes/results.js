import { Router } from 'express';
import { DisplaySurveyResults, ProcessResultsDelete} from '../controllers/results.js';

const router = new Router();

router.get('/results-list', DisplaySurveyResults);
router.get('/results-delete/:id', ProcessResultsDelete);

export default router;