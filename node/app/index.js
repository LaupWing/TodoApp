const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT||1060

app
    .use(cors())
    .use(express.urlencoded({extended: false}))
    .use(bodyParser.json({limit: '1mb'}))
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname, 'views'))
    .listen(port);
