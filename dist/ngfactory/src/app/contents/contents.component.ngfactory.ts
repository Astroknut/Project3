/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './contents.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/router';
import * as i3 from '@angular/common';
import * as i4 from '../../../../../src/app/contents/contents.component';
import * as i5 from '../../../../../src/app/journal.service';
import * as i6 from '@angular/http';
const styles_ContentsComponent:any[] = [i0.styles];
export const RenderType_ContentsComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_ContentsComponent,data:{}});
function View_ContentsComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['','']))],(null as any),(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.journal.name;
    _ck(_v,1,0,currVal_0);
  });
}
function View_ContentsComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),6,'li',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['\n				',': ',''])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
      3,'a',([] as any[]),[[1,'target',0],[8,'href',4]],[[(null as any),'click']],
      (_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,3).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(671744,(null as any),0,i2.RouterLinkWithHref,
      [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
      (null as any)),i1.ɵpad(2),(_l()(),i1.ɵted((null as any),['Open'])),(_l()(),i1.ɵted((null as any),
      ['\n			']))],(_ck,_v) => {
    const currVal_4:any = _ck(_v,4,0,'../show-entry',_v.context.$implicit.id);
    _ck(_v,3,0,currVal_4);
  },(_ck,_v) => {
    const currVal_0:any = _v.context.$implicit.date;
    const currVal_1:any = _v.context.$implicit.blurb;
    _ck(_v,1,0,currVal_0,currVal_1);
    const currVal_2:any = i1.ɵnov(_v,3).target;
    const currVal_3:any = i1.ɵnov(_v,3).href;
    _ck(_v,2,0,currVal_2,currVal_3);
  });
}
function View_ContentsComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),4,'ul',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['\n			'])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),
      1,(null as any),View_ContentsComponent_4)),i1.ɵdid(802816,(null as any),0,i3.NgForOf,
      [i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],{ngForOf:[0,'ngForOf']},
      (null as any)),(_l()(),i1.ɵted((null as any),['\n		']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.journal.entries;
    _ck(_v,3,0,currVal_0);
  },(null as any));
}
function View_ContentsComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),7,'div',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['\n		'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
      1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted((null as any),['Table of Contents'])),(_l()(),
      i1.ɵted((null as any),['\n		'])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),
      1,(null as any),View_ContentsComponent_3)),i1.ɵdid(16384,(null as any),0,i3.NgIf,
      [i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),
      i1.ɵted((null as any),['\n		']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.journal;
    _ck(_v,6,0,currVal_0);
  },(null as any));
}
export function View_ContentsComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_ContentsComponent_1)),i1.ɵdid(16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),
      ['\n'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),17,'div',[['class','journal']],
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['\n	'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
      0,'div',[['class','left-page']],[[4,'background-color',(null as any)]],(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n	'])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),12,'div',[['class','right-page']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n		'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['New Entry'])),(_l()(),i1.ɵted((null as any),
          ['\n		'])),(_l()(),i1.ɵeld(0,(null as any),(null as any),3,'button',([] as any[]),
          (null as any),[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,13).onClick()) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(16384,(null as any),0,i2.RouterLink,
          [i2.Router,i2.ActivatedRoute,[8,(null as any)],i1.Renderer2,i1.ElementRef],
          {routerLink:[0,'routerLink']},(null as any)),i1.ɵpad(1),(_l()(),i1.ɵted((null as any),
          ['Write'])),(_l()(),i1.ɵted((null as any),['\n\n		'])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_ContentsComponent_2)),i1.ɵdid(16384,
          (null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i1.ɵted((null as any),['\n	'])),(_l()(),i1.ɵted((null as any),
          ['\n']))],(_ck,_v) => {
    var _co:i4.ContentsComponent = _v.component;
    const currVal_0:any = _co.journal;
    _ck(_v,1,0,currVal_0);
    const currVal_2:any = _ck(_v,14,0,'../new-entry');
    _ck(_v,13,0,currVal_2);
    const currVal_3:any = _co.journal.entries;
    _ck(_v,18,0,currVal_3);
  },(_ck,_v) => {
    var _co:i4.ContentsComponent = _v.component;
    const currVal_1:any = _co.journal.color;
    _ck(_v,5,0,currVal_1);
  });
}
export function View_ContentsComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),2,'app-contents',
      ([] as any[]),(null as any),(null as any),(null as any),View_ContentsComponent_0,
      RenderType_ContentsComponent)),i1.ɵprd(512,(null as any),i5.JournalService,i5.JournalService,
      [i6.Http]),i1.ɵdid(114688,(null as any),0,i4.ContentsComponent,[i2.ActivatedRoute,
      i5.JournalService],(null as any),(null as any))],(_ck,_v) => {
    _ck(_v,2,0);
  },(null as any));
}
export const ContentsComponentNgFactory:i1.ComponentFactory<i4.ContentsComponent> = i1.ɵccf('app-contents',
    i4.ContentsComponent,View_ContentsComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2NvcmV5L3dkaS91bml0LTMvUHJvamVjdDMvc3JjL2FwcC9jb250ZW50cy9jb250ZW50cy5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vVXNlcnMvY29yZXkvd2RpL3VuaXQtMy9Qcm9qZWN0My9zcmMvYXBwL2NvbnRlbnRzL2NvbnRlbnRzLmNvbXBvbmVudC50cyIsIm5nOi8vL1VzZXJzL2NvcmV5L3dkaS91bml0LTMvUHJvamVjdDMvc3JjL2FwcC9jb250ZW50cy9jb250ZW50cy5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL2NvcmV5L3dkaS91bml0LTMvUHJvamVjdDMvc3JjL2FwcC9jb250ZW50cy9jb250ZW50cy5jb21wb25lbnQudHMuQ29udGVudHNDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8aDMgKm5nSWY9XCJqb3VybmFsXCI+e3tqb3VybmFsLm5hbWV9fTwvaDM+XG48ZGl2IGNsYXNzPVwiam91cm5hbFwiPlxuXHQ8ZGl2IGNsYXNzPVwibGVmdC1wYWdlXCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiam91cm5hbC5jb2xvclwiPjwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwicmlnaHQtcGFnZVwiPlxuXHRcdDxoMz5OZXcgRW50cnk8L2gzPlxuXHRcdDxidXR0b24gW3JvdXRlckxpbmtdID0gXCJbJy4uL25ldy1lbnRyeSddXCI+V3JpdGU8L2J1dHRvbj5cblxuXHRcdDxkaXYgKm5nSWY9XCJqb3VybmFsLmVudHJpZXNcIj5cblx0XHQ8aDM+VGFibGUgb2YgQ29udGVudHM8L2gzPlxuXHRcdDx1bCAqbmdJZj1cImpvdXJuYWxcIj5cblx0XHRcdDxsaSAqbmdGb3I9XCJsZXQgZW50cnkgb2Ygam91cm5hbC5lbnRyaWVzXCI+XG5cdFx0XHRcdHt7ZW50cnkuZGF0ZX19OiB7e2VudHJ5LmJsdXJifX08YSBbcm91dGVyTGlua10gPSBcIlsnLi4vc2hvdy1lbnRyeScsIGVudHJ5LmlkXVwiPk9wZW48L2E+XG5cdFx0XHQ8L2xpPlxuXHRcdDwvdWw+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC9kaXY+IiwiPGFwcC1jb250ZW50cz48L2FwcC1jb250ZW50cz4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQ0FBO01BQUEsd0VBQW9CO2FBQUE7O0lBQUE7SUFBQTs7OztvQkFVakI7TUFBQSx3RUFBMEM7YUFBQSxvQ0FDVjtNQUFBO01BQUE7UUFBQTtRQUFBO1VBQUE7Y0FBQTtVQUFBO1FBQUE7UUFBQTtNQUFBLHVDQUFBO01BQUE7TUFBQSxzQkFBRyxJQUE2Qyx5Q0FBUTtNQUFBO0lBQXJEO0lBQUgsV0FBRyxTQUFIOztJQURVO0lBQUE7SUFBQTtJQUNWO0lBQUE7SUFBQSxXQUFBLG1CQUFBOzs7O29CQUZqQztNQUFBLHdFQUFvQjthQUFBLDJCQUNuQjtNQUFBLGtEQUFBO01BQUE7TUFBQSxlQUVLOztJQUZEO0lBQUosV0FBSSxTQUFKOzs7O29CQUhEO01BQUEsd0VBQTZCO2FBQUEsMEJBQzdCO01BQUE7TUFBQSxnQkFBSSxzREFBc0I7YUFBQSwwQkFDMUI7TUFBQSxrREFBQTtNQUFBLHNFQUlLO2FBQUE7O0lBSkQ7SUFBSixXQUFJLFNBQUo7Ozs7b0JBVEY7TUFBQSxrQ0FBQTtvQkFBQSxtQ0FBeUM7TUFBQSxTQUN6QztNQUFBLHdFQUFxQjthQUFBLHlCQUNwQjtNQUFBO01BQUEsNENBQXNFO01BQ3RFO1VBQUE7TUFBd0IseUNBQ3ZCO1VBQUE7VUFBQSxnQkFBSSw4Q0FBYztVQUFBLFdBQ2xCO1VBQUE7WUFBQTtZQUFBO2NBQUE7Y0FBQTtZQUFBO1lBQUE7VUFBQSx1Q0FBQTtVQUFBO1VBQUEsb0RBQVEsSUFBa0M7VUFBQSxZQUFjLDJDQUV4RDtVQUFBLDhFQUFBO1VBQUE7VUFBQSxlQU9NLHdDQUNEO1VBQUE7O0lBZkg7SUFBSixXQUFJLFNBQUo7SUFLVTtJQUFSLFlBQVEsU0FBUjtJQUVLO0lBQUwsWUFBSyxTQUFMOzs7SUFMc0I7SUFBdkIsV0FBdUIsU0FBdkI7Ozs7b0JDRkQ7TUFBQTtrQ0FBQTtNQUFBLGtCQUFBO3VCQUFBO0lBQUE7Ozs7In0=