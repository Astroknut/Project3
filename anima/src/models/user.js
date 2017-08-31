module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("user", {
		name: Sequelize.STRING,
	});
	return model;
};