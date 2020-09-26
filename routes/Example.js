import routerx from 'express-promise-router';
import ExampleController from '../controllers/ExampleController';
const router=routerx();

router.get('/ejemploAxios', ExampleController.ejemploAxios)

export default router;