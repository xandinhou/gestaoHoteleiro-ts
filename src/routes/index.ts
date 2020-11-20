import { Router } from 'express';

import customersRoute from './customers.routes';

const routes = Router();

routes.use('/customer', customersRoute);
export default routes;
