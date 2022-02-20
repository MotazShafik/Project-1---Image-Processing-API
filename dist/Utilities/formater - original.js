"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMessage = exports.formatPage = void 0;
const formatPage = (message) => {
    const htmlMessage = `<style>
		* {
    box-sizing: border-box;
    margin: 0 auto;
    padding: 5px;
    justify-content: center;
    text-shadow: #FC0 1px 0 10px;
	color : #F2EfE2;
}

body {
    background-image: url('https://source.unsplash.com/1600x900/?landscape,nature,water');
    background-color: #008CBA;
    min-height: 500px;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Raleway', sans-serif;
	font-size:30px;
}</style><body><center><h1>${message}</h><center></body>`;
    return htmlMessage;
};
exports.formatPage = formatPage;
const errorMessage = (message) => {
    const htmlMessage = `<style>
.body {
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
}
.err {
  color: #ba3939;
  background: #ffe0e0;
  border: 1px solid #a33a3a;
}
</style><body> <div class="body err">${message}</div> </body>`;
    return htmlMessage;
};
exports.errorMessage = errorMessage;
exports.default = { formatPage: exports.formatPage, errorMessage: exports.errorMessage };
