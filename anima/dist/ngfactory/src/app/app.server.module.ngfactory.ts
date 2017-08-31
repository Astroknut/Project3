/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from '@angular/core';
import * as i1 from '../../../../src/app/app.server.module';
import * as i2 from '../../../../src/app/app.component';
import * as i3 from './show-journal/show-journal.component.ngfactory';
import * as i4 from './contents/contents.component.ngfactory';
import * as i5 from './show-entry/show-entry.component.ngfactory';
import * as i6 from './new-entry/new-entry.component.ngfactory';
import * as i7 from './landing-page/landing-page.component.ngfactory';
import * as i8 from './sign-up/sign-up.component.ngfactory';
import * as i9 from './log-in/log-in.component.ngfactory';
import * as i10 from './all-journals/all-journals.component.ngfactory';
import * as i11 from './new-journal/new-journal.component.ngfactory';
import * as i12 from './about-me/about-me.component.ngfactory';
import * as i13 from './app.component.ngfactory';
import * as i14 from '@angular/http';
import * as i15 from '@angular/platform-server';
import * as i16 from '@angular/common/http';
import * as i17 from '@angular/common';
import * as i18 from '@angular/platform-browser';
import * as i19 from '@angular/animations/browser';
import * as i20 from '@angular/platform-browser/animations';
import * as i21 from '@angular/animations';
import * as i22 from '@angular/forms';
import * as i23 from '@angular/router';
import * as i24 from '../../../../src/app/journal.service';
import * as i25 from '../../../../src/app/show-journal/show-journal.component';
import * as i26 from '../../../../src/app/contents/contents.component';
import * as i27 from '../../../../src/app/show-entry/show-entry.component';
import * as i28 from '../../../../src/app/new-entry/new-entry.component';
import * as i29 from '../../../../src/app/landing-page/landing-page.component';
import * as i30 from '../../../../src/app/sign-up/sign-up.component';
import * as i31 from '../../../../src/app/log-in/log-in.component';
import * as i32 from '../../../../src/app/all-journals/all-journals.component';
import * as i33 from '../../../../src/app/new-journal/new-journal.component';
import * as i34 from '../../../../src/app/about-me/about-me.component';
import * as i35 from '../../../../src/app/show-journal/journal-routing.module';
import * as i36 from '../../../../src/app/app.module';
export const AppServerModuleNgFactory:i0.NgModuleFactory<i1.AppServerModule> = i0.ɵcmf(i1.AppServerModule,
    [i2.AppComponent],(_l:any) => {
      return i0.ɵmod([i0.ɵmpd(512,i0.ComponentFactoryResolver,i0.ɵCodegenComponentFactoryResolver,
          [[8,[i3.ShowJournalComponentNgFactory,i4.ContentsComponentNgFactory,i5.ShowEntryComponentNgFactory,
              i6.NewEntryComponentNgFactory,i7.LandingPageComponentNgFactory,i8.SignUpComponentNgFactory,
              i9.LogInComponentNgFactory,i10.AllJournalsComponentNgFactory,i11.NewJournalComponentNgFactory,
              i12.AboutMeComponentNgFactory,i13.AppComponentNgFactory]],[3,i0.ComponentFactoryResolver],
              i0.NgModuleRef]),i0.ɵmpd(4608,i14.BrowserXhr,i15.ɵc,([] as any[])),i0.ɵmpd(4608,
          i14.ResponseOptions,i14.BaseResponseOptions,([] as any[])),i0.ɵmpd(4608,
          i14.XSRFStrategy,i15.ɵd,([] as any[])),i0.ɵmpd(4608,i14.XHRBackend,i14.XHRBackend,
          [i14.BrowserXhr,i14.ResponseOptions,i14.XSRFStrategy]),i0.ɵmpd(4608,i14.RequestOptions,
          i14.BaseRequestOptions,([] as any[])),i0.ɵmpd(5120,i14.Http,i15.ɵe,[i14.XHRBackend,
          i14.RequestOptions]),i0.ɵmpd(4608,i16.HttpXsrfTokenExtractor,i16.ɵg,[i17.DOCUMENT,
          i0.PLATFORM_ID,i16.ɵe]),i0.ɵmpd(4608,i16.ɵh,i16.ɵh,[i16.HttpXsrfTokenExtractor,
          i16.ɵf]),i0.ɵmpd(5120,i16.HTTP_INTERCEPTORS,(p0_0:any) => {
        return [p0_0];
      },[i16.ɵh]),i0.ɵmpd(4608,i16.XhrFactory,i15.ɵc,([] as any[])),i0.ɵmpd(4608,i16.HttpXhrBackend,
          i16.HttpXhrBackend,[i16.XhrFactory]),i0.ɵmpd(6144,i16.HttpBackend,(null as any),
          [i16.HttpXhrBackend]),i0.ɵmpd(5120,i16.HttpHandler,i15.ɵf,[i16.HttpBackend,
          [2,i16.HTTP_INTERCEPTORS]]),i0.ɵmpd(4608,i16.HttpClient,i16.HttpClient,[i16.HttpHandler]),
          i0.ɵmpd(4608,i16.ɵd,i16.ɵd,([] as any[])),i0.ɵmpd(5120,i0.LOCALE_ID,i0.ɵm,
              [[3,i0.LOCALE_ID]]),i0.ɵmpd(4608,i17.NgLocalization,i17.NgLocaleLocalization,
              [i0.LOCALE_ID]),i0.ɵmpd(5120,i0.IterableDiffers,i0.ɵk,([] as any[])),
          i0.ɵmpd(5120,i0.KeyValueDiffers,i0.ɵl,([] as any[])),i0.ɵmpd(4608,i18.DomSanitizer,
              i18.ɵe,[i17.DOCUMENT]),i0.ɵmpd(6144,i0.Sanitizer,(null as any),[i18.DomSanitizer]),
          i0.ɵmpd(4608,i18.HAMMER_GESTURE_CONFIG,i18.HammerGestureConfig,([] as any[])),
          i0.ɵmpd(5120,i18.EVENT_MANAGER_PLUGINS,(p0_0:any,p1_0:any,p2_0:any,p2_1:any) => {
            return [new i18.ɵDomEventsPlugin(p0_0),new i18.ɵKeyEventsPlugin(p1_0),
                new i18.ɵHammerGesturesPlugin(p2_0,p2_1)];
          },[i17.DOCUMENT,i17.DOCUMENT,i17.DOCUMENT,i18.HAMMER_GESTURE_CONFIG]),i0.ɵmpd(4608,
              i18.EventManager,i18.EventManager,[i18.EVENT_MANAGER_PLUGINS,i0.NgZone]),
          i0.ɵmpd(135680,i18.ɵDomSharedStylesHost,i18.ɵDomSharedStylesHost,[i17.DOCUMENT]),
          i0.ɵmpd(4608,i18.ɵDomRendererFactory2,i18.ɵDomRendererFactory2,[i18.EventManager,
              i18.ɵDomSharedStylesHost]),i0.ɵmpd(4608,i15.ɵb,i15.ɵb,[i18.DOCUMENT,
              [2,i18.ɵTRANSITION_ID]]),i0.ɵmpd(6144,i18.ɵSharedStylesHost,(null as any),
              [i15.ɵb]),i0.ɵmpd(4608,i15.ɵServerRendererFactory2,i15.ɵServerRendererFactory2,
              [i0.NgZone,i18.DOCUMENT,i18.ɵSharedStylesHost]),i0.ɵmpd(4608,i19.AnimationDriver,
              i19.ɵNoopAnimationDriver,([] as any[])),i0.ɵmpd(5120,i19.ɵAnimationStyleNormalizer,
              i20.ɵd,([] as any[])),i0.ɵmpd(4608,i19.ɵAnimationEngine,i20.ɵb,[i19.AnimationDriver,
              i19.ɵAnimationStyleNormalizer]),i0.ɵmpd(5120,i0.RendererFactory2,i15.ɵa,
              [i15.ɵServerRendererFactory2,i19.ɵAnimationEngine,i0.NgZone]),i0.ɵmpd(4352,
              i0.Testability,(null as any),([] as any[])),i0.ɵmpd(4608,i18.Meta,i18.Meta,
              [i17.DOCUMENT]),i0.ɵmpd(4608,i18.Title,i18.Title,[i17.DOCUMENT]),i0.ɵmpd(4608,
              i21.AnimationBuilder,i20.ɵBrowserAnimationBuilder,[i0.RendererFactory2,
                  i18.DOCUMENT]),i0.ɵmpd(4608,i22.ɵi,i22.ɵi,([] as any[])),i0.ɵmpd(5120,
              i23.ActivatedRoute,i23.ɵf,[i23.Router]),i0.ɵmpd(4608,i23.NoPreloading,
              i23.NoPreloading,([] as any[])),i0.ɵmpd(6144,i23.PreloadingStrategy,
              (null as any),[i23.NoPreloading]),i0.ɵmpd(135680,i23.RouterPreloader,
              i23.RouterPreloader,[i23.Router,i0.NgModuleFactoryLoader,i0.Compiler,
                  i0.Injector,i23.PreloadingStrategy]),i0.ɵmpd(4608,i23.PreloadAllModules,
              i23.PreloadAllModules,([] as any[])),i0.ɵmpd(5120,i23.ROUTER_INITIALIZER,
              i23.ɵi,[i23.ɵg]),i0.ɵmpd(5120,i0.APP_BOOTSTRAP_LISTENER,(p0_0:any) => {
            return [p0_0];
          },[i23.ROUTER_INITIALIZER]),i0.ɵmpd(4608,i24.JournalService,i24.JournalService,
              [i14.Http]),i0.ɵmpd(512,i14.HttpModule,i14.HttpModule,([] as any[])),
          i0.ɵmpd(512,i16.HttpClientXsrfModule,i16.HttpClientXsrfModule,([] as any[])),
          i0.ɵmpd(512,i16.HttpClientModule,i16.HttpClientModule,([] as any[])),i0.ɵmpd(512,
              i17.CommonModule,i17.CommonModule,([] as any[])),i0.ɵmpd(1024,i0.ErrorHandler,
              i18.ɵa,([] as any[])),i0.ɵmpd(1024,i0.NgProbeToken,() => {
            return [i23.ɵb()];
          },([] as any[])),i0.ɵmpd(256,i0.APP_ID,'anima',([] as any[])),i0.ɵmpd(2048,
              i18.ɵTRANSITION_ID,(null as any),[i0.APP_ID]),i0.ɵmpd(512,i23.ɵg,i23.ɵg,
              [i0.Injector]),i0.ɵmpd(1024,i0.APP_INITIALIZER,(p0_0:any,p0_1:any,p1_0:any,
              p1_1:any,p1_2:any,p2_0:any) => {
            return [i18.ɵc(p0_0,p0_1),i18.ɵf(p1_0,p1_1,p1_2),i23.ɵh(p2_0)];
          },[[2,i18.NgProbeToken],[2,i0.NgProbeToken],i18.ɵTRANSITION_ID,i17.DOCUMENT,
              i0.Injector,i23.ɵg]),i0.ɵmpd(512,i0.ApplicationInitStatus,i0.ApplicationInitStatus,
              [[2,i0.APP_INITIALIZER]]),i0.ɵmpd(131584,i0.ɵe,i0.ɵe,[i0.NgZone,i0.ɵConsole,
              i0.Injector,i0.ErrorHandler,i0.ComponentFactoryResolver,i0.ApplicationInitStatus]),
          i0.ɵmpd(2048,i0.ApplicationRef,(null as any),[i0.ɵe]),i0.ɵmpd(512,i0.ApplicationModule,
              i0.ApplicationModule,[i0.ApplicationRef]),i0.ɵmpd(512,i18.BrowserModule,
              i18.BrowserModule,[[3,i18.BrowserModule]]),i0.ɵmpd(512,i20.NoopAnimationsModule,
              i20.NoopAnimationsModule,([] as any[])),i0.ɵmpd(512,i15.ServerModule,
              i15.ServerModule,([] as any[])),i0.ɵmpd(512,i22.ɵba,i22.ɵba,([] as any[])),
          i0.ɵmpd(512,i22.FormsModule,i22.FormsModule,([] as any[])),i0.ɵmpd(1024,
              i23.ɵa,i23.ɵd,[[3,i23.Router]]),i0.ɵmpd(512,i23.UrlSerializer,i23.DefaultUrlSerializer,
              ([] as any[])),i0.ɵmpd(512,i23.ChildrenOutletContexts,i23.ChildrenOutletContexts,
              ([] as any[])),i0.ɵmpd(256,i23.ROUTER_CONFIGURATION,{},([] as any[])),
          i0.ɵmpd(1024,i17.LocationStrategy,i23.ɵc,[i17.PlatformLocation,[2,i17.APP_BASE_HREF],
              i23.ROUTER_CONFIGURATION]),i0.ɵmpd(512,i17.Location,i17.Location,[i17.LocationStrategy]),
          i0.ɵmpd(512,i0.Compiler,i0.Compiler,([] as any[])),i0.ɵmpd(512,i0.NgModuleFactoryLoader,
              i0.SystemJsNgModuleLoader,[i0.Compiler,[2,i0.SystemJsNgModuleLoaderConfig]]),
          i0.ɵmpd(1024,i23.ROUTES,() => {
            return [[{path:'journal/:id',component:i25.ShowJournalComponent,children:[{path:'contents',
                component:i26.ContentsComponent},{path:'show-entry/:id',component:i27.ShowEntryComponent},
                {path:'new-entry',component:i28.NewEntryComponent}]}],[{path:'',component:i29.LandingPageComponent},
                {path:'sign-up',component:i30.SignUpComponent},{path:'log-in',component:i31.LogInComponent},
                {path:'all-journals',component:i32.AllJournalsComponent},{path:'new-journal',
                    component:i33.NewJournalComponent},{path:'user',component:i32.AllJournalsComponent},
                {path:'about',component:i34.AboutMeComponent}]];
          },([] as any[])),i0.ɵmpd(1024,i23.Router,i23.ɵe,[i0.ApplicationRef,i23.UrlSerializer,
              i23.ChildrenOutletContexts,i17.Location,i0.Injector,i0.NgModuleFactoryLoader,
              i0.Compiler,i23.ROUTES,i23.ROUTER_CONFIGURATION,[2,i23.UrlHandlingStrategy],
              [2,i23.RouteReuseStrategy]]),i0.ɵmpd(512,i23.RouterModule,i23.RouterModule,
              [[2,i23.ɵa],[2,i23.Router]]),i0.ɵmpd(512,i35.JournalRoutingModule,i35.JournalRoutingModule,
              ([] as any[])),i0.ɵmpd(512,i36.AppModule,i36.AppModule,([] as any[])),
          i0.ɵmpd(512,i1.AppServerModule,i1.AppServerModule,([] as any[])),i0.ɵmpd(256,
              i16.ɵe,'XSRF-TOKEN',([] as any[])),i0.ɵmpd(256,i16.ɵf,'X-XSRF-TOKEN',
              ([] as any[]))]);
    });
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2NvcmV5L3dkaS91bml0LTMvUHJvamVjdDMvYW5pbWEvc3JjL2FwcC9hcHAuc2VydmVyLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9jb3JleS93ZGkvdW5pdC0zL1Byb2plY3QzL2FuaW1hL3NyYy9hcHAvYXBwLnNlcnZlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
