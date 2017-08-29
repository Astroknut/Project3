import * as Sequelize from 'sequelize';

var sequelize = new Sequelize('postgres://jverdolino@localhost:5432/tunr_models');

var Entry = sequelize.import("./entry");
var Jounarl = sequelize.import('./journal');
var User = sequelize.import('./user');

Entry.belongsTo(Journal);
Journal.hasMany(Entry);

Journal.belongsTo(User);
User.hasMany(Journal);

const db = <any>{};
db.models = {
	Entry,
	Journal
};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export {db};