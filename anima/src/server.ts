import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';
import { AppServerModuleNgFactory } from '../dist/ngfactory/src/app/app.server.module.ngfactory';
import * as express from 'express';
import * as passport from 'passport';
import * as Auth0Strategy from 'passport-auth0';
import * as cookieParser  from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
import { readFileSync } from 'fs';
import { join } from 'path';

import { router } from './config/routes';

const PORT = 3000;

enableProdMode();

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json());

app.use(session({
	secret: 'ANIMA-HAS-NO-SECRETS',
	// This line saves the user as logged in
	// for... 360 days I think?
	cookie: { maxAge: 360000 }
}));

// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: 'anima.auth0.com',
    clientID: 'lRD141lYeK3TgDt2BWPslqDhWEetu805',
    clientSecret: 'zGRDyLyVsgyBXA_hMsX7Q_wAx6SG9t9rx3ST5ThntzhNKUv8MQ9_W5QSqX6qMYFt',
    callbackURL:'http://localhost:3000/callback'
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  }
);

passport.use(strategy);

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});


app.use(passport.initialize());
app.use(passport.session());
app.use(router);

// TO DO - turn these lines on when passport is ready.
// app.use(function(req, res, next) {
// 	res.locals.currentUser = req.user;
// 	next();
// });

let template = readFileSync(join(__dirname, '..', 'dist', 'index.html')).toString();

app.engine('html', (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(join(__dirname, '..', 'dist')));

app.get('*', (req, res) => {
	res.render('index', { req });
});


//let sequelize = new Sequelize('postgres://' + user +'@localhost:5432/anima');

app.listen(process.env.PORT || PORT, function() {
	console.log('Express server up and running!');
})