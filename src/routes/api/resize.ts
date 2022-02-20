// Route to handle resize endpoints to resize the image
import express, { Request, Response } from 'express';
import path from 'path';
import { resizeThumb } from '../../Utilities/ImageUtil';
import validator from '../../middleware/resizeValidator';

const resize = express.Router();

resize.get('/', validator, async (request: Request, response: Response) => {
	const { filename, width, height } = request.query;
	const inputDir = path.resolve('./') + '/images/'; // path for the images folder
	const outputDir = inputDir + 'resizedImages/'; //  c:\Motaz-Image-Processing-API\images\resizeImages
	const outputImage = `${inputDir}${filename}.jpg`; // c:\Motaz-Image-Processing-API\images\image.jpg
	const thumbImage = outputDir + `${filename}-thumb-${width}x${height}.jpg`; // image.jpg => image-thumb-300x200.jpg
	resizeThumb(thumbImage, outputImage, Number(width), Number(height), response);
});

export default resize;
