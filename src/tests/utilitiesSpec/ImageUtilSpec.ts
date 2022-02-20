import app from '../../server'; // Import app from index for testing
import supertest from 'supertest'; // Include supertest 3rd party test package to help test endpoints
import { response } from 'express';
import { resizeThumb } from '../../Utilities/ImageUtil';
import path from 'path';

const request = supertest(app); // Configure supertest to work on the obtained app

describe('Testing the image utility Functionality', () => {
	describe('Testing the function "resizeImage" function', () => {
		it('testing resizing car.jpg => car-thumb-640x480', (done) => {
			async () => {
				const outputImage = path.resolve('./') + '/images/car.jpg';
				const thumbImage = path.resolve('./') + '/images/resizedImages/car-thumb-640x480';
				await resizeThumb(thumbImage, outputImage, 640, 480, response);
				expect(response.status).toBe(201);
			};
			done();
		});
		it('checks cashing', (done) => {
			async () => {
				request.get('/api/resize?filename=car&width=640&hieght=480').expect(302);
			};
			done();
		});
	});
});
