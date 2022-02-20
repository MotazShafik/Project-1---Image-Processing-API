"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileUtil_1 = require("../../Utilities/fileUtil");
const path_1 = __importDefault(require("path"));
describe('Testing the file utility Functionality', () => {
    describe('Testing the function "CheckExtension" function', () => {
        it('testing the filename has extention for ex: car.jpg', () => {
            const filename = 'car.jpg';
            expect((0, fileUtil_1.checkExtension)(filename)).toBe(true);
        });
        it('testing the filename has no extention ex: car', () => {
            const filename = 'car';
            expect((0, fileUtil_1.checkExtension)(filename)).toBe(false);
        });
    });
    describe('Testing the function "fileExists" function', () => {
        it('testing the filename ./images/car.jpg Exist or not ', () => {
            const filename = path_1.default.resolve('./') + '/images/car.jpg';
            expect((0, fileUtil_1.fileExists)(filename)).toBe(true);
        });
        it('testing the filename ./images/ocean.jpg Exist or not', () => {
            const filename = path_1.default.resolve('./') + '/images/ocean.jpg';
            expect((0, fileUtil_1.fileExists)(filename)).toBe(false);
        });
    });
});
