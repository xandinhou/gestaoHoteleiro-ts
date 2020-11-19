import { response, Router } from 'express';

const routes = Router();

routes.use('/', () => response.json('Hello Word'));
export default routes;
