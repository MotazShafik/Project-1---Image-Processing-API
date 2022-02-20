"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./api/index"));
const express_1 = __importDefault(require("express"));
const formater_1 = require("../Utilities/formater");
const routes = express_1.default.Router();
const pageMessage = 'Welcome to Motaz Image Procesing Server';
routes.get('/', (request, response) => {
    response.send((0, formater_1.formatPage)(pageMessage)).status(200).end();
});
routes.use('/api', index_1.default);
exports.default = routes;
