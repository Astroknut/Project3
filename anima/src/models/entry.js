module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("entry", {
	name: Sequelize.STRING,
	date: Sequelize.DATE
	});
	return model;
};
