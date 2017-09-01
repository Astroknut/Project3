"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("../../../../src/app/app.server.module");
var i2 = require("../../../../src/app/app.component");
var i3 = require("./show-journal/show-journal.component.ngfactory");
var i4 = require("./contents/contents.component.ngfactory");
var i5 = require("./show-entry/show-entry.component.ngfactory");
var i6 = require("./new-entry/new-entry.component.ngfactory");
var i7 = require("./landing-page/landing-page.component.ngfactory");
var i8 = require("./sign-up/sign-up.component.ngfactory");
var i9 = require("./log-in/log-in.component.ngfactory");
var i10 = require("./all-journals/all-journals.component.ngfactory");
var i11 = require("./new-journal/new-journal.component.ngfactory");
var i12 = require("./about-me/about-me.component.ngfactory");
var i13 = require("./app.component.ngfactory");
var i14 = require("@angular/http");
var i15 = require("@angular/platform-server");
var i16 = require("@angular/common/http");
var i17 = require("@angular/common");
var i18 = require("@angular/platform-browser");
var i19 = require("@angular/animations/browser");
var i20 = require("@angular/platform-browser/animations");
var i21 = require("@angular/animations");
var i22 = require("@angular/forms");
var i23 = require("@angular/router");
var i24 = require("../../../../src/app/journal.service");
var i25 = require("../../../../src/app/show-journal/show-journal.component");
var i26 = require("../../../../src/app/contents/contents.component");
var i27 = require("../../../../src/app/show-entry/show-entry.component");
var i28 = require("../../../../src/app/new-entry/new-entry.component");
var i29 = require("../../../../src/app/landing-page/landing-page.component");
var i30 = require("../../../../src/app/sign-up/sign-up.component");
var i31 = require("../../../../src/app/log-in/log-in.component");
var i32 = require("../../../../src/app/all-journals/all-journals.component");
var i33 = require("../../../../src/app/new-journal/new-journal.component");
var i34 = require("../../../../src/app/about-me/about-me.component");
var i35 = require("../../../../src/app/show-journal/journal-routing.module");
var i36 = require("../../../../src/app/app.module");
exports.AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) {
    return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ShowJournalComponentNgFactory, i4.ContentsComponentNgFactory, i5.ShowEntryComponentNgFactory,
                    i6.NewEntryComponentNgFactory, i7.LandingPageComponentNgFactory, i8.SignUpComponentNgFactory,
                    i9.LogInComponentNgFactory, i10.AllJournalsComponentNgFactory, i11.NewJournalComponentNgFactory,
                    i12.AboutMeComponentNgFactory, i13.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver],
            i0.NgModuleRef]), i0.ɵmpd(4608, i14.BrowserXhr, i15.ɵc, []), i0.ɵmpd(4608, i14.ResponseOptions, i14.BaseResponseOptions, []), i0.ɵmpd(4608, i14.XSRFStrategy, i15.ɵd, []), i0.ɵmpd(4608, i14.XHRBackend, i14.XHRBackend, [i14.BrowserXhr, i14.ResponseOptions, i14.XSRFStrategy]), i0.ɵmpd(4608, i14.RequestOptions, i14.BaseRequestOptions, []), i0.ɵmpd(5120, i14.Http, i15.ɵe, [i14.XHRBackend,
            i14.RequestOptions]), i0.ɵmpd(4608, i16.HttpXsrfTokenExtractor, i16.ɵg, [i17.DOCUMENT,
            i0.PLATFORM_ID, i16.ɵe]), i0.ɵmpd(4608, i16.ɵh, i16.ɵh, [i16.HttpXsrfTokenExtractor,
            i16.ɵf]), i0.ɵmpd(5120, i16.HTTP_INTERCEPTORS, function (p0_0) {
            return [p0_0];
        }, [i16.ɵh]), i0.ɵmpd(4608, i16.XhrFactory, i15.ɵc, []), i0.ɵmpd(4608, i16.HttpXhrBackend, i16.HttpXhrBackend, [i16.XhrFactory]), i0.ɵmpd(6144, i16.HttpBackend, null, [i16.HttpXhrBackend]), i0.ɵmpd(5120, i16.HttpHandler, i15.ɵf, [i16.HttpBackend,
            [2, i16.HTTP_INTERCEPTORS]]), i0.ɵmpd(4608, i16.HttpClient, i16.HttpClient, [i16.HttpHandler]),
        i0.ɵmpd(4608, i16.ɵd, i16.ɵd, []), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵm, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i17.NgLocalization, i17.NgLocaleLocalization, [i0.LOCALE_ID]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵk, []),
        i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵl, []), i0.ɵmpd(4608, i18.DomSanitizer, i18.ɵe, [i17.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i18.DomSanitizer]),
        i0.ɵmpd(4608, i18.HAMMER_GESTURE_CONFIG, i18.HammerGestureConfig, []),
        i0.ɵmpd(5120, i18.EVENT_MANAGER_PLUGINS, function (p0_0, p1_0, p2_0, p2_1) {
            return [new i18.ɵDomEventsPlugin(p0_0), new i18.ɵKeyEventsPlugin(p1_0),
                new i18.ɵHammerGesturesPlugin(p2_0, p2_1)];
        }, [i17.DOCUMENT, i17.DOCUMENT, i17.DOCUMENT, i18.HAMMER_GESTURE_CONFIG]), i0.ɵmpd(4608, i18.EventManager, i18.EventManager, [i18.EVENT_MANAGER_PLUGINS, i0.NgZone]),
        i0.ɵmpd(135680, i18.ɵDomSharedStylesHost, i18.ɵDomSharedStylesHost, [i17.DOCUMENT]),
        i0.ɵmpd(4608, i18.ɵDomRendererFactory2, i18.ɵDomRendererFactory2, [i18.EventManager,
            i18.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i15.ɵb, i15.ɵb, [i18.DOCUMENT,
            [2, i18.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i18.ɵSharedStylesHost, null, [i15.ɵb]), i0.ɵmpd(4608, i15.ɵServerRendererFactory2, i15.ɵServerRendererFactory2, [i0.NgZone, i18.DOCUMENT, i18.ɵSharedStylesHost]), i0.ɵmpd(4608, i19.AnimationDriver, i19.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i19.ɵAnimationStyleNormalizer, i20.ɵd, []), i0.ɵmpd(4608, i19.ɵAnimationEngine, i20.ɵb, [i19.AnimationDriver,
            i19.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i15.ɵa, [i15.ɵServerRendererFactory2, i19.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(4608, i18.Meta, i18.Meta, [i17.DOCUMENT]), i0.ɵmpd(4608, i18.Title, i18.Title, [i17.DOCUMENT]), i0.ɵmpd(4608, i21.AnimationBuilder, i20.ɵBrowserAnimationBuilder, [i0.RendererFactory2,
            i18.DOCUMENT]), i0.ɵmpd(4608, i22.ɵi, i22.ɵi, []), i0.ɵmpd(5120, i23.ActivatedRoute, i23.ɵf, [i23.Router]), i0.ɵmpd(4608, i23.NoPreloading, i23.NoPreloading, []), i0.ɵmpd(6144, i23.PreloadingStrategy, null, [i23.NoPreloading]), i0.ɵmpd(135680, i23.RouterPreloader, i23.RouterPreloader, [i23.Router, i0.NgModuleFactoryLoader, i0.Compiler,
            i0.Injector, i23.PreloadingStrategy]), i0.ɵmpd(4608, i23.PreloadAllModules, i23.PreloadAllModules, []), i0.ɵmpd(5120, i23.ROUTER_INITIALIZER, i23.ɵi, [i23.ɵg]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) {
            return [p0_0];
        }, [i23.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i24.JournalService, i24.JournalService, [i14.Http]), i0.ɵmpd(512, i14.HttpModule, i14.HttpModule, []),
        i0.ɵmpd(512, i16.HttpClientXsrfModule, i16.HttpClientXsrfModule, []),
        i0.ɵmpd(512, i16.HttpClientModule, i16.HttpClientModule, []), i0.ɵmpd(512, i17.CommonModule, i17.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i18.ɵa, []), i0.ɵmpd(1024, i0.NgProbeToken, function () {
            return [i23.ɵb()];
        }, []), i0.ɵmpd(256, i0.APP_ID, 'anima', []), i0.ɵmpd(2048, i18.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(512, i23.ɵg, i23.ɵg, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p0_1, p1_0, p1_1, p1_2, p2_0, p3_0, p3_1, p3_2) {
            return [i18.ɵc(p0_0, p0_1), i18.ɵf(p1_0, p1_1, p1_2), i23.ɵh(p2_0), i18.ɵf(p3_0, p3_1, p3_2)];
        }, [[2, i18.NgProbeToken], [2, i0.NgProbeToken], i18.ɵTRANSITION_ID, i17.DOCUMENT,
            i0.Injector, i23.ɵg, i18.ɵTRANSITION_ID, i17.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]),
        i0.ɵmpd(131584, i0.ɵe, i0.ɵe, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler,
            i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(2048, i0.ApplicationRef, null, [i0.ɵe]), i0.ɵmpd(512, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(512, i18.BrowserModule, i18.BrowserModule, [[3, i18.BrowserModule]]), i0.ɵmpd(512, i20.NoopAnimationsModule, i20.NoopAnimationsModule, []), i0.ɵmpd(512, i15.ServerModule, i15.ServerModule, []), i0.ɵmpd(512, i22.ɵba, i22.ɵba, []),
        i0.ɵmpd(512, i22.FormsModule, i22.FormsModule, []), i0.ɵmpd(1024, i23.ɵa, i23.ɵd, [[3, i23.Router]]), i0.ɵmpd(512, i23.UrlSerializer, i23.DefaultUrlSerializer, []), i0.ɵmpd(512, i23.ChildrenOutletContexts, i23.ChildrenOutletContexts, []), i0.ɵmpd(256, i23.ROUTER_CONFIGURATION, {}, []),
        i0.ɵmpd(1024, i17.LocationStrategy, i23.ɵc, [i17.PlatformLocation, [2, i17.APP_BASE_HREF],
            i23.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i17.Location, i17.Location, [i17.LocationStrategy]),
        i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]),
        i0.ɵmpd(1024, i23.ROUTES, function () {
            return [[{ path: 'journal/:id', component: i25.ShowJournalComponent, children: [{ path: 'contents',
                                component: i26.ContentsComponent }, { path: 'show-entry/:id', component: i27.ShowEntryComponent },
                            { path: 'new-entry', component: i28.NewEntryComponent }] }], [{ path: '', component: i29.LandingPageComponent },
                    { path: 'sign-up', component: i30.SignUpComponent }, { path: 'log-in', component: i31.LogInComponent },
                    { path: 'all-journals', component: i32.AllJournalsComponent }, { path: 'new-journal',
                        component: i33.NewJournalComponent }, { path: 'user', component: i32.AllJournalsComponent },
                    { path: 'about', component: i34.AboutMeComponent }, { path: 'newentry', component: i28.NewEntryComponent },
                    { path: 'showjournal', component: i25.ShowJournalComponent }]];
        }, []), i0.ɵmpd(1024, i23.Router, i23.ɵe, [i0.ApplicationRef, i23.UrlSerializer,
            i23.ChildrenOutletContexts, i17.Location, i0.Injector, i0.NgModuleFactoryLoader,
            i0.Compiler, i23.ROUTES, i23.ROUTER_CONFIGURATION, [2, i23.UrlHandlingStrategy],
            [2, i23.RouteReuseStrategy]]), i0.ɵmpd(512, i23.RouterModule, i23.RouterModule, [[2, i23.ɵa], [2, i23.Router]]), i0.ɵmpd(512, i35.JournalRoutingModule, i35.JournalRoutingModule, []), i0.ɵmpd(512, i36.AppModule, i36.AppModule, []),
        i0.ɵmpd(512, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i16.ɵe, 'XSRF-TOKEN', []), i0.ɵmpd(256, i16.ɵf, 'X-XSRF-TOKEN', [])]);
});
//# sourceMappingURL=app.server.module.ngfactory.js.map