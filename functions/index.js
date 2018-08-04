const path = require('path');
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.SAPPER_DEST = path.resolve(__dirname, 'build');
const functions = require('firebase-functions');
const server = require('./build/server');

exports.app = functions.https.onRequest((request, response) => {
	server.handler({export: true})(request, response);
});