// Route to handle API endpoints
import resize from './resize';
import express, { Request, Response } from 'express';
import { formatPage } from '../../Utilities/formater';
const api = express.Router();
const pageMessage =
	'Welcome to API Section </h1> <p> Available APIs :<ul><li> Resize Image : To resize an image, please note that the image file name, height and width are required parameters. </li></ul>';
api.get('/', (request: Request, response: Response) => {
	response.send(formatPage(pageMessage));
});
api.use('/resize', resize);
export default api;
