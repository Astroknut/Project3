const app 			= require('express')();
const Sequelize 	= require('sequelize');
const user			= require('./env.js').user;

let sequelize = new Sequelize('postgres://' + user +'@localhost:5432/anima');

// Routes
// TO DO - this will go in config/routes
app.get('/', function(req, res) {
	res.send('hello world');
});

app.listen(process.env.PORT || 3000, function() {
	console.log('Express server up and running!');
})