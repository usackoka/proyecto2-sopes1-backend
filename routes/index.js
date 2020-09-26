import routerx from 'express-promise-router';
import ExampleRouter from './Example'

const router = routerx();

router.use('/example', ExampleRouter);

export default router;