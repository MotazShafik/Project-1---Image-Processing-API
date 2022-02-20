"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDir = exports.fileExists = exports.checkExtension = void 0;
const fs_1 = require("fs");
const checkExtension = (fileName) => {
    return fileName.includes('.jpg' || '.jpeg' || '.png' || '.gif'); // check if the file doesn't include an extension
};
exports.checkExtension = checkExtension;
const fileExists = (imageLocation) => {
    return (0, fs_1.existsSync)(imageLocation); // check if the file exists
};
exports.fileExists = fileExists;
const createDir = (dirLocation) => {
    return (0, fs_1.mkdirSync)(dirLocation);
};
exports.createDir = createDir;
