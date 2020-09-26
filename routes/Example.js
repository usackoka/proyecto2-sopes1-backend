import routerx from 'express-promise-router';
import ExampleController from '../controllers/ExampleController';
const router=routerx();

router.get('/ejemploAxios', ExampleController.ejemploAxios)
router.post('/raul', ExampleController.raul)

export default router;