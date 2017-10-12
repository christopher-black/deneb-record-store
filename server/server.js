var express = require('express');
var app = express();
var port = 5000;

// Serve up static files
app.use(express.static('server/public'));

// Start up the server
app.listen(port, function(){
    console.log('listening on port', port);
});