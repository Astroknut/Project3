import { db } from '../models';
var User = db.models.User;

function index(req, res) {
	User.findAll().then(function(user) {
		res.json(user);
	});
}

const UsersController = <any>{};
UsersController.index = index;

export {UsersController};