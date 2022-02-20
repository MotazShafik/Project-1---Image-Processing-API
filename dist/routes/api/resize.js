"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Route to handle resize endpoints to resize the image
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const ImageUtil_1 = require("../../Utilities/ImageUtil");
const resizeValidator_1 = __importDefault(require("../../middleware/resizeValidator"));
const resize = express_1.default.Router();
resize.get('/', resizeValidator_1.default, async (request, response) => {
    const { filename, width, height } = request.query;
    const inputDir = path_1.default.resolve('./') + '/images/'; // path for the images folder
    const outputDir = inputDir + 'resizedImages/'; //  c:\Motaz-Image-Processing-API\images\resizeImages
    const outputImage = `${inputDir}${filename}.jpg`; // c:\Motaz-Image-Processing-API\images\image.jpg
    const thumbImage = outputDir + `${filename}-thumb-${width}x${height}.jpg`; // image.jpg => image-thumb-300x200.jpg
    (0, ImageUtil_1.resizeThumb)(thumbImage, outputImage, Number(width), Number(height), response);
});
exports.default = resize;
