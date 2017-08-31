"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../models");
var DB = models_1.db.models;
var journalCreate = function () {
    return DB.Journal.create({
        name: 'Creative Writing',
        color: 'red',
        selected: false,
        moving_left: false,
        moving_right: false
    });
};
journalCreate()
    .then(function () {
    process.exit();
});
//# sourceMappingURL=seed.js.map