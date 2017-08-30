//import db from models here
import { db } from '../models';
var Journal = db.models.Journal;

function index(req, res) {
	Journal.findAll().then(function(journals) {
		res.json(journals);
	});
} //cooment

function show(req, res) {
  Journal.findById(req.params.id)
  .then(function(journal){
    if(!journal) res.send(res, "not found");
    //Journal.start();
    //journal.write();
    else res.json(journal);
  });	
}

function create(req, res) {
	Journal.create(req.body).then(function(journal){
    if(!journal) res.send(res, "not saved");
    else res.json(journal);
  });
}

function update(req, res) {
  Journal.findById(req.params.id)
  .then(function(journal){
    if(!journal) res.send(res, "not found");
    else return journal.updateAttributes(req.body);
  })
  .then(function(journal){
    res.json(journal);
  });
}

function destroy(req, res) {
  Journal.findById(req.params.id)
  .then(function(journal){
    if(!journal) res.send(res, "not found");
    else return journal.destroy();
  })
  .then(function(){
    res.redirect(303, "/all-journals");
  });  
}

const JournalsController = <any>{};
JournalsController.index = index;
JournalsController.show = show;
JournalsController.create = create;
JournalsController.update = update;
JournalsController.destroy = destroy;

export {JournalsController};