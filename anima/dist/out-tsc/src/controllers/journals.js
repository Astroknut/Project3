"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import db from models here
var models_1 = require("../models");
var Journal = models_1.db.models.Journal;
function index(req, res) {
    Journal.findAll().then(function (journals) {
        res.json(journals);
    });
} //cooment
function show(req, res) {
    Journal.findById(req.params.id)
        .then(function (journal) {
        if (!journal)
            res.send(res, "not found");
        else
            res.json(journal);
    });
}
function create(req, res) {
    Journal.create(req.body).then(function (journal) {
        if (!journal)
            res.send(res, "not saved");
        else
            res.json(journal);
    });
}
function update(req, res) {
    Journal.findById(req.params.id)
        .then(function (journal) {
        if (!journal)
            res.send(res, "not found");
        else
            return journal.updateAttributes(req.body);
    })
        .then(function (journal) {
        res.json(journal);
    });
}
function destroy(req, res) {
    Journal.findById(req.params.id)
        .then(function (journal) {
        if (!journal)
            res.send(res, "not found");
        else
            return journal.destroy();
    })
        .then(function () {
        res.redirect(303, "/all-journals");
    });
}
var JournalsController = {};
exports.JournalsController = JournalsController;
JournalsController.index = index;
JournalsController.show = show;
JournalsController.create = create;
JournalsController.update = update;
JournalsController.destroy = destroy;
//# sourceMappingURL=journals.js.map