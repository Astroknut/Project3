import { db } from '../models';
var Entry = db.models.Entry;

function index(req, res) {
	Entry.findAll().then(function(entries) {
		res.json(entries);
	});
}

function show(req, res) {
	Entry.findById(req.params.id).then(function(entry){
		if(!entry) res.send(res, "Entry not found");
	});
}

function create(req, res) {
	Entry.create(req.body).then(function(entry) {
		if(!entry) res.send(res, "Entry not saved");
		else res.json(entry);
	});
}

function destroy(req, res) {
	Entry.findById(req.params.id).then(function(entry){
		if(!entry) res.send(res, "Entry not found");
		else return entry.destroy();
	})
	.then(function(){
		res.redirect(303, "/show-journal")
	});
}

const EntriesController = <any>{};
EntriesController.index = index;
EntriesController.show = show;
EntriesController.create = create;
EntriesController.destroy = destroy;

export {EntriesController};