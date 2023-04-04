import {Router} from 'express';
import {DisplayAddAnswersPage, ProcessAddAnswersPage} from "../controllers/userSurvey.js";

const router = new Router();

router.get('/answers-add/:id', DisplayAddAnswersPage);
router.post('/answers-add/:id', ProcessAddAnswersPage);

export default router;