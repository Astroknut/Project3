"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var journal_service_1 = require("../journal.service");
var ShowEntryComponent = /** @class */ (function () {
    function ShowEntryComponent(route, journalService) {
        this.route = route;
        this.journalService = journalService;
        this.editing = false;
        this.oldText = "";
    }
    ShowEntryComponent.prototype.editEntry = function () {
        this.editing = true;
        this.oldText = this.entry.text;
    };
    ShowEntryComponent.prototype.saveEntry = function () {
        this.editing = false;
        this.journalService.updateEntry(this.entryId, this.entry)
            .subscribe(function (result) {
            console.log(result);
        });
    };
    ShowEntryComponent.prototype.cancelEdit = function () {
        this.editing = false;
        this.entry.text = this.oldText;
    };
    ShowEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (param) { return _this.entryId = param.id; });
        this.route.parent.params.forEach(function (param) { return _this.journalId = param.id; });
        var that = this;
        this.journalService.oneEntry(this.entryId)
            .subscribe(function (result) {
            console.log(result);
            that.entry = result.json();
        });
    };
    ShowEntryComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-show-entry',
                    templateUrl: './show-entry.component.html',
                    styleUrls: ['./show-entry.component.css'],
                    providers: [journal_service_1.JournalService]
                },] },
    ];
    /** @nocollapse */
    ShowEntryComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute, },
        { type: journal_service_1.JournalService, },
    ]; };
    return ShowEntryComponent;
}());
exports.ShowEntryComponent = ShowEntryComponent;
//# sourceMappingURL=show-entry.component.js.map