import { Request, Response, NextFunction } from 'express';
import path from 'path';
import { checkExtension, fileExists, createDir } from '../Utilities/fileUtil';
import { formatPage, Message, Messagetype } from '../Utilities/formater';

//define resize endpoint parameters validator middleware
const Validator = function (request: Request, response: Response, next: NextFunction) {
	const { filename, width, height } = request.query;
	const inputDir = path.resolve('./') + '/images/'; // path for the images folder
	const outputDir = inputDir + 'resizedImages/'; //  c:\Motaz-Image-Processing-API\images\resizeImages
	const outputImage = `${inputDir}${filename}.jpg`; // c:\Motaz-Image-Processing-API\images\image.jpg
	const pageMessage =
		'Welcome to the resize endpoint. <p> You can use <strong> /api/resize?filename={imagename}&width={resize width}&height={resize height}</strong></p></p>';
	let errExist = false;
	if (Object.keys(request.query).length === 0) {
		errExist = true;
		return response.send(formatPage(pageMessage));
	}

	if (!filename || !width || !height || isNaN(Number(width)) || isNaN(Number(height))) {
		errExist = true;
		return response.status(400).send(Message('Error, missing or distorted parameters', Messagetype.error));
	}

	if (checkExtension(String(filename))) {
		errExist = true;
		return response.status(400).send(Message('Filename should pass without extension', Messagetype.error));
	}
	// check if the outputDir exists , if not then create it
	if (!fileExists(outputImage)) {
		errExist = true;
		return response.status(404).send(Message('source image not found!', Messagetype.error));
	}
	// check if the outputDir exists , if not then create it
	if (!fileExists(outputDir)) {
		createDir(outputDir);
	}
	if (errExist === false) {
		next();
	}
};
export default Validator;
