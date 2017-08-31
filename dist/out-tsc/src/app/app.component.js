"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var AppComponent = /** @class */ (function () {
    function AppComponent(meta, title) {
        this.title = 'app';
        title.setTitle('Our Very Professional Page');
        meta.addTags([
            { name: 'author', content: 'YOURNAMEHERE' },
            { name: 'keywords', content: 'angular seo, angular 4 universal, etc' },
            { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
        ]);
    }
    AppComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'app-root',
                    templateUrl: './app.component.html',
                    styleUrls: ['./app.component.css']
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = function () { return [
        { type: platform_browser_1.Meta, },
        { type: platform_browser_1.Title, },
    ]; };
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map