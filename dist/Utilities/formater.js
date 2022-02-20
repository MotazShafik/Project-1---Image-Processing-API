"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = exports.Messagetype = exports.formatPage = void 0;
const formatPage = (message) => {
    const htmlMessage = `<style>
		* {box-sizing: border-box;margin: 0 auto;padding: 5px;justify-content: center;text-shadow: #FC0 1px 0 10px;	color : #F2EfE2;}
    body {background-image: url('https://source.unsplash.com/1600x900/?landscape,nature,water');
    background-color: #008CBA;min-height: 500px;background-attachment: fixed;background-position: center;
    background-repeat: no-repeat;background-size: cover;font-family: 'Raleway', sans-serif;font-size:30px;}
    </style><body><center><h1>${message}</h><center></body>`;
    return htmlMessage;
};
exports.formatPage = formatPage;
var Messagetype;
(function (Messagetype) {
    Messagetype["info"] = "info";
    Messagetype["success"] = "success";
    Messagetype["warning"] = "warning";
    Messagetype["error"] = "error";
})(Messagetype = exports.Messagetype || (exports.Messagetype = {}));
const Message = (message, type = Messagetype.info) => {
    // type : `info , success , warning , error
    let icon = '';
    if (type === 'error') {
        icon = 'fa fa-times-circle';
    }
    if (type === 'warning') {
        icon = 'fa fa-warning';
    }
    if (type === 'success') {
        icon = 'fa fa-check';
    }
    if (type === 'info') {
        icon = 'fa fa-info-circle';
    }
    const htmlMessage = `<style>
@import url('//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
.info, .success, .warning, .error {margin: 10px 5px;padding:12px;font-size:1.5em;}
.info {color: #00529B;background-color: #BDE5F8;}
.success {color: #4F8A10;background-color: #DFF2BF;}
.warning {color: #9F6000;background-color: #FEEFB3;}
.error {color: #D8000C;background-color: #FFD2D2;}
.info i, .success i, .warning i, .error i {margin:10px 22px;font-size:4em;vertical-align:middle;}
</style><body> <div class='${type}'><i class='${icon}'}></i>${message}</div> </body>`;
    return htmlMessage;
};
exports.Message = Message;
exports.default = { formatPage: exports.formatPage, Message: exports.Message, Messagetype };
