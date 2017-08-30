import { db } from '../models';
let DB = db.models;

var journalCreate = function() {
	// TO DO - Look at Tunr to figure out how to connect users
	return DB.Journal.bulkCreate([{
		name: 'Creative Writing',
	    color: 'red'
	},
	{
		name: 'Love Letters',
		color: 'blue'
	}]);
};

journalCreate()
.then(function() {
	entriesCreate()
	.then(function() {
		process.exit();
	})
});
