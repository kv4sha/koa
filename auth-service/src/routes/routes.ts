import * as Router from 'koa-router';

import { checkToken } from './checkToken';
import { login } from './login';
import { register } from './register';

const router = new Router();

router.post('/checkToken', checkToken);
router.post('/login', login);
router.post('/register', register);

export const routes = () => router.routes();
