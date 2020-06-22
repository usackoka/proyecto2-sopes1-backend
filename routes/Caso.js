import routerx from 'express-promise-router';
import CasoController from '../controllers/CasoController';
const router=routerx();

router.get('/list', CasoController.list);

export default router;