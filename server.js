var 	express = require('express'),
    path = require('path');
//fs = require('fs'),
//request = require('request').defaults();


var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    next();

}

var app = express();

    app.set('port', process.env.PORT || 555);

    app.use(allowCrossDomain);

app.use(express.static(path.join(__dirname, 'app')));


app.listen(555);

console.log('Listening on port 555...');








