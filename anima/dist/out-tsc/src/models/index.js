"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sequelize = require("sequelize");
//***************CHANGE LOCALHOST TO <your local host>@localhost...*********
var sequelize = new Sequelize('postgres://Mark@localhost:5432/project3');
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