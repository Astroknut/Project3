"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var User = models_1.db.models.User;
function index(req, res) {
    User.findAll().then(function (user) {
        res.json(user);
    });
}
var UsersController = {};
exports.UsersController = UsersController;
UsersController.index = index;
//# sourceMappingURL=users.js.map