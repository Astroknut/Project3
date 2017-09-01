"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var journal_service_1 = require("./journal.service");
describe('JournalService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [journal_service_1.JournalService]
        });
    });
    it('should be created', testing_1.inject([journal_service_1.JournalService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=journal.service.spec.js.map