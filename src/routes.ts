import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();

const classController = new ClassesController();
const connectionController = new ConnectionsController();

routes.post('/classes', classController.create);
routes.get('/classes', classController.index);

routes.post('/connections', connectionController.create);
routes.get('/connections', connectionController.index);

export default routes;