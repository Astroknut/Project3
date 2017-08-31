"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var journal_service_1 = require("../journal.service");
var NewEntryComponent = (function () {
    function NewEntryComponent(journalService) {
        this.journalService = journalService;
    }
    NewEntryComponent.prototype.ngOnInit = function () {
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
    ]; };
    return NewEntryComponent;
}());
exports.NewEntryComponent = NewEntryComponent;
//# sourceMappingURL=new-entry.component.js.map