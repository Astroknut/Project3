"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./all-journals.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/common");
var i3 = require("@angular/router");
var i4 = require("../../../../../src/app/all-journals/all-journals.component");
var i5 = require("../../../../../src/app/journal.service");
var i6 = require("@angular/http");
var styles_AllJournalsComponent = [i0.styles];
exports.RenderType_AllJournalsComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_AllJournalsComponent, data: {} });
function View_AllJournalsComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 6, 'div', [['class',
                'journal']], [[4, 'background-color', null]], null, null, null, null)), i1.ɵdid(278528, null, 0, i2.NgClass, [i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i1.ɵpod({ 'selected': 0, 'invisible': 1 }), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵeld(0, null, null, 1, 'div', [['class',
                'journal-name']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n				', '\n			'])), (_l()(), i1.ɵted(null, ['\n		']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = 'journal';
        var currVal_2 = _ck(_v, 2, 0, _v.context.$implicit.selected, _co.visibleJournalLeft(_v.context.$implicit.id));
        _ck(_v, 1, 0, currVal_1, currVal_2);
    }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.color;
        _ck(_v, 0, 0, currVal_0);
        var currVal_3 = _v.context.$implicit.name;
        _ck(_v, 5, 0, currVal_3);
    });
}
function View_AllJournalsComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 11, 'div', [['class',
                'journal']], [[4, 'background-color', null]], null, null, null, null)), i1.ɵdid(278528, null, 0, i2.NgClass, [i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i1.ɵpod({ 'selected': 0 }), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵeld(0, null, null, 1, 'div', [['class',
                'journal-name']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n				', '\n			'])), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵeld(0, null, null, 3, 'button', [['class',
                'waves-effect waves-light btn purple lighten-2']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 8).onClick() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i3.RouterLink, [i3.Router, i3.ActivatedRoute, [8, null], i1.Renderer2, i1.ElementRef], { routerLink: [0, 'routerLink'] }, null), i1.ɵpad(3), (_l()(), i1.ɵted(null, ['Open'])), (_l()(), i1.ɵted(null, ['\n		']))], function (_ck, _v) {
        var currVal_1 = 'journal';
        var currVal_2 = _ck(_v, 2, 0, _v.context.$implicit.selected);
        _ck(_v, 1, 0, currVal_1, currVal_2);
        var currVal_4 = _ck(_v, 9, 0, '../journal', _v.context.$implicit.id, 'contents');
        _ck(_v, 8, 0, currVal_4);
    }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.color;
        _ck(_v, 0, 0, currVal_0);
        var currVal_3 = _v.context.$implicit.name;
        _ck(_v, 5, 0, currVal_3);
    });
}
function View_AllJournalsComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 6, 'div', [['class',
                'journal']], [[4, 'background-color', null]], null, null, null, null)), i1.ɵdid(278528, null, 0, i2.NgClass, [i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i1.ɵpod({ 'selected': 0, 'invisible': 1 }), (_l()(), i1.ɵted(null, ['\n			'])), (_l()(), i1.ɵeld(0, null, null, 1, 'div', [['class',
                'journal-name']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n				', '\n			'])), (_l()(), i1.ɵted(null, ['\n		']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = 'journal';
        var currVal_2 = _ck(_v, 2, 0, _v.context.$implicit.selected, _co.visibleJournalRight(_v.context.$implicit.id));
        _ck(_v, 1, 0, currVal_1, currVal_2);
    }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.color;
        _ck(_v, 0, 0, currVal_0);
        var currVal_3 = _v.context.$implicit.name;
        _ck(_v, 5, 0, currVal_3);
    });
}
function View_AllJournalsComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 7, 'p', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n   '])), (_l()(), i1.ɵeld(0, null, null, 4, 'a', [['class', 'btn-floating btn-large waves-effect waves-light red']], [[1,
                'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(671744, null, 0, i3.RouterLinkWithHref, [i3.Router, i3.ActivatedRoute, i2.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), i1.ɵpad(1), (_l()(), i1.ɵeld(0, null, null, 1, 'i', [['class', 'material-icons']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['add'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵeld(0, null, null, 32, 'div', [['class', 'journals-slider']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n	'])),
        (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'slider-button']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class', 'waves-effect waves-light btn purple lighten-2']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.cycleLeft() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['Left'])),
        (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n	'])),
        (_l()(), i1.ɵeld(0, null, null, 5, 'div', [['class', 'journals-left']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵted(null, ['\n		'])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AllJournalsComponent_1)),
        i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'journal-area']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AllJournalsComponent_2)), i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class',
                'journals-right']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_AllJournalsComponent_3)),
        i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class', 'slider-button']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n		'])), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class',
                'waves-effect waves-light btn purple lighten-2']], null, [[null,
                'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.cycleRight() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, ['Right'])), (_l()(),
            i1.ɵted(null, ['\n	'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(),
            i1.ɵted(null, ['\n\n\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _ck(_v, 4, 0, '../new-journal');
        _ck(_v, 3, 0, currVal_2);
        var currVal_3 = _co.journals_left;
        _ck(_v, 21, 0, currVal_3);
        var currVal_4 = _co.journals;
        _ck(_v, 27, 0, currVal_4);
        var currVal_5 = _co.journals_right;
        _ck(_v, 33, 0, currVal_5);
    }, function (_ck, _v) {
        var currVal_0 = i1.ɵnov(_v, 3).target;
        var currVal_1 = i1.ɵnov(_v, 3).href;
        _ck(_v, 2, 0, currVal_0, currVal_1);
    });
}
exports.View_AllJournalsComponent_0 = View_AllJournalsComponent_0;
function View_AllJournalsComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 2, 'app-all-journals', [], null, null, null, View_AllJournalsComponent_0, exports.RenderType_AllJournalsComponent)), i1.ɵprd(512, null, i5.JournalService, i5.JournalService, [i6.Http]), i1.ɵdid(114688, null, 0, i4.AllJournalsComponent, [i5.JournalService], null, null)], function (_ck, _v) {
        _ck(_v, 2, 0);
    }, null);
}
exports.View_AllJournalsComponent_Host_0 = View_AllJournalsComponent_Host_0;
exports.AllJournalsComponentNgFactory = i1.ɵccf('app-all-journals', i4.AllJournalsComponent, View_AllJournalsComponent_Host_0, {}, {}, []);
//# sourceMappingURL=all-journals.component.ngfactory.js.map