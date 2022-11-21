var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"fr"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};const u=undefined;function plural(val){const n=val,i=Math.floor(Math.abs(val)),v=val.toString().replace(/^[^.]*\.?/,"").length,e=parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/,"$2"))||0;if(i===0||i===1)return 1;if(e===0&&!(i===0)&&i%1000000===0&&v===0||!(e>=0&&e<=5))return 4;return 5}global.ng.common.locales["fr"]=["fr",[["AM","PM"],u,u],u,[["D","L","M","M","J","V","S"],["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"],["di","lu","ma","me","je","ve","sa"]],u,[["J","F","M","A","M","J","J","A","S","O","N","D"],["janv.","f\xE9vr.","mars","avr.","mai","juin","juil.","ao\xFBt","sept.","oct.","nov.","d\xE9c."],["janvier","f\xE9vrier","mars","avril","mai","juin","juillet","ao\xFBt","septembre","octobre","novembre","d\xE9cembre"]],u,[["av. J.-C.","ap. J.-C."],u,["avant J\xE9sus-Christ","apr\xE8s J\xE9sus-Christ"]],1,[6,0],["dd/MM/y","d MMM y","d MMMM y","EEEE d MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1} {0}","{1}, {0}","{1} '\xE0' {0}",u],[",","\u202F",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0\xA0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{"ARS":["$AR","$"],"AUD":["$AU","$"],"BEF":["FB"],"BMD":["$BM","$"],"BND":["$BN","$"],"BYN":[u,"\u0440."],"BZD":["$BZ","$"],"CAD":["$CA","$"],"CLP":["$CL","$"],"CNY":[u,"\xA5"],"COP":["$CO","$"],"CYP":["\xA3CY"],"EGP":[u,"\xA3E"],"FJD":["$FJ","$"],"FKP":["\xA3FK","\xA3"],"FRF":["F"],"GBP":["\xA3GB","\xA3"],"GIP":["\xA3GI","\xA3"],"HKD":[u,"$"],"IEP":["\xA3IE"],"ILP":["\xA3IL"],"ITL":["\u20A4IT"],"JPY":[u,"\xA5"],"KMF":[u,"FC"],"LBP":["\xA3LB","\xA3L"],"MTP":["\xA3MT"],"MXN":["$MX","$"],"NAD":["$NA","$"],"NIO":[u,"$C"],"NZD":["$NZ","$"],"PHP":[u,"\u20B1"],"RHD":["$RH"],"RON":[u,"L"],"RWF":[u,"FR"],"SBD":["$SB","$"],"SGD":["$SG","$"],"SRD":["$SR","$"],"TOP":[u,"$T"],"TTD":["$TT","$"],"TWD":[u,"NT$"],"USD":["$US","$"],"UYU":["$UY","$"],"WST":["$WS"],"XCD":[u,"$"],"XPF":["FCFP"],"ZMW":[u,"Kw"]},"ltr",plural,[[["minuit","midi","mat.","ap.m.","soir","nuit"],u,["minuit","midi","du matin","de l\u2019apr\xE8s-midi","du soir","du matin"]],[["minuit","midi","mat.","ap.m.","soir","nuit"],u,["minuit","midi","matin","apr\xE8s-midi","soir","nuit"]],["00:00","12:00",["04:00","12:00"],["12:00","18:00"],["18:00","24:00"],["00:00","04:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;
"use strict";
(self["webpackChunkmathtrainer"] = self["webpackChunkmathtrainer"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _workout_panel_workout_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workout-panel/workout-panel.component */ 5085);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _problem_panel_problem_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./problem-panel/problem-panel.component */ 3379);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);
/* harmony import */ var _test_features_test_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-features/test-features.component */ 1855);
/* harmony import */ var _test_features_display_test_display_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-features/display-test/display-test.component */ 7427);
/* harmony import */ var _test_features_inputtest_input_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-features/inputtest/input-test.component */ 4711);
/* harmony import */ var _multiplication_table_multiplication_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multiplication-table/multiplication-table.component */ 6162);
/* harmony import */ var _test_features_test_palette_test_palette_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test-features/test-palette/test-palette.component */ 6459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












const appRoutes = [{
  path: 'workout',
  component: _workout_panel_workout_panel_component__WEBPACK_IMPORTED_MODULE_0__.WorkoutPanelComponent
}, {
  path: 'problems',
  component: _problem_panel_problem_panel_component__WEBPACK_IMPORTED_MODULE_2__.ProblemPanelComponent
}, {
  path: 'test',
  component: _test_features_test_features_component__WEBPACK_IMPORTED_MODULE_4__.TestFeaturesComponent
}, {
  path: 'test1',
  component: _test_features_inputtest_input_test_component__WEBPACK_IMPORTED_MODULE_6__.InputTestComponent
}, {
  path: 'test2',
  component: _test_features_display_test_display_test_component__WEBPACK_IMPORTED_MODULE_5__.DisplayTestComponent
}, {
  path: 'test3',
  component: _test_features_test_palette_test_palette_component__WEBPACK_IMPORTED_MODULE_8__.TestPaletteComponent
}, {
  path: 'multiplicationtable',
  component: _multiplication_table_multiplication_table_component__WEBPACK_IMPORTED_MODULE_7__.MultiplicationTableComponent
}, {
  path: 'additiontable',
  component: _multiplication_table_multiplication_table_component__WEBPACK_IMPORTED_MODULE_7__.MultiplicationTableComponent
}, {
  path: '',
  component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__.MainPageComponent
}, {
  path: '**',
  component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(appRoutes, {
      enableTracing: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/config */ 5908);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/config.service */ 946);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);














function AppComponent_a_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const loc_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "../", loc_r8.code, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", loc_r8.label, " ");
  }
}
function AppComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "mat-radio-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const theme_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", theme_r9.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](theme_r9.label);
  }
}
function AppComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "mat-radio-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const orientation_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", orientation_r10.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](orientation_r10.label);
  }
}
class AppComponent {
  constructor(configSrv, router, locale) {
    this.configSrv = configSrv;
    this.router = router;
    this.locale = locale;
    this.previoustheme = null;
    //currentTheme: string = null;
    this.myname = "myname";
    this.equationOrientations = _services_config__WEBPACK_IMPORTED_MODULE_0__.EquationOrientations;
    this.myEventSubscriptions = [];
    this.themes = [{
      value: 'default-theme',
      label: "Default"
    }, {
      value: 'dark-theme',
      label: "Dark"
    }, {
      value: 'light-theme',
      label: "Light"
    }, {
      value: 'deeppurple-amber',
      label: "Deep Purple & Amber"
    }, {
      value: 'indigo-pink',
      label: "Indigo & Pink"
    }, {
      value: 'pink-bluegrey',
      label: "Pink & Blue-grey"
    }, {
      value: 'purple-green',
      label: "Purple & Green"
    }, {
      value: 'candy',
      label: "Pumpkin"
    }];
    this.localesList = [{
      code: 'en-US',
      label: 'English'
    }, {
      code: 'fr',
      label: 'Français'
    }];
    this.localeLabel = this.localesList.find(loc => loc.code == this.locale).label;
  }
  ngOnInit() {
    this.myEventSubscriptions.push(this.configSrv.subscribe({
      next: cfgi => {
        this.config = cfgi.config;
        this.setTheme();
      }
    }));
  }
  ngOnDestroy() {
    this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());
  }
  setTheme() {
    if (this.previoustheme == this.config.theme) {
      return;
    }
    document.body.classList.remove(this.previoustheme);
    document.body.classList.add(this.config.theme);
    this.previoustheme = this.config.theme;
  }
  menuThemeRadioChange(event) {
    console.log(event);
    //console.log(`currentTheme: ${this.currentTheme}`);
    //this.currentTheme = event.value
    this.configSrv.next(this.config, false);
    this.setTheme();
  }
  realTimeValidationChange(event) {
    this.configSrv.next(this.config, false);
  }
  menuEquationOrientationChange() {
    this.configSrv.next(this.config, false);
  }
  getAnimationData(outlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  goHome() {
    this.router.navigate(['/']);
  }
  goMultiplicationTable() {
    this.router.navigate(['/multiplicationtable']);
  }
  goAdditionTable() {
    this.router.navigate(['/additiontable']);
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.LOCALE_ID));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 50,
    vars: 11,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_title$$SRC_APP_APP_COMPONENT_TS_1 = goog.getMsg("Trainer for Camellia");
        i18n_0 = MSG_EXTERNAL_title$$SRC_APP_APP_COMPONENT_TS_1;
      } else {
        i18n_0 = "Pratique pour Camellia";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc enter page
         */
        const MSG_EXTERNAL_home$$SRC_APP_APP_COMPONENT_TS_3 = goog.getMsg("Home");
        i18n_2 = MSG_EXTERNAL_home$$SRC_APP_APP_COMPONENT_TS_3;
      } else {
        i18n_2 = "Accueil";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc menu
         */
        const MSG_EXTERNAL_additionTable$$SRC_APP_APP_COMPONENT_TS_5 = goog.getMsg("Addition Table");
        i18n_4 = MSG_EXTERNAL_additionTable$$SRC_APP_APP_COMPONENT_TS_5;
      } else {
        i18n_4 = "Table d'addition";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc menu
         */
        const MSG_EXTERNAL_multiplicationTable$$SRC_APP_APP_COMPONENT_TS_7 = goog.getMsg("Multiplication Table");
        i18n_6 = MSG_EXTERNAL_multiplicationTable$$SRC_APP_APP_COMPONENT_TS_7;
      } else {
        i18n_6 = "Table de multiplication";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc colour themes
         */
        const MSG_EXTERNAL_themes$$SRC_APP_APP_COMPONENT_TS_9 = goog.getMsg("Themes");
        i18n_8 = MSG_EXTERNAL_themes$$SRC_APP_APP_COMPONENT_TS_9;
      } else {
        i18n_8 = "Th\xE8mes";
      }
      return [["color", "primary"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], i18n_0, [1, "example-fill-remaining-space"], ["mat-button", "", 3, "matMenuTriggerFor"], ["id", "contentPanel"], ["routerOutlet", "outlet"], ["menuLang", "matMenu"], ["mat-menu-item", "", 3, "href", 4, "ngFor", "ngForOf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], i18n_2, i18n_4, i18n_6, ["mat-menu-item", "", 3, "matMenuTriggerFor"], i18n_8, ["labelPosition", "before", 1, "mat-menu-item", 3, "ngModel", "ngModelChange", "change"], ["menuTheme", "matMenu"], ["aria-label", "Select an option", 1, "menu-radio-group", 3, "ngModel", "ngModelChange", "change"], ["mat-menu-item", "", 4, "ngFor", "ngForOf"], ["menuEquationOrientation", "matMenu"], ["mat-menu-item", "", 3, "href"], ["mat-menu-item", ""], [3, "value"]];
    },
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "button", 1)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](5, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4)(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "language");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "router-outlet", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-menu", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AppComponent_a_16_Template, 2, 2, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-menu", null, 9)(19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_19_listener() {
          return ctx.goHome();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](23, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_25_listener() {
          return ctx.goAdditionTable();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](27, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_28_listener() {
          return ctx.goMultiplicationTable();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](30, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 14)(33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "color_lens");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](36, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 14)(38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Equation Orientation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_40_listener($event) {
          return ctx.config.realTimeValidation = $event;
        })("change", function AppComponent_Template_mat_checkbox_change_40_listener($event) {
          return ctx.realTimeValidationChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Realtime Validation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-menu", null, 17)(44, "mat-radio-group", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_radio_group_ngModelChange_44_listener($event) {
          return ctx.config.theme = $event;
        })("change", function AppComponent_Template_mat_radio_group_change_44_listener($event) {
          return ctx.menuThemeRadioChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, AppComponent_div_45_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-menu", null, 20)(48, "mat-radio-group", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_mat_radio_group_ngModelChange_48_listener($event) {
          return ctx.config.orientation = $event;
        })("change", function AppComponent_Template_mat_radio_group_change_48_listener() {
          return ctx.menuEquationOrientationChange();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, AppComponent_div_49_Template, 3, 2, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](43);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.localeLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.localesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.config.realTimeValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.config.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.themes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.config.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.equationOrientations);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbar],
    styles: [".example-fill-remaining-space[_ngcontent-%COMP%] {\n  \n  flex: 1 1 auto;\n}\n\n#contentPanel[_ngcontent-%COMP%] {\n  padding: 2em;\n}\n\n.menu-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n\nsection[_ngcontent-%COMP%] {\n  display: table;\n  margin: 8px;\n}\n\n.example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\n.example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: table-cell;\n  margin-right: 8px;\n}\n\n.example-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 480px;\n}\n\n.example-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n/*# sourceURL=webpack://./src/app/app.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7bURBQUE7RUFFQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7Ozs7OztDQUFBO0FBT0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0U7RUFDRSxtQkFBQTtBQUVKOztBQUNFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuI2NvbnRlbnRQYW5lbCB7XG4gIHBhZGRpbmc6IDJlbTtcbn1cblxuLm1lbnUtcmFkaW8tZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDE1cHggMDtcbn1cblxuLypcbi5tZW51LXJhZGlvLWJ1dHRvbiB7XG4gIC8vbWFyZ2luOiA1cHg7XG4gIC8vcGFkZGluZzogMCAxNnB4O1xuICAvL2hlaWdodDogNDhweDtcbn1cbiovXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbjogOHB4O1xufVxuXG4uZXhhbXBsZS1sYWJlbCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4uZXhhbXBsZS1idXR0b24tcm93IHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLXJvdyBidXR0b24ge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmV4YW1wbGUtZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA0ODBweDtcbn1cblxuLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTIwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _math_question_math_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math-question/math-question.component */ 2537);
/* harmony import */ var _problem_panel_problem_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./problem-panel/problem-panel.component */ 3379);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _config_dialog_opener_config_dialog_opener_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-dialog-opener/config-dialog-opener.component */ 6718);
/* harmony import */ var _config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config-dialog/config-dialog.component */ 2407);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/config.service */ 946);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/a11y */ 4218);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/clipboard */ 6079);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 7727);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/cdk/portal */ 7520);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/cdk/scrolling */ 6328);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/stepper */ 1861);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/table */ 9673);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/tree */ 5183);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/autocomplete */ 8550);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/badge */ 3335);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 4865);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/stepper */ 4193);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/datepicker */ 2298);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/divider */ 1528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/expansion */ 7591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/grid-list */ 2642);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1708);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/slide-toggle */ 4714);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/sort */ 2197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/tree */ 3453);
/* harmony import */ var _config_dialog_ranges_config_dialog_ranges_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config-dialog-ranges/config-dialog-ranges.component */ 3473);
/* harmony import */ var _form_panel_form_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-panel/form-panel.component */ 5401);
/* harmony import */ var _workout_panel_workout_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workout-panel/workout-panel.component */ 5085);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 439);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-page/main-page.component */ 2627);
/* harmony import */ var _array_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array-filter.pipe */ 9779);
/* harmony import */ var _test_features_test_features_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./test-features/test-features.component */ 1855);
/* harmony import */ var _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./column-answer/column-answer.component */ 663);
/* harmony import */ var _test_features_display_test_display_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./test-features/display-test/display-test.component */ 7427);
/* harmony import */ var _test_features_inputtest_input_test_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./test-features/inputtest/input-test.component */ 4711);
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ 3369);
/* harmony import */ var _main_page_main_tabs_series_main_tabs_series_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main-page/main-tabs-series/main-tabs-series.component */ 2273);
/* harmony import */ var _multiplication_table_multiplication_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./multiplication-table/multiplication-table.component */ 6162);
/* harmony import */ var _test_features_test_palette_test_palette_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./test-features/test-palette/test-palette.component */ 6459);
/* harmony import */ var _main_page_main_tabs_programs_main_tabs_programs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main-page/main-tabs-programs/main-tabs-programs.component */ 4633);
/* harmony import */ var _main_page_main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main-page/main-buttons/main-buttons.component */ 73);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 2560);








































































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({
    providers: [_services_config_service__WEBPACK_IMPORTED_MODULE_6__.ConfigService],
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__.BrowserAnimationsModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__.A11yModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_29__.ClipboardModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_30__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_31__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_32__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_34__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_35__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_36__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_38__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_39__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_40__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_42__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_43__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_44__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_45__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_46__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_47__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_48__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_49__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_50__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_51__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_52__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_53__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_54__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_55__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_56__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_52__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_57__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_58__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_59__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_60__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_61__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_62__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_63__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_64__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_65__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_66__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_67__.MatTreeModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_68__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_69__.ScrollingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _math_question_math_question_component__WEBPACK_IMPORTED_MODULE_2__.MathQuestionComponent, _problem_panel_problem_panel_component__WEBPACK_IMPORTED_MODULE_3__.ProblemPanelComponent, _config_dialog_opener_config_dialog_opener_component__WEBPACK_IMPORTED_MODULE_4__.ConfigDialogOpenerComponent, _config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ConfigDialogComponent, _config_dialog_ranges_config_dialog_ranges_component__WEBPACK_IMPORTED_MODULE_7__.ConfigDialogRangesComponent, _form_panel_form_panel_component__WEBPACK_IMPORTED_MODULE_8__.FormPanelComponent, _workout_panel_workout_panel_component__WEBPACK_IMPORTED_MODULE_9__.WorkoutPanelComponent, _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__.PageNotFoundComponent, _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__.MainPageComponent, _array_filter_pipe__WEBPACK_IMPORTED_MODULE_12__.ArrayFilterPipe, _test_features_test_features_component__WEBPACK_IMPORTED_MODULE_13__.TestFeaturesComponent, _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_14__.ColumnAnswerComponent, _test_features_display_test_display_test_component__WEBPACK_IMPORTED_MODULE_15__.DisplayTestComponent, _test_features_inputtest_input_test_component__WEBPACK_IMPORTED_MODULE_16__.InputTestComponent, _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_17__.ProgressBarComponent, _main_page_main_tabs_series_main_tabs_series_component__WEBPACK_IMPORTED_MODULE_18__.MainTabsSeriesComponent, _multiplication_table_multiplication_table_component__WEBPACK_IMPORTED_MODULE_19__.MultiplicationTableComponent, _test_features_test_palette_test_palette_component__WEBPACK_IMPORTED_MODULE_20__.TestPaletteComponent, _main_page_main_tabs_programs_main_tabs_programs_component__WEBPACK_IMPORTED_MODULE_21__.MainTabsProgramsComponent, _problem_panel_problem_panel_component__WEBPACK_IMPORTED_MODULE_3__.ProblemPanelComponentDialog, _main_page_main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_22__.MainButtonsComponent],
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_25__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_27__.BrowserAnimationsModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_28__.A11yModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_29__.ClipboardModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_30__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_31__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_32__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_33__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_34__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_35__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_36__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_37__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_38__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_39__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_40__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_41__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_42__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_43__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_44__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_45__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_46__.MatExpansionModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_47__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_48__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_49__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_50__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_51__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_52__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_53__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_54__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_55__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_56__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_52__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_57__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_58__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_59__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_60__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_61__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_62__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_63__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_64__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_65__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_66__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_67__.MatTreeModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_68__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_69__.ScrollingModule]
  });
})();

/***/ }),

/***/ 9779:
/*!**************************************!*\
  !*** ./src/app/array-filter.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayFilterPipe": () => (/* binding */ ArrayFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ArrayFilterPipe {
  transform(items, callback, ...args) {
    if (!items || !callback) {
      return items;
    }
    return items.filter(item => callback(item, ...args));
  }
  static #_ = this.ɵfac = function ArrayFilterPipe_Factory(t) {
    return new (t || ArrayFilterPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "arrayFilter",
    type: ArrayFilterPipe,
    pure: true
  });
}

/***/ }),

/***/ 663:
/*!**********************************************************!*\
  !*** ./src/app/column-answer/column-answer.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ANSWER_MODES": () => (/* binding */ ANSWER_MODES),
/* harmony export */   "ColumnAnswerComponent": () => (/* binding */ ColumnAnswerComponent),
/* harmony export */   "ColumnAnswerMode": () => (/* binding */ ColumnAnswerMode),
/* harmony export */   "FocusType": () => (/* binding */ FocusType)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/math-question.service */ 6819);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4522);









const _c0 = ["columninput"];
function ColumnAnswerComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function ColumnAnswerComponent_ng_template_3_input_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ColumnAnswerComponent_ng_template_3_input_1_Template_input_ngModelChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const i_r7 = restoredCtx.index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r10.userInputs[i_r7].value = $event);
    })("keydown", function ColumnAnswerComponent_ng_template_3_input_1_Template_input_keydown_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const i_r7 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r12.onKeydown($event, i_r7));
    })("ngModelChange", function ColumnAnswerComponent_ng_template_3_input_1_Template_input_ngModelChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const i_r7 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r13.modelChangeFn($event, i_r7));
    })("focus", function ColumnAnswerComponent_ng_template_3_input_1_Template_input_focus_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const i_r7 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r14.onFocusColumns($event, i_r7));
    })("blur", function ColumnAnswerComponent_ng_template_3_input_1_Template_input_blur_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);
      const i_r7 = restoredCtx.index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.onBlurColumns($event, i_r7));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r5.userInputs[i_r7].value)("tabindex", ctx_r5.userInputs[i_r7].tabindex)("placeholder", ctx_r5.userInputs[i_r7].placeholder)("@answerStatus", ctx_r5.answerStatus);
  }
}
function ColumnAnswerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ColumnAnswerComponent_ng_template_3_input_1_Template, 2, 4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.userInputs)("ngForTrackBy", ctx_r2.trackByIdx);
  }
}
const _c1 = function (a0) {
  return {
    "width.rem": a0
  };
};
function ColumnAnswerComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 9, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ColumnAnswerComponent_ng_template_5_Template_input_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.modelChangeNormal($event));
    })("keydown", function ColumnAnswerComponent_ng_template_5_Template_input_keydown_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.onKeydownSimple($event));
    })("focus", function ColumnAnswerComponent_ng_template_5_Template_input_focus_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r20.onFocusSimple($event));
    })("blur", function ColumnAnswerComponent_ng_template_5_Template_input_blur_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r21.onBlurSimple($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r4.value)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c1, ctx_r4.size))("@answerStatus", ctx_r4.answerStatus);
  }
}
class ColumnAnswerComponent {
  constructor(changeDetectorRef, iconRegistry, sanitizer) {
    this.changeDetectorRef = changeDetectorRef;
    this.mode = null;
    this.id = null;
    this.value = "";
    this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.existFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.currentFocus = FocusType.BLUR;
    this.columnAnswerMode = ColumnAnswerMode;
    this.userInputs = null;
    this.re = /\d+/;
    this.isSwitchColunm = false;
    this.switchColumnFocus = null;
    this.switchSimpleFocusCB = (newCol, oldCol) => {
      this.inputs.first.nativeElement.focus();
    };
    this.switchColumnFocusCB = (newCol, oldCol) => {
      if (newCol < 0 || newCol >= this.inputs.length) {
        return;
      }
      let inputsArray = this.inputs.toArray();
      this.isSwitchColunm = oldCol != newCol;
      //ar[newCol].nativeElement.focus()
      setTimeout(() => {
        inputsArray[newCol].nativeElement.select();
      }, 0);
    };
    this.fill = null;
    this.fillSimple = () => {};
    this.fillColumn = val => {
      if (val == null) {
        val = "";
      }
      for (let i = this.last, j = val.length - 1; i >= 0; i--, j--) {
        this.userInputs[i] = {
          value: j >= 0 ? val[j] : "",
          tabindex: -1,
          inFocus: FocusType.BLUR,
          placeholder: ""
        };
      }
      this.userInputs[this.last].placeholder = "?";
      this.addTabIndex();
    };
    console.debug(this.log(`constructor this.size: ${this.size}`));
    iconRegistry.addSvgIcon('delete-cross', sanitizer.bypassSecurityTrustResourceUrl('assets/img/delete_icon.svg'));
  }
  ngOnChanges(changes) {
    console.debug(this.log(`ngOnChanges this.size: ${this.size} type: ${typeof this.size}`));
    console.debug(this.log(changes));
    //let size = parseInt(this.size)
    if (changes['mode']) {
      if (this.mode == ColumnAnswerMode.COLUMNS) {
        if (this.userInputs == null) {
          this.userInputs = new Array(this.size);
          this.last = this.userInputs.length - 1;
        }
        this.switchColumnFocus = this.switchColumnFocusCB;
        this.fill = this.fillColumn;
        this.fill(this.value);
      } else {
        this.userInputs = null;
        this.last = -1;
        this.switchColumnFocus = this.switchSimpleFocusCB;
        this.fill = this.fillSimple;
      }
    }
    if (changes['value'] && this.mode == ColumnAnswerMode.COLUMNS) {
      this.fill(this.value);
    }
    if (changes['size'] && this.mode == ColumnAnswerMode.COLUMNS) {
      this.userInputs = new Array(this.size);
      this.last = this.userInputs.length - 1;
      this.fill(this.value);
    }
  }
  ngOnInit() {}
  ngAfterViewInit() {
    console.debug(this.log(`plr: ${this.inputs.length}`));
  }
  modelChangeFn(change, idx) {
    console.debug(this.log(`change "${change}" lenght: ${change != null ? change.length : 0} index: ${idx} curval: '${this.userInputs[idx].value}'`));
    console.debug(this.log(this.userInputs));
    let isClearCell = change == null || change.length == 0;
    this.changeDetectorRef.detectChanges();
    let newChange;
    if (!isClearCell) {
      let test = this.re.exec(this.inputchar);
      console.debug(this.log(`test '${test}'`));
      newChange = test != null ? test[0] : "";
    } else {
      newChange = "";
    }
    console.debug(this.log(`modif change' "${newChange}" lenght: ${newChange.length}`));
    if (newChange.length > 0 || isClearCell) {
      this.setUserInputs(newChange, idx);
    } else {
      //keep value
      let dico = this.re.exec(this.userInputs[idx].value);
      newChange = dico != null ? dico[0] : "";
      this.setUserInputs(newChange, idx);
    }
    let val = "";
    this.userInputs.forEach(v => {
      val += v.value;
    });
    this.value = val;
    //this.valueChange.emit(this.value);
    let answerStatus = this.answerStatus;
    let newStatus = this.valueChange(this.value, this.id);
    let leaveCursorThere;
    switch (answerStatus) {
      case _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.EMPTY:
      case _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.FOCUS:
        leaveCursorThere = newStatus == _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.WRONG || newStatus == _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.RIGHT;
        break;
      case _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.WRONG:
        leaveCursorThere = newStatus == _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.RIGHT;
        break;
      case _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.RIGHT:
        leaveCursorThere = false;
        break;
      case _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.ANSWERED:
        leaveCursorThere = false;
        break;
    }
    if (leaveCursorThere === false) {
      if (newChange.length > 0) {
        this.switchColumnFocus(idx - 1, idx);
      } else {
        this.switchColumnFocus(idx, idx); // just for select
      }
    }

    console.log(leaveCursorThere);
  }
  setUserInputs(val, idx) {
    this.userInputs[idx].value = val;
    for (let i = idx + 1; i < this.userInputs.length; i++) {
      if (this.userInputs[i].value == null || this.userInputs[i].value == "") {
        this.userInputs[i].value = "0";
      }
    }
  }
  modelChangeNormal(change) {
    console.debug(this.log(`change ${change} model val ${this.value}`));
    this.value = change;
    //this.valueChange.emit(this.value);
    let val2 = this.valueChange(this.value, this.id);
    console.log(val2);
  }
  onKeydown(event, index) {
    console.debug(this.log(event));
    console.debug(this.log(`inputChar2: "${this.inputchar}" code ${event.code} key ${event.key}`));
    switch (event.key) {
      case "ArrowLeft":
        this.switchColumnFocus(index - 1, index);
        break;
      case "ArrowRight":
        this.switchColumnFocus(index + 1, index);
        break;
      case "Backspace":
        console.log("Backspace");
        break;
      case "Delete":
        console.log("Delete");
        break;
      case "Enter":
        this.exitWidget();
        break;
      default:
        this.inputchar = event.key;
    }
  }
  onKeydownSimple(event) {
    console.debug(this.log(event));
    console.debug(this.log(`inputChar2: "${this.inputchar}" code ${event.code} key ${event.key}`));
    switch (event.key) {
      case "Enter":
        this.exitWidget();
        break;
      default:
        this.inputchar = event.key;
    }
  }
  trackByIdx(index, obj) {
    return index;
  }
  clearInput() {
    console.debug(this.log(`clearInput`));
    this.value = null;
    this.fill(this.value);
    if (this.inputs.last) {
      this.inputs.last.nativeElement.focus();
    }
    //this.valueChange.emit(this.value);
    let val2 = this.valueChange(this.value, this.id);
    console.log(val2);
  }
  isEmpty() {
    return this.value == null || this.value.length === 0;
  }
  onFocusColumns(e, index) {
    console.debug(this.log(`onFocusColumns ${index}`));
    //console.debug(this.log(e));
    //console.debug(this.log(typeof (e)));
    //this.answerStatus = QuestionStatus.FOCUS;
    if (this.value && this.value.length > 0) {
      //console.warn("do select");
      e.target.select();
    }
    this.userInputs[index].inFocus = FocusType.FOCUS;
    this.setInFocus(FocusType.FOCUS);
    this.removeTabIndex();
  }
  onBlurColumns(e, index) {
    //console.trace()
    console.debug(this.log(`onBlurColumns ${index}`));
    //console.debug(this.log(e))
    //console.debug(this.log(typeof e))
    this.userInputs[index].inFocus = FocusType.BLUR;
    this.setInFocus(FocusType.BLUR);
    this.addTabIndex();
  }
  addTabIndex() {
    this.setlastTabIndex(0);
  }
  removeTabIndex() {
    this.setlastTabIndex(-1);
  }
  setlastTabIndex(indexValue) {
    this.userInputs[this.last].tabindex = indexValue;
  }
  onFocusSimple(e) {
    this.setInFocus(FocusType.FOCUS);
  }
  onBlurSimple(e) {
    this.setInFocus(FocusType.BLUR);
  }
  setInFocus(newFocus) {
    /*
        let val = FocusType.BLUR
        if (this.mode == ColumnAnswerMode.COLUMNS) {
          this.userInputs.forEach(v => {
             if(v.inFocus == FocusType.FOCUS) {
                val = FocusType.FOCUS;
             }
          })
        }
    */
    console.debug(this.log(`newFocus ${newFocus} this.inFocus ${this.currentFocus}  this.isSwitchColunm ${this.isSwitchColunm}`));
    if (this.currentFocus !== newFocus) {
      if (this.isSwitchColunm == false) {
        this.focusChange.emit(newFocus);
      } else {
        this.isSwitchColunm = false;
      }
    }
    this.currentFocus = newFocus;
  }
  focus() {
    this.switchColumnFocus(this.last, this.last);
  }
  exitWidget() {
    this.existFocus.emit("nothing");
  }
  log(msg) {
    if (typeof msg == "string") {
      return "CA" + this.id + " - " + msg;
    }
    return msg;
  }
  static #_ = this.ɵfac = function ColumnAnswerComponent_Factory(t) {
    return new (t || ColumnAnswerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ColumnAnswerComponent,
    selectors: [["app-column-answer"]],
    viewQuery: function ColumnAnswerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.inputs = _t);
      }
    },
    inputs: {
      size: "size",
      mode: "mode",
      answerStatus: "answerStatus",
      id: "id",
      value: "value",
      valueChange: "valueChange"
    },
    outputs: {
      focusChange: "focusChange",
      existFocus: "existFocus"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
    decls: 7,
    vars: 4,
    consts: [["mat-icon-button", "", "color", "accent", "aria-label", "Clear", "tabindex", "-1", 3, "disabled", "click"], ["svgIcon", "delete-cross"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["columns", ""], ["normal", ""], [1, "columnAnswer"], ["type", "number", 3, "ngModel", "tabindex", "placeholder", "ngModelChange", "keydown", "focus", "blur", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["type", "number", 3, "ngModel", "tabindex", "placeholder", "ngModelChange", "keydown", "focus", "blur"], ["columninput", ""], ["type", "number", "placeholder", "?", 1, "mathAnswer", 3, "ngModel", "ngStyle", "ngModelChange", "keydown", "focus", "blur"]],
    template: function ColumnAnswerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ColumnAnswerComponent_Template_button_click_0_listener() {
          return ctx.clearInput();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ColumnAnswerComponent_ng_container_2_Template, 1, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ColumnAnswerComponent_ng_template_3_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ColumnAnswerComponent_ng_template_5_Template, 2, 5, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode == ctx.columnAnswerMode.COLUMNS)("ngIfThen", _r1)("ngIfElse", _r3);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
    styles: [".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start {  }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end {  }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.mat-icon-button[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  vertical-align: text-bottom;\n}\n\n.columnAnswer[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.columnAnswer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 1em;\n  text-align: center;\n  font-size: 24px;\n  font-family: Arial, Helvetica, sans-serif;\n  border: 1px;\n  border-left-style: dashed;\n  border-top-style: solid;\n  border-bottom-style: solid;\n  padding: 2px 0;\n}\n\n.columnAnswer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:first-child {\n  border-left-style: solid;\n  border-top-left-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\n\n.columnAnswer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:last-child {\n  border-right-style: solid;\n  border-top-right-radius: 7px;\n  border-bottom-right-radius: 7px;\n}\n\n.deleteIcon[_ngcontent-%COMP%] {\n  fill: grey;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.mathAnswer[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding-left: 5px;\n  padding-right: 5px;\n  width: 3em;\n  text-align: right;\n  margin-left: 0;\n  border-radius: 7px;\n  border-style: solid;\n  border-width: 1px;\n}\n\n.mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #388e3c;\n  outline-width: 15px;\n  caret-color: #388e3c;\n}\n\n.dark-theme[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .dark-theme   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #ffd740;\n  outline-width: 15px;\n  caret-color: #ffd740;\n}\n\n.light-theme[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .light-theme   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #bcaaa4;\n  outline-width: 15px;\n  caret-color: #bcaaa4;\n}\n\n.deeppurple-amber[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .deeppurple-amber   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #ffd740;\n  outline-width: 15px;\n  caret-color: #ffd740;\n}\n\n.indigo-pink[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .indigo-pink   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #ff4081;\n  outline-width: 15px;\n  caret-color: #ff4081;\n}\n\n.pink-bluegrey[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .pink-bluegrey   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #b0bec5;\n  outline-width: 15px;\n  caret-color: #b0bec5;\n}\n\n.purple-green[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .purple-green   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #69f0ae;\n  outline-width: 15px;\n  caret-color: #69f0ae;\n}\n\n.candy[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .candy   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #795548;\n  outline-width: 15px;\n  caret-color: #795548;\n}\n/*# sourceURL=webpack://./node_modules/@angular/material/core/ripple/_ripple.scss */\n/*# sourceURL=webpack://./src/app/column-answer/column-answer.component.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/a11y/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/overlay/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/text-field/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/focus-indicators/_private.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/style/_layout-common.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbHVtbi1hbnN3ZXIvY29sdW1uLWFuc3dlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvdGV4dC1maWVsZC9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL2ZvY3VzLWluZGljYXRvcnMvX3ByaXZhdGUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19sYXlvdXQtY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7RUFDRSxnQkFBQTtFQUlBLGtCQUFBO0FDUEo7QURjSTtFQUNFLHdCQUFBO0FDWk47O0FEZ0JFO0VBQ0UsaUJBQUE7QUNiSjs7QURnQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSw2REFBQTtFQUlBLDJCQUFBO0FDakJKO0FDZ0NJO0VGWEUsYUFBQTtBQ2xCTjs7QUNsQkU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLG1CQUFBO0VBR0EsVUFBQTtFQUdBLHdCQUFBO0VBQ0EscUJBQUE7RUFNQSxPQUFBO0FEU0o7QUNQSTtFQUNFLFVBQUE7RUFDQSxRQUFBO0FEU047O0FFekJFO0VBRUUsb0JBQUE7RUFHQSxNQUFBO0VBQ0EsT0FB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cUxSOztBQXhMSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQTJMUjs7QUE5TEk7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFpTVI7O0FBcE1JO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBdU1SOztBQTFNSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQTZNUjs7QUFoTkk7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFtTlI7O0FBdE5JO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBeU5SOztBQTVOSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQStOUiIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiLm1hdC1yaXBwbGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWF0LXJpcHBsZTpub3QoOmVtcHR5KSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbn1cblxuLm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWQge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsIDAsIDApO1xufVxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICBib3JkZXI6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGxlZnQ6IDA7XG59XG5bZGlyPXJ0bF0gLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciwgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5jZGstb3ZlcmxheS1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2RrLW92ZXJsYXktYmFja2Ryb3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIG9wYWNpdHk6IDA7XG59XG4uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMik7XG59XG5cbi5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCB7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMW1zIGxpbmVhciwgb3BhY2l0eSAxbXMgbGluZWFyO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDE7XG59XG4uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5jZGstb3ZlcmxheS1iYWNrZHJvcC1ub29wLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG5cbi5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDFweDtcbiAgbWluLWhlaWdodDogMXB4O1xufVxuXG4uY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1maXJlZm94IHtcbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbkBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgeyAvKiEqLyB9XG5Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7IC8qISovIH1cbi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zO1xufVxuXG4uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCAwcyAxbXM7XG59XG5cbi5tYXQtZm9jdXMtaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogdmFyKC0tbWF0LWZvY3VzLWluZGljYXRvci1kaXNwbGF5LCBub25lKTtcbiAgYm9yZGVyOiB2YXIoLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci13aWR0aCwgM3B4KSB2YXIoLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1zdHlsZSwgc29saWQpIHZhcigtLW1hdC1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1hdC1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1cywgNHB4KTtcbn1cbi5tYXQtZm9jdXMtaW5kaWNhdG9yOmZvY3VzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIHtcbiAgLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWF0LW1kYy1mb2N1cy1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWF0LW1kYy1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogdmFyKC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItZGlzcGxheSwgbm9uZSk7XG4gIGJvcmRlcjogdmFyKC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoLCAzcHgpIHZhcigtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1zdHlsZSwgc29saWQpIHZhcigtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1jb2xvciwgdHJhbnNwYXJlbnQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1ib3JkZXItcmFkaXVzLCA0cHgpO1xufVxuLm1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yOmZvY3VzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIHtcbiAgLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1kaXNwbGF5OiBibG9jaztcbn1cblxuLm1hdC1pY29uLWJ1dHRvbiB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG59XG5cbi5tYXQtaWNvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbn1cblxuLmNvbHVtbkFuc3dlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNvbHVtbkFuc3dlciBpbnB1dCB7XG4gIHdpZHRoOiAxZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyOiAxcHg7XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBkYXNoZWQ7XG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgcGFkZGluZzogMnB4IDA7XG59XG5cbi5jb2x1bW5BbnN3ZXIgaW5wdXQ6Zmlyc3QtY2hpbGQge1xuICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDdweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogN3B4O1xufVxuXG4uY29sdW1uQW5zd2VyIGlucHV0Omxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xufVxuXG4uZGVsZXRlSWNvbiB7XG4gIGZpbGw6IGdyZXk7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xufVxuXG4ubWF0aEFuc3dlciB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDNlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xufVxuXG4ubWF0aEFuc3dlcjpmb2N1cyB7XG4gIG91dGxpbmUtY29sb3I6ICMzODhlM2M7XG4gIG91dGxpbmUtd2lkdGg6IDE1cHg7XG4gIGNhcmV0LWNvbG9yOiAjMzg4ZTNjO1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAubWF0aEFuc3dlcjpmb2N1cyB7XG4gIG91dGxpbmUtY29sb3I6ICNmZmQ3NDA7XG4gIG91dGxpbmUtd2lkdGg6IDE1cHg7XG4gIGNhcmV0LWNvbG9yOiAjZmZkNzQwO1xufVxuXG46aG9zdC1jb250ZXh0KC5saWdodC10aGVtZSkgLm1hdGhBbnN3ZXI6Zm9jdXMge1xuICBvdXRsaW5lLWNvbG9yOiAjYmNhYWE0O1xuICBvdXRsaW5lLXdpZHRoOiAxNXB4O1xuICBjYXJldC1jb2xvcjogI2JjYWFhNDtcbn1cblxuOmhvc3QtY29udGV4dCguZGVlcHB1cnBsZS1hbWJlcikgLm1hdGhBbnN3ZXI6Zm9jdXMge1xuICBvdXRsaW5lLWNvbG9yOiAjZmZkNzQwO1xuICBvdXRsaW5lLXdpZHRoOiAxNXB4O1xuICBjYXJldC1jb2xvcjogI2ZmZDc0MDtcbn1cblxuOmhvc3QtY29udGV4dCguaW5kaWdvLXBpbmspIC5tYXRoQW5zd2VyOmZvY3VzIHtcbiAgb3V0bGluZS1jb2xvcjogI2ZmNDA4MTtcbiAgb3V0bGluZS13aWR0aDogMTVweDtcbiAgY2FyZXQtY29sb3I6ICNmZjQwODE7XG59XG5cbjpob3N0LWNvbnRleHQoLnBpbmstYmx1ZWdyZXkpIC5tYXRoQW5zd2VyOmZvY3VzIHtcbiAgb3V0bGluZS1jb2xvcjogI2IwYmVjNTtcbiAgb3V0bGluZS13aWR0aDogMTVweDtcbiAgY2FyZXQtY29sb3I6ICNiMGJlYzU7XG59XG5cbjpob3N0LWNvbnRleHQoLnB1cnBsZS1ncmVlbikgLm1hdGhBbnN3ZXI6Zm9jdXMge1xuICBvdXRsaW5lLWNvbG9yOiAjNjlmMGFlO1xuICBvdXRsaW5lLXdpZHRoOiAxNXB4O1xuICBjYXJldC1jb2xvcjogIzY5ZjBhZTtcbn1cblxuOmhvc3QtY29udGV4dCguY2FuZHkpIC5tYXRoQW5zd2VyOmZvY3VzIHtcbiAgb3V0bGluZS1jb2xvcjogIzc5NTU0ODtcbiAgb3V0bGluZS13aWR0aDogMTVweDtcbiAgY2FyZXQtY29sb3I6ICM3OTU1NDg7XG59IixudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('answerStatus', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)(_services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.RIGHT, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        backgroundColor: 'limegreen'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)(_services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.WRONG, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        backgroundColor: 'red'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)(_services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.EMPTY, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        backgroundColor: 'white'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)(_services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.FOCUS, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        backgroundColor: 'lightyellow'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.state)(_services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.ANSWERED, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
        backgroundColor: 'lightgray'
      }))])]
    }
  });
}
var ColumnAnswerMode;
(function (ColumnAnswerMode) {
  ColumnAnswerMode["COLUMNS"] = "COLUMNS";
  ColumnAnswerMode["NORMAL"] = "NORMAL";
})(ColumnAnswerMode || (ColumnAnswerMode = {}));
var FocusType;
(function (FocusType) {
  FocusType["FOCUS"] = "FOCUS";
  FocusType["BLUR"] = "BLUR";
})(FocusType || (FocusType = {}));
;
const ANSWER_MODES = [{
  code: ColumnAnswerMode.NORMAL,
  label: "Normal"
}, {
  code: ColumnAnswerMode.COLUMNS,
  label: "Column"
}];

/***/ }),

/***/ 6718:
/*!************************************************************************!*\
  !*** ./src/app/config-dialog-opener/config-dialog-opener.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigDialogOpenerComponent": () => (/* binding */ ConfigDialogOpenerComponent)
/* harmony export */ });
/* harmony import */ var _config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config-dialog/config-dialog.component */ 2407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ 946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 8589);






class ConfigDialogOpenerComponent {
  constructor(dialog, configService) {
    this.dialog = dialog;
    this.configService = configService;
    this.myEventSubscriptions = [];
  }
  ngOnInit() {
    this.myEventSubscriptions.push(this.configService.subscribe(cfi => {
      this.config = cfi.config;
    }));
  }
  ngOnDestroy() {
    this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());
  }
  openDialog() {
    const dialogRef = this.dialog.open(_config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_0__.ConfigDialogComponent, {
      width: '400px',
      data: this.config
    });
    dialogRef.afterClosed().subscribe(results => {
      console.log('The dialog was closed');
      console.log(results);
      if (results) {
        this.config = {
          ...results
        };
        this.configService.next(this.config, true);
      }
    });
  }
  static #_ = this.ɵfac = function ConfigDialogOpenerComponent_Factory(t) {
    return new (t || ConfigDialogOpenerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ConfigDialogOpenerComponent,
    selectors: [["app-config-dialog-opener"]],
    decls: 5,
    vars: 0,
    consts: [["mat-menu-item", "", 3, "click"]],
    template: function ConfigDialogOpenerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConfigDialogOpenerComponent_Template_button_click_0_listener() {
          return ctx.openDialog();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Configuration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__.MatMenuItem],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3473:
/*!************************************************************************!*\
  !*** ./src/app/config-dialog-ranges/config-dialog-ranges.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigDialogRangesComponent": () => (/* binding */ ConfigDialogRangesComponent),
/* harmony export */   "ParentErrorStateMatcher": () => (/* binding */ ParentErrorStateMatcher),
/* harmony export */   "minBiggerThanMaxValidator": () => (/* binding */ minBiggerThanMaxValidator)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math-generator/mathProblemTypes */ 3137);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 5288);











function ConfigDialogRangesComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Position ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ConfigDialogRangesComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r8 + 1, " ");
  }
}
function ConfigDialogRangesComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Min Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ConfigDialogRangesComponent_td_12_mat_error_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Min value is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ConfigDialogRangesComponent_td_12_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Min value shall be greatter than ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ConfigDialogRangesComponent_td_12_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Min shall be smaller than Max ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ConfigDialogRangesComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17)(1, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ConfigDialogRangesComponent_td_12_mat_error_3_Template, 4, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfigDialogRangesComponent_td_12_mat_error_4_Template, 4, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ConfigDialogRangesComponent_td_12_mat_error_5_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("errorStateMatcher", ctx_r3.parentErrorStateMatcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.numbers.controls[i_r10].getError("required", "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.numbers.controls[i_r10].getError("min", "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.minBiggerThanMaxTest(i_r10));
  }
}
function ConfigDialogRangesComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Max Value ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ConfigDialogRangesComponent_td_15_mat_error_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Max value is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ConfigDialogRangesComponent_td_15_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Max value shall be greatter than ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ConfigDialogRangesComponent_td_15_mat_error_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Max shall be bigger than Min ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ConfigDialogRangesComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 17)(1, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ConfigDialogRangesComponent_td_15_mat_error_3_Template, 4, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ConfigDialogRangesComponent_td_15_mat_error_4_Template, 4, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ConfigDialogRangesComponent_td_15_mat_error_5_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r15 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("errorStateMatcher", ctx_r5.parentErrorStateMatcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.numbers.controls[i_r15].getError("required", "max"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.numbers.controls[i_r15].getError("min", "max"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.minBiggerThanMaxTest(i_r15));
  }
}
function ConfigDialogRangesComponent_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 22);
  }
}
function ConfigDialogRangesComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 23);
  }
}
class ConfigDialogRangesComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.displayedColumns = ["position", 'min', 'max'];
    this.valueFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl('', {
      updateOn: 'blur'
    });
    this.parentErrorStateMatcher = new ParentErrorStateMatcher();
    this.mathProplemActions = _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MATHProplemActions;
    this.mathProplemActionsKeys = Object.keys(_math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MATHProplemActions);
    //console.log("data");
    //console.log(data);
    this.config = {
      ...data
    };
    this.numbers = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormArray([]);
    this.equationRangeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
      numbers: this.numbers
    });
    let arr = this.equationRangeForm.get('arr');
    for (let i = 0; i < this.config.nbNumbers; i++) {
      let gr = this.config.generateRange[i];
      let elem = gr || {
        min: 0,
        max: 10
      };
      this.numbers.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormGroup({
        min: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(elem.min, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]),
        max: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormControl(elem.max, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)])
      }, {
        validators: minBiggerThanMaxValidator
      }));
    }
    //console.log(this.dataSource);
  }

  ngOnInit() {}
  cancel() {
    this.dialogRef.close();
  }
  apply() {
    let results = [];
    this.numbers.controls.forEach(element => {
      results.push({
        min: +element.value.min,
        max: +element.value.max
      });
    });
    console.log(results);
    this.dialogRef.close(results);
  }
  setRanges() {}
  minBiggerThanMaxTest(i) {
    return this.numbers.controls[i].errors?.minBiggerThanMax;
  }
  static #_ = this.ɵfac = function ConfigDialogRangesComponent_Factory(t) {
    return new (t || ConfigDialogRangesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ConfigDialogRangesComponent,
    selectors: [["app-config-dialog-ranges"]],
    decls: 23,
    vars: 6,
    consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["mat-table", "", "formArrayName", "numbers", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "min"], ["mat-cell", "", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "max"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-dialog-actions", ""], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "disabled", "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "formGroupName"], ["appearance", "outline"], ["matInput", "", "type", "text", "formControlName", "min", "placeholder", "min value", 3, "errorStateMatcher"], [4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "max", "placeholder", "max value", 3, "errorStateMatcher"], ["mat-header-row", ""], ["mat-row", ""]],
    template: function ConfigDialogRangesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hi Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 2)(6, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](7, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ConfigDialogRangesComponent_th_8_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ConfigDialogRangesComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ConfigDialogRangesComponent_th_11_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ConfigDialogRangesComponent_td_12_Template, 6, 5, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ConfigDialogRangesComponent_th_14_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ConfigDialogRangesComponent_td_15_Template, 6, 5, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ConfigDialogRangesComponent_tr_16_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ConfigDialogRangesComponent_tr_17_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 12)(19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigDialogRangesComponent_Template_button_click_19_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfigDialogRangesComponent_Template_button_click_21_listener() {
          return ctx.apply();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Number of numbers: ", ctx.config.nbNumbers, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.equationRangeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.numbers.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.equationRangeForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow],
    styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  width: 3em;\n}\n/*# sourceURL=webpack://./src/app/config-dialog-ranges/config-dialog-ranges.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29uZmlnLWRpYWxvZy1yYW5nZXMvY29uZmlnLWRpYWxvZy1yYW5nZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0ge1xuICB3aWR0aDogM2VtO1xufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
/** A hero's name can't match the hero's alter ego */
const minBiggerThanMaxValidator = control => {
  //console.log(control);
  const min = +control.get('min').value;
  const max = +control.get('max').value;
  //console.log(`min ${min} max ${max}`);
  return min > max ? {
    'minBiggerThanMax': true
  } : null;
};
class ParentErrorStateMatcher {
  isErrorState(control, form) {
    const isSubmitted = !!(form && form.submitted);
    const controlTouched = !!(control && (control.dirty || control.touched));
    const controlInvalid = !!(control && control.invalid);
    const parentInvalid = !!(control && control.parent && control.parent.invalid && (control.parent.dirty || control.parent.touched));
    return isSubmitted || controlTouched && (controlInvalid || parentInvalid);
  }
}

/***/ }),

/***/ 2407:
/*!**********************************************************!*\
  !*** ./src/app/config-dialog/config-dialog.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigDialogComponent": () => (/* binding */ ConfigDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/config */ 5908);
/* harmony import */ var _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math-generator/mathProblemTypes */ 3137);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _config_dialog_ranges_config_dialog_ranges_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config-dialog-ranges/config-dialog-ranges.component */ 3473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 7371);














function ConfigDialogComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " The value is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ConfigDialogComponent_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " The value shall be greater or equals to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ConfigDialogComponent_mat_error_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " The value is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ConfigDialogComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " The value shall be greater or equals to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function ConfigDialogComponent_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mpt_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", mpt_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r4.mathProplemActions[mpt_r5].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r4.mathProplemActions[mpt_r5].op, " ");
  }
}
class ConfigDialogComponent {
  constructor(dialogRef, data, dialog) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.dialog = dialog;
    this.equationOrientations = _services_config__WEBPACK_IMPORTED_MODULE_0__.EquationOrientations;
    this.mathProplemActions = _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_1__.MATHProplemActions;
    this.mathProplemActionsKeys = Object.keys(_math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_1__.MATHProplemActions);
    console.log('data');
    console.log(data);
    this.config = {
      ...data
    };
    this.configForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormGroup({
      nbNumbers: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(this.config.nbNumbers, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(2)]),
      nbProblems: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(this.config.nbQuestions, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1)]),
      realTimeValidation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(this.config.realTimeValidation, []),
      orientation: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl(this.config.orientation, [])
    });
  }
  ngOnInit() {}
  cancel() {
    this.dialogRef.close();
  }
  apply() {
    Object.assign(this.config, this.configForm.value);
    console.log('result');
    console.log(this.config);
    console.log(JSON.stringify(this.config));
    console.log(JSON.stringify([1, 3, 4, 5]));
    console.log(JSON.stringify([{
      name: 'asdf'
    }, {
      name: 'asdf'
    }, {
      name: 'asdf'
    }]));
    this.dialogRef.close(this.config);
  }
  setRanges() {
    const dialogRef = this.dialog.open(_config_dialog_ranges_config_dialog_ranges_component__WEBPACK_IMPORTED_MODULE_2__.ConfigDialogRangesComponent, {
      width: '500px',
      data: this.config
    });
    //TODO check the subscription unsubscribe
    dialogRef.afterClosed().subscribe(results => {
      console.log('The dialog was closed');
      console.log(results);
      if (results) {
        this.config.generateRange = results;
      }
    });
  }
  testpizza(val) {
    console.log(val.errors);
    return true;
  }
  static #_ = this.ɵfac = function ConfigDialogComponent_Factory(t) {
    return new (t || ConfigDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ConfigDialogComponent,
    selectors: [["app-config-dialog"]],
    decls: 29,
    vars: 7,
    consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["appearance", "outline"], ["matInput", "", "type", "number", "formControlName", "nbNumbers", 1, "form-control"], [4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["matInput", "", "type", "number", "formControlName", "nbProblems", 1, "form-control"], ["formControlName", "mathProblemTypes"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "disabled", "click"], [3, "value"]],
    template: function ConfigDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Hi Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "form", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Number of numbers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ConfigDialogComponent_mat_error_8_Template, 4, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ConfigDialogComponent_mat_error_9_Template, 4, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfigDialogComponent_Template_button_click_11_listener() {
          return ctx.setRanges();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Set ranges");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field", 3)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Number of problems:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ConfigDialogComponent_mat_error_17_Template, 4, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, ConfigDialogComponent_mat_error_18_Template, 4, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "mat-form-field", 3)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Math problem Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ConfigDialogComponent_mat_option_23_Template, 4, 3, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 10)(25, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfigDialogComponent_Template_button_click_25_listener() {
          return ctx.cancel();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ConfigDialogComponent_Template_button_click_27_listener() {
          return ctx.apply();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.configForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.configForm.get("nbNumbers").errors == null ? null : ctx.configForm.get("nbNumbers").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.configForm.get("nbNumbers").errors == null ? null : ctx.configForm.get("nbNumbers").errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.configForm.get("nbProblems").errors == null ? null : ctx.configForm.get("nbProblems").errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.configForm.get("nbProblems").errors == null ? null : ctx.configForm.get("nbProblems").errors.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.mathProplemActionsKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.configForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5401:
/*!****************************************************!*\
  !*** ./src/app/form-panel/form-panel.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormPanelComponent": () => (/* binding */ FormPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 5288);







function FormPanelComponent_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Equation number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FormPanelComponent_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r9 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataSource[i_r9].id, " ");
  }
}
function FormPanelComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FormPanelComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12)(1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r11);
  }
}
function FormPanelComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Level ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FormPanelComponent_td_12_mat_error_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Max value is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function FormPanelComponent_td_12_mat_error_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Min value is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function FormPanelComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12)(1, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormPanelComponent_td_12_mat_error_3_Template, 4, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormPanelComponent_td_12_mat_error_4_Template, 4, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.skills.controls[i_r13].getError("required", "level"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.skills.controls[i_r13].getError("min", "level"));
  }
}
function FormPanelComponent_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
  }
}
function FormPanelComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 17);
  }
}
class FormPanelComponent {
  constructor() {
    this.dataSource = [{
      id: 1,
      name: "malik",
      level: 3242
    }, {
      id: 2,
      name: "moldav",
      level: 689
    }, {
      id: 4,
      name: "mortich",
      level: 1234
    }, {
      id: 2,
      name: "Hydrogen",
      level: 1234
    }, {
      id: 5,
      name: "mortich",
      level: 9994
    }, {
      id: 123,
      name: "Boron",
      level: 1797
    }];
    this.displayedColumns = ['id', 'name', 'level'];
    this.user = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormGroup({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl('tata'),
      skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormArray([])
    });
    this.dataSource.forEach(element => {
      this.skills.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormGroup({
        name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(element.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required),
        level: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormControl(element.level, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.min(2)])
      }));
    });
  }
  ngOnInit() {
    console.log(this.user.get("name").value);
    console.log(this.user.get("skills").value);
    console.log(this.user.get("skills[0]")?.value);
    console.log(this.user.get("skills.0")?.value);
    console.log(this.user.get("skills[0].name")?.value);
    console.log(this.user.get("skills.0.name")?.value);
    const group0 = this.user.get("skills.0");
    console.log(group0.get("name")?.value);
  }
  get skills() {
    return this.user.get('skills');
  }
  pizza(i) {
    return this.skills.getError('required', '' + i + '.level');
  }
  static #_ = this.ɵfac = function FormPanelComponent_Factory(t) {
    return new (t || FormPanelComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FormPanelComponent,
    selectors: [["app-form-panel"]],
    decls: 15,
    vars: 4,
    consts: [[3, "formGroup"], ["mat-table", "", "formArrayName", "skills", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "level"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "formGroupName"], ["matInput", "", "type", "text", "formControlName", "name", "placeholder", "name"], ["matInput", "", "type", "text", "formControlName", "level", "placeholder", "level"], [4, "ngIf"], ["mat-header-row", ""], ["mat-row", ""]],
    template: function FormPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "form-panel works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0)(3, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormPanelComponent_th_5_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormPanelComponent_td_6_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormPanelComponent_th_8_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormPanelComponent_td_9_Template, 3, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormPanelComponent_th_11_Template, 2, 0, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, FormPanelComponent_td_12_Template, 5, 3, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FormPanelComponent_tr_13_Template, 1, 0, "tr", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormPanelComponent_tr_14_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.skills.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormArrayName, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow],
    styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceURL=webpack://./src/app/form-panel/form-panel.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybS1wYW5lbC9mb3JtLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 73:
/*!******************************************************************!*\
  !*** ./src/app/main-page/main-buttons/main-buttons.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonPushedStatus": () => (/* binding */ ButtonPushedStatus),
/* harmony export */   "MainButtonsComponent": () => (/* binding */ MainButtonsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 5074);






class MainButtonsComponent {
  constructor() {
    this.pushButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  ngOnInit() {}
  goToProblems() {
    this.pushButtonEvent.emit({
      status: ButtonPushedStatus.TO_PROBLEMS,
      nbQuestions: this.nbQuestions
    });
  }
  goToWorkout() {
    this.pushButtonEvent.emit({
      status: ButtonPushedStatus.TO_WORKOUT,
      nbQuestions: this.nbQuestions
    });
  }
  clear() {
    this.pushButtonEvent.emit({
      status: ButtonPushedStatus.CLEAR,
      nbQuestions: this.nbQuestions
    });
  }
  static #_ = this.ɵfac = function MainButtonsComponent_Factory(t) {
    return new (t || MainButtonsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MainButtonsComponent,
    selectors: [["app-main-buttons"]],
    inputs: {
      nbQuestions: "nbQuestions",
      disableButton: "disableButton"
    },
    outputs: {
      pushButtonEvent: "pushButtonEvent"
    },
    decls: 13,
    vars: 3,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Number_of_questions$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_1 = goog.getMsg("Number of questions");
        i18n_0 = MSG_EXTERNAL_Number_of_questions$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_1;
      } else {
        i18n_0 = "Nombre de questions";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc to a problem
         */
        const MSG_EXTERNAL_Problems$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_3 = goog.getMsg("Problems");
        i18n_2 = MSG_EXTERNAL_Problems$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_3;
      } else {
        i18n_2 = "Probl\xE8mes";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc to a workout training
         */
        const MSG_EXTERNAL_Workout$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_5 = goog.getMsg("One by one");
        i18n_4 = MSG_EXTERNAL_Workout$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_5;
      } else {
        i18n_4 = "Exercices";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_clearAll$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_7 = goog.getMsg("Clear all");
        i18n_6 = MSG_EXTERNAL_clearAll$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_7;
      } else {
        i18n_6 = "Effacer tout";
      }
      return [["appearance", "outline"], i18n_0, ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], [1, "space"], ["mat-raised-button", "", "color", "accent", 3, "disabled", "click"], i18n_2, i18n_4, ["mat-raised-button", "", 3, "click"], i18n_6];
    },
    template: function MainButtonsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MainButtonsComponent_Template_input_ngModelChange_3_listener($event) {
          return ctx.nbQuestions = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainButtonsComponent_Template_button_click_5_listener() {
          return ctx.goToProblems();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainButtonsComponent_Template_button_click_8_listener() {
          return ctx.goToWorkout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainButtonsComponent_Template_button_click_11_listener() {
          return ctx.clear();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nbQuestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableButton);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel],
    styles: [".space[_ngcontent-%COMP%] {\n  width: 1em;\n  display: inline-block;\n}\n/*# sourceURL=webpack://./src/app/main-page/main-buttons/main-buttons.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1wYWdlL21haW4tYnV0dG9ucy9tYWluLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZSB7XG4gIHdpZHRoOiAxZW07XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
var ButtonPushedStatus;
(function (ButtonPushedStatus) {
  ButtonPushedStatus[ButtonPushedStatus["TO_PROBLEMS"] = 0] = "TO_PROBLEMS";
  ButtonPushedStatus[ButtonPushedStatus["TO_WORKOUT"] = 1] = "TO_WORKOUT";
  ButtonPushedStatus[ButtonPushedStatus["CLEAR"] = 2] = "CLEAR";
})(ButtonPushedStatus || (ButtonPushedStatus = {}));

/***/ }),

/***/ 2627:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ 5892);
/* harmony import */ var _main_tabs_series_main_tabs_series_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-tabs-series/main-tabs-series.component */ 2273);
/* harmony import */ var _main_tabs_programs_main_tabs_programs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-tabs-programs/main-tabs-programs.component */ 4633);




const TAB_INDEX_KEY = "TAB_INDEX_KEY";
class MainPageComponent {
  constructor() {
    this.selectedTabIndex = null;
  }
  ngOnInit() {
    let tabIndex = localStorage.getItem(TAB_INDEX_KEY);
    this.selectedTabIndex = parseInt(tabIndex);
  }
  selectedTabIndexChange(index) {
    localStorage.setItem(TAB_INDEX_KEY, index.toString());
    this.selectedTabIndex = index;
  }
  static #_ = this.ɵfac = function MainPageComponent_Factory(t) {
    return new (t || MainPageComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MainPageComponent,
    selectors: [["app-main-page"]],
    decls: 5,
    vars: 1,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_tabPrograms$$SRC_APP_MAIN_PAGE_MAIN_PAGE_COMPONENT_TS_1 = goog.getMsg("Programs");
        i18n_0 = MSG_EXTERNAL_tabPrograms$$SRC_APP_MAIN_PAGE_MAIN_PAGE_COMPONENT_TS_1;
      } else {
        i18n_0 = "Programmes";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_tabSeries$$SRC_APP_MAIN_PAGE_MAIN_PAGE_COMPONENT_TS_3 = goog.getMsg("Series");
        i18n_2 = MSG_EXTERNAL_tabSeries$$SRC_APP_MAIN_PAGE_MAIN_PAGE_COMPONENT_TS_3;
      } else {
        i18n_2 = "S\xE9ries";
      }
      return [[3, "selectedIndex", "selectedIndexChange"], ["label", i18n_0], ["label", i18n_2]];
    },
    template: function MainPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-tab-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectedIndexChange", function MainPageComponent_Template_mat_tab_group_selectedIndexChange_0_listener($event) {
          return ctx.selectedTabIndexChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-tab", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-main-tabs-programs");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "app-main-tabs-series");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedIndex", ctx.selectedTabIndex);
      }
    },
    dependencies: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__.MatTabGroup, _main_tabs_series_main_tabs_series_component__WEBPACK_IMPORTED_MODULE_0__.MainTabsSeriesComponent, _main_tabs_programs_main_tabs_programs_component__WEBPACK_IMPORTED_MODULE_1__.MainTabsProgramsComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4633:
/*!******************************************************************************!*\
  !*** ./src/app/main-page/main-tabs-programs/main-tabs-programs.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainTabsProgramsComponent": () => (/* binding */ MainTabsProgramsComponent)
/* harmony export */ });
/* harmony import */ var _math_generator_worksheetsMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math-generator/worksheetsMap */ 5462);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-buttons/main-buttons.component */ 73);
/* harmony import */ var _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../math-generator/mathProblemTypes */ 3137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ 946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ 1169);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 7371);
















function MainTabsProgramsComponent_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mpt_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", mpt_r3.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", mpt_r3.name, " ");
  }
}
function MainTabsProgramsComponent_mat_chip_option_8_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function MainTabsProgramsComponent_mat_chip_option_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-chip-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("removed", function MainTabsProgramsComponent_mat_chip_option_8_Template_mat_chip_option_removed_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const problemType_r4 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.remove(problemType_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MainTabsProgramsComponent_mat_chip_option_8_mat_icon_2_Template, 2, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const problemType_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectable", ctx_r1.selectable)("removable", ctx_r1.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.mathProblemTypesMap[problemType_r4].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.removable);
  }
}
function MainTabsProgramsComponent_section_9_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "mat-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function MainTabsProgramsComponent_section_9_li_4_Template_mat_checkbox_change_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const worksheetsItem_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.checkboxChange($event.checked, worksheetsItem_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const worksheetsItem_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r9.isSelected(worksheetsItem_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", worksheetsItem_r10.label, "");
  }
}
function MainTabsProgramsComponent_section_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section")(1, "h1", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MainTabsProgramsComponent_section_9_li_4_Template, 3, 2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const worksheetsItemPerOperation_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](worksheetsItemPerOperation_r8.mathProblemTypesData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", worksheetsItemPerOperation_r8.exercises);
  }
}
class MainTabsProgramsComponent {
  constructor(router, configService) {
    this.router = router;
    this.configService = configService;
    this.worksheetsItemPerOperations = [];
    this.worksheetsItems = new Map();
    this.myEventSubscriptions = [];
    this.selectedTabIndex = null;
    this.problemTypes = null;
    this.mathProblemTypesMap = _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MATHProplemActions;
    this.removable = true;
    this.selectable = true;
    this.exercises = _math_generator_worksheetsMap__WEBPACK_IMPORTED_MODULE_0__.WorksheetsMap.getWorksheetsItem();
    let exercicesPerOP = new Map();
    //Fill map
    Object.values(_math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MATHProplemActions).forEach(x => exercicesPerOP.set(x.code, {
      exercises: [],
      mathProblemTypesData: x
    }));
    this.exercises.forEach(x => {
      let a = exercicesPerOP.get(x.mathProblemType);
      a.exercises.push(x);
    });
    //clean empty
    exercicesPerOP.forEach((v, k) => {
      if (v.exercises.length != 0) {
        this.worksheetsItemPerOperations.push(v);
      }
    });
  }
  ngOnInit() {
    this.myEventSubscriptions.push(this.configService.subscribe(cfi => {
      this.config = cfi.config;
      this.config.generators.forEach(worksheetsItem => {
        if (_math_generator_worksheetsMap__WEBPACK_IMPORTED_MODULE_0__.WorksheetsMap.has(worksheetsItem.code)) {
          this.fillMap(true, worksheetsItem);
        }
      });
    }));
  }
  ngOnDestroy() {
    this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());
    this.myEventSubscriptions = [];
    console.log('DEStroy !!!!!!!!!!!!');
  }
  setUpConfig() {
    let generators = new Array(this.worksheetsItems.size);
    let i = 0;
    this.worksheetsItems.forEach(value => {
      generators[i++] = value;
    });
    this.config.generators = generators;
    console.warn(this.config.generators);
    this.configService.next(this.config, true);
  }
  getAdditions() {
    console.log('getAdditions');
    return this.exercises;
  }
  filterOperation(a, b) {
    return a.mathProblemType === b.code;
  }
  checkboxChange(checked, item) {
    console.log(checked);
    console.log(item);
    this.fillMap(checked, item);
  }
  fillMap(checked, item) {
    if (checked) {
      this.worksheetsItems.set(item.code, item);
    } else {
      this.worksheetsItems.delete(item.code);
    }
    console.log(this.worksheetsItems);
  }
  unCheckAll() {
    this.checkboxes.forEach(element => {
      element.checked = false;
    });
    this.worksheetsItems.clear();
  }
  isSelected(worksheetsItem) {
    let selected = this.worksheetsItems.has(worksheetsItem.code);
    return selected;
  }
  pushedButton(buttonPushed) {
    switch (buttonPushed.status) {
      case _main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_1__.ButtonPushedStatus.TO_PROBLEMS:
        this.config.nbQuestions = buttonPushed.nbQuestions;
        this.setUpConfig();
        this.router.navigate(['/problems']);
        break;
      case _main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_1__.ButtonPushedStatus.TO_WORKOUT:
        this.config.nbQuestions = buttonPushed.nbQuestions;
        this.setUpConfig();
        this.router.navigate(['/workout']);
        break;
      case _main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_1__.ButtonPushedStatus.CLEAR:
        this.unCheckAll();
        break;
    }
  }
  mathProplemActions() {
    let val = Object.values(_math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MATHProplemActions);
    return val;
  }
  operationToDisplay() {
    if (!this.problemTypes) {
      return this.worksheetsItemPerOperations;
    } else {
      return this.worksheetsItemPerOperations.filter(x => this.problemTypes.includes(x.mathProblemTypesData.code));
    }
  }
  remove(problemType) {
    console.log('remove chip : ' + problemType);
  }
  static #_ = this.ɵfac = function MainTabsProgramsComponent_Factory(t) {
    return new (t || MainTabsProgramsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__.ConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MainTabsProgramsComponent,
    selectors: [["app-main-tabs-programs"]],
    viewQuery: function MainTabsProgramsComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckbox, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.checkboxes = _t);
      }
    },
    decls: 11,
    vars: 5,
    consts: [["appearance", "fill"], ["multiple", "", 3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "operation-chip-list"], ["aria-label", "operations", 1, "operation-chip-list"], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "nbQuestions", "pushButtonEvent"], [3, "value"], [3, "selectable", "removable", "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [1, "sectionHeader"], [3, "checked", "change"]],
    template: function MainTabsProgramsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section")(1, "mat-form-field", 0)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function MainTabsProgramsComponent_Template_mat_select_valueChange_4_listener($event) {
          return ctx.problemTypes = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MainTabsProgramsComponent_mat_option_5_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 3)(7, "mat-chip-listbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MainTabsProgramsComponent_mat_chip_option_8_Template, 3, 4, "mat-chip-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, MainTabsProgramsComponent_section_9_Template, 5, 2, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "app-main-buttons", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pushButtonEvent", function MainTabsProgramsComponent_Template_app_main_buttons_pushButtonEvent_10_listener($event) {
          return ctx.pushedButton($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.problemTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.mathProplemActions());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.problemTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.operationToDisplay());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nbQuestions", ctx.config.nbQuestions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipListbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipOption, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipRemove, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_1__.MainButtonsComponent],
    styles: [".space[_ngcontent-%COMP%] {\n  width: 1em;\n  display: inline-block;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 4px;\n}\n\n.operation-chip-list[_ngcontent-%COMP%] {\n  width: 98%;\n}\n/*# sourceURL=webpack://./src/app/main-page/main-tabs-programs/main-tabs-programs.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1wYWdlL21haW4tdGFicy1wcm9ncmFtcy9tYWluLXRhYnMtcHJvZ3JhbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0ksVUFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlIHtcbiAgd2lkdGg6IDFlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG51bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4ub3BlcmF0aW9uLWNoaXAtbGlzdCB7XG4gIHdpZHRoOiA5OCU7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2273:
/*!**************************************************************************!*\
  !*** ./src/app/main-page/main-tabs-series/main-tabs-series.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainTabsSeriesComponent": () => (/* binding */ MainTabsSeriesComponent)
/* harmony export */ });
/* harmony import */ var _math_generator_worksheets2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math-generator/worksheets2 */ 5230);
/* harmony import */ var _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../math-generator/mathProblemTypes */ 3137);
/* harmony import */ var _main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-buttons/main-buttons.component */ 73);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _math_generator_rangeManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../math-generator/rangeManager */ 3623);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/config.service */ 946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 7371);

















function MainTabsSeriesComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mpt_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", mpt_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", mpt_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](mpt_r5.operator);
  }
}
function MainTabsSeriesComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nStart"](1, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MainTabsSeriesComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](1, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MainTabsSeriesComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nStart"](1, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MainTabsSeriesComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](1, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
class MainTabsSeriesComponent {
  constructor(router, configService) {
    this.router = router;
    this.configService = configService;
    this.myEventSubscriptions = [];
    this.params = {
      problemTypes: _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_1__.MathProblemTypes.MULTIPLICATION,
      numbers1: "2",
      numbers2: "1 - 12",
      shuffle: false
    };
    let start = 1;
    let end = 12;
    this.tables = Array(end - start + 1).fill(null).map((_, idx) => start + idx);
    let vdator = [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^(\s*-?\d+\s*\-\s*-?\d+\s*,?|\s*-?\d+\s*,?)+$/)];
    this.numberForControl1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', vdator);
    this.numberForControl2 = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.UntypedFormControl('', vdator);
  }
  ngOnInit() {
    this.myEventSubscriptions.push(this.configService.subscribe(cfi => {
      this.config = {
        ...cfi.config
      };
      this.config.generators.forEach(worksheetsItem => {
        this.fillPageData(worksheetsItem);
      });
    }));
    this.clear();
  }
  fillPageData(worksheetsItem) {
    if (worksheetsItem.func == _math_generator_worksheets2__WEBPACK_IMPORTED_MODULE_0__.Worksheets2.multiplicationTable) {
      if (worksheetsItem?.parameters) {
        this.params = Object.assign(this.params, worksheetsItem.parameters);
        this.numberForControl1.setValue(this.params.numbers1);
        this.numberForControl2.setValue(this.params.numbers2);
      }
    }
  }
  clear() {
    this.numberForControl1.setValue("");
    this.numberForControl2.setValue("");
  }
  toDisable() {
    return false; //go to regex
  }

  setUpConfig() {
    let generators = new Array(1);
    console.warn(this.params.numbers1);
    //console.warn(this.params.numbers)
    this.params.numbers1 = _math_generator_rangeManager__WEBPACK_IMPORTED_MODULE_3__.RangeManager.toString(_math_generator_rangeManager__WEBPACK_IMPORTED_MODULE_3__.RangeManager.rangeParser(this.numberForControl1.value, true));
    this.params.numbers2 = _math_generator_rangeManager__WEBPACK_IMPORTED_MODULE_3__.RangeManager.toString(_math_generator_rangeManager__WEBPACK_IMPORTED_MODULE_3__.RangeManager.rangeParser(this.numberForControl2.value, true));
    let wi = {
      label: "no",
      func: _math_generator_worksheets2__WEBPACK_IMPORTED_MODULE_0__.Worksheets2.multiplicationTable,
      code: "MultiSeries1",
      funcName: _math_generator_worksheets2__WEBPACK_IMPORTED_MODULE_0__.Worksheets2.multiplicationTable.name,
      grade: 3,
      mathProblemType: _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_1__.MathProblemTypes.MULTIPLICATION,
      parameters: {
        ...this.params
      }
    };
    generators[0] = wi;
    this.config.generators = generators;
    this.configService.next(this.config, true);
  }
  isDisabled() {
    //console.log(`ISNSA '${this.params.numbers[0]}' ${isNaN(this.params.numbers[0])}`)
    return this.numberForControl1.valid == false || this.numberForControl2.valid == false || this.params.problemTypes == null;
  }
  mathProplemActions() {
    let val = Object.values(_math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_1__.MATHProplemActions);
    return val;
  }
  pushedButton(buttonPushed) {
    switch (buttonPushed.status) {
      case _main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_2__.ButtonPushedStatus.TO_PROBLEMS:
        this.config.nbQuestions = buttonPushed.nbQuestions;
        this.setUpConfig();
        this.router.navigate(['/problems']);
        break;
      case _main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_2__.ButtonPushedStatus.TO_WORKOUT:
        this.config.nbQuestions = buttonPushed.nbQuestions;
        this.setUpConfig();
        this.router.navigate(['/workout']);
        break;
      case _main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_2__.ButtonPushedStatus.CLEAR:
        this.clear();
        break;
    }
  }
  static #_ = this.ɵfac = function MainTabsSeriesComponent_Factory(t) {
    return new (t || MainTabsSeriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
    type: MainTabsSeriesComponent,
    selectors: [["app-main-tabs-series"]],
    decls: 32,
    vars: 13,
    consts: function () {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_customConfig$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_1 = goog.getMsg("Custom configuration");
        i18n_0 = MSG_EXTERNAL_customConfig$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_1;
      } else {
        i18n_0 = "Configuration personnalis\xE9e";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Number_1$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_3 = goog.getMsg("Numbers 1");
        i18n_2 = MSG_EXTERNAL_Number_1$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_3;
      } else {
        i18n_2 = "Nombre 1";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Number_2$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_5 = goog.getMsg("Numbers 2");
        i18n_4 = MSG_EXTERNAL_Number_2$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_5;
      } else {
        i18n_4 = "Nombre 2";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Shuffle$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_7 = goog.getMsg("Shuffle");
        i18n_6 = MSG_EXTERNAL_Shuffle$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_7;
      } else {
        i18n_6 = "M\xE9langer";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Field_required$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS__9 = goog.getMsg("Field is {$startTagStrong}required{$closeTagStrong}", {
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        }, {
          original_code: {
            "startTagStrong": "<strong>",
            "closeTagStrong": "</strong>"
          }
        });
        i18n_8 = MSG_EXTERNAL_Field_required$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS__9;
      } else {
        i18n_8 = "Champ " + "\uFFFD#2\uFFFD" + "obligatoire" + "\uFFFD/#2\uFFFD" + "";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Field_hint$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS__11 = goog.getMsg("Should be 2, or 1-3");
        i18n_10 = MSG_EXTERNAL_Field_hint$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS__11;
      } else {
        i18n_10 = "Doit \xEAtre 2, ou 1-3";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Field_required$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS__13 = goog.getMsg("Field is {$startTagStrong}required{$closeTagStrong}", {
          "startTagStrong": "\uFFFD#2\uFFFD",
          "closeTagStrong": "\uFFFD/#2\uFFFD"
        }, {
          original_code: {
            "startTagStrong": "<strong>",
            "closeTagStrong": "</strong>"
          }
        });
        i18n_12 = MSG_EXTERNAL_Field_required$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS__13;
      } else {
        i18n_12 = "Champ " + "\uFFFD#2\uFFFD" + "obligatoire" + "\uFFFD/#2\uFFFD" + "";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Field_hint$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS__15 = goog.getMsg("Should be 2, or 1-3");
        i18n_14 = MSG_EXTERNAL_Field_hint$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS__15;
      } else {
        i18n_14 = "Doit \xEAtre 2, ou 1-3";
      }
      return [[3, "nbQuestions", "disableButton", "pushButtonEvent"], i18n_0, ["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], i18n_2, ["matInput", "", "type", "text", "placeholder", "range", 3, "formControl"], [4, "ngIf"], i18n_4, [3, "ngModel", "ngModelChange"], i18n_6, [3, "value"], i18n_8, i18n_10, i18n_12, i18n_14];
    },
    template: function MainTabsSeriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-main-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pushButtonEvent", function MainTabsSeriesComponent_Template_app_main_buttons_pushButtonEvent_0_listener($event) {
          return ctx.pushedButton($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "section")(4, "mat-form-field", 2)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function MainTabsSeriesComponent_Template_mat_select_valueChange_7_listener($event) {
          return ctx.params.problemTypes = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, MainTabsSeriesComponent_mat_option_8_Template, 4, 3, "mat-option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "section")(10, "mat-form-field")(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](12, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, MainTabsSeriesComponent_mat_error_14_Template, 3, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, MainTabsSeriesComponent_mat_error_15_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "format: 1, 3, 6-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field")(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](20, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, MainTabsSeriesComponent_mat_error_22_Template, 3, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, MainTabsSeriesComponent_mat_error_23_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "format: 1, 3, 6-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MainTabsSeriesComponent_Template_mat_checkbox_ngModelChange_27_listener($event) {
          return ctx.params.shuffle = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](28, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "br")(30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "app-main-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pushButtonEvent", function MainTabsSeriesComponent_Template_app_main_buttons_pushButtonEvent_31_listener($event) {
          return ctx.pushedButton($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nbQuestions", ctx.config.nbQuestions)("disableButton", ctx.isDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.params.problemTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.mathProplemActions());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.numberForControl1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.numberForControl1.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.numberForControl1.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.numberForControl2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.numberForControl2.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.numberForControl2.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.params.shuffle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nbQuestions", ctx.config.nbQuestions)("disableButton", ctx.isDisabled());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_2__.MainButtonsComponent],
    styles: [".numbers[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n\n.numberSelect[_ngcontent-%COMP%] {\n  margin: 1em 0em;\n}\n\n.mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.mat-input-element[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceURL=webpack://./src/app/main-page/main-tabs-series/main-tabs-series.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1wYWdlL21haW4tdGFicy1zZXJpZXMvbWFpbi10YWJzLXNlcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7O0VBRUksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5udW1iZXJzIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLm51bWJlclNlbGVjdCB7XG4gIG1hcmdpbjogMWVtIDBlbTtcbn1cblxuLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkLFxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2765:
/*!*************************************************!*\
  !*** ./src/app/math-generator/mathGenerator.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathGenerator": () => (/* binding */ MathGenerator)
/* harmony export */ });
/* harmony import */ var _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathProblemTypes */ 3137);
/* harmony import */ var _mathProblem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathProblem */ 7628);
/* harmony import */ var _rangeManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rangeManager */ 3623);



//import { Worksheets } from './worksheets';
class MathGenerator {
  static generateProblem(config) {
    return MathGenerator.generateProblemNext(config, 0);
  }
  static generateProblemNext(config, index) {
    //TODO Change this!!!!!!!!!!!!!!!
    //console.log("//TODO Change this!!!!!!!!!!!!!!!")
    let it = config.generators.values();
    let itres = it.next();
    let idx = 0;
    let worksheetItem = null;
    while (!itres.done) {
      worksheetItem = itres.value;
      //console.log(mp.funcName)
      if (++idx >= index) {
        break;
      }
      itres = it.next();
      if (itres.done) {
        it = config.generators.values();
        itres = it.next();
        //console.log(itres.done)
      }
    }

    console.log(worksheetItem);
    if (worksheetItem == null) {
      return MathGenerator.default();
    }
    return worksheetItem.func(worksheetItem);
  }
  static getListofRandomNumber(generateRange, mathProblemTypes) {
    var values = [];
    var values = [];
    for (var i = 0; i < generateRange.length; i++) {
      let rg = generateRange[i];
      let value = MathGenerator.getRandomIntInclusive(rg?.min, rg?.max);
      values.push(value);
    }
    //Avoid negative for substraction
    if (mathProblemTypes === _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION) {
      console.log(values);
      //Keep the result positive
      values.sort((a, b) => b - a);
      console.log(values);
    }
    return new _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem(mathProblemTypes, values);
  }
  static getRandomIntInclusive(min = 1, max = 10) {
    //min = Math.ceil(min);
    //max = Math.floor(max);
    let val = max - min + 1;
    return Math.floor(Math.random() * val) + min; //The maximum is inclusive and the minimum is inclusive 
  }

  static toArray(a, b) {
    return [a, b];
  }
  static default() {
    let generateRange = [{
      min: 1,
      max: 1
    }, {
      min: 1,
      max: 1
    }];
    return MathGenerator.getListofRandomNumber(generateRange, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION);
  }
  static getSeries(type, numbers1, numbers2, shuffle = false) {
    let size = _rangeManager__WEBPACK_IMPORTED_MODULE_2__.RangeManager.getSize(numbers1) * _rangeManager__WEBPACK_IMPORTED_MODULE_2__.RangeManager.getSize(numbers2);
    let list = new Array(size);
    let invert = false;
    switch (type) {
      case _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION:
      case _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.DIVISION:
        type = _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MATHProplemActions[type].invert;
        invert = true;
        break;
    }
    let i = 0;
    for (let range2 of numbers2) {
      for (let number2 = range2.start; number2 <= range2.end; number2++) {
        for (let range1 of numbers1) {
          for (let number1 = range1.start; number1 <= range1.end; number1++) {
            let mathProblem;
            if (invert) {
              mathProblem = new _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem(type, [number1, number2]).getInvert();
            } else {
              mathProblem = new _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem(type, [number1, number2]);
            }
            list[i++] = mathProblem;
          }
        }
      }
    }
    if (shuffle) {
      list = _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem.shuffle(list);
    }
    return list;
  }
  static getSeries2(type, numbers, start, end, shuffle = false) {
    let size = (end - start + 1) * numbers.length;
    let list = new Array(size);
    let invert = false;
    switch (type) {
      case _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION:
      case _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.DIVISION:
        type = _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MATHProplemActions[type].invert;
        invert = true;
        break;
    }
    let number2 = start;
    for (let i = 0; i < size; i) {
      for (let number of numbers) {
        let mathProblem;
        if (invert) {
          mathProblem = new _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem(type, [number2, number]).getInvert();
        } else {
          mathProblem = new _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem(type, [number, number2]);
        }
        list[i++] = mathProblem;
      }
      number2++;
    }
    if (shuffle) {
      list = _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem.shuffle(list);
    }
    return list;
  }
}

/***/ }),

/***/ 7628:
/*!***********************************************!*\
  !*** ./src/app/math-generator/mathProblem.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathProblem": () => (/* binding */ MathProblem)
/* harmony export */ });
/* harmony import */ var _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathProblemTypes */ 3137);

//import { MathGenerator } from './mathGenerator';
class MathProblem {
  constructor(mathProblemType, values, answer = null) {
    this.values = values;
    this.questionStr = null;
    this._answer = answer;
    this.mathProplemActions = _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MATHProplemActions[mathProblemType];
  }
  get answer() {
    if (this._answer == null) {
      this._answer = this.mathProplemActions.opFunc(this.values);
    }
    return this._answer;
  }
  get question() {
    if (this.questionStr == null) {
      let q = "";
      let first = true;
      for (let index = 0; index < this.values.length; ++index) {
        if (!first) {
          q += " " + this.mathProplemActions.operator + " ";
        } else {
          first = false;
        }
        q += this.values[index];
      }
      q += ' = ';
      this.questionStr = q;
    }
    return this.questionStr;
  }
  shuffle() {
    this.values = MathProblem.shuffle(this.values);
  }
  orderAssending() {
    this.values.sort((a, b) => a - b);
  }
  orderDescending() {
    this.values.sort((a, b) => b - a);
  }
  static shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  getInvert() {
    return MathProblem.getInvert(this);
  }
  static getInvert(mathProblem) {
    let answer = null;
    let values;
    let mathProblemType;
    switch (mathProblem.mathProplemActions.code) {
      case _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION:
        mathProblemType = _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION;
        values = [mathProblem.answer, ...mathProblem.values.filter((v, index) => index !== 0)];
        break;
      case _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION:
        mathProblemType = _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION;
        values = [mathProblem.answer, ...mathProblem.values.filter((v, index) => index !== 0)];
        break;
      case _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.MULTIPLICATION:
        mathProblemType = _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.DIVISION;
        values = [mathProblem.answer, ...mathProblem.values.filter((v, index) => index !== 0)];
        break;
      case _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.DIVISION:
        mathProblemType = _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.MULTIPLICATION;
        values = [mathProblem.answer, ...mathProblem.values.filter((v, index) => index !== 0)];
        break;
      default:
        console.error(`Wrong type ${mathProblem.mathProplemActions.code}`);
    }
    return new MathProblem(mathProblemType, values, answer);
  }
  get displaySize() {
    return Math.max(...this.values.map(x => x.toString().length));
  }
}

/***/ }),

/***/ 3137:
/*!****************************************************!*\
  !*** ./src/app/math-generator/mathProblemTypes.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MATHProplemActions": () => (/* binding */ MATHProplemActions),
/* harmony export */   "MathProblemTypes": () => (/* binding */ MathProblemTypes),
/* harmony export */   "Relation": () => (/* binding */ Relation)
/* harmony export */ });
var MathProblemTypes;
(function (MathProblemTypes) {
  MathProblemTypes["ADDITION"] = "ADDITION";
  MathProblemTypes["SUBTRACTION"] = "SUBTRACTION";
  MathProblemTypes["MULTIPLICATION"] = "MULTIPLICATION";
  MathProblemTypes["DIVISION"] = "DIVISION";
})(MathProblemTypes || (MathProblemTypes = {}));
const MATHProplemActions = {
  "ADDITION": {
    name: "Addition",
    code: MathProblemTypes.ADDITION,
    operator: "+",
    opFunc: value => {
      return value.reduce((a, b) => a + b, 0);
    },
    invert: MathProblemTypes.SUBTRACTION
  },
  "SUBTRACTION": {
    name: "Soustraction",
    code: MathProblemTypes.SUBTRACTION,
    operator: "-",
    opFunc: value => {
      return value.reduce((total, num) => total - num);
    },
    invert: MathProblemTypes.ADDITION
  },
  "MULTIPLICATION": {
    name: "Multiplication",
    code: MathProblemTypes.MULTIPLICATION,
    operator: "x",
    opFunc: value => {
      return value.reduce((total, num) => total * num);
    },
    invert: MathProblemTypes.DIVISION
  },
  "DIVISION": {
    name: "Division",
    code: MathProblemTypes.DIVISION,
    operator: "÷",
    opFunc: value => {
      return value.reduce((total, num) => total / num);
    },
    invert: MathProblemTypes.MULTIPLICATION
  }
};
var Relation;
(function (Relation) {
  Relation[Relation["LESS"] = 0] = "LESS";
  Relation[Relation["LESS_EQUALS"] = 1] = "LESS_EQUALS";
  Relation[Relation["EQUALS"] = 2] = "EQUALS";
  Relation[Relation["GREATER_EQUALS"] = 3] = "GREATER_EQUALS";
  Relation[Relation["GREATER"] = 4] = "GREATER";
  Relation[Relation["NOT_EQUALS"] = 5] = "NOT_EQUALS";
})(Relation || (Relation = {}));

/***/ }),

/***/ 3623:
/*!************************************************!*\
  !*** ./src/app/math-generator/rangeManager.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RangeManager": () => (/* binding */ RangeManager)
/* harmony export */ });
class RangeManager {
  constructor() {}
  static getNumbers(ranges) {
    let result = [];
    ranges.forEach(r => {
      for (let i = r.start; i <= r.start; i++) {
        result.push(i);
      }
    });
    return result;
  }
  static rangeParser(str, combine) {
    // split the range string
    let arr = str.split(',');
    let ranges = [];
    // parse all ranges
    for (let i = 0; i < arr.length; i++) {
      let range = arr[i].split('-');
      let rangeNum = [];
      let k = 0;
      let previousIsNaN = false;
      for (let j = 0; j < range.length; j++) {
        let a = parseInt(range[j]);
        if (isNaN(a)) {
          previousIsNaN = true;
        } else {
          rangeNum.push(previousIsNaN ? a * -1 : a);
          previousIsNaN = false;
        }
      }
      if (rangeNum.length == 0) {
        throw Error(`Malformed range '${arr[i]}'`);
      }
      let start = rangeNum[0];
      let end = rangeNum.length > 1 ? rangeNum[1] : start;
      // -nnn
      if (isNaN(start)) {
        console.warn(`isNaN(start)`);
      } else if (isNaN(end)) {
        end = start;
      } else if (end < start) {
        let tmp = end;
        end = start;
        start = tmp;
      }
      // add range
      ranges.push({
        start: start,
        end: end
      });
    }
    return combine ? this.combineRanges(ranges) : ranges;
  }
  /**
   * Combine overlapping & adjacent ranges.
   * @private
   */
  static combineRanges(ranges) {
    let ordered = ranges.sort((a, b) => {
      return a.start - b.start;
    });
    let range = ordered[0];
    let combined = [range];
    for (let i = 1; i < ordered.length; i++) {
      let current = ordered[i];
      if (range.end + 1 >= current.start) {
        range.end = current.end;
      } else {
        range = current;
        combined.push(range);
      }
    }
    return combined;
  }
  static getSize(ranges) {
    let size = 0;
    ranges.forEach(r => size += r.end + 1 - r.start);
    return size;
  }
  static toString(ranges) {
    return ranges.map(r => {
      if (r.start == r.end) {
        return r.start.toString();
      } else {
        return `${r.start} - ${r.end}`;
      }
    }).join(", ");
  }
}

/***/ }),

/***/ 1202:
/*!**********************************************!*\
  !*** ./src/app/math-generator/worksheets.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorksheetProgram": () => (/* binding */ WorksheetProgram),
/* harmony export */   "WorksheetProgramInstruction": () => (/* binding */ WorksheetProgramInstruction),
/* harmony export */   "Worksheets": () => (/* binding */ Worksheets)
/* harmony export */ });
/* harmony import */ var _mathGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathGenerator */ 2765);
/* harmony import */ var _mathProblem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathProblem */ 7628);
/* harmony import */ var _mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mathProblemTypes */ 3137);



class Worksheets {
  static addSingleDigitNumber() {
    let generateRange = [{
      min: 0,
      max: 10
    }, {
      min: 1,
      max: 10
    }];
    return _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getListofRandomNumber(generateRange, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.ADDITION);
  }
  static testLongNum() {
    let generateRange = [{
      min: 10000,
      max: 100000
    }, {
      min: 10000,
      max: 100000
    }];
    return _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getListofRandomNumber(generateRange, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.ADDITION);
  }
  static addSingleDigitNumberNoCarry() {
    let prog = {
      answer: [{
        min: 1,
        max: 9
      }],
      number: [{
        min: 1,
        max: 9
      }],
      mathProblemType: _mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.ADDITION
    };
    return Worksheets.addTowXDigitNumbersNoCarryProg(prog);
  }
  //Adding two single-digit numbers - sum 10 or less
  static addTowSingleDigitNumberSum10orLess() {
    return Worksheets.addTowXDigitNumbersNoCarry(1);
  }
  //Add a 2-digit number and a 1-digit number mentally - within the same ten
  static addDoubleDigitWithSingleDigitNumberNoCarry() {
    let prog = {
      answer: [{
        min: 1,
        max: 9
      }, {
        min: 0,
        max: 9
      }],
      number: [{
        min: 0,
        max: 0
      }, {
        min: 0,
        max: 9
      }],
      mathProblemType: _mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.ADDITION
    };
    return Worksheets.addTowXDigitNumbersNoCarryProg(prog);
  }
  //Add a 2-digit number and a 1-digit number in columns
  static addTowDoubleDigitNumbersNoCarry() {
    return Worksheets.addTowXDigitNumbersNoCarry(2);
  }
  //Add a 2-digit number and a 1-digit number in columns
  static addTowXDigitNumbersNoCarry(xDigit) {
    let prog = new WorksheetProgram(xDigit, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.ADDITION);
    for (let i = 0; i < xDigit; ++i) {
      let first = i === 0;
      let instruction = {
        min: 0,
        max: 9
      };
      prog.answer[i] = instruction;
      prog.number[i] = {
        ...instruction
      };
      if (first) {
        prog.answer[i].min = 2;
        prog.number[i].min = 1;
      } else {
        prog.answer[i].min = 1;
      }
    }
    return Worksheets.addTowXDigitNumbersNoCarryProg(prog);
  }
  static addTowXDigitNumbersNoCarryProg(prog) {
    let answer = 0;
    let number2 = 0;
    let xDigit = prog.answer.length;
    for (let i = 0; i < xDigit;) {
      let first = i == 0;
      let a = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(prog.answer[i].min, prog.answer[i].max);
      let valmax = Math.min(first ? a - 1 : a, prog.number[i].max);
      let valmin = first ? 1 : prog.number[i].min;
      let n = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(valmin, valmax);
      let pow = xDigit - ++i;
      answer += a * 10 ** pow;
      number2 += n * 10 ** pow;
    }
    let number1 = answer - number2;
    let mp = new _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem(prog.mathProblemType, [number1, number2], answer);
    //mp.shuffle();
    return mp;
  }
  static addTowDigitNumberWithTowDigitNumberWithCarry() {
    let prog = {
      answer: [{
        min: 3,
        max: 9
      }, {
        min: 0,
        max: 8
      }],
      number: [{
        min: 1,
        max: 9
      }, {
        min: 0,
        max: 9
      }],
      mathProblemType: _mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.ADDITION
    };
    return Worksheets.addTowXDigitNumbersWithCarry(prog);
  }
  //TODO test
  static addTowXDigitNumbersWithCarry(prog) {
    let answer = 0;
    let number2 = 0;
    let xDigit = prog.answer.length;
    for (let i = 0; i < xDigit;) {
      let first = i === 0;
      let last = i + 1 >= xDigit;
      let a = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(prog.answer[i].min, prog.answer[i].max);
      let valmin = prog.number[i].min;
      let valmax = prog.number[i].max;
      if (first) {
        valmax = Math.min(a - 2, prog.number[i].max);
      }
      if (last) {
        valmin = a + 1;
      } else {
        valmax = Math.min(a - 1, prog.number[i].max);
      }
      let n = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(valmin, valmax);
      let pow = xDigit - ++i;
      answer += a * 10 ** pow;
      number2 += n * 10 ** pow;
    }
    let number1 = answer - number2;
    let mp = new _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem(prog.mathProblemType, [number1, number2], answer);
    mp.shuffle();
    return mp;
  }
  static addTwoNumbersAnswerBellow20() {
    let answer = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(2, 19);
    let number2 = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(0, answer);
    let number1 = answer - number2;
    let mp = new _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem(_mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.ADDITION, [number1, number2], answer);
    mp.shuffle();
    return mp;
  }
  static addTwoNumbersAnswerBetwen10And20() {
    let answer = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(10, 20);
    let number2 = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(0, answer);
    let number1 = answer - number2;
    let mp = new _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem(_mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.ADDITION, [number1, number2], answer);
    mp.shuffle();
    return mp;
  }
  //Subtraction facts - numbers up to 10
  static subtractOneDigitNumberFromOneDigitNumberWithoutRegrouping() {
    let prog = {
      answer: [{
        min: 1,
        max: 9
      }],
      number: [{
        min: 0,
        max: 9
      }],
      mathProblemType: _mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.SUBTRACTION
    };
    return Worksheets.subtractXDigitNumberFromXDigitNumberWithoutRegrouping(prog);
  }
  static subtractAnswerbelow10() {
    let highNumber = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(2, 9 + 9);
    let min = highNumber % 10 + 1;
    let answer = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(min, 9);
    if (highNumber < answer) {
      let tmp = highNumber;
      highNumber = answer;
      answer = tmp;
    }
    let number = highNumber - answer;
    let mp = new _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem(_mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.SUBTRACTION, [highNumber, number], answer);
    return mp;
  }
  static subtractAnswerbelow10_1() {
    let answer = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(1, 9);
    let number2 = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(0, 9);
    let number1 = answer + number2;
    let mp = new _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem(_mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.SUBTRACTION, [number1, number2], answer);
    return mp;
  }
  //Subtract multiples of 10
  static subtractMultiplesOf10() {
    let prog = {
      answer: [{
        min: 1,
        max: 9
      }, {
        min: 0,
        max: 0
      }],
      number: [{
        min: 1,
        max: 9
      }, {
        min: 0,
        max: 0
      }],
      mathProblemType: _mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.SUBTRACTION
    };
    return Worksheets.subtractXDigitNumberFromXDigitNumberWithoutRegrouping(prog);
  }
  //Subtract a one-digit number from a two-digit number - without regrouping
  static subtractOneDigitNumberFromTwoDigitNumberWithoutRegrouping() {
    let prog = {
      answer: [{
        min: 1,
        max: 9
      }, {
        min: 0,
        max: 9
      }],
      number: [{
        min: 0,
        max: 0
      }, {
        min: 0,
        max: 9
      }],
      mathProblemType: _mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.SUBTRACTION
    };
    return Worksheets.subtractXDigitNumberFromXDigitNumberWithoutRegrouping(prog);
  }
  //Subtract a one-digit number from a two-digit number - with regrouping
  static subtractOneDigitNumberFromTwoDigitNumberWithRegrouping() {
    let prog = {
      answer: [{
        min: 1,
        max: 9
      }, {
        min: 0,
        max: 8
      }],
      number: [{
        min: 0,
        max: 0
      }, {
        min: 1,
        max: 9
      }],
      mathProblemType: _mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.SUBTRACTION
    };
    return Worksheets.subtractXDigitNumberFromXDigitNumberWithRegrouping(prog);
  }
  //Subtract two two-digit numbers - without regrouping
  static subtractTowDigitNumberFromTwoDigitNumberWithoutRegrouping() {
    let prog = {
      answer: [{
        min: 1,
        max: 9
      }, {
        min: 0,
        max: 9
      }],
      number: [{
        min: 0,
        max: 0
      }, {
        min: 0,
        max: 9
      }],
      mathProblemType: _mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.SUBTRACTION
    };
    return Worksheets.subtractXDigitNumberFromXDigitNumberWithoutRegrouping(prog);
  }
  //Subtract two two-digit numbers - with regrouping
  static subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping() {
    let prog = {
      answer: [{
        min: 2,
        max: 9
      }, {
        min: 0,
        max: 8
      }],
      number: [{
        min: 1,
        max: 9
      }, {
        min: 0,
        max: 9
      }],
      mathProblemType: _mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__.MathProblemTypes.SUBTRACTION
    };
    return Worksheets.subtractXDigitNumberFromXDigitNumberWithRegrouping(prog);
  }
  static subtractXDigitNumberFromXDigitNumberWithoutRegrouping(prog) {
    return Worksheets.subtractXDigitNumberFromXDigitNumber(prog, false);
  }
  static subtractXDigitNumberFromXDigitNumberWithRegrouping(prog) {
    return Worksheets.subtractXDigitNumberFromXDigitNumber(prog, true);
  }
  static subtractXDigitNumberFromXDigitNumber(prog, withRegrouping) {
    let number1 = 0;
    let number2 = 0;
    let xDigit = prog.answer.length;
    for (let i = 0; i < xDigit;) {
      let a = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(prog.answer[i].min, prog.answer[i].max);
      let valmin = prog.number[i].min;
      let valmax = prog.number[i].max;
      let n = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(valmin, valmax);
      let isFirst = i == 0;
      let isLast = i + 1 >= xDigit;
      if (isFirst) {
        if (a < n) {
          let tmp = a;
          a = n;
          n = tmp;
        }
        if (withRegrouping) {
          if (a === n) {
            //if equals, it will go bellow 0 
            ++a;
          }
        }
      } else {
        if (withRegrouping) {
          if (a === n) {
            //if equals there are no regroupping
            ++n;
          } else if (a > n) {
            let tmp = a;
            a = n;
            n = tmp;
          }
        } else {
          if (a < n) {
            let tmp = a;
            a = n;
            n = tmp;
          }
        }
      }
      let pow = xDigit - ++i;
      number1 += a * 10 ** pow;
      number2 += n * 10 ** pow;
    }
    let answer = number1 - number2;
    let mp = new _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem(prog.mathProblemType, [number1, number2], answer);
    return mp;
  }
  static subtractXDigitNumberFromXDigitNumber_back(prog, withRegrouping) {
    let number1 = 0;
    let number2 = 0;
    let xDigit = prog.answer.length;
    for (let i = 0; i < xDigit;) {
      let a = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(prog.answer[i].min, prog.answer[i].max);
      let valmin = prog.number[i].min;
      let valmax = prog.number[i].max;
      if (withRegrouping) {
        if (i == 0) {
          //is first
          valmax = Math.min(prog.number[i].max, a - 1);
        } else {
          valmin = a + 1;
        }
        ;
      } else {
        /*
        if (i + 1 >= xDigit) { // is last
         valmax = a;
        } else {
         valmax = Math.min(prog.number[i].max, a - 1);
        }*/
        valmax = a;
      }
      let n = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getRandomIntInclusive(valmin, valmax);
      let pow = xDigit - ++i;
      number1 += a * 10 ** pow;
      number2 += n * 10 ** pow;
    }
    let answer = number1 - number2;
    let mp = new _mathProblem__WEBPACK_IMPORTED_MODULE_1__.MathProblem(prog.mathProblemType, [number1, number2], answer);
    return mp;
  }
}
class WorksheetProgram {
  constructor(xDigit, mathProblemType) {
    this.answer = new Array(xDigit);
    this.number = new Array(xDigit);
    this.mathProblemType = mathProblemType;
  }
}
class WorksheetProgramInstruction {}

/***/ }),

/***/ 5230:
/*!***********************************************!*\
  !*** ./src/app/math-generator/worksheets2.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Worksheets2": () => (/* binding */ Worksheets2)
/* harmony export */ });
/* harmony import */ var _mathGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathGenerator */ 2765);
/* harmony import */ var _mathProblemTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathProblemTypes */ 3137);
/* harmony import */ var _rangeManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rangeManager */ 3623);



class Worksheets2 {
  static multiplySingleDigitNumber() {
    let generateRange = [{
      min: 0,
      max: 10
    }, {
      min: 0,
      max: 10
    }];
    return _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getListofRandomNumber(generateRange, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_1__.MathProblemTypes.MULTIPLICATION);
  }
  static multiplicationTable(worksheetsItem) {
    let parameters = worksheetsItem.parameters;
    if (!parameters) {
      console.warn(`Parameters == null or undefined`);
    }
    let parametersType = parameters;
    let context = worksheetsItem._context;
    if (context == null) {
      let numbersRange1 = _rangeManager__WEBPACK_IMPORTED_MODULE_2__.RangeManager.rangeParser(parametersType.numbers1, true);
      let numbersRange2 = _rangeManager__WEBPACK_IMPORTED_MODULE_2__.RangeManager.rangeParser(parametersType.numbers2, true);
      let series = _mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.getSeries(parameters.problemTypes, numbersRange1, numbersRange2, parameters.shuffle);
      context = {
        next: 0,
        series: series
      };
      worksheetsItem._context = context;
    } else {
      context.next++;
    }
    let mathProblem = context.series[context.next % context.series.length];
    return mathProblem;
  }
}

/***/ }),

/***/ 5462:
/*!*************************************************!*\
  !*** ./src/app/math-generator/worksheetsMap.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorksheetsMap": () => (/* binding */ WorksheetsMap)
/* harmony export */ });
/* harmony import */ var _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathProblemTypes */ 3137);
/* harmony import */ var _worksheets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worksheets */ 1202);
/* harmony import */ var _worksheets2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./worksheets2 */ 5230);



class WorksheetsMap {
  constructor() {
    this.map = new Map();
    this.index = 0;
    this.values = [this.generateMapItem("Addition de deux nombres \xE0 un chiffre sans retenu", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.addSingleDigitNumberNoCarry, 1, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION), this.generateMapItem("Addition de deux nombres \xE0 un chiffre dont la sommes est de 10 ou moins", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.addTowSingleDigitNumberSum10orLess, 1, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION), this.generateMapItem("Addition de deux nombres \xE0 un chiffre", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.addSingleDigitNumber, 1, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION), this.generateMapItem("Addition d'un nombre \xE0 deux chiffres avec un nombre \xE0 un chiffre - sans retenue", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.addDoubleDigitWithSingleDigitNumberNoCarry, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION), this.generateMapItem("Addition d'un nombre \xE0 deux chiffres avec un nombre \xE0 deux chiffres - sans retenue", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.addTowDoubleDigitNumbersNoCarry, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION), this.generateMapItem("Addition d'un nombre \xE0 deux chiffres avec un nombre \xE0 un chiffre - avec retenue", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.addTowDigitNumberWithTowDigitNumberWithCarry, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION), this.generateMapItem("Addition de deux nombre dont la r\xE9ponse est en desous de 20", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.addTwoNumbersAnswerBellow20, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION), this.generateMapItem("Soustaction de nombres jusqu'\xE0 10", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractOneDigitNumberFromOneDigitNumberWithoutRegrouping, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Soustaction dont la r\xE9ponse est en dessous de 10", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractAnswerbelow10, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Soustraction de nombre \xE0 un chiffre d'un nombre \xE0 deux chiffres - sans emprunt", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractOneDigitNumberFromTwoDigitNumberWithoutRegrouping, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Soustraction de multiples de 10", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractMultiplesOf10, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Soustraction de nombre \xE0 un chiffre d'un nombre \xE0 deux chiffres - avec emprunt", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractOneDigitNumberFromTwoDigitNumberWithRegrouping, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Soustraction de deux nombres \xE0 deux chiffres - sans emprunt", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractTowDigitNumberFromTwoDigitNumberWithoutRegrouping, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Soustraction de deux nombres \xE0 deux chiffres - avec emprunt", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Soustraction de deux nombres \xE0 deux chiffres - avec emprunt", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Multiplication de deux nombres \xE0 un chiffre", _worksheets2__WEBPACK_IMPORTED_MODULE_2__.Worksheets2.multiplySingleDigitNumber, 3, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.MULTIPLICATION)];
    for (let i = 1; i <= 12; i++) {
      let workSheetItem = this.generateMapItem("Table de " + i + "", _worksheets2__WEBPACK_IMPORTED_MODULE_2__.Worksheets2.multiplicationTable, 3, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.MULTIPLICATION, {
        problemTypes: _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.MULTIPLICATION,
        numbers1: i.toString(),
        numbers2: "1-12",
        shuffle: true
      });
      this.values.push(workSheetItem);
    }
  }
  static #_ = this.worksheetsMap = null;
  static getWorksheetsItem() {
    return this.getInstance().values;
  }
  static has(code) {
    return this.getInstance().map.has(code);
  }
  static getInstance() {
    if (this.worksheetsMap == null) {
      this.worksheetsMap = new WorksheetsMap();
    }
    return this.worksheetsMap;
  }
  generateMapItem(label, func, grade, mathProblemType, param) {
    let w = {
      label: label,
      func: func,
      funcName: func.name,
      mathProblemType: mathProblemType,
      code: mathProblemType + "_" + this.index++,
      parameters: param,
      grade: grade
    };
    this.map.set(w.code, w);
    return w;
  }
}

/***/ }),

/***/ 2537:
/*!**********************************************************!*\
  !*** ./src/app/math-question/math-question.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathQuestionComponent": () => (/* binding */ MathQuestionComponent)
/* harmony export */ });
/* harmony import */ var _math_generator_mathGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math-generator/mathGenerator */ 2765);
/* harmony import */ var _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/math-question.service */ 6819);
/* harmony import */ var _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../column-answer/column-answer.component */ 663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);








function MathQuestionComponent_ng_container_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function MathQuestionComponent_ng_container_4_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function MathQuestionComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 8)(2, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MathQuestionComponent_ng_container_4_ng_container_5_Template, 1, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MathQuestionComponent_ng_container_4_ng_container_7_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.problem.mathProplemActions.operator);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.config.answerMode == ctx_r0.columnAnswerMode.COLUMNS)("ngIfThen", _r3)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r7);
  }
}
function MathQuestionComponent_ng_template_5_ng_template_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r16.problem.mathProplemActions.operator);
  }
}
function MathQuestionComponent_ng_template_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MathQuestionComponent_ng_template_5_ng_template_1_span_2_Template, 2, 1, "span", 18);
  }
  if (rf & 2) {
    const num_r13 = ctx.$implicit;
    const last_r15 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](num_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", last_r15 == false);
  }
}
function MathQuestionComponent_ng_template_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainer"](0);
  }
}
function MathQuestionComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MathQuestionComponent_ng_template_5_ng_template_1_Template, 3, 2, "ng-template", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MathQuestionComponent_ng_template_5_ng_container_4_Template, 1, 0, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.problem.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", _r7);
  }
}
function MathQuestionComponent_ng_template_7_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const digit_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](digit_r22);
  }
}
function MathQuestionComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MathQuestionComponent_ng_template_7_div_0_div_1_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const number_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", number_r18.toString().split(""));
  }
}
function MathQuestionComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MathQuestionComponent_ng_template_7_div_0_Template, 2, 1, "div", 19);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.problem.values);
  }
}
function MathQuestionComponent_ng_template_9_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const number_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", number_r24, " ");
  }
}
function MathQuestionComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MathQuestionComponent_ng_template_9_div_0_Template, 2, 1, "div", 23);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.problem.values);
  }
}
function MathQuestionComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25)(1, "app-column-answer", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("focusChange", function MathQuestionComponent_ng_template_11_Template_app_column_answer_focusChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r27.onFocusChange($event));
    })("existFocus", function MathQuestionComponent_ng_template_11_Template_app_column_answer_existFocus_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r29.existFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r8.questionId.toString())("size", ctx_r8.size)("mode", ctx_r8.config.answerMode)("value", ctx_r8.userInput)("valueChange", ctx_r8.onValueChange)("answerStatus", ctx_r8.status);
  }
}
const regexNumVal = /[0-9,-\.]/;
class MathQuestionComponent {
  constructor(mathQuestionService) {
    this.mathQuestionService = mathQuestionService;
    this.status = _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.EMPTY;
    this.stacked = true;
    this.myEventSubscriptions = [];
    this.currentFocus = _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.FocusType.BLUR;
    this.size = 3;
    this.columnAnswerMode = _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.ColumnAnswerMode;
    this.onValueChange = (userInput, callerId) => {
      console.debug(this.log(`onValueChange userInput ${userInput} ${typeof userInput} callerId ${callerId}`));
      this.userInput = userInput;
      let status = null;
      if (this.config.realTimeValidation) {
        status = this.validateAnswer(true);
      } else {
        status = this.validateInput();
      }
      return status;
    };
  }
  ngOnInit() {
    console.debug(this.log("QID " + this.id));
  }
  get id() {
    return "mq" + this.questionId;
  }
  get problem() {
    return this._problem;
  }
  ngOnDestroy() {
    this.myEventSubscriptions.forEach(subscription => {
      console.debug(this.log(`subscription.unsubscribe() ${subscription}`));
      subscription.unsubscribe();
    });
  }
  ngOnChanges(changes) {
    if (changes['config']) {
      this.stacked = this.config.orientation == "VERTICAL";
    }
    if (changes['needReset']) {
      if (this.needReset || changes['needReset'].isFirstChange()) {
        this.reset();
      }
    }
  }
  validateInput() {
    let empty = this.userInput == null || typeof this.userInput == "string" && this.userInput.trim().length == 0;
    let status = this.status;
    if (this.currentFocus == _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.FocusType.FOCUS) {
      status = _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.FOCUS;
    } else {
      status = empty ? _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.EMPTY : _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.ANSWERED;
    }
    this.changeStatus(status, false, true);
    return this.status;
  }
  validateAnswer(informParent) {
    let answer = this.problem.answer;
    console.debug(this.log(`User Input: ${this.userInput} Answer: ${answer}`));
    let userAnswer = parseInt(this.userInput);
    console.debug(this.log(`User Input: ${this.userInput} userAnswer: ${userAnswer}`));
    let status = this.status;
    if (userAnswer === answer) {
      console.debug(this.log("R"));
      status = _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.RIGHT;
    } else if (isNaN(userAnswer)) {
      console.debug(this.log("Void"));
      status = this.currentFocus == _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.FocusType.FOCUS ? _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.FOCUS : _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.EMPTY;
    } else if (this.currentFocus == _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.FocusType.FOCUS) {
      let userAnswerLength = userAnswer.toString().length; //this to ensure raw string length (it trims)
      let answerLength = answer.toString().length;
      if (userAnswerLength >= answerLength) {
        console.debug(this.log("W Length"));
        status = _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.WRONG;
      } else {
        console.debug(this.log("Infocus"));
        status = _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.FOCUS;
      }
    } else {
      console.debug(this.log("W"));
      status = _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.WRONG;
    }
    this.changeStatus(status, false, informParent);
    return this.status;
  }
  preventUpDown(event) {
    if (event.code === "ArrowUp" || event.code === "ArrowDown") {
      event.preventDefault();
    }
  }
  typeKey(event) {
    console.debug(this.log("typeKey"));
    console.debug(this.log(event));
  }
  reset() {
    this._problem = _math_generator_mathGenerator__WEBPACK_IMPORTED_MODULE_0__.MathGenerator.generateProblemNext(this.config, this.questionId);
    this.size = Math.max(this.problem.displaySize + 1, 3);
    console.debug(this.log("PROBLEM !!!"));
    console.debug(this.log(this._problem));
    console.debug(this.log(this.config));
    this.changeStatus(_services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.EMPTY, false, false);
    this.userInput = null;
  }
  clear() {
    this.currentFocus = _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.FocusType.BLUR;
    this.onValueChange(null, "THIS");
  }
  notRight() {
    return this.status !== _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.RIGHT;
  }
  onFocusChange(newFocus) {
    let focucusingOut = this.currentFocus == _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.FocusType.FOCUS && newFocus == _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.FocusType.BLUR;
    console.debug(this.log(`onFocusChange ${newFocus} currentFocus ${this.currentFocus} focusingOut: ${focucusingOut} UserIinput: "${this.userInput}"`));
    this.currentFocus = newFocus;
    setTimeout(() => {
      if (newFocus === _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.FocusType.FOCUS) {
        switch (this.status) {
          case _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.WRONG:
          case _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.EMPTY:
          case _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.ANSWERED:
            this.changeStatus(_services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.FOCUS, false, true);
            break;
        }
      }
    });
    if (focucusingOut) {
      this.onValueChange(this.userInput, "THIS");
    }
  }
  changeStatus(newStatus, forceExitFocus, isParentCanValidate) {
    if (this.status !== newStatus) {
      this.status = newStatus;
      this.informParent(forceExitFocus, isParentCanValidate);
    }
  }
  existFocus(event) {
    console.warn(this.log("exitWidget"));
    this.informParent(true, true);
  }
  focus() {
    console.debug(this.log(`focus  ${this.id} `));
    console.debug(this.log(this.columnAnswerComponent));
    //this.inFocus = true;
    setTimeout(() => {
      this.columnAnswerComponent.focus();
    });
  }
  notEmpty() {
    return this.userInput.length != 0;
  }
  informParent(forceExit, isParentCanValidate) {
    let notification = {
      status: this.status,
      id: this.id,
      index: this.questionId,
      forceExitFocus: forceExit,
      isParentCanValidate: isParentCanValidate
    };
    this.mathQuestionService.next(notification);
  }
  invert() {
    this._problem = this._problem.getInvert();
    this.clear();
  }
  log(message) {
    let type = typeof message;
    if (type == 'string' || type == 'number') {
      return `MQ${this.questionId} - ${message}`;
    } else {
      return message;
    }
  }
  static #_ = this.ɵfac = function MathQuestionComponent_Factory(t) {
    return new (t || MathQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.MathQuestionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MathQuestionComponent,
    selectors: [["app-math-question"]],
    viewQuery: function MathQuestionComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.ColumnAnswerComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnAnswerComponent = _t.first);
      }
    },
    inputs: {
      config: "config",
      questionId: "questionId",
      needReset: "needReset"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
    decls: 13,
    vars: 3,
    consts: [[1, "content"], [1, "mat-h2"], [1, "mathQuestion"], [4, "ngIf", "ngIfElse"], ["flat", ""], ["columns", ""], ["normal", ""], ["answerField", ""], [1, "question_column"], [1, "operator"], [1, "numbers"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "hr_equals"], [4, "ngTemplateOutlet"], [1, "question_flat"], ["ngFor", "", 3, "ngForOf"], [1, "equals"], [1, "number_flat"], ["class", "operator", 4, "ngIf"], ["class", "number_column", 4, "ngFor", "ngForOf"], [1, "number_column"], ["class", "digit", 4, "ngFor", "ngForOf"], [1, "digit"], ["class", "number_normal", 4, "ngFor", "ngForOf"], [1, "number_normal"], [1, "answerField"], [3, "id", "size", "mode", "value", "valueChange", "answerStatus", "focusChange", "existFocus"]],
    template: function MathQuestionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MathQuestionComponent_ng_container_4_Template, 8, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MathQuestionComponent_ng_template_5_Template, 5, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MathQuestionComponent_ng_template_7_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MathQuestionComponent_ng_template_9_Template, 1, 1, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MathQuestionComponent_ng_template_11_Template, 2, 6, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Question\u00A0", ctx.questionId + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.stacked)("ngIfElse", _r1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgTemplateOutlet, _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.ColumnAnswerComponent],
    styles: [".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start {  }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end {  }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin: auto;\n  width: max-content;\n}\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.answerField[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  justify-content: flex-end;\n}\n\n.mathQuestion[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .mathAnswer[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 5px;\n}\n\n\n.equation.stacked[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 1em;\n  \n  text-align: right;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .equals[_ngcontent-%COMP%] {\n  display: block;\n  height: 0;\n  padding-bottom: 3px;\n  border-bottom: solid 2px;\n  overflow: hidden;\n}\n\n.equation[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(:first-child):not(input) {\n  margin-left: 0.3em;\n}\n\n.question_column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n.question_flat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n\n.question_flat[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: 0.2em;\n}\n\n.question_column[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: 0.2em;\n}\n\n.question_column[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%] {\n  padding-bottom: 0.15em;\n}\n\n.numbers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-end;\n}\n\n.number_normal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: flex-end;\n  height: 1em;\n  padding: 2px 5px;\n}\n\n.number_column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: flex-end;\n  height: 1em;\n  padding: 2px 0;\n}\n\n.digit[_ngcontent-%COMP%] {\n  display: flex;\n  width: 1em;\n  align-items: center;\n  justify-content: center;\n  padding: 2px 0;\n  border-color: deeppink transparent;\n  border-width: 1px;\n  border-left-style: dashed;\n}\n\n.digit[_ngcontent-%COMP%]:last-child {\n  border-right-style: solid;\n}\n\n.mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #388e3c;\n  outline-width: 15px;\n  caret-color: #388e3c;\n}\n\n.hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: rgba(0, 0, 0, 0.87);\n  border-color: rgba(0, 0, 0, 0.87);\n}\n\n.dark-theme[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .dark-theme   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #ffd740;\n  outline-width: 15px;\n  caret-color: #ffd740;\n}\n.dark-theme[_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: white;\n  border-color: white;\n}\n\n.light-theme[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .light-theme   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #bcaaa4;\n  outline-width: 15px;\n  caret-color: #bcaaa4;\n}\n.light-theme[_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: rgba(0, 0, 0, 0.87);\n  border-color: rgba(0, 0, 0, 0.87);\n}\n\n.deeppurple-amber[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .deeppurple-amber   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #ffd740;\n  outline-width: 15px;\n  caret-color: #ffd740;\n}\n.deeppurple-amber[_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: rgba(0, 0, 0, 0.87);\n  border-color: rgba(0, 0, 0, 0.87);\n}\n\n.indigo-pink[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .indigo-pink   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #ff4081;\n  outline-width: 15px;\n  caret-color: #ff4081;\n}\n.indigo-pink[_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: rgba(0, 0, 0, 0.87);\n  border-color: rgba(0, 0, 0, 0.87);\n}\n\n.pink-bluegrey[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .pink-bluegrey   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #b0bec5;\n  outline-width: 15px;\n  caret-color: #b0bec5;\n}\n.pink-bluegrey[_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: white;\n  border-color: white;\n}\n\n.purple-green[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .purple-green   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #69f0ae;\n  outline-width: 15px;\n  caret-color: #69f0ae;\n}\n.purple-green[_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: white;\n  border-color: white;\n}\n\n.candy[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .candy   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #795548;\n  outline-width: 15px;\n  caret-color: #795548;\n}\n.candy[_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: rgba(0, 0, 0, 0.87);\n  border-color: rgba(0, 0, 0, 0.87);\n}\n/*# sourceURL=webpack://./node_modules/@angular/material/core/ripple/_ripple.scss */\n/*# sourceURL=webpack://./src/app/math-question/math-question.component.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/a11y/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/overlay/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/text-field/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/focus-indicators/_private.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/style/_layout-common.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21hdGgtcXVlc3Rpb24vbWF0aC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvdGV4dC1maWVsZC9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL2ZvY3VzLWluZGljYXRvcnMvX3ByaXZhdGUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19sYXlvdXQtY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7RUFDRSxnQkFBQTtFQUlBLGtCQUFBO0FDUEo7QURjSTtFQUNFLHdCQUFBO0FDWk47O0FEZ0JFO0VBQ0UsaUJBQUE7QUNiSjs7QURnQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSw2REFBQTtFQUlBLDJCQUFBO0FDakJKO0FDZ0NJO0VGWEUsYUFBQTtBQ2xCTjs7QUNsQkU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLG1CQUFBO0VBR0EsVUFBQTtFQUdBLHdCQUFBO0VBQ0EscUJBQUE7RUFNQSxPQUFBO0FEU0o7QUNQSTtFQUNFLFVBQUE7RUFDQSxRQUFBO0FEU047O0FFekJFO0VBRUUsb0JBQUE7RUFHQSxNQUFBO0VBQ0EsT0FB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OztBQS9PSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQWtQUjtBQS9PSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUdBLHVCQWxCWTtFQW1CWixtQkFuQlk7QUFrUXBCOztBQTNQSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQThQUjtBQTNQSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUdBLHVCQWxCWTtFQW1CWixtQkFuQlk7QUE4UXBCOztBQXZRSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtBQTBRUjtBQXZRSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUdBLHFDQWxCWTtFQW1CWixpQ0FuQlk7QUEwUnBCIiwic291cmNlc0NvbnRlbnQiOltudWxsLCIubWF0LXJpcHBsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXQtcmlwcGxlOm5vdCg6ZW1wdHkpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuXG4ubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMCwgMCk7XG59XG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgbGVmdDogMDtcbn1cbltkaXI9cnRsXSAuY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLmNkay1vdmVybGF5LWNvbnRhaW5lcjplbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmNkay1vdmVybGF5LXBhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgb3BhY2l0eTogMDtcbn1cbi5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgLmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMyKTtcbn1cblxuLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wIHtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAxbXMgbGluZWFyLCBvcGFjaXR5IDFtcyBsaW5lYXI7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMTtcbn1cbi5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmNkay1vdmVybGF5LWJhY2tkcm9wLW5vb3AtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMXB4O1xuICBtaW4taGVpZ2h0OiAxcHg7XG59XG5cbi5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICByZXNpemU6IG5vbmU7XG59XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3gge1xuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7IC8qISovIH1cbkBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsgLyohKi8gfVxuLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXM7XG59XG5cbi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtcztcbn1cblxuLm1hdC1mb2N1cy1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBkaXNwbGF5OiB2YXIoLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXksIG5vbmUpO1xuICBib3JkZXI6IHZhcigtLW1hdC1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoLCAzcHgpIHZhcigtLW1hdC1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXN0eWxlLCBzb2xpZCkgdmFyKC0tbWF0LWZvY3VzLWluZGljYXRvci1ib3JkZXItY29sb3IsIHRyYW5zcGFyZW50KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWF0LWZvY3VzLWluZGljYXRvci1ib3JkZXItcmFkaXVzLCA0cHgpO1xufVxuLm1hdC1mb2N1cy1pbmRpY2F0b3I6Zm9jdXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUge1xuICAtLW1hdC1mb2N1cy1pbmRpY2F0b3ItZGlzcGxheTogYmxvY2s7XG59XG5cbi5tYXQtbWRjLWZvY3VzLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXQtbWRjLWZvY3VzLWluZGljYXRvcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBkaXNwbGF5OiB2YXIoLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1kaXNwbGF5LCBub25lKTtcbiAgYm9yZGVyOiB2YXIoLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1ib3JkZXItd2lkdGgsIDNweCkgdmFyKC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXN0eWxlLCBzb2xpZCkgdmFyKC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXMsIDRweCk7XG59XG4ubWF0LW1kYy1mb2N1cy1pbmRpY2F0b3I6Zm9jdXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUge1xuICAtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IG1heC1jb250ZW50O1xufVxuXG4vKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLyogRmlyZWZveCAqL1xuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5hbnN3ZXJGaWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ubWF0aFF1ZXN0aW9uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZXF1YXRpb24uc3RhY2tlZCAubWF0aEFuc3dlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi8qXG4ud3Jvbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XG59XG4qL1xuLmVxdWF0aW9uLnN0YWNrZWQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5lcXVhdGlvbi5zdGFja2VkIC5udW1iZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgLyogc3BhY2UgZm9yIHRoZSBvcGVyYXRvciAqL1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5lcXVhdGlvbi5zdGFja2VkIC5vcGVyYXRvciB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZXF1YXRpb24uc3RhY2tlZCAuZXF1YWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZXF1YXRpb24gOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdChpbnB1dCkge1xuICBtYXJnaW4tbGVmdDogMC4zZW07XG59XG5cbi5xdWVzdGlvbl9jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4ucXVlc3Rpb25fZmxhdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucXVlc3Rpb25fZmxhdCA+ICo6bm90KDpsYXN0LWNoaWxkKSB7XG4gIHBhZGRpbmctcmlnaHQ6IDAuMmVtO1xufVxuXG4ucXVlc3Rpb25fY29sdW1uID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgcGFkZGluZy1yaWdodDogMC4yZW07XG59XG5cbi5xdWVzdGlvbl9jb2x1bW4gLm9wZXJhdG9yIHtcbiAgcGFkZGluZy1ib3R0b206IDAuMTVlbTtcbn1cblxuLm51bWJlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4ubnVtYmVyX25vcm1hbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBoZWlnaHQ6IDFlbTtcbiAgcGFkZGluZzogMnB4IDVweDtcbn1cblxuLm51bWJlcl9jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgaGVpZ2h0OiAxZW07XG4gIHBhZGRpbmc6IDJweCAwO1xufVxuXG4uZGlnaXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMWVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMnB4IDA7XG4gIGJvcmRlci1jb2xvcjogZGVlcHBpbmsgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItbGVmdC1zdHlsZTogZGFzaGVkO1xufVxuXG4uZGlnaXQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodC1zdHlsZTogc29saWQ7XG59XG5cbi5tYXRoQW5zd2VyOmZvY3VzIHtcbiAgb3V0bGluZS1jb2xvcjogIzM4OGUzYztcbiAgb3V0bGluZS13aWR0aDogMTVweDtcbiAgY2FyZXQtY29sb3I6ICMzODhlM2M7XG59XG5cbi5ocl9lcXVhbHMge1xuICBtYXJnaW46IDRweCAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIC5tYXRoQW5zd2VyOmZvY3VzIHtcbiAgb3V0bGluZS1jb2xvcjogI2ZmZDc0MDtcbiAgb3V0bGluZS13aWR0aDogMTVweDtcbiAgY2FyZXQtY29sb3I6ICNmZmQ3NDA7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAuaHJfZXF1YWxzIHtcbiAgbWFyZ2luOiA0cHggMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbjpob3N0LWNvbnRleHQoLmxpZ2h0LXRoZW1lKSAubWF0aEFuc3dlcjpmb2N1cyB7XG4gIG91dGxpbmUtY29sb3I6ICNiY2FhYTQ7XG4gIG91dGxpbmUtd2lkdGg6IDE1cHg7XG4gIGNhcmV0LWNvbG9yOiAjYmNhYWE0O1xufVxuOmhvc3QtY29udGV4dCgubGlnaHQtdGhlbWUpIC5ocl9lcXVhbHMge1xuICBtYXJnaW46IDRweCAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbjpob3N0LWNvbnRleHQoLmRlZXBwdXJwbGUtYW1iZXIpIC5tYXRoQW5zd2VyOmZvY3VzIHtcbiAgb3V0bGluZS1jb2xvcjogI2ZmZDc0MDtcbiAgb3V0bGluZS13aWR0aDogMTVweDtcbiAgY2FyZXQtY29sb3I6ICNmZmQ3NDA7XG59XG46aG9zdC1jb250ZXh0KC5kZWVwcHVycGxlLWFtYmVyKSAuaHJfZXF1YWxzIHtcbiAgbWFyZ2luOiA0cHggMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG46aG9zdC1jb250ZXh0KC5pbmRpZ28tcGluaykgLm1hdGhBbnN3ZXI6Zm9jdXMge1xuICBvdXRsaW5lLWNvbG9yOiAjZmY0MDgxO1xuICBvdXRsaW5lLXdpZHRoOiAxNXB4O1xuICBjYXJldC1jb2xvcjogI2ZmNDA4MTtcbn1cbjpob3N0LWNvbnRleHQoLmluZGlnby1waW5rKSAuaHJfZXF1YWxzIHtcbiAgbWFyZ2luOiA0cHggMDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG46aG9zdC1jb250ZXh0KC5waW5rLWJsdWVncmV5KSAubWF0aEFuc3dlcjpmb2N1cyB7XG4gIG91dGxpbmUtY29sb3I6ICNiMGJlYzU7XG4gIG91dGxpbmUtd2lkdGg6IDE1cHg7XG4gIGNhcmV0LWNvbG9yOiAjYjBiZWM1O1xufVxuOmhvc3QtY29udGV4dCgucGluay1ibHVlZ3JleSkgLmhyX2VxdWFscyB7XG4gIG1hcmdpbjogNHB4IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG46aG9zdC1jb250ZXh0KC5wdXJwbGUtZ3JlZW4pIC5tYXRoQW5zd2VyOmZvY3VzIHtcbiAgb3V0bGluZS1jb2xvcjogIzY5ZjBhZTtcbiAgb3V0bGluZS13aWR0aDogMTVweDtcbiAgY2FyZXQtY29sb3I6ICM2OWYwYWU7XG59XG46aG9zdC1jb250ZXh0KC5wdXJwbGUtZ3JlZW4pIC5ocl9lcXVhbHMge1xuICBtYXJnaW46IDRweCAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuOmhvc3QtY29udGV4dCguY2FuZHkpIC5tYXRoQW5zd2VyOmZvY3VzIHtcbiAgb3V0bGluZS1jb2xvcjogIzc5NTU0ODtcbiAgb3V0bGluZS13aWR0aDogMTVweDtcbiAgY2FyZXQtY29sb3I6ICM3OTU1NDg7XG59XG46aG9zdC1jb250ZXh0KC5jYW5keSkgLmhyX2VxdWFscyB7XG4gIG1hcmdpbjogNHB4IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn0iLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6162:
/*!************************************************************************!*\
  !*** ./src/app/multiplication-table/multiplication-table.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MultiplicationTableComponent": () => (/* binding */ MultiplicationTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function MultiplicationTableComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" ", ctx_r0.tables[ctx_r0.column], " ", ctx_r0.operator, " ", ctx_r0.tables[ctx_r0.row], " = ", ctx_r0.calculate(ctx_r0.tables[ctx_r0.column], ctx_r0.tables[ctx_r0.row]), "\n");
  }
}
function MultiplicationTableComponent_th_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const num2_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.calculateClasses(i_r4, -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num2_r3);
  }
}
function MultiplicationTableComponent_tr_5_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MultiplicationTableComponent_tr_5_td_3_Template_td_mouseover_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const col_r9 = restoredCtx.index;
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onMouseHover(col_r9, row_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const num2_r8 = ctx.$implicit;
    const col_r9 = ctx.index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const row_r6 = ctx_r13.index;
    const num1_r5 = ctx_r13.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r7.calculateClasses(col_r9, row_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.calculate(num1_r5, num2_r8));
  }
}
function MultiplicationTableComponent_tr_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr")(1, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiplicationTableComponent_tr_5_td_3_Template, 2, 2, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const num1_r5 = ctx.$implicit;
    const row_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r2.calculateClasses(-1, row_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num1_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.tables);
  }
}
class MultiplicationTableComponent {
  constructor(route) {
    this.route = route;
    this.tablesSelected = [];
    this.column = null;
    this.row = null;
    this.addition = false;
    this.operator = null;
    this.calculate = null;
    let start = 1;
    let end = 12;
    this.tables = Array(end - start + 1).fill(null).map((_, idx) => start + idx);
  }
  ngOnInit() {
    this.route.url.subscribe(x => {
      if (x[0].path === "additiontable") {
        this.addition = true;
        this.calculate = this.calculateAddition;
        this.operator = "+";
      } else {
        this.addition = false;
        this.calculate = this.calculateMultiplication;
        this.operator = "x";
      }
    });
  }
  onMouseHover(c, r) {
    this.column = c;
    this.row = r;
  }
  calculateClasses(col, row) {
    if (row == this.row) {
      if (col == this.column) {
        return "onHover";
      } else if (col < this.column) {
        return "inPath";
      }
    } else if (row < this.row) {
      if (col == this.column) {
        return "inPath";
      }
    }
    return null;
  }
  isColRowSet() {
    return this.row != null && this.column != null;
  }
  calculateAddition(num1, num2) {
    return num1 + num2;
  }
  calculateMultiplication(num1, num2) {
    return num1 * num2;
  }
  static #_ = this.ɵfac = function MultiplicationTableComponent_Factory(t) {
    return new (t || MultiplicationTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MultiplicationTableComponent,
    selectors: [["app-multiplication-table"]],
    decls: 6,
    vars: 3,
    consts: [["class", "equation", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "equation"], [3, "ngClass"], [3, "ngClass", "mouseover", 4, "ngFor", "ngForOf"], [3, "ngClass", "mouseover"]],
    template: function MultiplicationTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MultiplicationTableComponent_section_0_Template, 2, 4, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table")(2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MultiplicationTableComponent_th_4_Template, 2, 2, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MultiplicationTableComponent_tr_5_Template, 4, 3, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isColRowSet());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tables);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tables);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start {  }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end {  }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\ntable[_ngcontent-%COMP%] {\n  font-size: larger;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.equation[_ngcontent-%COMP%] {\n  font-size: 27pt;\n  font-weight: bold;\n  padding: 10px;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-style: solid;\n  text-align: center;\n  padding: 0.2em;\n  width: 3rem;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #b2dfdb;\n  color: rgba(0, 0, 0, 0.87);\n}\n\ntd.inPath[_ngcontent-%COMP%] {\n  background-color: #c8e6c9;\n  color: white;\n}\n\nth.inPath[_ngcontent-%COMP%] {\n  background-color: #00796b;\n  color: white;\n}\n\ntd.onHover[_ngcontent-%COMP%] {\n  background-color: #388e3c;\n}\n\n.dark-theme[_nghost-%COMP%]   th[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #cfd8dc;\n  color: rgba(0, 0, 0, 0.87);\n}\n.dark-theme[_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%] {\n  background-color: #ffe57f;\n  color: rgba(0, 0, 0, 0.87);\n}\n.dark-theme[_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%] {\n  background-color: #607d8b;\n  color: white;\n}\n.dark-theme[_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%] {\n  background-color: #ffd740;\n}\n\n.light-theme[_nghost-%COMP%]   th[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n  color: rgba(0, 0, 0, 0.87);\n}\n.light-theme[_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%] {\n  background-color: #d7ccc8;\n  color: rgba(0, 0, 0, 0.87);\n}\n.light-theme[_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.87);\n}\n.light-theme[_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%] {\n  background-color: #bcaaa4;\n}\n\n.deeppurple-amber[_nghost-%COMP%]   th[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #d1c4e9;\n  color: rgba(0, 0, 0, 0.87);\n}\n.deeppurple-amber[_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%] {\n  background-color: #ffe57f;\n  color: rgba(0, 0, 0, 0.87);\n}\n.deeppurple-amber[_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  color: white;\n}\n.deeppurple-amber[_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%] {\n  background-color: #ffd740;\n}\n\n.indigo-pink[_nghost-%COMP%]   th[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #c5cae9;\n  color: rgba(0, 0, 0, 0.87);\n}\n.indigo-pink[_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%] {\n  background-color: #ff80ab;\n  color: white;\n}\n.indigo-pink[_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n.indigo-pink[_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%] {\n  background-color: #ff4081;\n}\n\n.pink-bluegrey[_nghost-%COMP%]   th[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  color: white;\n}\n.pink-bluegrey[_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%] {\n  background-color: #cfd8dc;\n  color: rgba(0, 0, 0, 0.87);\n}\n.pink-bluegrey[_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%] {\n  background-color: #c2185b;\n  color: white;\n}\n.pink-bluegrey[_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%] {\n  background-color: #b0bec5;\n}\n\n.purple-green[_nghost-%COMP%]   th[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #e1bee7;\n  color: rgba(0, 0, 0, 0.87);\n}\n.purple-green[_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%] {\n  background-color: #b9f6ca;\n  color: rgba(0, 0, 0, 0.87);\n}\n.purple-green[_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n  color: white;\n}\n.purple-green[_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%] {\n  background-color: #69f0ae;\n}\n\n.candy[_nghost-%COMP%]   th[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #ffe0b2;\n  color: rgba(0, 0, 0, 0.87);\n}\n.candy[_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%] {\n  background-color: #d7ccc8;\n  color: white;\n}\n.candy[_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  color: rgba(0, 0, 0, 0.87);\n}\n.candy[_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%] {\n  background-color: #795548;\n}\n/*# sourceURL=webpack://./node_modules/@angular/material/core/ripple/_ripple.scss */\n/*# sourceURL=webpack://./src/app/multiplication-table/multiplication-table.component.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/a11y/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/overlay/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/text-field/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/focus-indicators/_private.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/style/_layout-common.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL211bHRpcGxpY2F0aW9uLXRhYmxlL211bHRpcGxpY2F0aW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Nkay9hMTF5L19pbmRleC5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Nkay9vdmVybGF5L19pbmRleC5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Nkay90ZXh0LWZpZWxkL19pbmRleC5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUvZm9jdXMtaW5kaWNhdG9ycy9fcHJpdmF0ZS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvX2xheW91dC1jb21tb24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLRTtFQUNFLGdCQUFBO0VBSUEsa0JBQUE7QUNQSjtBRGNJO0VBQ0Usd0JBQUE7QUNaTjs7QURnQkU7RUFDRSxpQkFBQTtBQ2JKOztBRGdCRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUVBLDZEQUFBO0VBSUEsMkJBQUE7QUNqQko7QUNnQ0k7RUZYRSxhQUFBO0FDbEJOOztBQ2xCRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBSUEsbUJBQUE7RUFHQSxVQUFBO0VBR0Esd0JBQUE7RUFDQSxxQkFBQTtFQU1BLE9BQUE7QURTSjtBQ1BJO0VBQ0UsVUFBQTtFQUNBLFFBQUE7QURTTjs7QUV6QkU7RUFFRSxvQkFBQTtFQUdB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QUF6T0k7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FBMk9SO0FBeE9JO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBME9SO0FBdk9JO0VBQ0kseUJBQUE7QUF5T1I7O0FBelBJO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQTRQUjtBQXpQSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQTJQUjtBQXhQSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQTBQUjtBQXZQSTtFQUNJLHlCQUFBO0FBeVBSOztBQXpRSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQTRRUjtBQXpRSTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUEyUVI7QUF4UUk7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUEwUVI7QUF2UUk7RUFDSSx5QkFBQTtBQXlRUjs7QUF6Ukk7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FBNFJSO0FBelJJO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQTJSUjtBQXhSSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQTBSUjtBQXZSSTtFQUNJLHlCQUFBO0FBeVJSOztBQXpTSTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUE0U1I7QUF6U0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUEyU1I7QUF4U0k7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FBMFNSO0FBdlNJO0VBQ0kseUJBQUE7QUF5U1IiLCJzb3VyY2VzQ29udGVudCI6W251bGwsIi5tYXQtcmlwcGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hdC1yaXBwbGU6bm90KDplbXB0eSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5cbi5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAwLCAwKTtcbn1cbi5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBsZWZ0OiAwO1xufVxuW2Rpcj1ydGxdIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4uY2RrLW92ZXJsYXktY29udGFpbmVyOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4uY2RrLW92ZXJsYXktcGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICBvcGFjaXR5OiAwO1xufVxuLmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAxO1xufVxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIpO1xufVxuXG4uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDFtcyBsaW5lYXIsIG9wYWNpdHkgMW1zIGxpbmVhcjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAxO1xufVxuLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uY2RrLW92ZXJsYXktYmFja2Ryb3Atbm9vcC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG4uY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAxcHg7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbn1cblxuLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZyB7XG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmctZmlyZWZveCB7XG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IHsgLyohKi8gfVxuQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgeyAvKiEqLyB9XG4uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtcztcbn1cblxuLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcbiAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgMHMgMW1zO1xufVxuXG4ubWF0LWZvY3VzLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGRpc3BsYXk6IHZhcigtLW1hdC1mb2N1cy1pbmRpY2F0b3ItZGlzcGxheSwgbm9uZSk7XG4gIGJvcmRlcjogdmFyKC0tbWF0LWZvY3VzLWluZGljYXRvci1ib3JkZXItd2lkdGgsIDNweCkgdmFyKC0tbWF0LWZvY3VzLWluZGljYXRvci1ib3JkZXItc3R5bGUsIHNvbGlkKSB2YXIoLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1jb2xvciwgdHJhbnNwYXJlbnQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXMsIDRweCk7XG59XG4ubWF0LWZvY3VzLWluZGljYXRvcjpmb2N1czo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSB7XG4gIC0tbWF0LWZvY3VzLWluZGljYXRvci1kaXNwbGF5OiBibG9jaztcbn1cblxuLm1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGRpc3BsYXk6IHZhcigtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXksIG5vbmUpO1xuICBib3JkZXI6IHZhcigtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci13aWR0aCwgM3B4KSB2YXIoLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1ib3JkZXItc3R5bGUsIHNvbGlkKSB2YXIoLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1ib3JkZXItY29sb3IsIHRyYW5zcGFyZW50KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1cywgNHB4KTtcbn1cbi5tYXQtbWRjLWZvY3VzLWluZGljYXRvcjpmb2N1czo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSB7XG4gIC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItZGlzcGxheTogYmxvY2s7XG59XG5cbnRhYmxlIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XG59XG5cbi5lcXVhdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjdwdDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbnRkLFxudGgge1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAwLjJlbTtcbiAgd2lkdGg6IDNyZW07XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyZGZkYjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbnRkLmluUGF0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGU2Yzk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxudGguaW5QYXRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzk2YjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG50ZC5vbkhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4OGUzYztcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHRkLmluUGF0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmU1N2Y7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgdGguaW5QYXRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YjtcbiAgY29sb3I6IHdoaXRlO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgdGQub25Ib3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ3NDA7XG59XG5cbjpob3N0LWNvbnRleHQoLmxpZ2h0LXRoZW1lKSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZTllOWU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuOmhvc3QtY29udGV4dCgubGlnaHQtdGhlbWUpIHRkLmluUGF0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2NjYzg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuOmhvc3QtY29udGV4dCgubGlnaHQtdGhlbWUpIHRoLmluUGF0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuOmhvc3QtY29udGV4dCgubGlnaHQtdGhlbWUpIHRkLm9uSG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNhYWE0O1xufVxuXG46aG9zdC1jb250ZXh0KC5kZWVwcHVycGxlLWFtYmVyKSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMWM0ZTk7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuOmhvc3QtY29udGV4dCguZGVlcHB1cnBsZS1hbWJlcikgdGQuaW5QYXRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZTU3ZjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG46aG9zdC1jb250ZXh0KC5kZWVwcHVycGxlLWFtYmVyKSB0aC5pblBhdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xuICBjb2xvcjogd2hpdGU7XG59XG46aG9zdC1jb250ZXh0KC5kZWVwcHVycGxlLWFtYmVyKSB0ZC5vbkhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDc0MDtcbn1cblxuOmhvc3QtY29udGV4dCguaW5kaWdvLXBpbmspIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1Y2FlOTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG46aG9zdC1jb250ZXh0KC5pbmRpZ28tcGluaykgdGQuaW5QYXRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODBhYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuOmhvc3QtY29udGV4dCguaW5kaWdvLXBpbmspIHRoLmluUGF0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0LWNvbnRleHQoLmluZGlnby1waW5rKSB0ZC5vbkhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcbn1cblxuOmhvc3QtY29udGV4dCgucGluay1ibHVlZ3JleSkgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTkxZTYzO1xuICBjb2xvcjogd2hpdGU7XG59XG46aG9zdC1jb250ZXh0KC5waW5rLWJsdWVncmV5KSB0ZC5pblBhdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbjpob3N0LWNvbnRleHQoLnBpbmstYmx1ZWdyZXkpIHRoLmluUGF0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjE4NWI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbjpob3N0LWNvbnRleHQoLnBpbmstYmx1ZWdyZXkpIHRkLm9uSG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBiZWM1O1xufVxuXG46aG9zdC1jb250ZXh0KC5wdXJwbGUtZ3JlZW4pIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxYmVlNztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG46aG9zdC1jb250ZXh0KC5wdXJwbGUtZ3JlZW4pIHRkLmluUGF0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOWY2Y2E7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuOmhvc3QtY29udGV4dCgucHVycGxlLWdyZWVuKSB0aC5pblBhdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0MGZiO1xuICBjb2xvcjogd2hpdGU7XG59XG46aG9zdC1jb250ZXh0KC5wdXJwbGUtZ3JlZW4pIHRkLm9uSG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjlmMGFlO1xufVxuXG46aG9zdC1jb250ZXh0KC5jYW5keSkgdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMGIyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cbjpob3N0LWNvbnRleHQoLmNhbmR5KSB0ZC5pblBhdGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdjY2M4O1xuICBjb2xvcjogd2hpdGU7XG59XG46aG9zdC1jb250ZXh0KC5jYW5keSkgdGguaW5QYXRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG46aG9zdC1jb250ZXh0KC5jYW5keSkgdGQub25Ib3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3OTU1NDg7XG59IixudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 439:
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundComponent": () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PageNotFoundComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function PageNotFoundComponent_Factory(t) {
    return new (t || PageNotFoundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PageNotFoundComponent,
    selectors: [["app-page-not-found"]],
    decls: 4,
    vars: 0,
    template: function PageNotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    },
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3379:
/*!**********************************************************!*\
  !*** ./src/app/problem-panel/problem-panel.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProblemPanelComponent": () => (/* binding */ ProblemPanelComponent),
/* harmony export */   "ProblemPanelComponentDialog": () => (/* binding */ ProblemPanelComponentDialog)
/* harmony export */ });
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/config */ 5908);
/* harmony import */ var _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/math-question.service */ 6819);
/* harmony import */ var _math_question_math_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math-question/math-question.component */ 2537);
/* harmony import */ var _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../column-answer/column-answer.component */ 663);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ 946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 4792);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 2922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../progress-bar/progress-bar.component */ 3369);






















function ProblemPanelComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-math-question", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("questionId", i_r6)("config", ctx_r0.config)("needReset", ctx_r0.needReset);
  }
}
function ProblemPanelComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 15);
  }
}
function ProblemPanelComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProblemPanelComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r8.validate());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Validate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ProblemPanelComponent_mat_radio_button_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-radio-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const orientation_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", orientation_r10.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", orientation_r10.label, " ");
  }
}
function ProblemPanelComponent_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const answerMode_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", answerMode_r11.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", answerMode_r11.label, " ");
  }
}
const _c4 = ".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start {  }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end {  }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #388e3c;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.dark-theme[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #ffd740;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.light-theme[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #bcaaa4;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.deeppurple-amber[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #ffd740;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.indigo-pink[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #ff4081;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.pink-bluegrey[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #b0bec5;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.purple-green[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #69f0ae;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.candy[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #795548;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.problems[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n\n.mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n\n.orientation-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n}\n\n.orientation-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.orientation[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceURL=webpack://./node_modules/@angular/material/core/ripple/_ripple.scss */\n/*# sourceURL=webpack://./src/app/problem-panel/problem-panel.component.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/a11y/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/overlay/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/text-field/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/focus-indicators/_private.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/style/_layout-common.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3Byb2JsZW0tcGFuZWwvcHJvYmxlbS1wYW5lbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvdGV4dC1maWVsZC9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL2ZvY3VzLWluZGljYXRvcnMvX3ByaXZhdGUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19sYXlvdXQtY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7RUFDRSxnQkFBQTtFQUlBLGtCQUFBO0FDUEo7QURjSTtFQUNFLHdCQUFBO0FDWk47O0FEZ0JFO0VBQ0UsaUJBQUE7QUNiSjs7QURnQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSw2REFBQTtFQUlBLDJCQUFBO0FDakJKO0FDZ0NJO0VGWEUsYUFBQTtBQ2xCTjs7QUNsQkU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLG1CQUFBO0VBR0EsVUFBQTtFQUdBLHdCQUFBO0VBQ0EscUJBQUE7RUFNQSxPQUFBO0FEU0o7QUNQSTtFQUNFLFVBQUE7RUFDQSxRQUFBO0FEU047O0FFekJFO0VBRUUsb0JBQUE7RUFHQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FGeUJKOztBRXJCRTtFQUNFLGVBQUE7RUFDQSxhQTNCd0I7QUZtRDVCO0FFdEJJO0VBR0UsYUFBQTtBRnNCTjs7QUVkRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBMUNjO0FGMkRsQjs7QUViRTtFQUdFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBcERjO0VBd0RkLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUZXSjs7QUVSRTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLGFBcEV1QjtFQXFFdkIsb0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDBEQUFBO0VBQ0EsVUFBQTtBRlNKO0FFUEk7RUFDRSxVQUFBO0FGU047QUVKTTtFQUdFLFlBQUE7QUZJUjs7QUVDRTtFQUNFLCtCQXRGcUI7QUZ3RnpCOztBRUNFO0VBRUUscURBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUZDSjtBRUtJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FGSE47O0FFT0U7RUFDRSxnQkFBQTtBRkpKOztBRVNFO0VBQ0Usa0JBQUE7RUFDQSxhQXJIYztFQTBIZCxhQUFBO0VBSUEsc0JBQUE7RUFHQSxjQUFBO0VBQ0EsZUFBQTtBRmZKOztBRW1CRTtFQUNFLGVBQUE7RUFLQSxXQUFBO0VBS0Esa0JBQUE7QUZ4Qko7O0FHekhFO0VBQ0UsWUFBQTtBSDRISjs7QUd0SEU7RUF5Q0EseUJBQUE7RUFDQSxrQ0FBQTtFQXhDRSx1QkFBQTtFQUNBLDJCQUFBO0FIMEhKOztBR2pIRTtFQTZCQSx5QkFBQTtFQUNBLGtDQUFBO0VBNUJFLG9CQUFBO0FIcUhKOztBRzNHRSwyQ0FBQSxJQUFBLEVBQUE7QUFDQSx5Q0FBQSxJQUFBLEVBQUE7QUFFQTtFQUVFLCtDQUFBO0FINEdKOztBR3pHRTtFQUVFLDZDQUFBO0FIMkdKOztBSTFJRTtFQUNFLGtCQUFBO0FKNklKO0FJM0lJO0VDZkYsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VEYUksc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlEQUFBO0VBQ0Esd0pBQUE7RUFZQSw0REFBQTtBSnNJTjtBSTlISTtFQUNFLFdBQUE7QUpnSU47O0FDckZNO0VHN0JBLG9DQUFBO0FKc0hOOztBSWpLRTtFQUNFLGtCQUFBO0FKb0tKO0FJbEtJO0VDZkYsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VEYUksc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFEQUFBO0VBQ0Esb0tBQUE7RUFZQSxnRUFBQTtBSjZKTjtBSXJKSTtFQUNFLFdBQUE7QUp1Sk47O0FDNUdNO0VHN0JBLHdDQUFBO0FKNklOOztBQTVMSTtFQUVJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUE4TFI7O0FBeE1JO0VBRUksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTBNUjs7QUFwTkk7RUFFSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBc05SOztBQWhPSTtFQUVJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFrT1I7O0FBNU9JO0VBRUksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQThPUjs7QUF4UEk7RUFFSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBMFBSOztBQXBRSTtFQUVJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFzUVI7O0FBaFJJO0VBRUksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWtSUjs7QUFwUUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBdVFKOztBQXBRQTtFQUNJLGtCQUFBO0FBdVFKOztBQXBRQTtFQUNJLGlCQUFBO0FBdVFKOztBQXBRQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUF1UUo7O0FBcFFBO0VBQ0ksV0FBQTtBQXVRSjs7QUFwUUE7RUFDSSxxQkFBQTtBQXVRSiIsInNvdXJjZXNDb250ZW50IjpbbnVsbCwiLm1hdC1yaXBwbGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWF0LXJpcHBsZTpub3QoOmVtcHR5KSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbn1cblxuLm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWQge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsIDAsIDApO1xufVxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICBib3JkZXI6IDA7XG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGxlZnQ6IDA7XG59XG5bZGlyPXJ0bF0gLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogMDtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciwgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDtcbn1cbi5jZGstb3ZlcmxheS1jb250YWluZXI6ZW1wdHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG59XG5cbi5jZGstb3ZlcmxheS1wYW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuXG4uY2RrLW92ZXJsYXktYmFja2Ryb3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIG9wYWNpdHk6IDA7XG59XG4uY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDE7XG59XG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgb3BhY2l0eTogMC42O1xufVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMik7XG59XG5cbi5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCB7XG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMW1zIGxpbmVhciwgb3BhY2l0eSAxbXMgbGluZWFyO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG9wYWNpdHk6IDE7XG59XG4uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5jZGstb3ZlcmxheS1iYWNrZHJvcC1ub29wLWFuaW1hdGlvbiB7XG4gIHRyYW5zaXRpb246IG5vbmU7XG59XG5cbi5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDFweDtcbiAgbWluLWhlaWdodDogMXB4O1xufVxuXG4uY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgcmVzaXplOiBub25lO1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1maXJlZm94IHtcbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG5cbkBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgeyAvKiEqLyB9XG5Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7IC8qISovIH1cbi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zO1xufVxuXG4uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCAwcyAxbXM7XG59XG5cbi5tYXQtZm9jdXMtaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hdC1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogdmFyKC0tbWF0LWZvY3VzLWluZGljYXRvci1kaXNwbGF5LCBub25lKTtcbiAgYm9yZGVyOiB2YXIoLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci13aWR0aCwgM3B4KSB2YXIoLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1zdHlsZSwgc29saWQpIHZhcigtLW1hdC1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1hdC1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1cywgNHB4KTtcbn1cbi5tYXQtZm9jdXMtaW5kaWNhdG9yOmZvY3VzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIHtcbiAgLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWF0LW1kYy1mb2N1cy1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWF0LW1kYy1mb2N1cy1pbmRpY2F0b3I6OmJlZm9yZSB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogdmFyKC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItZGlzcGxheSwgbm9uZSk7XG4gIGJvcmRlcjogdmFyKC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoLCAzcHgpIHZhcigtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1zdHlsZSwgc29saWQpIHZhcigtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1jb2xvciwgdHJhbnNwYXJlbnQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1ib3JkZXItcmFkaXVzLCA0cHgpO1xufVxuLm1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yOmZvY3VzOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xufVxuXG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIHtcbiAgLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1kaXNwbGF5OiBibG9jaztcbn1cblxuLm1hdGhRdWVzdGlvbldyYXBwZXIge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA3JTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzM4OGUzYztcbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAubWF0aFF1ZXN0aW9uV3JhcHBlciB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtYmFzaXM6IDclO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjZmZkNzQwO1xuICBtYXJnaW46IDAuNWVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbjpob3N0LWNvbnRleHQoLmxpZ2h0LXRoZW1lKSAubWF0aFF1ZXN0aW9uV3JhcHBlciB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtYmFzaXM6IDclO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjYmNhYWE0O1xuICBtYXJnaW46IDAuNWVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbjpob3N0LWNvbnRleHQoLmRlZXBwdXJwbGUtYW1iZXIpIC5tYXRoUXVlc3Rpb25XcmFwcGVyIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNyU7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZmQ3NDA7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuOmhvc3QtY29udGV4dCguaW5kaWdvLXBpbmspIC5tYXRoUXVlc3Rpb25XcmFwcGVyIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNyU7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZjQwODE7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuOmhvc3QtY29udGV4dCgucGluay1ibHVlZ3JleSkgLm1hdGhRdWVzdGlvbldyYXBwZXIge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA3JTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2IwYmVjNTtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG46aG9zdC1jb250ZXh0KC5wdXJwbGUtZ3JlZW4pIC5tYXRoUXVlc3Rpb25XcmFwcGVyIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNyU7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM2OWYwYWU7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuOmhvc3QtY29udGV4dCguY2FuZHkpIC5tYXRoUXVlc3Rpb25XcmFwcGVyIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNyU7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICM3OTU1NDg7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnByb2JsZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG5idXR0b24gc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cblxuLm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cblxuLm9yaWVudGF0aW9uLXJhZGlvLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5vcmllbnRhdGlvbi1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDVweDtcbn1cblxuLm9yaWVudGF0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufSIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsXSwic291cmNlUm9vdCI6IiJ9 */";
class ProblemPanelComponent {
  constructor(configService, mathQuestionService, dialog) {
    this.configService = configService;
    this.mathQuestionService = mathQuestionService;
    this.dialog = dialog;
    this.answerMap = new Map();
    this.equationOrientations = _services_config__WEBPACK_IMPORTED_MODULE_0__.EquationOrientations;
    this.substriptions = [];
    this.config = null;
    this.ANSWER_MODES = _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_3__.ANSWER_MODES;
    this.needReset = false;
    this.dialogRef = null;
    this.resetProgress();
  }
  ngOnInit() {
    this.substriptions.push(this.configService.subscribe(cfsi => {
      this.config = {
        ...cfsi.config
      }; //to force the change detection
      this.problems = new Array(cfsi.config.nbQuestions >= 1 ? cfsi.config.nbQuestions : 1); //TODO make an universal function
      this.answerMap.clear();
      //reset state
      this.needReset = cfsi.needReset;
      if (cfsi.needReset) {
        this.resetProgress();
      }
    }));
    this.substriptions.push(this.mathQuestionService.subscribe(notification => {
      this.manageNotification(notification);
    }));
  }
  manageNotification(notification) {
    let currentStatus = this.manageStatus(notification);
    if (this.config.realTimeValidation) {
      let next = false;
      switch (notification.status) {
        case _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.RIGHT:
          if (currentStatus !== _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.RIGHT) {
            this.increaseProgress();
            console.debug(`SC: ${this.successCount} PC: ${this.problemsCount}`);
            next = true;
          }
          break;
        case _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.WRONG:
        case _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.EMPTY:
          this.decreaseProgress(currentStatus);
          break;
      }
      if (next || notification.forceExitFocus) {
        this.nextComponentFocus(notification.index);
      }
    } else if (notification.isParentCanValidate) {
      let canValidate = true;
      if (this.answerMap.size >= this.problems.length) {
        this.answerMap.forEach(value => {
          switch (value) {
            case _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.EMPTY:
            case _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.FOCUS:
              canValidate = false;
              break;
          }
        });
      } else {
        canValidate = false;
      }
      if (canValidate) {
        this.validate();
      }
    }
  }
  nextComponentFocus(index) {
    let array = this.mathQuestionComponents.toArray();
    let mathQuestionComponent;
    mathQuestionComponent = this.runOverCommponents(index + 1, array.length, array);
    if (mathQuestionComponent === undefined) {
      mathQuestionComponent = this.runOverCommponents(0, index + 1, array);
    }
    if (mathQuestionComponent !== undefined) {
      mathQuestionComponent.focus();
    } else {
      let nextOne = index + 1 >= array.length ? 0 : index + 1;
      array[nextOne].focus();
    }
  }
  manageStatus(notification) {
    let currentStatus = this.answerMap.get(notification.id);
    this.answerMap.set(notification.id, notification.status); //There is a race condition here TODO find a way to sync
    console.debug(notification);
    console.debug("Notification Status '" + notification.status + "' currentStatus: '" + currentStatus + "' notification.id '" + notification.id + "'");
    return currentStatus;
  }
  runOverCommponents(i, limit, mqcArray) {
    while (i < limit) {
      let mq = mqcArray[i];
      if (mq.notRight()) {
        return mq;
      }
      ++i;
    }
    return null;
  }
  increaseProgress() {
    this.successCount++;
  }
  decreaseProgress(currentStatus) {
    if (currentStatus === _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.RIGHT) {
      this.successCount--;
    }
  }
  ngAfterViewInit() {
    //focus on the first child
    this.focusFirst();
  }
  ngOnDestroy() {
    this.substriptions.forEach(substription => substription.unsubscribe());
  }
  clearAll() {
    this.mathQuestionComponents?.forEach(c => c.clear());
    this.focusFirst();
    this.resetProgress();
  }
  reset() {
    this.mathQuestionComponents?.forEach(c => c.reset());
    this.focusFirst();
    this.resetProgress();
  }
  resetProgress() {
    this.successCount = 0;
  }
  get problemsCount() {
    return this.problems.length;
  }
  padding(padSize) {
    return new Array(padSize);
  }
  invert() {
    this.mathQuestionComponents.forEach(c => c.invert());
    this.focusFirst();
  }
  focusFirst() {
    if (this.mathQuestionComponents?.length > 0) {
      //Wrapped to avoid error ExpressionChangedAfterItHasBeenCheckedError
      Promise.resolve(null).then(() => this.mathQuestionComponents.first.focus());
    }
  }
  orientationChangeFn(orientation) {
    console.log(`New orientation: ${orientation} ${typeof orientation}`);
    this.config.orientation = orientation;
    this.configService.next(this.config, false);
  }
  realTimeValidationChangeFn(realTimeValidation) {
    this.config.realTimeValidation = realTimeValidation;
    this.configService.next(this.config, false);
    if (realTimeValidation) {
      this.mathQuestionComponents.forEach(m => m.validateAnswer(false));
    } else {
      this.mathQuestionComponents.forEach(m => m.validateInput());
    }
  }
  selectedAnswerModeChangeFn(selectedAnswerMode) {
    this.config.answerMode = selectedAnswerMode;
    this.configService.next(this.config, false);
  }
  nbProblemsChangeFn(nbProblems) {
    this.config.nbQuestions = nbProblems;
    this.configService.next(this.config, false);
  }
  validate() {
    this.mathQuestionComponents.forEach(m => {
      let informParent = false;
      if (!this.answerMap.has(m.id)) {
        this.answerMap.set(m.id, m.status);
      }
      m.validateAnswer(informParent);
    });
    this.openDialog();
  }
  openDialog() {
    if (this.dialogRef != null) {
      return;
    }
    console.log('Open dialog');
    let data = {
      right: 0,
      wrong: 0,
      empty: 0,
      total: this.answerMap.size
    };
    this.answerMap.forEach(v => {
      switch (v) {
        case _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.RIGHT:
          data.right++;
          break;
        case _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.WRONG:
          data.wrong++;
          break;
        case _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.EMPTY:
          data.empty++;
          break;
        default:
          console.log('investigate');
          break;
      }
    });
    this.dialogRef = this.dialog.open(ProblemPanelComponentDialog, {
      width: '250px',
      data: data
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.dialogRef = null;
    });
  }
  static #_ = this.ɵfac = function ProblemPanelComponent_Factory(t) {
    return new (t || ProblemPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_4__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.MathQuestionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ProblemPanelComponent,
    selectors: [["app-problem-panel"]],
    viewQuery: function ProblemPanelComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_math_question_math_question_component__WEBPACK_IMPORTED_MODULE_2__.MathQuestionComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.mathQuestionComponents = _t);
      }
    },
    decls: 43,
    vars: 11,
    consts: [[3, "totalCount", "progressCount"], [1, "problems"], ["class", "mathQuestionWrapper", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], [1, "orientation"], ["id", "orientation-radio-group-label"], ["aria-labelledby", "orientation-radio-group-label", 1, "orientation-radio-group", 3, "ngModel", "ngModelChange"], ["class", "orientation-radio-button", 3, "value", 4, "ngFor", "ngForOf"], ["labelPosition", "before", 3, "ngModel", "ngModelChange"], ["appearance", "fill"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], [1, "mathQuestionWrapper"], [3, "questionId", "config", "needReset"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "orientation-radio-button", 3, "value"], [3, "value"]],
    template: function ProblemPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ProblemPanelComponent_div_2_Template, 2, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProblemPanelComponent_div_3_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ProblemPanelComponent_button_5_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProblemPanelComponent_Template_button_click_7_listener() {
          return ctx.clearAll();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "clear_all");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Clear All");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "\n\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProblemPanelComponent_Template_button_click_13_listener() {
          return ctx.reset();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Regenerate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "\n\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProblemPanelComponent_Template_button_click_19_listener() {
          return ctx.invert();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "invert_colors");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Invert");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "\n\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p", 5)(26, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Equation orientation");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-radio-group", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProblemPanelComponent_Template_mat_radio_group_ngModelChange_28_listener($event) {
          return ctx.orientationChangeFn($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, ProblemPanelComponent_mat_radio_button_29_Template, 2, 2, "mat-radio-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "mat-checkbox", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProblemPanelComponent_Template_mat_checkbox_ngModelChange_30_listener($event) {
          return ctx.realTimeValidationChangeFn($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](31, " Realtime Validation\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "\n\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "mat-form-field", 10)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Answer mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProblemPanelComponent_Template_mat_select_ngModelChange_36_listener($event) {
          return ctx.selectedAnswerModeChangeFn($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](37, ProblemPanelComponent_mat_option_37_Template, 2, 2, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "\u00A0\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "mat-form-field", 13)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Numbrer of problems");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ProblemPanelComponent_Template_input_ngModelChange_42_listener($event) {
          return ctx.nbProblemsChangeFn($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("totalCount", ctx.problemsCount)("progressCount", ctx.successCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.problems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.padding(0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.config.realTimeValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.config.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.equationOrientations);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.config.realTimeValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.config.answerMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ANSWER_MODES);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.config.nbQuestions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatLabel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _math_question_math_question_component__WEBPACK_IMPORTED_MODULE_2__.MathQuestionComponent, _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__.ProgressBarComponent],
    styles: [_c4]
  });
}
class ProblemPanelComponentDialog {
  constructor(data) {
    this.data = data;
    this.congratulationMsg = null;
    let result = data.right / data.total;
    if (result == 1) {
      this.congratulationMsg = "Excellent";
    } else if (result >= 0.7) {
      this.congratulationMsg = "Bien";
    } else {
      this.congratulationMsg = "Essaie encore";
    }
  }
  static #_ = this.ɵfac = function ProblemPanelComponentDialog_Factory(t) {
    return new (t || ProblemPanelComponentDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MAT_DIALOG_DATA));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ProblemPanelComponentDialog,
    selectors: [["app-problem-panel-dialog"]],
    decls: 7,
    vars: 5,
    consts: function () {
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6804990303797863301$$SRC_APP_PROBLEM_PANEL_PROBLEM_PANEL_COMPONENT_TS_2 = goog.getMsg("{VAR_PLURAL, plural, =0 {ZERO good answer} =1 {one good answer} other {{INTERPOLATION} good answers}}");
        i18n_1 = MSG_EXTERNAL_6804990303797863301$$SRC_APP_PROBLEM_PANEL_PROBLEM_PANEL_COMPONENT_TS_2;
      } else {
        i18n_1 = "{VAR_PLURAL, plural, =0 {ZERO good answer} =1 {one good answer} other {{INTERPOLATION} good answers}}";
      }
      i18n_1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nPostprocess"](i18n_1, {
        "VAR_PLURAL": "\uFFFD0\uFFFD",
        "INTERPOLATION": "\uFFFD1\uFFFD"
      });
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_congratulationMsg2$$SRC_APP_PROBLEM_PANEL_PROBLEM_PANEL_COMPONENT_TS_3 = goog.getMsg("You got {$icu} from a total of {$interpolation_1} questions.", {
          "interpolation_1": "\uFFFD2\uFFFD",
          "icu": i18n_1
        }, {
          original_code: {
            "interpolation_1": "{{data.total}}",
            "icu": "{data.right, plural, =0 {ZERO good answer} =1 {one good answer} other {{{data.right}} good answers}}"
          }
        });
        i18n_0 = MSG_EXTERNAL_congratulationMsg2$$SRC_APP_PROBLEM_PANEL_PROBLEM_PANEL_COMPONENT_TS_3;
      } else {
        i18n_0 = "Tu as " + i18n_1 + " sur un total de " + "\uFFFD2\uFFFD" + " questions.";
      }
      return [i18n_0, ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]];
    },
    template: function ProblemPanelComponentDialog_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18n"](3, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-dialog-actions", 1)(5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.congratulationMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nExp"](ctx.data.right)(ctx.data.right)(ctx.data.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nApply"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mat-dialog-close", true);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions],
    styles: [_c4]
  });
}

/***/ }),

/***/ 3369:
/*!********************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgressBarComponent": () => (/* binding */ ProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-bar */ 1294);



class ProgressBarComponent {
  constructor() {}
  ngOnInit() {}
  ngOnChanges(changes) {
    if (this.totalCount !== 0) {
      this.progress = Math.round(this.progressCount / this.totalCount * 100);
    }
  }
  static #_ = this.ɵfac = function ProgressBarComponent_Factory(t) {
    return new (t || ProgressBarComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ProgressBarComponent,
    selectors: [["app-progress-bar"]],
    inputs: {
      totalCount: "totalCount",
      progressCount: "progressCount"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
    decls: 1,
    vars: 1,
    consts: [["mode", "determinate", 3, "value"]],
    template: function ProgressBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.progress);
      }
    },
    dependencies: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__.MatProgressBar],
    styles: [".mat-progress-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceURL=webpack://./src/app/progress-bar/progress-bar.component.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1wcm9ncmVzcy1iYXIge1xuICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 946:
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService),
/* harmony export */   "ConfigServiceInfo": () => (/* binding */ ConfigServiceInfo)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ 5908);
/* harmony import */ var _math_generator_worksheets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math-generator/worksheets */ 1202);
/* harmony import */ var _math_generator_worksheets2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math-generator/worksheets2 */ 5230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);





class ConfigServiceInfo {}
class ConfigService {
  //private configObservable: Observable<Config>;
  constructor() {
    this.loadConfig();
    //this.configObservable = this.configSource.asObservable();
  }

  subscribe(any) {
    return this.configSource.subscribe(any);
  }
  unsubscribe() {
    if (this.configSource) {
      this.configSource.unsubscribe();
    }
  }
  next(config, needReset) {
    this.configSource.next({
      config: config,
      needReset: needReset
    });
    this.saveConfig(config);
  }
  loadConfig() {
    let storedData = localStorage.getItem(_config__WEBPACK_IMPORTED_MODULE_0__.MATH_EXERCICISES_STORE);
    let sdObject = storedData == null ? {} : JSON.parse(storedData);
    console.log("storedData");
    console.log(storedData);
    console.log("storedData");
    let cf = {};
    for (const key of Object.keys(_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG)) {
      let val = sdObject[key];
      if (val === undefined) {
        val = _config__WEBPACK_IMPORTED_MODULE_0__.CONFIG[key];
      }
      cf[key.toString()] = val;
      //console.log(`${cf[key]} = ${sdObject[key]}`);
    }

    let generatorsObj = sdObject[_config__WEBPACK_IMPORTED_MODULE_0__.GENERATORS_KEY];
    if (generatorsObj !== undefined) {
      let generators = [];
      for (const value of Object.values(generatorsObj)) {
        let worksheetsItem = value;
        let func = _math_generator_worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets[worksheetsItem.funcName];
        if (func === undefined) {
          func = _math_generator_worksheets2__WEBPACK_IMPORTED_MODULE_2__.Worksheets2[worksheetsItem.funcName];
        }
        if (func === undefined) {
          console.warn(`"${worksheetsItem.funcName}" not in Worksheets`);
        } else {
          worksheetsItem.func = func;
          generators.push(worksheetsItem);
        }
      }
      cf[_config__WEBPACK_IMPORTED_MODULE_0__.GENERATORS_KEY] = generators;
    }
    console.log(cf);
    this.configSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject({
      config: cf,
      needReset: true
    });
  }
  saveConfig(config) {
    let temp = {
      code: null,
      funcName: null,
      parameters: null
    };
    let cf = {};
    //copy
    for (const key of Object.keys(_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG)) {
      cf[key] = config[key.toString()];
      //console.log(`${cf[key]} = ${sdObject[key]}`);
    }
    //transform map to object
    let generators = [];
    config.generators.forEach(val => {
      let generatorsObj = {};
      for (const key of Object.keys(temp)) {
        generatorsObj[key] = val[key];
      }
      generators.push(generatorsObj);
    });
    cf[_config__WEBPACK_IMPORTED_MODULE_0__.GENERATORS_KEY] = generators;
    let json = JSON.stringify(cf, ConfigService.jsonReplacer, " ");
    console.log("json config -- " + json);
    console.log(config);
    localStorage.setItem(_config__WEBPACK_IMPORTED_MODULE_0__.MATH_EXERCICISES_STORE, json);
  }
  static jsonReplacer(key, value) {
    if (key.startsWith("_")) {
      return undefined;
    }
    return value;
  }
  static #_ = this.ɵfac = function ConfigService_Factory(t) {
    return new (t || ConfigService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ConfigService,
    factory: ConfigService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5908:
/*!************************************!*\
  !*** ./src/app/services/config.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONFIG": () => (/* binding */ CONFIG),
/* harmony export */   "EquationOrientations": () => (/* binding */ EquationOrientations),
/* harmony export */   "GENERATORS_KEY": () => (/* binding */ GENERATORS_KEY),
/* harmony export */   "MATH_EXERCICISES_STORE": () => (/* binding */ MATH_EXERCICISES_STORE)
/* harmony export */ });
/* harmony import */ var _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../column-answer/column-answer.component */ 663);

;
const EquationOrientations = [{
  code: "VERTICAL",
  label: "Vertical"
}, {
  code: "HORIZONTAL",
  label: "Horizontal"
}];
const CONFIG = {
  nbNumbers: 2,
  nbQuestions: 20,
  answerMode: _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_0__.ColumnAnswerMode.NORMAL,
  generateRange: [{
    min: 10,
    max: 30
  }, {
    min: 1,
    max: 9
  }],
  orientation: "VERTICAL",
  realTimeValidation: true,
  theme: "pink-bluegrey",
  generators: []
};
const MATH_EXERCICISES_STORE = "MATH_CONFIG";
const GENERATORS_KEY = "generators";

/***/ }),

/***/ 6819:
/*!***************************************************!*\
  !*** ./src/app/services/math-question.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MathQuestionService": () => (/* binding */ MathQuestionService),
/* harmony export */   "QuestionStatus": () => (/* binding */ QuestionStatus)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


var QuestionStatus;
(function (QuestionStatus) {
  QuestionStatus["RIGHT"] = "RIGHT";
  QuestionStatus["WRONG"] = "WRONG";
  QuestionStatus["EMPTY"] = "EMPTY";
  QuestionStatus["FOCUS"] = "FOCUS";
  QuestionStatus["ANSWERED"] = "ANSWERED";
})(QuestionStatus || (QuestionStatus = {}));
class MathQuestionService {
  constructor() {
    this.observable = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
  }
  unsubscribe() {
    if (this.observable) {
      this.observable.unsubscribe();
    }
  }
  next(notification) {
    //this.observable.toPromise().then(notification);
    this.observable.next(notification);
  }
  subscribe(func) {
    return this.observable.subscribe(func);
  }
  static #_ = this.ɵfac = function MathQuestionService_Factory(t) {
    return new (t || MathQuestionService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MathQuestionService,
    factory: MathQuestionService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7427:
/*!**********************************************************************!*\
  !*** ./src/app/test-features/display-test/display-test.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplayTestComponent": () => (/* binding */ DisplayTestComponent)
/* harmony export */ });
/* harmony import */ var _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/math-question.service */ 6819);
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/config */ 5908);
/* harmony import */ var src_app_column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/column-answer/column-answer.component */ 663);
/* harmony import */ var _math_generator_worksheets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../math-generator/worksheets */ 1202);
/* harmony import */ var _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../math-generator/mathProblemTypes */ 3137);
/* harmony import */ var _math_generator_mathGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../math-generator/mathGenerator */ 2765);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/config.service */ 946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _math_question_math_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../math-question/math-question.component */ 2537);











function DisplayTestComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-math-question", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const config_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("questionId", i_r2)("config", config_r1)("needReset", ctx_r0.needReset);
  }
}
class DisplayTestComponent {
  constructor(configService, mathQuestionService) {
    this.configService = configService;
    this.mathQuestionService = mathQuestionService;
    this.needReset = false;
    this.configs = [{
      ..._services_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG,
      answerMode: src_app_column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.ColumnAnswerMode.COLUMNS,
      generators: [{
        func: DisplayTestComponent.testLongNum
      }]
    }, {
      ..._services_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG,
      answerMode: src_app_column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.ColumnAnswerMode.NORMAL,
      generators: [{
        func: DisplayTestComponent.testLongNum
      }]
    }, {
      ..._services_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG,
      answerMode: src_app_column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.ColumnAnswerMode.COLUMNS,
      generators: [{
        func: _math_generator_worksheets__WEBPACK_IMPORTED_MODULE_3__.Worksheets.addTowDigitNumberWithTowDigitNumberWithCarry
      }]
    }, {
      ..._services_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG,
      orientation: "HORIZONTAL"
    }, {
      ..._services_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG,
      answerMode: src_app_column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.ColumnAnswerMode.COLUMNS
    }, {
      ..._services_config__WEBPACK_IMPORTED_MODULE_1__.CONFIG
    }];
    this.progress = 0;
    this.successCount = 0;
  }
  ngOnInit() {}
  static testLongNum() {
    let generateRange = [{
      min: 1000000,
      max: 10000000
    }, {
      min: 1000000,
      max: 10000000
    }];
    return _math_generator_mathGenerator__WEBPACK_IMPORTED_MODULE_5__.MathGenerator.getListofRandomNumber(generateRange, _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_4__.MathProblemTypes.ADDITION);
  }
  static #_ = this.ɵfac = function DisplayTestComponent_Factory(t) {
    return new (t || DisplayTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_6__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.MathQuestionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: DisplayTestComponent,
    selectors: [["app-display-test"]],
    decls: 2,
    vars: 1,
    consts: [[1, "problems"], ["class", "mathQuestionWrapper", 4, "ngFor", "ngForOf"], [1, "mathQuestionWrapper"], [3, "questionId", "config", "needReset"]],
    template: function DisplayTestComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, DisplayTestComponent_div_1_Template, 2, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.configs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _math_question_math_question_component__WEBPACK_IMPORTED_MODULE_7__.MathQuestionComponent],
    styles: [".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start {  }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end {  }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #388e3c;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.dark-theme[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #ffd740;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.light-theme[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #bcaaa4;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.deeppurple-amber[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #ffd740;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.indigo-pink[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #ff4081;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.pink-bluegrey[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #b0bec5;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.purple-green[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #69f0ae;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.candy[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #795548;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.problems[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n/*# sourceURL=webpack://./node_modules/@angular/material/core/ripple/_ripple.scss */\n/*# sourceURL=webpack://./src/app/test-features/display-test/display-test.component.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/a11y/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/overlay/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/text-field/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/focus-indicators/_private.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/style/_layout-common.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3Rlc3QtZmVhdHVyZXMvZGlzcGxheS10ZXN0L2Rpc3BsYXktdGVzdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvdGV4dC1maWVsZC9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL2ZvY3VzLWluZGljYXRvcnMvX3ByaXZhdGUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19sYXlvdXQtY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7RUFDRSxnQkFBQTtFQUlBLGtCQUFBO0FDUEo7QURjSTtFQUNFLHdCQUFBO0FDWk47O0FEZ0JFO0VBQ0UsaUJBQUE7QUNiSjs7QURnQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSw2REFBQTtFQUlBLDJCQUFBO0FDakJKO0FDZ0NJO0VGWEUsYUFBQTtBQ2xCTjs7QUNsQkU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLG1CQUFBO0VBR0EsVUFBQTtFQUdBLHdCQUFBO0VBQ0EscUJBQUE7RUFNQSxPQUFBO0FEU0o7QUNQSTtFQUNFLFVBQUE7RUFDQSxRQUFBO0FEU047O0FFekJFO0VBRUUsb0JBQUE7RUFHQSxN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RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBMlBSOztBQXJRSTtFQUVJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUF1UVI7O0FBalJJO0VBRUksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQW1SUjs7QUFyUUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBd1FKIiwic291cmNlc0NvbnRlbnQiOltudWxsLCIubWF0LXJpcHBsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXQtcmlwcGxlOm5vdCg6ZW1wdHkpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuXG4ubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMCwgMCk7XG59XG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgbGVmdDogMDtcbn1cbltkaXI9cnRsXSAuY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLmNkay1vdmVybGF5LWNvbnRhaW5lcjplbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmNkay1vdmVybGF5LXBhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgb3BhY2l0eTogMDtcbn1cbi5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgLmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMyKTtcbn1cblxuLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wIHtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAxbXMgbGluZWFyLCBvcGFjaXR5IDFtcyBsaW5lYXI7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMTtcbn1cbi5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmNkay1vdmVybGF5LWJhY2tkcm9wLW5vb3AtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMXB4O1xuICBtaW4taGVpZ2h0OiAxcHg7XG59XG5cbi5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICByZXNpemU6IG5vbmU7XG59XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3gge1xuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7IC8qISovIH1cbkBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsgLyohKi8gfVxuLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXM7XG59XG5cbi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtcztcbn1cblxuLm1hdC1mb2N1cy1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBkaXNwbGF5OiB2YXIoLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXksIG5vbmUpO1xuICBib3JkZXI6IHZhcigtLW1hdC1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoLCAzcHgpIHZhcigtLW1hdC1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXN0eWxlLCBzb2xpZCkgdmFyKC0tbWF0LWZvY3VzLWluZGljYXRvci1ib3JkZXItY29sb3IsIHRyYW5zcGFyZW50KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWF0LWZvY3VzLWluZGljYXRvci1ib3JkZXItcmFkaXVzLCA0cHgpO1xufVxuLm1hdC1mb2N1cy1pbmRpY2F0b3I6Zm9jdXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUge1xuICAtLW1hdC1mb2N1cy1pbmRpY2F0b3ItZGlzcGxheTogYmxvY2s7XG59XG5cbi5tYXQtbWRjLWZvY3VzLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXQtbWRjLWZvY3VzLWluZGljYXRvcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBkaXNwbGF5OiB2YXIoLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1kaXNwbGF5LCBub25lKTtcbiAgYm9yZGVyOiB2YXIoLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1ib3JkZXItd2lkdGgsIDNweCkgdmFyKC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXN0eWxlLCBzb2xpZCkgdmFyKC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXMsIDRweCk7XG59XG4ubWF0LW1kYy1mb2N1cy1pbmRpY2F0b3I6Zm9jdXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUge1xuICAtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubWF0aFF1ZXN0aW9uV3JhcHBlciB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtYmFzaXM6IDclO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjMzg4ZTNjO1xuICBtYXJnaW46IDAuNWVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIC5tYXRoUXVlc3Rpb25XcmFwcGVyIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNyU7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNmZmQ3NDA7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuOmhvc3QtY29udGV4dCgubGlnaHQtdGhlbWUpIC5tYXRoUXVlc3Rpb25XcmFwcGVyIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgZmxleC1iYXNpczogNyU7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNiY2FhYTQ7XG4gIG1hcmdpbjogMC41ZW07XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuOmhvc3QtY29udGV4dCguZGVlcHB1cnBsZS1hbWJlcikgLm1hdGhRdWVzdGlvbldyYXBwZXIge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA3JTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmZDc0MDtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG46aG9zdC1jb250ZXh0KC5pbmRpZ28tcGluaykgLm1hdGhRdWVzdGlvbldyYXBwZXIge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA3JTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogI2ZmNDA4MTtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG46aG9zdC1jb250ZXh0KC5waW5rLWJsdWVncmV5KSAubWF0aFF1ZXN0aW9uV3JhcHBlciB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGZsZXgtYmFzaXM6IDclO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjYjBiZWM1O1xuICBtYXJnaW46IDAuNWVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5cbjpob3N0LWNvbnRleHQoLnB1cnBsZS1ncmVlbikgLm1hdGhRdWVzdGlvbldyYXBwZXIge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA3JTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzY5ZjBhZTtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG46aG9zdC1jb250ZXh0KC5jYW5keSkgLm1hdGhRdWVzdGlvbldyYXBwZXIge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBmbGV4LWJhc2lzOiA3JTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogIzc5NTU0ODtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufVxuXG4ucHJvYmxlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59IixudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4711:
/*!*****************************************************************!*\
  !*** ./src/app/test-features/inputtest/input-test.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InputTestComponent": () => (/* binding */ InputTestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function InputTestComponent_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const line_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](line_r1);
  }
}
class InputTestComponent {
  constructor() {
    this.lines = [];
  }
  ngOnInit() {}
  onKeydown(event) {
    console.log(event);
    let str = `c:${event.code} k:${event.key}  ${event.isComposing} ${event.ctrlKey} `;
    this.lines.unshift(str);
  }
  static #_ = this.ɵfac = function InputTestComponent_Factory(t) {
    return new (t || InputTestComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InputTestComponent,
    selectors: [["app-input-test"]],
    decls: 2,
    vars: 1,
    consts: [["type", "number", 3, "keydown"], [4, "ngFor", "ngForOf"]],
    template: function InputTestComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function InputTestComponent_Template_input_keydown_0_listener($event) {
          return ctx.onKeydown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputTestComponent_p_1_Template, 2, 1, "p", 1);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lines);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1855:
/*!**********************************************************!*\
  !*** ./src/app/test-features/test-features.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestFeaturesComponent": () => (/* binding */ TestFeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../column-answer/column-answer.component */ 663);
/* harmony import */ var _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/math-question.service */ 6819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 9121);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 7371);











function TestFeaturesComponent_ng_template_2_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", x_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r8);
  }
}
function TestFeaturesComponent_ng_template_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "FOCUS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TestFeaturesComponent_ng_template_2_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "BLUR");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TestFeaturesComponent_ng_template_2_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const answerMode_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", answerMode_r9.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", answerMode_r9.label, " ");
  }
}
function TestFeaturesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-column-answer", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusChange", function TestFeaturesComponent_ng_template_2_Template_app_column_answer_focusChange_0_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const i_r1 = restoredCtx.index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.onFocusChange($event, i_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TestFeaturesComponent_ng_template_2_Template_select_ngModelChange_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const answer_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](answer_r2.status = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TestFeaturesComponent_ng_template_2_option_3_Template, 2, 2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TestFeaturesComponent_ng_template_2_Template_input_ngModelChange_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const answer_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](answer_r2.value = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TestFeaturesComponent_ng_template_2_span_6_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TestFeaturesComponent_ng_template_2_ng_template_7_Template, 2, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 12)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Answer mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TestFeaturesComponent_ng_template_2_Template_mat_select_ngModelChange_12_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const i_r1 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.answerInputConfigs[i_r1].mode = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TestFeaturesComponent_ng_template_2_mat_option_13_Template, 2, 2, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 13)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TestFeaturesComponent_ng_template_2_Template_input_ngModelChange_18_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r11);
      const answer_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](answer_r2.size = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br")(22, "hr");
  }
  if (rf & 2) {
    const i_r1 = ctx.index;
    const answer_r2 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", answer_r2.size)("mode", answer_r2.mode)("value", answer_r2.value)("id", i_r1.toString())("answerStatus", answer_r2.status)("valueChange", ctx_r0.myCallbackFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", answer_r2.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.inputStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", answer_r2.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.answerInputConfigs[i_r1].inFocus)("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.answerInputConfigs[i_r1].mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.ANSWER_MODES);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", answer_r2.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" value: ", ctx_r0.answerInputConfigs[i_r1].value, " ");
  }
}
const testcomponent = 3;
class TestFeaturesComponent {
  constructor() {
    this.status = 'inactive';
    this.ANSWER_MODES = _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_0__.ANSWER_MODES;
    this.inputStatus = [];
    //value: string[] = new Array(testcomponent);
    //statusOfInput: QuestionStatus[] = new Array(testcomponent);
    this.answerInputConfigs = [{
      size: 4,
      mode: _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_0__.ColumnAnswerMode.COLUMNS,
      status: _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.EMPTY,
      value: "3",
      inFocus: false
    }, {
      size: 5,
      mode: _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_0__.ColumnAnswerMode.NORMAL,
      status: _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.EMPTY,
      value: "67",
      inFocus: false
    }, {
      size: 5,
      mode: _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_0__.ColumnAnswerMode.COLUMNS,
      status: _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.EMPTY,
      value: "1234",
      inFocus: false
    }, {
      size: 3,
      mode: _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_0__.ColumnAnswerMode.COLUMNS,
      status: _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.EMPTY,
      value: "",
      inFocus: false
    }, {
      size: 4,
      mode: _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_0__.ColumnAnswerMode.NORMAL,
      status: _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.EMPTY,
      value: "",
      inFocus: false
    }];
    this.onValueChange = (value, index) => {
      console.log(`onValueChange ${value} ${index}`);
      this.answerInputConfigs[+index].value = value;
      return _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.RIGHT;
    };
    this.myCallbackFunction = (value, index) => {
      //callback code here
      //console.warn("CALLBACK")
      //console.warn(this)
      console.log(`myCallbackFunction ${value} ${index}`);
      this.answerInputConfigs[+index].value = value;
      let val = parseInt(value);
      let ret = val ? val % 2 == 0 : false;
      return ret;
    };
    for (var enumMember in _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus) {
      console.log("enum member: ", enumMember);
      this.inputStatus.push(enumMember);
    }
  }
  ngOnInit() {}
  toggle() {
    if (this.status === 'active') {
      this.status = 'inactive';
    } else {
      this.status = 'active';
    }
  }
  clearStorage() {
    localStorage.clear();
  }
  onFocusChange(focus, index) {
    console.log(`FOCUS change ${focus} Widget: ${index}`);
    this.answerInputConfigs[index].inFocus = focus == _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_0__.FocusType.FOCUS;
  }
  static #_ = this.ɵfac = function TestFeaturesComponent_Factory(t) {
    return new (t || TestFeaturesComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: TestFeaturesComponent,
    selectors: [["app-test-features"]],
    decls: 30,
    vars: 3,
    consts: [["ngFor", "", 3, "ngForOf"], [1, "primary"], [1, "accent"], [1, "warn"], [3, "click"], [1, "box"], ["value", "test", 1, "box"], [3, "size", "mode", "value", "id", "answerStatus", "valueChange", "focusChange"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "focusIndicator", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["appearance", "fill"], ["appearance", "outline"], ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], [3, "value"], [1, "focusIndicator"]],
    template: function TestFeaturesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TestFeaturesComponent_ng_template_2_Template, 23, 15, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Test theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Test anime");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TestFeaturesComponent_Template_button_click_14_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "toggle1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br")(17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Test color animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br")(21, "input", 6)(22, "br")(23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TestFeaturesComponent_Template_button_click_24_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br")(27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TestFeaturesComponent_Template_button_click_28_listener() {
          return ctx.clearStorage();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Clear Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.answerInputConfigs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@slideStatus", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@slideStatus", ctx.status);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_0__.ColumnAnswerComponent],
    styles: [".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start {  }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end {  }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.box[_ngcontent-%COMP%] {\n  width: 200px;\n  border: 5px solid black;\n  text-align: center;\n  font-size: 30px;\n  color: white;\n}\n\n.primary[_ngcontent-%COMP%] {\n  background-color: #00796b;\n  color: white;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.accent[_ngcontent-%COMP%] {\n  background-color: #388e3c;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.dark-theme[_nghost-%COMP%]   .primary[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background-color: #607d8b;\n  color: white;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.dark-theme[_nghost-%COMP%]   .accent[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background-color: #ffd740;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.dark-theme[_nghost-%COMP%]   .warn[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: #ff5722;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.light-theme[_nghost-%COMP%]   .primary[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.light-theme[_nghost-%COMP%]   .accent[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background-color: #bcaaa4;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.light-theme[_nghost-%COMP%]   .warn[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: #ffab91;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.deeppurple-amber[_nghost-%COMP%]   .primary[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  color: white;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.deeppurple-amber[_nghost-%COMP%]   .accent[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background-color: #ffd740;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.deeppurple-amber[_nghost-%COMP%]   .warn[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.indigo-pink[_nghost-%COMP%]   .primary[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.indigo-pink[_nghost-%COMP%]   .accent[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background-color: #ff4081;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.indigo-pink[_nghost-%COMP%]   .warn[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.pink-bluegrey[_nghost-%COMP%]   .primary[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background-color: #c2185b;\n  color: white;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.pink-bluegrey[_nghost-%COMP%]   .accent[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background-color: #b0bec5;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.pink-bluegrey[_nghost-%COMP%]   .warn[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.purple-green[_nghost-%COMP%]   .primary[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n  color: white;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.purple-green[_nghost-%COMP%]   .accent[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background-color: #69f0ae;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.purple-green[_nghost-%COMP%]   .warn[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.candy[_nghost-%COMP%]   .primary[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.candy[_nghost-%COMP%]   .accent[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background-color: #795548;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.candy[_nghost-%COMP%]   .warn[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.focusIndicator[_ngcontent-%COMP%] {\n  border: solid 1px green;\n  margin: 0 10px;\n}\n/*# sourceURL=webpack://./node_modules/@angular/material/core/ripple/_ripple.scss */\n/*# sourceURL=webpack://./src/app/test-features/test-features.component.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/a11y/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/overlay/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/text-field/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/focus-indicators/_private.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/style/_layout-common.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3Rlc3QtZmVhdHVyZXMvdGVzdC1mZWF0dXJlcy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvdGV4dC1maWVsZC9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL2ZvY3VzLWluZGljYXRvcnMvX3ByaXZhdGUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19sYXlvdXQtY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7RUFDRSxnQkFBQTtFQUlBLGtCQUFBO0FDUEo7QURjSTtFQUNFLHdCQUFBO0FDWk47O0FEZ0JFO0VBQ0UsaUJBQUE7QUNiSjs7QURnQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSw2REFBQTtFQUlBLDJCQUFBO0FDakJKO0FDZ0NJO0VGWEUsYUFBQTtBQ2xCTjs7QUNsQkU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLG1CQUFBO0VBR0EsVUFBQTtFQUdBLHdCQUFBO0VBQ0EscUJBQUE7RUFNQSxPQUFBO0FEU0o7QUNQSTtFQUNFLFVBQUE7RUFDQSxRQUFBO0FEU047O0FFekJFO0VBRUUsb0JBQUE7RUFHQSxNQUFBO0VBQ0EsT0FB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QTtFQUNBLFlBQUE7RUFDQSxpQkE5Qk07RUFHUixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQThWRjs7QUF0VkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFiRixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQXVXRjtBQXpWRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkF2Qk07RUFHUixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQWdYRjtBQTNWRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQTlCTTtFQUdSLGlCQUhRO0VBSVIsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBeVhGOztBQWpYRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFiRixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQWtZRjtBQXBYRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQXZCTTtFQUdSLGlCQUhRO0VBSVIsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBMllGO0FBdFhFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBOUJNO0VBR1IsaUJBSFE7RUFJUixXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFvWkY7O0FBNVdBO0VBQ0UsdUJBQUE7RUFDQSxjQUFBO0FBK1dGIiwic291cmNlc0NvbnRlbnQiOltudWxsLCIubWF0LXJpcHBsZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXQtcmlwcGxlOm5vdCg6ZW1wdHkpIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xufVxuXG4ubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMCwgMCk7XG59XG4uY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgbGVmdDogMDtcbn1cbltkaXI9cnRsXSAuY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAwO1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLmNkay1vdmVybGF5LWNvbnRhaW5lcjplbXB0eSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbn1cblxuLmNkay1vdmVybGF5LXBhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSA0MDBtcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgb3BhY2l0eTogMDtcbn1cbi5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgLmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMyKTtcbn1cblxuLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wIHtcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAxbXMgbGluZWFyLCBvcGFjaXR5IDFtcyBsaW5lYXI7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgb3BhY2l0eTogMTtcbn1cbi5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmNkay1vdmVybGF5LWJhY2tkcm9wLW5vb3AtYW5pbWF0aW9uIHtcbiAgdHJhbnNpdGlvbjogbm9uZTtcbn1cblxuLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMXB4O1xuICBtaW4taGVpZ2h0OiAxcHg7XG59XG5cbi5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICByZXNpemU6IG5vbmU7XG59XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3gge1xuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7IC8qISovIH1cbkBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsgLyohKi8gfVxuLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXM7XG59XG5cbi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtcztcbn1cblxuLm1hdC1mb2N1cy1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWF0LWZvY3VzLWluZGljYXRvcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBkaXNwbGF5OiB2YXIoLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXksIG5vbmUpO1xuICBib3JkZXI6IHZhcigtLW1hdC1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoLCAzcHgpIHZhcigtLW1hdC1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXN0eWxlLCBzb2xpZCkgdmFyKC0tbWF0LWZvY3VzLWluZGljYXRvci1ib3JkZXItY29sb3IsIHRyYW5zcGFyZW50KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWF0LWZvY3VzLWluZGljYXRvci1ib3JkZXItcmFkaXVzLCA0cHgpO1xufVxuLm1hdC1mb2N1cy1pbmRpY2F0b3I6Zm9jdXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUge1xuICAtLW1hdC1mb2N1cy1pbmRpY2F0b3ItZGlzcGxheTogYmxvY2s7XG59XG5cbi5tYXQtbWRjLWZvY3VzLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXQtbWRjLWZvY3VzLWluZGljYXRvcjo6YmVmb3JlIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBkaXNwbGF5OiB2YXIoLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1kaXNwbGF5LCBub25lKTtcbiAgYm9yZGVyOiB2YXIoLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1ib3JkZXItd2lkdGgsIDNweCkgdmFyKC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXN0eWxlLCBzb2xpZCkgdmFyKC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yLCB0cmFuc3BhcmVudCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXMsIDRweCk7XG59XG4ubWF0LW1kYy1mb2N1cy1pbmRpY2F0b3I6Zm9jdXM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUge1xuICAtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYm94IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3OTZiO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIHdpZHRoOiAzMGVtO1xufVxuXG4uYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4OGUzYztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMWVtO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgd2lkdGg6IDMwZW07XG59XG5cbi53YXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMWVtO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgd2lkdGg6IDMwZW07XG59XG5cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIC5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICB3aWR0aDogMzBlbTtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIC5hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkNzQwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIHdpZHRoOiAzMGVtO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLndhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICB3aWR0aDogMzBlbTtcbn1cblxuOmhvc3QtY29udGV4dCgubGlnaHQtdGhlbWUpIC5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIHdpZHRoOiAzMGVtO1xufVxuOmhvc3QtY29udGV4dCgubGlnaHQtdGhlbWUpIC5hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNhYWE0O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIHdpZHRoOiAzMGVtO1xufVxuOmhvc3QtY29udGV4dCgubGlnaHQtdGhlbWUpIC53YXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYWI5MTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICB3aWR0aDogMzBlbTtcbn1cblxuOmhvc3QtY29udGV4dCguZGVlcHB1cnBsZS1hbWJlcikgLnByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjczYWI3O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIHdpZHRoOiAzMGVtO1xufVxuOmhvc3QtY29udGV4dCguZGVlcHB1cnBsZS1hbWJlcikgLmFjY2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ3NDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMWVtO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgd2lkdGg6IDMwZW07XG59XG46aG9zdC1jb250ZXh0KC5kZWVwcHVycGxlLWFtYmVyKSAud2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIHdpZHRoOiAzMGVtO1xufVxuXG46aG9zdC1jb250ZXh0KC5pbmRpZ28tcGluaykgLnByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIHdpZHRoOiAzMGVtO1xufVxuOmhvc3QtY29udGV4dCguaW5kaWdvLXBpbmspIC5hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICB3aWR0aDogMzBlbTtcbn1cbjpob3N0LWNvbnRleHQoLmluZGlnby1waW5rKSAud2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIHdpZHRoOiAzMGVtO1xufVxuXG46aG9zdC1jb250ZXh0KC5waW5rLWJsdWVncmV5KSAucHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMjE4NWI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMWVtO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgd2lkdGg6IDMwZW07XG59XG46aG9zdC1jb250ZXh0KC5waW5rLWJsdWVncmV5KSAuYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IwYmVjNTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICB3aWR0aDogMzBlbTtcbn1cbjpob3N0LWNvbnRleHQoLnBpbmstYmx1ZWdyZXkpIC53YXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMWVtO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgd2lkdGg6IDMwZW07XG59XG5cbjpob3N0LWNvbnRleHQoLnB1cnBsZS1ncmVlbikgLnByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0MGZiO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIHdpZHRoOiAzMGVtO1xufVxuOmhvc3QtY29udGV4dCgucHVycGxlLWdyZWVuKSAuYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5ZjBhZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICB3aWR0aDogMzBlbTtcbn1cbjpob3N0LWNvbnRleHQoLnB1cnBsZS1ncmVlbikgLndhcm4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICB3aWR0aDogMzBlbTtcbn1cblxuOmhvc3QtY29udGV4dCguY2FuZHkpIC5wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTgwMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIHdpZHRoOiAzMGVtO1xufVxuOmhvc3QtY29udGV4dCguY2FuZHkpIC5hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk1NTQ4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICB3aWR0aDogMzBlbTtcbn1cbjpob3N0LWNvbnRleHQoLmNhbmR5KSAud2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIHdpZHRoOiAzMGVtO1xufVxuXG4uZm9jdXNJbmRpY2F0b3Ige1xuICBib3JkZXI6IHNvbGlkIDFweCBncmVlbjtcbiAgbWFyZ2luOiAwIDEwcHg7XG59IixudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.trigger)('slideStatus', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('inactive', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        backgroundColor: 'blue'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.state)('active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        backgroundColor: 'orange'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('* => active', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('2s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        backgroundColor: 'blue',
        offset: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        backgroundColor: 'red',
        offset: 0.8
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        backgroundColor: 'orange',
        offset: 1.0
      })]))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('* => inactive', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('2s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        backgroundColor: 'orange',
        offset: 0
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        backgroundColor: 'red',
        offset: 0.2
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        backgroundColor: 'blue',
        offset: 1.0
      })]))]), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.transition)('* => active', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.animate)('2s', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.keyframes)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        backgroundColor: 'blue'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        backgroundColor: 'red'
      }), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_9__.style)({
        backgroundColor: 'orange'
      })]))])])]
    }
  });
}

/***/ }),

/***/ 6459:
/*!**********************************************************************!*\
  !*** ./src/app/test-features/test-palette/test-palette.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPaletteComponent": () => (/* binding */ TestPaletteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function TestPaletteComponent_section_0_section_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const shade_r3 = ctx.$implicit;
    const hue_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("tp-", hue_r1, "-", shade_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shade_r3);
  }
}
function TestPaletteComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TestPaletteComponent_section_0_section_3_Template, 3, 5, "section", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const hue_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hue_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.shades);
  }
}
class TestPaletteComponent {
  constructor() {
    this.hues = ["red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "grey", "blue-grey"];
    this.shades = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "A100", "A200", "A400", "A700"];
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function TestPaletteComponent_Factory(t) {
    return new (t || TestPaletteComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: TestPaletteComponent,
    selectors: [["app-test-palette"]],
    decls: 1,
    vars: 1,
    consts: [[4, "ngFor", "ngForOf"]],
    template: function TestPaletteComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TestPaletteComponent_section_0_Template, 4, 2, "section", 0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.hues);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: [".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start {  }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end {  }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.tp-red[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n}\n\n.tp-red-50[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-red-50[_ngcontent-%COMP%]::after {\n  content: \" color: #ffebee hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-red-100[_ngcontent-%COMP%] {\n  background-color: #ffcdd2;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-red-100[_ngcontent-%COMP%]::after {\n  content: \" color: #ffcdd2 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-red-200[_ngcontent-%COMP%] {\n  background-color: #ef9a9a;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-red-200[_ngcontent-%COMP%]::after {\n  content: \" color: #ef9a9a hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-red-300[_ngcontent-%COMP%] {\n  background-color: #e57373;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-red-300[_ngcontent-%COMP%]::after {\n  content: \" color: #e57373 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-red-400[_ngcontent-%COMP%] {\n  background-color: #ef5350;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-red-400[_ngcontent-%COMP%]::after {\n  content: \" color: #ef5350 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-red-500[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n}\n\n.tp-red-500[_ngcontent-%COMP%]::after {\n  content: \" color: #f44336 hue: 500 contrast: white\";\n}\n\n.tp-red-600[_ngcontent-%COMP%] {\n  background-color: #e53935;\n  color: white;\n}\n\n.tp-red-600[_ngcontent-%COMP%]::after {\n  content: \" color: #e53935 hue: 600 contrast: white\";\n}\n\n.tp-red-700[_ngcontent-%COMP%] {\n  background-color: #d32f2f;\n  color: white;\n}\n\n.tp-red-700[_ngcontent-%COMP%]::after {\n  content: \" color: #d32f2f hue: 700 contrast: white\";\n}\n\n.tp-red-800[_ngcontent-%COMP%] {\n  background-color: #c62828;\n  color: white;\n}\n\n.tp-red-800[_ngcontent-%COMP%]::after {\n  content: \" color: #c62828 hue: 800 contrast: white\";\n}\n\n.tp-red-900[_ngcontent-%COMP%] {\n  background-color: #b71c1c;\n  color: white;\n}\n\n.tp-red-900[_ngcontent-%COMP%]::after {\n  content: \" color: #b71c1c hue: 900 contrast: white\";\n}\n\n.tp-red-A100[_ngcontent-%COMP%] {\n  background-color: #ff8a80;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-red-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ff8a80 hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-red-A200[_ngcontent-%COMP%] {\n  background-color: #ff5252;\n  color: white;\n}\n\n.tp-red-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #ff5252 hue: A200 contrast: white\";\n}\n\n.tp-red-A400[_ngcontent-%COMP%] {\n  background-color: #ff1744;\n  color: white;\n}\n\n.tp-red-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #ff1744 hue: A400 contrast: white\";\n}\n\n.tp-red-A700[_ngcontent-%COMP%] {\n  background-color: #d50000;\n  color: white;\n}\n\n.tp-red-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #d50000 hue: A700 contrast: white\";\n}\n\n.tp-pink[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  color: white;\n}\n\n.tp-pink-50[_ngcontent-%COMP%] {\n  background-color: #fce4ec;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-pink-50[_ngcontent-%COMP%]::after {\n  content: \" color: #fce4ec hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-pink-100[_ngcontent-%COMP%] {\n  background-color: #f8bbd0;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-pink-100[_ngcontent-%COMP%]::after {\n  content: \" color: #f8bbd0 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-pink-200[_ngcontent-%COMP%] {\n  background-color: #f48fb1;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-pink-200[_ngcontent-%COMP%]::after {\n  content: \" color: #f48fb1 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-pink-300[_ngcontent-%COMP%] {\n  background-color: #f06292;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-pink-300[_ngcontent-%COMP%]::after {\n  content: \" color: #f06292 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-pink-400[_ngcontent-%COMP%] {\n  background-color: #ec407a;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-pink-400[_ngcontent-%COMP%]::after {\n  content: \" color: #ec407a hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-pink-500[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  color: white;\n}\n\n.tp-pink-500[_ngcontent-%COMP%]::after {\n  content: \" color: #e91e63 hue: 500 contrast: white\";\n}\n\n.tp-pink-600[_ngcontent-%COMP%] {\n  background-color: #d81b60;\n  color: white;\n}\n\n.tp-pink-600[_ngcontent-%COMP%]::after {\n  content: \" color: #d81b60 hue: 600 contrast: white\";\n}\n\n.tp-pink-700[_ngcontent-%COMP%] {\n  background-color: #c2185b;\n  color: white;\n}\n\n.tp-pink-700[_ngcontent-%COMP%]::after {\n  content: \" color: #c2185b hue: 700 contrast: white\";\n}\n\n.tp-pink-800[_ngcontent-%COMP%] {\n  background-color: #ad1457;\n  color: white;\n}\n\n.tp-pink-800[_ngcontent-%COMP%]::after {\n  content: \" color: #ad1457 hue: 800 contrast: white\";\n}\n\n.tp-pink-900[_ngcontent-%COMP%] {\n  background-color: #880e4f;\n  color: white;\n}\n\n.tp-pink-900[_ngcontent-%COMP%]::after {\n  content: \" color: #880e4f hue: 900 contrast: white\";\n}\n\n.tp-pink-A100[_ngcontent-%COMP%] {\n  background-color: #ff80ab;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-pink-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ff80ab hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-pink-A200[_ngcontent-%COMP%] {\n  background-color: #ff4081;\n  color: white;\n}\n\n.tp-pink-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #ff4081 hue: A200 contrast: white\";\n}\n\n.tp-pink-A400[_ngcontent-%COMP%] {\n  background-color: #f50057;\n  color: white;\n}\n\n.tp-pink-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #f50057 hue: A400 contrast: white\";\n}\n\n.tp-pink-A700[_ngcontent-%COMP%] {\n  background-color: #c51162;\n  color: white;\n}\n\n.tp-pink-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #c51162 hue: A700 contrast: white\";\n}\n\n.tp-purple[_ngcontent-%COMP%] {\n  background-color: #9c27b0;\n  color: white;\n}\n\n.tp-purple-50[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-purple-50[_ngcontent-%COMP%]::after {\n  content: \" color: #f3e5f5 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-purple-100[_ngcontent-%COMP%] {\n  background-color: #e1bee7;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-purple-100[_ngcontent-%COMP%]::after {\n  content: \" color: #e1bee7 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-purple-200[_ngcontent-%COMP%] {\n  background-color: #ce93d8;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-purple-200[_ngcontent-%COMP%]::after {\n  content: \" color: #ce93d8 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-purple-300[_ngcontent-%COMP%] {\n  background-color: #ba68c8;\n  color: white;\n}\n\n.tp-purple-300[_ngcontent-%COMP%]::after {\n  content: \" color: #ba68c8 hue: 300 contrast: white\";\n}\n\n.tp-purple-400[_ngcontent-%COMP%] {\n  background-color: #ab47bc;\n  color: white;\n}\n\n.tp-purple-400[_ngcontent-%COMP%]::after {\n  content: \" color: #ab47bc hue: 400 contrast: white\";\n}\n\n.tp-purple-500[_ngcontent-%COMP%] {\n  background-color: #9c27b0;\n  color: white;\n}\n\n.tp-purple-500[_ngcontent-%COMP%]::after {\n  content: \" color: #9c27b0 hue: 500 contrast: white\";\n}\n\n.tp-purple-600[_ngcontent-%COMP%] {\n  background-color: #8e24aa;\n  color: white;\n}\n\n.tp-purple-600[_ngcontent-%COMP%]::after {\n  content: \" color: #8e24aa hue: 600 contrast: white\";\n}\n\n.tp-purple-700[_ngcontent-%COMP%] {\n  background-color: #7b1fa2;\n  color: white;\n}\n\n.tp-purple-700[_ngcontent-%COMP%]::after {\n  content: \" color: #7b1fa2 hue: 700 contrast: white\";\n}\n\n.tp-purple-800[_ngcontent-%COMP%] {\n  background-color: #6a1b9a;\n  color: white;\n}\n\n.tp-purple-800[_ngcontent-%COMP%]::after {\n  content: \" color: #6a1b9a hue: 800 contrast: white\";\n}\n\n.tp-purple-900[_ngcontent-%COMP%] {\n  background-color: #4a148c;\n  color: white;\n}\n\n.tp-purple-900[_ngcontent-%COMP%]::after {\n  content: \" color: #4a148c hue: 900 contrast: white\";\n}\n\n.tp-purple-A100[_ngcontent-%COMP%] {\n  background-color: #ea80fc;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-purple-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ea80fc hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-purple-A200[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n  color: white;\n}\n\n.tp-purple-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #e040fb hue: A200 contrast: white\";\n}\n\n.tp-purple-A400[_ngcontent-%COMP%] {\n  background-color: #d500f9;\n  color: white;\n}\n\n.tp-purple-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #d500f9 hue: A400 contrast: white\";\n}\n\n.tp-purple-A700[_ngcontent-%COMP%] {\n  background-color: #aa00ff;\n  color: white;\n}\n\n.tp-purple-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #aa00ff hue: A700 contrast: white\";\n}\n\n.tp-deep-purple[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  color: white;\n}\n\n.tp-deep-purple-50[_ngcontent-%COMP%] {\n  background-color: #ede7f6;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-purple-50[_ngcontent-%COMP%]::after {\n  content: \" color: #ede7f6 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-purple-100[_ngcontent-%COMP%] {\n  background-color: #d1c4e9;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-purple-100[_ngcontent-%COMP%]::after {\n  content: \" color: #d1c4e9 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-purple-200[_ngcontent-%COMP%] {\n  background-color: #b39ddb;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-purple-200[_ngcontent-%COMP%]::after {\n  content: \" color: #b39ddb hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-purple-300[_ngcontent-%COMP%] {\n  background-color: #9575cd;\n  color: white;\n}\n\n.tp-deep-purple-300[_ngcontent-%COMP%]::after {\n  content: \" color: #9575cd hue: 300 contrast: white\";\n}\n\n.tp-deep-purple-400[_ngcontent-%COMP%] {\n  background-color: #7e57c2;\n  color: white;\n}\n\n.tp-deep-purple-400[_ngcontent-%COMP%]::after {\n  content: \" color: #7e57c2 hue: 400 contrast: white\";\n}\n\n.tp-deep-purple-500[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  color: white;\n}\n\n.tp-deep-purple-500[_ngcontent-%COMP%]::after {\n  content: \" color: #673ab7 hue: 500 contrast: white\";\n}\n\n.tp-deep-purple-600[_ngcontent-%COMP%] {\n  background-color: #5e35b1;\n  color: white;\n}\n\n.tp-deep-purple-600[_ngcontent-%COMP%]::after {\n  content: \" color: #5e35b1 hue: 600 contrast: white\";\n}\n\n.tp-deep-purple-700[_ngcontent-%COMP%] {\n  background-color: #512da8;\n  color: white;\n}\n\n.tp-deep-purple-700[_ngcontent-%COMP%]::after {\n  content: \" color: #512da8 hue: 700 contrast: white\";\n}\n\n.tp-deep-purple-800[_ngcontent-%COMP%] {\n  background-color: #4527a0;\n  color: white;\n}\n\n.tp-deep-purple-800[_ngcontent-%COMP%]::after {\n  content: \" color: #4527a0 hue: 800 contrast: white\";\n}\n\n.tp-deep-purple-900[_ngcontent-%COMP%] {\n  background-color: #311b92;\n  color: white;\n}\n\n.tp-deep-purple-900[_ngcontent-%COMP%]::after {\n  content: \" color: #311b92 hue: 900 contrast: white\";\n}\n\n.tp-deep-purple-A100[_ngcontent-%COMP%] {\n  background-color: #b388ff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-purple-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #b388ff hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-purple-A200[_ngcontent-%COMP%] {\n  background-color: #7c4dff;\n  color: white;\n}\n\n.tp-deep-purple-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #7c4dff hue: A200 contrast: white\";\n}\n\n.tp-deep-purple-A400[_ngcontent-%COMP%] {\n  background-color: #651fff;\n  color: white;\n}\n\n.tp-deep-purple-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #651fff hue: A400 contrast: white\";\n}\n\n.tp-deep-purple-A700[_ngcontent-%COMP%] {\n  background-color: #6200ea;\n  color: white;\n}\n\n.tp-deep-purple-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #6200ea hue: A700 contrast: white\";\n}\n\n.tp-indigo[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n\n.tp-indigo-50[_ngcontent-%COMP%] {\n  background-color: #e8eaf6;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-indigo-50[_ngcontent-%COMP%]::after {\n  content: \" color: #e8eaf6 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-indigo-100[_ngcontent-%COMP%] {\n  background-color: #c5cae9;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-indigo-100[_ngcontent-%COMP%]::after {\n  content: \" color: #c5cae9 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-indigo-200[_ngcontent-%COMP%] {\n  background-color: #9fa8da;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-indigo-200[_ngcontent-%COMP%]::after {\n  content: \" color: #9fa8da hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-indigo-300[_ngcontent-%COMP%] {\n  background-color: #7986cb;\n  color: white;\n}\n\n.tp-indigo-300[_ngcontent-%COMP%]::after {\n  content: \" color: #7986cb hue: 300 contrast: white\";\n}\n\n.tp-indigo-400[_ngcontent-%COMP%] {\n  background-color: #5c6bc0;\n  color: white;\n}\n\n.tp-indigo-400[_ngcontent-%COMP%]::after {\n  content: \" color: #5c6bc0 hue: 400 contrast: white\";\n}\n\n.tp-indigo-500[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n\n.tp-indigo-500[_ngcontent-%COMP%]::after {\n  content: \" color: #3f51b5 hue: 500 contrast: white\";\n}\n\n.tp-indigo-600[_ngcontent-%COMP%] {\n  background-color: #3949ab;\n  color: white;\n}\n\n.tp-indigo-600[_ngcontent-%COMP%]::after {\n  content: \" color: #3949ab hue: 600 contrast: white\";\n}\n\n.tp-indigo-700[_ngcontent-%COMP%] {\n  background-color: #303f9f;\n  color: white;\n}\n\n.tp-indigo-700[_ngcontent-%COMP%]::after {\n  content: \" color: #303f9f hue: 700 contrast: white\";\n}\n\n.tp-indigo-800[_ngcontent-%COMP%] {\n  background-color: #283593;\n  color: white;\n}\n\n.tp-indigo-800[_ngcontent-%COMP%]::after {\n  content: \" color: #283593 hue: 800 contrast: white\";\n}\n\n.tp-indigo-900[_ngcontent-%COMP%] {\n  background-color: #1a237e;\n  color: white;\n}\n\n.tp-indigo-900[_ngcontent-%COMP%]::after {\n  content: \" color: #1a237e hue: 900 contrast: white\";\n}\n\n.tp-indigo-A100[_ngcontent-%COMP%] {\n  background-color: #8c9eff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-indigo-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #8c9eff hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-indigo-A200[_ngcontent-%COMP%] {\n  background-color: #536dfe;\n  color: white;\n}\n\n.tp-indigo-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #536dfe hue: A200 contrast: white\";\n}\n\n.tp-indigo-A400[_ngcontent-%COMP%] {\n  background-color: #3d5afe;\n  color: white;\n}\n\n.tp-indigo-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #3d5afe hue: A400 contrast: white\";\n}\n\n.tp-indigo-A700[_ngcontent-%COMP%] {\n  background-color: #304ffe;\n  color: white;\n}\n\n.tp-indigo-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #304ffe hue: A700 contrast: white\";\n}\n\n.tp-blue[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n  color: white;\n}\n\n.tp-blue-50[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-50[_ngcontent-%COMP%]::after {\n  content: \" color: #e3f2fd hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-100[_ngcontent-%COMP%] {\n  background-color: #bbdefb;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-100[_ngcontent-%COMP%]::after {\n  content: \" color: #bbdefb hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-200[_ngcontent-%COMP%] {\n  background-color: #90caf9;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-200[_ngcontent-%COMP%]::after {\n  content: \" color: #90caf9 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-300[_ngcontent-%COMP%] {\n  background-color: #64b5f6;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-300[_ngcontent-%COMP%]::after {\n  content: \" color: #64b5f6 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-400[_ngcontent-%COMP%] {\n  background-color: #42a5f5;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-400[_ngcontent-%COMP%]::after {\n  content: \" color: #42a5f5 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-500[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n  color: white;\n}\n\n.tp-blue-500[_ngcontent-%COMP%]::after {\n  content: \" color: #2196f3 hue: 500 contrast: white\";\n}\n\n.tp-blue-600[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n  color: white;\n}\n\n.tp-blue-600[_ngcontent-%COMP%]::after {\n  content: \" color: #1e88e5 hue: 600 contrast: white\";\n}\n\n.tp-blue-700[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n}\n\n.tp-blue-700[_ngcontent-%COMP%]::after {\n  content: \" color: #1976d2 hue: 700 contrast: white\";\n}\n\n.tp-blue-800[_ngcontent-%COMP%] {\n  background-color: #1565c0;\n  color: white;\n}\n\n.tp-blue-800[_ngcontent-%COMP%]::after {\n  content: \" color: #1565c0 hue: 800 contrast: white\";\n}\n\n.tp-blue-900[_ngcontent-%COMP%] {\n  background-color: #0d47a1;\n  color: white;\n}\n\n.tp-blue-900[_ngcontent-%COMP%]::after {\n  content: \" color: #0d47a1 hue: 900 contrast: white\";\n}\n\n.tp-blue-A100[_ngcontent-%COMP%] {\n  background-color: #82b1ff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #82b1ff hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-A200[_ngcontent-%COMP%] {\n  background-color: #448aff;\n  color: white;\n}\n\n.tp-blue-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #448aff hue: A200 contrast: white\";\n}\n\n.tp-blue-A400[_ngcontent-%COMP%] {\n  background-color: #2979ff;\n  color: white;\n}\n\n.tp-blue-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #2979ff hue: A400 contrast: white\";\n}\n\n.tp-blue-A700[_ngcontent-%COMP%] {\n  background-color: #2962ff;\n  color: white;\n}\n\n.tp-blue-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #2962ff hue: A700 contrast: white\";\n}\n\n.tp-light-blue[_ngcontent-%COMP%] {\n  background-color: #03a9f4;\n  color: white;\n}\n\n.tp-light-blue-50[_ngcontent-%COMP%] {\n  background-color: #e1f5fe;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-50[_ngcontent-%COMP%]::after {\n  content: \" color: #e1f5fe hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-100[_ngcontent-%COMP%] {\n  background-color: #b3e5fc;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-100[_ngcontent-%COMP%]::after {\n  content: \" color: #b3e5fc hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-200[_ngcontent-%COMP%] {\n  background-color: #81d4fa;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-200[_ngcontent-%COMP%]::after {\n  content: \" color: #81d4fa hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-300[_ngcontent-%COMP%] {\n  background-color: #4fc3f7;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-300[_ngcontent-%COMP%]::after {\n  content: \" color: #4fc3f7 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-400[_ngcontent-%COMP%] {\n  background-color: #29b6f6;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-400[_ngcontent-%COMP%]::after {\n  content: \" color: #29b6f6 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-500[_ngcontent-%COMP%] {\n  background-color: #03a9f4;\n  color: white;\n}\n\n.tp-light-blue-500[_ngcontent-%COMP%]::after {\n  content: \" color: #03a9f4 hue: 500 contrast: white\";\n}\n\n.tp-light-blue-600[_ngcontent-%COMP%] {\n  background-color: #039be5;\n  color: white;\n}\n\n.tp-light-blue-600[_ngcontent-%COMP%]::after {\n  content: \" color: #039be5 hue: 600 contrast: white\";\n}\n\n.tp-light-blue-700[_ngcontent-%COMP%] {\n  background-color: #0288d1;\n  color: white;\n}\n\n.tp-light-blue-700[_ngcontent-%COMP%]::after {\n  content: \" color: #0288d1 hue: 700 contrast: white\";\n}\n\n.tp-light-blue-800[_ngcontent-%COMP%] {\n  background-color: #0277bd;\n  color: white;\n}\n\n.tp-light-blue-800[_ngcontent-%COMP%]::after {\n  content: \" color: #0277bd hue: 800 contrast: white\";\n}\n\n.tp-light-blue-900[_ngcontent-%COMP%] {\n  background-color: #01579b;\n  color: white;\n}\n\n.tp-light-blue-900[_ngcontent-%COMP%]::after {\n  content: \" color: #01579b hue: 900 contrast: white\";\n}\n\n.tp-light-blue-A100[_ngcontent-%COMP%] {\n  background-color: #80d8ff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #80d8ff hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-A200[_ngcontent-%COMP%] {\n  background-color: #40c4ff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #40c4ff hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-A400[_ngcontent-%COMP%] {\n  background-color: #00b0ff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #00b0ff hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-A700[_ngcontent-%COMP%] {\n  background-color: #0091ea;\n  color: white;\n}\n\n.tp-light-blue-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #0091ea hue: A700 contrast: white\";\n}\n\n.tp-cyan[_ngcontent-%COMP%] {\n  background-color: #00bcd4;\n  color: white;\n}\n\n.tp-cyan-50[_ngcontent-%COMP%] {\n  background-color: #e0f7fa;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-50[_ngcontent-%COMP%]::after {\n  content: \" color: #e0f7fa hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-100[_ngcontent-%COMP%] {\n  background-color: #b2ebf2;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-100[_ngcontent-%COMP%]::after {\n  content: \" color: #b2ebf2 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-200[_ngcontent-%COMP%] {\n  background-color: #80deea;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-200[_ngcontent-%COMP%]::after {\n  content: \" color: #80deea hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-300[_ngcontent-%COMP%] {\n  background-color: #4dd0e1;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-300[_ngcontent-%COMP%]::after {\n  content: \" color: #4dd0e1 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-400[_ngcontent-%COMP%] {\n  background-color: #26c6da;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-400[_ngcontent-%COMP%]::after {\n  content: \" color: #26c6da hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-500[_ngcontent-%COMP%] {\n  background-color: #00bcd4;\n  color: white;\n}\n\n.tp-cyan-500[_ngcontent-%COMP%]::after {\n  content: \" color: #00bcd4 hue: 500 contrast: white\";\n}\n\n.tp-cyan-600[_ngcontent-%COMP%] {\n  background-color: #00acc1;\n  color: white;\n}\n\n.tp-cyan-600[_ngcontent-%COMP%]::after {\n  content: \" color: #00acc1 hue: 600 contrast: white\";\n}\n\n.tp-cyan-700[_ngcontent-%COMP%] {\n  background-color: #0097a7;\n  color: white;\n}\n\n.tp-cyan-700[_ngcontent-%COMP%]::after {\n  content: \" color: #0097a7 hue: 700 contrast: white\";\n}\n\n.tp-cyan-800[_ngcontent-%COMP%] {\n  background-color: #00838f;\n  color: white;\n}\n\n.tp-cyan-800[_ngcontent-%COMP%]::after {\n  content: \" color: #00838f hue: 800 contrast: white\";\n}\n\n.tp-cyan-900[_ngcontent-%COMP%] {\n  background-color: #006064;\n  color: white;\n}\n\n.tp-cyan-900[_ngcontent-%COMP%]::after {\n  content: \" color: #006064 hue: 900 contrast: white\";\n}\n\n.tp-cyan-A100[_ngcontent-%COMP%] {\n  background-color: #84ffff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #84ffff hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-A200[_ngcontent-%COMP%] {\n  background-color: #18ffff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #18ffff hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-A400[_ngcontent-%COMP%] {\n  background-color: #00e5ff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #00e5ff hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-A700[_ngcontent-%COMP%] {\n  background-color: #00b8d4;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #00b8d4 hue: A700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal[_ngcontent-%COMP%] {\n  background-color: #009688;\n  color: white;\n}\n\n.tp-teal-50[_ngcontent-%COMP%] {\n  background-color: #e0f2f1;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-50[_ngcontent-%COMP%]::after {\n  content: \" color: #e0f2f1 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-100[_ngcontent-%COMP%] {\n  background-color: #b2dfdb;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-100[_ngcontent-%COMP%]::after {\n  content: \" color: #b2dfdb hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-200[_ngcontent-%COMP%] {\n  background-color: #80cbc4;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-200[_ngcontent-%COMP%]::after {\n  content: \" color: #80cbc4 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-300[_ngcontent-%COMP%] {\n  background-color: #4db6ac;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-300[_ngcontent-%COMP%]::after {\n  content: \" color: #4db6ac hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-400[_ngcontent-%COMP%] {\n  background-color: #26a69a;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-400[_ngcontent-%COMP%]::after {\n  content: \" color: #26a69a hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-500[_ngcontent-%COMP%] {\n  background-color: #009688;\n  color: white;\n}\n\n.tp-teal-500[_ngcontent-%COMP%]::after {\n  content: \" color: #009688 hue: 500 contrast: white\";\n}\n\n.tp-teal-600[_ngcontent-%COMP%] {\n  background-color: #00897b;\n  color: white;\n}\n\n.tp-teal-600[_ngcontent-%COMP%]::after {\n  content: \" color: #00897b hue: 600 contrast: white\";\n}\n\n.tp-teal-700[_ngcontent-%COMP%] {\n  background-color: #00796b;\n  color: white;\n}\n\n.tp-teal-700[_ngcontent-%COMP%]::after {\n  content: \" color: #00796b hue: 700 contrast: white\";\n}\n\n.tp-teal-800[_ngcontent-%COMP%] {\n  background-color: #00695c;\n  color: white;\n}\n\n.tp-teal-800[_ngcontent-%COMP%]::after {\n  content: \" color: #00695c hue: 800 contrast: white\";\n}\n\n.tp-teal-900[_ngcontent-%COMP%] {\n  background-color: #004d40;\n  color: white;\n}\n\n.tp-teal-900[_ngcontent-%COMP%]::after {\n  content: \" color: #004d40 hue: 900 contrast: white\";\n}\n\n.tp-teal-A100[_ngcontent-%COMP%] {\n  background-color: #a7ffeb;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #a7ffeb hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-A200[_ngcontent-%COMP%] {\n  background-color: #64ffda;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #64ffda hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-A400[_ngcontent-%COMP%] {\n  background-color: #1de9b6;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #1de9b6 hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-A700[_ngcontent-%COMP%] {\n  background-color: #00bfa5;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #00bfa5 hue: A700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-50[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-50[_ngcontent-%COMP%]::after {\n  content: \" color: #e8f5e9 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-100[_ngcontent-%COMP%] {\n  background-color: #c8e6c9;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-100[_ngcontent-%COMP%]::after {\n  content: \" color: #c8e6c9 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-200[_ngcontent-%COMP%] {\n  background-color: #a5d6a7;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-200[_ngcontent-%COMP%]::after {\n  content: \" color: #a5d6a7 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-300[_ngcontent-%COMP%] {\n  background-color: #81c784;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-300[_ngcontent-%COMP%]::after {\n  content: \" color: #81c784 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-400[_ngcontent-%COMP%] {\n  background-color: #66bb6a;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-400[_ngcontent-%COMP%]::after {\n  content: \" color: #66bb6a hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-500[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-500[_ngcontent-%COMP%]::after {\n  content: \" color: #4caf50 hue: 500 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-600[_ngcontent-%COMP%] {\n  background-color: #43a047;\n  color: white;\n}\n\n.tp-green-600[_ngcontent-%COMP%]::after {\n  content: \" color: #43a047 hue: 600 contrast: white\";\n}\n\n.tp-green-700[_ngcontent-%COMP%] {\n  background-color: #388e3c;\n  color: white;\n}\n\n.tp-green-700[_ngcontent-%COMP%]::after {\n  content: \" color: #388e3c hue: 700 contrast: white\";\n}\n\n.tp-green-800[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n  color: white;\n}\n\n.tp-green-800[_ngcontent-%COMP%]::after {\n  content: \" color: #2e7d32 hue: 800 contrast: white\";\n}\n\n.tp-green-900[_ngcontent-%COMP%] {\n  background-color: #1b5e20;\n  color: white;\n}\n\n.tp-green-900[_ngcontent-%COMP%]::after {\n  content: \" color: #1b5e20 hue: 900 contrast: white\";\n}\n\n.tp-green-A100[_ngcontent-%COMP%] {\n  background-color: #b9f6ca;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #b9f6ca hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-A200[_ngcontent-%COMP%] {\n  background-color: #69f0ae;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #69f0ae hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-A400[_ngcontent-%COMP%] {\n  background-color: #00e676;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #00e676 hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-A700[_ngcontent-%COMP%] {\n  background-color: #00c853;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #00c853 hue: A700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green[_ngcontent-%COMP%] {\n  background-color: #8bc34a;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-50[_ngcontent-%COMP%] {\n  background-color: #f1f8e9;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-50[_ngcontent-%COMP%]::after {\n  content: \" color: #f1f8e9 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-100[_ngcontent-%COMP%] {\n  background-color: #dcedc8;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-100[_ngcontent-%COMP%]::after {\n  content: \" color: #dcedc8 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-200[_ngcontent-%COMP%] {\n  background-color: #c5e1a5;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-200[_ngcontent-%COMP%]::after {\n  content: \" color: #c5e1a5 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-300[_ngcontent-%COMP%] {\n  background-color: #aed581;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-300[_ngcontent-%COMP%]::after {\n  content: \" color: #aed581 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-400[_ngcontent-%COMP%] {\n  background-color: #9ccc65;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-400[_ngcontent-%COMP%]::after {\n  content: \" color: #9ccc65 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-500[_ngcontent-%COMP%] {\n  background-color: #8bc34a;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-500[_ngcontent-%COMP%]::after {\n  content: \" color: #8bc34a hue: 500 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-600[_ngcontent-%COMP%] {\n  background-color: #7cb342;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-600[_ngcontent-%COMP%]::after {\n  content: \" color: #7cb342 hue: 600 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-700[_ngcontent-%COMP%] {\n  background-color: #689f38;\n  color: white;\n}\n\n.tp-light-green-700[_ngcontent-%COMP%]::after {\n  content: \" color: #689f38 hue: 700 contrast: white\";\n}\n\n.tp-light-green-800[_ngcontent-%COMP%] {\n  background-color: #558b2f;\n  color: white;\n}\n\n.tp-light-green-800[_ngcontent-%COMP%]::after {\n  content: \" color: #558b2f hue: 800 contrast: white\";\n}\n\n.tp-light-green-900[_ngcontent-%COMP%] {\n  background-color: #33691e;\n  color: white;\n}\n\n.tp-light-green-900[_ngcontent-%COMP%]::after {\n  content: \" color: #33691e hue: 900 contrast: white\";\n}\n\n.tp-light-green-A100[_ngcontent-%COMP%] {\n  background-color: #ccff90;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ccff90 hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-A200[_ngcontent-%COMP%] {\n  background-color: #b2ff59;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #b2ff59 hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-A400[_ngcontent-%COMP%] {\n  background-color: #76ff03;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #76ff03 hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-A700[_ngcontent-%COMP%] {\n  background-color: #64dd17;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #64dd17 hue: A700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime[_ngcontent-%COMP%] {\n  background-color: #cddc39;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-50[_ngcontent-%COMP%] {\n  background-color: #f9fbe7;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-50[_ngcontent-%COMP%]::after {\n  content: \" color: #f9fbe7 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-100[_ngcontent-%COMP%] {\n  background-color: #f0f4c3;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-100[_ngcontent-%COMP%]::after {\n  content: \" color: #f0f4c3 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-200[_ngcontent-%COMP%] {\n  background-color: #e6ee9c;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-200[_ngcontent-%COMP%]::after {\n  content: \" color: #e6ee9c hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-300[_ngcontent-%COMP%] {\n  background-color: #dce775;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-300[_ngcontent-%COMP%]::after {\n  content: \" color: #dce775 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-400[_ngcontent-%COMP%] {\n  background-color: #d4e157;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-400[_ngcontent-%COMP%]::after {\n  content: \" color: #d4e157 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-500[_ngcontent-%COMP%] {\n  background-color: #cddc39;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-500[_ngcontent-%COMP%]::after {\n  content: \" color: #cddc39 hue: 500 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-600[_ngcontent-%COMP%] {\n  background-color: #c0ca33;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-600[_ngcontent-%COMP%]::after {\n  content: \" color: #c0ca33 hue: 600 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-700[_ngcontent-%COMP%] {\n  background-color: #afb42b;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-700[_ngcontent-%COMP%]::after {\n  content: \" color: #afb42b hue: 700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-800[_ngcontent-%COMP%] {\n  background-color: #9e9d24;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-800[_ngcontent-%COMP%]::after {\n  content: \" color: #9e9d24 hue: 800 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-900[_ngcontent-%COMP%] {\n  background-color: #827717;\n  color: white;\n}\n\n.tp-lime-900[_ngcontent-%COMP%]::after {\n  content: \" color: #827717 hue: 900 contrast: white\";\n}\n\n.tp-lime-A100[_ngcontent-%COMP%] {\n  background-color: #f4ff81;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #f4ff81 hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-A200[_ngcontent-%COMP%] {\n  background-color: #eeff41;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #eeff41 hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-A400[_ngcontent-%COMP%] {\n  background-color: #c6ff00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #c6ff00 hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-A700[_ngcontent-%COMP%] {\n  background-color: #aeea00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #aeea00 hue: A700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow[_ngcontent-%COMP%] {\n  background-color: #ffeb3b;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-50[_ngcontent-%COMP%] {\n  background-color: #fffde7;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-50[_ngcontent-%COMP%]::after {\n  content: \" color: #fffde7 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-100[_ngcontent-%COMP%] {\n  background-color: #fff9c4;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-100[_ngcontent-%COMP%]::after {\n  content: \" color: #fff9c4 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-200[_ngcontent-%COMP%] {\n  background-color: #fff59d;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-200[_ngcontent-%COMP%]::after {\n  content: \" color: #fff59d hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-300[_ngcontent-%COMP%] {\n  background-color: #fff176;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-300[_ngcontent-%COMP%]::after {\n  content: \" color: #fff176 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-400[_ngcontent-%COMP%] {\n  background-color: #ffee58;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-400[_ngcontent-%COMP%]::after {\n  content: \" color: #ffee58 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-500[_ngcontent-%COMP%] {\n  background-color: #ffeb3b;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-500[_ngcontent-%COMP%]::after {\n  content: \" color: #ffeb3b hue: 500 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-600[_ngcontent-%COMP%] {\n  background-color: #fdd835;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-600[_ngcontent-%COMP%]::after {\n  content: \" color: #fdd835 hue: 600 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-700[_ngcontent-%COMP%] {\n  background-color: #fbc02d;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-700[_ngcontent-%COMP%]::after {\n  content: \" color: #fbc02d hue: 700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-800[_ngcontent-%COMP%] {\n  background-color: #f9a825;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-800[_ngcontent-%COMP%]::after {\n  content: \" color: #f9a825 hue: 800 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-900[_ngcontent-%COMP%] {\n  background-color: #f57f17;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-900[_ngcontent-%COMP%]::after {\n  content: \" color: #f57f17 hue: 900 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-A100[_ngcontent-%COMP%] {\n  background-color: #ffff8d;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ffff8d hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-A200[_ngcontent-%COMP%] {\n  background-color: yellow;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-A200[_ngcontent-%COMP%]::after {\n  content: \" color: yellow hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-A400[_ngcontent-%COMP%] {\n  background-color: #ffea00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #ffea00 hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-A700[_ngcontent-%COMP%] {\n  background-color: #ffd600;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #ffd600 hue: A700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-50[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-50[_ngcontent-%COMP%]::after {\n  content: \" color: #fff8e1 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-100[_ngcontent-%COMP%] {\n  background-color: #ffecb3;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-100[_ngcontent-%COMP%]::after {\n  content: \" color: #ffecb3 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-200[_ngcontent-%COMP%] {\n  background-color: #ffe082;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-200[_ngcontent-%COMP%]::after {\n  content: \" color: #ffe082 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-300[_ngcontent-%COMP%] {\n  background-color: #ffd54f;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-300[_ngcontent-%COMP%]::after {\n  content: \" color: #ffd54f hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-400[_ngcontent-%COMP%] {\n  background-color: #ffca28;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-400[_ngcontent-%COMP%]::after {\n  content: \" color: #ffca28 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-500[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-500[_ngcontent-%COMP%]::after {\n  content: \" color: #ffc107 hue: 500 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-600[_ngcontent-%COMP%] {\n  background-color: #ffb300;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-600[_ngcontent-%COMP%]::after {\n  content: \" color: #ffb300 hue: 600 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-700[_ngcontent-%COMP%] {\n  background-color: #ffa000;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-700[_ngcontent-%COMP%]::after {\n  content: \" color: #ffa000 hue: 700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-800[_ngcontent-%COMP%] {\n  background-color: #ff8f00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-800[_ngcontent-%COMP%]::after {\n  content: \" color: #ff8f00 hue: 800 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-900[_ngcontent-%COMP%] {\n  background-color: #ff6f00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-900[_ngcontent-%COMP%]::after {\n  content: \" color: #ff6f00 hue: 900 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-A100[_ngcontent-%COMP%] {\n  background-color: #ffe57f;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ffe57f hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-A200[_ngcontent-%COMP%] {\n  background-color: #ffd740;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #ffd740 hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-A400[_ngcontent-%COMP%] {\n  background-color: #ffc400;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #ffc400 hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-A700[_ngcontent-%COMP%] {\n  background-color: #ffab00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #ffab00 hue: A700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-50[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-50[_ngcontent-%COMP%]::after {\n  content: \" color: #fff3e0 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-100[_ngcontent-%COMP%] {\n  background-color: #ffe0b2;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-100[_ngcontent-%COMP%]::after {\n  content: \" color: #ffe0b2 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-200[_ngcontent-%COMP%] {\n  background-color: #ffcc80;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-200[_ngcontent-%COMP%]::after {\n  content: \" color: #ffcc80 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-300[_ngcontent-%COMP%] {\n  background-color: #ffb74d;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-300[_ngcontent-%COMP%]::after {\n  content: \" color: #ffb74d hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-400[_ngcontent-%COMP%] {\n  background-color: #ffa726;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-400[_ngcontent-%COMP%]::after {\n  content: \" color: #ffa726 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-500[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-500[_ngcontent-%COMP%]::after {\n  content: \" color: #ff9800 hue: 500 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-600[_ngcontent-%COMP%] {\n  background-color: #fb8c00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-600[_ngcontent-%COMP%]::after {\n  content: \" color: #fb8c00 hue: 600 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-700[_ngcontent-%COMP%] {\n  background-color: #f57c00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-700[_ngcontent-%COMP%]::after {\n  content: \" color: #f57c00 hue: 700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-800[_ngcontent-%COMP%] {\n  background-color: #ef6c00;\n  color: white;\n}\n\n.tp-orange-800[_ngcontent-%COMP%]::after {\n  content: \" color: #ef6c00 hue: 800 contrast: white\";\n}\n\n.tp-orange-900[_ngcontent-%COMP%] {\n  background-color: #e65100;\n  color: white;\n}\n\n.tp-orange-900[_ngcontent-%COMP%]::after {\n  content: \" color: #e65100 hue: 900 contrast: white\";\n}\n\n.tp-orange-A100[_ngcontent-%COMP%] {\n  background-color: #ffd180;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ffd180 hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-A200[_ngcontent-%COMP%] {\n  background-color: #ffab40;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #ffab40 hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-A400[_ngcontent-%COMP%] {\n  background-color: #ff9100;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #ff9100 hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-A700[_ngcontent-%COMP%] {\n  background-color: #ff6d00;\n  color: black;\n}\n\n.tp-orange-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #ff6d00 hue: A700 contrast: black\";\n}\n\n.tp-deep-orange[_ngcontent-%COMP%] {\n  background-color: #ff5722;\n  color: white;\n}\n\n.tp-deep-orange-50[_ngcontent-%COMP%] {\n  background-color: #fbe9e7;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-orange-50[_ngcontent-%COMP%]::after {\n  content: \" color: #fbe9e7 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-orange-100[_ngcontent-%COMP%] {\n  background-color: #ffccbc;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-orange-100[_ngcontent-%COMP%]::after {\n  content: \" color: #ffccbc hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-orange-200[_ngcontent-%COMP%] {\n  background-color: #ffab91;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-orange-200[_ngcontent-%COMP%]::after {\n  content: \" color: #ffab91 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-orange-300[_ngcontent-%COMP%] {\n  background-color: #ff8a65;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-orange-300[_ngcontent-%COMP%]::after {\n  content: \" color: #ff8a65 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-orange-400[_ngcontent-%COMP%] {\n  background-color: #ff7043;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-orange-400[_ngcontent-%COMP%]::after {\n  content: \" color: #ff7043 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-orange-500[_ngcontent-%COMP%] {\n  background-color: #ff5722;\n  color: white;\n}\n\n.tp-deep-orange-500[_ngcontent-%COMP%]::after {\n  content: \" color: #ff5722 hue: 500 contrast: white\";\n}\n\n.tp-deep-orange-600[_ngcontent-%COMP%] {\n  background-color: #f4511e;\n  color: white;\n}\n\n.tp-deep-orange-600[_ngcontent-%COMP%]::after {\n  content: \" color: #f4511e hue: 600 contrast: white\";\n}\n\n.tp-deep-orange-700[_ngcontent-%COMP%] {\n  background-color: #e64a19;\n  color: white;\n}\n\n.tp-deep-orange-700[_ngcontent-%COMP%]::after {\n  content: \" color: #e64a19 hue: 700 contrast: white\";\n}\n\n.tp-deep-orange-800[_ngcontent-%COMP%] {\n  background-color: #d84315;\n  color: white;\n}\n\n.tp-deep-orange-800[_ngcontent-%COMP%]::after {\n  content: \" color: #d84315 hue: 800 contrast: white\";\n}\n\n.tp-deep-orange-900[_ngcontent-%COMP%] {\n  background-color: #bf360c;\n  color: white;\n}\n\n.tp-deep-orange-900[_ngcontent-%COMP%]::after {\n  content: \" color: #bf360c hue: 900 contrast: white\";\n}\n\n.tp-deep-orange-A100[_ngcontent-%COMP%] {\n  background-color: #ff9e80;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-orange-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ff9e80 hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-orange-A200[_ngcontent-%COMP%] {\n  background-color: #ff6e40;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-orange-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #ff6e40 hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-orange-A400[_ngcontent-%COMP%] {\n  background-color: #ff3d00;\n  color: white;\n}\n\n.tp-deep-orange-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #ff3d00 hue: A400 contrast: white\";\n}\n\n.tp-deep-orange-A700[_ngcontent-%COMP%] {\n  background-color: #dd2c00;\n  color: white;\n}\n\n.tp-deep-orange-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #dd2c00 hue: A700 contrast: white\";\n}\n\n.tp-brown[_ngcontent-%COMP%] {\n  background-color: #795548;\n  color: white;\n}\n\n.tp-brown-50[_ngcontent-%COMP%] {\n  background-color: #efebe9;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-brown-50[_ngcontent-%COMP%]::after {\n  content: \" color: #efebe9 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-brown-100[_ngcontent-%COMP%] {\n  background-color: #d7ccc8;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-brown-100[_ngcontent-%COMP%]::after {\n  content: \" color: #d7ccc8 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-brown-200[_ngcontent-%COMP%] {\n  background-color: #bcaaa4;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-brown-200[_ngcontent-%COMP%]::after {\n  content: \" color: #bcaaa4 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-brown-300[_ngcontent-%COMP%] {\n  background-color: #a1887f;\n  color: white;\n}\n\n.tp-brown-300[_ngcontent-%COMP%]::after {\n  content: \" color: #a1887f hue: 300 contrast: white\";\n}\n\n.tp-brown-400[_ngcontent-%COMP%] {\n  background-color: #8d6e63;\n  color: white;\n}\n\n.tp-brown-400[_ngcontent-%COMP%]::after {\n  content: \" color: #8d6e63 hue: 400 contrast: white\";\n}\n\n.tp-brown-500[_ngcontent-%COMP%] {\n  background-color: #795548;\n  color: white;\n}\n\n.tp-brown-500[_ngcontent-%COMP%]::after {\n  content: \" color: #795548 hue: 500 contrast: white\";\n}\n\n.tp-brown-600[_ngcontent-%COMP%] {\n  background-color: #6d4c41;\n  color: white;\n}\n\n.tp-brown-600[_ngcontent-%COMP%]::after {\n  content: \" color: #6d4c41 hue: 600 contrast: white\";\n}\n\n.tp-brown-700[_ngcontent-%COMP%] {\n  background-color: #5d4037;\n  color: white;\n}\n\n.tp-brown-700[_ngcontent-%COMP%]::after {\n  content: \" color: #5d4037 hue: 700 contrast: white\";\n}\n\n.tp-brown-800[_ngcontent-%COMP%] {\n  background-color: #4e342e;\n  color: white;\n}\n\n.tp-brown-800[_ngcontent-%COMP%]::after {\n  content: \" color: #4e342e hue: 800 contrast: white\";\n}\n\n.tp-brown-900[_ngcontent-%COMP%] {\n  background-color: #3e2723;\n  color: white;\n}\n\n.tp-brown-900[_ngcontent-%COMP%]::after {\n  content: \" color: #3e2723 hue: 900 contrast: white\";\n}\n\n.tp-brown-A100[_ngcontent-%COMP%] {\n  background-color: #d7ccc8;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-brown-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #d7ccc8 hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-brown-A200[_ngcontent-%COMP%] {\n  background-color: #bcaaa4;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-brown-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #bcaaa4 hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-brown-A400[_ngcontent-%COMP%] {\n  background-color: #8d6e63;\n  color: white;\n}\n\n.tp-brown-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #8d6e63 hue: A400 contrast: white\";\n}\n\n.tp-brown-A700[_ngcontent-%COMP%] {\n  background-color: #5d4037;\n  color: white;\n}\n\n.tp-brown-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #5d4037 hue: A700 contrast: white\";\n}\n\n.tp-grey[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-50[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-50[_ngcontent-%COMP%]::after {\n  content: \" color: #fafafa hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-100[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-100[_ngcontent-%COMP%]::after {\n  content: \" color: whitesmoke hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-200[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-200[_ngcontent-%COMP%]::after {\n  content: \" color: #eeeeee hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-300[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-300[_ngcontent-%COMP%]::after {\n  content: \" color: #e0e0e0 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-400[_ngcontent-%COMP%] {\n  background-color: #bdbdbd;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-400[_ngcontent-%COMP%]::after {\n  content: \" color: #bdbdbd hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-500[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-500[_ngcontent-%COMP%]::after {\n  content: \" color: #9e9e9e hue: 500 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-600[_ngcontent-%COMP%] {\n  background-color: #757575;\n  color: white;\n}\n\n.tp-grey-600[_ngcontent-%COMP%]::after {\n  content: \" color: #757575 hue: 600 contrast: white\";\n}\n\n.tp-grey-700[_ngcontent-%COMP%] {\n  background-color: #616161;\n  color: white;\n}\n\n.tp-grey-700[_ngcontent-%COMP%]::after {\n  content: \" color: #616161 hue: 700 contrast: white\";\n}\n\n.tp-grey-800[_ngcontent-%COMP%] {\n  background-color: #424242;\n  color: white;\n}\n\n.tp-grey-800[_ngcontent-%COMP%]::after {\n  content: \" color: #424242 hue: 800 contrast: white\";\n}\n\n.tp-grey-900[_ngcontent-%COMP%] {\n  background-color: #212121;\n  color: white;\n}\n\n.tp-grey-900[_ngcontent-%COMP%]::after {\n  content: \" color: #212121 hue: 900 contrast: white\";\n}\n\n.tp-grey-A100[_ngcontent-%COMP%] {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-A100[_ngcontent-%COMP%]::after {\n  content: \" color: white hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-A200[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #eeeeee hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-A400[_ngcontent-%COMP%] {\n  background-color: #bdbdbd;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #bdbdbd hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-A700[_ngcontent-%COMP%] {\n  background-color: #616161;\n  color: white;\n}\n\n.tp-grey-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #616161 hue: A700 contrast: white\";\n}\n\n.tp-blue-grey[_ngcontent-%COMP%] {\n  background-color: #607d8b;\n  color: white;\n}\n\n.tp-blue-grey-50[_ngcontent-%COMP%] {\n  background-color: #eceff1;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-grey-50[_ngcontent-%COMP%]::after {\n  content: \" color: #eceff1 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-grey-100[_ngcontent-%COMP%] {\n  background-color: #cfd8dc;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-grey-100[_ngcontent-%COMP%]::after {\n  content: \" color: #cfd8dc hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-grey-200[_ngcontent-%COMP%] {\n  background-color: #b0bec5;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-grey-200[_ngcontent-%COMP%]::after {\n  content: \" color: #b0bec5 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-grey-300[_ngcontent-%COMP%] {\n  background-color: #90a4ae;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-grey-300[_ngcontent-%COMP%]::after {\n  content: \" color: #90a4ae hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-grey-400[_ngcontent-%COMP%] {\n  background-color: #78909c;\n  color: white;\n}\n\n.tp-blue-grey-400[_ngcontent-%COMP%]::after {\n  content: \" color: #78909c hue: 400 contrast: white\";\n}\n\n.tp-blue-grey-500[_ngcontent-%COMP%] {\n  background-color: #607d8b;\n  color: white;\n}\n\n.tp-blue-grey-500[_ngcontent-%COMP%]::after {\n  content: \" color: #607d8b hue: 500 contrast: white\";\n}\n\n.tp-blue-grey-600[_ngcontent-%COMP%] {\n  background-color: #546e7a;\n  color: white;\n}\n\n.tp-blue-grey-600[_ngcontent-%COMP%]::after {\n  content: \" color: #546e7a hue: 600 contrast: white\";\n}\n\n.tp-blue-grey-700[_ngcontent-%COMP%] {\n  background-color: #455a64;\n  color: white;\n}\n\n.tp-blue-grey-700[_ngcontent-%COMP%]::after {\n  content: \" color: #455a64 hue: 700 contrast: white\";\n}\n\n.tp-blue-grey-800[_ngcontent-%COMP%] {\n  background-color: #37474f;\n  color: white;\n}\n\n.tp-blue-grey-800[_ngcontent-%COMP%]::after {\n  content: \" color: #37474f hue: 800 contrast: white\";\n}\n\n.tp-blue-grey-900[_ngcontent-%COMP%] {\n  background-color: #263238;\n  color: white;\n}\n\n.tp-blue-grey-900[_ngcontent-%COMP%]::after {\n  content: \" color: #263238 hue: 900 contrast: white\";\n}\n\n.tp-blue-grey-A100[_ngcontent-%COMP%] {\n  background-color: #cfd8dc;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-grey-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #cfd8dc hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-grey-A200[_ngcontent-%COMP%] {\n  background-color: #b0bec5;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-grey-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #b0bec5 hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-grey-A400[_ngcontent-%COMP%] {\n  background-color: #78909c;\n  color: white;\n}\n\n.tp-blue-grey-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #78909c hue: A400 contrast: white\";\n}\n\n.tp-blue-grey-A700[_ngcontent-%COMP%] {\n  background-color: #455a64;\n  color: white;\n}\n\n.tp-blue-grey-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #455a64 hue: A700 contrast: white\";\n}\n/*# sourceURL=webpack://./node_modules/@angular/material/core/ripple/_ripple.scss */\n/*# sourceURL=webpack://./src/app/test-features/test-palette/test-palette.component.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/a11y/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/overlay/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/text-field/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/focus-indicators/_private.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/style/_layout-common.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3Rlc3QtZmVhdHVyZXMvdGVzdC1wYWxldHRlL3Rlc3QtcGFsZXR0ZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvdGV4dC1maWVsZC9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL2ZvY3VzLWluZGljYXRvcnMvX3ByaXZhdGUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19sYXlvdXQtY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7RUFDRSxnQkFBQTtFQUlBLGtCQUFBO0FDUEo7QURjSTtFQUNFLHdCQUFBO0FDWk47O0FEZ0JFO0VBQ0UsaUJBQUE7QUNiSjs7QURnQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSw2REFBQTtFQUlBLDJCQUFBO0FDakJKO0FDZ0NJO0VGWEUsYUFBQTtBQ2xCTjs7QUNsQkU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLG1CQUFBO0VBR0EsVUFBQTtFQUdBLHdCQUFBO0VBQ0EscUJBQUE7RUFNQSxPQUFBO0FEU0o7QUNQSTtFQUNFLFVBQUE7RUFDQSxRQUFBO0FEU047O0FFekJFO0VBRUUsb0JBQUE7RUFHQSxN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bWhGWjs7QUFoaEZRO0VBQ0ksbURBQUE7QUFtaEZaOztBQXpoRlE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUE0aEZaOztBQXpoRlE7RUFDSSxtREFBQTtBQTRoRlo7O0FBbGlGUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQXFpRlo7O0FBbGlGUTtFQUNJLG1EQUFBO0FBcWlGWjs7QUEzaUZRO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQThpRlo7O0FBM2lGUTtFQUNJLGtFQUFBO0FBOGlGWjs7QUFwakZRO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQXVqRlo7O0FBcGpGUTtFQUNJLGtFQUFBO0FBdWpGWjs7QUE3akZRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBZ2tGWjs7QUE3akZRO0VBQ0ksb0RBQUE7QUFna0ZaOztBQXRrRlE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUF5a0ZaOztBQXRrRlE7RUFDSSxvREFBQTtBQXlrRloiLCJzb3VyY2VzQ29udGVudCI6W251bGwsIi5tYXQtcmlwcGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hdC1yaXBwbGU6bm90KDplbXB0eSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5cbi5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAwLCAwKTtcbn1cbi5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBsZWZ0OiAwO1xufVxuW2Rpcj1ydGxdIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4uY2RrLW92ZXJsYXktY29udGFpbmVyOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4uY2RrLW92ZXJsYXktcGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICBvcGFjaXR5OiAwO1xufVxuLmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAxO1xufVxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIpO1xufVxuXG4uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDFtcyBsaW5lYXIsIG9wYWNpdHkgMW1zIGxpbmVhcjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAxO1xufVxuLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uY2RrLW92ZXJsYXktYmFja2Ryb3Atbm9vcC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG4uY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAxcHg7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbn1cblxuLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZyB7XG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmctZmlyZWZveCB7XG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IHsgLyohKi8gfVxuQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgeyAvKiEqLyB9XG4uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtcztcbn1cblxuLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcbiAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgMHMgMW1zO1xufVxuXG4ubWF0LWZvY3VzLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGRpc3BsYXk6IHZhcigtLW1hdC1mb2N1cy1pbmRpY2F0b3ItZGlzcGxheSwgbm9uZSk7XG4gIGJvcmRlcjogdmFyKC0tbWF0LWZvY3VzLWluZGljYXRvci1ib3JkZXItd2lkdGgsIDNweCkgdmFyKC0tbWF0LWZvY3VzLWluZGljYXRvci1ib3JkZXItc3R5bGUsIHNvbGlkKSB2YXIoLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1jb2xvciwgdHJhbnNwYXJlbnQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXMsIDRweCk7XG59XG4ubWF0LWZvY3VzLWluZGljYXRvcjpmb2N1czo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSB7XG4gIC0tbWF0LWZvY3VzLWluZGljYXRvci1kaXNwbGF5OiBibG9jaztcbn1cblxuLm1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGRpc3BsYXk6IHZhcigtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXksIG5vbmUpO1xuICBib3JkZXI6IHZhcigtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci13aWR0aCwgM3B4KSB2YXIoLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1ib3JkZXItc3R5bGUsIHNvbGlkKSB2YXIoLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1ib3JkZXItY29sb3IsIHRyYW5zcGFyZW50KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1cywgNHB4KTtcbn1cbi5tYXQtbWRjLWZvY3VzLWluZGljYXRvcjpmb2N1czo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSB7XG4gIC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItZGlzcGxheTogYmxvY2s7XG59XG5cbi50cC1yZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1yZWQtNTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXJlZC01MDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2ZmZWJlZSBodWU6IDUwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1yZWQtMTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2RkMjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1yZWQtMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmZjZGQyIGh1ZTogMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1yZWQtMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmOWE5YTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1yZWQtMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZWY5YTlhIGh1ZTogMjAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1yZWQtMzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1NzM3MztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1yZWQtMzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZTU3MzczIGh1ZTogMzAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1yZWQtNDAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmNTM1MDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1yZWQtNDAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZWY1MzUwIGh1ZTogNDAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1yZWQtNTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtcmVkLTUwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2Y0NDMzNiBodWU6IDUwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLXJlZC02MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzOTM1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1yZWQtNjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZTUzOTM1IGh1ZTogNjAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtcmVkLTcwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLXJlZC03MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNkMzJmMmYgaHVlOiA3MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1yZWQtODAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M2MjgyODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtcmVkLTgwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2M2MjgyOCBodWU6IDgwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLXJlZC05MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjcxYzFjO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1yZWQtOTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjYjcxYzFjIGh1ZTogOTAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtcmVkLUExMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4YTgwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXJlZC1BMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmY4YTgwIGh1ZTogQTEwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtcmVkLUEyMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1MjUyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1yZWQtQTIwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2ZmNTI1MiBodWU6IEEyMDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1yZWQtQTQwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjE3NDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLXJlZC1BNDAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmYxNzQ0IGh1ZTogQTQwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLXJlZC1BNzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MDAwMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtcmVkLUE3MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNkNTAwMDAgaHVlOiBBNzAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtcGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLXBpbmstNTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNlNGVjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXBpbmstNTA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmY2U0ZWMgaHVlOiA1MCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtcGluay0xMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhiYmQwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXBpbmstMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZjhiYmQwIGh1ZTogMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1waW5rLTIwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDhmYjE7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtcGluay0yMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmNDhmYjEgaHVlOiAyMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLXBpbmstMzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwNjI5MjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1waW5rLTMwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2YwNjI5MiBodWU6IDMwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtcGluay00MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM0MDdhO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXBpbmstNDAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZWM0MDdhIGh1ZTogNDAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1waW5rLTUwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOTFlNjM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLXBpbmstNTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZTkxZTYzIGh1ZTogNTAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtcGluay02MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDgxYjYwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1waW5rLTYwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2Q4MWI2MCBodWU6IDYwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLXBpbmstNzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2MyMTg1YjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtcGluay03MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNjMjE4NWIgaHVlOiA3MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1waW5rLTgwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhZDE0NTc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLXBpbmstODAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjYWQxNDU3IGh1ZTogODAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtcGluay05MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODgwZTRmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1waW5rLTkwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzg4MGU0ZiBodWU6IDkwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLXBpbmstQTEwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjgwYWI7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtcGluay1BMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmY4MGFiIGh1ZTogQTEwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtcGluay1BMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtcGluay1BMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmY0MDgxIGh1ZTogQTIwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLXBpbmstQTQwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNTAwNTc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLXBpbmstQTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2Y1MDA1NyBodWU6IEE0MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1waW5rLUE3MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzUxMTYyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1waW5rLUE3MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNjNTExNjIgaHVlOiBBNzAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtcHVycGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMjdiMDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtcHVycGxlLTUwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZTVmNTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1wdXJwbGUtNTA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmM2U1ZjUgaHVlOiA1MCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtcHVycGxlLTEwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWJlZTc7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtcHVycGxlLTEwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2UxYmVlNyBodWU6IDEwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtcHVycGxlLTIwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZTkzZDg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtcHVycGxlLTIwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2NlOTNkOCBodWU6IDIwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtcHVycGxlLTMwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYTY4Yzg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLXB1cnBsZS0zMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNiYTY4YzggaHVlOiAzMDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1wdXJwbGUtNDAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiNDdiYztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtcHVycGxlLTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2FiNDdiYyBodWU6IDQwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLXB1cnBsZS01MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMyN2IwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1wdXJwbGUtNTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjOWMyN2IwIGh1ZTogNTAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtcHVycGxlLTYwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4ZTI0YWE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLXB1cnBsZS02MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM4ZTI0YWEgaHVlOiA2MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1wdXJwbGUtNzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdiMWZhMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtcHVycGxlLTcwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzdiMWZhMiBodWU6IDcwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLXB1cnBsZS04MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmExYjlhO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1wdXJwbGUtODAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjNmExYjlhIGh1ZTogODAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtcHVycGxlLTkwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YTE0OGM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLXB1cnBsZS05MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM0YTE0OGMgaHVlOiA5MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1wdXJwbGUtQTEwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYTgwZmM7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtcHVycGxlLUExMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNlYTgwZmMgaHVlOiBBMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1wdXJwbGUtQTIwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQwZmI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLXB1cnBsZS1BMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZTA0MGZiIGh1ZTogQTIwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLXB1cnBsZS1BNDAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q1MDBmOTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtcHVycGxlLUE0MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNkNTAwZjkgaHVlOiBBNDAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtcHVycGxlLUE3MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWEwMGZmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1wdXJwbGUtQTcwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2FhMDBmZiBodWU6IEE3MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1kZWVwLXB1cnBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTUwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZTdmNjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1kZWVwLXB1cnBsZS01MDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2VkZTdmNiBodWU6IDUwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1kZWVwLXB1cnBsZS0xMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFjNGU5O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTEwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2QxYzRlOSBodWU6IDEwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtZGVlcC1wdXJwbGUtMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzOWRkYjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1kZWVwLXB1cnBsZS0yMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNiMzlkZGIgaHVlOiAyMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTMwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NTc1Y2Q7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTMwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzk1NzVjZCBodWU6IDMwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTQwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZTU3YzI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzdlNTdjMiBodWU6IDQwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTUwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NzNhYjc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTUwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzY3M2FiNyBodWU6IDUwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTYwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTM1YjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTYwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzVlMzViMSBodWU6IDYwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTcwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MTJkYTg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTcwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzUxMmRhOCBodWU6IDcwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTgwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTI3YTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTgwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzQ1MjdhMCBodWU6IDgwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTkwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTFiOTI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWRlZXAtcHVycGxlLTkwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzMxMWI5MiBodWU6IDkwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWRlZXAtcHVycGxlLUExMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjM4OGZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWRlZXAtcHVycGxlLUExMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNiMzg4ZmYgaHVlOiBBMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1kZWVwLXB1cnBsZS1BMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjNGRmZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtZGVlcC1wdXJwbGUtQTIwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzdjNGRmZiBodWU6IEEyMDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1kZWVwLXB1cnBsZS1BNDAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY1MWZmZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtZGVlcC1wdXJwbGUtQTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzY1MWZmZiBodWU6IEE0MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1kZWVwLXB1cnBsZS1BNzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYyMDBlYTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtZGVlcC1wdXJwbGUtQTcwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzYyMDBlYSBodWU6IEE3MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1pbmRpZ28ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1pbmRpZ28tNTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlYWY2O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWluZGlnby01MDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2U4ZWFmNiBodWU6IDUwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1pbmRpZ28tMTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1Y2FlOTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1pbmRpZ28tMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjYzVjYWU5IGh1ZTogMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1pbmRpZ28tMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlmYThkYTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1pbmRpZ28tMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjOWZhOGRhIGh1ZTogMjAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1pbmRpZ28tMzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5ODZjYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtaW5kaWdvLTMwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzc5ODZjYiBodWU6IDMwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWluZGlnby00MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM2YmMwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1pbmRpZ28tNDAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjNWM2YmMwIGh1ZTogNDAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtaW5kaWdvLTUwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWluZGlnby01MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICMzZjUxYjUgaHVlOiA1MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1pbmRpZ28tNjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5NDlhYjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtaW5kaWdvLTYwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzM5NDlhYiBodWU6IDYwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWluZGlnby03MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzZjlmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1pbmRpZ28tNzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMzAzZjlmIGh1ZTogNzAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtaW5kaWdvLTgwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODM1OTM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWluZGlnby04MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICMyODM1OTMgaHVlOiA4MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1pbmRpZ28tOTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjM3ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtaW5kaWdvLTkwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzFhMjM3ZSBodWU6IDkwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWluZGlnby1BMTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjOWVmZjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1pbmRpZ28tQTEwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzhjOWVmZiBodWU6IEExMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWluZGlnby1BMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNmRmZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtaW5kaWdvLUEyMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM1MzZkZmUgaHVlOiBBMjAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtaW5kaWdvLUE0MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q1YWZlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1pbmRpZ28tQTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzNkNWFmZSBodWU6IEE0MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1pbmRpZ28tQTcwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDRmZmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWluZGlnby1BNzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMzA0ZmZlIGh1ZTogQTcwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1ibHVlLTUwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1ibHVlLTUwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZTNmMmZkIGh1ZTogNTAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWJsdWUtMTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZGVmYjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1ibHVlLTEwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2JiZGVmYiBodWU6IDEwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtYmx1ZS0yMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBjYWY5O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWJsdWUtMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjOTBjYWY5IGh1ZTogMjAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1ibHVlLTMwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NGI1ZjY7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtYmx1ZS0zMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM2NGI1ZjYgaHVlOiAzMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWJsdWUtNDAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyYTVmNTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1ibHVlLTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzQyYTVmNSBodWU6IDQwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtYmx1ZS01MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1ibHVlLTUwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzIxOTZmMyBodWU6IDUwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWJsdWUtNjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlODhlNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYmx1ZS02MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICMxZTg4ZTUgaHVlOiA2MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1ibHVlLTcwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWJsdWUtNzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMTk3NmQyIGh1ZTogNzAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtYmx1ZS04MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTU2NWMwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1ibHVlLTgwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzE1NjVjMCBodWU6IDgwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWJsdWUtOTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBkNDdhMTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYmx1ZS05MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICMwZDQ3YTEgaHVlOiA5MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1ibHVlLUExMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJiMWZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWJsdWUtQTEwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzgyYjFmZiBodWU6IEExMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWJsdWUtQTIwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDhhZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWJsdWUtQTIwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzQ0OGFmZiBodWU6IEEyMDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1ibHVlLUE0MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk3OWZmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1ibHVlLUE0MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICMyOTc5ZmYgaHVlOiBBNDAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtYmx1ZS1BNzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5NjJmZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYmx1ZS1BNzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMjk2MmZmIGh1ZTogQTcwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWxpZ2h0LWJsdWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWY0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1saWdodC1ibHVlLTUwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UxZjVmZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1saWdodC1ibHVlLTUwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZTFmNWZlIGh1ZTogNTAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWxpZ2h0LWJsdWUtMTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZTVmYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1saWdodC1ibHVlLTEwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2IzZTVmYyBodWU6IDEwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtbGlnaHQtYmx1ZS0yMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODFkNGZhO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWxpZ2h0LWJsdWUtMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjODFkNGZhIGh1ZTogMjAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1saWdodC1ibHVlLTMwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZmMzZjc7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtbGlnaHQtYmx1ZS0zMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM0ZmMzZjcgaHVlOiAzMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWxpZ2h0LWJsdWUtNDAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5YjZmNjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1saWdodC1ibHVlLTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzI5YjZmNiBodWU6IDQwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtbGlnaHQtYmx1ZS01MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDNhOWY0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1saWdodC1ibHVlLTUwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzAzYTlmNCBodWU6IDUwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWxpZ2h0LWJsdWUtNjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzOWJlNTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtbGlnaHQtYmx1ZS02MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICMwMzliZTUgaHVlOiA2MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1saWdodC1ibHVlLTcwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMjg4ZDE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWxpZ2h0LWJsdWUtNzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMDI4OGQxIGh1ZTogNzAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtbGlnaHQtYmx1ZS04MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDI3N2JkO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1saWdodC1ibHVlLTgwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzAyNzdiZCBodWU6IDgwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWxpZ2h0LWJsdWUtOTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAxNTc5YjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtbGlnaHQtYmx1ZS05MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICMwMTU3OWIgaHVlOiA5MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1saWdodC1ibHVlLUExMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODBkOGZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWxpZ2h0LWJsdWUtQTEwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzgwZDhmZiBodWU6IEExMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWxpZ2h0LWJsdWUtQTIwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGM0ZmY7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtbGlnaHQtYmx1ZS1BMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjNDBjNGZmIGh1ZTogQTIwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtbGlnaHQtYmx1ZS1BNDAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwYjBmZjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1saWdodC1ibHVlLUE0MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICMwMGIwZmYgaHVlOiBBNDAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1saWdodC1ibHVlLUE3MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5MWVhO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1saWdodC1ibHVlLUE3MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICMwMDkxZWEgaHVlOiBBNzAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtY3lhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWN5YW4tNTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmN2ZhO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWN5YW4tNTA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNlMGY3ZmEgaHVlOiA1MCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtY3lhbi0xMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJlYmYyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWN5YW4tMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjYjJlYmYyIGh1ZTogMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1jeWFuLTIwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MGRlZWE7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtY3lhbi0yMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM4MGRlZWEgaHVlOiAyMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWN5YW4tMzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkZDBlMTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1jeWFuLTMwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzRkZDBlMSBodWU6IDMwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtY3lhbi00MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZjNmRhO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWN5YW4tNDAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMjZjNmRhIGh1ZTogNDAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1jeWFuLTUwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJjZDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWN5YW4tNTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMDBiY2Q0IGh1ZTogNTAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtY3lhbi02MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBhY2MxO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1jeWFuLTYwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzAwYWNjMSBodWU6IDYwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWN5YW4tNzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTdhNztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtY3lhbi03MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICMwMDk3YTcgaHVlOiA3MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1jeWFuLTgwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDgzOGY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWN5YW4tODAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMDA4MzhmIGh1ZTogODAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtY3lhbi05MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MDY0O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1jeWFuLTkwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzAwNjA2NCBodWU6IDkwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWN5YW4tQTEwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NGZmZmY7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtY3lhbi1BMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjODRmZmZmIGh1ZTogQTEwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtY3lhbi1BMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE4ZmZmZjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1jeWFuLUEyMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICMxOGZmZmYgaHVlOiBBMjAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1jeWFuLUE0MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBlNWZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWN5YW4tQTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzAwZTVmZiBodWU6IEE0MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWN5YW4tQTcwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGI4ZDQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtY3lhbi1BNzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMDBiOGQ0IGh1ZTogQTcwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtdGVhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLXRlYWwtNTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBmMmYxO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXRlYWwtNTA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNlMGYyZjEgaHVlOiA1MCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtdGVhbC0xMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJkZmRiO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXRlYWwtMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjYjJkZmRiIGh1ZTogMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC10ZWFsLTIwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MGNiYzQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtdGVhbC0yMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM4MGNiYzQgaHVlOiAyMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLXRlYWwtMzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkYjZhYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC10ZWFsLTMwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzRkYjZhYyBodWU6IDMwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtdGVhbC00MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZhNjlhO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXRlYWwtNDAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMjZhNjlhIGh1ZTogNDAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC10ZWFsLTUwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLXRlYWwtNTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMDA5Njg4IGh1ZTogNTAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtdGVhbC02MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OTdiO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC10ZWFsLTYwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzAwODk3YiBodWU6IDYwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLXRlYWwtNzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzk2YjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtdGVhbC03MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICMwMDc5NmIgaHVlOiA3MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC10ZWFsLTgwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDY5NWM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLXRlYWwtODAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMDA2OTVjIGh1ZTogODAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtdGVhbC05MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0ZDQwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC10ZWFsLTkwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzAwNGQ0MCBodWU6IDkwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLXRlYWwtQTEwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhN2ZmZWI7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtdGVhbC1BMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjYTdmZmViIGh1ZTogQTEwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtdGVhbC1BMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0ZmZkYTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC10ZWFsLUEyMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM2NGZmZGEgaHVlOiBBMjAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC10ZWFsLUE0MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWRlOWI2O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXRlYWwtQTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzFkZTliNiBodWU6IEE0MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLXRlYWwtQTcwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGJmYTU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtdGVhbC1BNzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMDBiZmE1IGh1ZTogQTcwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtZ3JlZW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWdyZWVuLTUwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZjVlOTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1ncmVlbi01MDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2U4ZjVlOSBodWU6IDUwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1ncmVlbi0xMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlNmM5O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWdyZWVuLTEwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2M4ZTZjOSBodWU6IDEwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtZ3JlZW4tMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1ZDZhNztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1ncmVlbi0yMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNhNWQ2YTcgaHVlOiAyMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWdyZWVuLTMwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4MWM3ODQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtZ3JlZW4tMzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjODFjNzg0IGh1ZTogMzAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1ncmVlbi00MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiYjZhO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWdyZWVuLTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzY2YmI2YSBodWU6IDQwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtZ3JlZW4tNTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1ncmVlbi01MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM0Y2FmNTAgaHVlOiA1MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWdyZWVuLTYwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0M2EwNDc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWdyZWVuLTYwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzQzYTA0NyBodWU6IDYwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWdyZWVuLTcwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODhlM2M7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWdyZWVuLTcwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzM4OGUzYyBodWU6IDcwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWdyZWVuLTgwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZTdkMzI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWdyZWVuLTgwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzJlN2QzMiBodWU6IDgwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWdyZWVuLTkwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjVlMjA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWdyZWVuLTkwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzFiNWUyMCBodWU6IDkwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWdyZWVuLUExMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjlmNmNhO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWdyZWVuLUExMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNiOWY2Y2EgaHVlOiBBMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1ncmVlbi1BMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5ZjBhZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1ncmVlbi1BMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjNjlmMGFlIGh1ZTogQTIwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtZ3JlZW4tQTQwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMGU2NzY7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtZ3JlZW4tQTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzAwZTY3NiBodWU6IEE0MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWdyZWVuLUE3MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjODUzO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWdyZWVuLUE3MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICMwMGM4NTMgaHVlOiBBNzAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1saWdodC1ncmVlbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmMzNGE7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtbGlnaHQtZ3JlZW4tNTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmOGU5O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLTUwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZjFmOGU5IGh1ZTogNTAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLTEwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2VkYzg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtbGlnaHQtZ3JlZW4tMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZGNlZGM4IGh1ZTogMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1saWdodC1ncmVlbi0yMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVlMWE1O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLTIwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2M1ZTFhNSBodWU6IDIwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtbGlnaHQtZ3JlZW4tMzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlZDU4MTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1saWdodC1ncmVlbi0zMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNhZWQ1ODEgaHVlOiAzMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLTQwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5Y2NjNjU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtbGlnaHQtZ3JlZW4tNDAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjOWNjYzY1IGh1ZTogNDAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1saWdodC1ncmVlbi01MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJjMzRhO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLTUwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzhiYzM0YSBodWU6IDUwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtbGlnaHQtZ3JlZW4tNjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzdjYjM0MjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1saWdodC1ncmVlbi02MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM3Y2IzNDIgaHVlOiA2MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLTcwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2ODlmMzg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLTcwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzY4OWYzOCBodWU6IDcwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLTgwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NThiMmY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLTgwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzU1OGIyZiBodWU6IDgwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLTkwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzY5MWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLTkwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzMzNjkxZSBodWU6IDkwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLUExMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NmZjkwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLUExMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNjY2ZmOTAgaHVlOiBBMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1saWdodC1ncmVlbi1BMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IyZmY1OTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1saWdodC1ncmVlbi1BMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjYjJmZjU5IGh1ZTogQTIwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtbGlnaHQtZ3JlZW4tQTQwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NmZmMDM7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtbGlnaHQtZ3JlZW4tQTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzc2ZmYwMyBodWU6IEE0MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLUE3MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRkZDE3O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWxpZ2h0LWdyZWVuLUE3MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM2NGRkMTcgaHVlOiBBNzAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1saW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NkZGMzOTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1saW1lLTUwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmJlNztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1saW1lLTUwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZjlmYmU3IGh1ZTogNTAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWxpbWUtMTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjRjMztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1saW1lLTEwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2YwZjRjMyBodWU6IDEwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtbGltZS0yMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlZTljO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWxpbWUtMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZTZlZTljIGh1ZTogMjAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1saW1lLTMwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkY2U3NzU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtbGltZS0zMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNkY2U3NzUgaHVlOiAzMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWxpbWUtNDAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZTE1NztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1saW1lLTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2Q0ZTE1NyBodWU6IDQwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtbGltZS01MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2RkYzM5O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWxpbWUtNTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjY2RkYzM5IGh1ZTogNTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1saW1lLTYwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjMGNhMzM7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtbGltZS02MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNjMGNhMzMgaHVlOiA2MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWxpbWUtNzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmYjQyYjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1saW1lLTcwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2FmYjQyYiBodWU6IDcwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtbGltZS04MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWU5ZDI0O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWxpbWUtODAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjOWU5ZDI0IGh1ZTogODAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1saW1lLTkwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4Mjc3MTc7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWxpbWUtOTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjODI3NzE3IGh1ZTogOTAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtbGltZS1BMTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZmY4MTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1saW1lLUExMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmNGZmODEgaHVlOiBBMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1saW1lLUEyMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVmZjQxO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWxpbWUtQTIwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2VlZmY0MSBodWU6IEEyMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWxpbWUtQTQwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjNmZmMDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtbGltZS1BNDAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjYzZmZjAwIGh1ZTogQTQwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtbGltZS1BNzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlZWEwMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1saW1lLUE3MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNhZWVhMDAgaHVlOiBBNzAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC15ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXllbGxvdy01MCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZkZTc7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAteWVsbG93LTUwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmZmZGU3IGh1ZTogNTAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLXllbGxvdy0xMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOWM0O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXllbGxvdy0xMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmY5YzQgaHVlOiAxMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLXllbGxvdy0yMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNTlkO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXllbGxvdy0yMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmY1OWQgaHVlOiAyMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLXllbGxvdy0zMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMTc2O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXllbGxvdy0zMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmYxNzYgaHVlOiAzMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLXllbGxvdy00MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZTU4O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXllbGxvdy00MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmVlNTggaHVlOiA0MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLXllbGxvdy01MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYjNiO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXllbGxvdy01MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmViM2IgaHVlOiA1MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLXllbGxvdy02MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRkODM1O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXllbGxvdy02MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZGQ4MzUgaHVlOiA2MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLXllbGxvdy03MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJjMDJkO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXllbGxvdy03MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmYmMwMmQgaHVlOiA3MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLXllbGxvdy04MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlhODI1O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXllbGxvdy04MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmOWE4MjUgaHVlOiA4MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLXllbGxvdy05MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3ZjE3O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXllbGxvdy05MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmNTdmMTcgaHVlOiA5MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLXllbGxvdy1BMTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY4ZDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC15ZWxsb3ctQTEwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2ZmZmY4ZCBodWU6IEExMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLXllbGxvdy1BMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLXllbGxvdy1BMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiB5ZWxsb3cgaHVlOiBBMjAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC15ZWxsb3ctQTQwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVhMDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAteWVsbG93LUE0MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmVhMDAgaHVlOiBBNDAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC15ZWxsb3ctQTcwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQ2MDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAteWVsbG93LUE3MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmQ2MDAgaHVlOiBBNzAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1hbWJlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmMxMDc7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtYW1iZXItNTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOGUxO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWFtYmVyLTUwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmZmOGUxIGh1ZTogNTAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWFtYmVyLTEwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmVjYjM7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtYW1iZXItMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmZlY2IzIGh1ZTogMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1hbWJlci0yMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMDgyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWFtYmVyLTIwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2ZmZTA4MiBodWU6IDIwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtYW1iZXItMzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDU0ZjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1hbWJlci0zMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmQ1NGYgaHVlOiAzMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWFtYmVyLTQwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNhMjg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtYW1iZXItNDAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmZjYTI4IGh1ZTogNDAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1hbWJlci01MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjMTA3O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWFtYmVyLTUwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2ZmYzEwNyBodWU6IDUwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtYW1iZXItNjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjMwMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1hbWJlci02MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmIzMDAgaHVlOiA2MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWFtYmVyLTcwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmEwMDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtYW1iZXItNzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmZhMDAwIGh1ZTogNzAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1hbWJlci04MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4ZjAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWFtYmVyLTgwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2ZmOGYwMCBodWU6IDgwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtYW1iZXItOTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNmYwMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1hbWJlci05MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZjZmMDAgaHVlOiA5MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWFtYmVyLUExMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNTdmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWFtYmVyLUExMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmU1N2YgaHVlOiBBMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1hbWJlci1BMjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDc0MDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1hbWJlci1BMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmZkNzQwIGh1ZTogQTIwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtYW1iZXItQTQwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmM0MDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtYW1iZXItQTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2ZmYzQwMCBodWU6IEE0MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWFtYmVyLUE3MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYjAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWFtYmVyLUE3MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmFiMDAgaHVlOiBBNzAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1vcmFuZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLW9yYW5nZS01MCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYzZTA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtb3JhbmdlLTUwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmZmM2UwIGh1ZTogNTAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLW9yYW5nZS0xMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMGIyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLW9yYW5nZS0xMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmUwYjIgaHVlOiAxMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLW9yYW5nZS0yMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYzgwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLW9yYW5nZS0yMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmNjODAgaHVlOiAyMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLW9yYW5nZS0zMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiNzRkO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLW9yYW5nZS0zMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmI3NGQgaHVlOiAzMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLW9yYW5nZS00MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhNzI2O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLW9yYW5nZS00MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmE3MjYgaHVlOiA0MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLW9yYW5nZS01MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5ODAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLW9yYW5nZS01MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZjk4MDAgaHVlOiA1MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLW9yYW5nZS02MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmI4YzAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLW9yYW5nZS02MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmYjhjMDAgaHVlOiA2MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLW9yYW5nZS03MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU3YzAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLW9yYW5nZS03MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmNTdjMDAgaHVlOiA3MDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLW9yYW5nZS04MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWY2YzAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1vcmFuZ2UtODAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZWY2YzAwIGh1ZTogODAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtb3JhbmdlLTkwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNjUxMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLW9yYW5nZS05MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNlNjUxMDAgaHVlOiA5MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1vcmFuZ2UtQTEwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmQxODA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtb3JhbmdlLUExMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmQxODAgaHVlOiBBMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1vcmFuZ2UtQTIwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmFiNDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtb3JhbmdlLUEyMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZmFiNDAgaHVlOiBBMjAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1vcmFuZ2UtQTQwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjkxMDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtb3JhbmdlLUE0MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZjkxMDAgaHVlOiBBNDAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1vcmFuZ2UtQTcwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZkMDA7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLnRwLW9yYW5nZS1BNzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmY2ZDAwIGh1ZTogQTcwMCBjb250cmFzdDogYmxhY2tcIjtcbn1cblxuLnRwLWRlZXAtb3JhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNTcyMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtZGVlcC1vcmFuZ2UtNTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJlOWU3O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWRlZXAtb3JhbmdlLTUwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmJlOWU3IGh1ZTogNTAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWRlZXAtb3JhbmdlLTEwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjYmM7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtZGVlcC1vcmFuZ2UtMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmZjY2JjIGh1ZTogMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1kZWVwLW9yYW5nZS0yMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZhYjkxO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWRlZXAtb3JhbmdlLTIwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2ZmYWI5MSBodWU6IDIwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtZGVlcC1vcmFuZ2UtMzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOGE2NTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1kZWVwLW9yYW5nZS0zMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZjhhNjUgaHVlOiAzMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWRlZXAtb3JhbmdlLTQwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjcwNDM7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtZGVlcC1vcmFuZ2UtNDAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmY3MDQzIGh1ZTogNDAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1kZWVwLW9yYW5nZS01MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1NzIyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1kZWVwLW9yYW5nZS01MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmZjU3MjIgaHVlOiA1MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1kZWVwLW9yYW5nZS02MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1kZWVwLW9yYW5nZS02MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNmNDUxMWUgaHVlOiA2MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1kZWVwLW9yYW5nZS03MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTY0YTE5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1kZWVwLW9yYW5nZS03MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNlNjRhMTkgaHVlOiA3MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1kZWVwLW9yYW5nZS04MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDg0MzE1O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1kZWVwLW9yYW5nZS04MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNkODQzMTUgaHVlOiA4MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1kZWVwLW9yYW5nZS05MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmYzNjBjO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1kZWVwLW9yYW5nZS05MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNiZjM2MGMgaHVlOiA5MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1kZWVwLW9yYW5nZS1BMTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOWU4MDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1kZWVwLW9yYW5nZS1BMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmY5ZTgwIGh1ZTogQTEwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtZGVlcC1vcmFuZ2UtQTIwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjZlNDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtZGVlcC1vcmFuZ2UtQTIwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2ZmNmU0MCBodWU6IEEyMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWRlZXAtb3JhbmdlLUE0MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzZDAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1kZWVwLW9yYW5nZS1BNDAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmYzZDAwIGh1ZTogQTQwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWRlZXAtb3JhbmdlLUE3MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQyYzAwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1kZWVwLW9yYW5nZS1BNzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZGQyYzAwIGh1ZTogQTcwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWJyb3duIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYnJvd24tNTAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlYmU5O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWJyb3duLTUwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZWZlYmU5IGh1ZTogNTAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWJyb3duLTEwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2NjYzg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtYnJvd24tMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZDdjY2M4IGh1ZTogMTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1icm93bi0yMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNhYWE0O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWJyb3duLTIwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2JjYWFhNCBodWU6IDIwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtYnJvd24tMzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ExODg3ZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYnJvd24tMzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjYTE4ODdmIGh1ZTogMzAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtYnJvd24tNDAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkNmU2MztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYnJvd24tNDAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjOGQ2ZTYzIGh1ZTogNDAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtYnJvd24tNTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5NTU0ODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYnJvd24tNTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjNzk1NTQ4IGh1ZTogNTAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtYnJvd24tNjAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZkNGM0MTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYnJvd24tNjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjNmQ0YzQxIGh1ZTogNjAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtYnJvd24tNzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkNDAzNztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYnJvd24tNzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjNWQ0MDM3IGh1ZTogNzAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtYnJvd24tODAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlMzQyZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYnJvd24tODAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjNGUzNDJlIGh1ZTogODAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtYnJvd24tOTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlMjcyMztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYnJvd24tOTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjM2UyNzIzIGh1ZTogOTAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtYnJvd24tQTEwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2NjYzg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtYnJvd24tQTEwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2Q3Y2NjOCBodWU6IEExMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWJyb3duLUEyMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNhYWE0O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWJyb3duLUEyMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNiY2FhYTQgaHVlOiBBMjAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1icm93bi1BNDAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhkNmU2MztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYnJvd24tQTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzhkNmU2MyBodWU6IEE0MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1icm93bi1BNzAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkNDAzNztcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYnJvd24tQTcwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzVkNDAzNyBodWU6IEE3MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzllOWU5ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1ncmV5LTUwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1ncmV5LTUwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZmFmYWZhIGh1ZTogNTAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWdyZXktMTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1ncmV5LTEwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogd2hpdGVzbW9rZSBodWU6IDEwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtZ3JleS0yMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWdyZXktMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZWVlZWVlIGh1ZTogMjAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1ncmV5LTMwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtZ3JleS0zMDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNlMGUwZTAgaHVlOiAzMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWdyZXktNDAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1ncmV5LTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2JkYmRiZCBodWU6IDQwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtZ3JleS01MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWU5ZTllO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWdyZXktNTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjOWU5ZTllIGh1ZTogNTAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1ncmV5LTYwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWdyZXktNjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjNzU3NTc1IGh1ZTogNjAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtZ3JleS03MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1ncmV5LTcwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzYxNjE2MSBodWU6IDcwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWdyZXktODAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtZ3JleS04MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM0MjQyNDIgaHVlOiA4MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1ncmV5LTkwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWdyZXktOTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMjEyMTIxIGh1ZTogOTAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtZ3JleS1BMTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtZ3JleS1BMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiB3aGl0ZSBodWU6IEExMDAgY29udHJhc3Q6IHJnYmEoMCwgMCwgMCwgMC44NylcIjtcbn1cblxuLnRwLWdyZXktQTIwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtZ3JleS1BMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjZWVlZWVlIGh1ZTogQTIwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtZ3JleS1BNDAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1ncmV5LUE0MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNiZGJkYmQgaHVlOiBBNDAwIGNvbnRyYXN0OiByZ2JhKDAsIDAsIDAsIDAuODcpXCI7XG59XG5cbi50cC1ncmV5LUE3MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE2MTYxO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1ncmV5LUE3MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM2MTYxNjEgaHVlOiBBNzAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtYmx1ZS1ncmV5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYmx1ZS1ncmV5LTUwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWZmMTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG59XG5cbi50cC1ibHVlLWdyZXktNTA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICNlY2VmZjEgaHVlOiA1MCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtYmx1ZS1ncmV5LTEwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtYmx1ZS1ncmV5LTEwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2NmZDhkYyBodWU6IDEwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtYmx1ZS1ncmV5LTIwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGJlYzU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtYmx1ZS1ncmV5LTIwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogI2IwYmVjNSBodWU6IDIwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtYmx1ZS1ncmV5LTMwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5MGE0YWU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xufVxuXG4udHAtYmx1ZS1ncmV5LTMwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzkwYTRhZSBodWU6IDMwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtYmx1ZS1ncmV5LTQwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODkwOWM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWJsdWUtZ3JleS00MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM3ODkwOWMgaHVlOiA0MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1ibHVlLWdyZXktNTAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN2Q4YjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYmx1ZS1ncmV5LTUwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzYwN2Q4YiBodWU6IDUwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWJsdWUtZ3JleS02MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ2ZTdhO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1ibHVlLWdyZXktNjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjNTQ2ZTdhIGh1ZTogNjAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtYmx1ZS1ncmV5LTcwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTVhNjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWJsdWUtZ3JleS03MDA6OmFmdGVyIHtcbiAgY29udGVudDogXCIgY29sb3I6ICM0NTVhNjQgaHVlOiA3MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1ibHVlLWdyZXktODAwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM3NDc0ZjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udHAtYmx1ZS1ncmV5LTgwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzM3NDc0ZiBodWU6IDgwMCBjb250cmFzdDogd2hpdGVcIjtcbn1cblxuLnRwLWJsdWUtZ3JleS05MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzMjM4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1ibHVlLWdyZXktOTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjMjYzMjM4IGh1ZTogOTAwIGNvbnRyYXN0OiB3aGl0ZVwiO1xufVxuXG4udHAtYmx1ZS1ncmV5LUExMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZkOGRjO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWJsdWUtZ3JleS1BMTAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjY2ZkOGRjIGh1ZTogQTEwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtYmx1ZS1ncmV5LUEyMDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBiZWM1O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbn1cblxuLnRwLWJsdWUtZ3JleS1BMjAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjYjBiZWM1IGh1ZTogQTIwMCBjb250cmFzdDogcmdiYSgwLCAwLCAwLCAwLjg3KVwiO1xufVxuXG4udHAtYmx1ZS1ncmV5LUE0MDAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzg5MDljO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cC1ibHVlLWdyZXktQTQwMDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIiBjb2xvcjogIzc4OTA5YyBodWU6IEE0MDAgY29udHJhc3Q6IHdoaXRlXCI7XG59XG5cbi50cC1ibHVlLWdyZXktQTcwMCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTVhNjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRwLWJsdWUtZ3JleS1BNzAwOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIGNvbG9yOiAjNDU1YTY0IGh1ZTogQTcwMCBjb250cmFzdDogd2hpdGVcIjtcbn0iLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5085:
/*!**********************************************************!*\
  !*** ./src/app/workout-panel/workout-panel.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkoutPanelComponent": () => (/* binding */ WorkoutPanelComponent)
/* harmony export */ });
/* harmony import */ var _worktask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worktask */ 4266);
/* harmony import */ var _math_generator_mathGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math-generator/mathGenerator */ 2765);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 3278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../progress-bar/progress-bar.component */ 3369);














const _c0 = ["answerField"];
function WorkoutPanelComponent_mat_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](3, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.index + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.tasks.length, " ");
  }
}
function WorkoutPanelComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkoutPanelComponent_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.start());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field", 9)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](5, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkoutPanelComponent_div_5_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.updateNumberOfQuestions($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r1.config.nbQuestions);
  }
}
function WorkoutPanelComponent_div_6_ng_template_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.currentTask.operator);
  }
}
function WorkoutPanelComponent_div_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WorkoutPanelComponent_div_6_ng_template_2_span_2_Template, 2, 1, "span", 19);
  }
  if (rf & 2) {
    const num_r9 = ctx.$implicit;
    const last_r11 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](num_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", last_r11 == false);
  }
}
const _c7 = function (a1) {
  return {
    "equation": true,
    "stacked": a1
  };
};
function WorkoutPanelComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 12)(1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WorkoutPanelComponent_div_6_ng_template_2_Template, 3, 2, "ng-template", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkoutPanelComponent_div_6_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r13.userInput = $event);
    })("keypress", function WorkoutPanelComponent_div_6_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r15.typeKey($event));
    })("keyup", function WorkoutPanelComponent_div_6_Template_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r16.check($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c7, ctx_r2.stacked));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.currentTask.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r2.userInput);
  }
}
function WorkoutPanelComponent_div_7_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const task_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r19 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](task_r18.problem.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](task_r18.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", task_r18.getTimeInSec(), " sec.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](task_r18.errors);
  }
}
function WorkoutPanelComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table", 22)(4, "thead")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](8, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](10, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](12, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](14, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, WorkoutPanelComponent_div_7_tr_16_Template, 11, 5, "tr", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-card-actions")(18, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkoutPanelComponent_div_7_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r20.start());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](19, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field", 9)(21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](22, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkoutPanelComponent_div_7_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r22.updateNumberOfQuestions($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.tasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r3.config.nbQuestions);
  }
}
var WorkoutStatus;
(function (WorkoutStatus) {
  WorkoutStatus[WorkoutStatus["Begin"] = 0] = "Begin";
  WorkoutStatus[WorkoutStatus["Work"] = 1] = "Work";
  WorkoutStatus[WorkoutStatus["Finish"] = 2] = "Finish";
})(WorkoutStatus || (WorkoutStatus = {}));
class WorkoutPanelComponent {
  constructor(configService, breakpointObserver) {
    this.configService = configService;
    this.myEventSubscriptions = [];
    this.userInput = "";
    this.WorkoutStatusEnum = WorkoutStatus;
    breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.XSmall,
    /*      Breakpoints.Small,
          Breakpoints.Medium,
          Breakpoints.Large,*/
    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.XLarge]).subscribe(result => {
      if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.XSmall]) {
        document.documentElement.style.setProperty("--equationFontSize", "24px");
      }
      if (result.breakpoints[_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.Breakpoints.XLarge]) {
        document.documentElement.style.setProperty("--equationFontSize", "48px");
      }
    });
  }
  ngOnInit() {
    this.myEventSubscriptions.push(this.configService.subscribe(cfsi => {
      this.config = cfsi.config;
      this.stacked = this.config.orientation == "VERTICAL";
    }));
    this.userInput = "";
    this.status = WorkoutStatus.Begin;
  }
  initTasks() {
    this.tasks = new Array(this.config.nbQuestions);
    for (let i = 0; i < this.config.nbQuestions; i++) {
      let problem = _math_generator_mathGenerator__WEBPACK_IMPORTED_MODULE_1__.MathGenerator.generateProblem(this.config);
      let task = new _worktask__WEBPACK_IMPORTED_MODULE_0__.WorkTask(problem);
      this.tasks[i] = task;
    }
  }
  ngOnDestroy() {
    this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());
  }
  typeKey(event) {
    console.log("typeKey");
    console.log(event);
  }
  check(event) {
    console.log(`check ui: '${this.userInput}'`);
    console.log(event);
    let uInput = parseInt(this.userInput);
    if (uInput == this.currentTask.answer) {
      this.currentTask.setEndTime();
      this.index++;
      if (this.index >= this.tasks.length) {
        this.currentTask = null;
        this.status = WorkoutStatus.Finish;
      } else {
        this.setCurrentTask();
      }
    } else {
      //calculate errors
      let answerLength = this.currentTask.answer.toString().length;
      let userInputLength = uInput.toString().length;
      if (answerLength == userInputLength) {
        this.currentTask.errors++;
      }
    }
  }
  start() {
    this.initTasks();
    this.index = 0;
    this.status = WorkoutStatus.Work;
    this.setCurrentTask();
    //TODO set focus on input
    this.setFocus();
  }
  setCurrentTask() {
    this.currentTask = this.tasks[this.index];
    this.userInput = "";
    this.currentTask.setStartTime();
  }
  setFocus() {
    setTimeout(() => this.answerField.nativeElement.focus());
  }
  get totalCount() {
    return this.tasks?.length;
  }
  updateNumberOfQuestions(nbQuestions) {
    if (nbQuestions > 0) {
      let diff = this.config.nbQuestions != nbQuestions;
      this.config.nbQuestions = nbQuestions;
      if (diff) {
        this.configService.next(this.config, false);
      }
    }
  }
  static #_ = this.ɵfac = function WorkoutPanelComponent_Factory(t) {
    return new (t || WorkoutPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.BreakpointObserver));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: WorkoutPanelComponent,
    selectors: [["app-workout-panel"]],
    viewQuery: function WorkoutPanelComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.answerField = _t.first);
      }
    },
    decls: 8,
    vars: 6,
    consts: function () {
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_progressionMessage$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__2 = goog.getMsg(" of ");
        i18n_1 = MSG_EXTERNAL_progressionMessage$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__2;
      } else {
        i18n_1 = " de ";
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_startButton$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__4 = goog.getMsg("Start");
        i18n_3 = MSG_EXTERNAL_startButton$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__4;
      } else {
        i18n_3 = "D\xE9marrer";
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Number_of_questions$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__6 = goog.getMsg("Number of questions");
        i18n_5 = MSG_EXTERNAL_Number_of_questions$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__6;
      } else {
        i18n_5 = "Nombre de questions";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_finished$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__9 = goog.getMsg("Finished");
        i18n_8 = MSG_EXTERNAL_finished$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__9;
      } else {
        i18n_8 = "Termin\xE9";
      }
      let i18n_10;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_resultEquation$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__11 = goog.getMsg("Equation");
        i18n_10 = MSG_EXTERNAL_resultEquation$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__11;
      } else {
        i18n_10 = "\xC9quation";
      }
      let i18n_12;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_resultAnswer$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__13 = goog.getMsg("Answer");
        i18n_12 = MSG_EXTERNAL_resultAnswer$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__13;
      } else {
        i18n_12 = "R\xE9ponse";
      }
      let i18n_14;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_resultTime$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__15 = goog.getMsg("Time");
        i18n_14 = MSG_EXTERNAL_resultTime$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__15;
      } else {
        i18n_14 = "Temps";
      }
      let i18n_16;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_resultMistakes$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__17 = goog.getMsg("Mistakes");
        i18n_16 = MSG_EXTERNAL_resultMistakes$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__17;
      } else {
        i18n_16 = "Erreurs";
      }
      let i18n_18;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_startAgainButton$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__19 = goog.getMsg("Start again");
        i18n_18 = MSG_EXTERNAL_startAgainButton$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__19;
      } else {
        i18n_18 = "Recommencer";
      }
      let i18n_20;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Number_of_questions$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__21 = goog.getMsg("Number of questions");
        i18n_20 = MSG_EXTERNAL_Number_of_questions$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS__21;
      } else {
        i18n_20 = "Nombre de questions";
      }
      return [[3, "totalCount", "progressCount"], [1, "main-div"], [1, "center"], [1, "progressBar"], [4, "ngIf"], ["class", "mathQuestion", 4, "ngIf"], i18n_1, ["mat-raised-button", "", "color", "accent", 3, "click"], i18n_3, ["appearance", "outline"], i18n_5, ["matInput", "", "type", "number", 3, "ngModel", "ngModelChange"], [1, "mathQuestion"], [3, "ngClass"], ["ngFor", "", 3, "ngForOf"], [1, "equals"], ["autofocus", "autofocus", "autocomplete", "off", "placeholder", "?", "type", "number", "autofocus", "", 1, "answerField", 3, "ngModel", "ngModelChange", "keypress", "keyup"], ["answerField", ""], [1, "number"], ["class", "operator", 4, "ngIf"], [1, "operator"], i18n_8, [1, "results"], i18n_10, i18n_12, i18n_14, i18n_16, [4, "ngFor", "ngForOf"], i18n_18, i18n_20];
    },
    template: function WorkoutPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "mat-card", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, WorkoutPanelComponent_mat_card_title_4_Template, 5, 2, "mat-card-title", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, WorkoutPanelComponent_div_5_Template, 7, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, WorkoutPanelComponent_div_6_Template, 7, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, WorkoutPanelComponent_div_7_Template, 24, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("totalCount", ctx.totalCount)("progressCount", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tasks && ctx.index < ctx.tasks.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status == ctx.WorkoutStatusEnum.Begin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status == ctx.WorkoutStatusEnum.Work);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status == ctx.WorkoutStatusEnum.Finish);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent],
    styles: [".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start {  }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end {  }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n  :root {\n  --equationFontSize: 48px;\n}\n\n.mathQuestion[_ngcontent-%COMP%] {\n  border-width: 2px;\n  border-style: solid;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n  font-size: var(--equationFontSize);\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.mathQuestion[_ngcontent-%COMP%] {\n  border-color: #388e3c;\n}\n\n.dark-theme[_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%] {\n  border-color: #ffd740;\n}\n\n.light-theme[_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%] {\n  border-color: #bcaaa4;\n}\n\n.deeppurple-amber[_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%] {\n  border-color: #ffd740;\n}\n\n.indigo-pink[_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%] {\n  border-color: #ff4081;\n}\n\n.pink-bluegrey[_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%] {\n  border-color: #b0bec5;\n}\n\n.purple-green[_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%] {\n  border-color: #69f0ae;\n}\n\n.candy[_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%] {\n  border-color: #795548;\n}\n\n.main-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: top;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin: 10px auto;\n}\n\ninput.answerField[_ngcontent-%COMP%] {\n  font-size: var(--equationFontSize);\n  text-align: right;\n  margin-top: 5px;\n  width: 4em;\n}\n\n.number[_ngcontent-%COMP%] {\n  line-height: calc(var(--equationFontSize) * 1.25);\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .mathAnswer[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 5px;\n}\n\n.equation.stacked[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 1em;\n  text-align: right;\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .equals[_ngcontent-%COMP%] {\n  display: block;\n  height: 0;\n  padding-bottom: 3px;\n  border-bottom: solid 2px;\n  overflow: hidden;\n}\n\n.equation[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0.5em;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.progressBar[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.results[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]    + th[_ngcontent-%COMP%], .results[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%] {\n  padding-left: 1em;\n}\n\nbutton[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n/*# sourceURL=webpack://./node_modules/@angular/material/core/ripple/_ripple.scss */\n/*# sourceURL=webpack://./src/app/workout-panel/workout-panel.component.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/a11y/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/overlay/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/cdk/text-field/_index.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/focus-indicators/_private.scss */\n/*# sourceURL=webpack://./node_modules/@angular/material/core/style/_layout-common.scss */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3dvcmtvdXQtcGFuZWwvd29ya291dC1wYW5lbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvdGV4dC1maWVsZC9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL2ZvY3VzLWluZGljYXRvcnMvX3ByaXZhdGUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19sYXlvdXQtY29tbW9uLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7RUFDRSxnQkFBQTtFQUlBLGtCQUFBO0FDUEo7QURjSTtFQUNFLHdCQUFBO0FDWk47O0FEZ0JFO0VBQ0UsaUJBQUE7QUNiSjs7QURnQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSw2REFBQTtFQUlBLDJCQUFBO0FDakJKO0FDZ0NJO0VGWEUsYUFBQTtBQ2xCTjs7QUNsQkU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLG1CQUFBO0VBR0EsVUFBQTtFQUdBLHdCQUFBO0VBQ0EscUJBQUE7RUFNQSxPQUFBO0FEU0o7QUNQSTtFQUNFLFVBQUE7RUFDQSxRQUFBO0FEU047O0FFekJFO0VBRUUsb0JBQUE7RUFHQSxNQUFBO0VBQ0EsT0FB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O0VBQ0UsY0FBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBRUEsZ0JBQUE7QUEwTUY7O0FBdk1BO0VBRUUsa0JBQUE7QUF5TUY7O0FBdE1BOztFQUVFLHdCQUFBO0VBQ0EsU0FBQTtBQXlNRjs7QUF0TUE7RUFDRSxrQkFBQTtBQXlNRjs7QUF0TUE7O0VBRUUsaUJBQUE7QUF5TUY7O0FBdE1BO0VBQ0UsZ0JBQUE7QUF5TUYiLCJzb3VyY2VzQ29udGVudCI6W251bGwsIi5tYXQtcmlwcGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hdC1yaXBwbGU6bm90KDplbXB0eSkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG59XG5cbi5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAwLCAwKTtcbn1cbi5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBsZWZ0OiAwO1xufVxuW2Rpcj1ydGxdIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IDA7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4uY2RrLW92ZXJsYXktY29udGFpbmVyOmVtcHR5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xufVxuXG4uY2RrLW92ZXJsYXktcGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICBvcGFjaXR5OiAwO1xufVxuLmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAxO1xufVxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAuY2RrLW92ZXJsYXktYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDAuNjtcbn1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIpO1xufVxuXG4uY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDFtcyBsaW5lYXIsIG9wYWNpdHkgMW1zIGxpbmVhcjtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAxO1xufVxuLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uY2RrLW92ZXJsYXktYmFja2Ryb3Atbm9vcC1hbmltYXRpb24ge1xuICB0cmFuc2l0aW9uOiBub25lO1xufVxuXG4uY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAxcHg7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbn1cblxuLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZyB7XG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmctZmlyZWZveCB7XG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMCAhaW1wb3J0YW50O1xufVxuXG5Aa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IHsgLyohKi8gfVxuQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgeyAvKiEqLyB9XG4uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtcztcbn1cblxuLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcbiAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgMHMgMW1zO1xufVxuXG4ubWF0LWZvY3VzLWluZGljYXRvciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYXQtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGRpc3BsYXk6IHZhcigtLW1hdC1mb2N1cy1pbmRpY2F0b3ItZGlzcGxheSwgbm9uZSk7XG4gIGJvcmRlcjogdmFyKC0tbWF0LWZvY3VzLWluZGljYXRvci1ib3JkZXItd2lkdGgsIDNweCkgdmFyKC0tbWF0LWZvY3VzLWluZGljYXRvci1ib3JkZXItc3R5bGUsIHNvbGlkKSB2YXIoLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1jb2xvciwgdHJhbnNwYXJlbnQpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1tYXQtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXMsIDRweCk7XG59XG4ubWF0LWZvY3VzLWluZGljYXRvcjpmb2N1czo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSB7XG4gIC0tbWF0LWZvY3VzLWluZGljYXRvci1kaXNwbGF5OiBibG9jaztcbn1cblxuLm1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLm1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGRpc3BsYXk6IHZhcigtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXksIG5vbmUpO1xuICBib3JkZXI6IHZhcigtLW1hdC1tZGMtZm9jdXMtaW5kaWNhdG9yLWJvcmRlci13aWR0aCwgM3B4KSB2YXIoLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1ib3JkZXItc3R5bGUsIHNvbGlkKSB2YXIoLS1tYXQtbWRjLWZvY3VzLWluZGljYXRvci1ib3JkZXItY29sb3IsIHRyYW5zcGFyZW50KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1cywgNHB4KTtcbn1cbi5tYXQtbWRjLWZvY3VzLWluZGljYXRvcjpmb2N1czo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSB7XG4gIC0tbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3ItZGlzcGxheTogYmxvY2s7XG59XG5cbjo6bmctZGVlcCA6cm9vdCB7XG4gIC0tZXF1YXRpb25Gb250U2l6ZTogNDhweDtcbn1cblxuLm1hdGhRdWVzdGlvbiB7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBtYXJnaW46IDAuNWVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZXF1YXRpb25Gb250U2l6ZSk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLm1hdGhRdWVzdGlvbiB7XG4gIGJvcmRlci1jb2xvcjogIzM4OGUzYztcbn1cblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLm1hdGhRdWVzdGlvbiB7XG4gIGJvcmRlci1jb2xvcjogI2ZmZDc0MDtcbn1cblxuOmhvc3QtY29udGV4dCgubGlnaHQtdGhlbWUpIC5tYXRoUXVlc3Rpb24ge1xuICBib3JkZXItY29sb3I6ICNiY2FhYTQ7XG59XG5cbjpob3N0LWNvbnRleHQoLmRlZXBwdXJwbGUtYW1iZXIpIC5tYXRoUXVlc3Rpb24ge1xuICBib3JkZXItY29sb3I6ICNmZmQ3NDA7XG59XG5cbjpob3N0LWNvbnRleHQoLmluZGlnby1waW5rKSAubWF0aFF1ZXN0aW9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjZmY0MDgxO1xufVxuXG46aG9zdC1jb250ZXh0KC5waW5rLWJsdWVncmV5KSAubWF0aFF1ZXN0aW9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjYjBiZWM1O1xufVxuXG46aG9zdC1jb250ZXh0KC5wdXJwbGUtZ3JlZW4pIC5tYXRoUXVlc3Rpb24ge1xuICBib3JkZXItY29sb3I6ICM2OWYwYWU7XG59XG5cbjpob3N0LWNvbnRleHQoLmNhbmR5KSAubWF0aFF1ZXN0aW9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjNzk1NTQ4O1xufVxuXG4ubWFpbi1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogdG9wO1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbmlucHV0LmFuc3dlckZpZWxkIHtcbiAgZm9udC1zaXplOiB2YXIoLS1lcXVhdGlvbkZvbnRTaXplKTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgd2lkdGg6IDRlbTtcbn1cblxuLm51bWJlciB7XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLWVxdWF0aW9uRm9udFNpemUpICogMS4yNSk7XG59XG5cbi5lcXVhdGlvbi5zdGFja2VkIC5tYXRoQW5zd2VyIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmVxdWF0aW9uLnN0YWNrZWQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5lcXVhdGlvbi5zdGFja2VkIC5udW1iZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5lcXVhdGlvbi5zdGFja2VkIC5vcGVyYXRvciB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZXF1YXRpb24uc3RhY2tlZCAuZXF1YWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZXF1YXRpb24gOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2dyZXNzQmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG4ucmVzdWx0cyB0aCArIHRoLFxuLnJlc3VsdHMgdGQgKyB0ZCB7XG4gIHBhZGRpbmctbGVmdDogMWVtO1xufVxuXG5idXR0b24gKyAqIHtcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcbn0iLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4266:
/*!*******************************************!*\
  !*** ./src/app/workout-panel/worktask.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkTask": () => (/* binding */ WorkTask)
/* harmony export */ });
class WorkTask {
  constructor(problem) {
    this.time = 0;
    //userAnswer: number[];
    this.startTime = 0;
    this.endTime = 0;
    this.errors = 0;
    this.problem = problem;
  }
  get answer() {
    return this.problem.answer;
  }
  get values() {
    return this.problem.values;
  }
  get operator() {
    return this.problem.mathProplemActions.operator;
  }
  setStartTime() {
    this.startTime = Date.now();
  }
  setEndTime() {
    this.endTime = Date.now();
  }
  getTime() {
    return this.endTime - this.startTime;
  }
  getTimeInSec() {
    return (this.getTime() / 1000).toFixed(1);
  }
}

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map