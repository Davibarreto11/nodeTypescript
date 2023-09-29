import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => response.json({ message: 'Welcome to poject' }));

export default routes;
