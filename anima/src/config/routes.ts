import * as express from 'express';
import * as passport from 'passport';
import * as ensure from 'connect-ensure-login';

import { JournalsController } from '../controllers/journals';
import { UsersController } from '../controllers/users';
// import { EntriesController } from '../controller/entries';

const router = express.Router();
const ensureLoggedIn = ensure.ensureLoggedIn();

const env = {
  AUTH0_CLIENT_ID: 'v8rWxd51zctt5mojr2mc-1FlRpKWJUyo',
  AUTH0_DOMAIN: 'anima.auth0.com',
  AUTH0_CALLBACK_URL: 'http://localhost:3000/callback'
};

// Perform the login
router.get(
  '/login',
  passport.authenticate('auth0', {
    clientID: env.AUTH0_CLIENT_ID,
    domain: env.AUTH0_DOMAIN,
    redirectUri: env.AUTH0_CALLBACK_URL,
    audience: 'https://' + env.AUTH0_DOMAIN + '/userinfo',
    responseType: 'code',
    scope: 'openid'
  }),
  function(req, res) {
    res.redirect('/');
  }
);

// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Perform the final stage of authentication and redirect to '/user'
router.get(
  '/callback',
  passport.authenticate('auth0', {
    failureRedirect: '/'
  }),
  function(req, res) {
    console.log(req.user._json.sub);
    res.redirect(req.session.returnTo || '/user');
  }  
);

// router.get('/', ensureLoggedIn, function(req, res, next) {
//   res.redirect('/user', {
//     user: req.user,
//     userProfile: JSON.stringify(req.user, null, '  ')
//   });
// });

//Journal routes

//Journal Index
router.get('/journals-index', JournalsController.index);

//GET a journal
router.get('/journal-show/:id', JournalsController.show);

//CREATE a journal
router.post('/journals-new', JournalsController.create);

//UPDATE journal 
router.put('/journals-update/:id', JournalsController.update);

//DESTROY a journal
router.delete('/journals-delete/:id', JournalsController.destroy);


//Entry Routes

//Entry Index
router.get('/entry-index', EntriesController.index);

//GET a journal entry
router.get('/entry-show/:id', EntriesController.show);

//CREATE a journal entry
router.post('/entry-new', JournalsController.new);

//DESTROY a journal entry
router.delete('/entry-delete/:id', EntriesController.destroy);



export {router};