import routerx from 'express-promise-router';
import TestController from '../controllers/TestController';
const router=routerx();

router.post('/test', TestController.test);

export default router;