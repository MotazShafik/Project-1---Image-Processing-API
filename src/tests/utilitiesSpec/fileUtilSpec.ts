import { checkExtension, fileExists } from '../../Utilities/fileUtil';
import path from 'path';
describe('Testing the file utility Functionality', () => {
	describe('Testing the function "CheckExtension" function', () => {
		it('testing the filename has extention for ex: car.jpg', () => {
			const filename = 'car.jpg';
			expect(checkExtension(filename)).toBe(true);
		});

		it('testing the filename has no extention ex: car', () => {
			const filename = 'car';
			expect(checkExtension(filename)).toBe(false);
		});
	});

	describe('Testing the function "fileExists" function', () => {
		it('testing the filename ./images/car.jpg Exist or not ', () => {
			const filename = path.resolve('./') + '/images/car.jpg';
			expect(fileExists(filename)).toBe(true);
		});

		it('testing the filename ./images/ocean.jpg Exist or not', () => {
			const filename = path.resolve('./') + '/images/ocean.jpg';
			expect(fileExists(filename)).toBe(false);
		});
	});
});
