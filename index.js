var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');

var config = require('./config.json');

var users = require('./controllers/userCtrl')
var profile = require('./controllers/profileCtrl')
var corsOptions = {
	origin: 'http://localhost:config.port'
}

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true
}))
app.use(session({ secret: config.sessionSecret }));
app.use(cors(corsOptions));

app.get('/api/profiles', profile.pusher)
app.post('/api/login', users.login)


app.listen(config.port, function(){
  console.log('Server: ACTIVATE: parsing data on port:', config.port);
})
