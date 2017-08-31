"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
var JournalService = (function () {
    function JournalService() {
        this.subject$ = null;
        this.journals = [
            {
                id: 1,
                name: 'Daily Journal',
                color: 'blue',
                selected: true,
                moving_left: false,
                moving_right: false,
                invalid: false,
                entries: [
                    {
                        id: 1,
                        date: "8/26/17",
                        text: "Today I ate a spider.  Donald Trump showed up at my door and I punched him right in the kisser.  What a fuck.",
                        blurb: ""
                    },
                    {
                        id: 2,
                        date: "8/27/17",
                        text: "Scooby Doo.  Donald Trump showed up at my door and I punched him right in the kisser.  What a fuck.",
                        blurb: ""
                    },
                    {
                        id: 3,
                        date: "8/28/17",
                        text: "ayayayaya.  Donald Trump showed up at my door and I punched him right in the kisser.  What a fuck.",
                        blurb: ""
                    }
                ]
            },
            {
                id: 2,
                name: 'Creative Writing',
                color: 'red',
                selected: false,
                moving_left: false,
                moving_right: false,
                entries: []
            }
        ];
        this.subject = new Subject_1.Subject();
        this.subject$ = this.subject.asObservable();
    }
    JournalService.prototype.journal = function (id, callback) {
        this.journals.forEach(function (element) {
            if (element.id === parseInt(id)) {
                callback(element);
            }
        });
    };
    JournalService.prototype.entry = function (journalId, entryId, callback) {
        // let journal;
        // this.journals.forEach(element => {
        // 	if(element.id === parseInt(journalId)) {
        // 		element.entries.forEach(el => {
        // 			if(el.id === parseInt(entryId)) {
        // 				callback(el);
        // 			}
        // 		})
        // 	}
        // });
    };
    JournalService.prototype.addJournal = function (journal) {
        journal.id = this.journals.length;
        this.journals.push(journal);
        this.subject.next(this.journals);
    };
    JournalService.prototype.allJournals = function () {
        this.subject.next(this.journals);
    };
    JournalService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    JournalService.ctorParameters = function () { return []; };
    return JournalService;
}());
exports.JournalService = JournalService;
//# sourceMappingURL=journal.service.js.map