import {Router} from 'express';
import {
    DisplayUserSurvey,
    ProcessUserSurveyPage
} from "../controllers/surveyAnswers.js";

const router = new Router();

//Display Survey Answer Page
router.get('/survey', DisplayUserSurvey);
router.post('/survey', ProcessUserSurveyPage);

export default router;