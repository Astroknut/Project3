import * as Sequelize from 'sequelize';

//***************CHANGE LOCALHOST TO <your local host>@localhost...*********
var sequelize = new Sequelize('postgres://roxannnlopez@localhost:5432/Project3');


var Entry = sequelize.import("./entry");
var Journal = sequelize.import('./journal');
var User = sequelize.import('./user');

Entry.belongsTo(Journal);
Journal.hasMany(Entry);

Journal.belongsTo(User);
User.hasMany(Journal);

const db = <any>{};
db.models = {
	Entry,
	Journal,
	User
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export {db};