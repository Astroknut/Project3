"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var journal_service_1 = require("../journal.service");
var ContentsComponent = (function () {
    function ContentsComponent(route, journalService) {
        this.route = route;
        this.journalService = journalService;
    }
    ContentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get journal id from URL
        this.route.parent.params.forEach(function (param) {
            _this.journalId = param.id;
        });
        // Grab corresponding journal from JournalService
        var that = this;
        this.journalService.journal(this.journalId, function (result) {
            that.journal = result;
            that.journal.entries.forEach(function (el) {
                el.blurb = el.text.substring(0, 50) + "... ";
            });
        });
    };
    ContentsComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-contents',
                    templateUrl: './contents.component.html',
                    styleUrls: ['./contents.component.css'],
                    providers: [journal_service_1.JournalService]
                },] },
    ];
    /** @nocollapse */
    ContentsComponent.ctorParameters = function () { return [
        { type: router_1.ActivatedRoute, },
        { type: journal_service_1.JournalService, },
    ]; };
    return ContentsComponent;
}());
exports.ContentsComponent = ContentsComponent;
//# sourceMappingURL=contents.component.js.map