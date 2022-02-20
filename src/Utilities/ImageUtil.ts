import sharp from 'sharp';
import { Response } from 'express';
import { fileExists } from '../Utilities/fileUtil';

export const resizeImage = async (
	filePath: string,
	outputPath: string,
	width: number,
	height: number
): Promise<void> => {
	await sharp(filePath).resize(width, height).toFile(outputPath);
};

export const resizeThumb = async (
	thumbImage: string,
	outputImage: string,
	width: number,
	height: number,
	response: Response
): Promise<void> => {
	if (fileExists(thumbImage)) {
		// Caching system instead of resizing the image again
		response.status(302).sendFile(thumbImage);
	} else {
		await resizeImage(outputImage, thumbImage, Number(width), Number(height));

		response.status(201).sendFile(thumbImage);
	}
};

export default resizeThumb;
