"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var journal_service_1 = require("../journal.service");
var AllJournalsComponent = (function () {
    function AllJournalsComponent(journalService) {
        this.journalService = journalService;
        this.selected = 0;
        this.journals_left = [];
        this.journals = [];
        this.journals_right = [];
    }
    AllJournalsComponent.prototype.updateSelected = function () {
        // Unselect other journals
        this.journals_left.forEach(function (element) { return element.selected = false; });
        this.journals_right.forEach(function (element) { return element.selected = false; });
        // Select new journal
        this.journals[0].selected = true;
    };
    AllJournalsComponent.prototype.cycleRight = function () {
        if (this.journals_right.length > 0) {
            this.journals_left.push(this.journals.pop());
            this.journals.push(this.journals_right.shift());
            this.updateSelected();
        }
    };
    AllJournalsComponent.prototype.cycleLeft = function () {
        if (this.journals_left.length > 0) {
            this.journals_right.unshift(this.journals.pop());
            this.journals.push(this.journals_left.pop());
            this.updateSelected();
        }
    };
    // In the following two functions, we return id !== id
    // because we want to return TRUE if the journal should
    // NOT be visible.
    AllJournalsComponent.prototype.visibleJournalLeft = function (id) {
        return id !== this.journals_left[this.journals_left.length - 1].id;
    };
    AllJournalsComponent.prototype.visibleJournalRight = function (id) {
        return id !== this.journals_right[0].id;
    };
    AllJournalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.journalService.subject$.subscribe(function (journals) {
            _this.journals = journals;
            // Journals should start with only the first element.
            _this.journals = _this.journals.slice(0, 1);
            // journals_right should include everything except the first element.
            _this.journals_right = journals;
            _this.journals_right.shift();
        });
        this.journalService.allJournals();
    };
    AllJournalsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-all-journals',
                    templateUrl: './all-journals.component.html',
                    styleUrls: ['./all-journals.component.css'],
                    providers: [journal_service_1.JournalService]
                },] },
    ];
    /** @nocollapse */
    AllJournalsComponent.ctorParameters = function () { return [
        { type: journal_service_1.JournalService, },
    ]; };
    return AllJournalsComponent;
}());
exports.AllJournalsComponent = AllJournalsComponent;
//# sourceMappingURL=all-journals.component.js.map