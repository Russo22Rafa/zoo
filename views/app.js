const express = require('express');
const app = express();
const port = 3000;
const session = require('express-session');
const sessionConfig = require('./src/config/session')

app.set('view engine', 'ejs');