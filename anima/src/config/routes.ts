import * as express from 'express';
var router = express.Router();
import { journalController } from '../controllers/journal';
import { userController } from '../controllers/user'

//Journal routes

//index
router.get('/all-journals', journalController.index);

//GET a journal
router.get('/show-journal', journalController.show);

//GET a journal entry
router.get('/show-entry', journalController.showEntry)

//CREATE a journal
router.post('/new-journal', journalController.create);

//CREATE a journal entry
router.post('/new-entry', journalController.newEntry);

//UPDATE journal entry
router.put('/update-entry', journalController.update);

//DESTROY a journal entry
router.delete('/delete-entry', journalController.destroyEntry);

//DESTROY a journal
router.delete('/delete-journal', journalController.destroy);
			

export {router};
