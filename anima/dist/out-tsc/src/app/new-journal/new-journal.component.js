"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var journal_service_1 = require("../journal.service");
var NewJournalComponent = (function () {
    function NewJournalComponent(router, journalService) {
        this.router = router;
        this.journalService = journalService;
    }
    NewJournalComponent.prototype.setColor = function (color) {
        this.journal.color = color;
    };
    NewJournalComponent.prototype.createJournal = function () {
        if (this.journal.name === "") {
            this.journal.invalid = true;
        }
        else {
            this.journal.invalid = false;
            this.journalService.addJournal(this.journal);
            this.router.navigate(['../journal/', this.journal.id, 'new-entry']);
        }
    };
    NewJournalComponent.prototype.ngOnInit = function () {
        this.journal = {
            id: -1,
            name: "",
            color: "white",
            selected: false,
            moving_left: false,
            moving_right: false,
            invalid: false,
            entries: []
        };
    };
    NewJournalComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-new-journal',
                    templateUrl: './new-journal.component.html',
                    styleUrls: ['./new-journal.component.css'],
                    providers: [journal_service_1.JournalService]
                },] },
    ];
    /** @nocollapse */
    NewJournalComponent.ctorParameters = function () { return [
        { type: router_1.Router, },
        { type: journal_service_1.JournalService, },
    ]; };
    return NewJournalComponent;
}());
exports.NewJournalComponent = NewJournalComponent;
//# sourceMappingURL=new-journal.component.js.map