const express = require('express');
const cors = require('cors');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('../routes/index');

const server = express();
server.use(cors("*"));
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.engine('.hbs', exphbs(
    {
        extname: '.hbs',
        defaultLayout: 'index.hbs',
        layoutsDir: path.join(__dirname, '../views/layouts'),
        partialsDir: path.join(__dirname, '../views/partials')
    }));
    server.set('view engine', 'hbs');
    server.set('views', path.join(__dirname, '../views'));
    server.use(routes); 
 server.use(express.static(path.join(__dirname,'../public'))); 
module.exports = server;
 