//import db from models here
import { db } from '../models';

var Journal = db.models.Journal;
var Entries = db.models.Entry;

function showEntries(req, res) {
	Entry.findAll({
		where: {
			journalId: req.params.journalId
		}
	})
	.then(function(entries) {
		if(!entries) res.send('no entries found');
		res.json(entries);
	});
}