"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import db from models here
var models_1 = require("../models");
var Journal = models_1.db.models.Journal;
var Entry = models_1.db.models.Entry;
function showEntries(req, res) {
    Entry.findAll({
        where: {
            journalId: req.params.journalId
        }
    })
        .then(function (entries) {
        if (!entries)
            res.send(res, 'no entries found');
        res.json(entries);
    });
}
function show(req, res) {
    Entry.findById(req.params.id).then(function (entry) {
        if (!entry)
            res.send(res, "Entry not found");
        res.json(entry);
    });
}
function create(req, res) {
    Entry.create(req.body).then(function (entry) {
        if (!entry)
            res.send(res, "Entry not saved");
        else
            res.json(entry);
    });
}
function update(req, res) {
    Entry.findById(req.params.id)
        .then(function (entry) {
        if (!entry)
            res.send(res, 'Entry not found');
        else
            return entry.updateAttributes(req.body);
    })
        .then(function (entry) {
        res.json(entry);
    });
}
function destroy(req, res) {
    Entry.findById(req.params.id).then(function (entry) {
        if (!entry)
            res.send(res, "Entry not found");
        else
            return entry.destroy();
    })
        .then(function () {
        res.redirect(303, "/show-journal");
    });
}
var EntriesController = {};
exports.EntriesController = EntriesController;
EntriesController.showEntries = showEntries;
EntriesController.show = show;
EntriesController.update = update;
EntriesController.create = create;
EntriesController.destroy = destroy;
//# sourceMappingURL=entries.js.map