import {Router} from 'express';
import {DisplayLoginPage, DisplayRegisterPage} from "../controllers/auth.js";

const router = new Router();

//Display Login Page
router.get('/login', DisplayLoginPage);

//Display Register Page
router.get('/register', DisplayRegisterPage);

export default router;