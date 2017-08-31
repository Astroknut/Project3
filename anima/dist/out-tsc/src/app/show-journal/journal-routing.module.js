"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var contents_component_1 = require("../contents/contents.component");
var show_journal_component_1 = require("./show-journal.component");
var show_entry_component_1 = require("../show-entry/show-entry.component");
var new_entry_component_1 = require("../new-entry/new-entry.component");
var journalRoutes = [
    {
        path: 'journal/:id',
        component: show_journal_component_1.ShowJournalComponent,
        children: [
            {
                path: 'contents',
                component: contents_component_1.ContentsComponent
            },
            {
                path: 'show-entry/:id',
                component: show_entry_component_1.ShowEntryComponent
            },
            {
                path: 'new-entry',
                component: new_entry_component_1.NewEntryComponent
            }
        ]
    }
];
var JournalRoutingModule = (function () {
    function JournalRoutingModule() {
    }
    JournalRoutingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        router_1.RouterModule.forChild(journalRoutes)
                    ],
                    exports: [
                        router_1.RouterModule
                    ]
                },] },
    ];
    /** @nocollapse */
    JournalRoutingModule.ctorParameters = function () { return []; };
    return JournalRoutingModule;
}());
exports.JournalRoutingModule = JournalRoutingModule;
//# sourceMappingURL=journal-routing.module.js.map