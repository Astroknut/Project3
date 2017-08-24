const app 			= require('express')();
const Sequelize 	= require('sequelize');
const user			= require('./env.js').user;
// TO DO - a lot of these are --saved and probably
// some of them should be --save-dev'd
const passport		= require('passport');
const cookieParser	= require('cookie-parser');
const bodyParser	= require('body-parser');
const session		= require('express-session');

let sequelize = new Sequelize('postgres://' + user +'@localhost:5432/anima');

app.use(cookieParser());
app.use(bodyParser());

app.use(session({
	secret: 'ANIMA-HAS-NO-SECRETS',
	// This line saves the user as logged in
	// for... 360 days I think?
	cookie: { maxAge: 360000 }
}));

app.use(passport.initialize());
app.use(passport.session());

// TO DO - turn these lines on when passport is ready.
//require('./config/passport')(passport);
//app.use(function(req, res, next) {
//	res.locals.currentUser = req.user;
//	next();
//});

// TO DO - turn these lines on when we have
// routes in config/routes.
//var routes = require('./config/routes');
//app.use(routes);

// Routes
// TO DO - this will go in config/routes
app.get('/', function(req, res) {
	res.send('hello world');
});

app.listen(process.env.PORT || 3000, function() {
	console.log('Express server up and running!');
})