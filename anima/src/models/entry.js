module.exports = function(sequelize, Sequelize) {
	var model = sequelize.define("entry", {
	text: Sequelize.STRING,
	date: Sequelize.DATE
	});
	return model;
};
