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

//Book Object Constructor Function
function Book(book) {
  this.book_title = title;
  this.author=author;
  this.description=description;
  this.image.url= ;
 
}

//Search handler
function getBook(request, response) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=`;
  // if  (request.body.name[0] === 'title'? url +=`+intitle:${request.body.name[0]}` : += +inauthor:${request.body.name[1]});
  console.log('request.body.name>>')
  const book = req.query.book;
  //Use this key in your application by passing it with the key=API_KEY parameter. 
  const key = process.env.API_KEY;
  const url = 
}


app.listen(Port, () => console.log(`App is running on Port : ${Port} yay`));