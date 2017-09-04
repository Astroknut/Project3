import { db } from '../models';
let DB = db.models;

var entries = [
	{
		text: 'I punched Trump in the face',
		date: '8/30/17',
		journalId: ""
	},
	{
		text: 'why',
		date: '1/2/31',
		journalId: ""
	}
];

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
	/*
	.then(function(journals) {
		console.log(journals);
		entries.forEach(function(entry) {
			entry.journalId = journals[0].dataValues.id;
			console.log(entry);
		});
		DB.Entry.bulkCreate(entries)
		.then(function(entries) {
			console.log(entries);
		});
	});*/
};

journalCreate()
.then(function() {
	process.exit();
});
