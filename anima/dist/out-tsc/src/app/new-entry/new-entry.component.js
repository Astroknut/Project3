"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var journal_service_1 = require("../journal.service");
var router_1 = require("@angular/router");
var NewEntryComponent = (function () {
    function NewEntryComponent(journalService, router, route) {
        this.journalService = journalService;
        this.router = router;
        this.route = route;
    }
    NewEntryComponent.prototype.saveEntry = function () {
        var _this = this;
        var entry = {
            text: this.entry_text,
            date: new Date().toDateString(),
            journalId: this.journalId
        };
        var that = this;
        this.journalService.addEntry(entry)
            .subscribe(function (result) {
            console.log(result);
            that.router.navigate(['../journal/', _this.journalId, 'contents']);
        });
    };
    NewEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.parent.params.forEach(function (param) {
            _this.journalId = param.id;
        });
    };
    NewEntryComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-new-entry',
                    templateUrl: './new-entry.component.html',
                    styleUrls: ['./new-entry.component.css'],
                    providers: [journal_service_1.JournalService]
                },] },
    ];
    /** @nocollapse */
    NewEntryComponent.ctorParameters = function () { return [
        { type: journal_service_1.JournalService, },
        { type: router_1.Router, },
        { type: router_1.ActivatedRoute, },
    ]; };
    return NewEntryComponent;
}());
exports.NewEntryComponent = NewEntryComponent;
//# sourceMappingURL=new-entry.component.js.map