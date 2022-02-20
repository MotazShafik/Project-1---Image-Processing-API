"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const today = new Date();
const todayDate = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
const todayTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
//define  mylogger middleware
const mylogger = function (request, response, next) {
    console.log(`${request.url} - visited on ${todayDate} @${todayTime}`);
    next();
};
exports.default = mylogger;
