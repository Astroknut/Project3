import * as Sequelize from 'sequelize';

var sequelize = new Sequelize(process.env.DATABASE_URL);

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