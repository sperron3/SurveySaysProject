import {Router} from 'express';
import {
    DisplayLoginPage, DisplayRegistrationPage, ProcessLoginPage, ProcessLogoutPage, ProcessRegistrationPage,
} from "../controllers/auth.js";

const router = new Router();

router.get('/login', DisplayLoginPage);
router.post('/login', ProcessLoginPage);

router.get('/register', DisplayRegistrationPage);
router.post('/register', ProcessRegistrationPage);

router.get('/logout', ProcessLogoutPage);

export default router;