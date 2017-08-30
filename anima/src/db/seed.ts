import { db } from '..models';
let DB = db.models;

var journalCreate = function() {
	return DB.Journal.create({
	name: 'Creative Writing',
    color: 'red',
    selected: false,
    moving_left: false,
    moving_right: false
	});
};

journalCreate()
.then(function() {
	process.exit();
});
