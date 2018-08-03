const path = require('path');
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.SAPPER_DEST = path.resolve(__dirname, 'build');
const functions = require('firebase-functions');
const middleware = require('./build/server');

exports.app = functions.https.onRequest((request, response) => {
	middleware.handler(request, response);
});