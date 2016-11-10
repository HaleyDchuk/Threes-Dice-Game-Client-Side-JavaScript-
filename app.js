// require the express module
var express = require('express');

// create our express app
var app = express();

//brings in handlebars for templating 
app.set('view engine', 'hbs');


//sending static files 
//bring in the path module 
var path = require("path");

// create a cross-platform compatible path name (don't just use public)
var publicPath = path.resolve(__dirname, "public");
//use built in static files middleware to serve up any file in publicPath 
app.use(express.static(publicPath));

 //use to access the body of posts 
var bodyParser = require('body-parser'); 
//body parser creates a new property on request object 
app.use(bodyParser.urlencoded({extended:false})); 






// listen on port 3000
app.listen(3000);
console.log('Started server on port 3000');