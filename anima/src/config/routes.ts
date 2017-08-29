import * as express from 'express';
var router = express.Router();

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
router.route('/update-entry')
	.post();

//DELETE a journal entry
router.route('/delete-entry')
	.remove();

//DELETE a journal
router.route('/delete-journal')
	.remove();				

export {router};