import { Router } from 'express';
import {
    DisplaySurveyAddPage,
    DisplaySurveyEditPage,
    DisplaySurveyList,
    ProcessSurveyAddPage,
    ProcessSurveyDelete,
    ProcessSurveyEditPage
} from "../controllers/survey.js";
import { AuthGuard } from "../utilities/index.js";

const router = new Router();

router.get('/survey-add', DisplaySurveyAddPage);
router.post('/survey-add', ProcessSurveyAddPage);

router.get('/survey-list', DisplaySurveyList);

router.get('/survey-edit/:id', DisplaySurveyEditPage);
router.post('/survey-edit/:id', ProcessSurveyEditPage);

router.get('/survey-delete/:id', ProcessSurveyDelete);

export default router;