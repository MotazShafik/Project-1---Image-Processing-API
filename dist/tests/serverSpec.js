"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("../server")); // Import app from index for testing
const supertest_1 = __importDefault(require("supertest")); // Include supertest 3rd party test package to help test endpoints
const request = (0, supertest_1.default)(server_1.default); // Configure supertest to work on the obtained app
describe('Comprehensive tests for testing Image Processing API Project', () => {
    describe('Testing the endpoints', () => {
        it('checks Server Main page (root) endpoint', (done) => {
            async () => {
                request.get('/').expect(200);
            };
            done();
        });
        it('checks /api endpoint', (done) => {
            async () => {
                request.get('/api').expect(200);
            };
            done();
        });
    });
    describe('Testing the /api/resize endpoint', () => {
        describe('Testing resize endpoint with missing parameters', () => {
            it('testing the resize route with missing filename', (done) => {
                async () => {
                    request.get('/api/resize?width=300&height=200').expect(400);
                };
                done();
            });
            it('testing the resize route with missing width', (done) => {
                async () => {
                    request.get('/api/resize?filename=sea&height=200').expect(400);
                };
                done();
            });
            it('testing the resize route with missing height', (done) => {
                async () => {
                    request.get('/api/resize?filename=sea&width=300').expect(400);
                };
                done();
            });
            it('testing the resize route with filename.jpg', (done) => {
                async () => {
                    request.get('/api/resize?filename=sea.jpg&width=300&height=200').expect(400);
                };
                done();
            });
        });
        describe('Testing /api/resize endpoint with missing image file', () => {
            it('testing the resize route with missing imgae file', (done) => {
                async () => {
                    request.get('/api/resize?filename=image&width=300&height=200').expect(404);
                };
                done();
            });
        });
        describe('Testing /api/resize endpoint with correct parameters ', () => {
            it('testing the resize route', (done) => {
                async () => {
                    request.get('/api/resize?filename=sea&width=300&height=200').expect(200);
                };
                done();
            });
        });
    });
});
