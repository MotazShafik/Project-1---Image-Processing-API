"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Express to run server and routes
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const mylogger_1 = __importDefault(require("./middleware/mylogger"));
// Define server port
const port = 4000;
// Start up an instance of app
const app = (0, express_1.default)();
app.locals.title = 'Motaz Server';
app.locals.appname = 'Udacity - Image Processing API project';
// Dependencies
// Middleware configuration section
// Config express to use mylogger as middleware
app.use(mylogger_1.default);
// Define endpoints by using the routes as middleware
app.use('/', index_1.default);
// Run the Server
app.listen(port, () => {
    console.log(app.locals.title);
    console.log(app.locals.appname);
    console.log(`Server listening on http://localhost:${port}`);
});
exports.default = app;
