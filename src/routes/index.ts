import api from './api/index';
import express, { Request, Response } from 'express';
import { formatPage } from '../Utilities/formater';
const routes = express.Router();
const pageMessage = 'Welcome to Motaz Image Procesing Server';
routes.get('/', (request: Request, response: Response) => {
	response.send(formatPage(pageMessage)).status(200).end();
});
routes.use('/api', api);

export default routes;
