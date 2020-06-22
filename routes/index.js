import routerx from 'express-promise-router';
import TestRouter from './Test'

const router = routerx();

router.use('/test', TestRouter);

export default router;