'use strict'

// Packages
const express = require('express');
const {response} = require('express');
require('dotenv').config();

// Global variables
const app = express();
const Port = process.env.Port || 3000;

// express configuration
app.use(express.static('./public'));
// express.static('./public') tells express to open one folder as publicly available static files (on the / get route) 
// above copied to understand what (./public) does.
app.use(express.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index', {
    
  });
});

app.listen(8000, function() {
  console.log("heard on 8000");
})

function homeHandler(request, response) {
  response.status(200).sendfile('./index.ejs');
}



app.listen(Port, () => console.log(`App is running on Port : ${Port} yay`));