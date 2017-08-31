"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
var sequelize = new Sequelize('postgres://glnfavglxpsssx:ff7261a5374620184780aa690996db8a96583033474742236ebb5d193396fbb6@ec2-54-225-113-161.compute-1.amazonaws.com:5432/d76tla24vfd6ns');
var Entry = sequelize.import("./entry");
var Journal = sequelize.import('./journal');
var User = sequelize.import('./user');
Entry.belongsTo(Journal);
Journal.hasMany(Entry);
Journal.belongsTo(User);
User.hasMany(Journal);
var db = {};
exports.db = db;
db.models = {
    Entry: Entry,
    Journal: Journal,
    User: User
};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//# sourceMappingURL=index.js.map