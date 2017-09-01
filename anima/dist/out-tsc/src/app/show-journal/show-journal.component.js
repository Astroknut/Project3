"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var new_entry_component_1 = require("../new-entry/new-entry.component");
var ShowJournalComponent = (function () {
    function ShowJournalComponent(newEntryComponent) {
        this.newEntryComponent = newEntryComponent;
        this.angerLevel = this.newEntryComponent.angerLevel;
    }
    ShowJournalComponent.prototype.test1 = function () {
        console.log("test1 on show-journal hit");
        console.log(this.angerLevel);
    };
    ShowJournalComponent.prototype.ngOnInit = function () {
    };
    ShowJournalComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-show-journal',
                    templateUrl: './show-journal.component.html',
                    styleUrls: ['./show-journal.component.css'],
                    providers: [new_entry_component_1.NewEntryComponent]
                },] },
    ];
    /** @nocollapse */
    ShowJournalComponent.ctorParameters = function () { return [
        { type: new_entry_component_1.NewEntryComponent, },
    ]; };
    return ShowJournalComponent;
}());
exports.ShowJournalComponent = ShowJournalComponent;
//# sourceMappingURL=show-journal.component.js.map