const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const testFunctions = require('./test-functions');

// parse request body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(testFunctions);

exports.app = functions.region('asia-east2').https.onRequest(app);
