"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var JournalService = /** @class */ (function () {
    function JournalService(http) {
        this.http = http;
        this.baseUrl = process.env.PORT || 'http://localhost:3000';
    }
    JournalService.prototype.journal = function (id) {
        return this.http.get(this.baseUrl + "/journal-show/" + id);
    };
    JournalService.prototype.oneEntry = function (entryId) {
        return this.http.get(this.baseUrl + "/entry-show/" + entryId);
    };
    JournalService.prototype.allEntries = function (journalId) {
        return this.http.get(this.baseUrl + "/journal-entries/" + journalId);
    };
    JournalService.prototype.addEntry = function (entry) {
        return this.http.post(this.baseUrl + "/entry-new", entry);
    };
    JournalService.prototype.updateEntry = function (entryId, entry) {
        return this.http.put(this.baseUrl + "/entry/" + entryId, entry);
    };
    JournalService.prototype.addJournal = function (journal) {
        return this.http.post(this.baseUrl + "/journals-new", journal);
    };
    JournalService.prototype.allJournals = function () {
        return this.http.get(this.baseUrl + "/journals-index");
    };
    JournalService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    JournalService.ctorParameters = function () { return [
        { type: http_1.Http, },
    ]; };
    return JournalService;
}());
exports.JournalService = JournalService;
//# sourceMappingURL=journal.service.js.map