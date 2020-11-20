import { Router } from 'express';

import customerRoute from './customers.routes';

const routes = Router();

routes.use('/customer', customerRoute);
export default routes;
