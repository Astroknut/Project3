"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AnimaPage = /** @class */ (function () {
    function AnimaPage() {
    }
    AnimaPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    AnimaPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return AnimaPage;
}());
exports.AnimaPage = AnimaPage;
//# sourceMappingURL=app.po.js.map