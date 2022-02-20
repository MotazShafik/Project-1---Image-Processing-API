"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeThumb = exports.resizeImage = void 0;
const sharp_1 = __importDefault(require("sharp"));
const fileUtil_1 = require("../Utilities/fileUtil");
const resizeImage = async (filePath, outputPath, width, height) => {
    await (0, sharp_1.default)(filePath).resize(width, height).toFile(outputPath);
};
exports.resizeImage = resizeImage;
const resizeThumb = async (thumbImage, outputImage, width, height, response) => {
    if ((0, fileUtil_1.fileExists)(thumbImage)) {
        // Caching system instead of resizing the image again
        response.status(302).sendFile(thumbImage);
    }
    else {
        await (0, exports.resizeImage)(outputImage, thumbImage, Number(width), Number(height));
        response.status(201).sendFile(thumbImage);
    }
};
exports.resizeThumb = resizeThumb;
exports.default = exports.resizeThumb;
