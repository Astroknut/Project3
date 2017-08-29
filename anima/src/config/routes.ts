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
router.post('/update-entry', function(req,res) {
	res.send(JSON);
})

//DELETE a journal entry
router.remove('/delete-entry', function(req,res) {
	res.send(JSON)
})

//DELETE a journal
router.remove('/delete-journal', function(req,res) {
	res.send(JSON);
})
			

export {router};
