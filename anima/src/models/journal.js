module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("journal", {
		name: Sequelize.STRING,
		color: Sequelize.STRING,
		selected: Sequelize.BOOLEAN,
		moving_left: Sequelize.BOOLEAN,
		moving_right: Sequelize.BOOLEAN
	});
	return model;
};