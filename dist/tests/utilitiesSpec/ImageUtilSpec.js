"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../../server")); // Import app from index for testing
const supertest_1 = __importDefault(require("supertest")); // Include supertest 3rd party test package to help test endpoints
const express_1 = require("express");
const ImageUtil_1 = require("../../Utilities/ImageUtil");
const path_1 = __importDefault(require("path"));
const request = (0, supertest_1.default)(server_1.default); // Configure supertest to work on the obtained app
describe('Testing the image utility Functionality', () => {
    describe('Testing the function "resizeImage" function', () => {
        it('testing resizing car.jpg => car-thumb-640x480', (done) => {
            async () => {
                const outputImage = path_1.default.resolve('./') + '/images/car.jpg';
                const thumbImage = path_1.default.resolve('./') + '/images/resizedImages/car-thumb-640x480';
                await (0, ImageUtil_1.resizeThumb)(thumbImage, outputImage, 640, 480, express_1.response);
                expect(express_1.response.status).toBe(201);
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
