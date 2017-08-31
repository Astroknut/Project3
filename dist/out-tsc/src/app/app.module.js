"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var Http_1 = require("@angular/Http");
var app_component_1 = require("./app.component");
var journal_service_1 = require("./journal.service");
var new_user_component_1 = require("./new-user/new-user.component");
var new_entry_component_1 = require("./new-entry/new-entry.component");
var new_journal_component_1 = require("./new-journal/new-journal.component");
var landing_page_component_1 = require("./landing-page/landing-page.component");
var all_journals_component_1 = require("./all-journals/all-journals.component");
var show_journal_component_1 = require("./show-journal/show-journal.component");
var show_entry_component_1 = require("./show-entry/show-entry.component");
var journal_routing_module_1 = require("./show-journal/journal-routing.module");
var sign_up_component_1 = require("./sign-up/sign-up.component");
var log_in_component_1 = require("./log-in/log-in.component");
var contents_component_1 = require("./contents/contents.component");
var about_me_component_1 = require("./about-me/about-me.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        app_component_1.AppComponent,
                        new_user_component_1.NewUserComponent,
                        new_entry_component_1.NewEntryComponent,
                        new_journal_component_1.NewJournalComponent,
                        landing_page_component_1.LandingPageComponent,
                        all_journals_component_1.AllJournalsComponent,
                        show_journal_component_1.ShowJournalComponent,
                        show_entry_component_1.ShowEntryComponent,
                        sign_up_component_1.SignUpComponent,
                        log_in_component_1.LogInComponent,
                        contents_component_1.ContentsComponent,
                        about_me_component_1.AboutMeComponent
                    ],
                    imports: [
                        Http_1.HttpModule,
                        platform_browser_1.BrowserModule.withServerTransition({ appId: 'anima' }),
                        forms_1.FormsModule,
                        router_1.RouterModule.forRoot([
                            {
                                path: '',
                                component: landing_page_component_1.LandingPageComponent
                            },
                            {
                                path: 'sign-up',
                                component: sign_up_component_1.SignUpComponent
                            },
                            {
                                path: 'log-in',
                                component: log_in_component_1.LogInComponent
                            },
                            {
                                path: 'all-journals',
                                component: all_journals_component_1.AllJournalsComponent
                            },
                            {
                                path: 'new-journal',
                                component: new_journal_component_1.NewJournalComponent
                            },
                            {
                                path: 'user',
                                component: new_user_component_1.NewUserComponent
                            },
                            {
                                path: 'about',
                                component: about_me_component_1.AboutMeComponent
                            }
                        ]),
                        journal_routing_module_1.JournalRoutingModule
                    ],
                    providers: [journal_service_1.JournalService],
                    bootstrap: [app_component_1.AppComponent]
                },] },
    ];
    /** @nocollapse */
    AppModule.ctorParameters = function () { return []; };
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map