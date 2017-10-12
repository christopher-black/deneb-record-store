var express = require('express');
var app = express();
var port = 5000;

// Serve up static files
app.use(express.static('server/public'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); // Need to remember

var recordCollection = [];

// Records POST route
app.post('/records', function(req, res){
    console.log(req.body); // req.body will be our recordForSale sent from the client
    var recordForSale = req.body;
    recordCollection.push(recordForSale);
    console.log(recordCollection);
    res.sendStatus(201);
});

// Start up the server
app.listen(port, function(){
    console.log('listening on port', port);
});