const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

require('./db/db.js');
const app = express();
const port = process.env.PORT||1060
const routes = require('./routes/routes.js');

app
    .use(cors())
    .use(express.urlencoded({extended: false}))
    .use('/static',express.static(path.join(__dirname, 'public')))
    .use(bodyParser.json({limit: '1mb'}))
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname, 'views'))
    .use(routes)
    .listen(port);
