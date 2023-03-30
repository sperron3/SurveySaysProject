import {Router} from 'express';
import {
    DisplaySurvey,
    DisplaySurveyAddPage,
    DisplaySurveyEditPage,
    DisplaySurveyList,
    ProcessSurveyAddPage,
    ProcessSurveyDelete,
    ProcessSurveyEditPage
} from "../controllers/survey.js";
import {AuthGuard} from "../utilities/index.js";

const router = new Router();

router.get('/survey', DisplaySurvey);

router.get('/survey-add', AuthGuard, DisplaySurveyAddPage );
router.post('/survey-add', AuthGuard, ProcessSurveyAddPage);

router.get('/survey-list', AuthGuard, DisplaySurveyList);

router.get('/survey-edit/:id', AuthGuard, DisplaySurveyEditPage);
router.post('/survey-edit/:id', AuthGuard, ProcessSurveyEditPage);

router.get('/survey-delete/:id', AuthGuard, ProcessSurveyDelete);

export default router;