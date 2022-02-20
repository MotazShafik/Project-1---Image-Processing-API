"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Route to handle API endpoints
const resize_1 = __importDefault(require("./resize"));
const express_1 = __importDefault(require("express"));
const formater_1 = require("../../Utilities/formater");
const api = express_1.default.Router();
const pageMessage = 'Welcome to API Section </h1> <p> Available APIs :<ul><li> Resize Image : To resize an image, please note that the image file name, height and width are required parameters. </li></ul>';
api.get('/', (request, response) => {
    response.send((0, formater_1.formatPage)(pageMessage));
});
api.use('/resize', resize_1.default);
exports.default = api;
