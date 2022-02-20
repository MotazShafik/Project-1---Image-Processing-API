import { existsSync, mkdirSync } from 'fs';

const checkExtension = (fileName: string): boolean => {
	return fileName.includes('.jpg' || '.jpeg' || '.png' || '.gif'); // check if the file doesn't include an extension
};

const fileExists = (imageLocation: string): boolean => {
	return existsSync(imageLocation); // check if the file exists
};

const createDir = (dirLocation: string): void => {
	return mkdirSync(dirLocation);
};

export { checkExtension, fileExists, createDir };
