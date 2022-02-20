"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fileUtil_1 = require("../Utilities/fileUtil");
const formater_1 = require("../Utilities/formater");
//define resize endpoint parameters validator middleware
const Validator = function (request, response, next) {
    const { filename, width, height } = request.query;
    const inputDir = path_1.default.resolve('./') + '/images/'; // path for the images folder
    const outputDir = inputDir + 'resizedImages/'; //  c:\Motaz-Image-Processing-API\images\resizeImages
    const outputImage = `${inputDir}${filename}.jpg`; // c:\Motaz-Image-Processing-API\images\image.jpg
    const pageMessage = 'Welcome to the resize endpoint. <p> You can use <strong> /api/resize?filename={imagename}&width={resize width}&height={resize height}</strong></p></p>';
    let errExist = false;
    if (Object.keys(request.query).length === 0) {
        errExist = true;
        return response.send((0, formater_1.formatPage)(pageMessage));
    }
    if (!filename || !width || !height || isNaN(Number(width)) || isNaN(Number(height))) {
        errExist = true;
        return response.status(400).send((0, formater_1.Message)('Error, missing or distorted parameters', formater_1.Messagetype.error));
    }
    if ((0, fileUtil_1.checkExtension)(String(filename))) {
        errExist = true;
        return response.status(400).send((0, formater_1.Message)('Filename should pass without extension', formater_1.Messagetype.error));
    }
    // check if the outputDir exists , if not then create it
    if (!(0, fileUtil_1.fileExists)(outputImage)) {
        errExist = true;
        return response.status(404).send((0, formater_1.Message)('source image not found!', formater_1.Messagetype.error));
    }
    // check if the outputDir exists , if not then create it
    if (!(0, fileUtil_1.fileExists)(outputDir)) {
        (0, fileUtil_1.createDir)(outputDir);
    }
    if (errExist === false) {
        next();
    }
};
exports.default = Validator;
