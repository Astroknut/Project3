"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var journal_service_1 = require("../journal.service");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var NewEntryComponent = (function () {
    function NewEntryComponent(http, journalService, router, route) {
        this.http = http;
        this.journalService = journalService;
        this.router = router;
        this.route = route;
    }
    NewEntryComponent.prototype.saveEntry = function () {
        var _this = this;
        this.getTone();
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
    NewEntryComponent.prototype.getTone = function () {
        var _this = this;
        // let tones = this.result.document_tone.tone_categories[0].tones;
        this.http.get('https://watson-api-explorer.mybluemix.net/tone-analyzer/api/v3/tone?text=' + this.entry_text + '&tones=emotion&sentences=false&version=2016-05-19').subscribe(function (data) {
            _this.result = data.json();
            console.log('got data');
            console.log(_this.result.document_tone.tone_categories[0].tones);
            var tones = _this.result.document_tone.tone_categories[0].tones;
            var angerLevel = tones[0].score * 100;
            var disgustLevel = tones[1].score * 100;
            var fearLevel = tones[2].score * 100;
            var joyLevel = tones[3].score * 100;
            var sadnessLevel = tones[4].score * 100;
            console.log(angerLevel, disgustLevel, fearLevel, joyLevel, sadnessLevel);
            //console.log(tones);
        });
    };
    NewEntryComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-new-entry',
                    templateUrl: './new-entry.component.html',
                    styleUrls: ['./new-entry.component.css'],
                },] },
    ];
    /** @nocollapse */
    NewEntryComponent.ctorParameters = function () { return [
        { type: http_1.Http, },
        { type: journal_service_1.JournalService, },
        { type: router_1.Router, },
        { type: router_1.ActivatedRoute, },
    ]; };
    return NewEntryComponent;
}());
exports.NewEntryComponent = NewEntryComponent;
//# sourceMappingURL=new-entry.component.js.map