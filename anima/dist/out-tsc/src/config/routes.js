"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var passport = require("passport");
var ensure = require("connect-ensure-login");
var journals_1 = require("../controllers/journals");
var entries_1 = require("../controllers/entries");
var router = express.Router();
exports.router = router;
var ensureLoggedIn = ensure.ensureLoggedIn();
var env = {
    AUTH0_CLIENT_ID: 'v8rWxd51zctt5mojr2mc-1FlRpKWJUyo',
    AUTH0_DOMAIN: 'anima.auth0.com',
    AUTH0_CALLBACK_URL: 'http://localhost:3000/callback'
};
// Perform the login
router.get('/login', passport.authenticate('auth0', {
    clientID: env.AUTH0_CLIENT_ID,
    domain: env.AUTH0_DOMAIN,
    redirectUri: env.AUTH0_CALLBACK_URL,
    audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
    responseType: 'code',
    scope: 'openid'
}), function (req, res) {
    res.redirect('/');
});
// Perform session logout and redirect to homepage
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
// Perform the final stage of authentication and redirect to '/user'
router.get('/callback', passport.authenticate('auth0', {
    failureRedirect: '/'
}), function (req, res) {
    console.log(req.user._json.sub);
    res.redirect(req.session.returnTo || '/user');
});
// router.get('/', ensureLoggedIn, function(req, res, next) {
//   res.redirect('/user', {
//     user: req.user,
//     userProfile: JSON.stringify(req.user, null, '  ')
//   });
// });
//Journal routes
//Journal Index
router.get('/journals-index', journals_1.JournalsController.index);
//GET a journal
router.get('/journal-show/:id', journals_1.JournalsController.show);
//CREATE a journal
router.post('/journals-new', journals_1.JournalsController.create);
//UPDATE journal 
router.put('/journals-update/:id', journals_1.JournalsController.update);
//DESTROY a journal
router.delete('/journals-delete/:id', journals_1.JournalsController.destroy);
//Entry Routes
//Entry Index
router.get('/journal-entries/:journalId', entries_1.EntriesController.showEntries);
//GET a journal entry
router.get('/entry-show/:id', entries_1.EntriesController.show);
//CREATE a journal entry
router.post('/entry-new', entries_1.EntriesController.create);
// UPDATE a journal entry
router.put('/entry/:id', entries_1.EntriesController.update);
//DESTROY a journal entry
router.delete('/entry-delete/:id', entries_1.EntriesController.destroy);
//GET home 
router.route('/all-journals')
    .get();
//GET a journal
router.route('/show-journal')
    .get();
//GET a journal entry
router.route('/show-entry')
    .get();
//UPDATE journal entry
router.post('/update-entry', function (req, res) {
    res.send(JSON);
});
//DELETE a journal entry
router.delete('/delete-entry', function (req, res) {
    res.send(JSON);
});
//DELETE a journal
router.delete('/delete-journal', function (req, res) {
    res.send(JSON);
});
//# sourceMappingURL=routes.js.map