"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("zone.js/dist/zone-node");
var platform_server_1 = require("@angular/platform-server");
var core_1 = require("@angular/core");
var app_server_module_ngfactory_1 = require("../dist/ngfactory/src/app/app.server.module.ngfactory");
var express = require("express");
var passport = require("passport");
var Auth0Strategy = require("passport-auth0");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var session = require("express-session");
var fs_1 = require("fs");
var path_1 = require("path");
var routes_1 = require("./config/routes");
var PORT = 3000;
core_1.enableProdMode();
var app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(session({
    secret: 'ANIMA-HAS-NO-SECRETS',
    // This line saves the user as logged in
    // for... 360 days I think?
    cookie: { maxAge: 360000 }
}));
// Configure Passport to use Auth0
var strategy = new Auth0Strategy({
    domain: 'anima.auth0.com',
    clientID: 'lRD141lYeK3TgDt2BWPslqDhWEetu805',
    clientSecret: 'zGRDyLyVsgyBXA_hMsX7Q_wAx6SG9t9rx3ST5ThntzhNKUv8MQ9_W5QSqX6qMYFt',
    callbackURL: 'http://localhost:3000/callback'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    return done(null, profile);
});
passport.use(strategy);
// This can be used to keep a smaller payload
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});
app.use(session({ secret: 'sssshhhhhh' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(routes_1.router);
// TO DO - turn these lines on when passport is ready.
// app.use(function(req, res, next) {
// 	res.locals.currentUser = req.user;
// 	next();
// });
var template = fs_1.readFileSync(path_1.join(__dirname, '..', 'dist', 'index.html')).toString();
app.engine('html', function (_, options, callback) {
    var opts = { document: template, url: options.req.url };
    platform_server_1.renderModuleFactory(app_server_module_ngfactory_1.AppServerModuleNgFactory, opts)
        .then(function (html) { return callback(null, html); });
});
app.set('view engine', 'html');
app.set('views', 'src');
app.get('*.*', express.static(path_1.join(__dirname, '..', 'dist')));
app.get('*', function (req, res) {
    res.render('index', { req: req });
});
//let sequelize = new Sequelize('postgres://' + user +'@localhost:5432/anima');
app.listen(process.env.PORT || PORT, function () {
    console.log('Express server up and running!');
});
//# sourceMappingURL=server.js.map