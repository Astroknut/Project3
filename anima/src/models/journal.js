module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("journal", {
		name: Sequelize.STRING,
		color: Sequelize.STRING,
	});
	return model;
};