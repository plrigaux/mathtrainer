globalThis.$localize=Object.assign(globalThis.$localize || {},{locale:"en-US"});
"use strict";(function(global,_global$ng,_global$ng2,_global$ng2$common,_global$ng$common,_global$ng$common$loc){(_global$ng=global.ng)!==null&&_global$ng!==void 0?_global$ng:global.ng={};(_global$ng2$common=(_global$ng2=global.ng).common)!==null&&_global$ng2$common!==void 0?_global$ng2$common:_global$ng2.common={};(_global$ng$common$loc=(_global$ng$common=global.ng.common).locales)!==null&&_global$ng$common$loc!==void 0?_global$ng$common$loc:_global$ng$common.locales={};const u=undefined;function plural(val){const n=val,i=Math.floor(Math.abs(val)),v=val.toString().replace(/^[^.]*\.?/,"").length;if(i===1&&v===0)return 1;return 5}global.ng.common.locales["en"]=["en",[["a","p"],["AM","PM"],u],[["AM","PM"],u,u],[["S","M","T","W","T","F","S"],["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],["Su","Mo","Tu","We","Th","Fr","Sa"]],u,[["J","F","M","A","M","J","J","A","S","O","N","D"],["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],["January","February","March","April","May","June","July","August","September","October","November","December"]],u,[["B","A"],["BC","AD"],["Before Christ","Anno Domini"]],0,[6,0],["M/d/yy","MMM d, y","MMMM d, y","EEEE, MMMM d, y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1}, {0}",u,"{1} 'at' {0}",u],[".",",",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","\xA4#,##0.00","#E0"],"USD","$","US Dollar",{},"ltr",plural,[[["mi","n","in the morning","in the afternoon","in the evening","at night"],["midnight","noon","in the morning","in the afternoon","in the evening","at night"],u],[["midnight","noon","morning","afternoon","evening","night"],u,u],["00:00","12:00",["06:00","12:00"],["12:00","18:00"],["18:00","21:00"],["21:00","06:00"]]]]})(globalThis);;
"use strict";
(self["webpackChunkmathtrainer"] = self["webpackChunkmathtrainer"] || []).push([["main"],{

/***/ 506:
/*!********************************************************!*\
  !*** ./src/app/answer-value/answer-value.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AnswerValueComponent: () => (/* binding */ AnswerValueComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/math-question.service */ 3263);
/* harmony import */ var _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../column-answer/column-answer.component */ 3192);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 5541);










const _c0 = ["answer_input"];
class AnswerValueComponent {
  constructor() {
    this.value = '';
    this.id = -1;
    this.currentFocus = _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_1__.FocusType.BLUR;
    this.isSwitchColunm = false;
    this.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.answerStatus = _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.EMPTY;
  }
  clearInput() {
    this.log(`clearInput`);
    //this.value = '';
    //this.answerStatus = QuestionStatus.EMPTY;
    this.modelChangeNormal("");
  }
  log(msg) {
    console.log("ASW", this.id, " - ", msg);
  }
  isEmpty() {
    return this.value == null || this.value.length === 0;
  }
  modelChangeNormal(change) {
    this.log(`value change from: ${this.value} to: ${change}`);
    this.value = change;
    //this.valueChange.emit(this.value);
    let answerStatus = this.answerStatus;
    let newStatus = this.valueChange(this.value, this.id);
    this.log("newStatus: " + newStatus);
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
    this.answerStatus = newStatus;
  }
  set_class() {
    let clazz = '';
    switch (this.answerStatus) {
      case _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.WRONG:
        clazz = 'wrong';
        break;
      case _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.RIGHT:
        clazz = 'right';
        break;
      case _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.FOCUS:
        clazz = 'focus';
        break;
    }
    return clazz;
  }
  onFocusSimple(e) {
    this.setInFocus(_column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_1__.FocusType.FOCUS);
  }
  onBlurSimple(e) {
    this.setInFocus(_column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_1__.FocusType.BLUR);
  }
  setInFocus(newFocus) {
    this.log(`newFocus ${newFocus} this.inFocus ${this.currentFocus}  this.isSwitchColunm ${this.isSwitchColunm}`);
    if (this.currentFocus !== newFocus) {
      if (this.isSwitchColunm == false) {
        this.focusChange.emit(newFocus);
      } else {
        this.isSwitchColunm = false;
      }
      if (newFocus == _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_1__.FocusType.FOCUS) {
        this.answerStatus = _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.FOCUS;
      } else if (newFocus == _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_1__.FocusType.BLUR) {
        if (this.isEmpty()) {
          this.answerStatus = _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.EMPTY;
        }
      }
      this.set_class();
    }
    this.currentFocus = newFocus;
  }
  focus() {
    this.inputs.first.nativeElement.focus();
  }
  static #_ = this.ɵfac = function AnswerValueComponent_Factory(t) {
    return new (t || AnswerValueComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AnswerValueComponent,
    selectors: [["app-answer-value"]],
    viewQuery: function AnswerValueComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.inputs = _t);
      }
    },
    inputs: {
      value: "value",
      id: "id",
      valueChange: "valueChange",
      answerStatus: "answerStatus"
    },
    outputs: {
      focusChange: "focusChange"
    },
    decls: 5,
    vars: 3,
    consts: [["answer_input", ""], ["appearance", "outline", 1, "answer_input", 3, "ngClass"], ["mat-icon-button", "", "matPrefix", "", "color", "accent", "aria-label", "Clear", "color", "accent", "aria-label", "Clear", 3, "click", "disabled"], ["svgIcon", "delete-cross"], ["matInput", "", "type", "number", "placeholder", "?", 1, "num-align", 3, "focus", "blur", "ngModelChange", "ngModel"]],
    template: function AnswerValueComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-form-field", 1)(1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AnswerValueComponent_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.clearInput());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 4, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function AnswerValueComponent_Template_input_focus_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onFocusSimple($event));
        })("blur", function AnswerValueComponent_Template_input_blur_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onBlurSimple($event));
        })("ngModelChange", function AnswerValueComponent_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.modelChangeNormal($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx.set_class());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isEmpty());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.value);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatPrefix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput],
    styles: [".answer_input[_ngcontent-%COMP%] {\n  width: 120px;\n}\n\n.num-align[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 24px;\n}\n\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  appearance: textfield;\n}\n\n  .wrong .mat-mdc-text-field-wrapper {\n  background-color: red;\n}\n\n  .right .mat-mdc-text-field-wrapper {\n  background-color: limegreen;\n}\n\n  .focus .mat-mdc-text-field-wrapper {\n  background-color: lightyellow;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYW5zd2VyLXZhbHVlL2Fuc3dlci12YWx1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLGlCQUFBO0VBQ0EsZUFSWTtBQU9oQjs7QUFLQSxnQ0FBQTtBQUNBOztFQUVJLHdCQUFBO0VBQ0EsU0FBQTtBQUZKOztBQUtBLFlBQUE7QUFDQTtFQUNJLHFCQUFBO0FBRko7O0FBTUE7RUFDSSxxQkFBQTtBQUhKOztBQU9BO0VBQ0ksMkJBQUE7QUFKSjs7QUFPQTtFQUNJLDZCQUFBO0FBSkoiLCJzb3VyY2VzQ29udGVudCI6WyIkZm9udC1zaXplLXZhcjogMjRweDtcblxuLmFuc3dlcl9pbnB1dCB7XG4gICAgd2lkdGg6IDEyMHB4XG59XG5cbi5udW0tYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS12YXI7XG4gXG59XG5cbi8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLyogRmlyZWZveCAqL1xuaW5wdXRbdHlwZT1udW1iZXJdIHtcbiAgICBhcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cblxuOjpuZy1kZWVwIC53cm9uZyAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuXG46Om5nLWRlZXAgLnJpZ2h0IC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xufVxuXG46Om5nLWRlZXAgLmZvY3VzIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _workout_panel_workout_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./workout-panel/workout-panel.component */ 2224);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 9174);
/* harmony import */ var _problem_panel_problem_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./problem-panel/problem-panel.component */ 6096);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ 5168);
/* harmony import */ var _test_features_test_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-features/test-features.component */ 9700);
/* harmony import */ var _test_features_display_test_display_test_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-features/display-test/display-test.component */ 7883);
/* harmony import */ var _test_features_inputtest_input_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test-features/inputtest/input-test.component */ 2354);
/* harmony import */ var _multiplication_table_multiplication_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multiplication-table/multiplication-table.component */ 1580);
/* harmony import */ var _test_features_test_palette_test_palette_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test-features/test-palette/test-palette.component */ 1133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);












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

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/config */ 1449);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/config.service */ 3696);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);














function AppComponent_a_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const loc_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("href", "../", loc_r2.code, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", loc_r2.label, " ");
  }
}
function AppComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "mat-radio-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const theme_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", theme_r3.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](theme_r3.label);
  }
}
function AppComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "mat-radio-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const orientation_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", orientation_r4.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](orientation_r4.label);
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
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_title$$SRC_APP_APP_COMPONENT_TS_0 = goog.getMsg("Arithmetic practice");
        i18n_0 = MSG_EXTERNAL_title$$SRC_APP_APP_COMPONENT_TS_0;
      } else {
        i18n_0 = "Arithmetic practice";
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc enter page
         */
        const MSG_EXTERNAL_home$$SRC_APP_APP_COMPONENT_TS_1 = goog.getMsg("Home");
        i18n_1 = MSG_EXTERNAL_home$$SRC_APP_APP_COMPONENT_TS_1;
      } else {
        i18n_1 = "Home";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc menu
         */
        const MSG_EXTERNAL_additionTable$$SRC_APP_APP_COMPONENT_TS_2 = goog.getMsg("Addition Table");
        i18n_2 = MSG_EXTERNAL_additionTable$$SRC_APP_APP_COMPONENT_TS_2;
      } else {
        i18n_2 = "Addition Table";
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc menu
         */
        const MSG_EXTERNAL_multiplicationTable$$SRC_APP_APP_COMPONENT_TS_3 = goog.getMsg("Multiplication Table");
        i18n_3 = MSG_EXTERNAL_multiplicationTable$$SRC_APP_APP_COMPONENT_TS_3;
      } else {
        i18n_3 = "Multiplication Table";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc colour themes
         */
        const MSG_EXTERNAL_themes$$SRC_APP_APP_COMPONENT_TS_4 = goog.getMsg("Themes");
        i18n_4 = MSG_EXTERNAL_themes$$SRC_APP_APP_COMPONENT_TS_4;
      } else {
        i18n_4 = "Themes";
      }
      return [["routerOutlet", "outlet"], ["menuLang", "matMenu"], ["menu", "matMenu"], ["menuTheme", "matMenu"], ["menuEquationOrientation", "matMenu"], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, ["color", "primary"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "example-fill-remaining-space"], ["mat-button", "", 3, "matMenuTriggerFor"], ["id", "contentPanel"], ["mat-menu-item", "", 3, "href", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "matMenuTriggerFor"], ["labelPosition", "before", 1, "mat-menu-item", 3, "ngModelChange", "change", "ngModel"], ["aria-label", "Select an option", 1, "menu-radio-group", 3, "ngModelChange", "change", "ngModel"], ["mat-menu-item", "", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "href"], ["mat-menu-item", ""], [3, "value"]];
    },
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 10)(1, "button", 11)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](5, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 13)(8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "language");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "router-outlet", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-menu", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AppComponent_a_16_Template, 2, 3, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-menu", null, 2)(19, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.goHome());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](23, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_25_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.goAdditionTable());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](27, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.goMultiplicationTable());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](30, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "button", 17)(33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "color_lens");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵi18n"](36, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "button", 17)(38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Equation Orientation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "mat-checkbox", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_mat_checkbox_ngModelChange_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.config.realTimeValidation, $event) || (ctx.config.realTimeValidation = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AppComponent_Template_mat_checkbox_change_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.realTimeValidationChange($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " Realtime Validation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-menu", null, 3)(44, "mat-radio-group", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_mat_radio_group_ngModelChange_44_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.config.theme, $event) || (ctx.config.theme = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AppComponent_Template_mat_radio_group_change_44_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.menuThemeRadioChange($event));
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](45, AppComponent_div_45_Template, 3, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "mat-menu", null, 4)(48, "mat-radio-group", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function AppComponent_Template_mat_radio_group_ngModelChange_48_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.config.orientation, $event) || (ctx.config.orientation = $event);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function AppComponent_Template_mat_radio_group_change_48_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
          return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.menuEquationOrientationChange());
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, AppComponent_div_49_Template, 3, 2, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const menuLang_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
        const menu_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
        const menuTheme_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](43);
        const menuEquationOrientation_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", menu_r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", menuLang_r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.localeLabel, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.localesList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", menuTheme_r7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", menuEquationOrientation_r8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.config.realTimeValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.config.theme);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.themes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.config.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.equationOrientations);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__.MatCheckbox, _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__.MatDivider, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuTrigger, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__.MatRadioButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__.MatToolbar],
    styles: [".example-fill-remaining-space[_ngcontent-%COMP%] {\n  \n\n\n  flex: 1 1 auto;\n}\n\n#contentPanel[_ngcontent-%COMP%] {\n  padding: 2em;\n}\n\n.menu-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 15px 0;\n}\n\n\n\n\n\n\n\n\n\nsection[_ngcontent-%COMP%] {\n  display: table;\n  margin: 8px;\n}\n\n.example-label[_ngcontent-%COMP%] {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  width: 120px;\n}\n\n.example-button-row[_ngcontent-%COMP%] {\n  display: table-cell;\n}\n\n.example-button-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: table-cell;\n  margin-right: 8px;\n}\n\n.example-flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 480px;\n}\n\n.example-button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7bURBQUE7RUFFQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7Ozs7OztDQUFBO0FBT0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQUVKOztBQUNFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRUo7O0FBQ0U7RUFDRSxtQkFBQTtBQUVKOztBQUNFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUVKOztBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUVKIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guIFxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuI2NvbnRlbnRQYW5lbHtcbiAgcGFkZGluZzogMmVtO1xufVxuXG4ubWVudS1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMTVweCAwO1xufVxuLypcbi5tZW51LXJhZGlvLWJ1dHRvbiB7XG4gIC8vbWFyZ2luOiA1cHg7XG4gIC8vcGFkZGluZzogMCAxNnB4O1xuICAvL2hlaWdodDogNDhweDtcbn1cbiovXG5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW46IDhweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtbGFiZWwge1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1idXR0b24tcm93IHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB9XG4gIFxuICAuZXhhbXBsZS1idXR0b24tcm93IGJ1dHRvbiB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZmxleC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHdpZHRoOiA0ODBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _math_question_math_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math-question/math-question.component */ 332);
/* harmony import */ var _problem_panel_problem_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./problem-panel/problem-panel.component */ 6096);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _config_dialog_opener_config_dialog_opener_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-dialog-opener/config-dialog-opener.component */ 3828);
/* harmony import */ var _config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config-dialog/config-dialog.component */ 3700);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/config.service */ 3696);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/a11y */ 2102);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/clipboard */ 2352);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 854);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/cdk/scrolling */ 9975);
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/stepper */ 3985);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/table */ 198);
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/tree */ 2714);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/autocomplete */ 9771);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/badge */ 6256);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 5244);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/button-toggle */ 9864);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/stepper */ 6622);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/divider */ 4102);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/expansion */ 9322);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/grid-list */ 6488);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/progress-spinner */ 1134);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/sidenav */ 7049);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/slider */ 4992);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/material/toolbar */ 9552);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/tree */ 8379);
/* harmony import */ var _config_dialog_ranges_config_dialog_ranges_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config-dialog-ranges/config-dialog-ranges.component */ 9770);
/* harmony import */ var _form_panel_form_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./form-panel/form-panel.component */ 8728);
/* harmony import */ var _workout_panel_workout_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workout-panel/workout-panel.component */ 2224);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 9174);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-page/main-page.component */ 5168);
/* harmony import */ var _array_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./array-filter.pipe */ 2146);
/* harmony import */ var _test_features_test_features_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./test-features/test-features.component */ 9700);
/* harmony import */ var _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./column-answer/column-answer.component */ 3192);
/* harmony import */ var _test_features_display_test_display_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./test-features/display-test/display-test.component */ 7883);
/* harmony import */ var _test_features_inputtest_input_test_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./test-features/inputtest/input-test.component */ 2354);
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ 7212);
/* harmony import */ var _main_page_main_tabs_series_main_tabs_series_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main-page/main-tabs-series/main-tabs-series.component */ 5462);
/* harmony import */ var _multiplication_table_multiplication_table_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./multiplication-table/multiplication-table.component */ 1580);
/* harmony import */ var _test_features_test_palette_test_palette_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./test-features/test-palette/test-palette.component */ 1133);
/* harmony import */ var _main_page_main_tabs_programs_main_tabs_programs_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./main-page/main-tabs-programs/main-tabs-programs.component */ 9230);
/* harmony import */ var _main_page_main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./main-page/main-buttons/main-buttons.component */ 1756);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _answer_value_answer_value_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./answer-value/answer-value.component */ 506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/common */ 316);











































































class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
    providers: [_services_config_service__WEBPACK_IMPORTED_MODULE_6__.ConfigService],
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__.BrowserAnimationsModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__.A11yModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_30__.ClipboardModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_31__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_33__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_35__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_36__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_38__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_39__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_40__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_41__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_42__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_45__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_46__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_47__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__.MatFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_49__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_50__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_51__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_52__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_53__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_54__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_55__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_56__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_57__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_58__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_54__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_59__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_60__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_61__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_62__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_63__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_64__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_65__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_66__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_67__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_68__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_69__.MatTreeModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_70__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_71__.ScrollingModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _math_question_math_question_component__WEBPACK_IMPORTED_MODULE_2__.MathQuestionComponent, _problem_panel_problem_panel_component__WEBPACK_IMPORTED_MODULE_3__.ProblemPanelComponent, _config_dialog_opener_config_dialog_opener_component__WEBPACK_IMPORTED_MODULE_4__.ConfigDialogOpenerComponent, _config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_5__.ConfigDialogComponent, _config_dialog_ranges_config_dialog_ranges_component__WEBPACK_IMPORTED_MODULE_7__.ConfigDialogRangesComponent, _form_panel_form_panel_component__WEBPACK_IMPORTED_MODULE_8__.FormPanelComponent, _workout_panel_workout_panel_component__WEBPACK_IMPORTED_MODULE_9__.WorkoutPanelComponent, _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_10__.PageNotFoundComponent, _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_11__.MainPageComponent, _array_filter_pipe__WEBPACK_IMPORTED_MODULE_12__.ArrayFilterPipe, _test_features_test_features_component__WEBPACK_IMPORTED_MODULE_13__.TestFeaturesComponent, _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_14__.ColumnAnswerComponent, _test_features_display_test_display_test_component__WEBPACK_IMPORTED_MODULE_15__.DisplayTestComponent, _test_features_inputtest_input_test_component__WEBPACK_IMPORTED_MODULE_16__.InputTestComponent, _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_17__.ProgressBarComponent, _main_page_main_tabs_series_main_tabs_series_component__WEBPACK_IMPORTED_MODULE_18__.MainTabsSeriesComponent, _multiplication_table_multiplication_table_component__WEBPACK_IMPORTED_MODULE_19__.MultiplicationTableComponent, _test_features_test_palette_test_palette_component__WEBPACK_IMPORTED_MODULE_20__.TestPaletteComponent, _main_page_main_tabs_programs_main_tabs_programs_component__WEBPACK_IMPORTED_MODULE_21__.MainTabsProgramsComponent, _problem_panel_problem_panel_component__WEBPACK_IMPORTED_MODULE_3__.ProblemPanelComponentDialog, _main_page_main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_22__.MainButtonsComponent, _answer_value_answer_value_component__WEBPACK_IMPORTED_MODULE_23__.AnswerValueComponent],
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_26__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.ReactiveFormsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__.BrowserAnimationsModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_29__.A11yModule, _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_30__.ClipboardModule, _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_31__.CdkStepperModule, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_32__.CdkTableModule, _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_33__.CdkTreeModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_34__.DragDropModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_35__.MatAutocompleteModule, _angular_material_badge__WEBPACK_IMPORTED_MODULE_36__.MatBadgeModule, _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_37__.MatBottomSheetModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_38__.MatButtonModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_39__.MatButtonToggleModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_40__.MatCardModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_41__.MatCheckboxModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_42__.MatChipsModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_43__.MatStepperModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_44__.MatDatepickerModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_45__.MatDialogModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_46__.MatDividerModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_47__.MatExpansionModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_48__.MatFormFieldModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_49__.MatGridListModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_50__.MatIconModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_51__.MatInputModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_52__.MatListModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_53__.MatMenuModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_54__.MatNativeDateModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_55__.MatPaginatorModule, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_56__.MatProgressBarModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_57__.MatProgressSpinnerModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_58__.MatRadioModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_54__.MatRippleModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_59__.MatSelectModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_60__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_61__.MatSliderModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_62__.MatSlideToggleModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_63__.MatSnackBarModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_64__.MatSortModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_65__.MatTableModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_66__.MatTabsModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_67__.MatToolbarModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_68__.MatTooltipModule, _angular_material_tree__WEBPACK_IMPORTED_MODULE_69__.MatTreeModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_70__.PortalModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_71__.ScrollingModule]
  });
})();
_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetComponentScope"](_math_question_math_question_component__WEBPACK_IMPORTED_MODULE_2__.MathQuestionComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_72__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_72__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_72__.NgTemplateOutlet, _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_14__.ColumnAnswerComponent, _answer_value_answer_value_component__WEBPACK_IMPORTED_MODULE_23__.AnswerValueComponent], []);

/***/ }),

/***/ 2146:
/*!**************************************!*\
  !*** ./src/app/array-filter.pipe.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ArrayFilterPipe: () => (/* binding */ ArrayFilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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

/***/ 3192:
/*!**********************************************************!*\
  !*** ./src/app/column-answer/column-answer.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ANSWER_MODES: () => (/* binding */ ANSWER_MODES),
/* harmony export */   ColumnAnswerComponent: () => (/* binding */ ColumnAnswerComponent),
/* harmony export */   ColumnAnswerMode: () => (/* binding */ ColumnAnswerMode),
/* harmony export */   FocusType: () => (/* binding */ FocusType)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_math_question_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/math-question.service */ 3263);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 4950);










const _c0 = ["columninput"];
const _c1 = a0 => ({
  "width.rem": a0
});
function ColumnAnswerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
  }
}
function ColumnAnswerComponent_ng_template_1_input_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "input", 9, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ColumnAnswerComponent_ng_template_1_input_4_Template_input_ngModelChange_0_listener($event) {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r3.userInputs[i_r3].value, $event) || (ctx_r3.userInputs[i_r3].value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keydown", function ColumnAnswerComponent_ng_template_1_input_4_Template_input_keydown_0_listener($event) {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onKeydown($event, i_r3));
    })("ngModelChange", function ColumnAnswerComponent_ng_template_1_input_4_Template_input_ngModelChange_0_listener($event) {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.modelChangeFn($event, i_r3));
    })("focus", function ColumnAnswerComponent_ng_template_1_input_4_Template_input_focus_0_listener($event) {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onFocusColumns($event, i_r3));
    })("blur", function ColumnAnswerComponent_ng_template_1_input_4_Template_input_blur_0_listener($event) {
      const i_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2).index;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onBlurColumns($event, i_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r3 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r3.userInputs[i_r3].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tabindex", ctx_r3.userInputs[i_r3].tabindex)("placeholder", ctx_r3.userInputs[i_r3].placeholder)("@answerStatus", ctx_r3.answerStatus);
  }
}
function ColumnAnswerComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4)(1, "mat-form-field", 5)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ColumnAnswerComponent_ng_template_1_input_4_Template, 2, 4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ColumnAnswerComponent_ng_template_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.clearInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.userInputs)("ngForTrackBy", ctx_r3.trackByIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.isEmpty());
  }
}
function ColumnAnswerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ColumnAnswerComponent_ng_template_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.clearInput());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 10, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ColumnAnswerComponent_ng_template_3_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.modelChangeNormal($event));
    })("keydown", function ColumnAnswerComponent_ng_template_3_Template_input_keydown_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onKeydownSimple($event));
    })("focus", function ColumnAnswerComponent_ng_template_3_Template_input_focus_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onFocusSimple($event));
    })("blur", function ColumnAnswerComponent_ng_template_3_Template_input_blur_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.onBlurSimple($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r3.isEmpty());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r3.value)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx_r3.size))("@answerStatus", ctx_r3.answerStatus);
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
    let newStatus = this.valueChange(this.value, +this.id);
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
    let val2 = this.valueChange(this.value, +this.id);
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
    let val2 = this.valueChange(this.value, +this.id);
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
    decls: 5,
    vars: 3,
    consts: [["columns", ""], ["normal", ""], ["columninput", ""], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "columnAnswer"], ["floatLabel", "always"], ["type", "number", 3, "ngModel", "tabindex", "placeholder", "ngModelChange", "keydown", "focus", "blur", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-icon-button", "", "color", "accent", "aria-label", "Clear", "tabindex", "-1", 3, "click", "disabled"], ["svgIcon", "delete-cross"], ["type", "number", 3, "ngModelChange", "keydown", "focus", "blur", "ngModel", "tabindex", "placeholder"], ["type", "number", "placeholder", "?", 3, "ngModelChange", "keydown", "focus", "blur", "ngModel", "ngStyle"]],
    template: function ColumnAnswerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ColumnAnswerComponent_ng_container_0_Template, 1, 0, "ng-container", 3)(1, ColumnAnswerComponent_ng_template_1_Template, 7, 3, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"])(3, ColumnAnswerComponent_ng_template_3_Template, 4, 6, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const columns_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        const normal_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.mode == ctx.columnAnswerMode.COLUMNS)("ngIfThen", columns_r6)("ngIfElse", normal_r7);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatIconButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
    styles: [".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n  background-color: var(--mat-ripple-color, rgba(0, 0, 0, 0.1));\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start { \n }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end { \n }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: var(--mat-app-background-color, transparent);\n  color: var(--mat-app-text-color, inherit);\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-badge-text-font: Roboto, sans-serif;\n  --mat-badge-text-size: 12px;\n  --mat-badge-text-weight: 600;\n  --mat-badge-small-size-text-size: 9px;\n  --mat-badge-large-size-text-size: 24px;\n}\n\n.mat-h1[_ngcontent-%COMP%], .mat-headline-5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-h1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-headline-5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font: 400 24px / 32px Roboto, sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 16px;\n}\n\n.mat-h2[_ngcontent-%COMP%], .mat-headline-6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-h2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-headline-6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font: 500 20px / 32px Roboto, sans-serif;\n  letter-spacing: 0.0125em;\n  margin: 0 0 16px;\n}\n\n.mat-h3[_ngcontent-%COMP%], .mat-subtitle-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-h3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-subtitle-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 400 16px / 28px Roboto, sans-serif;\n  letter-spacing: 0.009375em;\n  margin: 0 0 16px;\n}\n\n.mat-h4[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-h4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font: 400 16px / 24px Roboto, sans-serif;\n  letter-spacing: 0.03125em;\n  margin: 0 0 16px;\n}\n\n.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font: 400 calc(14px * 0.83) / 20px Roboto, sans-serif;\n  margin: 0 0 12px;\n}\n\n.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font: 400 calc(14px * 0.67) / 20px Roboto, sans-serif;\n  margin: 0 0 12px;\n}\n\n.mat-body-strong[_ngcontent-%COMP%], .mat-subtitle-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-body-strong[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-subtitle-2[_ngcontent-%COMP%] {\n  font: 500 14px / 22px Roboto, sans-serif;\n  letter-spacing: 0.0071428571em;\n}\n\n.mat-body[_ngcontent-%COMP%], .mat-body-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-body[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-body-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%] {\n  font: 400 14px / 20px Roboto, sans-serif;\n  letter-spacing: 0.0178571429em;\n}\n.mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-body-2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\n\n.mat-small[_ngcontent-%COMP%], .mat-caption[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-small[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-caption[_ngcontent-%COMP%] {\n  font: 400 12px / 20px Roboto, sans-serif;\n  letter-spacing: 0.0333333333em;\n}\n\n.mat-headline-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-headline-1[_ngcontent-%COMP%] {\n  font: 300 96px / 96px Roboto, sans-serif;\n  letter-spacing: -0.015625em;\n  margin: 0 0 56px;\n}\n\n.mat-headline-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-headline-2[_ngcontent-%COMP%] {\n  font: 300 60px / 60px Roboto, sans-serif;\n  letter-spacing: -0.0083333333em;\n  margin: 0 0 64px;\n}\n\n.mat-headline-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-headline-3[_ngcontent-%COMP%] {\n  font: 400 48px / 50px Roboto, sans-serif;\n  letter-spacing: normal;\n  margin: 0 0 64px;\n}\n\n.mat-headline-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-headline-4[_ngcontent-%COMP%] {\n  font: 400 34px / 40px Roboto, sans-serif;\n  letter-spacing: 0.0073529412em;\n  margin: 0 0 64px;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-bottom-sheet-container-text-font: Roboto, sans-serif;\n  --mat-bottom-sheet-container-text-line-height: 20px;\n  --mat-bottom-sheet-container-text-size: 14px;\n  --mat-bottom-sheet-container-text-tracking: 0.0178571429em;\n  --mat-bottom-sheet-container-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-legacy-button-toggle-label-text-font: Roboto, sans-serif;\n  --mat-legacy-button-toggle-label-text-line-height: 24px;\n  --mat-legacy-button-toggle-label-text-size: 16px;\n  --mat-legacy-button-toggle-label-text-tracking: 0.03125em;\n  --mat-legacy-button-toggle-label-text-weight: 400;\n  --mat-standard-button-toggle-label-text-font: Roboto, sans-serif;\n  --mat-standard-button-toggle-label-text-line-height: 24px;\n  --mat-standard-button-toggle-label-text-size: 16px;\n  --mat-standard-button-toggle-label-text-tracking: 0.03125em;\n  --mat-standard-button-toggle-label-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-datepicker-calendar-text-font: Roboto, sans-serif;\n  --mat-datepicker-calendar-text-size: 13px;\n  --mat-datepicker-calendar-body-label-text-size: 14px;\n  --mat-datepicker-calendar-body-label-text-weight: 500;\n  --mat-datepicker-calendar-period-button-text-size: 14px;\n  --mat-datepicker-calendar-period-button-text-weight: 500;\n  --mat-datepicker-calendar-header-text-size: 11px;\n  --mat-datepicker-calendar-header-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-expansion-header-text-font: Roboto, sans-serif;\n  --mat-expansion-header-text-size: 14px;\n  --mat-expansion-header-text-weight: 500;\n  --mat-expansion-header-text-line-height: inherit;\n  --mat-expansion-header-text-tracking: inherit;\n  --mat-expansion-container-text-font: Roboto, sans-serif;\n  --mat-expansion-container-text-line-height: 20px;\n  --mat-expansion-container-text-size: 14px;\n  --mat-expansion-container-text-tracking: 0.0178571429em;\n  --mat-expansion-container-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-grid-list-tile-header-primary-text-size: 14px;\n  --mat-grid-list-tile-header-secondary-text-size: 12px;\n  --mat-grid-list-tile-footer-primary-text-size: 14px;\n  --mat-grid-list-tile-footer-secondary-text-size: 12px;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-stepper-container-text-font: Roboto, sans-serif;\n  --mat-stepper-header-label-text-font: Roboto, sans-serif;\n  --mat-stepper-header-label-text-size: 14px;\n  --mat-stepper-header-label-text-weight: 400;\n  --mat-stepper-header-error-state-label-text-size: 16px;\n  --mat-stepper-header-selected-state-label-text-size: 16px;\n  --mat-stepper-header-selected-state-label-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-toolbar-title-text-font: Roboto, sans-serif;\n  --mat-toolbar-title-text-line-height: 32px;\n  --mat-toolbar-title-text-size: 20px;\n  --mat-toolbar-title-text-tracking: 0.0125em;\n  --mat-toolbar-title-text-weight: 500;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-tree-node-text-font: Roboto, sans-serif;\n  --mat-tree-node-text-size: 14px;\n  --mat-tree-node-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-option-label-text-font: Roboto, sans-serif;\n  --mat-option-label-text-line-height: 24px;\n  --mat-option-label-text-size: 16px;\n  --mat-option-label-text-tracking: 0.03125em;\n  --mat-option-label-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-optgroup-label-text-font: Roboto, sans-serif;\n  --mat-optgroup-label-text-line-height: 24px;\n  --mat-optgroup-label-text-size: 16px;\n  --mat-optgroup-label-text-tracking: 0.03125em;\n  --mat-optgroup-label-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-card-title-text-font: Roboto, sans-serif;\n  --mat-card-title-text-line-height: 32px;\n  --mat-card-title-text-size: 20px;\n  --mat-card-title-text-tracking: 0.0125em;\n  --mat-card-title-text-weight: 500;\n  --mat-card-subtitle-text-font: Roboto, sans-serif;\n  --mat-card-subtitle-text-line-height: 22px;\n  --mat-card-subtitle-text-size: 14px;\n  --mat-card-subtitle-text-tracking: 0.0071428571em;\n  --mat-card-subtitle-text-weight: 500;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mdc-plain-tooltip-supporting-text-font: Roboto, sans-serif;\n  --mdc-plain-tooltip-supporting-text-size: 12px;\n  --mdc-plain-tooltip-supporting-text-weight: 400;\n  --mdc-plain-tooltip-supporting-text-tracking: 0.0333333333em;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mdc-filled-text-field-label-text-font: Roboto, sans-serif;\n  --mdc-filled-text-field-label-text-size: 16px;\n  --mdc-filled-text-field-label-text-tracking: 0.03125em;\n  --mdc-filled-text-field-label-text-weight: 400;\n  --mdc-outlined-text-field-label-text-font: Roboto, sans-serif;\n  --mdc-outlined-text-field-label-text-size: 16px;\n  --mdc-outlined-text-field-label-text-tracking: 0.03125em;\n  --mdc-outlined-text-field-label-text-weight: 400;\n  --mat-form-field-container-text-font: Roboto, sans-serif;\n  --mat-form-field-container-text-line-height: 24px;\n  --mat-form-field-container-text-size: 16px;\n  --mat-form-field-container-text-tracking: 0.03125em;\n  --mat-form-field-container-text-weight: 400;\n  --mat-form-field-outlined-label-text-populated-size: 16px;\n  --mat-form-field-subscript-text-font: Roboto, sans-serif;\n  --mat-form-field-subscript-text-line-height: 20px;\n  --mat-form-field-subscript-text-size: 12px;\n  --mat-form-field-subscript-text-tracking: 0.0333333333em;\n  --mat-form-field-subscript-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-select-trigger-text-font: Roboto, sans-serif;\n  --mat-select-trigger-text-line-height: 24px;\n  --mat-select-trigger-text-size: 16px;\n  --mat-select-trigger-text-tracking: 0.03125em;\n  --mat-select-trigger-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mdc-dialog-subhead-font: Roboto, sans-serif;\n  --mdc-dialog-subhead-line-height: 32px;\n  --mdc-dialog-subhead-size: 20px;\n  --mdc-dialog-subhead-weight: 500;\n  --mdc-dialog-subhead-tracking: 0.0125em;\n  --mdc-dialog-supporting-text-font: Roboto, sans-serif;\n  --mdc-dialog-supporting-text-line-height: 24px;\n  --mdc-dialog-supporting-text-size: 16px;\n  --mdc-dialog-supporting-text-weight: 400;\n  --mdc-dialog-supporting-text-tracking: 0.03125em;\n}\n\n.mat-mdc-standard-chip[_ngcontent-%COMP%] {\n  --mdc-chip-label-text-font: Roboto, sans-serif;\n  --mdc-chip-label-text-line-height: 20px;\n  --mdc-chip-label-text-size: 14px;\n  --mdc-chip-label-text-tracking: 0.0178571429em;\n  --mdc-chip-label-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%]   .mat-mdc-slide-toggle[_ngcontent-%COMP%] {\n  --mdc-form-field-label-text-font: Roboto, sans-serif;\n  --mdc-form-field-label-text-line-height: 20px;\n  --mdc-form-field-label-text-size: 14px;\n  --mdc-form-field-label-text-tracking: 0.0178571429em;\n  --mdc-form-field-label-text-weight: 400;\n}\n\n.mat-mdc-radio-button[_ngcontent-%COMP%] {\n  --mdc-form-field-label-text-font: Roboto, sans-serif;\n  --mdc-form-field-label-text-line-height: 20px;\n  --mdc-form-field-label-text-size: 14px;\n  --mdc-form-field-label-text-tracking: 0.0178571429em;\n  --mdc-form-field-label-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mdc-slider-label-label-text-font: Roboto, sans-serif;\n  --mdc-slider-label-label-text-size: 14px;\n  --mdc-slider-label-label-text-line-height: 22px;\n  --mdc-slider-label-label-text-tracking: 0.0071428571em;\n  --mdc-slider-label-label-text-weight: 500;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-menu-item-label-text-font: Roboto, sans-serif;\n  --mat-menu-item-label-text-size: 16px;\n  --mat-menu-item-label-text-tracking: 0.03125em;\n  --mat-menu-item-label-text-line-height: 24px;\n  --mat-menu-item-label-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mdc-list-list-item-label-text-font: Roboto, sans-serif;\n  --mdc-list-list-item-label-text-line-height: 24px;\n  --mdc-list-list-item-label-text-size: 16px;\n  --mdc-list-list-item-label-text-tracking: 0.03125em;\n  --mdc-list-list-item-label-text-weight: 400;\n  --mdc-list-list-item-supporting-text-font: Roboto, sans-serif;\n  --mdc-list-list-item-supporting-text-line-height: 20px;\n  --mdc-list-list-item-supporting-text-size: 14px;\n  --mdc-list-list-item-supporting-text-tracking: 0.0178571429em;\n  --mdc-list-list-item-supporting-text-weight: 400;\n  --mdc-list-list-item-trailing-supporting-text-font: Roboto, sans-serif;\n  --mdc-list-list-item-trailing-supporting-text-line-height: 20px;\n  --mdc-list-list-item-trailing-supporting-text-size: 12px;\n  --mdc-list-list-item-trailing-supporting-text-tracking: 0.0333333333em;\n  --mdc-list-list-item-trailing-supporting-text-weight: 400;\n}\n\n.mdc-list-group__subheader[_ngcontent-%COMP%] {\n  font: 400 16px / 28px Roboto, sans-serif;\n  letter-spacing: 0.009375em;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-paginator-container-text-font: Roboto, sans-serif;\n  --mat-paginator-container-text-line-height: 20px;\n  --mat-paginator-container-text-size: 12px;\n  --mat-paginator-container-text-tracking: 0.0333333333em;\n  --mat-paginator-container-text-weight: 400;\n  --mat-paginator-select-trigger-text-size: 12px;\n}\n\n.mat-mdc-tab-header[_ngcontent-%COMP%] {\n  --mat-tab-header-label-text-font: Roboto, sans-serif;\n  --mat-tab-header-label-text-size: 14px;\n  --mat-tab-header-label-text-tracking: 0.0892857143em;\n  --mat-tab-header-label-text-line-height: 36px;\n  --mat-tab-header-label-text-weight: 500;\n}\n\n.mat-mdc-checkbox[_ngcontent-%COMP%] {\n  --mdc-form-field-label-text-font: Roboto, sans-serif;\n  --mdc-form-field-label-text-line-height: 20px;\n  --mdc-form-field-label-text-size: 14px;\n  --mdc-form-field-label-text-tracking: 0.0178571429em;\n  --mdc-form-field-label-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mdc-text-button-label-text-font: Roboto, sans-serif;\n  --mdc-text-button-label-text-size: 14px;\n  --mdc-text-button-label-text-tracking: 0.0892857143em;\n  --mdc-text-button-label-text-weight: 500;\n  --mdc-text-button-label-text-transform: none;\n  --mdc-filled-button-label-text-font: Roboto, sans-serif;\n  --mdc-filled-button-label-text-size: 14px;\n  --mdc-filled-button-label-text-tracking: 0.0892857143em;\n  --mdc-filled-button-label-text-weight: 500;\n  --mdc-filled-button-label-text-transform: none;\n  --mdc-outlined-button-label-text-font: Roboto, sans-serif;\n  --mdc-outlined-button-label-text-size: 14px;\n  --mdc-outlined-button-label-text-tracking: 0.0892857143em;\n  --mdc-outlined-button-label-text-weight: 500;\n  --mdc-outlined-button-label-text-transform: none;\n  --mdc-protected-button-label-text-font: Roboto, sans-serif;\n  --mdc-protected-button-label-text-size: 14px;\n  --mdc-protected-button-label-text-tracking: 0.0892857143em;\n  --mdc-protected-button-label-text-weight: 500;\n  --mdc-protected-button-label-text-transform: none;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mdc-extended-fab-label-text-font: Roboto, sans-serif;\n  --mdc-extended-fab-label-text-size: 14px;\n  --mdc-extended-fab-label-text-tracking: 0.0892857143em;\n  --mdc-extended-fab-label-text-weight: 500;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mdc-snackbar-supporting-text-font: Roboto, sans-serif;\n  --mdc-snackbar-supporting-text-line-height: 20px;\n  --mdc-snackbar-supporting-text-size: 14px;\n  --mdc-snackbar-supporting-text-weight: 400;\n}\n\nhtml[_ngcontent-%COMP%] {\n  --mat-table-header-headline-font: Roboto, sans-serif;\n  --mat-table-header-headline-line-height: 22px;\n  --mat-table-header-headline-size: 14px;\n  --mat-table-header-headline-weight: 500;\n  --mat-table-header-headline-tracking: 0.0071428571em;\n  --mat-table-row-item-label-text-font: Roboto, sans-serif;\n  --mat-table-row-item-label-text-line-height: 20px;\n  --mat-table-row-item-label-text-size: 14px;\n  --mat-table-row-item-label-text-weight: 400;\n  --mat-table-row-item-label-text-tracking: 0.0178571429em;\n  --mat-table-footer-supporting-text-font: Roboto, sans-serif;\n  --mat-table-footer-supporting-text-line-height: 20px;\n  --mat-table-footer-supporting-text-size: 14px;\n  --mat-table-footer-supporting-text-weight: 400;\n  --mat-table-footer-supporting-text-tracking: 0.0178571429em;\n}\n\n.mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n  background-color: var(--mat-ripple-color, rgba(0, 0, 0, 0.1));\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start { \n }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end { \n }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: var(--mat-app-background-color, transparent);\n  color: var(--mat-app-text-color, inherit);\n}\n\n.mat-icon-button[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  vertical-align: text-bottom;\n}\n\n.columnAnswer[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.columnAnswer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 1em;\n  text-align: center;\n  font-size: 24px;\n  font-family: Arial, Helvetica, sans-serif;\n  border: 1px;\n  border-left-style: dashed;\n  border-top-style: solid;\n  border-bottom-style: solid;\n  padding: 2px 0;\n}\n\n.columnAnswer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:first-child {\n  border-left-style: solid;\n  border-top-left-radius: 7px;\n  border-bottom-left-radius: 7px;\n}\n\n.columnAnswer[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:last-child {\n  border-right-style: solid;\n  border-top-right-radius: 7px;\n  border-bottom-right-radius: 7px;\n}\n\n.deleteIcon[_ngcontent-%COMP%] {\n  fill: grey;\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n}\n\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.mathAnswer[_ngcontent-%COMP%] {\n  font-size: 24px;\n  padding-left: 5px;\n  padding-right: 5px;\n  width: 3em;\n  text-align: right;\n  margin-left: 0;\n  border-radius: 7px;\n  border-style: solid;\n  border-width: 1px;\n}\n\n.mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #388e3c;\n  outline-width: 15px;\n  caret-color: #388e3c;\n}\n\n.dark-theme[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .dark-theme   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #ffd740;\n  outline-width: 15px;\n  caret-color: #ffd740;\n}\n\n.light-theme[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .light-theme   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #bcaaa4;\n  outline-width: 15px;\n  caret-color: #bcaaa4;\n}\n\n.deeppurple-amber[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .deeppurple-amber   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #ffd740;\n  outline-width: 15px;\n  caret-color: #ffd740;\n}\n\n.indigo-pink[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .indigo-pink   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #ff4081;\n  outline-width: 15px;\n  caret-color: #ff4081;\n}\n\n.pink-bluegrey[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .pink-bluegrey   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #b0bec5;\n  outline-width: 15px;\n  caret-color: #b0bec5;\n}\n\n.purple-green[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .purple-green   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #69f0ae;\n  outline-width: 15px;\n  caret-color: #69f0ae;\n}\n\n.candy[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .candy   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #795548;\n  outline-width: 15px;\n  caret-color: #795548;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2NvbHVtbi1hbnN3ZXIvY29sdW1uLWFuc3dlci5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvdGV4dC1maWVsZC9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL2ZvY3VzLWluZGljYXRvcnMvX3ByaXZhdGUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19sYXlvdXQtY29tbW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9fY29yZS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90aGVtZS9fY3NzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS9fc2Fzcy11dGlscy5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUvdHlwb2dyYXBoeS9fdHlwb2dyYXBoeS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUvdHlwb2dyYXBoeS9fdHlwb2dyYXBoeS11dGlscy5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzL19jaGlwcy10aGVtZS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZS9fc2xpZGUtdG9nZ2xlLXRoZW1lLnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8vX3JhZGlvLXRoZW1lLnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdC9fbGlzdC10aGVtZS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMvX3RhYnMtdGhlbWUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveC9fY2hlY2tib3gtdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPRTtFQUNFLGdCQUFBO0VBSUEsa0JBQUE7QUNUSjtBRGdCSTtFQUNFLHdCQUFBO0FDZE47O0FEa0JFO0VBQ0UsaUJBQUE7QUNmSjs7QURrQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSw2REFBQTtFQUlBLDJCQUFBO0VBS0UsNkRBQUE7QUN2Qk47QUMrQkk7RUZIRSxhQUFBO0FDekJOOztBQ25CRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBSUEsbUJBQUE7RUFHQSxVQUFBO0VBR0Esd0JBQUE7RUFDQSxxQkFBQTtFQU1BLE9BQUE7QURVSjtBQ1JJO0VBQ0UsVUFBQTtFQUNBLFFBQUE7QURVTjs7QUUxQkU7RUFFRSxvQkFBQTtFQUdBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUYwQko7O0FFdEJFO0VBQ0UsZUFBQTtFQUNBLGFBM0J3QjtBRm9ENUI7QUV2Qkk7RUFHRSxhQUFBO0FGdUJOOztBRWZFO0VBQ0UsYUFBQTtFQUNBLGtC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O0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBcTFCUiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ0Bhbmd1bGFyL2Nkayc7XG5AdXNlICcuLi90b2tlbnMvbTIvbWF0L3JpcHBsZScgYXMgdG9rZW5zLW1hdC1yaXBwbGU7XG5AdXNlICcuLi90b2tlbnMvdG9rZW4tdXRpbHMnO1xuXG5AbWl4aW4gcmlwcGxlKCkge1xuICAvLyBUaGUgaG9zdCBlbGVtZW50IG9mIGFuIG1hdC1yaXBwbGUgZGlyZWN0aXZlIHNob3VsZCBhbHdheXMgaGF2ZSBhIHBvc2l0aW9uIG9mIFwiYWJzb2x1dGVcIiBvclxuICAvLyBcInJlbGF0aXZlXCIgc28gdGhhdCB0aGUgcmlwcGxlcyBpbnNpZGUgYXJlIGNvcnJlY3RseSBwb3NpdGlvbmVkIHJlbGF0aXZlbHkgdG8gdGhlIGNvbnRhaW5lci5cbiAgLm1hdC1yaXBwbGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAvLyBCeSBkZWZhdWx0LCBldmVyeSByaXBwbGUgY29udGFpbmVyIHNob3VsZCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBpbiBmYXZvciBvZiBjcmVhdGluZyBhblxuICAgIC8vIGVhc3kgQVBJIGZvciBkZXZlbG9wZXJzIHVzaW5nIHRoZSBNYXRSaXBwbGUgZGlyZWN0aXZlLlxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC8vIFByb21vdGUgY29udGFpbmVycyB0aGF0IGhhdmUgcmlwcGxlcyB0byBhIG5ldyBsYXllci4gV2Ugd2FudCB0byB0YXJnZXQgYDpub3QoOmVtcHR5KWAsXG4gICAgLy8gYmVjYXVzZSB3ZSBkb24ndCB3YW50IGFsbCByaXBwbGUgY29udGFpbmVycyB0byBoYXZlIHRoZWlyIG93biBsYXllciBzaW5jZSB0aGV5J3JlIHVzZWQgaW4gYVxuICAgIC8vIGxvdCBvZiBwbGFjZXMgYW5kIHRoZSBsYXllciBpcyBvbmx5IHJlbGV2YW50IHdoaWxlIGFuaW1hdGluZy4gTm90ZSB0aGF0IGlkZWFsbHkgd2UnZCB1c2VcbiAgICAvLyB0aGUgYGNvbnRhaW5gIHByb3BlcnR5IGhlcmUgKHNlZSAjMTMxNzUpLCBiZWNhdXNlIGA6ZW1wdHlgIGNhbiBiZSBicm9rZW4gYnkgaGF2aW5nIGV4dHJhXG4gICAgLy8gdGV4dCBpbnNpZGUgdGhlIGVsZW1lbnQsIGJ1dCBpdCBpc24ndCB2ZXJ5IHdlbGwgc3VwcG9ydGVkIHlldC5cbiAgICAmOm5vdCg6ZW1wdHkpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcblxuICAgIC8vIFdlIHVzZSBhIDNkIHRyYW5zZm9ybSBoZXJlIGluIG9yZGVyIHRvIGF2b2lkIGFuIGlzc3VlIGluIFNhZmFyaSB3aGVyZVxuICAgIC8vIHRoZSByaXBwbGVzIGFyZW4ndCBjbGlwcGVkIHdoZW4gaW5zaWRlIHRoZSBzaGFkb3cgRE9NIChzZWUgIzI0MDI4KS5cbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMCwgMCk7XG5cbiAgICBAaW5jbHVkZSB0b2tlbi11dGlscy51c2UtdG9rZW5zKFxuICAgICAgdG9rZW5zLW1hdC1yaXBwbGUuJHByZWZpeCwgdG9rZW5zLW1hdC1yaXBwbGUuZ2V0LXRva2VuLXNsb3RzKCkpIHtcbiAgICAgIC8vIFdlIGhhdmUgdG8gZW1pdCBhIGZhbGxiYWNrIHZhbHVlIGhlcmUsIGJlY2F1c2Ugc29tZSBpbnRlcm5hbCBidWlsZHMgZGVwZW5kIG9uIGl0LlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCN7dG9rZW4tdXRpbHMuZ2V0LXRva2VuLXZhcmlhYmxlKGNvbG9yKX0sIHJnYmEoIzAwMCwgMC4xKSk7XG4gICAgfVxuXG4gICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByaXBwbGUgaXMgb3BhcXVlLCBjYXVzaW5nIGl0IHRvIG9ic3RydWN0IHRoZSBjb250ZW50LlxuICAgIEBpbmNsdWRlIGNkay5oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xyXG5AdXNlICdAYW5ndWxhci9tYXRlcmlhbCcgYXMgbWF0O1xyXG5AaW1wb3J0IFwiLi4vLi4vYXNzZXRzL3N0eWxlcy90aGVtZXNfdmFyaWFibGVzLnNjc3NcIjtcclxuQGluY2x1ZGUgbWF0LmFsbC1jb21wb25lbnQtdHlwb2dyYXBoaWVzKCk7XHJcbkBpbmNsdWRlIG1hdC5jb3JlKCk7XHJcblxyXG4kZm9udC1zaXplLXZhcjogMjRweDtcclxuJHJhZGl1czogN3B4O1xyXG4kYm9yZGVyLXNpemU6IDFweDtcclxuXHJcbiRtYXQtaWNvbi1idXR0b24tZGltOiAyOHB4O1xyXG5cclxuLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogJG1hdC1pY29uLWJ1dHRvbi1kaW07XHJcbiAgICBoZWlnaHQ6ICRtYXQtaWNvbi1idXR0b24tZGltO1xyXG59XHJcblxyXG4ubWF0LWljb24ge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG59XHJcblxyXG4uY29sdW1uQW5zd2VyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmNvbHVtbkFuc3dlciBpbnB1dCB7XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXZhcjtcclxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyOiAkYm9yZGVyLXNpemU7XHJcbiAgICAvL2JvcmRlci1jb2xvcjogbWVkaXVtYmx1ZTtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBkYXNoZWQ7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG4gICAgcGFkZGluZzogMnB4IDA7XHJcbn1cclxuXHJcbi5jb2x1bW5BbnN3ZXIgaW5wdXQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHJhZGl1cztcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XHJcbn1cclxuXHJcbi5jb2x1bW5BbnN3ZXIgaW5wdXQ6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHJhZGl1cztcclxufVxyXG5cclxuLy8vLyBJbnB1dCBkZWxldGVcclxuLmRlbGV0ZUljb24ge1xyXG4gICAgZmlsbDogZ3JleTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIC8vbWFyZ2luOiAwIDVweCAwIC02cHg7XHJcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLy9GaXJlZm94XHJcbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbn1cclxuXHJcbi5tYXRoQW5zd2VyIHtcclxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS12YXI7XHJcbiAgICAvL2ZvbnQtZmFtaWx5IDogXCJBcmlhbFwiO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICB3aWR0aDogM2VtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbn1cclxuXHJcbkBtaXhpbiBtYXRoLXRoZW1lKCR0aGVtZSkge1xyXG4gICAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcclxuICAgICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xyXG5cclxuICAgIC5tYXRoQW5zd2VyOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lLWNvbG9yOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50KTtcclxuICAgICAgICBvdXRsaW5lLXdpZHRoOiAxNXB4O1xyXG4gICAgICAgIGNhcmV0LWNvbG9yOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50KTtcclxuICAgIH1cclxufVxyXG5cclxuQGVhY2ggJHRoY2xhc3MsICR0aCBpbiAkYWxsX3RoZW1lcyB7XHJcbiAgICBAaWYgJHRoY2xhc3MgPT0gXCJcIiB7XHJcbiAgICAgICAgQGluY2x1ZGUgbWF0aC10aGVtZSgkdGgpO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgOmhvc3QtY29udGV4dCguI3skdGhjbGFzc30pIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWF0aC10aGVtZSgkdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLy8gRW1pdHMgYSBDU1MgY2xhc3MsIGAuY2RrLXZpc3VhbGx5LWhpZGRlbmAuIFRoaXMgY2xhc3MgY2FuIGJlIGFwcGxpZWQgdG8gYW4gZWxlbWVudFxuLy8vIHRvIG1ha2UgdGhhdCBlbGVtZW50IHZpc3VhbGx5IGhpZGRlbiB3aGlsZSByZW1haW5pbmcgYXZhaWxhYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2d5LlxuQG1peGluIGExMXktdmlzdWFsbHktaGlkZGVuKCkge1xuICAuY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcblxuICAgIC8vIFRoaXMgd29ya3MgYXJvdW5kIGEgQ2hyb21lIGJ1ZyB0aGF0IGNhbiBjYXVzZSB0aGUgdGFiIHRvIGNyYXNoIHdoZW4gbGFyZ2UgYW1vdW50cyBvZlxuICAgIC8vIG5vbi1FbmdsaXNoIHRleHQgZ2V0IHdyYXBwZWQ6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEyMDE0NDRcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgLy8gQXZvaWQgYnJvd3NlcnMgcmVuZGVyaW5nIHRoZSBmb2N1cyByaW5nIGluIHNvbWUgY2FzZXMuXG4gICAgb3V0bGluZTogMDtcblxuICAgIC8vIEF2b2lkIHNvbWUgY2FzZXMgd2hlcmUgdGhlIGJyb3dzZXIgd2lsbCBzdGlsbCByZW5kZXIgdGhlIG5hdGl2ZSBjb250cm9scyAoc2VlICM5MDQ5KS5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuXG4gICAgLy8gV2UgbmVlZCBhdCBsZWFzdCBvbmUgb2YgdG9wL2JvdHRvbS9sZWZ0L3JpZ2h0IGluIG9yZGVyIHRvIHByZXZlbnQgY2FzZXMgd2hlcmUgdGhlXG4gICAgLy8gYWJzb2x1dGUtcG9zaXRpb25lZCBlbGVtZW50IGlzIHB1c2hlZCBkb3duIGFuZCBjYW4gYWZmZWN0IHNjcm9sbGluZyAoc2VlICMyNDU5NykuXG4gICAgLy8gYGxlZnRgIHdhcyBjaG9zZW4gaGVyZSwgYmVjYXVzZSBpdCdzIHRoZSBsZWFzdCBsaWtlbHkgdG8gYnJlYWsgb3ZlcnJpZGVzIHdoZXJlIHRoZVxuICAgIC8vIGVsZW1lbnQgbWlnaHQgaGF2ZSBiZWVuIHBvc2l0aW9uZWQgKGUuZy4gYG1hdC1jaGVja2JveGApLlxuICAgIGxlZnQ6IDA7XG5cbiAgICBbZGlyPSdydGwnXSAmIHtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuLy8vIEBkZXByZWNhdGVkIFVzZSBgYTExeS12aXN1YWxseS1oaWRkZW5gLlxuQG1peGluIGExMXkoKSB7XG4gIEBpbmNsdWRlIGExMXktdmlzdWFsbHktaGlkZGVuO1xufVxuXG4vLy8gRW1pdHMgdGhlIG1peGluJ3MgY29udGVudCBuZXN0ZWQgdW5kZXIgYCRzZWxlY3Rvci1jb250ZXh0YCBpZiBgJHNlbGVjdG9yLWNvbnRleHRgXG4vLy8gaXMgbm9uLWVtcHR5LlxuLy8vIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3Rvci1jb250ZXh0IFRoZSBzZWxlY3RvciB1bmRlciB3aGljaCB0byBuZXN0IHRoZSBtaXhpbidzIGNvbnRlbnQuXG5AbWl4aW4gX29wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gIEBpZiAoJHNlbGVjdG9yLWNvbnRleHQgPT0gJycpIHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAZWxzZSB7XG4gICAgI3skc2VsZWN0b3ItY29udGV4dH0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vLyBBcHBsaWVzIHN0eWxlcyBmb3IgdXNlcnMgaW4gaGlnaCBjb250cmFzdCBtb2RlLiBOb3RlIHRoYXQgdGhpcyBvbmx5IGFwcGxpZXNcbi8vLyB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4vLy8gYXR0cmlidXRlLCBob3dldmVyIENocm9tZSBoYW5kbGVzIGhpZ2ggY29udHJhc3QgZGlmZmVyZW50bHkuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gdGFyZ2V0IFR5cGUgb2YgaGlnaCBjb250cmFzdCBzZXR0aW5nIHRvIHRhcmdldC4gRGVmYXVsdHMgdG8gYGFjdGl2ZWAsIGNhbiBiZVxuLy8vICAgICBgd2hpdGUtb24tYmxhY2tgIG9yIGBibGFjay1vbi13aGl0ZWAuXG4vLy8gQHBhcmFtIHtTdHJpbmd9IGVuY2Fwc3VsYXRpb24gV2hldGhlciB0byBlbWl0IHN0eWxlcyBmb3IgdmlldyBlbmNhcHN1bGF0aW9uLiBWYWx1ZXMgYXJlOlxuLy8vICAgICAqIGBvbmAgLSB3b3JrcyBmb3IgYEVtdWxhdGVkYCwgYE5hdGl2ZWAsIGFuZCBgU2hhZG93RG9tYFxuLy8vICAgICAqIGBvZmZgIC0gd29ya3MgZm9yIGBOb25lYFxuLy8vICAgICAqIGBhbnlgIC0gd29ya3MgZm9yIGFsbCBlbmNhcHN1bGF0aW9uIG1vZGVzIGJ5IGVtaXR0aW5nIHRoZSBDU1MgdHdpY2UgKGRlZmF1bHQpLlxuQG1peGluIGhpZ2gtY29udHJhc3QoJHRhcmdldDogYWN0aXZlLCAkZW5jYXBzdWxhdGlvbjogJ2FueScpIHtcbiAgQGlmICgkdGFyZ2V0ICE9ICdhY3RpdmUnIGFuZCAkdGFyZ2V0ICE9ICdibGFjay1vbi13aGl0ZScgYW5kICR0YXJnZXQgIT0gJ3doaXRlLW9uLWJsYWNrJykge1xuICAgIEBlcnJvciAnVW5rbm93biBjZGstaGlnaC1jb250cmFzdCB2YWx1ZSBcIiN7JHRhcmdldH1cIiBwcm92aWRlZC4gJyArXG4gICAgICAgICAgICdBbGxvd2VkIHZhbHVlcyBhcmUgXCJhY3RpdmVcIiwgXCJibGFjay1vbi13aGl0ZVwiLCBhbmQgXCJ3aGl0ZS1vbi1ibGFja1wiJztcbiAgfVxuXG4gIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29uJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ29mZicgYW5kICRlbmNhcHN1bGF0aW9uICE9ICdhbnknKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IGVuY2Fwc3VsYXRpb24gXCIjeyRlbmNhcHN1bGF0aW9ufVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcIm9uXCIsIFwib2ZmXCIsIGFuZCBcImFueVwiJztcbiAgfVxuXG4gIC8vIElmIHRoZSBzZWxlY3RvciBjb250ZXh0IGhhcyBtdWx0aXBsZSBwYXJ0cywgc3VjaCBhcyBgLnNlY3Rpb24sIC5yZWdpb25gLCBqdXN0IGRvaW5nXG4gIC8vIGAuY2RrLWhpZ2gtY29udHJhc3QteHh4ICN7Jn1gIHdpbGwgb25seSBhcHBseSB0aGUgcGFyZW50IHNlbGVjdG9yIHRvIHRoZSBmaXJzdCBwYXJ0IG9mIHRoZVxuICAvLyBjb250ZXh0LiBXZSBhZGRyZXNzIHRoaXMgYnkgbmVzdGluZyB0aGUgc2VsZWN0b3IgY29udGV4dCB1bmRlciAuY2RrLWhpZ2gtY29udHJhc3QuXG4gIEBhdC1yb290IHtcbiAgICAkc2VsZWN0b3ItY29udGV4dDogI3smfTtcblxuICAgIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29uJykge1xuICAgICAgLy8gTm90ZSB0aGF0IGlmIHRoaXMgc2VsZWN0b3IgaXMgdXBkYXRlZCwgdGhlIHNhbWUgY2hhbmdlIGhhcyB0byBiZSBtYWRlIGluc2lkZVxuICAgICAgLy8gYF9vdmVybGF5LnNjc3NgIHdoaWNoIGNhbid0IGRlcGVuZCBvbiB0aGlzIG1peGluIGR1ZSB0byBzb21lIGluZnJhc3RydWN0dXJlIGxpbWl0YXRpb25zLlxuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0ge1xuICAgICAgICBAaW5jbHVkZSBfb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29mZicpIHtcbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC0jeyR0YXJnZXR9IDpob3N0IHtcbiAgICAgICAgQGluY2x1ZGUgX29wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIFdlIHdhbnQgb3ZlcmxheXMgdG8gYWx3YXlzIGFwcGVhciBvdmVyIHVzZXIgY29udGVudCwgc28gc2V0IGEgYmFzZWxpbmVcbi8vIHZlcnkgaGlnaCB6LWluZGV4IGZvciB0aGUgb3ZlcmxheSBjb250YWluZXIsIHdoaWNoIGlzIHdoZXJlIHdlIGNyZWF0ZSB0aGUgbmV3XG4vLyBzdGFja2luZyBjb250ZXh0IGZvciBhbGwgb3ZlcmxheXMuXG4kb3ZlcmxheS1jb250YWluZXItei1pbmRleDogMTAwMCAhZGVmYXVsdDtcbiRvdmVybGF5LXotaW5kZXg6IDEwMDAgIWRlZmF1bHQ7XG4kb3ZlcmxheS1iYWNrZHJvcC16LWluZGV4OiAxMDAwICFkZWZhdWx0O1xuXG4vLyBCYWNrZ3JvdW5kIGNvbG9yIGZvciBhbGwgb2YgdGhlIGJhY2tkcm9wc1xuJG92ZXJsYXktYmFja2Ryb3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMikgIWRlZmF1bHQ7XG5cbi8vIERlZmF1bHQgYmFja2Ryb3AgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3dpZnQtZWFzZS1vdXQuXG4kYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuLy8vIEVtaXRzIHN0cnVjdHVyYWwgc3R5bGVzIHJlcXVpcmVkIGZvciBjZGsvb3ZlcmxheSB0byBmdW5jdGlvbi5cbkBtaXhpbiBvdmVybGF5KCkge1xuICAuY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIC8vIERpc2FibGUgZXZlbnRzIGZyb20gYmVpbmcgY2FwdHVyZWQgb24gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgLy8gVGhlIGNvbnRhaW5lciBzaG91bGQgYmUgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0LlxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8vIFRoZSBvdmVybGF5LWNvbnRhaW5lciBpcyBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCBjb250YWlucyBhbGwgaW5kaXZpZHVhbCBvdmVybGF5cy5cbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6ICRvdmVybGF5LWNvbnRhaW5lci16LWluZGV4O1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IHdoZW4gaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZCBub2Rlcy4gVGhpcyBkb2Vzbid0XG4gICAgICAvLyBpbmNsdWRlIG92ZXJsYXlzIHRoYXQgaGF2ZSBiZWVuIGRldGFjaGVkLCByYXRoZXIgdGhhbiBkaXNwb3NlZC5cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgdXNlIGFuIGV4dHJhIHdyYXBwZXIgZWxlbWVudCBpbiBvcmRlciB0byB1c2UgbWFrZSB0aGUgb3ZlcmxheSBpdHNlbGYgYSBmbGV4IGl0ZW0uXG4gIC8vIFRoaXMgbWFrZXMgY2VudGVyaW5nIHRoZSBvdmVybGF5IGVhc3kgd2l0aG91dCBydW5uaW5nIGludG8gdGhlIHN1YnBpeGVsIHJlbmRlcmluZ1xuICAvLyBwcm9ibGVtcyB0aWVkIHRvIHVzaW5nIGB0cmFuc2Zvcm1gIGFuZCB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIG90aGVyIHBvc2l0aW9uXG4gIC8vIHN0cmF0ZWdpZXMuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJG92ZXJsYXktei1pbmRleDtcbiAgfVxuXG4gIC8vIEEgc2luZ2xlIG92ZXJsYXkgcGFuZS5cbiAgLmNkay1vdmVybGF5LXBhbmUge1xuICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IGZvciB0aGlzIG9uZSB0byBzdGFydCBvZmYgYGFic29sdXRlYCxcbiAgICAvLyBpbiBvcmRlciBmb3IgdXMgdG8gYmUgYWJsZSB0byBtZWFzdXJlIGl0IGNvcnJlY3RseS5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB6LWluZGV4OiAkb3ZlcmxheS16LWluZGV4O1xuXG4gICAgLy8gRm9yIGNvbm5lY3RlZC1wb3NpdGlvbiBvdmVybGF5cywgd2Ugc2V0IGBkaXNwbGF5OiBmbGV4YCBpblxuICAgIC8vIG9yZGVyIHRvIGZvcmNlIGBtYXgtd2lkdGhgIGFuZCBgbWF4LWhlaWdodGAgdG8gdGFrZSBlZmZlY3QuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gICAgLy8gVE9ETyhqZWxib3Vybik6IHJldXNlIHNpZGVuYXYgZnVsbHNjcmVlbiBtaXhpbi5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgei1pbmRleDogJG92ZXJsYXktYmFja2Ryb3Atei1pbmRleDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbiAkYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC8vIE5vdGUgdGhhdCB3ZSBjYW4ndCBpbXBvcnQgYW5kIHVzZSB0aGUgYGhpZ2gtY29udHJhc3RgIG1peGluIGZyb20gYF9hMTF5LnNjc3NgLCBiZWNhdXNlXG4gICAgICAvLyB0aGlzIGZpbGUgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIHRvcC1sZXZlbCBgY2RrYCBwYWNrYWdlIHdoZW4gcHV0dGluZyB0b2dldGhlciB0aGUgZmlsZXNcbiAgICAgIC8vIGZvciBucG0uIEFueSByZWxhdGl2ZSBpbXBvcnQgcGF0aHMgd2UgdXNlIGhlcmUgd2lsbCBiZWNvbWUgaW52YWxpZCBvbmNlIHRoZSBmaWxlIGlzIGNvcGllZC5cbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgJiB7XG4gICAgICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmdiYSBiYWNrZ3JvdW5kIHdpbGwgYmVjb21lIHNvbGlkXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrIHRvIG1ha2luZyBpdCBvcGFxdWUgdXNpbmcgYG9wYWNpdHlgLlxuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICRvdmVybGF5LWJhY2tkcm9wLWNvbG9yO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wIHtcbiAgICAvLyBEZWZpbmUgYSB0cmFuc2l0aW9uIG9uIHRoZSB2aXNpYmlsaXR5IHNvIHRoYXQgdGhlIGB0cmFuc2l0aW9uZW5kYCBldmVudCBjYW4gZmlyZSBpbW1lZGlhdGVseS5cbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDFtcyBsaW5lYXIsIG9wYWNpdHkgMW1zIGxpbmVhcjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMTtcblxuICAgIC8vIE5vdGU6IGFzIG9mIEZpcmVmb3ggNTcsIGhhdmluZyB0aGUgYmFja2Ryb3AgYmUgYGJhY2tncm91bmQ6IG5vbmVgIHdpbGwgcHJldmVudCBpdCBmcm9tXG4gICAgLy8gY2FwdHVyaW5nIHRoZSB1c2VyJ3MgbW91c2Ugc2Nyb2xsIGV2ZW50cy4gU2luY2Ugd2UgYWxzbyBjYW4ndCB1c2Ugc29tZXRoaW5nIGxpa2VcbiAgICAvLyBgcmdiYSgwLCAwLCAwLCAwKWAsIHdlIHdvcmsgYXJvdW5kIHRoZSBpbmNvbnNpc3RlbmN5IGJ5IG5vdCBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGF0XG4gICAgLy8gYWxsIGFuZCB1c2luZyBgb3BhY2l0eWAgdG8gbWFrZSB0aGUgZWxlbWVudCB0cmFuc3BhcmVudC5cbiAgICAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wLW5vb3AtYW5pbWF0aW9uIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgLy8gT3ZlcmxheSBwYXJlbnQgZWxlbWVudCB1c2VkIHdpdGggdGhlIGNvbm5lY3RlZCBwb3NpdGlvbiBzdHJhdGVneS4gVXNlZCB0byBjb25zdHJhaW4gdGhlXG4gIC8vIG92ZXJsYXkgZWxlbWVudCdzIHNpemUgdG8gZml0IHdpdGhpbiB0aGUgdmlld3BvcnQuXG4gIC5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJG92ZXJsYXktei1pbmRleDtcblxuICAgIC8vIFdlIHVzZSBgZGlzcGxheTogZmxleGAgb24gdGhpcyBlbGVtZW50IGV4Y2x1c2l2ZWx5IGZvciBjZW50ZXJpbmcgY29ubmVjdGVkIG92ZXJsYXlzLlxuICAgIC8vIFdoZW4gKm5vdCogY2VudGVyaW5nLCBhIHRvcC9sZWZ0L2JvdHRvbS9yaWdodCB3aWxsIGJlIHNldCB3aGljaCBvdmVycmlkZXMgdGhlIG5vcm1hbFxuICAgIC8vIGZsZXggbGF5b3V0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBXZSB1c2UgdGhlIGBjb2x1bW5gIGRpcmVjdGlvbiBoZXJlIHRvIGF2b2lkIHNvbWUgZmxleGJveCBpc3N1ZXMgaW4gRWRnZVxuICAgIC8vIHdoZW4gdXNpbmcgdGhlIFwiZ3JvdyBhZnRlciBvcGVuXCIgb3B0aW9ucy5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLy8gQWRkIHNvbWUgZGltZW5zaW9ucyBzbyB0aGUgZWxlbWVudCBoYXMgYW4gYGlubmVyVGV4dGAgd2hpY2ggc29tZSBwZW9wbGUgZGVwZW5kIG9uIGluIHRlc3RzLlxuICAgIG1pbi13aWR0aDogMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiBkaXNhYmxpbmcgZ2xvYmFsIHNjcm9sbGluZy5cbiAgLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgdGhlIGNvbnRlbnQgbm90IHRvIGxvc2UgaXRzIHdpZHRoLiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgMTAwJSwgaW5zdGVhZCBvZlxuICAgIC8vIDEwMHZ3LCBiZWNhdXNlIDEwMHZ3IGluY2x1ZGVzIHRoZSB3aWR0aCBwbHVzIHRoZSBzY3JvbGxiYXIsIHdoZXJlYXMgMTAwJSBpcyB0aGUgd2lkdGhcbiAgICAvLyB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgd2UgbWFkZSBpdCBgZml4ZWRgLlxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gTm90ZTogdGhpcyB3aWxsIGFsd2F5cyBhZGQgYSBzY3JvbGxiYXIgdG8gd2hhdGV2ZXIgZWxlbWVudCBpdCBpcyBvbiwgd2hpY2ggY2FuXG4gICAgLy8gcG90ZW50aWFsbHkgcmVzdWx0IGluIGRvdWJsZSBzY3JvbGxiYXJzLiBJdCBzaG91bGRuJ3QgYmUgYW4gaXNzdWUsIGJlY2F1c2Ugd2Ugd29uJ3RcbiAgICAvLyBibG9jayBzY3JvbGxpbmcgb24gYSBwYWdlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2Nyb2xsYmFyIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cbiIsIi8vIFN0cnVjdHVyYWwgc3R5bGVzIGZvciB0aGUgYXV0b3NpemUgdGV4dCBmaWVsZHMuXG5AbWl4aW4gdGV4dC1maWVsZC1hdXRvc2l6ZSgpIHtcbiAgLy8gUmVtb3ZlIHRoZSByZXNpemUgaGFuZGxlIG9uIGF1dG9zaXppbmcgdGV4dGFyZWFzLCBiZWNhdXNlIHdoYXRldmVyIGhlaWdodFxuICAvLyB0aGUgdXNlciByZXNpemVkIHRvIHdpbGwgYmUgb3ZlcndyaXR0ZW4gb25jZSB0aGV5IHN0YXJ0IHR5cGluZyBhZ2Fpbi5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cblxuICAvLyBUaGlzIGNsYXNzIGlzIHRlbXBvcmFyaWx5IGFwcGxpZWQgdG8gdGhlIHRleHRhcmVhIHdoZW4gaXQgaXMgYmVpbmcgbWVhc3VyZWQuIEl0IGlzIGltbWVkaWF0ZWx5XG4gIC8vIHJlbW92ZWQgd2hlbiBtZWFzdXJpbmcgaXMgY29tcGxldGUuIFdlIHVzZSBgIWltcG9ydGFudGAgcnVsZXMgaGVyZSB0byBtYWtlIHN1cmUgdXNlci1zcGVjaWZpZWRcbiAgLy8gcnVsZXMgZG8gbm90IGludGVyZmVyZSB3aXRoIHRoZSBtZWFzdXJlbWVudC5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZyB7XG4gICAgQGluY2x1ZGUgX2F1dG9zaXplLW1lYXN1cmluZy1iYXNlO1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIC8vIFNpbWlsYXIgdG8gdGhlIGBjZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nYCBjbGFzcywgYnV0IG9ubHkgYXBwbGllZCBvbiBGaXJlZm94LiBXZSBuZWVkXG4gIC8vIHRvIHVzZSB0aGlzIGNsYXNzLCBiZWNhdXNlIEZpcmVmb3ggaGFzIGEgYnVnIHdoZXJlIGNoYW5naW5nIHRoZSBgb3ZlcmZsb3dgIGJyZWFrcyB0aGUgdXNlcidzXG4gIC8vIGFiaWxpdHkgdG8gdW5kby9yZWRvIHdoYXQgdGhleSB3ZXJlIHR5cGluZyAoc2VlICMxNjYyOSkuIFRoaXMgY2xhc3MgaXMgb25seSBzY29wZWQgdG8gRmlyZWZveCxcbiAgLy8gYmVjYXVzZSB0aGUgbWVhc3VyZW1lbnRzIHRoZXJlIGRvbid0IHNlZW0gdG8gYmUgYWZmZWN0ZWQgYnkgdGhlIGBoZWlnaHQ6IDBgLCB3aGVyZWFzIG9uIG90aGVyXG4gIC8vIGJyb3dzZXJzIHRoZXkgYXJlLCBlLmcuIENocm9tZSBkZXRlY3RzIGxvbmdlciB0ZXh0IGFuZCBJRSBkb2VzJ3QgcmVzaXplIGJhY2sgdG8gbm9ybWFsLlxuICAvLyBJZGVudGljYWwgaXNzdWUgcmVwb3J0OiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00NDg3ODRcbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1maXJlZm94IHtcbiAgICBAaW5jbHVkZSBfYXV0b3NpemUtbWVhc3VyaW5nLWJhc2U7XG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBlbmFibGUgbW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSBvZiB0ZXh0IGZpZWxkcy5cbkBtaXhpbiB0ZXh0LWZpZWxkLWF1dG9maWxsKCkge1xuICAvLyBLZXlmcmFtZXMgdGhhdCBhcHBseSBubyBzdHlsZXMsIGJ1dCBhbGxvdyB1cyB0byBtb25pdG9yIHdoZW4gYW4gdGV4dCBmaWVsZCBiZWNvbWVzIGF1dG9maWxsZWRcbiAgLy8gYnkgd2F0Y2hpbmcgZm9yIHRoZSBhbmltYXRpb24gZXZlbnRzIHRoYXQgYXJlIGZpcmVkIHdoZW4gdGhleSBzdGFydC4gTm90ZTogdGhlIC8qISovIGNvbW1lbnQgaXNcbiAgLy8gbmVlZGVkIHRvIHByZXZlbnQgTGliU2FzcyBmcm9tIHN0cmlwcGluZyB0aGUga2V5ZnJhbWVzIG91dC5cbiAgLy8gQmFzZWQgb246IGh0dHBzOi8vbWVkaXVtLmNvbS9AYnJ1bm4vZGV0ZWN0aW5nLWF1dG9maWxsZWQtZmllbGRzLWluLWphdmFzY3JpcHQtYWVkNTk4ZDI1ZGE3XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgey8qISovfVxuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7LyohKi99XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSwgb3IgdGhlIGFuaW1hdGlvbnN0YXJ0IGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXM7XG4gIH1cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICAgIC8vIFNpbmNlIENocm9tZSA4MCB3ZSBuZWVkIGEgMW1zIGRlbGF5LCBvciB0aGUgYW5pbWF0aW9uc3RhcnQgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCAwcyAxbXM7XG4gIH1cbn1cblxuQG1peGluIF9hdXRvc2l6ZS1tZWFzdXJpbmctYmFzZSB7XG4gIC8vIEhhdmluZyAycHggdG9wIGFuZCBib3R0b20gcGFkZGluZyBzZWVtcyB0byBmaXggYSBidWcgd2hlcmUgQ2hyb21lIGdldHMgYW4gaW5jb3JyZWN0XG4gIC8vIG1lYXN1cmVtZW50LiBXZSBqdXN0IGhhdmUgdG8gYWNjb3VudCBmb3IgaXQgbGF0ZXIgYW5kIHN1YnRyYWN0IGl0IG9mZiB0aGUgZmluYWwgcmVzdWx0LlxuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xufVxuXG4vLyBVc2VkIHRvIGdlbmVyYXRlIFVJRHMgZm9yIGtleWZyYW1lcyB1c2VkIHRvIGNoYW5nZSB0aGUgdGV4dCBmaWVsZCBhdXRvZmlsbCBzdHlsZXMuXG4kYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6IDA7XG5cbi8vIE1peGluIHVzZWQgdG8gYXBwbHkgY3VzdG9tIGJhY2tncm91bmQgYW5kIGZvcmVncm91bmQgY29sb3JzIHRvIGFuIGF1dG9maWxsZWQgdGV4dCBmaWVsZC5cbi8vIEJhc2VkIG9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzgxNTQ5L1xuLy8gcmVtb3ZpbmctaW5wdXQtYmFja2dyb3VuZC1jb2xvdXItZm9yLWNocm9tZS1hdXRvY29tcGxldGUjYW5zd2VyLTM3NDMyMjYwXG5AbWl4aW4gdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvcigkYmFja2dyb3VuZCwgJGZvcmVncm91bmQ6JycpIHtcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0ge1xuICAgIHRvIHtcbiAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgICAgQGlmICRmb3JlZ3JvdW5kICE9ICcnIHsgY29sb3I6ICRmb3JlZ3JvdW5kOyB9XG4gICAgfVxuICB9XG5cbiAgJjotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSBib3RoO1xuICB9XG5cbiAgJi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXkgZm9yIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0LCBvciB0aGUgYW5pbWF0aW9uc3RhcnRcbiAgICAvLyBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zLFxuICAgICAgICAgICAgICAgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IGJvdGg7XG4gIH1cblxuICAkYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6ICRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudCArIDEgIWdsb2JhbDtcbn1cblxuLy8gQGRlcHJlY2F0ZWQgVXNlIGBhdXRvc2l6ZWAgYW5kIGBhdXRvZmlsbGAgaW5zdGVhZC5cbkBtaXhpbiB0ZXh0LWZpZWxkIHtcbiAgQGluY2x1ZGUgdGV4dC1maWVsZC1hdXRvc2l6ZSgpO1xuICBAaW5jbHVkZSB0ZXh0LWZpZWxkLWF1dG9maWxsKCk7XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnQGFuZ3VsYXIvY2RrJztcbkB1c2UgJy4uL3N0eWxlL2xheW91dC1jb21tb24nO1xuQHVzZSAnLi4vdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL3RoZW1pbmcvaW5zcGVjdGlvbic7XG5cbi8vIFByaXZhdGUgc2FzcyB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIHVzZWQgYXMgcmVmZXJlbmNlIHRocm91Z2hvdXQgY29tcG9uZW50IHN0eWxlc2hlZXRzLlxuJGRlZmF1bHQtYm9yZGVyLXdpZHRoOiAzcHg7XG4kZGVmYXVsdC1ib3JkZXItc3R5bGU6IHNvbGlkO1xuJGRlZmF1bHQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiRkZWZhdWx0LWJvcmRlci1yYWRpdXM6IDRweDtcblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIHRoZSBmb2N1cyBpbmRpY2F0b3Igc3RydWN0dXJhbCBzdHlsZXMuXG5AbWl4aW4gc3RydWN0dXJhbC1zdHlsaW5nKCRwcmVmaXgpIHtcbiAgLiN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgQGluY2x1ZGUgbGF5b3V0LWNvbW1vbi5maWxsKCk7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBkaXNwbGF5OiB2YXIoLS0jeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1kaXNwbGF5LCBub25lKTsgLy8gSGlkZSB0aGUgaW5kaWNhdG9yIGJ5IGRlZmF1bHQuXG4gICAgICBib3JkZXI6IHZhcihcbiAgICAgICAgICAtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci13aWR0aCxcbiAgICAgICAgICAjeyRkZWZhdWx0LWJvcmRlci13aWR0aH1cbiAgICAgICAgKVxuICAgICAgICB2YXIoXG4gICAgICAgICAgLS0jeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItc3R5bGUsXG4gICAgICAgICAgI3skZGVmYXVsdC1ib3JkZXItc3R5bGV9XG4gICAgICAgIClcbiAgICAgICAgdmFyKFxuICAgICAgICAgIC0tI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yLFxuICAgICAgICAgICN7JGRlZmF1bHQtYm9yZGVyLWNvbG9yfVxuICAgICAgICApO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKFxuICAgICAgICAtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXMsXG4gICAgICAgICN7JGRlZmF1bHQtYm9yZGVyLXJhZGl1c31cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQnkgZGVmYXVsdCwgcmVuZGVyIHRoZSBmb2N1cyBpbmRpY2F0b3Igd2hlbiB0aGUgZm9jdXMgaW5kaWNhdG9yIGhvc3QgZWxlbWVudCB0YWtlcyBmb2N1cy5cbiAgICAvLyBEZWZpbmluZyBhIHBzZXVkbyBlbGVtZW50J3MgY29udGVudCB3aWxsIGNhdXNlIGl0IHRvIHJlbmRlci5cbiAgICAmOmZvY3VzOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgfVxuICB9XG5cbiAgLy8gRW5hYmxlIHRoZSBpbmRpY2F0b3IgaW4gaGlnaCBjb250cmFzdCBtb2RlLlxuICBAaW5jbHVkZSBjZGsuaGlnaC1jb250cmFzdChhY3RpdmUsIG9mZikge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChkaXNwbGF5OiBibG9jayksICRwcmVmaXgpO1xuICB9XG59XG5cbi8vIEdlbmVyYXRlcyBDU1MgdmFyaWFibGUgZGVjbGFyYXRpb25zIGZyb20gYSBtYXAuXG5AbWl4aW4gX291dHB1dC12YXJpYWJsZXMoJG1hcCkge1xuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJG1hcCB7XG4gICAgQGlmICgkdmFsdWUpIHtcbiAgICAgIC0tI3ska2V5fTogI3skdmFsdWV9O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNaXhpbiB0aGF0IGRlZHVwcyBDU1MgdmFyaWFibGVzIGZvciB0aGUgc3Ryb25nLWZvY3VzLWluZGljYXRvcnMgbWl4aW4uXG5AbWl4aW4gY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZywgJHByZWZpeCkge1xuICAkYm9yZGVyLXN0eWxlOiBtYXAuZ2V0KCRjb25maWcsIGJvcmRlci1zdHlsZSk7XG4gICRib3JkZXItd2lkdGg6IG1hcC5nZXQoJGNvbmZpZywgYm9yZGVyLXdpZHRoKTtcbiAgJGJvcmRlci1yYWRpdXM6IG1hcC5nZXQoJGNvbmZpZywgYm9yZGVyLXJhZGl1cyk7XG4gICRib3JkZXItY29sb3I6IG1hcC5nZXQoJGNvbmZpZywgYm9yZGVyLWNvbG9yKTtcbiAgJGRpc3BsYXk6IG1hcC5nZXQoJGNvbmZpZywgZGlzcGxheSk7XG4gICRtYXA6IChcbiAgICAnI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXN0eWxlJzogJGJvcmRlci1zdHlsZSxcbiAgICAnI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoJzogJGJvcmRlci13aWR0aCxcbiAgICAnI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1cyc6ICRib3JkZXItcmFkaXVzLFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItY29sb3InOiAkYm9yZGVyLWNvbG9yLFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1kaXNwbGF5JzogJGRpc3BsYXksXG4gICk7XG5cbiAgQGlmICgmKSB7XG4gICAgQGluY2x1ZGUgX291dHB1dC12YXJpYWJsZXMoJG1hcCk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC8vIFdlIHVzZSBgaHRtbGAgaGVyZSBpbnN0ZWFkIG9mIGA6cm9vdGAsIGJlY2F1c2UgdGhlXG4gICAgLy8gbGF0dGVyIGNhdXNlcyBzb21lIGlzc3VlcyB3aXRoIGludGVybmFsIHRvb2xpbmcuXG4gICAgaHRtbCB7XG4gICAgICBAaW5jbHVkZSBfb3V0cHV0LXZhcmlhYmxlcygkbWFwKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzKCRjb25maWc6ICgpKSB7XG4gIC8vIERlZmF1bHQgZm9jdXMgaW5kaWNhdG9yIGNvbmZpZy5cbiAgJGRlZmF1bHQtY29uZmlnOiAoXG4gICAgICBib3JkZXItY29sb3I6IGJsYWNrLFxuICAgICAgZGlzcGxheTogYmxvY2ssXG4gICk7XG5cbiAgLy8gTWVyZ2UgZGVmYXVsdCBjb25maWcgd2l0aCB1c2VyIGNvbmZpZy5cbiAgJGNvbmZpZzogbWFwLm1lcmdlKCRkZWZhdWx0LWNvbmZpZywgJGNvbmZpZyk7XG5cbiAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZywgJ21hdCcpO1xufVxuXG5AbWl4aW4gbWRjLXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzKCRjb25maWc6ICgpKSB7XG4gIC8vIERlZmF1bHQgZm9jdXMgaW5kaWNhdG9yIGNvbmZpZy5cbiAgJGRlZmF1bHQtY29uZmlnOiAoXG4gICAgICBib3JkZXItY29sb3I6IGJsYWNrLFxuICAgICAgZGlzcGxheTogYmxvY2ssXG4gICk7XG5cbiAgLy8gTWVyZ2UgZGVmYXVsdCBjb25maWcgd2l0aCB1c2VyIGNvbmZpZy5cbiAgJGNvbmZpZzogbWFwLm1lcmdlKCRkZWZhdWx0LWNvbmZpZywgJGNvbmZpZyk7XG5cbiAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZywgJ21hdC1tZGMnKTtcbn1cblxuQG1peGluIHN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLWNvbG9yKCR0aGVtZS1vci1jb2xvcikge1xuICBAaWYgbWV0YS50eXBlLW9mKCR0aGVtZS1vci1jb2xvcikgPT0gJ2NvbG9yJyB7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKFxuICAgICAgICBib3JkZXItY29sb3I6ICR0aGVtZS1vci1jb2xvclxuICAgICksICdtYXQnKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgJGJvcmRlci1jb2xvcjogaW5zcGVjdGlvbi5nZXQtdGhlbWUtY29sb3IoJHRoZW1lLW9yLWNvbG9yLCBwcmltYXJ5KTtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvclxuICAgICksICdtYXQnKTtcbiAgfVxufVxuXG5AbWl4aW4gc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtdGhlbWUoJHRoZW1lLW9yLWNvbG9yKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHRoZW1lLW9yLWNvbG9yKSA9PSAnY29sb3InIHtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLW9yLWNvbG9yXG4gICAgKSwgJ21hdCcpO1xuICB9XG4gIEBlbHNlIHtcbiAgICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUtb3ItY29sb3IsICdtYXQtZm9jdXMtaW5kaWNhdG9ycycpIHtcbiAgICAgIEBpZiBpbnNwZWN0aW9uLnRoZW1lLWhhcygkdGhlbWUtb3ItY29sb3IsIGNvbG9yKSB7XG4gICAgICAgIEBpbmNsdWRlIHN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLWNvbG9yKCR0aGVtZS1vci1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHRoZW1lLW9yLWNvbG9yKSA9PSAnY29sb3InIHtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLW9yLWNvbG9yXG4gICAgKSwgJ21hdC1tZGMnKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgJGJvcmRlci1jb2xvcjogaW5zcGVjdGlvbi5nZXQtdGhlbWUtY29sb3IoJHRoZW1lLW9yLWNvbG9yLCBwcmltYXJ5KTtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvclxuICAgICksICdtYXQtbWRjJyk7XG4gIH1cbn1cblxuQG1peGluIG1kYy1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy10aGVtZSgkdGhlbWUtb3ItY29sb3IpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdGhlbWUtb3ItY29sb3IpID09ICdjb2xvcicge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtb3ItY29sb3JcbiAgICApLCAnbWF0LW1kYycpO1xuICB9XG4gIEBlbHNlIHtcbiAgICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcyhcbiAgICAgICAgJHRoZW1lLW9yLWNvbG9yLCAnbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3JzJykge1xuICAgICAgQGlmIGluc3BlY3Rpb24udGhlbWUtaGFzKCR0aGVtZS1vci1jb2xvciwgY29sb3IpIHtcbiAgICAgICAgQGluY2x1ZGUgbWRjLXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLWNvbG9yKCR0aGVtZS1vci1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGlzIG1peGluIGVuc3VyZXMgYW4gZWxlbWVudCBzcGFucyB0byBmaWxsIHRoZSBuZWFyZXN0IGFuY2VzdG9yIHdpdGggZGVmaW5lZCBwb3NpdGlvbmluZy5cbkBtaXhpbiBmaWxsIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iLCJAdXNlICdAYW5ndWxhci9jZGsnO1xuQHVzZSAnLi90b2tlbnMvbTIvbWF0L2FwcCcgYXMgdG9rZW5zLW1hdC1hcHA7XG5AdXNlICcuL3Rva2Vucy90b2tlbi11dGlscyc7XG5AdXNlICcuL3JpcHBsZS9yaXBwbGUnO1xuQHVzZSAnLi9mb2N1cy1pbmRpY2F0b3JzL3ByaXZhdGUnO1xuQHVzZSAnLi9tZGMtaGVscGVycy9tZGMtaGVscGVycyc7XG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgYXJlIG5vdCB0aGVtZS1kZXBlbmRlbnQuXG5AbWl4aW4gY29yZSgpIHtcbiAgQGluY2x1ZGUgcmlwcGxlLnJpcHBsZSgpO1xuICBAaW5jbHVkZSBjZGsuYTExeS12aXN1YWxseS1oaWRkZW4oKTtcbiAgQGluY2x1ZGUgY2RrLm92ZXJsYXkoKTtcbiAgQGluY2x1ZGUgY2RrLnRleHQtZmllbGQtYXV0b3NpemUoKTtcbiAgQGluY2x1ZGUgY2RrLnRleHQtZmllbGQtYXV0b2ZpbGwoKTtcbiAgQGluY2x1ZGUgcHJpdmF0ZS5zdHJ1Y3R1cmFsLXN0eWxpbmcoJ21hdCcpO1xuICBAaW5jbHVkZSBwcml2YXRlLnN0cnVjdHVyYWwtc3R5bGluZygnbWF0LW1kYycpO1xuXG4gIC8vIFdyYXBwZXIgZWxlbWVudCB0aGF0IHByb3ZpZGVzIHRoZSB0aGVtZSBiYWNrZ3JvdW5kIHdoZW4gdGhlXG4gIC8vIHVzZXIncyBjb250ZW50IGlzbid0IGluc2lkZSBvZiBhIGBtYXQtc2lkZW5hdi1jb250YWluZXJgLlxuICBAYXQtcm9vdCB7XG4gICAgLm1hdC1hcHAtYmFja2dyb3VuZCB7XG4gICAgICBAaW5jbHVkZSBtZGMtaGVscGVycy5kaXNhYmxlLW1kYy1mYWxsYmFjay1kZWNsYXJhdGlvbnMge1xuICAgICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy51c2UtdG9rZW5zKHRva2Vucy1tYXQtYXBwLiRwcmVmaXgsIHRva2Vucy1tYXQtYXBwLmdldC10b2tlbi1zbG90cygpKSB7XG4gICAgICAgICAgLy8gTm90ZTogd2UgbmVlZCB0byBlbWl0IGZhbGxiYWNrIHZhbHVlcyBoZXJlIHRvIGF2b2lkIGVycm9ycyBpbiBpbnRlcm5hbCBidWlsZHMuXG4gICAgICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXNsb3QoYmFja2dyb3VuZC1jb2xvciwgYmFja2dyb3VuZC1jb2xvciwgdHJhbnNwYXJlbnQpO1xuICAgICAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi1zbG90KGNvbG9yLCB0ZXh0LWNvbG9yLCBpbmhlcml0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIENvcHlyaWdodCAyMDIwIEdvb2dsZSBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cbi8vXG5cbkB1c2UgJ3Nhc3M6bGlzdCc7XG5AdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnLi9nc3MnO1xuXG4vLy8gV2hlbiB0cnVlLCBhZGQgYW4gYWRkaXRpb25hbCBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbiBiZWZvcmUgZGVjbGFyYXRpb25zXG4vLy8gdGhhdCB1c2UgYWR2YW5jZWQgZmVhdHVyZXMgc3VjaCBhcyBjdXN0b20gcHJvcGVydGllcyBvciBDU1MgZnVuY3Rpb25zLiBUaGlzXG4vLy8gYWRkcyBmYWxsYmFjayBzdXBwb3J0IGZvciBvbGRlciBicm93c2VycyBzdWNoIGFzIElFMTEgdGhhdCBkbyBub3Qgc3VwcG9ydFxuLy8vIHRoZXNlIGZlYXR1cmVzIGF0IHRoZSBjb3N0IG9mIGFkZGl0aW9uYWwgQ1NTLiBTZXQgdGhpcyB2YXJpYWJsZSB0byBmYWxzZSB0b1xuLy8vIGRpc2FibGUgZ2VuZXJhdGluZyBmYWxsYmFjayBkZWNsYXJhdGlvbnMuXG4kZW5hYmxlLWZhbGxiYWNrLWRlY2xhcmF0aW9uczogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vIFdyaXRlcyBhIENTUyBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbi4gVGhpcyBtaXhpbiBpcyB1c2VkIHRocm91Z2hvdXQgdGhlXG4vLy8gdGhlbWUgcGFja2FnZSBmb3IgY29uc2lzdGVuY3kgZm9yIGR5bmFtaWNhbGx5IHNldHRpbmcgQ1NTIHByb3BlcnR5IHZhbHVlcy5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gbWF5IG9wdGlvbmFsbHkgdGFrZSBhIGZhbGxiYWNrIHZhbHVlLiBGb3IgYWR2YW5jZWQgZmVhdHVyZXMgc3VjaFxuLy8vIGFzIGN1c3RvbSBwcm9wZXJ0aWVzIG9yIENTUyBmdW5jdGlvbnMgbGlrZSBtaW4gYW5kIG1heCwgYSBmYWxsYmFjayB2YWx1ZSBpc1xuLy8vIHJlY29tbWVuZGVkIHRvIHN1cHBvcnQgb2xkZXIgYnJvd3NlcnMuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHByb3BlcnR5IC0gVGhlIENTUyBwcm9wZXJ0eSBvZiB0aGUgZGVjbGFyYXRpb24uXG4vLy8gQHBhcmFtIHsqfSAkdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIENTUyBkZWNsYXJhdGlvbi4gVGhlIHZhbHVlIHNob3VsZCBiZVxuLy8vICAgICByZXNvbHZlZCBieSBvdGhlciB0aGVtZSBmdW5jdGlvbnMgZmlyc3QgKGkuZS4gY3VzdG9tIHByb3BlcnR5IE1hcHMgYW5kXG4vLy8gICAgIE1hdGVyaWFsIHRoZW1lIGtleXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBtaXhpbikuIElmIHRoZSB2YWx1ZSBpc1xuLy8vICAgICBudWxsLCBubyBkZWNsYXJhdGlvbnMgd2lsbCBiZSBlbWl0dGVkLlxuLy8vIEBwYXJhbSB7Kn0gJGZhbGxiYWNrIC0gQW4gb3B0aW9uYWwgZmFsbGJhY2sgdmFsdWUgZm9yIG9sZGVyIGJyb3dzZXJzLiBJZlxuLy8vICAgICBwcm92aWRlZCwgYSBzZWNvbmQgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24gd2lsbCBiZSBhZGRlZCBiZWZvcmUgdGhlXG4vLy8gICAgIG1haW4gcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24uXG4vLy8gQHBhcmFtIHtNYXB9ICRnc3MgLSBBbiBvcHRpb25hbCBNYXAgb2YgR1NTIGFubm90YXRpb25zIHRvIGFkZC5cbi8vLyBAcGFyYW0ge0Jvb2x9ICRpbXBvcnRhbnQgLSBJZiB0cnVlLCBhZGQgYCFpbXBvcnRhbnRgIHRvIHRoZSBkZWNsYXJhdGlvbi5cbkBtaXhpbiBkZWNsYXJhdGlvbihcbiAgJHByb3BlcnR5LFxuICAkdmFsdWUsXG4gICRmYWxsYmFjay12YWx1ZTogbnVsbCxcbiAgJGdzczogKCksXG4gICRpbXBvcnRhbnQ6IGZhbHNlXG4pIHtcbiAgLy8gTm9ybWFsbHkgc2V0dGluZyBhIG51bGwgdmFsdWUgdG8gYSBwcm9wZXJ0eSB3aWxsIG5vdCBlbWl0IENTUywgc28gbWl4aW5zXG4gIC8vIHdvdWxkbid0IG5lZWQgdG8gY2hlY2sgdGhpcy4gSG93ZXZlciwgU2FzcyB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoZVxuICAvLyBpbnRlcnBvbGF0ZWQgcHJvcGVydHkgaXMgYSBjdXN0b20gcHJvcGVydHkuXG4gIEBpZiAkdmFsdWUgIT0gbnVsbCB7XG4gICAgJGltcG9ydGFudC1ydWxlOiBpZigkaW1wb3J0YW50LCAnICFpbXBvcnRhbnQnLCAnJyk7XG5cbiAgICBAaWYgJGZhbGxiYWNrLXZhbHVlIGFuZCAkZW5hYmxlLWZhbGxiYWNrLWRlY2xhcmF0aW9ucyB7XG4gICAgICBAaW5jbHVkZSBnc3MuYW5ub3RhdGUoJGdzcyk7XG4gICAgICAjeyRwcm9wZXJ0eX06ICN7JGZhbGxiYWNrLXZhbHVlfSAjeyRpbXBvcnRhbnQtcnVsZX07XG5cbiAgICAgIC8vIEFkZCBAYWx0ZXJuYXRlIHRvIGFubm90YXRpb25zLlxuICAgICAgJGdzczogbWFwLm1lcmdlKFxuICAgICAgICAkZ3NzLFxuICAgICAgICAoXG4gICAgICAgICAgYWx0ZXJuYXRlOiB0cnVlLFxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGdzcy5hbm5vdGF0ZSgkZ3NzKTtcbiAgICAjeyRwcm9wZXJ0eX06ICN7JHZhbHVlfSN7JGltcG9ydGFudC1ydWxlfTtcbiAgfVxufVxuXG4vLy8gVW5wYWNrcyBzaG9ydGhhbmQgdmFsdWVzIGZvciBDU1MgcHJvcGVydGllcyAoaS5lLiBsaXN0cyBvZiAxLTMgdmFsdWVzKS5cbi8vLyBJZiBhIGxpc3Qgb2YgNCB2YWx1ZXMgaXMgZ2l2ZW4sIGl0IGlzIHJldHVybmVkIGFzLWlzLlxuLy8vXG4vLy8gRXhhbXBsZXM6XG4vLy9cbi8vLyB1bnBhY2stdmFsdWUoNHB4KSA9PiA0cHggNHB4IDRweCA0cHhcbi8vLyB1bnBhY2stdmFsdWUoNHB4IDJweCkgPT4gNHB4IDJweCA0cHggMnB4XG4vLy8gdW5wYWNrLXZhbHVlKDRweCAycHggMnB4KSA9PiA0cHggMnB4IDJweCAycHhcbi8vLyB1bnBhY2stdmFsdWUoNHB4IDJweCAwIDJweCkgPT4gNHB4IDJweCAwIDJweFxuLy8vXG4vLy8gQHBhcmFtIHtOdW1iZXIgfCBNYXAgfCBMaXN0fSAkdmFsdWUgLSBMaXN0IG9mIDEgdG8gNCB2YWx1ZSBudW1iZXJzLlxuLy8vIEByZXR1cm4ge0xpc3R9IGEgTGlzdCBvZiA0IHZhbHVlIG51bWJlcnMuXG5AZnVuY3Rpb24gdW5wYWNrLXZhbHVlKCR2YWx1ZSkge1xuICBAaWYgbWV0YS50eXBlLW9mKCR2YWx1ZSkgPT0gJ21hcCcgb3IgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAxIHtcbiAgICBAcmV0dXJuICR2YWx1ZSAkdmFsdWUgJHZhbHVlICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDQge1xuICAgIEByZXR1cm4gJHZhbHVlO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMyB7XG4gICAgQHJldHVybiBsaXN0Lm50aCgkdmFsdWUsIDEpIGxpc3QubnRoKCR2YWx1ZSwgMikgbGlzdC5udGgoJHZhbHVlLCAzKVxuICAgICAgbGlzdC5udGgoJHZhbHVlLCAyKTtcbiAgfSBAZWxzZSBpZiBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDIge1xuICAgIEByZXR1cm4gbGlzdC5udGgoJHZhbHVlLCAxKSBsaXN0Lm50aCgkdmFsdWUsIDIpIGxpc3QubnRoKCR2YWx1ZSwgMSlcbiAgICAgIGxpc3QubnRoKCR2YWx1ZSwgMik7XG4gIH1cblxuICBAZXJyb3IgXCJJbnZhbGlkIENTUyBwcm9wZXJ0eSB2YWx1ZTogJyN7JHZhbHVlfScgaXMgbW9yZSB0aGFuIDQgdmFsdWVzXCI7XG59XG4iLCJAdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ3Nhc3M6bGlzdCc7XG5AdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuXG4vLy8gSW5jbHVkZSBjb250ZW50IHVuZGVyIHRoZSBjdXJyZW50IHNlbGVjdG9yICgmKSBvciB0aGUgZG9jdW1lbnQgcm9vdCBpZiB0aGVyZSBpcyBubyBjdXJyZW50XG4vLy8gc2VsZWN0b3IuXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRyb290IFtodG1sXSBUaGUgZGVmYXVsdCByb290IHNlbGVjdG9yIHRvIHVzZSB3aGVuIHRoZXJlIGlzIG5vIGN1cnJlbnQgc2VsZWN0b3IuXG4vLy8gQG91dHB1dCBUaGUgZ2l2ZW4gY29udGVudCB1bmRlciB0aGUgY3VycmVudCBzZWxlY3Rvciwgb3Igcm9vdCBzZWxlY3RvciBpZiB0aGVyZSBpcyBubyBjdXJyZW50XG4vLy8gICAgIHNlbGVjdG9yLlxuLy8vIEBjb250ZW50IENvbnRlbnQgdG8gb3V0cHV0IHVuZGVyIHRoZSBjdXJyZW50IHNlbGVjdG9yLCBvciByb290IHNlbGVjdG9yIGlmIHRoZXJlIGlzIG5vIGN1cnJlbnRcbi8vLyAgICAgc2VsZWN0b3IuXG5AbWl4aW4gY3VycmVudC1zZWxlY3Rvci1vci1yb290KCRyb290OiBodG1sKSB7XG4gIEBpZiAmIHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAZWxzZSB7XG4gICAgI3skcm9vdH0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vLyBBIHZlcnNpb24gb2YgdGhlIHN0YW5kYXJkIGBtYXAubWVyZ2VgIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSB2YXJpYWJsZSBudW1iZXIgb2YgYXJndW1lbnRzLlxuLy8vIEVhY2ggYXJndW1lbnQgaXMgbWVyZ2VkIGludG8gdGhlIGZpbmFsIHJlc3VsdCBmcm9tIGxlZnQgdG8gcmlnaHQuXG4vLy8gQHBhcmFtIHtMaXN0fSAkbWFwcyBUaGUgbWFwcyB0byBjb21iaW5lIHdpdGggbWFwLm1lcmdlXG4vLy8gQHJldHVybiB7TWFwfSBUaGUgY29tYmluZWQgcmVzdWx0IG9mIHN1Y2Nlc3NpdmVseSBjYWxsaW5nIG1hcC5tZXJnZSB3aXRoIGVhY2ggcGFyYW1ldGVyLlxuQGZ1bmN0aW9uIG1lcmdlLWFsbCgkbWFwcy4uLikge1xuICAkcmVzdWx0OiAoKTtcbiAgQGVhY2ggJG1hcCBpbiAkbWFwcyB7XG4gICAgJHJlc3VsdDogbWFwLm1lcmdlKCRyZXN1bHQsICRtYXApO1xuICB9XG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuLy8vIEEgdmVyc2lvbiBvZiB0aGUgc3RhbmRhcmQgYG1hcC5kZWVwLW1lcmdlYCBmdW5jdGlvbiB0aGF0IHRha2VzIGEgdmFyaWFibGUgbnVtYmVyIG9mIGFyZ3VtZW50cy5cbi8vLyBFYWNoIGFyZ3VtZW50IGlzIGRlZXAtbWVyZ2VkIGludG8gdGhlIGZpbmFsIHJlc3VsdCBmcm9tIGxlZnQgdG8gcmlnaHQuXG4vLy8gQHBhcmFtIHtMaXN0fSAkbWFwcyBUaGUgbWFwcyB0byBjb21iaW5lIHdpdGggbWFwLmRlZXAtbWVyZ2Vcbi8vLyBAcmV0dXJuIHtNYXB9IFRoZSBjb21iaW5lZCByZXN1bHQgb2Ygc3VjY2Vzc2l2ZWx5IGNhbGxpbmcgbWFwLmRlZXAtbWVyZ2Ugd2l0aCBlYWNoIHBhcmFtZXRlci5cbkBmdW5jdGlvbiBkZWVwLW1lcmdlLWFsbCgkbWFwcy4uLikge1xuICAkcmVzdWx0OiAoKTtcbiAgQGVhY2ggJG1hcCBpbiAkbWFwcyB7XG4gICAgJHJlc3VsdDogbWFwLmRlZXAtbWVyZ2UoJHJlc3VsdCwgJG1hcCk7XG4gIH1cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG4vLy8gQ29lcmNlcyB0aGUgZ2l2ZW4gdmFsdWUgdG8gYSBsaXN0LCBieSBjb252ZXJ0aW5nIGFueSBub24tbGlzdCB2YWx1ZSBpbnRvIGEgc2luZ2xlLWl0ZW0gbGlzdC5cbi8vLyBUaGlzIHNob3VsZCBiZSB1c2VkIHdoZW4gZGVhbGluZyB3aXRoIHVzZXItcGFzc2VkIGxpc3RzIG9mIGFyZ3MgdG8gYXZvaWQgY29uZnVzaW5nIGVycm9ycyxcbi8vLyBzaW5jZSBTYXNzIHRyZWF0cyBgKCR4KWAgYXMgZXF1aXZhbGVudCB0byBgJHhgLlxuLy8vIEBwYXJhbSB7QW55fSAkdmFsdWUgVGhlIHZhbHVlIHRvIGNvZXJjZSB0byBhIGxpc3QuXG4vLy8gQHJldHVybiB7TGlzdH0gVGhlIG9yaWdpbmFsICR2YWx1ZSBpZiBpdCB3YXMgYSBsaXN0LCBvdGhlcndpc2UgYSBzaW5nbGUtaXRlbSBsaXN0IGNvbnRhaW5pbmdcbi8vLyAgICAgJHZhbHVlLlxuQGZ1bmN0aW9uIGNvZXJjZS10by1saXN0KCR2YWx1ZSkge1xuICBAcmV0dXJuIGlmKG1ldGEudHlwZS1vZigkdmFsdWUpICE9ICdsaXN0JywgKCR2YWx1ZSwpLCAkdmFsdWUpO1xufVxuXG4vLy8gQSB2ZXJzaW9uIG9mIHRoZSBTYXNzIGBjb2xvci5jaGFuZ2VgIGZ1bmN0aW9uIHRoYXQgaXMgc2FmZSBvdCB1c2Ugd2l0aCBDU1MgdmFyaWFibGVzLlxuQGZ1bmN0aW9uIHNhZmUtY29sb3ItY2hhbmdlKCRjb2xvciwgJGFyZ3MuLi4pIHtcbiAgJGFyZ3M6IG1ldGEua2V5d29yZHMoJGFyZ3MpO1xuICBAcmV0dXJuIGlmKG1ldGEudHlwZS1vZigkY29sb3IpID09ICdjb2xvcicsIGNvbG9yLmNoYW5nZSgkY29sb3IsICRhcmdzLi4uKSwgJGNvbG9yKTtcbn1cblxuLy8vIEdldHMgdGhlIGdpdmVuIGFyZ3VtZW50cyBhcyBhIG1hcCBvZiBrZXl3b3JkcyBhbmQgdmFsaWRhdGVzIHRoYXQgb25seSBzdXBwb3J0ZWQgYXJndW1lbnRzIHdlcmVcbi8vLyBwYXNzZWQuXG4vLy8gQHBhcmFtIHtBcmdMaXN0fSAkYXJncyBUaGUgYXJndW1lbnRzIHRvIGNvbnZlcnQgdG8gYSBrZXl3b3JkcyBtYXAuXG4vLy8gQHBhcmFtIHtMaXN0fSAkc3VwcG9ydGVkLWFyZ3MgVGhlIHN1cHBvcnRlZCBhcmd1bWVudCBuYW1lcy5cbi8vLyBAcmV0dXJuIHtNYXB9IFRoZSAkYXJncyBhcyBhIG1hcCBvZiBhcmd1bWVudCBuYW1lIHRvIGFyZ3VtZW50IHZhbHVlLlxuQGZ1bmN0aW9uIHZhbGlkYXRlLWtleXdvcmQtYXJncygkYXJncywgJHN1cHBvcnRlZC1hcmdzKSB7XG4gIEBpZiBsaXN0Lmxlbmd0aCgkYXJncykgPiAwIHtcbiAgICBAZXJyb3IgI3snRXhwZWN0ZWQga2V5d29yZCBhcmdzLCBidXQgZ290IHBvc2l0aW9uYWwgYXJnczogJ30jeyRhcmdzfTtcbiAgfVxuICAka3dhcmdzOiBtZXRhLmtleXdvcmRzKCRhcmdzKTtcbiAgQGVhY2ggJGFyZywgJHYgaW4gJGt3YXJncyB7XG4gICAgQGlmIGxpc3QuaW5kZXgoJHN1cHBvcnRlZC1hcmdzLCAkYXJnKSA9PSBudWxsIHtcbiAgICAgIEBlcnJvciAjeydVbnN1cHBvcnRlZCBhcmd1bWVudCAnfSN7JGFyZ30jeycuIFZhbGlkIGFyZ3VtZW50cyBhcmU6ICd9I3skc3VwcG9ydGVkLWFyZ3N9O1xuICAgIH1cbiAgfVxuICBAcmV0dXJuICRrd2FyZ3M7XG59XG4iLCJAdXNlICdzYXNzOmxpc3QnO1xuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczpzdHJpbmcnO1xuQHVzZSAndHlwb2dyYXBoeS11dGlscyc7XG5AdXNlICcuLi90aGVtaW5nL2luc3BlY3Rpb24nO1xuQHVzZSAnLi92ZXJzaW9uaW5nJztcblxuLy8gRGVmaW5pdGlvbiBhbmQgdmVyc2lvbmluZyBmdW5jdGlvbnMgbGl2ZSBpbiB0aGVpciBvd24gZmlsZXMgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLCBidXRcbi8vIHdlIHJlLWV4cG9ydCB0aGVtIGhlcmUgc28gdGhhdCBoaXN0b3JpY2FsIGltcG9ydHMgZnJvbSB0aGlzIGZpbGUgY29udGludWUgdG8gd29yayB3aXRob3V0IG5lZWRpbmdcbi8vIHRvIGJlIHVwZGF0ZWQuXG5AZm9yd2FyZCAnLi9kZWZpbml0aW9uJztcbkBmb3J3YXJkICcuL3ZlcnNpb25pbmcnO1xuXG5AbWl4aW4gdHlwb2dyYXBoeS1oaWVyYXJjaHkoJHRoZW1lLCAkc2VsZWN0b3I6ICcubWF0LXR5cG9ncmFwaHknLCAkYmFjay1jb21wYXQ6IGZhbHNlKSB7XG4gIEBpZiBpbnNwZWN0aW9uLmdldC10aGVtZS12ZXJzaW9uKCR0aGVtZSkgPT0gMSB7XG4gICAgQGluY2x1ZGUgX20zLXR5cG9ncmFwaHktaGllcmFyY2h5KCR0aGVtZSwgJHNlbGVjdG9yLCAkYmFjay1jb21wYXQpO1xuICB9XG4gIEBlbHNlIHtcbiAgICBAaW5jbHVkZSBfbTItdHlwb2dyYXBoeS1oaWVyYXJjaHkoJHRoZW1lLCAkc2VsZWN0b3IpO1xuICB9XG59XG5cbkBmdW5jdGlvbiBfZ2V0LXNlbGVjdG9yKCRzZWxlY3RvcnMsICRwcmVmaXgpIHtcbiAgJHJlc3VsdDogKCk7XG4gIEBlYWNoICRzZWxlY3RvciBpbiAkc2VsZWN0b3JzIHtcbiAgICAvLyBEb24ndCBhZGQgXCJuYWtlZFwiIHRhZyBzZWxlY3RvcnMsIGFuZCBkb24ndCBuZXN0IHByZWZpeCBzZWxlY3Rvci5cbiAgICBAaWYgc3RyaW5nLmluZGV4KCRzZWxlY3RvciwgJy4nKSA9PSAxIHtcbiAgICAgICRyZXN1bHQ6IGxpc3QuYXBwZW5kKCRyZXN1bHQsICRzZWxlY3RvciwgJHNlcGFyYXRvcjogY29tbWEpO1xuICAgIH1cbiAgICAvLyBEb24ndCBuZXN0IHRoZSBwcmVmaXggc2VsZWN0b3IgaW4gaXRzZWxmLlxuICAgIEBpZiAkc2VsZWN0b3IgIT0gJHByZWZpeCB7XG4gICAgICAkcmVzdWx0OiBsaXN0LmFwcGVuZCgkcmVzdWx0LCAnI3skcHJlZml4fSAjeyRzZWxlY3Rvcn0nLCAkc2VwYXJhdG9yOiBjb21tYSk7XG4gICAgfVxuICB9XG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuQG1peGluIF9tMy10eXBvZ3JhcGh5LWxldmVsKCR0aGVtZSwgJHNlbGVjdG9yLXByZWZpeCwgJGxldmVsLCAkc2VsZWN0b3JzLCAkbWFyZ2luOiBudWxsKSB7XG4gICN7X2dldC1zZWxlY3Rvcigkc2VsZWN0b3JzLCAkc2VsZWN0b3ItcHJlZml4KX0ge1xuICAgIC8vIFRPRE8obW1hbGVyYmEpOiBXaGVuIHdlIGV4cG9zZSBzeXN0ZW0gdG9rZW5zIGFzIENTUyB2YXJzLCB3ZSBzaG91bGQgY2hhbmdlIHRoaXMgdG8gZW1pdCB0b2tlblxuICAgIC8vICBzbG90cy5cbiAgICBmb250OiBpbnNwZWN0aW9uLmdldC10aGVtZS10eXBvZ3JhcGh5KCR0aGVtZSwgJGxldmVsLCBmb250KTtcbiAgICBsZXR0ZXItc3BhY2luZzogaW5zcGVjdGlvbi5nZXQtdGhlbWUtdHlwb2dyYXBoeSgkdGhlbWUsICRsZXZlbCwgbGV0dGVyLXNwYWNpbmcpO1xuICAgIEBpZiAkbWFyZ2luICE9IG51bGwge1xuICAgICAgbWFyZ2luOiAwIDAgJG1hcmdpbjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tMy10eXBvZ3JhcGh5LWhpZXJhcmNoeSgkdGhlbWUsICRzZWxlY3Rvci1wcmVmaXgsICRhZGQtbTItc2VsZWN0b3JzKSB7XG4gJGxldmVsczogKFxuICAgZGlzcGxheS1sYXJnZTogKFxuICAgICBzZWxlY3RvcnM6ICgnLm1hdC1kaXNwbGF5LWxhcmdlJywgJ2gxJyksXG4gICAgIG0yLXNlbGVjdG9yczogKCcubWF0LWgxJywgJy5tYXQtaGVhZGxpbmUtMScpLFxuICAgICBtYXJnaW46IDAuNWVtXG4gICApLFxuICAgZGlzcGxheS1tZWRpdW06IChcbiAgICAgc2VsZWN0b3JzOiAoJy5tYXQtZGlzcGxheS1tZWRpdW0nLCAnaDInKSxcbiAgICAgbTItc2VsZWN0b3JzOiAoJy5tYXQtaDInLCAnLm1hdC1oZWFkbGluZS0yJyksXG4gICAgIG1hcmdpbjogMC41ZW1cbiAgICksXG4gICBkaXNwbGF5LXNtYWxsOiAoXG4gICAgIHNlbGVjdG9yczogKCcubWF0LWRpc3BsYXktc21hbGwnLCAnaDMnKSxcbiAgICAgbTItc2VsZWN0b3JzOiAoJy5tYXQtaDMnLCAnLm1hdC1oZWFkbGluZS0zJyksXG4gICAgIG1hcmdpbjogMC41ZW1cbiAgICksXG4gICBoZWFkbGluZS1sYXJnZTogKFxuICAgICBzZWxlY3RvcnM6ICgnLm1hdC1oZWFkbGluZS1sYXJnZScsICdoNCcpLFxuICAgICBtMi1zZWxlY3RvcnM6ICgnLm1hdC1oNCcsICcubWF0LWhlYWRsaW5lLTQnKSxcbiAgICAgbWFyZ2luOiAwLjVlbVxuICAgKSxcbiAgIGhlYWRsaW5lLW1lZGl1bTogKFxuICAgICBzZWxlY3RvcnM6ICgnLm1hdC1oZWFkbGluZS1tZWRpdW0nLCAnaDUnKSxcbiAgICAgbTItc2VsZWN0b3JzOiAoJy5tYXQtaDUnLCAnLm1hdC1oZWFkbGluZS01JyksXG4gICAgIG1hcmdpbjogMC41ZW1cbiAgICksXG4gICBoZWFkbGluZS1zbWFsbDogKFxuICAgICBzZWxlY3RvcnM6ICgnLm1hdC1oZWFkbGluZS1zbWFsbCcsICdoNicpLFxuICAgICBtMi1zZWxlY3RvcnM6ICgnLm1hdC1oNicsICcubWF0LWhlYWRsaW5lLTYnKSxcbiAgICAgbWFyZ2luOiAwLjVlbVxuICAgKSxcbiAgIHRpdGxlLWxhcmdlOiAoXG4gICAgIHNlbGVjdG9yczogKCcubWF0LXRpdGxlLWxhcmdlJyksXG4gICAgIG0yLXNlbGVjdG9yczogKCcubWF0LXN1YnRpdGxlLTEnKSxcbiAgICksXG4gICB0aXRsZS1tZWRpdW06IChcbiAgICAgc2VsZWN0b3JzOiAoJy5tYXQtdGl0bGUtbWVkaXVtJyksXG4gICAgIG0yLXNlbGVjdG9yczogKCcubWF0LXN1YnRpdGxlLTInKSxcbiAgICksXG4gICB0aXRsZS1zbWFsbDogKFxuICAgICBzZWxlY3RvcnM6ICgnLm1hdC10aXRsZS1zbWFsbCcpXG4gICApLFxuICAgYm9keS1sYXJnZTogKFxuICAgICBzZWxlY3RvcnM6ICgnLm1hdC1ib2R5LWxhcmdlJywgJHNlbGVjdG9yLXByZWZpeCksXG4gICAgIG0yLXNlbGVjdG9yczogKCcubWF0LWJvZHknLCAnLm1hdC1ib2R5LXN0cm9uZycsICcubWF0LWJvZHktMicpLFxuICAgKSxcbiAgIGJvZHktbWVkaXVtOiAoXG4gICAgIHNlbGVjdG9yczogKCcubWF0LWJvZHktbWVkaXVtJylcbiAgICksXG4gICBib2R5LXNtYWxsOiAoXG4gICAgIHNlbGVjdG9yczogKCcubWF0LWJvZHktc21hbGwnKVxuICAgKSxcbiAgIGxhYmVsLWxhcmdlOiAoXG4gICAgIHNlbGVjdG9yczogKCcubWF0LWxhYmVsLWxhcmdlJylcbiAgICksXG4gICBsYWJlbC1tZWRpdW06IChcbiAgICAgc2VsZWN0b3JzOiAoJy5tYXQtbGFiZWwtbWVkaXVtJylcbiAgICksXG4gICBsYWJlbC1zbWFsbDogKFxuICAgICBzZWxlY3RvcnM6ICgnLm1hdC1sYWJlbC1zbWFsbCcpLFxuICAgICBtMi1zZWxlY3RvcnM6ICgnLm1hdC1zbWFsbCcsICcubWF0LWNhcHRpb24nKVxuICAgKSxcbiApO1xuXG4gIEBlYWNoICRsZXZlbCwgJG9wdGlvbnMgaW4gJGxldmVscyB7XG4gICAgQGlmICRhZGQtbTItc2VsZWN0b3JzIHtcbiAgICAgICRvcHRpb25zOiBtYXAuc2V0KCRvcHRpb25zLCBzZWxlY3RvcnMsXG4gICAgICAgICAgbGlzdC5qb2luKG1hcC5nZXQoJG9wdGlvbnMsIHNlbGVjdG9ycyksIG1hcC5nZXQoJG9wdGlvbnMsIG0yLXNlbGVjdG9ycykgb3IgKCkpKTtcbiAgICB9XG4gICAgJG9wdGlvbnM6IG1hcC5yZW1vdmUoJG9wdGlvbnMsIG0yLXNlbGVjdG9ycyk7XG5cbiAgICAvLyBBcHBseSBzdHlsZXMgZm9yIHRoZSBsZXZlbC5cbiAgICBAaW5jbHVkZSBfbTMtdHlwb2dyYXBoeS1sZXZlbCgkdGhlbWUsICRzZWxlY3Rvci1wcmVmaXgsICRsZXZlbCwgJG9wdGlvbnMuLi4pO1xuXG4gICAgLy8gQWxzbyBzdHlsZSA8cD4gaW5zaWRlIGJvZHktbGFyZ2UuXG4gICAgQGlmICRsZXZlbCA9PSBib2R5LWxhcmdlIHtcbiAgICAgICN7X2dldC1zZWxlY3RvcihtYXAuZ2V0KCRvcHRpb25zLCBzZWxlY3RvcnMpLCAkc2VsZWN0b3ItcHJlZml4KX0ge1xuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAwLjc1ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8vIEVtaXRzIGJhc2VsaW5lIHR5cG9ncmFwaGljIHN0eWxlcyBiYXNlZCBvbiBhIGdpdmVuIGNvbmZpZy5cbi8vLyBAcGFyYW0ge01hcH0gJGNvbmZpZy1vci10aGVtZSBBIHR5cG9ncmFwaHkgY29uZmlnIGZvciBhbiBlbnRpcmUgdGhlbWUuXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRzZWxlY3RvciBBbmNlc3RvciBzZWxlY3RvciB1bmRlciB3aGljaCBuYXRpdmUgZWxlbWVudHMsIHN1Y2ggYXMgaDEsIHdpbGxcbi8vLyAgICAgYmUgc3R5bGVkLlxuQG1peGluIF9tMi10eXBvZ3JhcGh5LWhpZXJhcmNoeSgkdGhlbWUsICRzZWxlY3Rvcikge1xuICAvLyBOb3RlIHRoYXQgaXQgc2VlbXMgcmVkdW5kYW50IHRvIHByZWZpeCB0aGUgY2xhc3MgcnVsZXMgd2l0aCB0aGUgYCRzZWxlY3RvcmAsIGhvd2V2ZXIgaXQnc1xuICAvLyBuZWNlc3NhcnkgaWYgd2Ugd2FudCB0byBhbGxvdyBwZW9wbGUgdG8gb3ZlcndyaXRlIHRoZSB0YWcgc2VsZWN0b3JzLiBUaGlzIGlzIGR1ZSB0b1xuICAvLyBzZWxlY3RvcnMgbGlrZSBgI3skc2VsZWN0b3J9IGgxYCBiZWluZyBtb3JlIHNwZWNpZmljIHRoYW4gb25lcyBsaWtlIGAubWF0LXRpdGxlYC5cbiAgLm1hdC1oMSxcbiAgLm1hdC1oZWFkbGluZS01LFxuICAjeyRzZWxlY3Rvcn0gLm1hdC1oMSxcbiAgI3skc2VsZWN0b3J9IC5tYXQtaGVhZGxpbmUtNSxcbiAgI3skc2VsZWN0b3J9IGgxIHtcbiAgICBmb250OiBpbnNwZWN0aW9uLmdldC10aGVtZS10eXBvZ3JhcGh5KCR0aGVtZSwgaGVhZGxpbmUtNSwgZm9udCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IGluc3BlY3Rpb24uZ2V0LXRoZW1lLXR5cG9ncmFwaHkoJHRoZW1lLCBoZWFkbGluZS01LCBsZXR0ZXItc3BhY2luZyk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDIsXG4gIC5tYXQtaGVhZGxpbmUtNixcbiAgI3skc2VsZWN0b3J9IC5tYXQtaDIsXG4gICN7JHNlbGVjdG9yfSAubWF0LWhlYWRsaW5lLTYsXG4gICN7JHNlbGVjdG9yfSBoMiB7XG4gICAgZm9udDogaW5zcGVjdGlvbi5nZXQtdGhlbWUtdHlwb2dyYXBoeSgkdGhlbWUsIGhlYWRsaW5lLTYsIGZvbnQpO1xuICAgIGxldHRlci1zcGFjaW5nOiBpbnNwZWN0aW9uLmdldC10aGVtZS10eXBvZ3JhcGh5KCR0aGVtZSwgaGVhZGxpbmUtNiwgbGV0dGVyLXNwYWNpbmcpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgzLFxuICAubWF0LXN1YnRpdGxlLTEsXG4gICN7JHNlbGVjdG9yfSAubWF0LWgzLFxuICAjeyRzZWxlY3Rvcn0gLm1hdC1zdWJ0aXRsZS0xLFxuICAjeyRzZWxlY3Rvcn0gaDMge1xuICAgIGZvbnQ6IGluc3BlY3Rpb24uZ2V0LXRoZW1lLXR5cG9ncmFwaHkoJHRoZW1lLCBzdWJ0aXRsZS0xLCBmb250KTtcbiAgICBsZXR0ZXItc3BhY2luZzogaW5zcGVjdGlvbi5nZXQtdGhlbWUtdHlwb2dyYXBoeSgkdGhlbWUsIHN1YnRpdGxlLTEsIGxldHRlci1zcGFjaW5nKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oNCxcbiAgLm1hdC1ib2R5LTEsXG4gICN7JHNlbGVjdG9yfSAubWF0LWg0LFxuICAjeyRzZWxlY3Rvcn0gLm1hdC1ib2R5LTEsXG4gICN7JHNlbGVjdG9yfSBoNCB7XG4gICAgZm9udDogaW5zcGVjdGlvbi5nZXQtdGhlbWUtdHlwb2dyYXBoeSgkdGhlbWUsIGJvZHktMSwgZm9udCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IGluc3BlY3Rpb24uZ2V0LXRoZW1lLXR5cG9ncmFwaHkoJHRoZW1lLCBib2R5LTEsIGxldHRlci1zcGFjaW5nKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLy8gTm90ZTogdGhlIHNwZWMgZG9lc24ndCBoYXZlIGFueXRoaW5nIHRoYXQgd291bGQgY29ycmVzcG9uZCB0byBoNSBhbmQgaDYsIGJ1dCB3ZSBhZGQgdGhlc2UgZm9yXG4gIC8vIGNvbnNpc3RlbmN5LiBUaGUgZm9udCBzaXplcyBjb21lIGZyb20gdGhlIENocm9tZSB1c2VyIGFnZW50IHN0eWxlcyB3aGljaCBoYXZlIGg1IGF0IDAuODNlbVxuICAvLyBhbmQgaDYgYXQgMC42N2VtLlxuICAubWF0LWg1LFxuICAjeyRzZWxlY3Rvcn0gLm1hdC1oNSxcbiAgI3skc2VsZWN0b3J9IGg1IHtcbiAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5LXV0aWxzLmZvbnQtc2hvcnRoYW5kKFxuICAgICAgIC8vIGNhbGMgaXMgdXNlZCBoZXJlIHRvIHN1cHBvcnQgY3NzIHZhcmlhYmxlc1xuICAgICAgY2FsYygje2luc3BlY3Rpb24uZ2V0LXRoZW1lLXR5cG9ncmFwaHkoJHRoZW1lLCBib2R5LTIsIGZvbnQtc2l6ZSl9ICogMC44MyksXG4gICAgICBpbnNwZWN0aW9uLmdldC10aGVtZS10eXBvZ3JhcGh5KCR0aGVtZSwgYm9keS0yLCBmb250LXdlaWdodCksXG4gICAgICBpbnNwZWN0aW9uLmdldC10aGVtZS10eXBvZ3JhcGh5KCR0aGVtZSwgYm9keS0yLCBsaW5lLWhlaWdodCksXG4gICAgICBpbnNwZWN0aW9uLmdldC10aGVtZS10eXBvZ3JhcGh5KCR0aGVtZSwgYm9keS0yLCBmb250LWZhbWlseSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtaDYsXG4gICN7JHNlbGVjdG9yfSAubWF0LWg2LFxuICAjeyRzZWxlY3Rvcn0gaDYge1xuICAgIEBpbmNsdWRlIHR5cG9ncmFwaHktdXRpbHMuZm9udC1zaG9ydGhhbmQoXG4gICAgICAgLy8gY2FsYyBpcyB1c2VkIGhlcmUgdG8gc3VwcG9ydCBjc3MgdmFyaWFibGVzXG4gICAgICBjYWxjKCN7aW5zcGVjdGlvbi5nZXQtdGhlbWUtdHlwb2dyYXBoeSgkdGhlbWUsIGJvZHktMiwgZm9udC1zaXplKX0gKiAwLjY3KSxcbiAgICAgIGluc3BlY3Rpb24uZ2V0LXRoZW1lLXR5cG9ncmFwaHkoJHRoZW1lLCBib2R5LTIsIGZvbnQtd2VpZ2h0KSxcbiAgICAgIGluc3BlY3Rpb24uZ2V0LXRoZW1lLXR5cG9ncmFwaHkoJHRoZW1lLCBib2R5LTIsIGxpbmUtaGVpZ2h0KSxcbiAgICAgIGluc3BlY3Rpb24uZ2V0LXRoZW1lLXR5cG9ncmFwaHkoJHRoZW1lLCBib2R5LTIsIGZvbnQtZmFtaWx5KVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1ib2R5LXN0cm9uZyxcbiAgLm1hdC1zdWJ0aXRsZS0yLFxuICAjeyRzZWxlY3Rvcn0gLm1hdC1ib2R5LXN0cm9uZyxcbiAgI3skc2VsZWN0b3J9IC5tYXQtc3VidGl0bGUtMiB7XG4gICAgZm9udDogaW5zcGVjdGlvbi5nZXQtdGhlbWUtdHlwb2dyYXBoeSgkdGhlbWUsIHN1YnRpdGxlLTIsIGZvbnQpO1xuICAgIGxldHRlci1zcGFjaW5nOiBpbnNwZWN0aW9uLmdldC10aGVtZS10eXBvZ3JhcGh5KCR0aGVtZSwgc3VidGl0bGUtMiwgbGV0dGVyLXNwYWNpbmcpO1xuICB9XG5cbiAgLm1hdC1ib2R5LFxuICAubWF0LWJvZHktMixcbiAgI3skc2VsZWN0b3J9IC5tYXQtYm9keSxcbiAgI3skc2VsZWN0b3J9IC5tYXQtYm9keS0yLFxuICAjeyRzZWxlY3Rvcn0ge1xuICAgIGZvbnQ6IGluc3BlY3Rpb24uZ2V0LXRoZW1lLXR5cG9ncmFwaHkoJHRoZW1lLCBib2R5LTIsIGZvbnQpO1xuICAgIGxldHRlci1zcGFjaW5nOiBpbnNwZWN0aW9uLmdldC10aGVtZS10eXBvZ3JhcGh5KCR0aGVtZSwgYm9keS0yLCBsZXR0ZXItc3BhY2luZyk7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMCAwIDEycHg7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbWFsbCxcbiAgLm1hdC1jYXB0aW9uLFxuICAjeyRzZWxlY3Rvcn0gLm1hdC1zbWFsbCxcbiAgI3skc2VsZWN0b3J9IC5tYXQtY2FwdGlvbiB7XG4gICAgZm9udDogaW5zcGVjdGlvbi5nZXQtdGhlbWUtdHlwb2dyYXBoeSgkdGhlbWUsIGNhcHRpb24sIGZvbnQpO1xuICAgIGxldHRlci1zcGFjaW5nOiBpbnNwZWN0aW9uLmdldC10aGVtZS10eXBvZ3JhcGh5KCR0aGVtZSwgY2FwdGlvbiwgbGV0dGVyLXNwYWNpbmcpO1xuICB9XG5cbiAgLm1hdC1oZWFkbGluZS0xLFxuICAjeyRzZWxlY3Rvcn0gLm1hdC1oZWFkbGluZS0xIHtcbiAgICBmb250OiBpbnNwZWN0aW9uLmdldC10aGVtZS10eXBvZ3JhcGh5KCR0aGVtZSwgaGVhZGxpbmUtMSwgZm9udCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IGluc3BlY3Rpb24uZ2V0LXRoZW1lLXR5cG9ncmFwaHkoJHRoZW1lLCBoZWFkbGluZS0xLCBsZXR0ZXItc3BhY2luZyk7XG4gICAgbWFyZ2luOiAwIDAgNTZweDtcbiAgfVxuXG4gIC5tYXQtaGVhZGxpbmUtMixcbiAgI3skc2VsZWN0b3J9IC5tYXQtaGVhZGxpbmUtMiB7XG4gICAgZm9udDogaW5zcGVjdGlvbi5nZXQtdGhlbWUtdHlwb2dyYXBoeSgkdGhlbWUsIGhlYWRsaW5lLTIsIGZvbnQpO1xuICAgIGxldHRlci1zcGFjaW5nOiBpbnNwZWN0aW9uLmdldC10aGVtZS10eXBvZ3JhcGh5KCR0aGVtZSwgaGVhZGxpbmUtMiwgbGV0dGVyLXNwYWNpbmcpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cblxuICAubWF0LWhlYWRsaW5lLTMsXG4gICN7JHNlbGVjdG9yfSAubWF0LWhlYWRsaW5lLTMge1xuICAgIGZvbnQ6IGluc3BlY3Rpb24uZ2V0LXRoZW1lLXR5cG9ncmFwaHkoJHRoZW1lLCBoZWFkbGluZS0zLCBmb250KTtcbiAgICBsZXR0ZXItc3BhY2luZzogaW5zcGVjdGlvbi5nZXQtdGhlbWUtdHlwb2dyYXBoeSgkdGhlbWUsIGhlYWRsaW5lLTMsIGxldHRlci1zcGFjaW5nKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG5cbiAgLm1hdC1oZWFkbGluZS00LFxuICAjeyRzZWxlY3Rvcn0gLm1hdC1oZWFkbGluZS00IHtcbiAgICBmb250OiBpbnNwZWN0aW9uLmdldC10aGVtZS10eXBvZ3JhcGh5KCR0aGVtZSwgaGVhZGxpbmUtNCwgZm9udCk7XG4gICAgbGV0dGVyLXNwYWNpbmc6IGluc3BlY3Rpb24uZ2V0LXRoZW1lLXR5cG9ncmFwaHkoJHRoZW1lLCBoZWFkbGluZS00LCBsZXR0ZXItc3BhY2luZyk7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgfVxufVxuIiwiQHVzZSAnc2FzczpsaXN0JztcbkB1c2UgJ3Nhc3M6bWF0aCc7XG5AdXNlICcuL3Byb3BlcnR5LWdldHRlcnMnO1xuXG4vLyBQcm9wZXJ0eSBnZXR0ZXJzIGxpdmUgaW4gdGhlaXIgb3duIGZpbGUgdG8gYXZvaWQgY2lyY3VsYXIgZGVwZW5kZW5jaWVzLCBidXQgd2UgcmUtZXhwb3J0IHRoZW1cbi8vIGhlcmUgc28gdGhhdCBoaXN0b3JpY2FsIGltcG9ydHMgZnJvbSB0aGlzIGZpbGUgY29udGludWUgdG8gd29yayB3aXRob3V0IG5lZWRpbmcgdG8gYmUgdXBkYXRlZC5cbkBmb3J3YXJkICcuL3Byb3BlcnR5LWdldHRlcnMnO1xuXG4vLy8gT3V0cHV0cyB0aGUgc2hvcnRoYW5kIGBmb250YCBDU1MgcHJvcGVydHksIGJhc2VkIG9uIGEgc2V0IG9mIHR5cG9ncmFwaHkgdmFsdWVzLiBGYWxscyBiYWNrIHRvXG4vLy8gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcyBpZiBhIHZhbHVlIHRoYXQgaXNuJ3QgYWxsb3dlZCBpbiB0aGUgc2hvcnRoYW5kIGlzIHBhc3NlZCBpbi5cbi8vLyBAcGFyYW0ge1N0cmluZ30gJGZvbnQtc2l6ZSBUaGUgZm9udC1zaXplIHZhbHVlLlxuLy8vIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyfSAkZm9udC13ZWlnaHQgVGhlIGZvbnQtd2VpZ2h0IHZhbHVlLlxuLy8vIEBwYXJhbSB7U3RyaW5nIHwgTnVtYmVyfSAkbGluZS1oZWlnaHQgVGhlIGxpbmUtaGVpZ2h0IHZhbHVlLlxuLy8vIEBwYXJhbSB7U3RyaW5nfSAkZm9udC1mYW1pbHkgVGhlIGZvbnQtZmFtaWx5IHZhbHVlLlxuLy8vIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBgZm9udGAgc2hvcnRoYW5kIHZhbHVlIGNvbWJpbmluZyB0aGUgZ2l2ZW4gcGFydHMuXG5AbWl4aW4gZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSkge1xuICAvLyBJZiBhbnkgb2YgdGhlIHZhbHVlcyBhcmUgc2V0IHRvIGBpbmhlcml0YCwgd2UgY2FuJ3QgdXNlIHRoZSBzaG9ydGhhbmRcbiAgLy8gc28gd2UgZmFsbCBiYWNrIHRvIHBhc3NpbmcgaW4gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcy5cbiAgQGlmICgkZm9udC1zaXplID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1zaXplID09IG51bGwgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IG51bGwpIHtcblxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuICBAZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgc2hvcnRoYW5kIGBmb250YCwgYmVjYXVzZSBpdCdzIHRoZSBsZWFzdCBhbW91bnQgb2YgYnl0ZXMuXG4gICAgZm9udDogJGZvbnQtd2VpZ2h0IGxpc3Quc2xhc2goJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0KSAkZm9udC1mYW1pbHk7XG4gIH1cbn1cblxuLy8vIEVtaXRzIENTUyBzdHlsZXMgZm9yIHRoZSBnaXZlbiB0eXBvZ3JhcGh5IGxldmVsLlxuLy8vIEBwYXJhbSB7TWFwfSAkY29uZmlnIEEgdHlwb2dyYXBoeSBjb25maWcuXG4vLy8gQHBhcmFtIHtNYXB9ICRsZXZlbCBBIHR5cG9ncmFwaHkgbGV2ZWwuXG5AbWl4aW4gdHlwb2dyYXBoeS1sZXZlbCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgLy8gd2UgZGVsaWJlcmF0ZWx5IGRvIG5vdCB1c2UgdGhlIGZvbnQgc2hvcnRoYW5kIGhlcmUgYmVjYXVzZSBpdCBvdmVycmlkZXNcbiAgLy8gY2VydGFpbiBmb250IHByb3BlcnRpZXMgdGhhdCBjYW4ndCBiZSBjb25maWd1cmVkIGluIHRoZSBjdXJyZW50IHR5cG9ncmFwaHlcbiAgLy8gY29uZmlnLCBlLmcuIHRoZSBmb250LXZhcmlhbnQtY2FwcyBvciBmb250LWZlYXR1cmUtc2V0dGluZ3MgcHJvcGVydHlcbiAgZm9udC1zaXplOiBwcm9wZXJ0eS1nZXR0ZXJzLmZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpO1xuICBmb250LXdlaWdodDogcHJvcGVydHktZ2V0dGVycy5mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICBsaW5lLWhlaWdodDogcHJvcGVydHktZ2V0dGVycy5saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICBmb250LWZhbWlseTogcHJvcGVydHktZ2V0dGVycy5mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWwpO1xuICBsZXR0ZXItc3BhY2luZzogcHJvcGVydHktZ2V0dGVycy5sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpO1xufVxuXG4vLy8gQ29lcmNlIGEgdmFsdWUgdG8gYGVtYCBpZiBpdCBpcyBhIHVuaXRsZXNzIG51bWJlciwgb3RoZXJ3aXNlIHJldHVybnNcbi8vLyB0aGUgdmFsdWUgcHJvdmlkZWQuXG5AZnVuY3Rpb24gcHJpdmF0ZS1jb2VyY2UtdW5pdGxlc3MtdG8tZW0oJHZhbHVlKSB7XG4gIEByZXR1cm4gaWYobWF0aC5pcy11bml0bGVzcygkdmFsdWUpLCAxZW0gKiAkdmFsdWUsICR2YWx1ZSk7XG59XG4iLCJAdXNlICdzYXNzOmNvbG9yJztcbkB1c2UgJ0BtYXRlcmlhbC9jaGlwcy9jaGlwLXRoZW1lJyBhcyBtZGMtY2hpcC10aGVtZTtcbkB1c2UgJy4uL2NvcmUvdG9rZW5zL20yL21kYy9jaGlwJyBhcyB0b2tlbnMtbWRjLWNoaXA7XG5AdXNlICcuLi9jb3JlL3Rva2Vucy9tMi9tYXQvY2hpcCcgYXMgdG9rZW5zLW1hdC1jaGlwO1xuQHVzZSAnLi4vY29yZS90b2tlbnMvdG9rZW4tdXRpbHMnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL2luc3BlY3Rpb24nO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3ZhbGlkYXRpb24nO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuXG4vLy8gT3V0cHV0cyBiYXNlIHRoZW1lIHN0eWxlcyAoc3R5bGVzIG5vdCBkZXBlbmRlbnQgb24gdGhlIGNvbG9yLCB0eXBvZ3JhcGh5LCBvciBkZW5zaXR5IHNldHRpbmdzKVxuLy8vIGZvciB0aGUgbWF0LWNoaXBzLlxuLy8vIEBwYXJhbSB7TWFwfSAkdGhlbWUgVGhlIHRoZW1lIHRvIGdlbmVyYXRlIGJhc2Ugc3R5bGVzIGZvci5cbkBtaXhpbiBiYXNlKCR0aGVtZSkge1xuICBAaWYgaW5zcGVjdGlvbi5nZXQtdGhlbWUtdmVyc2lvbigkdGhlbWUpID09IDEge1xuICAgIEBpbmNsdWRlIF90aGVtZS1mcm9tLXRva2VucyhpbnNwZWN0aW9uLmdldC10aGVtZS10b2tlbnMoJHRoZW1lLCBiYXNlKSk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC5tYXQtbWRjLXN0YW5kYXJkLWNoaXAge1xuICAgICAgQGluY2x1ZGUgbWRjLWNoaXAtdGhlbWUudGhlbWUodG9rZW5zLW1kYy1jaGlwLmdldC11bnRoZW1hYmxlLXRva2VucygpKTtcbiAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi12YWx1ZXMoXG4gICAgICAgICAgdG9rZW5zLW1hdC1jaGlwLiRwcmVmaXgsIHRva2Vucy1tYXQtY2hpcC5nZXQtdW50aGVtYWJsZS10b2tlbnMoKSk7XG4gICAgfVxuICB9XG59XG5cbi8vLyBPdXRwdXRzIGNvbG9yIHRoZW1lIHN0eWxlcyBmb3IgdGhlIG1hdC1jaGlwcy5cbi8vLyBAcGFyYW0ge01hcH0gJHRoZW1lIFRoZSB0aGVtZSB0byBnZW5lcmF0ZSBjb2xvciBzdHlsZXMgZm9yLlxuLy8vIEBwYXJhbSB7QXJnTGlzdH0gQWRkaXRpb25hbCBvcHRpb25hbCBhcmd1bWVudHMgKG9ubHkgc3VwcG9ydGVkIGZvciBNMyB0aGVtZXMpOlxuLy8vICAgJGNvbG9yLXZhcmlhbnQ6IFRoZSBjb2xvciB2YXJpYW50IHRvIHVzZSBmb3IgdGhlIHNlbGVjdGVkIGNoaXA6IHByaW1hcnksIHNlY29uZGFyeSwgdGVydGlhcnksXG4vLy8gICAgICBvciBlcnJvciAoSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdCBzZWNvbmRhcnkgY29sb3Igd2lsbCBiZSB1c2VkKS5cbkBtaXhpbiBjb2xvcigkdGhlbWUsICRvcHRpb25zLi4uKSB7XG4gIEBpZiBpbnNwZWN0aW9uLmdldC10aGVtZS12ZXJzaW9uKCR0aGVtZSkgPT0gMSB7XG4gICAgQGluY2x1ZGUgX3RoZW1lLWZyb20tdG9rZW5zKGluc3BlY3Rpb24uZ2V0LXRoZW1lLXRva2VucygkdGhlbWUsIGNvbG9yKSwgJG9wdGlvbnMuLi4pO1xuICB9XG4gIEBlbHNlIHtcbiAgICAubWF0LW1kYy1zdGFuZGFyZC1jaGlwIHtcbiAgICAgICRkZWZhdWx0LWNvbG9yLXRva2VuczogdG9rZW5zLW1kYy1jaGlwLmdldC1jb2xvci10b2tlbnMoJHRoZW1lKTtcbiAgICAgIEBpbmNsdWRlIG1kYy1jaGlwLXRoZW1lLnRoZW1lKCRkZWZhdWx0LWNvbG9yLXRva2Vucyk7XG4gICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tdmFsdWVzKFxuICAgICAgICAgIHRva2Vucy1tYXQtY2hpcC4kcHJlZml4LCB0b2tlbnMtbWF0LWNoaXAuZ2V0LWNvbG9yLXRva2VucygkdGhlbWUpKTtcblxuICAgICAgJi5tYXQtbWRjLWNoaXAtc2VsZWN0ZWQsXG4gICAgICAmLm1hdC1tZGMtY2hpcC1oaWdobGlnaHRlZCB7XG4gICAgICAgICYubWF0LXByaW1hcnkge1xuICAgICAgICAgICRwcmltYXJ5LWNvbG9yLXRva2VuczogdG9rZW5zLW1kYy1jaGlwLmdldC1jb2xvci10b2tlbnMoJHRoZW1lLCBwcmltYXJ5KTtcbiAgICAgICAgICBAaW5jbHVkZSBtZGMtY2hpcC10aGVtZS50aGVtZSgkcHJpbWFyeS1jb2xvci10b2tlbnMpO1xuICAgICAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi12YWx1ZXMoXG4gICAgICAgICAgICAgIHRva2Vucy1tYXQtY2hpcC4kcHJlZml4LCB0b2tlbnMtbWF0LWNoaXAuZ2V0LWNvbG9yLXRva2VucygkdGhlbWUsIHByaW1hcnkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWF0LWFjY2VudCB7XG4gICAgICAgICAgJGFjY2VudC1jb2xvci10b2tlbnM6IHRva2Vucy1tZGMtY2hpcC5nZXQtY29sb3ItdG9rZW5zKCR0aGVtZSwgYWNjZW50KTtcbiAgICAgICAgICBAaW5jbHVkZSBtZGMtY2hpcC10aGVtZS50aGVtZSgkYWNjZW50LWNvbG9yLXRva2Vucyk7XG4gICAgICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXZhbHVlcyhcbiAgICAgICAgICAgICAgdG9rZW5zLW1hdC1jaGlwLiRwcmVmaXgsIHRva2Vucy1tYXQtY2hpcC5nZXQtY29sb3ItdG9rZW5zKCR0aGVtZSwgYWNjZW50KSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLm1hdC13YXJuIHtcbiAgICAgICAgICAkd2Fybi1jb2xvci10b2tlbnM6IHRva2Vucy1tZGMtY2hpcC5nZXQtY29sb3ItdG9rZW5zKCR0aGVtZSwgd2Fybik7XG4gICAgICAgICAgQGluY2x1ZGUgbWRjLWNoaXAtdGhlbWUudGhlbWUoJHdhcm4tY29sb3ItdG9rZW5zKTtcbiAgICAgICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tdmFsdWVzKFxuICAgICAgICAgICAgICB0b2tlbnMtbWF0LWNoaXAuJHByZWZpeCwgdG9rZW5zLW1hdC1jaGlwLmdldC1jb2xvci10b2tlbnMoJHRoZW1lLCB3YXJuKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8vIE91dHB1dHMgdHlwb2dyYXBoeSB0aGVtZSBzdHlsZXMgZm9yIHRoZSBtYXQtY2hpcHMuXG4vLy8gQHBhcmFtIHtNYXB9ICR0aGVtZSBUaGUgdGhlbWUgdG8gZ2VuZXJhdGUgdHlwb2dyYXBoeSBzdHlsZXMgZm9yLlxuQG1peGluIHR5cG9ncmFwaHkoJHRoZW1lKSB7XG4gIEBpZiBpbnNwZWN0aW9uLmdldC10aGVtZS12ZXJzaW9uKCR0aGVtZSkgPT0gMSB7XG4gICAgQGluY2x1ZGUgX3RoZW1lLWZyb20tdG9rZW5zKGluc3BlY3Rpb24uZ2V0LXRoZW1lLXRva2VucygkdGhlbWUsIHR5cG9ncmFwaHkpKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgJHR5cG9ncmFwaHktdG9rZW5zOiB0b2tlbnMtbWRjLWNoaXAuZ2V0LXR5cG9ncmFwaHktdG9rZW5zKCR0aGVtZSk7XG5cbiAgICAubWF0LW1kYy1zdGFuZGFyZC1jaGlwIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1jaGlwLXRoZW1lLnRoZW1lKCR0eXBvZ3JhcGh5LXRva2Vucyk7XG4gICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tdmFsdWVzKFxuICAgICAgICAgIHRva2Vucy1tYXQtY2hpcC4kcHJlZml4LCB0b2tlbnMtbWF0LWNoaXAuZ2V0LXR5cG9ncmFwaHktdG9rZW5zKCR0aGVtZSkpO1xuICAgIH1cbiAgfVxufVxuXG4vLy8gT3V0cHV0cyBkZW5zaXR5IHRoZW1lIHN0eWxlcyBmb3IgdGhlIG1hdC1jaGlwcy5cbi8vLyBAcGFyYW0ge01hcH0gJHRoZW1lIFRoZSB0aGVtZSB0byBnZW5lcmF0ZSBkZW5zaXR5IHN0eWxlcyBmb3IuXG5AbWl4aW4gZGVuc2l0eSgkdGhlbWUpIHtcbiAgQGlmIGluc3BlY3Rpb24uZ2V0LXRoZW1lLXZlcnNpb24oJHRoZW1lKSA9PSAxIHtcbiAgICBAaW5jbHVkZSBfdGhlbWUtZnJvbS10b2tlbnMoaW5zcGVjdGlvbi5nZXQtdGhlbWUtdG9rZW5zKCR0aGVtZSwgZGVuc2l0eSkpO1xuICB9XG4gIEBlbHNlIHtcbiAgICAkZGVuc2l0eS10b2tlbnM6IHRva2Vucy1tZGMtY2hpcC5nZXQtZGVuc2l0eS10b2tlbnMoJHRoZW1lKTtcblxuICAgIC5tYXQtbWRjLWNoaXAubWF0LW1kYy1zdGFuZGFyZC1jaGlwIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1jaGlwLXRoZW1lLnRoZW1lKCRkZW5zaXR5LXRva2Vucyk7XG4gICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tdmFsdWVzKFxuICAgICAgICAgIHRva2Vucy1tYXQtY2hpcC4kcHJlZml4LCB0b2tlbnMtbWF0LWNoaXAuZ2V0LWRlbnNpdHktdG9rZW5zKCR0aGVtZSkpO1xuICAgIH1cbiAgfVxufVxuXG4vLy8gT3V0cHV0cyBhbGwgKGJhc2UsIGNvbG9yLCB0eXBvZ3JhcGh5LCBhbmQgZGVuc2l0eSkgdGhlbWUgc3R5bGVzIGZvciB0aGUgbWF0LWNoaXBzLlxuLy8vIEBwYXJhbSB7TWFwfSAkdGhlbWUgVGhlIHRoZW1lIHRvIGdlbmVyYXRlIHN0eWxlcyBmb3IuXG4vLy8gQHBhcmFtIHtBcmdMaXN0fSBBZGRpdGlvbmFsIG9wdGlvbmFsIGFyZ3VtZW50cyAob25seSBzdXBwb3J0ZWQgZm9yIE0zIHRoZW1lcyk6XG4vLy8gICAkY29sb3ItdmFyaWFudDogVGhlIGNvbG9yIHZhcmlhbnQgdG8gdXNlIGZvciB0aGUgc2VsZWN0ZWQgY2hpcDogcHJpbWFyeSwgc2Vjb25kYXJ5LCB0ZXJ0aWFyeSxcbi8vLyAgICAgIG9yIGVycm9yIChJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0IHNlY29uZGFyeSBjb2xvciB3aWxsIGJlIHVzZWQpLlxuQG1peGluIHRoZW1lKCR0aGVtZSwgJG9wdGlvbnMuLi4pIHtcbiAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLCAnbWF0LWNoaXBzJykge1xuICAgIEBpZiBpbnNwZWN0aW9uLmdldC10aGVtZS12ZXJzaW9uKCR0aGVtZSkgPT0gMSB7XG4gICAgICBAaW5jbHVkZSBfdGhlbWUtZnJvbS10b2tlbnMoaW5zcGVjdGlvbi5nZXQtdGhlbWUtdG9rZW5zKCR0aGVtZSksICRvcHRpb25zLi4uKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgQGluY2x1ZGUgYmFzZSgkdGhlbWUpO1xuICAgICAgQGlmIGluc3BlY3Rpb24udGhlbWUtaGFzKCR0aGVtZSwgY29sb3IpIHtcbiAgICAgICAgQGluY2x1ZGUgY29sb3IoJHRoZW1lKTtcbiAgICAgIH1cbiAgICAgIEBpZiBpbnNwZWN0aW9uLnRoZW1lLWhhcygkdGhlbWUsIGRlbnNpdHkpIHtcbiAgICAgICAgQGluY2x1ZGUgZGVuc2l0eSgkdGhlbWUpO1xuICAgICAgfVxuICAgICAgQGlmIGluc3BlY3Rpb24udGhlbWUtaGFzKCR0aGVtZSwgdHlwb2dyYXBoeSkge1xuICAgICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0aGVtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfdGhlbWUtZnJvbS10b2tlbnMoJHRva2VucywgJG9wdGlvbnMuLi4pIHtcbiAgQGluY2x1ZGUgdmFsaWRhdGlvbi5zZWxlY3Rvci1kZWZpbmVkKFxuICAgICAgJ0NhbGxzIHRvIEFuZ3VsYXIgTWF0ZXJpYWwgdGhlbWUgbWl4aW5zIHdpdGggYW4gTTMgdGhlbWUgbXVzdCBiZSB3cmFwcGVkIGluIGEgc2VsZWN0b3InKTtcbiAgJG1kYy1jaGlwLXRva2VuczogdG9rZW4tdXRpbHMuZ2V0LXRva2Vucy1mb3IoJHRva2VucywgdG9rZW5zLW1kYy1jaGlwLiRwcmVmaXgsICRvcHRpb25zLi4uKTtcbiAgJG1hdC1jaGlwLXRva2VuczogdG9rZW4tdXRpbHMuZ2V0LXRva2Vucy1mb3IoJHRva2VucywgdG9rZW5zLW1hdC1jaGlwLiRwcmVmaXgsICRvcHRpb25zLi4uKTtcbiAgQGluY2x1ZGUgbWRjLWNoaXAtdGhlbWUudGhlbWUoJG1kYy1jaGlwLXRva2Vucyk7XG4gIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi12YWx1ZXModG9rZW5zLW1hdC1jaGlwLiRwcmVmaXgsICRtYXQtY2hpcC10b2tlbnMpO1xufVxuIiwiQHVzZSAnQG1hdGVyaWFsL3N3aXRjaC9zd2l0Y2gtdGhlbWUnIGFzIG1kYy1zd2l0Y2gtdGhlbWU7XG5AdXNlICdAbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLXRoZW1lJyBhcyBtZGMtZm9ybS1maWVsZC10aGVtZTtcbkB1c2UgJy4uL2NvcmUvc3R5bGUvc2Fzcy11dGlscyc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvaW5zcGVjdGlvbic7XG5AdXNlICcuLi9jb3JlL3RoZW1pbmcvdmFsaWRhdGlvbic7XG5AdXNlICcuLi9jb3JlL3Rva2Vucy90b2tlbi11dGlscyc7XG5AdXNlICcuLi9jb3JlL3R5cG9ncmFwaHkvdHlwb2dyYXBoeSc7XG5AdXNlICcuLi9jb3JlL3Rva2Vucy9tMi9tZGMvZm9ybS1maWVsZCcgYXMgdG9rZW5zLW1kYy1mb3JtLWZpZWxkO1xuQHVzZSAnLi4vY29yZS90b2tlbnMvbTIvbWF0L3N3aXRjaCcgYXMgdG9rZW5zLW1hdC1zd2l0Y2g7XG5AdXNlICcuLi9jb3JlL3Rva2Vucy9tMi9tZGMvc3dpdGNoJyBhcyB0b2tlbnMtbWRjLXN3aXRjaDtcblxuLy8vIE91dHB1dHMgYmFzZSB0aGVtZSBzdHlsZXMgKHN0eWxlcyBub3QgZGVwZW5kZW50IG9uIHRoZSBjb2xvciwgdHlwb2dyYXBoeSwgb3IgZGVuc2l0eSBzZXR0aW5ncylcbi8vLyBmb3IgdGhlIG1hdC1zbGlkZS10b2dnbGUuXG4vLy8gQHBhcmFtIHtNYXB9ICR0aGVtZSBUaGUgdGhlbWUgdG8gZ2VuZXJhdGUgYmFzZSBzdHlsZXMgZm9yLlxuQG1peGluIGJhc2UoJHRoZW1lKSB7XG4gIEBpZiBpbnNwZWN0aW9uLmdldC10aGVtZS12ZXJzaW9uKCR0aGVtZSkgPT0gMSB7XG4gICAgQGluY2x1ZGUgX3RoZW1lLWZyb20tdG9rZW5zKGluc3BlY3Rpb24uZ2V0LXRoZW1lLXRva2VucygkdGhlbWUsIGJhc2UpKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgc2Fzcy11dGlscy5jdXJyZW50LXNlbGVjdG9yLW9yLXJvb3QoKSB7XG4gICAgICAkbWF0LXRva2VuczogdG9rZW5zLW1hdC1zd2l0Y2guZ2V0LXVudGhlbWFibGUtdG9rZW5zKCk7XG4gICAgICAkbWRjLXRva2VuczogdG9rZW5zLW1kYy1zd2l0Y2guZ2V0LXVudGhlbWFibGUtdG9rZW5zKCk7XG4gICAgICBAaW5jbHVkZSBtZGMtc3dpdGNoLXRoZW1lLnRoZW1lKCRtZGMtdG9rZW5zKTtcbiAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi12YWx1ZXModG9rZW5zLW1hdC1zd2l0Y2guJHByZWZpeCwgJG1hdC10b2tlbnMpO1xuICAgIH1cbiAgfVxufVxuXG4vLy8gT3V0cHV0cyBjb2xvciB0aGVtZSBzdHlsZXMgZm9yIHRoZSBtYXQtc2xpZGUtdG9nZ2xlLlxuLy8vIEBwYXJhbSB7TWFwfSAkdGhlbWUgVGhlIHRoZW1lIHRvIGdlbmVyYXRlIGNvbG9yIHN0eWxlcyBmb3IuXG4vLy8gQHBhcmFtIHtBcmdMaXN0fSBBZGRpdGlvbmFsIG9wdGlvbmFsIGFyZ3VtZW50cyAob25seSBzdXBwb3J0ZWQgZm9yIE0zIHRoZW1lcyk6XG4vLy8gICAkY29sb3ItdmFyaWFudDogVGhlIGNvbG9yIHZhcmlhbnQgdG8gdXNlIGZvciB0aGUgc2xpZGUtdG9nZ2xlOiBwcmltYXJ5LCBzZWNvbmRhcnksIHRlcnRpYXJ5LFxuLy8vICAgICAgb3IgZXJyb3IgKElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHQgcHJpbWFyeSBjb2xvciB3aWxsIGJlIHVzZWQpLlxuQG1peGluIGNvbG9yKCR0aGVtZSwgJG9wdGlvbnMuLi4pIHtcbiAgQGlmIGluc3BlY3Rpb24uZ2V0LXRoZW1lLXZlcnNpb24oJHRoZW1lKSA9PSAxIHtcbiAgICBAaW5jbHVkZSBfdGhlbWUtZnJvbS10b2tlbnMoaW5zcGVjdGlvbi5nZXQtdGhlbWUtdG9rZW5zKCR0aGVtZSwgY29sb3IpLCAkb3B0aW9ucy4uLik7XG4gIH1cbiAgQGVsc2Uge1xuICAgICRpcy1kYXJrOiBpbnNwZWN0aW9uLmdldC10aGVtZS10eXBlKCR0aGVtZSkgPT0gZGFyaztcbiAgICAkbWF0LXRva2VuczogdG9rZW5zLW1hdC1zd2l0Y2guZ2V0LWNvbG9yLXRva2VucygkdGhlbWUpO1xuICAgICRtZGMtdG9rZW5zOiB0b2tlbnMtbWRjLXN3aXRjaC5nZXQtY29sb3ItdG9rZW5zKCR0aGVtZSk7XG5cbiAgICAvLyBBZGQgdmFsdWVzIGZvciBNREMgc2xpZGUgdG9nZ2xlcyB0b2tlbnNcbiAgICBAaW5jbHVkZSBzYXNzLXV0aWxzLmN1cnJlbnQtc2VsZWN0b3Itb3Itcm9vdCgpIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1zd2l0Y2gtdGhlbWUudGhlbWUoJG1kYy10b2tlbnMpO1xuICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXZhbHVlcyh0b2tlbnMtbWF0LXN3aXRjaC4kcHJlZml4LCAkbWF0LXRva2Vucyk7XG5cbiAgICAgIC8vIFRPRE8od2FnbmVybWFjaWVsKTogVXNlIG91ciB0b2tlbiBzeXN0ZW0gdG8gZGVmaW5lIHRoaXMgY3NzIHZhcmlhYmxlLlxuICAgIC0tbWRjLXN3aXRjaC1kaXNhYmxlZC1sYWJlbC10ZXh0LWNvbG9yOiAje2luc3BlY3Rpb24uZ2V0LXRoZW1lLWNvbG9yKFxuICAgICAgJHRoZW1lLFxuICAgICAgZm9yZWdyb3VuZCxcbiAgICAgIGRpc2FibGVkLXRleHRcbiAgICApfTtcblxuICAgIC5tYXQtbWRjLXNsaWRlLXRvZ2dsZSB7XG4gICAgICAgIEBpbmNsdWRlIG1kYy1mb3JtLWZpZWxkLXRoZW1lLnRoZW1lKHRva2Vucy1tZGMtZm9ybS1maWVsZC5nZXQtY29sb3ItdG9rZW5zKCR0aGVtZSkpO1xuXG4gICAgICAgIC8vIENoYW5nZSB0aGUgY29sb3IgcGFsZXR0ZSByZWxhdGVkIHRva2VucyB0byBhY2NlbnQgb3Igd2FybiBpZiBhcHBsaWNhYmxlXG4gICAgICAgICYubWF0LWFjY2VudCB7XG4gICAgICAgICAgQGluY2x1ZGUgbWRjLXN3aXRjaC10aGVtZS50aGVtZShcbiAgICAgICAgICAgICAgdG9rZW5zLW1kYy1zd2l0Y2gucHJpdmF0ZS1nZXQtY29sb3ItcGFsZXR0ZS1jb2xvci10b2tlbnMoJHRoZW1lLCBhY2NlbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWF0LXdhcm4ge1xuICAgICAgICAgIEBpbmNsdWRlIG1kYy1zd2l0Y2gtdGhlbWUudGhlbWUoXG4gICAgICAgICAgICAgIHRva2Vucy1tZGMtc3dpdGNoLnByaXZhdGUtZ2V0LWNvbG9yLXBhbGV0dGUtY29sb3ItdG9rZW5zKCR0aGVtZSwgd2FybikpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vLyBPdXRwdXRzIHR5cG9ncmFwaHkgdGhlbWUgc3R5bGVzIGZvciB0aGUgbWF0LXNsaWRlLXRvZ2dsZS5cbi8vLyBAcGFyYW0ge01hcH0gJHRoZW1lIFRoZSB0aGVtZSB0byBnZW5lcmF0ZSB0eXBvZ3JhcGh5IHN0eWxlcyBmb3IuXG5AbWl4aW4gdHlwb2dyYXBoeSgkdGhlbWUpIHtcbiAgQGlmIGluc3BlY3Rpb24uZ2V0LXRoZW1lLXZlcnNpb24oJHRoZW1lKSA9PSAxIHtcbiAgICBAaW5jbHVkZSBfdGhlbWUtZnJvbS10b2tlbnMoaW5zcGVjdGlvbi5nZXQtdGhlbWUtdG9rZW5zKCR0aGVtZSwgdHlwb2dyYXBoeSkpO1xuICB9XG4gIEBlbHNlIHtcbiAgICAkbWF0LXRva2VuczogdG9rZW5zLW1hdC1zd2l0Y2guZ2V0LXR5cG9ncmFwaHktdG9rZW5zKCR0aGVtZSk7XG4gICAgJG1kYy10b2tlbnM6IHRva2Vucy1tZGMtc3dpdGNoLmdldC10eXBvZ3JhcGh5LXRva2VucygkdGhlbWUpO1xuXG4gICAgLy8gQWRkIHZhbHVlcyBmb3IgTURDIHNsaWRlIHRvZ2dsZSB0b2tlbnNcbiAgICBAaW5jbHVkZSBzYXNzLXV0aWxzLmN1cnJlbnQtc2VsZWN0b3Itb3Itcm9vdCgpIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1zd2l0Y2gtdGhlbWUudGhlbWUoJG1kYy10b2tlbnMpO1xuICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXZhbHVlcyh0b2tlbnMtbWF0LXN3aXRjaC4kcHJlZml4LCAkbWF0LXRva2Vucyk7XG5cbiAgICAgIC5tYXQtbWRjLXNsaWRlLXRvZ2dsZSB7XG4gICAgICAgIEBpbmNsdWRlIG1kYy1mb3JtLWZpZWxkLXRoZW1lLnRoZW1lKHRva2Vucy1tZGMtZm9ybS1maWVsZC5nZXQtdHlwb2dyYXBoeS10b2tlbnMoJHRoZW1lKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vLyBPdXRwdXRzIGRlbnNpdHkgdGhlbWUgc3R5bGVzIGZvciB0aGUgbWF0LXNsaWRlLXRvZ2dsZS5cbi8vLyBAcGFyYW0ge01hcH0gJHRoZW1lIFRoZSB0aGVtZSB0byBnZW5lcmF0ZSBkZW5zaXR5IHN0eWxlcyBmb3IuXG5AbWl4aW4gZGVuc2l0eSgkdGhlbWUpIHtcbiAgQGlmIGluc3BlY3Rpb24uZ2V0LXRoZW1lLXZlcnNpb24oJHRoZW1lKSA9PSAxIHtcbiAgICBAaW5jbHVkZSBfdGhlbWUtZnJvbS10b2tlbnMoaW5zcGVjdGlvbi5nZXQtdGhlbWUtdG9rZW5zKCR0aGVtZSwgZGVuc2l0eSkpO1xuICB9XG4gIEBlbHNlIHtcbiAgICBAaW5jbHVkZSBzYXNzLXV0aWxzLmN1cnJlbnQtc2VsZWN0b3Itb3Itcm9vdCgpIHtcbiAgICAgICRtYXQtdG9rZW5zOiB0b2tlbnMtbWF0LXN3aXRjaC5nZXQtZGVuc2l0eS10b2tlbnMoJHRoZW1lKTtcbiAgICAgICRtZGMtdG9rZW5zOiB0b2tlbnMtbWRjLXN3aXRjaC5nZXQtZGVuc2l0eS10b2tlbnMoJHRoZW1lKTtcbiAgICAgIEBpbmNsdWRlIG1kYy1zd2l0Y2gtdGhlbWUudGhlbWUodG9rZW5zLW1kYy1zd2l0Y2guZ2V0LWRlbnNpdHktdG9rZW5zKCR0aGVtZSkpO1xuICAgIH1cbiAgfVxufVxuXG4vLy8gT3V0cHV0cyBhbGwgKGJhc2UsIGNvbG9yLCB0eXBvZ3JhcGh5LCBhbmQgZGVuc2l0eSkgdGhlbWUgc3R5bGVzIGZvciB0aGUgbWF0LWljb24uXG4vLy8gQHBhcmFtIHtNYXB9ICR0aGVtZSBUaGUgdGhlbWUgdG8gZ2VuZXJhdGUgc3R5bGVzIGZvci5cbi8vLyBAcGFyYW0ge0FyZ0xpc3R9IEFkZGl0aW9uYWwgb3B0aW9uYWwgYXJndW1lbnRzIChvbmx5IHN1cHBvcnRlZCBmb3IgTTMgdGhlbWVzKTpcbi8vLyAgICRjb2xvci12YXJpYW50OiBUaGUgY29sb3IgdmFyaWFudCB0byB1c2UgZm9yIHRoZSBzbGlkZS10b2dnbGU6IHByaW1hcnksIHNlY29uZGFyeSwgdGVydGlhcnksXG4vLy8gICAgICBvciBlcnJvciAoSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdCBwcmltYXJ5IGNvbG9yIHdpbGwgYmUgdXNlZCkuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLCAkb3B0aW9ucy4uLikge1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtc2xpZGUtdG9nZ2xlJykge1xuICAgIEBpZiBpbnNwZWN0aW9uLmdldC10aGVtZS12ZXJzaW9uKCR0aGVtZSkgPT0gMSB7XG4gICAgICBAaW5jbHVkZSBfdGhlbWUtZnJvbS10b2tlbnMoaW5zcGVjdGlvbi5nZXQtdGhlbWUtdG9rZW5zKCR0aGVtZSksICRvcHRpb25zLi4uKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgQGluY2x1ZGUgYmFzZSgkdGhlbWUpO1xuICAgICAgQGlmIGluc3BlY3Rpb24udGhlbWUtaGFzKCR0aGVtZSwgY29sb3IpIHtcbiAgICAgICAgQGluY2x1ZGUgY29sb3IoJHRoZW1lKTtcbiAgICAgIH1cbiAgICAgIEBpZiBpbnNwZWN0aW9uLnRoZW1lLWhhcygkdGhlbWUsIGRlbnNpdHkpIHtcbiAgICAgICAgQGluY2x1ZGUgZGVuc2l0eSgkdGhlbWUpO1xuICAgICAgfVxuICAgICAgQGlmIGluc3BlY3Rpb24udGhlbWUtaGFzKCR0aGVtZSwgdHlwb2dyYXBoeSkge1xuICAgICAgICBAaW5jbHVkZSB0eXBvZ3JhcGh5KCR0aGVtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfdGhlbWUtZnJvbS10b2tlbnMoJHRva2VucywgJG9wdGlvbnMuLi4pIHtcbiAgQGluY2x1ZGUgdmFsaWRhdGlvbi5zZWxlY3Rvci1kZWZpbmVkKFxuICAgICAgJ0NhbGxzIHRvIEFuZ3VsYXIgTWF0ZXJpYWwgdGhlbWUgbWl4aW5zIHdpdGggYW4gTTMgdGhlbWUgbXVzdCBiZSB3cmFwcGVkIGluIGEgc2VsZWN0b3InKTtcbiAgLy8gRG9uJ3QgcGFzcyAkb3B0aW9ucyBoZXJlLCBzaW5jZSB0aGUgbWRjLWZvcm0tZmllbGQgZG9lc24ndCBzdXBwb3J0IGNvbG9yIG9wdGlvbnMsXG4gIC8vIG9ubHkgdGhlIG1kYy1zd2l0Y2ggZG9lcy5cbiAgJG1kYy1mb3JtLWZpZWxkLXRva2VuczogdG9rZW4tdXRpbHMuZ2V0LXRva2Vucy1mb3IoJHRva2VucywgdG9rZW5zLW1kYy1mb3JtLWZpZWxkLiRwcmVmaXgpO1xuICAkbWF0LXN3aXRjaC10b2tlbnM6IHRva2VuLXV0aWxzLmdldC10b2tlbnMtZm9yKCR0b2tlbnMsIHRva2Vucy1tYXQtc3dpdGNoLiRwcmVmaXgpO1xuICAkbWRjLXN3aXRjaC10b2tlbnM6IHRva2VuLXV0aWxzLmdldC10b2tlbnMtZm9yKCR0b2tlbnMsIHRva2Vucy1tZGMtc3dpdGNoLiRwcmVmaXgsICRvcHRpb25zLi4uKTtcblxuICBAaW5jbHVkZSBtZGMtZm9ybS1maWVsZC10aGVtZS50aGVtZSgkbWRjLWZvcm0tZmllbGQtdG9rZW5zKTtcbiAgQGluY2x1ZGUgbWRjLXN3aXRjaC10aGVtZS50aGVtZSgkbWRjLXN3aXRjaC10b2tlbnMpO1xuICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tdmFsdWVzKHRva2Vucy1tYXQtc3dpdGNoLiRwcmVmaXgsICRtYXQtc3dpdGNoLXRva2Vucyk7XG59XG4iLCJAdXNlICdAbWF0ZXJpYWwvcmFkaW8vcmFkaW8tdGhlbWUnIGFzIG1kYy1yYWRpby10aGVtZTtcbkB1c2UgJ0BtYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtdGhlbWUnIGFzIG1kYy1mb3JtLWZpZWxkLXRoZW1lO1xuQHVzZSAnLi4vY29yZS9zdHlsZS9zYXNzLXV0aWxzJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy9pbnNwZWN0aW9uJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy92YWxpZGF0aW9uJztcbkB1c2UgJy4uL2NvcmUvdG9rZW5zL3Rva2VuLXV0aWxzJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdG9rZW5zL20yL21kYy9mb3JtLWZpZWxkJyBhcyB0b2tlbnMtbWRjLWZvcm0tZmllbGQ7XG5AdXNlICcuLi9jb3JlL3Rva2Vucy9tMi9tZGMvcmFkaW8nIGFzIHRva2Vucy1tZGMtcmFkaW87XG5AdXNlICcuLi9jb3JlL3Rva2Vucy9tMi9tYXQvcmFkaW8nIGFzIHRva2Vucy1tYXQtcmFkaW87XG5cbi8vLyBPdXRwdXRzIGJhc2UgdGhlbWUgc3R5bGVzIChzdHlsZXMgbm90IGRlcGVuZGVudCBvbiB0aGUgY29sb3IsIHR5cG9ncmFwaHksIG9yIGRlbnNpdHkgc2V0dGluZ3MpXG4vLy8gZm9yIHRoZSBtYXQtcmFkaW8uXG4vLy8gQHBhcmFtIHtNYXB9ICR0aGVtZSBUaGUgdGhlbWUgdG8gZ2VuZXJhdGUgYmFzZSBzdHlsZXMgZm9yLlxuQG1peGluIGJhc2UoJHRoZW1lKSB7XG4gIEBpZiBpbnNwZWN0aW9uLmdldC10aGVtZS12ZXJzaW9uKCR0aGVtZSkgPT0gMSB7XG4gICAgQGluY2x1ZGUgX3RoZW1lLWZyb20tdG9rZW5zKGluc3BlY3Rpb24uZ2V0LXRoZW1lLXRva2VucygkdGhlbWUsIGJhc2UpKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgc2Fzcy11dGlscy5jdXJyZW50LXNlbGVjdG9yLW9yLXJvb3QoKSB7XG4gICAgICBAaW5jbHVkZSBtZGMtcmFkaW8tdGhlbWUudGhlbWUodG9rZW5zLW1kYy1yYWRpby5nZXQtdW50aGVtYWJsZS10b2tlbnMoKSk7XG4gICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tdmFsdWVzKFxuICAgICAgICAgIHRva2Vucy1tYXQtcmFkaW8uJHByZWZpeCwgdG9rZW5zLW1hdC1yYWRpby5nZXQtdW50aGVtYWJsZS10b2tlbnMoKSk7XG4gICAgfVxuICB9XG59XG5cbi8vLyBPdXRwdXRzIGNvbG9yIHRoZW1lIHN0eWxlcyBmb3IgdGhlIG1hdC1yYWRpby5cbi8vLyBAcGFyYW0ge01hcH0gJHRoZW1lIFRoZSB0aGVtZSB0byBnZW5lcmF0ZSBjb2xvciBzdHlsZXMgZm9yLlxuLy8vIEBwYXJhbSB7QXJnTGlzdH0gQWRkaXRpb25hbCBvcHRpb25hbCBhcmd1bWVudHMgKG9ubHkgc3VwcG9ydGVkIGZvciBNMyB0aGVtZXMpOlxuLy8vICAgJGNvbG9yLXZhcmlhbnQ6IFRoZSBjb2xvciB2YXJpYW50IHRvIHVzZSBmb3IgdGhlIHJhZGlvIGJ1dHRvbjogcHJpbWFyeSwgc2Vjb25kYXJ5LCB0ZXJ0aWFyeSxcbi8vLyAgICAgb3IgZXJyb3IgKElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHQgcHJpbWFyeSBjb2xvciB3aWxsIGJlIHVzZWQpLlxuQG1peGluIGNvbG9yKCR0aGVtZSwgJG9wdGlvbnMuLi4pIHtcbiAgQGlmIGluc3BlY3Rpb24uZ2V0LXRoZW1lLXZlcnNpb24oJHRoZW1lKSA9PSAxIHtcbiAgICBAaW5jbHVkZSBfdGhlbWUtZnJvbS10b2tlbnMoaW5zcGVjdGlvbi5nZXQtdGhlbWUtdG9rZW5zKCR0aGVtZSwgY29sb3IpLCAkb3B0aW9ucy4uLik7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC5tYXQtbWRjLXJhZGlvLWJ1dHRvbiB7XG4gICAgICBAaW5jbHVkZSBtZGMtZm9ybS1maWVsZC10aGVtZS50aGVtZSh0b2tlbnMtbWRjLWZvcm0tZmllbGQuZ2V0LWNvbG9yLXRva2VucygkdGhlbWUpKTtcblxuICAgICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICAgIEBpbmNsdWRlIG1kYy1yYWRpby10aGVtZS50aGVtZSh0b2tlbnMtbWRjLXJhZGlvLmdldC1jb2xvci10b2tlbnMoJHRoZW1lLCBwcmltYXJ5KSk7XG4gICAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi12YWx1ZXModG9rZW5zLW1hdC1yYWRpby4kcHJlZml4LFxuICAgICAgICAgIHRva2Vucy1tYXQtcmFkaW8uZ2V0LWNvbG9yLXRva2VucygkdGhlbWUsIHByaW1hcnkpKTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IHtcbiAgICAgICAgQGluY2x1ZGUgbWRjLXJhZGlvLXRoZW1lLnRoZW1lKHRva2Vucy1tZGMtcmFkaW8uZ2V0LWNvbG9yLXRva2VucygkdGhlbWUpKTtcbiAgICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXZhbHVlcyh0b2tlbnMtbWF0LXJhZGlvLiRwcmVmaXgsXG4gICAgICAgICAgdG9rZW5zLW1hdC1yYWRpby5nZXQtY29sb3ItdG9rZW5zKCR0aGVtZSkpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIHtcbiAgICAgICAgQGluY2x1ZGUgbWRjLXJhZGlvLXRoZW1lLnRoZW1lKHRva2Vucy1tZGMtcmFkaW8uZ2V0LWNvbG9yLXRva2VucygkdGhlbWUsIHdhcm4pKTtcbiAgICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXZhbHVlcyh0b2tlbnMtbWF0LXJhZGlvLiRwcmVmaXgsXG4gICAgICAgICAgdG9rZW5zLW1hdC1yYWRpby5nZXQtY29sb3ItdG9rZW5zKCR0aGVtZSwgd2FybikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLy8gT3V0cHV0cyB0eXBvZ3JhcGh5IHRoZW1lIHN0eWxlcyBmb3IgdGhlIG1hdC1yYWRpby5cbi8vLyBAcGFyYW0ge01hcH0gJHRoZW1lIFRoZSB0aGVtZSB0byBnZW5lcmF0ZSB0eXBvZ3JhcGh5IHN0eWxlcyBmb3IuXG5AbWl4aW4gdHlwb2dyYXBoeSgkdGhlbWUpIHtcbiAgQGlmIGluc3BlY3Rpb24uZ2V0LXRoZW1lLXZlcnNpb24oJHRoZW1lKSA9PSAxIHtcbiAgICBAaW5jbHVkZSBfdGhlbWUtZnJvbS10b2tlbnMoaW5zcGVjdGlvbi5nZXQtdGhlbWUtdG9rZW5zKCR0aGVtZSwgdHlwb2dyYXBoeSkpO1xuICB9XG4gIEBlbHNlIHtcbiAgICBAaW5jbHVkZSBzYXNzLXV0aWxzLmN1cnJlbnQtc2VsZWN0b3Itb3Itcm9vdCgpIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1yYWRpby10aGVtZS50aGVtZSh0b2tlbnMtbWRjLXJhZGlvLmdldC10eXBvZ3JhcGh5LXRva2VucygkdGhlbWUpKTtcbiAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi12YWx1ZXMoXG4gICAgICAgIHRva2Vucy1tYXQtcmFkaW8uJHByZWZpeCwgdG9rZW5zLW1hdC1yYWRpby5nZXQtdHlwb2dyYXBoeS10b2tlbnMoJHRoZW1lKSk7XG4gICAgfVxuXG4gICAgLm1hdC1tZGMtcmFkaW8tYnV0dG9uIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1mb3JtLWZpZWxkLXRoZW1lLnRoZW1lKHRva2Vucy1tZGMtZm9ybS1maWVsZC5nZXQtdHlwb2dyYXBoeS10b2tlbnMoJHRoZW1lKSk7XG4gICAgfVxuICB9XG59XG5cbi8vLyBPdXRwdXRzIHR5cG9ncmFwaHkgdGhlbWUgc3R5bGVzIGZvciB0aGUgbWF0LXJhZGlvLlxuLy8vIEBwYXJhbSB7TWFwfSAkdGhlbWUgVGhlIHRoZW1lIHRvIGdlbmVyYXRlIGRlbnNpdHkgc3R5bGVzIGZvci5cbkBtaXhpbiBkZW5zaXR5KCR0aGVtZSkge1xuICBAaWYgaW5zcGVjdGlvbi5nZXQtdGhlbWUtdmVyc2lvbigkdGhlbWUpID09IDEge1xuICAgIEBpbmNsdWRlIF90aGVtZS1mcm9tLXRva2VucyhpbnNwZWN0aW9uLmdldC10aGVtZS10b2tlbnMoJHRoZW1lLCBkZW5zaXR5KSk7XG4gIH1cbiAgQGVsc2Uge1xuICAgICRkZW5zaXR5LXNjYWxlOiBpbnNwZWN0aW9uLmdldC10aGVtZS1kZW5zaXR5KCR0aGVtZSk7XG5cbiAgICBAaW5jbHVkZSBzYXNzLXV0aWxzLmN1cnJlbnQtc2VsZWN0b3Itb3Itcm9vdCgpIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1yYWRpby10aGVtZS50aGVtZSh0b2tlbnMtbWRjLXJhZGlvLmdldC1kZW5zaXR5LXRva2VucygkdGhlbWUpKTtcbiAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi12YWx1ZXMoXG4gICAgICAgIHRva2Vucy1tYXQtcmFkaW8uJHByZWZpeCwgdG9rZW5zLW1hdC1yYWRpby5nZXQtZGVuc2l0eS10b2tlbnMoJHRoZW1lKSk7XG4gICAgfVxuICB9XG59XG5cbi8vLyBPdXRwdXRzIGFsbCAoYmFzZSwgY29sb3IsIHR5cG9ncmFwaHksIGFuZCBkZW5zaXR5KSB0aGVtZSBzdHlsZXMgZm9yIHRoZSBtYXQtcmFkaW8uXG4vLy8gQHBhcmFtIHtNYXB9ICR0aGVtZSBUaGUgdGhlbWUgdG8gZ2VuZXJhdGUgc3R5bGVzIGZvci5cbi8vLyBAcGFyYW0ge0FyZ0xpc3R9IEFkZGl0aW9uYWwgb3B0aW9uYWwgYXJndW1lbnRzIChvbmx5IHN1cHBvcnRlZCBmb3IgTTMgdGhlbWVzKTpcbi8vLyAgICRjb2xvci12YXJpYW50OiBUaGUgY29sb3IgdmFyaWFudCB0byB1c2UgZm9yIHRoZSByYWRpbyBidXR0b246IHByaW1hcnksIHNlY29uZGFyeSwgdGVydGlhcnksXG4vLy8gICAgIG9yIGVycm9yIChJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0IHByaW1hcnkgY29sb3Igd2lsbCBiZSB1c2VkKS5cbkBtaXhpbiB0aGVtZSgkdGhlbWUsICRvcHRpb25zLi4uKSB7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1yYWRpbycpIHtcbiAgICBAaWYgaW5zcGVjdGlvbi5nZXQtdGhlbWUtdmVyc2lvbigkdGhlbWUpID09IDEge1xuICAgICAgQGluY2x1ZGUgX3RoZW1lLWZyb20tdG9rZW5zKGluc3BlY3Rpb24uZ2V0LXRoZW1lLXRva2VucygkdGhlbWUpLCAkb3B0aW9ucy4uLik7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIEBpbmNsdWRlIGJhc2UoJHRoZW1lKTtcbiAgICAgIEBpZiBpbnNwZWN0aW9uLnRoZW1lLWhhcygkdGhlbWUsIGNvbG9yKSB7XG4gICAgICAgIEBpbmNsdWRlIGNvbG9yKCR0aGVtZSk7XG4gICAgICB9XG4gICAgICBAaWYgaW5zcGVjdGlvbi50aGVtZS1oYXMoJHRoZW1lLCBkZW5zaXR5KSB7XG4gICAgICAgIEBpbmNsdWRlIGRlbnNpdHkoJHRoZW1lKTtcbiAgICAgIH1cbiAgICAgIEBpZiBpbnNwZWN0aW9uLnRoZW1lLWhhcygkdGhlbWUsIHR5cG9ncmFwaHkpIHtcbiAgICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdGhlbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX3RoZW1lLWZyb20tdG9rZW5zKCR0b2tlbnMsICRvcHRpb25zLi4uKSB7XG4gIEBpbmNsdWRlIHZhbGlkYXRpb24uc2VsZWN0b3ItZGVmaW5lZChcbiAgICAgICdDYWxscyB0byBBbmd1bGFyIE1hdGVyaWFsIHRoZW1lIG1peGlucyB3aXRoIGFuIE0zIHRoZW1lIG11c3QgYmUgd3JhcHBlZCBpbiBhIHNlbGVjdG9yJyk7XG4gICRtZGMtcmFkaW8tdG9rZW5zOiB0b2tlbi11dGlscy5nZXQtdG9rZW5zLWZvcigkdG9rZW5zLCB0b2tlbnMtbWRjLXJhZGlvLiRwcmVmaXgsICRvcHRpb25zLi4uKTtcbiAgJG1hdC1yYWRpby10b2tlbnM6IHRva2VuLXV0aWxzLmdldC10b2tlbnMtZm9yKCR0b2tlbnMsIHRva2Vucy1tYXQtcmFkaW8uJHByZWZpeCwgJG9wdGlvbnMuLi4pO1xuICAvLyBEb24ndCBwYXNzICRvcHRpb25zIGhlcmUsIHNpbmNlIHRoZSBtZGMtZm9ybS1maWVsZCBkb2Vzbid0IHN1cHBvcnQgY29sb3Igb3B0aW9ucyxcbiAgLy8gb25seSB0aGUgbWRjLXJhZGlvIGFuZCBtYXQtcmFkaW8gZG8uXG4gICRtZGMtZm9ybS1maWVsZC10b2tlbnM6IHRva2VuLXV0aWxzLmdldC10b2tlbnMtZm9yKCR0b2tlbnMsIHRva2Vucy1tZGMtZm9ybS1maWVsZC4kcHJlZml4KTtcbiAgQGluY2x1ZGUgbWRjLXJhZGlvLXRoZW1lLnRoZW1lKCRtZGMtcmFkaW8tdG9rZW5zKTtcbiAgQGluY2x1ZGUgbWRjLWZvcm0tZmllbGQtdGhlbWUudGhlbWUoJG1kYy1mb3JtLWZpZWxkLXRva2Vucyk7XG4gIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi12YWx1ZXModG9rZW5zLW1hdC1yYWRpby4kcHJlZml4LCAkbWF0LXJhZGlvLXRva2Vucyk7XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdAbWF0ZXJpYWwvbGlzdC9ldm9sdXRpb24tbWl4aW5zJztcbkB1c2UgJ0BtYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC10aGVtZScgYXMgbWRjLWNoZWNrYm94LXRoZW1lO1xuQHVzZSAnQG1hdGVyaWFsL3JhZGlvL3JhZGlvLXRoZW1lJyBhcyBtZGMtcmFkaW8tdGhlbWU7XG5AdXNlICdAbWF0ZXJpYWwvbGlzdC9saXN0LXRoZW1lJyBhcyBtZGMtbGlzdC10aGVtZTtcblxuQHVzZSAnLi4vY29yZS9zdHlsZS9zYXNzLXV0aWxzJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy9pbnNwZWN0aW9uJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy92YWxpZGF0aW9uJztcbkB1c2UgJy4uL2NvcmUvdG9rZW5zL20yL21hdC9saXN0JyBhcyB0b2tlbnMtbWF0LWxpc3Q7XG5AdXNlICcuLi9jb3JlL3Rva2Vucy9tMi9tZGMvY2hlY2tib3gnIGFzIHRva2Vucy1tZGMtY2hlY2tib3g7XG5AdXNlICcuLi9jb3JlL3Rva2Vucy9tMi9tZGMvcmFkaW8nIGFzIHRva2Vucy1tZGMtcmFkaW87XG5AdXNlICcuLi9jb3JlL3Rva2Vucy9tMi9tZGMvbGlzdCcgYXMgdG9rZW5zLW1kYy1saXN0O1xuQHVzZSAnLi4vY29yZS90b2tlbnMvdG9rZW4tdXRpbHMnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuXG5AbWl4aW4gYmFzZSgkdGhlbWUpIHtcbiAgLy8gQWRkIGRlZmF1bHQgdmFsdWVzIGZvciB0b2tlbnMgbm90IHJlbGF0ZWQgdG8gY29sb3IsIHR5cG9ncmFwaHksIG9yIGRlbnNpdHkuXG4gIEBpZiBpbnNwZWN0aW9uLmdldC10aGVtZS12ZXJzaW9uKCR0aGVtZSkgPT0gMSB7XG4gICAgQGluY2x1ZGUgX3RoZW1lLWZyb20tdG9rZW5zKGluc3BlY3Rpb24uZ2V0LXRoZW1lLXRva2VucygkdGhlbWUsIGJhc2UpKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgc2Fzcy11dGlscy5jdXJyZW50LXNlbGVjdG9yLW9yLXJvb3QoKSB7XG4gICAgICBAaW5jbHVkZSBtZGMtbGlzdC10aGVtZS50aGVtZSh0b2tlbnMtbWRjLWxpc3QuZ2V0LXVudGhlbWFibGUtdG9rZW5zKCkpO1xuICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXZhbHVlcyhcbiAgICAgICAgdG9rZW5zLW1hdC1saXN0LiRwcmVmaXgsIHRva2Vucy1tYXQtbGlzdC5nZXQtdW50aGVtYWJsZS10b2tlbnMoKSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBjb2xvcigkdGhlbWUpIHtcbiAgQGlmIGluc3BlY3Rpb24uZ2V0LXRoZW1lLXZlcnNpb24oJHRoZW1lKSA9PSAxIHtcbiAgICBAaW5jbHVkZSBfdGhlbWUtZnJvbS10b2tlbnMoaW5zcGVjdGlvbi5nZXQtdGhlbWUtdG9rZW5zKCR0aGVtZSwgY29sb3IpKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgJG1kYy1saXN0LWNvbG9yLXRva2VuczogdG9rZW5zLW1kYy1saXN0LmdldC1jb2xvci10b2tlbnMoJHRoZW1lKTtcblxuICAgIC8vIEFkZCB2YWx1ZXMgZm9yIE1EQyBsaXN0IHRva2Vucy5cbiAgICBAaW5jbHVkZSBzYXNzLXV0aWxzLmN1cnJlbnQtc2VsZWN0b3Itb3Itcm9vdCgpIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1saXN0LXRoZW1lLnRoZW1lKCRtZGMtbGlzdC1jb2xvci10b2tlbnMpO1xuICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXZhbHVlcyhcbiAgICAgICAgdG9rZW5zLW1hdC1saXN0LiRwcmVmaXgsIHRva2Vucy1tYXQtbGlzdC5nZXQtY29sb3ItdG9rZW5zKCR0aGVtZSkpO1xuICAgIH1cblxuICAgIC5tZGMtbGlzdC1pdGVtX19zdGFydCxcbiAgICAubWRjLWxpc3QtaXRlbV9fZW5kIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1yYWRpby10aGVtZS50aGVtZSh0b2tlbnMtbWRjLXJhZGlvLmdldC1jb2xvci10b2tlbnMoJHRoZW1lLCBwcmltYXJ5KSk7XG4gICAgfVxuXG4gICAgLm1hdC1hY2NlbnQge1xuICAgICAgLm1kYy1saXN0LWl0ZW1fX3N0YXJ0LFxuICAgICAgLm1kYy1saXN0LWl0ZW1fX2VuZCB7XG4gICAgICAgIEBpbmNsdWRlIG1kYy1yYWRpby10aGVtZS50aGVtZSh0b2tlbnMtbWRjLXJhZGlvLmdldC1jb2xvci10b2tlbnMoJHRoZW1lLCBhY2NlbnQpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXdhcm4ge1xuICAgICAgLm1kYy1saXN0LWl0ZW1fX3N0YXJ0LFxuICAgICAgLm1kYy1saXN0LWl0ZW1fX2VuZCB7XG4gICAgICAgIEBpbmNsdWRlIG1kYy1yYWRpby10aGVtZS50aGVtZSh0b2tlbnMtbWRjLXJhZGlvLmdldC1jb2xvci10b2tlbnMoJHRoZW1lLCB3YXJuKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1tZGMtbGlzdC1vcHRpb24ge1xuICAgICAgQGluY2x1ZGUgbWRjLWNoZWNrYm94LXRoZW1lLnRoZW1lKHRva2Vucy1tZGMtY2hlY2tib3guZ2V0LWNvbG9yLXRva2VucygkdGhlbWUsIHByaW1hcnkpKTtcbiAgICB9XG4gICAgLm1hdC1tZGMtbGlzdC1vcHRpb24ubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBtZGMtY2hlY2tib3gtdGhlbWUudGhlbWUodG9rZW5zLW1kYy1jaGVja2JveC5nZXQtY29sb3ItdG9rZW5zKCR0aGVtZSwgYWNjZW50KSk7XG4gICAgfVxuICAgIC5tYXQtbWRjLWxpc3Qtb3B0aW9uLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1jaGVja2JveC10aGVtZS50aGVtZSh0b2tlbnMtbWRjLWNoZWNrYm94LmdldC1jb2xvci10b2tlbnMoJHRoZW1lLCB3YXJuKSk7XG4gICAgfVxuXG4gICAgLy8gVGhlcmUgaXMgbm8gdG9rZW4gZm9yIGFjdGl2YXRlZCBjb2xvciBvbiBuYXYgbGlzdC5cbiAgICAvLyBUT0RPKG1tYWxlcmJhKTogQWRkIGEgdG9rZW4gdG8gTURDIG9yIG1ha2UgYSBjdXN0b20gb25lLlxuICAgIC5tYXQtbWRjLWxpc3QtYmFzZS5tYXQtbWRjLWxpc3QtYmFzZSB7XG4gICAgICBAaW5jbHVkZSBldm9sdXRpb24tbWl4aW5zLmxpc3Qtc2VsZWN0ZWQtaW5rLWNvbG9yKFxuICAgICAgICAgIGluc3BlY3Rpb24uZ2V0LXRoZW1lLWNvbG9yKCR0aGVtZSwgcHJpbWFyeSkpO1xuICAgIH1cblxuICAgIC8vIFRPRE8obW1hbGVyYmEpOiBMZWFraW5nIHN0eWxlcyBmcm9tIHRoZSBvbGQgTURDIGxpc3QgbWl4aW5zIHVzZWQgaW4gb3RoZXIgY29tcG9uZW50cyBjYW5cbiAgICAvLyAgY2F1c2Ugb3BhY2l0eSBpc3N1ZXMsIHNvIHdlIG5lZWQgdGhpcyBvdmVycmlkZSBmb3Igbm93LiBXZSBjYW4gcmVtb3ZlIGl0IHdoZW4gYWxsXG4gICAgLy8gIEFuZ3VsYXIgTWF0ZXJpYWwgY29tcG9uZW50cyBzdG9wIHVzaW5nIHRoZSBvbGQgTURDIG1peGlucy5cbiAgICAubWF0LW1kYy1saXN0LWJhc2UgLm1kYy1saXN0LWl0ZW0tLWRpc2FibGVkIHtcbiAgICAgIC5tZGMtbGlzdC1pdGVtX19zdGFydCxcbiAgICAgIC5tZGMtbGlzdC1pdGVtX19jb250ZW50LFxuICAgICAgLm1kYy1saXN0LWl0ZW1fX2VuZCB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBkZW5zaXR5KCR0aGVtZSkge1xuICBAaWYgaW5zcGVjdGlvbi5nZXQtdGhlbWUtdmVyc2lvbigkdGhlbWUpID09IDEge1xuICAgIEBpbmNsdWRlIF90aGVtZS1mcm9tLXRva2VucyhpbnNwZWN0aW9uLmdldC10aGVtZS10b2tlbnMoJHRoZW1lLCBkZW5zaXR5KSk7XG4gIH1cbiAgQGVsc2Uge1xuICAgICRkZW5zaXR5LXNjYWxlOiBpbnNwZWN0aW9uLmdldC10aGVtZS1kZW5zaXR5KCR0aGVtZSk7XG4gICAgJG1kYy1saXN0LWRlbnNpdHktdG9rZW5zOiB0b2tlbnMtbWRjLWxpc3QuZ2V0LWRlbnNpdHktdG9rZW5zKCR0aGVtZSk7XG5cbiAgICAvLyBBZGQgdmFsdWVzIGZvciBNREMgbGlzdCB0b2tlbnMuXG4gICAgQGluY2x1ZGUgc2Fzcy11dGlscy5jdXJyZW50LXNlbGVjdG9yLW9yLXJvb3QoKSB7XG4gICAgICBAaW5jbHVkZSBtZGMtbGlzdC10aGVtZS50aGVtZSgkbWRjLWxpc3QtZGVuc2l0eS10b2tlbnMpO1xuICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXZhbHVlcyhcbiAgICAgICAgdG9rZW5zLW1hdC1saXN0LiRwcmVmaXgsIHRva2Vucy1tYXQtbGlzdC5nZXQtZGVuc2l0eS10b2tlbnMoJHRoZW1lKSk7XG4gICAgfVxuXG4gICAgLm1kYy1saXN0LWl0ZW1fX3N0YXJ0LFxuICAgIC5tZGMtbGlzdC1pdGVtX19lbmQge1xuICAgICAgQGluY2x1ZGUgbWRjLXJhZGlvLXRoZW1lLnRoZW1lKHRva2Vucy1tZGMtcmFkaW8uZ2V0LWRlbnNpdHktdG9rZW5zKCR0aGVtZSkpO1xuICAgIH1cblxuICAgIC8vIFRPRE8obW1hbGVyYmEpOiBUaGlzIGlzIGFkZGVkIHRvIG1haW50YWluIHRoZSBzYW1lIHN0eWxlIE1EQyB1c2VkIHByaW9yIHRvIHRoZSB0b2tlbi1iYXNlZFxuICAgIC8vICBBUEksIHRvIGF2b2lkIHNjcmVlbnNob3QgZGlmZnMuIFdlIHNob3VsZCByZW1vdmUgaXQgaW4gZmF2b3Igb2YgZm9sbG93aW5nIE1EQydzIGN1cnJlbnRcbiAgICAvLyAgc3R5bGUsIG9yIGFkZCBjdXN0b20gdG9rZW5zIGZvciBpdC5cbiAgICAubWF0LW1kYy1saXN0LWl0ZW0ge1xuICAgICAgJi5tZGMtbGlzdC1pdGVtLS13aXRoLWxlYWRpbmctYXZhdGFyLFxuICAgICAgJi5tZGMtbGlzdC1pdGVtLS13aXRoLWxlYWRpbmctY2hlY2tib3gsXG4gICAgICAmLm1kYy1saXN0LWl0ZW0tLXdpdGgtbGVhZGluZy1pY29uIHtcbiAgICAgICAgJi5tZGMtbGlzdC1pdGVtLS13aXRoLW9uZS1saW5lIHtcbiAgICAgICAgICBoZWlnaHQ6IG1hcC5nZXQoKFxuICAgICAgICAgICAgMDogNTZweCxcbiAgICAgICAgICAgIC0xOiA1MnB4LFxuICAgICAgICAgICAgLTI6IDQ4cHgsXG4gICAgICAgICAgICAtMzogNDRweCxcbiAgICAgICAgICAgIC00OiA0MHB4LFxuICAgICAgICAgICAgLTU6IDQwcHgsXG4gICAgICAgICAgKSwgJGRlbnNpdHktc2NhbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tZGMtbGlzdC1pdGVtLS13aXRoLXR3by1saW5lcyB7XG4gICAgICAgICAgaGVpZ2h0OiBtYXAuZ2V0KChcbiAgICAgICAgICAgIDA6IDcycHgsXG4gICAgICAgICAgICAtMTogNjhweCxcbiAgICAgICAgICAgIC0yOiA2NHB4LFxuICAgICAgICAgICAgLTM6IDYwcHgsXG4gICAgICAgICAgICAtNDogNTZweCxcbiAgICAgICAgICAgIC01OiA1NnB4LFxuICAgICAgICAgICksICRkZW5zaXR5LXNjYWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdHlwb2dyYXBoeSgkdGhlbWUpIHtcbiAgQGlmIGluc3BlY3Rpb24uZ2V0LXRoZW1lLXZlcnNpb24oJHRoZW1lKSA9PSAxIHtcbiAgICBAaW5jbHVkZSBfdGhlbWUtZnJvbS10b2tlbnMoaW5zcGVjdGlvbi5nZXQtdGhlbWUtdG9rZW5zKCR0aGVtZSwgdHlwb2dyYXBoeSkpO1xuICB9XG4gIEBlbHNlIHtcbiAgICAkbWRjLWxpc3QtdHlwb2dyYXBoeS10b2tlbnM6IHRva2Vucy1tZGMtbGlzdC5nZXQtdHlwb2dyYXBoeS10b2tlbnMoJHRoZW1lKTtcblxuICAgIC8vIEFkZCB2YWx1ZXMgZm9yIE1EQyBsaXN0IHRva2Vucy5cbiAgICBAaW5jbHVkZSBzYXNzLXV0aWxzLmN1cnJlbnQtc2VsZWN0b3Itb3Itcm9vdCgpIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1saXN0LXRoZW1lLnRoZW1lKCRtZGMtbGlzdC10eXBvZ3JhcGh5LXRva2Vucyk7XG4gICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tdmFsdWVzKFxuICAgICAgICB0b2tlbnMtbWF0LWxpc3QuJHByZWZpeCwgdG9rZW5zLW1hdC1saXN0LmdldC10eXBvZ3JhcGh5LXRva2VucygkdGhlbWUpKTtcbiAgICB9XG5cbiAgICAvLyBNREMgZG9lcyBub3QgaGF2ZSB0b2tlbnMgZm9yIHRoZSBzdWJoZWFkZXIuXG4gICAgLy8gVE9ETyhtbWFsZXJiYSk6IERpc2N1c3Mgd2l0aCBNREMgYWJvdXQgYWRkaW5nIHRoZW0sIG9yIGNyZWF0ZSBjdXN0b20gdG9rZW5zLlxuICAgIC5tZGMtbGlzdC1ncm91cF9fc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQ6IGluc3BlY3Rpb24uZ2V0LXRoZW1lLXR5cG9ncmFwaHkoJHRoZW1lLCBzdWJ0aXRsZS0xLCBmb250KTtcbiAgICAgIGxldHRlci1zcGFjaW5nOiBpbnNwZWN0aW9uLmdldC10aGVtZS10eXBvZ3JhcGh5KCR0aGVtZSwgc3VidGl0bGUtMSwgbGV0dGVyLXNwYWNpbmcpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1saXN0Jykge1xuICAgIEBpZiBpbnNwZWN0aW9uLmdldC10aGVtZS12ZXJzaW9uKCR0aGVtZSkgPT0gMSB7XG4gICAgICBAaW5jbHVkZSBfdGhlbWUtZnJvbS10b2tlbnMoaW5zcGVjdGlvbi5nZXQtdGhlbWUtdG9rZW5zKCR0aGVtZSkpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBAaW5jbHVkZSBiYXNlKCR0aGVtZSk7XG4gICAgICBAaWYgaW5zcGVjdGlvbi50aGVtZS1oYXMoJHRoZW1lLCBjb2xvcikge1xuICAgICAgICBAaW5jbHVkZSBjb2xvcigkdGhlbWUpO1xuICAgICAgfVxuICAgICAgQGlmIGluc3BlY3Rpb24udGhlbWUtaGFzKCR0aGVtZSwgZGVuc2l0eSkge1xuICAgICAgICBAaW5jbHVkZSBkZW5zaXR5KCR0aGVtZSk7XG4gICAgICB9XG4gICAgICBAaWYgaW5zcGVjdGlvbi50aGVtZS1oYXMoJHRoZW1lLCB0eXBvZ3JhcGh5KSB7XG4gICAgICAgIEBpbmNsdWRlIHR5cG9ncmFwaHkoJHRoZW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF90aGVtZS1mcm9tLXRva2VucygkdG9rZW5zKSB7XG4gIEBpbmNsdWRlIHZhbGlkYXRpb24uc2VsZWN0b3ItZGVmaW5lZChcbiAgICAgICdDYWxscyB0byBBbmd1bGFyIE1hdGVyaWFsIHRoZW1lIG1peGlucyB3aXRoIGFuIE0zIHRoZW1lIG11c3QgYmUgd3JhcHBlZCBpbiBhIHNlbGVjdG9yJyk7XG4gIEBpbmNsdWRlIG1kYy1saXN0LXRoZW1lLnRoZW1lKHRva2VuLXV0aWxzLmdldC10b2tlbnMtZm9yKCR0b2tlbnMsIHRva2Vucy1tZGMtbGlzdC4kcHJlZml4KSk7XG5cbiAgJG1hdC1saXN0LXRva2VuczogdG9rZW4tdXRpbHMuZ2V0LXRva2Vucy1mb3IoJHRva2VucywgdG9rZW5zLW1hdC1saXN0LiRwcmVmaXgpO1xuICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tdmFsdWVzKHRva2Vucy1tYXQtbGlzdC4kcHJlZml4LCAkbWF0LWxpc3QtdG9rZW5zKTtcbn1cbiIsIkB1c2UgJ0BtYXRlcmlhbC90YWItaW5kaWNhdG9yL3RhYi1pbmRpY2F0b3ItdGhlbWUnIGFzIG1kYy10YWItaW5kaWNhdG9yLXRoZW1lO1xuQHVzZSAnQG1hdGVyaWFsL3RhYi90YWItdGhlbWUnIGFzIG1kYy10YWItdGhlbWU7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3Nhc3MtdXRpbHMnO1xuQHVzZSAnLi4vY29yZS90b2tlbnMvbTIvbWRjL3RhYicgYXMgdG9rZW5zLW1kYy10YWI7XG5AdXNlICcuLi9jb3JlL3Rva2Vucy9tMi9tZGMvdGFiLWluZGljYXRvcicgYXMgdG9rZW5zLW1kYy10YWItaW5kaWNhdG9yO1xuQHVzZSAnLi4vY29yZS90b2tlbnMvbTIvbWF0L3RhYi1oZWFkZXInIGFzIHRva2Vucy1tYXQtdGFiLWhlYWRlcjtcbkB1c2UgJy4uL2NvcmUvdG9rZW5zL20yL21hdC90YWItaGVhZGVyLXdpdGgtYmFja2dyb3VuZCcgYXMgdG9rZW5zLW1hdC10YWItaGVhZGVyLXdpdGgtYmFja2dyb3VuZDtcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy9pbnNwZWN0aW9uJztcbkB1c2UgJy4uL2NvcmUvdGhlbWluZy92YWxpZGF0aW9uJztcbkB1c2UgJy4uL2NvcmUvdHlwb2dyYXBoeS90eXBvZ3JhcGh5JztcbkB1c2UgJy4uL2NvcmUvdG9rZW5zL3Rva2VuLXV0aWxzJztcblxuLy8vIE91dHB1dHMgYmFzZSB0aGVtZSBzdHlsZXMgKHN0eWxlcyBub3QgZGVwZW5kZW50IG9uIHRoZSBjb2xvciwgdHlwb2dyYXBoeSwgb3IgZGVuc2l0eSBzZXR0aW5ncylcbi8vLyBmb3IgdGhlIG1hdC10YWIuXG4vLy8gQHBhcmFtIHtNYXB9ICR0aGVtZSBUaGUgdGhlbWUgdG8gZ2VuZXJhdGUgYmFzZSBzdHlsZXMgZm9yLlxuQG1peGluIGJhc2UoJHRoZW1lKSB7XG4gIEBpZiBpbnNwZWN0aW9uLmdldC10aGVtZS12ZXJzaW9uKCR0aGVtZSkgPT0gMSB7XG4gICAgQGluY2x1ZGUgX3RoZW1lLWZyb20tdG9rZW5zKGluc3BlY3Rpb24uZ2V0LXRoZW1lLXRva2VucygkdGhlbWUsIGJhc2UpKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgc2Fzcy11dGlscy5jdXJyZW50LXNlbGVjdG9yLW9yLXJvb3QoKSB7XG4gICAgICBAaW5jbHVkZSBtZGMtdGFiLWluZGljYXRvci10aGVtZS50aGVtZSh0b2tlbnMtbWRjLXRhYi1pbmRpY2F0b3IuZ2V0LXVudGhlbWFibGUtdG9rZW5zKCkpO1xuICAgICAgQGluY2x1ZGUgbWRjLXRhYi10aGVtZS5zZWNvbmRhcnktbmF2aWdhdGlvbi10YWItdGhlbWUodG9rZW5zLW1kYy10YWIuZ2V0LXVudGhlbWFibGUtdG9rZW5zKCkpO1xuICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXZhbHVlcyhcbiAgICAgICAgICB0b2tlbnMtbWF0LXRhYi1oZWFkZXIuJHByZWZpeCwgdG9rZW5zLW1hdC10YWItaGVhZGVyLmdldC11bnRoZW1hYmxlLXRva2VucygpKTtcbiAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi12YWx1ZXMoXG4gICAgICAgICAgdG9rZW5zLW1hdC10YWItaGVhZGVyLXdpdGgtYmFja2dyb3VuZC4kcHJlZml4LFxuICAgICAgICAgIHRva2Vucy1tYXQtdGFiLWhlYWRlci13aXRoLWJhY2tncm91bmQuZ2V0LXVudGhlbWFibGUtdG9rZW5zKClcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbi8vLyBPdXRwdXRzIGNvbG9yIHRoZW1lIHN0eWxlcyBmb3IgdGhlIG1hdC10YWIuXG4vLy8gQHBhcmFtIHtNYXB9ICR0aGVtZSBUaGUgdGhlbWUgdG8gZ2VuZXJhdGUgY29sb3Igc3R5bGVzIGZvci5cbi8vLyBAcGFyYW0ge0FyZ0xpc3R9IEFkZGl0aW9uYWwgb3B0aW9uYWwgYXJndW1lbnRzIChvbmx5IHN1cHBvcnRlZCBmb3IgTTMgdGhlbWVzKTpcbi8vLyAgICRjb2xvci12YXJpYW50OiBUaGUgY29sb3IgdmFyaWFudCB0byB1c2UgZm9yIHRoZSB0YWIgaW5kaWNhdG9yOiBwcmltYXJ5LCBzZWNvbmRhcnksXG4vLy8gICAgICB0ZXJ0aWFyeSwgb3IgZXJyb3IgKElmIG5vdCBzcGVjaWZpZWQsIGRlZmF1bHQgcHJpbWFyeSBjb2xvciB3aWxsIGJlIHVzZWQpLlxuQG1peGluIGNvbG9yKCR0aGVtZSwgJG9wdGlvbnMuLi4pIHtcbiAgQGlmIGluc3BlY3Rpb24uZ2V0LXRoZW1lLXZlcnNpb24oJHRoZW1lKSA9PSAxIHtcbiAgICBAaW5jbHVkZSBfdGhlbWUtZnJvbS10b2tlbnMoaW5zcGVjdGlvbi5nZXQtdGhlbWUtdG9rZW5zKCR0aGVtZSwgY29sb3IpLCAkb3B0aW9ucy4uLik7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC5tYXQtbWRjLXRhYi1ncm91cCwgLm1hdC1tZGMtdGFiLW5hdi1iYXIge1xuICAgICAgQGluY2x1ZGUgX3BhbGV0dGUtc3R5bGVzKCR0aGVtZSwgcHJpbWFyeSk7XG5cbiAgICAgICYubWF0LWFjY2VudCB7XG4gICAgICAgIEBpbmNsdWRlIF9wYWxldHRlLXN0eWxlcygkdGhlbWUsIGFjY2VudCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4ge1xuICAgICAgICBAaW5jbHVkZSBfcGFsZXR0ZS1zdHlsZXMoJHRoZW1lLCB3YXJuKTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IHtcbiAgICAgICAgQGluY2x1ZGUgX2JhY2tncm91bmQtc3R5bGVzKCR0aGVtZSwgcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWJhY2tncm91bmQtYWNjZW50IHtcbiAgICAgICAgQGluY2x1ZGUgX2JhY2tncm91bmQtc3R5bGVzKCR0aGVtZSwgYWNjZW50KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYmFja2dyb3VuZC13YXJuIHtcbiAgICAgICAgQGluY2x1ZGUgX2JhY2tncm91bmQtc3R5bGVzKCR0aGVtZSwgd2Fybik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfYmFja2dyb3VuZC1zdHlsZXMoJHRoZW1lLCAkcGFsZXR0ZS1uYW1lKSB7XG4gIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi12YWx1ZXModG9rZW5zLW1hdC10YWItaGVhZGVyLXdpdGgtYmFja2dyb3VuZC4kcHJlZml4LFxuICAgIHRva2Vucy1tYXQtdGFiLWhlYWRlci13aXRoLWJhY2tncm91bmQuZ2V0LWNvbG9yLXRva2VucygkdGhlbWUsICRwYWxldHRlLW5hbWUpKTtcbn1cblxuQG1peGluIF9wYWxldHRlLXN0eWxlcygkdGhlbWUsICRwYWxldHRlLW5hbWUpIHtcbiAgQGluY2x1ZGUgbWRjLXRhYi10aGVtZS5zZWNvbmRhcnktbmF2aWdhdGlvbi10YWItdGhlbWUoXG4gICAgdG9rZW5zLW1kYy10YWIuZ2V0LWNvbG9yLXRva2VucygkdGhlbWUsICRwYWxldHRlLW5hbWUpKTtcbiAgQGluY2x1ZGUgbWRjLXRhYi1pbmRpY2F0b3ItdGhlbWUudGhlbWUoXG4gICAgdG9rZW5zLW1kYy10YWItaW5kaWNhdG9yLmdldC1jb2xvci10b2tlbnMoJHRoZW1lLCAkcGFsZXR0ZS1uYW1lKSk7XG4gIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi12YWx1ZXModG9rZW5zLW1hdC10YWItaGVhZGVyLiRwcmVmaXgsXG4gICB0b2tlbnMtbWF0LXRhYi1oZWFkZXIuZ2V0LWNvbG9yLXRva2VucygkdGhlbWUsICRwYWxldHRlLW5hbWUpKTtcbn1cblxuLy8vIE91dHB1dHMgdHlwb2dyYXBoeSB0aGVtZSBzdHlsZXMgZm9yIHRoZSBtYXQtdGFiLlxuLy8vIEBwYXJhbSB7TWFwfSAkdGhlbWUgVGhlIHRoZW1lIHRvIGdlbmVyYXRlIHR5cG9ncmFwaHkgc3R5bGVzIGZvci5cbkBtaXhpbiB0eXBvZ3JhcGh5KCR0aGVtZSkge1xuICBAaWYgaW5zcGVjdGlvbi5nZXQtdGhlbWUtdmVyc2lvbigkdGhlbWUpID09IDEge1xuICAgIEBpbmNsdWRlIF90aGVtZS1mcm9tLXRva2VucyhpbnNwZWN0aW9uLmdldC10aGVtZS10b2tlbnMoJHRoZW1lLCB0eXBvZ3JhcGh5KSk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC5tYXQtbWRjLXRhYi1oZWFkZXIge1xuICAgICAgQGluY2x1ZGUgbWRjLXRhYi10aGVtZS5zZWNvbmRhcnktbmF2aWdhdGlvbi10YWItdGhlbWUoXG4gICAgICAgICAgdG9rZW5zLW1kYy10YWIuZ2V0LXR5cG9ncmFwaHktdG9rZW5zKCR0aGVtZSkpO1xuICAgICAgQGluY2x1ZGUgbWRjLXRhYi1pbmRpY2F0b3ItdGhlbWUudGhlbWUoXG4gICAgICAgICAgdG9rZW5zLW1kYy10YWItaW5kaWNhdG9yLmdldC10eXBvZ3JhcGh5LXRva2VucygkdGhlbWUpKTtcbiAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi12YWx1ZXModG9rZW5zLW1hdC10YWItaGVhZGVyLiRwcmVmaXgsXG4gICAgICAgIHRva2Vucy1tYXQtdGFiLWhlYWRlci5nZXQtdHlwb2dyYXBoeS10b2tlbnMoJHRoZW1lKSk7XG4gICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tdmFsdWVzKHRva2Vucy1tYXQtdGFiLWhlYWRlci13aXRoLWJhY2tncm91bmQuJHByZWZpeCxcbiAgICAgICAgdG9rZW5zLW1hdC10YWItaGVhZGVyLXdpdGgtYmFja2dyb3VuZC5nZXQtdHlwb2dyYXBoeS10b2tlbnMoJHRoZW1lKSk7XG4gICAgfVxuICB9XG59XG5cbi8vLyBPdXRwdXRzIGRlbnNpdHkgdGhlbWUgc3R5bGVzIGZvciB0aGUgbWF0LXRhYi5cbi8vLyBAcGFyYW0ge01hcH0gJHRoZW1lIFRoZSB0aGVtZSB0byBnZW5lcmF0ZSBkZW5zaXR5IHN0eWxlcyBmb3IuXG5AbWl4aW4gZGVuc2l0eSgkdGhlbWUpIHtcbiAgQGlmIGluc3BlY3Rpb24uZ2V0LXRoZW1lLXZlcnNpb24oJHRoZW1lKSA9PSAxIHtcbiAgICBAaW5jbHVkZSBfdGhlbWUtZnJvbS10b2tlbnMoaW5zcGVjdGlvbi5nZXQtdGhlbWUtdG9rZW5zKCR0aGVtZSwgZGVuc2l0eSkpO1xuICB9XG4gIEBlbHNlIHtcbiAgICAubWF0LW1kYy10YWItaGVhZGVyIHtcbiAgICAgIEBpbmNsdWRlIG1kYy10YWItdGhlbWUuc2Vjb25kYXJ5LW5hdmlnYXRpb24tdGFiLXRoZW1lKFxuICAgICAgICAgIHRva2Vucy1tZGMtdGFiLmdldC1kZW5zaXR5LXRva2VucygkdGhlbWUpKTtcbiAgICAgIEBpbmNsdWRlIG1kYy10YWItaW5kaWNhdG9yLXRoZW1lLnRoZW1lKFxuICAgICAgICAgIHRva2Vucy1tZGMtdGFiLWluZGljYXRvci5nZXQtZGVuc2l0eS10b2tlbnMoJHRoZW1lKSk7XG4gICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tdmFsdWVzKHRva2Vucy1tYXQtdGFiLWhlYWRlci4kcHJlZml4LFxuICAgICAgICB0b2tlbnMtbWF0LXRhYi1oZWFkZXIuZ2V0LWRlbnNpdHktdG9rZW5zKCR0aGVtZSkpO1xuICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXZhbHVlcyh0b2tlbnMtbWF0LXRhYi1oZWFkZXItd2l0aC1iYWNrZ3JvdW5kLiRwcmVmaXgsXG4gICAgICAgIHRva2Vucy1tYXQtdGFiLWhlYWRlci13aXRoLWJhY2tncm91bmQuZ2V0LWRlbnNpdHktdG9rZW5zKCR0aGVtZSkpO1xuICAgIH1cbiAgfVxufVxuXG4vLy8gT3V0cHV0cyBhbGwgKGJhc2UsIGNvbG9yLCB0eXBvZ3JhcGh5LCBhbmQgZGVuc2l0eSkgdGhlbWUgc3R5bGVzIGZvciB0aGUgbWF0LXRhYi5cbi8vLyBAcGFyYW0ge01hcH0gJHRoZW1lIFRoZSB0aGVtZSB0byBnZW5lcmF0ZSBzdHlsZXMgZm9yLlxuLy8vIEBwYXJhbSB7QXJnTGlzdH0gQWRkaXRpb25hbCBvcHRpb25hbCBhcmd1bWVudHMgKG9ubHkgc3VwcG9ydGVkIGZvciBNMyB0aGVtZXMpOlxuLy8vICAgJGNvbG9yLXZhcmlhbnQ6IFRoZSBjb2xvciB2YXJpYW50IHRvIHVzZSBmb3IgdGhlIHRhYiBpbmRpY2F0b3I6IHByaW1hcnksIHNlY29uZGFyeSxcbi8vLyAgICAgIHRlcnRpYXJ5LCBvciBlcnJvciAoSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdCBwcmltYXJ5IGNvbG9yIHdpbGwgYmUgdXNlZCkuXG5AbWl4aW4gdGhlbWUoJHRoZW1lLCAkb3B0aW9ucy4uLikge1xuICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUsICdtYXQtdGFicycpIHtcbiAgICBAaWYgaW5zcGVjdGlvbi5nZXQtdGhlbWUtdmVyc2lvbigkdGhlbWUpID09IDEge1xuICAgICAgQGluY2x1ZGUgX3RoZW1lLWZyb20tdG9rZW5zKGluc3BlY3Rpb24uZ2V0LXRoZW1lLXRva2VucygkdGhlbWUpLCAkb3B0aW9ucy4uLik7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIEBpbmNsdWRlIGJhc2UoJHRoZW1lKTtcbiAgICAgIEBpZiBpbnNwZWN0aW9uLnRoZW1lLWhhcygkdGhlbWUsIGNvbG9yKSB7XG4gICAgICAgIEBpbmNsdWRlIGNvbG9yKCR0aGVtZSk7XG4gICAgICB9XG4gICAgICBAaWYgaW5zcGVjdGlvbi50aGVtZS1oYXMoJHRoZW1lLCBkZW5zaXR5KSB7XG4gICAgICAgIEBpbmNsdWRlIGRlbnNpdHkoJHRoZW1lKTtcbiAgICAgIH1cbiAgICAgIEBpZiBpbnNwZWN0aW9uLnRoZW1lLWhhcygkdGhlbWUsIHR5cG9ncmFwaHkpIHtcbiAgICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdGhlbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX3RoZW1lLWZyb20tdG9rZW5zKCR0b2tlbnMsICRvcHRpb25zLi4uKSB7XG4gIEBpbmNsdWRlIHZhbGlkYXRpb24uc2VsZWN0b3ItZGVmaW5lZChcbiAgICAgICdDYWxscyB0byBBbmd1bGFyIE1hdGVyaWFsIHRoZW1lIG1peGlucyB3aXRoIGFuIE0zIHRoZW1lIG11c3QgYmUgd3JhcHBlZCBpbiBhIHNlbGVjdG9yJyk7XG4gICRtZGMtdGFiLWluZGljYXRvci10b2tlbnM6IHRva2VuLXV0aWxzLmdldC10b2tlbnMtZm9yKFxuICAgICAgJHRva2VucywgdG9rZW5zLW1kYy10YWItaW5kaWNhdG9yLiRwcmVmaXgsICRvcHRpb25zLi4uKTtcbiAgJG1hdC10YWItaGVhZGVyLXRva2VuczogdG9rZW4tdXRpbHMuZ2V0LXRva2Vucy1mb3IoXG4gICAgICAkdG9rZW5zLCB0b2tlbnMtbWF0LXRhYi1oZWFkZXIuJHByZWZpeCwgJG9wdGlvbnMuLi4pO1xuICAvLyBEb24ndCBwYXNzICRvcHRpb25zIGhlcmUsIGJlY2F1c2UgdGhlIG1kYy10YWIgZG9lc24ndCBoYXZlIGNvbG9yIHZhcmlhbnRzLFxuICAvLyBvbmx5IHRoZSBtZGMtdGFiLWluZGljYXRvciBhbmQgbWF0LXRhYi1oZWFkZXIgZG8uXG4gICRtZGMtdGFiLXRva2VuczogdG9rZW4tdXRpbHMuZ2V0LXRva2Vucy1mb3IoJHRva2VucywgdG9rZW5zLW1kYy10YWIuJHByZWZpeCk7XG4gIEBpbmNsdWRlIG1kYy10YWItdGhlbWUuc2Vjb25kYXJ5LW5hdmlnYXRpb24tdGFiLXRoZW1lKCRtZGMtdGFiLXRva2Vucyk7XG4gIEBpbmNsdWRlIG1kYy10YWItaW5kaWNhdG9yLXRoZW1lLnRoZW1lKCRtZGMtdGFiLWluZGljYXRvci10b2tlbnMpO1xuICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tdmFsdWVzKHRva2Vucy1tYXQtdGFiLWhlYWRlci4kcHJlZml4LCAkbWF0LXRhYi1oZWFkZXItdG9rZW5zKTtcbn1cbiIsIkB1c2UgJ0BtYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC10aGVtZScgYXMgbWRjLWNoZWNrYm94LXRoZW1lO1xuQHVzZSAnQG1hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC10aGVtZScgYXMgbWRjLWZvcm0tZmllbGQtdGhlbWU7XG5AdXNlICcuLi9jb3JlL3N0eWxlL3Nhc3MtdXRpbHMnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL2luc3BlY3Rpb24nO1xuQHVzZSAnLi4vY29yZS90aGVtaW5nL3ZhbGlkYXRpb24nO1xuQHVzZSAnLi4vY29yZS90b2tlbnMvdG9rZW4tdXRpbHMnO1xuQHVzZSAnLi4vY29yZS90eXBvZ3JhcGh5L3R5cG9ncmFwaHknO1xuQHVzZSAnLi4vY29yZS90b2tlbnMvbTIvbWRjL2NoZWNrYm94JyBhcyB0b2tlbnMtbWRjLWNoZWNrYm94O1xuQHVzZSAnLi4vY29yZS90b2tlbnMvbTIvbWRjL2Zvcm0tZmllbGQnIGFzIHRva2Vucy1tZGMtZm9ybS1maWVsZDtcbkB1c2UgJy4uL2NvcmUvdG9rZW5zL20yL21hdC9jaGVja2JveCcgYXMgdG9rZW5zLW1hdC1jaGVja2JveDtcblxuLy8vIE91dHB1dHMgYmFzZSB0aGVtZSBzdHlsZXMgKHN0eWxlcyBub3QgZGVwZW5kZW50IG9uIHRoZSBjb2xvciwgdHlwb2dyYXBoeSwgb3IgZGVuc2l0eSBzZXR0aW5ncylcbi8vLyBmb3IgdGhlIG1hdC1jaGVja2JveC5cbi8vLyBAcGFyYW0ge01hcH0gJHRoZW1lIFRoZSB0aGVtZSB0byBnZW5lcmF0ZSBiYXNlIHN0eWxlcyBmb3IuXG5AbWl4aW4gYmFzZSgkdGhlbWUpIHtcbiAgQGlmIGluc3BlY3Rpb24uZ2V0LXRoZW1lLXZlcnNpb24oJHRoZW1lKSA9PSAxIHtcbiAgICBAaW5jbHVkZSBfdGhlbWUtZnJvbS10b2tlbnMoaW5zcGVjdGlvbi5nZXQtdGhlbWUtdG9rZW5zKCR0aGVtZSwgYmFzZSkpO1xuICB9XG4gIEBlbHNlIHtcbiAgICBAaW5jbHVkZSBzYXNzLXV0aWxzLmN1cnJlbnQtc2VsZWN0b3Itb3Itcm9vdCgpIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1jaGVja2JveC10aGVtZS50aGVtZSh0b2tlbnMtbWRjLWNoZWNrYm94LmdldC11bnRoZW1hYmxlLXRva2VucygpKTtcbiAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi12YWx1ZXMoXG4gICAgICAgIHRva2Vucy1tYXQtY2hlY2tib3guJHByZWZpeCwgdG9rZW5zLW1hdC1jaGVja2JveC5nZXQtdW50aGVtYWJsZS10b2tlbnMoKSk7XG4gICAgfVxuICB9XG59XG5cbi8vLyBPdXRwdXRzIGNvbG9yIHRoZW1lIHN0eWxlcyBmb3IgdGhlIG1hdC1jaGVja2JveC5cbi8vLyBAcGFyYW0ge01hcH0gJHRoZW1lIFRoZSB0aGVtZSB0byBnZW5lcmF0ZSBjb2xvciBzdHlsZXMgZm9yLlxuLy8vIEBwYXJhbSB7QXJnTGlzdH0gQWRkaXRpb25hbCBvcHRpb25hbCBhcmd1bWVudHMgKG9ubHkgc3VwcG9ydGVkIGZvciBNMyB0aGVtZXMpOlxuLy8vICAgJGNvbG9yLXZhcmlhbnQ6IFRoZSBjb2xvciB2YXJpYW50IHRvIHVzZSBmb3IgdGhlIGNoZWNrYm94OiBwcmltYXJ5LCBzZWNvbmRhcnksIHRlcnRpYXJ5LCBvclxuLy8vICAgICBlcnJvciAoSWYgbm90IHNwZWNpZmllZCwgZGVmYXVsdCBwcmltYXJ5IGNvbG9yIHdpbGwgYmUgdXNlZCkuXG5AbWl4aW4gY29sb3IoJHRoZW1lLCAkb3B0aW9ucy4uLikge1xuICBAaWYgaW5zcGVjdGlvbi5nZXQtdGhlbWUtdmVyc2lvbigkdGhlbWUpID09IDEge1xuICAgIEBpbmNsdWRlIF90aGVtZS1mcm9tLXRva2VucyhpbnNwZWN0aW9uLmdldC10aGVtZS10b2tlbnMoJHRoZW1lLCBjb2xvciksICRvcHRpb25zLi4uKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgc2Fzcy11dGlscy5jdXJyZW50LXNlbGVjdG9yLW9yLXJvb3QoKSB7XG4gICAgICBAaW5jbHVkZSBtZGMtY2hlY2tib3gtdGhlbWUudGhlbWUodG9rZW5zLW1kYy1jaGVja2JveC5nZXQtY29sb3ItdG9rZW5zKCR0aGVtZSkpO1xuICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXZhbHVlcyhcbiAgICAgICAgdG9rZW5zLW1hdC1jaGVja2JveC4kcHJlZml4LCB0b2tlbnMtbWF0LWNoZWNrYm94LmdldC1jb2xvci10b2tlbnMoJHRoZW1lKSk7XG4gICAgfVxuXG4gICAgLm1hdC1tZGMtY2hlY2tib3gge1xuICAgICAgQGluY2x1ZGUgbWRjLWZvcm0tZmllbGQtdGhlbWUudGhlbWUodG9rZW5zLW1kYy1mb3JtLWZpZWxkLmdldC1jb2xvci10b2tlbnMoJHRoZW1lKSk7XG5cbiAgICAgICYubWF0LXByaW1hcnkge1xuICAgICAgICBAaW5jbHVkZSBtZGMtY2hlY2tib3gtdGhlbWUudGhlbWUodG9rZW5zLW1kYy1jaGVja2JveC5nZXQtY29sb3ItdG9rZW5zKCR0aGVtZSwgcHJpbWFyeSkpO1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIHtcbiAgICAgICAgQGluY2x1ZGUgbWRjLWNoZWNrYm94LXRoZW1lLnRoZW1lKHRva2Vucy1tZGMtY2hlY2tib3guZ2V0LWNvbG9yLXRva2VucygkdGhlbWUsIHdhcm4pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8vIE91dHB1dHMgdHlwb2dyYXBoeSB0aGVtZSBzdHlsZXMgZm9yIHRoZSBtYXQtY2hlY2tib3guXG4vLy8gQHBhcmFtIHtNYXB9ICR0aGVtZSBUaGUgdGhlbWUgdG8gZ2VuZXJhdGUgdHlwb2dyYXBoeSBzdHlsZXMgZm9yLlxuQG1peGluIHR5cG9ncmFwaHkoJHRoZW1lKSB7XG4gIEBpZiBpbnNwZWN0aW9uLmdldC10aGVtZS12ZXJzaW9uKCR0aGVtZSkgPT0gMSB7XG4gICAgQGluY2x1ZGUgX3RoZW1lLWZyb20tdG9rZW5zKGluc3BlY3Rpb24uZ2V0LXRoZW1lLXRva2VucygkdGhlbWUsIHR5cG9ncmFwaHkpKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgc2Fzcy11dGlscy5jdXJyZW50LXNlbGVjdG9yLW9yLXJvb3QoKSB7XG4gICAgICBAaW5jbHVkZSBtZGMtY2hlY2tib3gtdGhlbWUudGhlbWUodG9rZW5zLW1kYy1jaGVja2JveC5nZXQtdHlwb2dyYXBoeS10b2tlbnMoJHRoZW1lKSk7XG4gICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tdmFsdWVzKFxuICAgICAgICB0b2tlbnMtbWF0LWNoZWNrYm94LiRwcmVmaXgsIHRva2Vucy1tYXQtY2hlY2tib3guZ2V0LXR5cG9ncmFwaHktdG9rZW5zKCR0aGVtZSkpO1xuICAgIH1cblxuICAgIC5tYXQtbWRjLWNoZWNrYm94IHtcbiAgICAgIEBpbmNsdWRlIG1kYy1mb3JtLWZpZWxkLXRoZW1lLnRoZW1lKHRva2Vucy1tZGMtZm9ybS1maWVsZC5nZXQtdHlwb2dyYXBoeS10b2tlbnMoJHRoZW1lKSk7XG4gICAgfVxuICB9XG59XG5cbi8vLyBPdXRwdXRzIGRlbnNpdHkgdGhlbWUgc3R5bGVzIGZvciB0aGUgbWF0LWNoZWNrYm94LlxuLy8vIEBwYXJhbSB7TWFwfSAkdGhlbWUgVGhlIHRoZW1lIHRvIGdlbmVyYXRlIGRlbnNpdHkgc3R5bGVzIGZvci5cbkBtaXhpbiBkZW5zaXR5KCR0aGVtZSkge1xuICAkZGVuc2l0eS1zY2FsZTogaW5zcGVjdGlvbi5nZXQtdGhlbWUtZGVuc2l0eSgkdGhlbWUpO1xuXG4gIEBpZiBpbnNwZWN0aW9uLmdldC10aGVtZS12ZXJzaW9uKCR0aGVtZSkgPT0gMSB7XG4gICAgQGluY2x1ZGUgX3RoZW1lLWZyb20tdG9rZW5zKGluc3BlY3Rpb24uZ2V0LXRoZW1lLXRva2VucygkdGhlbWUsIGRlbnNpdHkpKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgc2Fzcy11dGlscy5jdXJyZW50LXNlbGVjdG9yLW9yLXJvb3QoKSB7XG4gICAgICBAaW5jbHVkZSBtZGMtY2hlY2tib3gtdGhlbWUudGhlbWUodG9rZW5zLW1kYy1jaGVja2JveC5nZXQtZGVuc2l0eS10b2tlbnMoJHRoZW1lKSk7XG4gICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tdmFsdWVzKFxuICAgICAgICB0b2tlbnMtbWF0LWNoZWNrYm94LiRwcmVmaXgsIHRva2Vucy1tYXQtY2hlY2tib3guZ2V0LWRlbnNpdHktdG9rZW5zKCR0aGVtZSkpO1xuICAgIH1cbiAgfVxufVxuXG4vLy8gT3V0cHV0cyBhbGwgKGJhc2UsIGNvbG9yLCB0eXBvZ3JhcGh5LCBhbmQgZGVuc2l0eSkgdGhlbWUgc3R5bGVzIGZvciB0aGUgbWF0LWNoZWNrYm94LlxuLy8vIEBwYXJhbSB7TWFwfSAkdGhlbWUgVGhlIHRoZW1lIHRvIGdlbmVyYXRlIHN0eWxlcyBmb3IuXG4vLy8gQHBhcmFtIHtBcmdMaXN0fSBBZGRpdGlvbmFsIG9wdGlvbmFsIGFyZ3VtZW50cyAob25seSBzdXBwb3J0ZWQgZm9yIE0zIHRoZW1lcyk6XG4vLy8gICAkY29sb3ItdmFyaWFudDogVGhlIGNvbG9yIHZhcmlhbnQgdG8gdXNlIGZvciB0aGUgY2hlY2tib3g6IHByaW1hcnksIHNlY29uZGFyeSwgdGVydGlhcnksIG9yXG4vLy8gICAgIGVycm9yIChJZiBub3Qgc3BlY2lmaWVkLCBkZWZhdWx0IHByaW1hcnkgY29sb3Igd2lsbCBiZSB1c2VkKS5cbkBtaXhpbiB0aGVtZSgkdGhlbWUsICRvcHRpb25zLi4uKSB7XG4gIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZSwgJ21hdC1jaGVja2JveCcpIHtcbiAgICBAaWYgaW5zcGVjdGlvbi5nZXQtdGhlbWUtdmVyc2lvbigkdGhlbWUpID09IDEge1xuICAgICAgQGluY2x1ZGUgX3RoZW1lLWZyb20tdG9rZW5zKGluc3BlY3Rpb24uZ2V0LXRoZW1lLXRva2VucygkdGhlbWUpLCAkb3B0aW9ucy4uLik7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIEBpbmNsdWRlIGJhc2UoJHRoZW1lKTtcbiAgICAgIEBpZiBpbnNwZWN0aW9uLnRoZW1lLWhhcygkdGhlbWUsIGNvbG9yKSB7XG4gICAgICAgIEBpbmNsdWRlIGNvbG9yKCR0aGVtZSk7XG4gICAgICB9XG4gICAgICBAaWYgaW5zcGVjdGlvbi50aGVtZS1oYXMoJHRoZW1lLCBkZW5zaXR5KSB7XG4gICAgICAgIEBpbmNsdWRlIGRlbnNpdHkoJHRoZW1lKTtcbiAgICAgIH1cbiAgICAgIEBpZiBpbnNwZWN0aW9uLnRoZW1lLWhhcygkdGhlbWUsIHR5cG9ncmFwaHkpIHtcbiAgICAgICAgQGluY2x1ZGUgdHlwb2dyYXBoeSgkdGhlbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX3RoZW1lLWZyb20tdG9rZW5zKCR0b2tlbnMsICRvcHRpb25zLi4uKSB7XG4gIEBpbmNsdWRlIHZhbGlkYXRpb24uc2VsZWN0b3ItZGVmaW5lZChcbiAgICAgICdDYWxscyB0byBBbmd1bGFyIE1hdGVyaWFsIHRoZW1lIG1peGlucyB3aXRoIGFuIE0zIHRoZW1lIG11c3QgYmUgd3JhcHBlZCBpbiBhIHNlbGVjdG9yJyk7XG4gICRtZGMtY2hlY2tib3gtdG9rZW5zOiB0b2tlbi11dGlscy5nZXQtdG9rZW5zLWZvcihcbiAgICAgICR0b2tlbnMsIHRva2Vucy1tZGMtY2hlY2tib3guJHByZWZpeCwgJG9wdGlvbnMuLi4pO1xuICAvLyBEb24ndCBwYXNzICRvcHRpb25zIGhlcmUsIHNpbmNlIHRoZSBtZGMtZm9ybS1maWVsZCBkb2Vzbid0IHN1cHBvcnQgY29sb3Igb3B0aW9ucyxcbiAgLy8gb25seSB0aGUgbWRjLWNoZWNrYm94IGRvZXMuXG4gICRtZGMtZm9ybS1maWVsZC10b2tlbnM6IHRva2VuLXV0aWxzLmdldC10b2tlbnMtZm9yKCR0b2tlbnMsIHRva2Vucy1tZGMtZm9ybS1maWVsZC4kcHJlZml4KTtcbiAgJG1hdC1jaGVja2JveC10b2tlbnM6IHRva2VuLXV0aWxzLmdldC10b2tlbnMtZm9yKCR0b2tlbnMsIHRva2Vucy1tYXQtY2hlY2tib3guJHByZWZpeCk7XG4gIEBpbmNsdWRlIG1kYy1jaGVja2JveC10aGVtZS50aGVtZSgkbWRjLWNoZWNrYm94LXRva2Vucyk7XG4gIEBpbmNsdWRlIG1kYy1mb3JtLWZpZWxkLXRoZW1lLnRoZW1lKCRtZGMtZm9ybS1maWVsZC10b2tlbnMpO1xuICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tdmFsdWVzKHRva2Vucy1tYXQtY2hlY2tib3guJHByZWZpeCwgJG1hdC1jaGVja2JveC10b2tlbnMpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.trigger)('answerStatus', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)(_services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.RIGHT, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        backgroundColor: 'limegreen'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)(_services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.WRONG, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        backgroundColor: 'red'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)(_services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.EMPTY, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        backgroundColor: 'white'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)(_services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.FOCUS, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
        backgroundColor: 'lightyellow'
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.state)(_services_math_question_service__WEBPACK_IMPORTED_MODULE_0__.QuestionStatus.ANSWERED, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_8__.style)({
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

/***/ 3828:
/*!************************************************************************!*\
  !*** ./src/app/config-dialog-opener/config-dialog-opener.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigDialogOpenerComponent: () => (/* binding */ ConfigDialogOpenerComponent)
/* harmony export */ });
/* harmony import */ var _config_dialog_config_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config-dialog/config-dialog.component */ 3700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/config.service */ 3696);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/menu */ 1034);






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
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9770:
/*!************************************************************************!*\
  !*** ./src/app/config-dialog-ranges/config-dialog-ranges.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigDialogRangesComponent: () => (/* binding */ ConfigDialogRangesComponent),
/* harmony export */   ParentErrorStateMatcher: () => (/* binding */ ParentErrorStateMatcher),
/* harmony export */   minBiggerThanMaxValidator: () => (/* binding */ minBiggerThanMaxValidator)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math-generator/mathProblemTypes */ 1503);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 7697);











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
    const i_r1 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", i_r1 + 1, " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ConfigDialogRangesComponent_td_12_mat_error_3_Template, 4, 0, "mat-error", 20)(4, ConfigDialogRangesComponent_td_12_mat_error_4_Template, 4, 0, "mat-error", 20)(5, ConfigDialogRangesComponent_td_12_mat_error_5_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("errorStateMatcher", ctx_r2.parentErrorStateMatcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.numbers.controls[i_r2].getError("required", "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.numbers.controls[i_r2].getError("min", "min"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.minBiggerThanMaxTest(i_r2));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ConfigDialogRangesComponent_td_15_mat_error_3_Template, 4, 0, "mat-error", 20)(4, ConfigDialogRangesComponent_td_15_mat_error_4_Template, 4, 0, "mat-error", 20)(5, ConfigDialogRangesComponent_td_15_mat_error_5_Template, 2, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("errorStateMatcher", ctx_r2.parentErrorStateMatcher);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.numbers.controls[i_r4].getError("required", "max"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.numbers.controls[i_r4].getError("min", "max"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.minBiggerThanMaxTest(i_r4));
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
    consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["mat-table", "", "formArrayName", "numbers", 3, "dataSource"], ["matColumnDef", "position"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "min"], ["mat-cell", "", 3, "formGroupName", 4, "matCellDef"], ["matColumnDef", "max"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-dialog-actions", ""], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "click", "disabled"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 3, "formGroupName"], ["appearance", "outline"], ["matInput", "", "type", "text", "formControlName", "min", "placeholder", "min value", 3, "errorStateMatcher"], [4, "ngIf"], ["matInput", "", "type", "text", "formControlName", "max", "placeholder", "max value", 3, "errorStateMatcher"], ["mat-header-row", ""], ["mat-row", ""]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ConfigDialogRangesComponent_th_8_Template, 2, 0, "th", 5)(9, ConfigDialogRangesComponent_td_9_Template, 2, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ConfigDialogRangesComponent_th_11_Template, 2, 0, "th", 5)(12, ConfigDialogRangesComponent_td_12_Template, 6, 5, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, ConfigDialogRangesComponent_th_14_Template, 2, 0, "th", 5)(15, ConfigDialogRangesComponent_td_15_Template, 6, 5, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ConfigDialogRangesComponent_tr_16_Template, 1, 0, "tr", 10)(17, ConfigDialogRangesComponent_tr_17_Template, 1, 0, "tr", 11);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.equationRangeForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.numbers.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.equationRangeForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatRow],
    styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  width: 3em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29uZmlnLWRpYWxvZy1yYW5nZXMvY29uZmlnLWRpYWxvZy1yYW5nZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0FBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXSB7XG4gICAgd2lkdGg6IDNlbTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ 3700:
/*!**********************************************************!*\
  !*** ./src/app/config-dialog/config-dialog.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigDialogComponent: () => (/* binding */ ConfigDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/config */ 1449);
/* harmony import */ var _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math-generator/mathProblemTypes */ 1503);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _config_dialog_ranges_config_dialog_ranges_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config-dialog-ranges/config-dialog-ranges.component */ 9770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 5175);














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
    const mpt_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", mpt_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.mathProplemActions[mpt_r1].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.mathProplemActions[mpt_r1].op, " ");
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
    consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [3, "formGroup"], ["appearance", "outline"], ["matInput", "", "type", "number", "formControlName", "nbNumbers", 1, "form-control"], [4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["matInput", "", "type", "number", "formControlName", "nbProblems", 1, "form-control"], ["formControlName", "mathProblemTypes"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", ""], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", "cdkFocusInitial", "", 3, "click", "disabled"], [3, "value"]],
    template: function ConfigDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Hi Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1)(3, "form", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Number of numbers:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ConfigDialogComponent_mat_error_8_Template, 4, 0, "mat-error", 5)(9, ConfigDialogComponent_mat_error_9_Template, 4, 0, "mat-error", 5);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ConfigDialogComponent_mat_error_17_Template, 4, 0, "mat-error", 5)(18, ConfigDialogComponent_mat_error_18_Template, 4, 0, "mat-error", 5);
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
        let tmp_1_0;
        let tmp_2_0;
        let tmp_3_0;
        let tmp_4_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.configForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.configForm.get("nbNumbers").errors) == null ? null : tmp_1_0.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.configForm.get("nbNumbers").errors) == null ? null : tmp_2_0.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx.configForm.get("nbProblems").errors) == null ? null : tmp_3_0.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.configForm.get("nbProblems").errors) == null ? null : tmp_4_0.min);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.mathProplemActionsKeys);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.configForm.valid);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8728:
/*!****************************************************!*\
  !*** ./src/app/form-panel/form-panel.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormPanelComponent: () => (/* binding */ FormPanelComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 7697);







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
    const i_r1 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.dataSource[i_r1].id, " ");
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
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r3);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FormPanelComponent_td_12_mat_error_3_Template, 4, 0, "mat-error", 15)(4, FormPanelComponent_td_12_mat_error_4_Template, 4, 0, "mat-error", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.skills.controls[i_r4].getError("required", "level"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.skills.controls[i_r4].getError("min", "level"));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormPanelComponent_th_5_Template, 2, 0, "th", 3)(6, FormPanelComponent_td_6_Template, 2, 1, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FormPanelComponent_th_8_Template, 2, 0, "th", 3)(9, FormPanelComponent_td_9_Template, 3, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FormPanelComponent_th_11_Template, 2, 0, "th", 3)(12, FormPanelComponent_td_12_Template, 5, 3, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, FormPanelComponent_tr_13_Template, 1, 0, "tr", 8)(14, FormPanelComponent_tr_14_Template, 1, 0, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.skills.controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormArrayName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow],
    styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9ybS1wYW5lbC9mb3JtLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1756:
/*!******************************************************************!*\
  !*** ./src/app/main-page/main-buttons/main-buttons.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonPushedStatus: () => (/* binding */ ButtonPushedStatus),
/* harmony export */   MainButtonsComponent: () => (/* binding */ MainButtonsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 5541);






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
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Number_of_questions$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_0 = goog.getMsg("Number of questions");
        i18n_0 = MSG_EXTERNAL_Number_of_questions$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_0;
      } else {
        i18n_0 = "Number of questions";
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc to a problem
         */
        const MSG_EXTERNAL_Problems$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_1 = goog.getMsg("Problems");
        i18n_1 = MSG_EXTERNAL_Problems$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_1;
      } else {
        i18n_1 = "Problems";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @desc to a workout training
         */
        const MSG_EXTERNAL_Workout$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_2 = goog.getMsg("One by one");
        i18n_2 = MSG_EXTERNAL_Workout$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_2;
      } else {
        i18n_2 = "One by one";
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_clearAll$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_3 = goog.getMsg("Clear all");
        i18n_3 = MSG_EXTERNAL_clearAll$$SRC_APP_MAIN_PAGE_MAIN_BUTTONS_MAIN_BUTTONS_COMPONENT_TS_3;
      } else {
        i18n_3 = "Clear all";
      }
      return [i18n_0, i18n_1, i18n_2, i18n_3, ["appearance", "outline"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [1, "space"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"], ["mat-raised-button", "", 3, "click"]];
    },
    template: function MainButtonsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 4)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function MainButtonsComponent_Template_input_ngModelChange_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.nbQuestions, $event) || (ctx.nbQuestions = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainButtonsComponent_Template_button_click_5_listener() {
          return ctx.goToProblems();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](6, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainButtonsComponent_Template_button_click_8_listener() {
          return ctx.goToWorkout();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](9, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainButtonsComponent_Template_button_click_11_listener() {
          return ctx.clear();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](12, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.nbQuestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disableButton);
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInput],
    styles: [".space[_ngcontent-%COMP%] {\n  width: 1em;\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1wYWdlL21haW4tYnV0dG9ucy9tYWluLWJ1dHRvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZSB7XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}
var ButtonPushedStatus;
(function (ButtonPushedStatus) {
  ButtonPushedStatus[ButtonPushedStatus["TO_PROBLEMS"] = 0] = "TO_PROBLEMS";
  ButtonPushedStatus[ButtonPushedStatus["TO_WORKOUT"] = 1] = "TO_WORKOUT";
  ButtonPushedStatus[ButtonPushedStatus["CLEAR"] = 2] = "CLEAR";
})(ButtonPushedStatus || (ButtonPushedStatus = {}));

/***/ }),

/***/ 5168:
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _main_tabs_series_main_tabs_series_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-tabs-series/main-tabs-series.component */ 5462);
/* harmony import */ var _main_tabs_programs_main_tabs_programs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-tabs-programs/main-tabs-programs.component */ 9230);




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
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_tabPrograms$$SRC_APP_MAIN_PAGE_MAIN_PAGE_COMPONENT_TS_0 = goog.getMsg("Programs");
        i18n_0 = MSG_EXTERNAL_tabPrograms$$SRC_APP_MAIN_PAGE_MAIN_PAGE_COMPONENT_TS_0;
      } else {
        i18n_0 = "Programs";
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_tabSeries$$SRC_APP_MAIN_PAGE_MAIN_PAGE_COMPONENT_TS_1 = goog.getMsg("Series");
        i18n_1 = MSG_EXTERNAL_tabSeries$$SRC_APP_MAIN_PAGE_MAIN_PAGE_COMPONENT_TS_1;
      } else {
        i18n_1 = "Series";
      }
      return [[3, "selectedIndexChange", "selectedIndex"], ["label", i18n_0], ["label", i18n_1]];
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
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9230:
/*!******************************************************************************!*\
  !*** ./src/app/main-page/main-tabs-programs/main-tabs-programs.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainTabsProgramsComponent: () => (/* binding */ MainTabsProgramsComponent)
/* harmony export */ });
/* harmony import */ var _math_generator_worksheetsMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math-generator/worksheetsMap */ 4643);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-buttons/main-buttons.component */ 1756);
/* harmony import */ var _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../math-generator/mathProblemTypes */ 1503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config.service */ 3696);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 5175);















function MainTabsProgramsComponent_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mpt_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", mpt_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", mpt_r1.name, " ");
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
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-chip-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("removed", function MainTabsProgramsComponent_mat_chip_option_8_Template_mat_chip_option_removed_0_listener() {
      const problemType_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.remove(problemType_r3));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MainTabsProgramsComponent_mat_chip_option_8_mat_icon_2_Template, 2, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const problemType_r3 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectable", ctx_r3.selectable)("removable", ctx_r3.removable);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r3.mathProblemTypesMap[problemType_r3].name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.removable);
  }
}
function MainTabsProgramsComponent_section_9_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "mat-checkbox", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function MainTabsProgramsComponent_section_9_li_4_Template_mat_checkbox_change_1_listener($event) {
      const worksheetsItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.checkboxChange($event.checked, worksheetsItem_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const worksheetsItem_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r3.isSelected(worksheetsItem_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", worksheetsItem_r6.label, "");
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
    const worksheetsItemPerOperation_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](worksheetsItemPerOperation_r7.mathProblemTypesData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", worksheetsItemPerOperation_r7.exercises);
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
    consts: [["appearance", "fill"], ["multiple", "", 3, "valueChange", "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "operation-chip-list"], ["aria-label", "operations", 1, "operation-chip-list"], [3, "selectable", "removable", "removed", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [3, "pushButtonEvent", "nbQuestions"], [3, "value"], [3, "removed", "selectable", "removable"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], [1, "sectionHeader"], [3, "change", "checked"]],
    template: function MainTabsProgramsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section")(1, "mat-form-field", 0)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("valueChange", function MainTabsProgramsComponent_Template_mat_select_valueChange_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.problemTypes, $event) || (ctx.problemTypes = $event);
          return $event;
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("value", ctx.problemTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.mathProplemActions());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.problemTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.operationToDisplay());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nbQuestions", ctx.config.nbQuestions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipListbox, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipOption, _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__.MatChipRemove, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_1__.MainButtonsComponent],
    styles: [".space[_ngcontent-%COMP%] {\n  width: 1em;\n  display: inline-block;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style-type: none;\n  margin-top: 4px;\n}\n\n.operation-chip-list[_ngcontent-%COMP%] {\n  width: 98%;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1wYWdlL21haW4tdGFicy1wcm9ncmFtcy9tYWluLXRhYnMtcHJvZ3JhbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0ksVUFBQTtBQUFKIiwic291cmNlc0NvbnRlbnQiOlsiLnNwYWNlIHtcclxuICAgIHdpZHRoOiAxZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLy93cmFwIHRvIHJlbW92ZSB0aGUgc2Nyb2xiYXJcclxuLm9wZXJhdGlvbi1jaGlwLWxpc3Qge1xyXG4gICAgd2lkdGg6IDk4JTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 5462:
/*!**************************************************************************!*\
  !*** ./src/app/main-page/main-tabs-series/main-tabs-series.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainTabsSeriesComponent: () => (/* binding */ MainTabsSeriesComponent)
/* harmony export */ });
/* harmony import */ var _math_generator_worksheets2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../math-generator/worksheets2 */ 2932);
/* harmony import */ var _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../math-generator/mathProblemTypes */ 1503);
/* harmony import */ var _main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main-buttons/main-buttons.component */ 1756);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _math_generator_rangeManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../math-generator/rangeManager */ 6225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/config.service */ 3696);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 5175);

















function MainTabsSeriesComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const mpt_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", mpt_r1.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", mpt_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](mpt_r1.operator);
  }
}
function MainTabsSeriesComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nStart"](1, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MainTabsSeriesComponent_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](1, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MainTabsSeriesComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nStart"](1, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function MainTabsSeriesComponent_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](1, 7);
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
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_customConfig$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_0 = goog.getMsg("Custom configuration");
        i18n_0 = MSG_EXTERNAL_customConfig$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_0;
      } else {
        i18n_0 = "Custom configuration";
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Number_1$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_1 = goog.getMsg("Numbers 1");
        i18n_1 = MSG_EXTERNAL_Number_1$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_1;
      } else {
        i18n_1 = "Numbers 1";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Number_2$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_2 = goog.getMsg("Numbers 2");
        i18n_2 = MSG_EXTERNAL_Number_2$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_2;
      } else {
        i18n_2 = "Numbers 2";
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Shuffle$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_3 = goog.getMsg("Shuffle");
        i18n_3 = MSG_EXTERNAL_Shuffle$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_3;
      } else {
        i18n_3 = "Shuffle";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Field_required$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_4 = goog.getMsg("Field is {$startTagStrong}required{$closeTagStrong}", {
          "closeTagStrong": "\uFFFD/#2\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD"
        }, {
          original_code: {
            "closeTagStrong": "</strong>",
            "startTagStrong": "<strong>"
          }
        });
        i18n_4 = MSG_EXTERNAL_Field_required$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_4;
      } else {
        i18n_4 = "Field is " + "\uFFFD#2\uFFFD" + "required" + "\uFFFD/#2\uFFFD" + "";
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Field_hint$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_5 = goog.getMsg("Should be 2, or 1-3");
        i18n_5 = MSG_EXTERNAL_Field_hint$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_5;
      } else {
        i18n_5 = "Should be 2, or 1-3";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Field_required$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_6 = goog.getMsg("Field is {$startTagStrong}required{$closeTagStrong}", {
          "closeTagStrong": "\uFFFD/#2\uFFFD",
          "startTagStrong": "\uFFFD#2\uFFFD"
        }, {
          original_code: {
            "closeTagStrong": "</strong>",
            "startTagStrong": "<strong>"
          }
        });
        i18n_6 = MSG_EXTERNAL_Field_required$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_6;
      } else {
        i18n_6 = "Field is " + "\uFFFD#2\uFFFD" + "required" + "\uFFFD/#2\uFFFD" + "";
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Field_hint$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_7 = goog.getMsg("Should be 2, or 1-3");
        i18n_7 = MSG_EXTERNAL_Field_hint$$SRC_APP_MAIN_PAGE_MAIN_TABS_SERIES_MAIN_TABS_SERIES_COMPONENT_TS_7;
      } else {
        i18n_7 = "Should be 2, or 1-3";
      }
      return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, [3, "pushButtonEvent", "nbQuestions", "disableButton"], ["appearance", "fill"], [3, "valueChange", "value"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "type", "text", "placeholder", "range", 3, "formControl"], [4, "ngIf"], [3, "ngModelChange", "ngModel"], [3, "value"]];
    },
    template: function MainTabsSeriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-main-buttons", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pushButtonEvent", function MainTabsSeriesComponent_Template_app_main_buttons_pushButtonEvent_0_listener($event) {
          return ctx.pushedButton($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](2, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "section")(4, "mat-form-field", 9)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Operator");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("valueChange", function MainTabsSeriesComponent_Template_mat_select_valueChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.params.problemTypes, $event) || (ctx.params.problemTypes = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, MainTabsSeriesComponent_mat_option_8_Template, 4, 3, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "section")(10, "mat-form-field")(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](12, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, MainTabsSeriesComponent_mat_error_14_Template, 3, 0, "mat-error", 13)(15, MainTabsSeriesComponent_mat_error_15_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "format: 1, 3, 6-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "mat-form-field")(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](20, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, MainTabsSeriesComponent_mat_error_22_Template, 3, 0, "mat-error", 13)(23, MainTabsSeriesComponent_mat_error_23_Template, 2, 0, "mat-error", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "format: 1, 3, 6-12");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function MainTabsSeriesComponent_Template_mat_checkbox_ngModelChange_27_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.params.shuffle, $event) || (ctx.params.shuffle = $event);
          return $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵi18n"](28, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "br")(30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "app-main-buttons", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pushButtonEvent", function MainTabsSeriesComponent_Template_app_main_buttons_pushButtonEvent_31_listener($event) {
          return ctx.pushedButton($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nbQuestions", ctx.config.nbQuestions)("disableButton", ctx.isDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("value", ctx.params.problemTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.mathProplemActions());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.numberForControl1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.numberForControl1.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.numberForControl1.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx.numberForControl2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.numberForControl2.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.numberForControl2.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.params.shuffle);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nbQuestions", ctx.config.nbQuestions)("disableButton", ctx.isDisabled());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _main_buttons_main_buttons_component__WEBPACK_IMPORTED_MODULE_2__.MainButtonsComponent],
    styles: [".numbers[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n\n.numberSelect[_ngcontent-%COMP%] {\n  margin: 1em 0em;\n}\n\n.mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n\n.mat-input-element[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWFpbi1wYWdlL21haW4tdGFicy1zZXJpZXMvbWFpbi10YWJzLXNlcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBRUE7O0VBRUksaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5udW1iZXJzIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxZW07XHJcbn1cclxuXHJcbi5udW1iZXJTZWxlY3Qge1xyXG4gICAgbWFyZ2luOiAxZW0gMGVtO1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQgKyAubWF0LWZvcm0tZmllbGQsXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG5cclxuLm1hdC1pbnB1dC1lbGVtZW50IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 6782:
/*!*************************************************!*\
  !*** ./src/app/math-generator/mathGenerator.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MathGenerator: () => (/* binding */ MathGenerator)
/* harmony export */ });
/* harmony import */ var _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathProblemTypes */ 1503);
/* harmony import */ var _mathProblem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathProblem */ 6192);
/* harmony import */ var _rangeManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rangeManager */ 6225);



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

/***/ 6192:
/*!***********************************************!*\
  !*** ./src/app/math-generator/mathProblem.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MathProblem: () => (/* binding */ MathProblem)
/* harmony export */ });
/* harmony import */ var _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathProblemTypes */ 1503);

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

/***/ 1503:
/*!****************************************************!*\
  !*** ./src/app/math-generator/mathProblemTypes.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MATHProplemActions: () => (/* binding */ MATHProplemActions),
/* harmony export */   MathProblemTypes: () => (/* binding */ MathProblemTypes),
/* harmony export */   Relation: () => (/* binding */ Relation)
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
    name: "Subtraction",
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

/***/ 6225:
/*!************************************************!*\
  !*** ./src/app/math-generator/rangeManager.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RangeManager: () => (/* binding */ RangeManager)
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

/***/ 980:
/*!**********************************************!*\
  !*** ./src/app/math-generator/worksheets.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorksheetProgram: () => (/* binding */ WorksheetProgram),
/* harmony export */   WorksheetProgramInstruction: () => (/* binding */ WorksheetProgramInstruction),
/* harmony export */   Worksheets: () => (/* binding */ Worksheets)
/* harmony export */ });
/* harmony import */ var _mathGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathGenerator */ 6782);
/* harmony import */ var _mathProblem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathProblem */ 6192);
/* harmony import */ var _mathProblemTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mathProblemTypes */ 1503);



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

/***/ 2932:
/*!***********************************************!*\
  !*** ./src/app/math-generator/worksheets2.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Worksheets2: () => (/* binding */ Worksheets2)
/* harmony export */ });
/* harmony import */ var _mathGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathGenerator */ 6782);
/* harmony import */ var _mathProblemTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mathProblemTypes */ 1503);
/* harmony import */ var _rangeManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rangeManager */ 6225);



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

/***/ 4643:
/*!*************************************************!*\
  !*** ./src/app/math-generator/worksheetsMap.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorksheetsMap: () => (/* binding */ WorksheetsMap)
/* harmony export */ });
/* harmony import */ var _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathProblemTypes */ 1503);
/* harmony import */ var _worksheets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./worksheets */ 980);
/* harmony import */ var _worksheets2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./worksheets2 */ 2932);



class WorksheetsMap {
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
  constructor() {
    this.map = new Map();
    this.index = 0;
    this.values = [this.generateMapItem("Add Single Digit Number NoCarry", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.addSingleDigitNumberNoCarry, 1, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION), this.generateMapItem("Adding two single-digit numbers - sum 10 or less", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.addTowSingleDigitNumberSum10orLess, 1, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION), this.generateMapItem("Add Single Digit Number", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.addSingleDigitNumber, 1, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION), this.generateMapItem("Add a 2-digit number and a 1-digit number mentally - within the same ten", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.addDoubleDigitWithSingleDigitNumberNoCarry, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION), this.generateMapItem("Add a 2-digit number and a 1-digit number in columns", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.addTowDoubleDigitNumbersNoCarry, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION), this.generateMapItem("Add a 2 digit number with a 2 digit number with carry", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.addTowDigitNumberWithTowDigitNumberWithCarry, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION), this.generateMapItem("Add Two Numbers Answer Bellow 20", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.addTwoNumbersAnswerBellow20, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.ADDITION), this.generateMapItem("Subtraction facts - numbers up to 10", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractOneDigitNumberFromOneDigitNumberWithoutRegrouping, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Subtraction facts - answer below 10", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractAnswerbelow10, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Subtract a one-digit number from a two-digit number - without regrouping", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractOneDigitNumberFromTwoDigitNumberWithoutRegrouping, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Subtract multiples of 10", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractMultiplesOf10, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Subtract a one-digit number from a two-digit number - with regrouping", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractOneDigitNumberFromTwoDigitNumberWithRegrouping, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Subtract two two-digit numbers - without regrouping", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractTowDigitNumberFromTwoDigitNumberWithoutRegrouping, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Subtract two two-digit numbers - with regrouping", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Subtract two two-digit numbers - with regrouping", _worksheets__WEBPACK_IMPORTED_MODULE_1__.Worksheets.subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping, 2, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.SUBTRACTION), this.generateMapItem("Multiply two single digit numbers", _worksheets2__WEBPACK_IMPORTED_MODULE_2__.Worksheets2.multiplySingleDigitNumber, 3, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.MULTIPLICATION)];
    for (let i = 1; i <= 12; i++) {
      let workSheetItem = this.generateMapItem("" + i + " time table", _worksheets2__WEBPACK_IMPORTED_MODULE_2__.Worksheets2.multiplicationTable, 3, _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.MULTIPLICATION, {
        problemTypes: _mathProblemTypes__WEBPACK_IMPORTED_MODULE_0__.MathProblemTypes.MULTIPLICATION,
        numbers1: i.toString(),
        numbers2: "1-12",
        shuffle: true
      });
      this.values.push(workSheetItem);
    }
  }
}

/***/ }),

/***/ 332:
/*!**********************************************************!*\
  !*** ./src/app/math-question/math-question.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MathQuestionComponent: () => (/* binding */ MathQuestionComponent)
/* harmony export */ });
/* harmony import */ var _math_generator_mathGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math-generator/mathGenerator */ 6782);
/* harmony import */ var _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/math-question.service */ 3263);
/* harmony import */ var _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../column-answer/column-answer.component */ 3192);
/* harmony import */ var _answer_value_answer_value_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../answer-value/answer-value.component */ 506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 436);








function MathQuestionComponent_ng_container_4_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function MathQuestionComponent_ng_container_4_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function MathQuestionComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 9)(2, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MathQuestionComponent_ng_container_4_ng_container_5_Template, 1, 0, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "hr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MathQuestionComponent_ng_container_4_ng_container_7_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const columns_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    const normal_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    const answerField2_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.problem.mathProplemActions.operator);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.config.answerMode == ctx_r0.columnAnswerMode.COLUMNS)("ngIfThen", columns_r2)("ngIfElse", normal_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", answerField2_r4);
  }
}
function MathQuestionComponent_ng_template_5_ng_template_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.problem.mathProplemActions.operator);
  }
}
function MathQuestionComponent_ng_template_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MathQuestionComponent_ng_template_5_ng_template_1_span_2_Template, 2, 1, "span", 19);
  }
  if (rf & 2) {
    const num_r5 = ctx.$implicit;
    const last_r6 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](num_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", last_r6 == false);
  }
}
function MathQuestionComponent_ng_template_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
  }
}
function MathQuestionComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MathQuestionComponent_ng_template_5_ng_template_1_Template, 3, 2, "ng-template", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MathQuestionComponent_ng_template_5_ng_container_4_Template, 1, 0, "ng-container", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const answerField2_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.problem.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", answerField2_r4);
  }
}
function MathQuestionComponent_ng_template_7_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const digit_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](digit_r7);
  }
}
function MathQuestionComponent_ng_template_7_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MathQuestionComponent_ng_template_7_div_0_div_1_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const number_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", number_r8.toString().split(""));
  }
}
function MathQuestionComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MathQuestionComponent_ng_template_7_div_0_Template, 2, 1, "div", 20);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.problem.values);
  }
}
function MathQuestionComponent_ng_template_9_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const number_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", number_r9, " ");
  }
}
function MathQuestionComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MathQuestionComponent_ng_template_9_div_0_Template, 2, 1, "div", 24);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.problem.values);
  }
}
function MathQuestionComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "app-column-answer", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focusChange", function MathQuestionComponent_ng_template_11_Template_app_column_answer_focusChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.onFocusChange($event));
    })("existFocus", function MathQuestionComponent_ng_template_11_Template_app_column_answer_existFocus_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.existFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r0.questionId.toString())("size", ctx_r0.size)("mode", ctx_r0.config.answerMode)("value", ctx_r0.userInput)("valueChange", ctx_r0.onValueChange)("answerStatus", ctx_r0.status);
  }
}
function MathQuestionComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "app-answer-value", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("focusChange", function MathQuestionComponent_ng_template_13_Template_app_answer_value_focusChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.onFocusChange($event));
    })("existFocus", function MathQuestionComponent_ng_template_13_Template_app_answer_value_existFocus_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.existFocus($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", ctx_r0.questionId)("value", ctx_r0.userInput)("valueChange", ctx_r0.onValueChange)("answerStatus", ctx_r0.status);
  }
}
const regexNumVal = /[0-9,-\.]/;
class MathQuestionComponent {
  constructor(mathQuestionService, iconRegistry, sanitizer) {
    this.mathQuestionService = mathQuestionService;
    this.status = _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.QuestionStatus.EMPTY;
    this.stacked = true;
    this.myEventSubscriptions = [];
    this.currentFocus = _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.FocusType.BLUR;
    this.size = 3;
    this.columnAnswerMode = _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.ColumnAnswerMode;
    this.onValueChange = (userInput, callerId) => {
      console.log(this.log(`onValueChange userInput ${userInput} ${typeof userInput} callerId: ${callerId} config_rt: ${this.config.realTimeValidation}`));
      this.userInput = userInput;
      let status = null;
      if (this.config.realTimeValidation) {
        status = this.validateAnswer(true);
      } else {
        status = this.validateInput();
      }
      return status;
    };
    iconRegistry.addSvgIcon('delete-cross', sanitizer.bypassSecurityTrustResourceUrl('assets/img/delete_icon.svg'));
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
    console.log(this.log(`User Input: ${this.userInput} Answer: ${answer}`));
    let userAnswer = parseInt(this.userInput);
    console.log(this.log(`User Input: ${this.userInput} userAnswer: ${userAnswer}`));
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
    this.onValueChange(null, 0);
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
      this.onValueChange(this.userInput, 0);
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
      if (this.columnAnswerComponent) {
        this.columnAnswerComponent.focus();
      } else if (this.answer_value_component) {
        this.answer_value_component.focus();
      }
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
    return new (t || MathQuestionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_math_question_service__WEBPACK_IMPORTED_MODULE_1__.MathQuestionService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MathQuestionComponent,
    selectors: [["app-math-question"]],
    viewQuery: function MathQuestionComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_2__.ColumnAnswerComponent, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_answer_value_answer_value_component__WEBPACK_IMPORTED_MODULE_3__.AnswerValueComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.columnAnswerComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.answer_value_component = _t.first);
      }
    },
    inputs: {
      config: "config",
      questionId: "questionId",
      needReset: "needReset"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]],
    decls: 15,
    vars: 3,
    consts: [["flat", ""], ["columns", ""], ["normal", ""], ["answerField", ""], ["answerField2", ""], [1, "content"], [1, "mat-h2"], [1, "mathQuestion"], [4, "ngIf", "ngIfElse"], [1, "question_column"], [1, "operator"], [1, "numbers"], [4, "ngIf", "ngIfThen", "ngIfElse"], [1, "hr_equals"], [4, "ngTemplateOutlet"], [1, "question_flat"], ["ngFor", "", 3, "ngForOf"], [1, "equals"], [1, "number_flat"], ["class", "operator", 4, "ngIf"], ["class", "number_column", 4, "ngFor", "ngForOf"], [1, "number_column"], ["class", "digit", 4, "ngFor", "ngForOf"], [1, "digit"], ["class", "number_normal", 4, "ngFor", "ngForOf"], [1, "number_normal"], [1, "answerField"], [3, "focusChange", "existFocus", "id", "size", "mode", "value", "valueChange", "answerStatus"], [3, "focusChange", "existFocus", "id", "value", "valueChange", "answerStatus"]],
    template: function MathQuestionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5)(1, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MathQuestionComponent_ng_container_4_Template, 8, 5, "ng-container", 8)(5, MathQuestionComponent_ng_template_5_Template, 5, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MathQuestionComponent_ng_template_7_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(9, MathQuestionComponent_ng_template_9_Template, 1, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(11, MathQuestionComponent_ng_template_11_Template, 2, 6, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"])(13, MathQuestionComponent_ng_template_13_Template, 2, 4, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
      }
      if (rf & 2) {
        const flat_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Question\u00A0", ctx.questionId + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.stacked)("ngIfElse", flat_r12);
      }
    },
    styles: [".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n  background-color: var(--mat-ripple-color, rgba(0, 0, 0, 0.1));\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start { \n }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end { \n }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: var(--mat-app-background-color, transparent);\n  color: var(--mat-app-text-color, inherit);\n}\n\n.content[_ngcontent-%COMP%] {\n  margin: auto;\n  width: max-content;\n}\n\n\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.answerField[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  justify-content: flex-end;\n}\n\n.mathQuestion[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .mathAnswer[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 5px;\n}\n\n\n\n\n\n\n\n\n\n\n\n.equation.stacked[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 1em;\n  \n\n  text-align: right;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .equals[_ngcontent-%COMP%] {\n  display: block;\n  height: 0;\n  padding-bottom: 3px;\n  border-bottom: solid 2px;\n  overflow: hidden;\n}\n\n.equation[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(:first-child):not(input) {\n  margin-left: 0.3em;\n}\n\n.question_column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n\n.question_flat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n\n.question_flat[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: 0.2em;\n}\n\n.question_column[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  padding-right: 0.2em;\n}\n\n.question_column[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%] {\n  padding-bottom: 0.15em;\n}\n\n.numbers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-end;\n}\n\n.number_normal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: flex-end;\n  height: 1em;\n  padding: 2px 5px;\n}\n\n.number_column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n  justify-content: flex-end;\n  height: 1em;\n  padding: 2px 0;\n}\n\n.digit[_ngcontent-%COMP%] {\n  display: flex;\n  width: 1em;\n  align-items: center;\n  justify-content: center;\n  padding: 2px 0;\n  border-color: deeppink transparent;\n  border-width: 1px;\n  border-left-style: dashed;\n}\n\n.digit[_ngcontent-%COMP%]:last-child {\n  border-right-style: solid;\n}\n\n.mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #388e3c;\n  outline-width: 15px;\n  caret-color: #388e3c;\n}\n\n.hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: rgba(0, 0, 0, 0.87);\n  border-color: rgba(0, 0, 0, 0.87);\n}\n\n.dark-theme[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .dark-theme   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #ffd740;\n  outline-width: 15px;\n  caret-color: #ffd740;\n}\n.dark-theme[_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: white;\n  border-color: white;\n}\n\n.light-theme[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .light-theme   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #bcaaa4;\n  outline-width: 15px;\n  caret-color: #bcaaa4;\n}\n.light-theme[_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: rgba(0, 0, 0, 0.87);\n  border-color: rgba(0, 0, 0, 0.87);\n}\n\n.deeppurple-amber[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .deeppurple-amber   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #ffd740;\n  outline-width: 15px;\n  caret-color: #ffd740;\n}\n.deeppurple-amber[_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: rgba(0, 0, 0, 0.87);\n  border-color: rgba(0, 0, 0, 0.87);\n}\n\n.indigo-pink[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .indigo-pink   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #ff4081;\n  outline-width: 15px;\n  caret-color: #ff4081;\n}\n.indigo-pink[_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: rgba(0, 0, 0, 0.87);\n  border-color: rgba(0, 0, 0, 0.87);\n}\n\n.pink-bluegrey[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .pink-bluegrey   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #b0bec5;\n  outline-width: 15px;\n  caret-color: #b0bec5;\n}\n.pink-bluegrey[_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: white;\n  border-color: white;\n}\n\n.purple-green[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .purple-green   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #69f0ae;\n  outline-width: 15px;\n  caret-color: #69f0ae;\n}\n.purple-green[_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: white;\n  border-color: white;\n}\n\n.candy[_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus, .candy   [_nghost-%COMP%]   .mathAnswer[_ngcontent-%COMP%]:focus {\n  outline-color: #795548;\n  outline-width: 15px;\n  caret-color: #795548;\n}\n.candy[_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   .hr_equals[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  border-style: solid;\n  background-color: rgba(0, 0, 0, 0.87);\n  border-color: rgba(0, 0, 0, 0.87);\n}\n\n.example-right-align[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\ninput.example-right-align[_ngcontent-%COMP%]::-webkit-outer-spin-button, input.example-right-align[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align[_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n.mdc-notched-outline[_ngcontent-%COMP%] {\n  background-color: blue;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-outline {\n  background-color: white;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL21hdGgtcXVlc3Rpb24vbWF0aC1xdWVzdGlvbi5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvdGV4dC1maWVsZC9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL2ZvY3VzLWluZGljYXRvcnMvX3ByaXZhdGUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19sYXlvdXQtY29tbW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9fY29yZS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90aGVtZS9fY3NzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxnQkFBQTtFQUlBLGtCQUFBO0FDVEo7QURnQkk7RUFDRSx3QkFBQTtBQ2ROOztBRGtCRTtFQUNFLGlCQUFBO0FDZko7O0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsNkRBQUE7RUFJQSwyQkFBQTtFQUtFLDZEQUFBO0FDdkJOO0FDK0JJO0VGSEUsYUFBQTtBQ3pCTjs7QUNuQkU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLG1CQUFBO0VBR0EsVUFBQTtFQUdBLHdCQUFBO0VBQ0EscUJBQUE7RUFNQSxPQUFBO0FEVUo7QUNSSTtFQUNFLFVBQUE7RUFDQSxRQUFBO0FEVU47O0FFMUJFO0VBRUUsb0JBQUE7RUFHQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FGMEJKOztBRXRCRTtFQUNFLGVBQUE7RUFDQSxhQTNCd0I7QUZvRDVCO0FFdkJJO0VBR0UsYUFBQTtBRnVCTjs7QUVmRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBMUNjO0FGNERsQjs7QUVkRTtFQUdFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBcERjO0VBd0RkLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUZZSjs7QUVURTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLGFBcEV1QjtFQXFFdkIsb0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDBEQUFBO0VBQ0EsVUFBQTtBRlVKO0FFUkk7RUFDRSxVQUFBO0FGVU47QUVMTTtFQUdFLFlBQUE7QUZLUjs7QUVBRTtFQUNFLCtCQXRGcUI7QUZ5RnpCOztBRUFFO0VBRUUscURBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUZFSjtBRUlJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FGRk47O0FFTUU7RUFDRSxnQkFBQTtBRkhKOztBRVFFO0VBQ0Usa0JBQUE7RUFDQSxhQXJIYztFQTBIZCxhQUFBO0VBSUEsc0JBQUE7RUFHQSxjQUFBO0VBQ0EsZUFBQTtBRmRKOztBRWtCRTtFQUNFLGVBQUE7RUFLQSxXQUFBO0VBS0Esa0JBQUE7QUZ2Qko7O0FHMUhFO0VBQ0UsWUFBQTtBSDZISjs7QUd2SEU7RUF5Q0EseUJBQUE7RUFDQSxrQ0FBQTtFQXhDRSx1QkFBQTtFQUNBLDJCQUFBO0FIMkhKOztBR2xIRTtFQTZCQSx5QkFBQTtFQUNBLGtDQUFBO0VBNUJFLG9CQUFBO0FIc0hKOztBRzVHRSwyQ0FBQSxJQUFBLEVBQUE7QUFDQSx5Q0FBQSxJQUFBLEVBQUE7QUFFQTtFQUVFLCtDQUFBO0FINkdKOztBRzFHRTtFQUVFLDZDQUFBO0FINEdKOztBSTFJRTtFQUNFLGtCQUFBO0FKNklKO0FJM0lJO0VDaEJGLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFRGNJLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpREFBQTtFQUNBLHdKQUFBO0VBWUEsNERBQUE7QUpzSU47QUk5SEk7RUFDRSxXQUFBO0FKZ0lOOztBQ3RGTTtFRzVCQSxvQ0FBQTtBSnNITjs7QUlqS0U7RUFDRSxrQkFBQTtBSm9LSjtBSWxLSTtFQ2hCRixNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RURjSSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscURBQUE7RUFDQSxvS0FBQTtFQVlBLGdFQUFBO0FKNkpOO0FJckpJO0VBQ0UsV0FBQTtBSnVKTjs7QUM3R007RUc1QkEsd0NBQUE7QUo2SU47O0FNbkxJO0VDMERBLDhEQUFBO0VBQUEseUNBQUE7QVA4SEo7O0FBek1BO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBNE1KOztBQXpNQSxnQ0FBQTtBQUNBOztFQUVJLHdCQUFBO0VBQ0EsU0FBQTtBQTRNSjs7QUF6TUEsWUFBQTtBQUNBO0VBQ0ksMEJBQUE7QUE0TUo7O0FBek1BO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQTRNSjs7QUF6TUE7RUFFSSxlQUFBO0FBMk1KOztBQXhNQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQTJNSjs7QUF4TUE7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLHFCQUFBO0FBMk1KOztBQXhNQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUEyTUo7O0FBeE1BO0VBQ0ksV0FBQTtBQTJNSjs7QUF0TUE7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFFQSxnQkFBQTtBQXdNSjs7QUFyTUE7RUFFSSxrQkFBQTtBQXVNSjs7QUFwTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUF1TUo7O0FBcE1BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQXVNSjs7QUFwTUE7RUFDSSxvQkFBQTtBQXVNSjs7QUFwTUE7RUFDSSxvQkFBQTtBQXVNSjs7QUFwTUE7RUFDSSxzQkFBQTtBQXVNSjs7QUFwTUE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQXVNSjs7QUFwTUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUF1TUo7O0FBcE1BO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUF1TUo7O0FBcE1BO0VBQ0ksYUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQXVNSjs7QUFwTUE7RUFDSSx5QkFBQTtBQXVNSjs7QUF2TEk7RUFDSSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUEwTFI7O0FBdkxJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBR0EscUNBbEJZO0VBbUJaLGlDQW5CWTtBQTJNcEI7O0FBcE1JO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBdU1SO0FBcE1JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBR0EsdUJBbEJZO0VBbUJaLG1CQW5CWTtBQXVOcEI7O0FBaE5JO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBbU5SO0FBaE5JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBR0EscUNBbEJZO0VBbUJaLGlDQW5CWTtBQW1PcEI7O0FBNU5JO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBK05SO0FBNU5JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBR0EscUNBbEJZO0VBbUJaLGlDQW5CWTtBQStPcEI7O0FBeE9JO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBMk9SO0FBeE9JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBR0EscUNBbEJZO0VBbUJaLGlDQW5CWTtBQTJQcEI7O0FBcFBJO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBdVBSO0FBcFBJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBR0EsdUJBbEJZO0VBbUJaLG1CQW5CWTtBQXVRcEI7O0FBaFFJO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBbVFSO0FBaFFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBR0EsdUJBbEJZO0VBbUJaLG1CQW5CWTtBQW1ScEI7O0FBNVFJO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBK1FSO0FBNVFJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBR0EscUNBbEJZO0VBbUJaLGlDQW5CWTtBQStScEI7O0FBNVBBO0VBQ0ksaUJBQUE7QUErUEo7O0FBNVBBOztFQUVJLGFBQUE7QUErUEo7O0FBNVBBO0VBQ0ksMEJBQUE7QUErUEo7O0FBNVBBO0VBQ0ksc0JBQUE7QUErUEo7O0FBNVBFO0VBQ0UsdUJBQUE7RUFDQSxrQkFBQTtBQStQSiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ0Bhbmd1bGFyL2Nkayc7XG5AdXNlICcuLi90b2tlbnMvbTIvbWF0L3JpcHBsZScgYXMgdG9rZW5zLW1hdC1yaXBwbGU7XG5AdXNlICcuLi90b2tlbnMvdG9rZW4tdXRpbHMnO1xuXG5AbWl4aW4gcmlwcGxlKCkge1xuICAvLyBUaGUgaG9zdCBlbGVtZW50IG9mIGFuIG1hdC1yaXBwbGUgZGlyZWN0aXZlIHNob3VsZCBhbHdheXMgaGF2ZSBhIHBvc2l0aW9uIG9mIFwiYWJzb2x1dGVcIiBvclxuICAvLyBcInJlbGF0aXZlXCIgc28gdGhhdCB0aGUgcmlwcGxlcyBpbnNpZGUgYXJlIGNvcnJlY3RseSBwb3NpdGlvbmVkIHJlbGF0aXZlbHkgdG8gdGhlIGNvbnRhaW5lci5cbiAgLm1hdC1yaXBwbGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAvLyBCeSBkZWZhdWx0LCBldmVyeSByaXBwbGUgY29udGFpbmVyIHNob3VsZCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBpbiBmYXZvciBvZiBjcmVhdGluZyBhblxuICAgIC8vIGVhc3kgQVBJIGZvciBkZXZlbG9wZXJzIHVzaW5nIHRoZSBNYXRSaXBwbGUgZGlyZWN0aXZlLlxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC8vIFByb21vdGUgY29udGFpbmVycyB0aGF0IGhhdmUgcmlwcGxlcyB0byBhIG5ldyBsYXllci4gV2Ugd2FudCB0byB0YXJnZXQgYDpub3QoOmVtcHR5KWAsXG4gICAgLy8gYmVjYXVzZSB3ZSBkb24ndCB3YW50IGFsbCByaXBwbGUgY29udGFpbmVycyB0byBoYXZlIHRoZWlyIG93biBsYXllciBzaW5jZSB0aGV5J3JlIHVzZWQgaW4gYVxuICAgIC8vIGxvdCBvZiBwbGFjZXMgYW5kIHRoZSBsYXllciBpcyBvbmx5IHJlbGV2YW50IHdoaWxlIGFuaW1hdGluZy4gTm90ZSB0aGF0IGlkZWFsbHkgd2UnZCB1c2VcbiAgICAvLyB0aGUgYGNvbnRhaW5gIHByb3BlcnR5IGhlcmUgKHNlZSAjMTMxNzUpLCBiZWNhdXNlIGA6ZW1wdHlgIGNhbiBiZSBicm9rZW4gYnkgaGF2aW5nIGV4dHJhXG4gICAgLy8gdGV4dCBpbnNpZGUgdGhlIGVsZW1lbnQsIGJ1dCBpdCBpc24ndCB2ZXJ5IHdlbGwgc3VwcG9ydGVkIHlldC5cbiAgICAmOm5vdCg6ZW1wdHkpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcblxuICAgIC8vIFdlIHVzZSBhIDNkIHRyYW5zZm9ybSBoZXJlIGluIG9yZGVyIHRvIGF2b2lkIGFuIGlzc3VlIGluIFNhZmFyaSB3aGVyZVxuICAgIC8vIHRoZSByaXBwbGVzIGFyZW4ndCBjbGlwcGVkIHdoZW4gaW5zaWRlIHRoZSBzaGFkb3cgRE9NIChzZWUgIzI0MDI4KS5cbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMCwgMCk7XG5cbiAgICBAaW5jbHVkZSB0b2tlbi11dGlscy51c2UtdG9rZW5zKFxuICAgICAgdG9rZW5zLW1hdC1yaXBwbGUuJHByZWZpeCwgdG9rZW5zLW1hdC1yaXBwbGUuZ2V0LXRva2VuLXNsb3RzKCkpIHtcbiAgICAgIC8vIFdlIGhhdmUgdG8gZW1pdCBhIGZhbGxiYWNrIHZhbHVlIGhlcmUsIGJlY2F1c2Ugc29tZSBpbnRlcm5hbCBidWlsZHMgZGVwZW5kIG9uIGl0LlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCN7dG9rZW4tdXRpbHMuZ2V0LXRva2VuLXZhcmlhYmxlKGNvbG9yKX0sIHJnYmEoIzAwMCwgMC4xKSk7XG4gICAgfVxuXG4gICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByaXBwbGUgaXMgb3BhcXVlLCBjYXVzaW5nIGl0IHRvIG9ic3RydWN0IHRoZSBjb250ZW50LlxuICAgIEBpbmNsdWRlIGNkay5oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnQGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcbkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL3RoZW1lc192YXJpYWJsZXMuc2Nzc1wiO1xuXG4uY29udGVudCB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbn1cblxuLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXG5pbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4vKiBGaXJlZm94ICovXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdIHtcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbn1cblxuLmFuc3dlckZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5tYXRoUXVlc3Rpb24ge1xuICAgIC8vcGFkZGluZzogMC41ZW07XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZXF1YXRpb24uc3RhY2tlZCAubWF0aEFuc3dlciB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4vKlxuLndyb25nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5yaWdodCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGltZWdyZWVuO1xufVxuKi9cbi5lcXVhdGlvbi5zdGFja2VkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5lcXVhdGlvbi5zdGFja2VkIC5udW1iZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxZW07XG4gICAgLyogc3BhY2UgZm9yIHRoZSBvcGVyYXRvciAqL1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi5lcXVhdGlvbi5zdGFja2VkIC5vcGVyYXRvciB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5cbi8vJHByaW1hcnk6IG1hdC5kZWZpbmUtcGFsZXR0ZShtYXQuJGFtYmVyLXBhbGV0dGUpO1xuXG4uZXF1YXRpb24uc3RhY2tlZCAuZXF1YWxzIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDNweDtcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAycHg7XG4gICAgLy9ib3JkZXItY29sb3I6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5KTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZXF1YXRpb24gOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdChpbnB1dCkge1xuICAgIC8vYXZvaWQgdGhlIG1hcmdpbiBsZWZ0IHdoZW4gc3RhY2tlZFxuICAgIG1hcmdpbi1sZWZ0OiAwLjNlbTtcbn1cblxuLnF1ZXN0aW9uX2NvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4ucXVlc3Rpb25fZmxhdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5xdWVzdGlvbl9mbGF0Pio6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgcGFkZGluZy1yaWdodDogMC4yZW07XG59XG5cbi5xdWVzdGlvbl9jb2x1bW4+Kjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjJlbTtcbn1cblxuLnF1ZXN0aW9uX2NvbHVtbiAub3BlcmF0b3Ige1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjE1ZW07XG59XG5cbi5udW1iZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cblxuLm51bWJlcl9ub3JtYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGhlaWdodDogMWVtO1xuICAgIHBhZGRpbmc6IDJweCA1cHg7XG59XG5cbi5udW1iZXJfY29sdW1uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBwYWRkaW5nOiAycHggMDtcbn1cblxuLmRpZ2l0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycHggMDtcbiAgICBib3JkZXItY29sb3I6IGRlZXBwaW5rIHRyYW5zcGFyZW50OyAvL3RvIGVuc3VyZSB0aGUgc2FtZSB3aXRoIHdpdGggdGhlIGFuc3dlciB3aWRqZXRcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItbGVmdC1zdHlsZTogZGFzaGVkO1xufVxuXG4uZGlnaXQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbn1cblxuQG1peGluIG1hdGgtcXVlc3Rpb24tdGhlbWUoJHRoZW1lKSB7XG4gICAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgICAkZmc6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgICAvLyRiZzogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gICAgJHRoX3RleHRfY29sb3I6ICN7bWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZnLCB0ZXh0KX07XG5cbiAgICAvL0BkZWJ1ZyBcImZnOiAjeyRwcmltYXJ5fVwiO1xuICAgIC8vQGRlYnVnIFwiZm9yZWdyb3VuZDogI3skdGhfdGV4dF9jb2xvcn1cIjtcbiAgICAvL0BkZWJ1ZyBcImJhY2tncm91bmQ6ICN7bWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGJnKX1cIjtcbiAgICAvL0BkZWJ1ZyBcImJhY2tncm91bmQ6ICN7JGJnfVwiO1xuXG4gICAgLm1hdGhBbnN3ZXI6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lLWNvbG9yOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50KTtcbiAgICAgICAgb3V0bGluZS13aWR0aDogMTVweDtcbiAgICAgICAgY2FyZXQtY29sb3I6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQpO1xuICAgIH1cblxuICAgIC5ocl9lcXVhbHMge1xuICAgICAgICBtYXJnaW46IDRweCAwO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmZyk7XG5cbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRoX3RleHRfY29sb3I7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoX3RleHRfY29sb3I7XG4gICAgfVxufVxuXG5AZWFjaCAkdGhjbGFzcywgJHRoIGluICRhbGxfdGhlbWVzIHtcbiAgICBAaWYgJHRoY2xhc3MgPT1cIlwiIHtcbiAgICAgICAgQGluY2x1ZGUgbWF0aC1xdWVzdGlvbi10aGVtZSgkdGgpO1xuICAgIH1cblxuICAgIEBlbHNlIHtcbiAgICAgICAgOmhvc3QtY29udGV4dCguI3skdGhjbGFzc30pIHtcbiAgICAgICAgICAgIEBpbmNsdWRlIG1hdGgtcXVlc3Rpb24tdGhlbWUoJHRoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5pbnB1dC5leGFtcGxlLXJpZ2h0LWFsaWduOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuaW5wdXQuZXhhbXBsZS1yaWdodC1hbGlnbiB7XG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG59XG5cbi5tZGMtbm90Y2hlZC1vdXRsaW5le1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XG4gIH1cblxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG4gICAgXG4gIC8vbWF0LW1kYy1mb3JtLWZpZWxkIHBpenphIG5nLXRucy1jMzczNjA1OTcyNS0zOSBtYXQtbWRjLWZvcm0tZmllbGQtdHlwZS1tYXQtaW5wdXQgbWF0LW1kYy1mb3JtLWZpZWxkLWhhcy1pY29uLXByZWZpeCBtYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgbWF0LXByaW1hcnkgbmctc3Rhci1pbnNlcnRlZCIsIi8vLyBFbWl0cyBhIENTUyBjbGFzcywgYC5jZGstdmlzdWFsbHktaGlkZGVuYC4gVGhpcyBjbGFzcyBjYW4gYmUgYXBwbGllZCB0byBhbiBlbGVtZW50XG4vLy8gdG8gbWFrZSB0aGF0IGVsZW1lbnQgdmlzdWFsbHkgaGlkZGVuIHdoaWxlIHJlbWFpbmluZyBhdmFpbGFibGUgdG8gYXNzaXN0aXZlIHRlY2hub2xvZ3kuXG5AbWl4aW4gYTExeS12aXN1YWxseS1oaWRkZW4oKSB7XG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuXG4gICAgLy8gVGhpcyB3b3JrcyBhcm91bmQgYSBDaHJvbWUgYnVnIHRoYXQgY2FuIGNhdXNlIHRoZSB0YWIgdG8gY3Jhc2ggd2hlbiBsYXJnZSBhbW91bnRzIG9mXG4gICAgLy8gbm9uLUVuZ2xpc2ggdGV4dCBnZXQgd3JhcHBlZDogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTIwMTQ0NFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgICAvLyBXZSBuZWVkIGF0IGxlYXN0IG9uZSBvZiB0b3AvYm90dG9tL2xlZnQvcmlnaHQgaW4gb3JkZXIgdG8gcHJldmVudCBjYXNlcyB3aGVyZSB0aGVcbiAgICAvLyBhYnNvbHV0ZS1wb3NpdGlvbmVkIGVsZW1lbnQgaXMgcHVzaGVkIGRvd24gYW5kIGNhbiBhZmZlY3Qgc2Nyb2xsaW5nIChzZWUgIzI0NTk3KS5cbiAgICAvLyBgbGVmdGAgd2FzIGNob3NlbiBoZXJlLCBiZWNhdXNlIGl0J3MgdGhlIGxlYXN0IGxpa2VseSB0byBicmVhayBvdmVycmlkZXMgd2hlcmUgdGhlXG4gICAgLy8gZWxlbWVudCBtaWdodCBoYXZlIGJlZW4gcG9zaXRpb25lZCAoZS5nLiBgbWF0LWNoZWNrYm94YCkuXG4gICAgbGVmdDogMDtcblxuICAgIFtkaXI9J3J0bCddICYge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuXG4vLy8gQGRlcHJlY2F0ZWQgVXNlIGBhMTF5LXZpc3VhbGx5LWhpZGRlbmAuXG5AbWl4aW4gYTExeSgpIHtcbiAgQGluY2x1ZGUgYTExeS12aXN1YWxseS1oaWRkZW47XG59XG5cbi8vLyBFbWl0cyB0aGUgbWl4aW4ncyBjb250ZW50IG5lc3RlZCB1bmRlciBgJHNlbGVjdG9yLWNvbnRleHRgIGlmIGAkc2VsZWN0b3ItY29udGV4dGBcbi8vLyBpcyBub24tZW1wdHkuXG4vLy8gQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yLWNvbnRleHQgVGhlIHNlbGVjdG9yIHVuZGVyIHdoaWNoIHRvIG5lc3QgdGhlIG1peGluJ3MgY29udGVudC5cbkBtaXhpbiBfb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgQGlmICgkc2VsZWN0b3ItY29udGV4dCA9PSAnJykge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBlbHNlIHtcbiAgICAjeyRzZWxlY3Rvci1jb250ZXh0fSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8vIEFwcGxpZXMgc3R5bGVzIGZvciB1c2VycyBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgYXBwbGllc1xuLy8vIHRvIE1pY3Jvc29mdCBicm93c2Vycy4gQ2hyb21lIGNhbiBiZSBpbmNsdWRlZCBieSBjaGVja2luZyBmb3IgdGhlIGBodG1sW2hjXWBcbi8vLyBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXQgVHlwZSBvZiBoaWdoIGNvbnRyYXN0IHNldHRpbmcgdG8gdGFyZ2V0LiBEZWZhdWx0cyB0byBgYWN0aXZlYCwgY2FuIGJlXG4vLy8gICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbi8vLyBAcGFyYW0ge1N0cmluZ30gZW5jYXBzdWxhdGlvbiBXaGV0aGVyIHRvIGVtaXQgc3R5bGVzIGZvciB2aWV3IGVuY2Fwc3VsYXRpb24uIFZhbHVlcyBhcmU6XG4vLy8gICAgICogYG9uYCAtIHdvcmtzIGZvciBgRW11bGF0ZWRgLCBgTmF0aXZlYCwgYW5kIGBTaGFkb3dEb21gXG4vLy8gICAgICogYG9mZmAgLSB3b3JrcyBmb3IgYE5vbmVgXG4vLy8gICAgICogYGFueWAgLSB3b3JrcyBmb3IgYWxsIGVuY2Fwc3VsYXRpb24gbW9kZXMgYnkgZW1pdHRpbmcgdGhlIENTUyB0d2ljZSAoZGVmYXVsdCkuXG5AbWl4aW4gaGlnaC1jb250cmFzdCgkdGFyZ2V0OiBhY3RpdmUsICRlbmNhcHN1bGF0aW9uOiAnYW55Jykge1xuICBAaWYgKCR0YXJnZXQgIT0gJ2FjdGl2ZScgYW5kICR0YXJnZXQgIT0gJ2JsYWNrLW9uLXdoaXRlJyBhbmQgJHRhcmdldCAhPSAnd2hpdGUtb24tYmxhY2snKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IHZhbHVlIFwiI3skdGFyZ2V0fVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcImFjdGl2ZVwiLCBcImJsYWNrLW9uLXdoaXRlXCIsIGFuZCBcIndoaXRlLW9uLWJsYWNrXCInO1xuICB9XG5cbiAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nIGFuZCAkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ2FueScpIHtcbiAgICBAZXJyb3IgJ1Vua25vd24gY2RrLWhpZ2gtY29udHJhc3QgZW5jYXBzdWxhdGlvbiBcIiN7JGVuY2Fwc3VsYXRpb259XCIgcHJvdmlkZWQuICcgK1xuICAgICAgICAgICAnQWxsb3dlZCB2YWx1ZXMgYXJlIFwib25cIiwgXCJvZmZcIiwgYW5kIFwiYW55XCInO1xuICB9XG5cbiAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRleHQgaGFzIG11bHRpcGxlIHBhcnRzLCBzdWNoIGFzIGAuc2VjdGlvbiwgLnJlZ2lvbmAsIGp1c3QgZG9pbmdcbiAgLy8gYC5jZGstaGlnaC1jb250cmFzdC14eHggI3smfWAgd2lsbCBvbmx5IGFwcGx5IHRoZSBwYXJlbnQgc2VsZWN0b3IgdG8gdGhlIGZpcnN0IHBhcnQgb2YgdGhlXG4gIC8vIGNvbnRleHQuIFdlIGFkZHJlc3MgdGhpcyBieSBuZXN0aW5nIHRoZSBzZWxlY3RvciBjb250ZXh0IHVuZGVyIC5jZGstaGlnaC1jb250cmFzdC5cbiAgQGF0LXJvb3Qge1xuICAgICRzZWxlY3Rvci1jb250ZXh0OiAjeyZ9O1xuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nKSB7XG4gICAgICAvLyBOb3RlIHRoYXQgaWYgdGhpcyBzZWxlY3RvciBpcyB1cGRhdGVkLCB0aGUgc2FtZSBjaGFuZ2UgaGFzIHRvIGJlIG1hZGUgaW5zaWRlXG4gICAgICAvLyBgX292ZXJsYXkuc2Nzc2Agd2hpY2ggY2FuJ3QgZGVwZW5kIG9uIHRoaXMgbWl4aW4gZHVlIHRvIHNvbWUgaW5mcmFzdHJ1Y3R1cmUgbGltaXRhdGlvbnMuXG4gICAgICAuY2RrLWhpZ2gtY29udHJhc3QtI3skdGFyZ2V0fSB7XG4gICAgICAgIEBpbmNsdWRlIF9vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJykge1xuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0gOmhvc3Qge1xuICAgICAgICBAaW5jbHVkZSBfb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gV2Ugd2FudCBvdmVybGF5cyB0byBhbHdheXMgYXBwZWFyIG92ZXIgdXNlciBjb250ZW50LCBzbyBzZXQgYSBiYXNlbGluZVxuLy8gdmVyeSBoaWdoIHotaW5kZXggZm9yIHRoZSBvdmVybGF5IGNvbnRhaW5lciwgd2hpY2ggaXMgd2hlcmUgd2UgY3JlYXRlIHRoZSBuZXdcbi8vIHN0YWNraW5nIGNvbnRleHQgZm9yIGFsbCBvdmVybGF5cy5cbiRvdmVybGF5LWNvbnRhaW5lci16LWluZGV4OiAxMDAwICFkZWZhdWx0O1xuJG92ZXJsYXktei1pbmRleDogMTAwMCAhZGVmYXVsdDtcbiRvdmVybGF5LWJhY2tkcm9wLXotaW5kZXg6IDEwMDAgIWRlZmF1bHQ7XG5cbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGFsbCBvZiB0aGUgYmFja2Ryb3BzXG4kb3ZlcmxheS1iYWNrZHJvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKSAhZGVmYXVsdDtcblxuLy8gRGVmYXVsdCBiYWNrZHJvcCBhbmltYXRpb24gaXMgYmFzZWQgb24gdGhlIE1hdGVyaWFsIERlc2lnbiBzd2lmdC1lYXNlLW91dC5cbiRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4vLy8gRW1pdHMgc3RydWN0dXJhbCBzdHlsZXMgcmVxdWlyZWQgZm9yIGNkay9vdmVybGF5IHRvIGZ1bmN0aW9uLlxuQG1peGluIG92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJG92ZXJsYXktY29udGFpbmVyLXotaW5kZXg7XG5cbiAgICAmOmVtcHR5IHtcbiAgICAgIC8vIEhpZGUgdGhlIGVsZW1lbnQgd2hlbiBpdCBkb2Vzbid0IGhhdmUgYW55IGNoaWxkIG5vZGVzLiBUaGlzIGRvZXNuJ3RcbiAgICAgIC8vIGluY2x1ZGUgb3ZlcmxheXMgdGhhdCBoYXZlIGJlZW4gZGV0YWNoZWQsIHJhdGhlciB0aGFuIGRpc3Bvc2VkLlxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAvLyBXZSB1c2UgYW4gZXh0cmEgd3JhcHBlciBlbGVtZW50IGluIG9yZGVyIHRvIHVzZSBtYWtlIHRoZSBvdmVybGF5IGl0c2VsZiBhIGZsZXggaXRlbS5cbiAgLy8gVGhpcyBtYWtlcyBjZW50ZXJpbmcgdGhlIG92ZXJsYXkgZWFzeSB3aXRob3V0IHJ1bm5pbmcgaW50byB0aGUgc3VicGl4ZWwgcmVuZGVyaW5nXG4gIC8vIHByb2JsZW1zIHRpZWQgdG8gdXNpbmcgYHRyYW5zZm9ybWAgYW5kIHdpdGhvdXQgaW50ZXJmZXJpbmcgd2l0aCB0aGUgb3RoZXIgcG9zaXRpb25cbiAgLy8gc3RyYXRlZ2llcy5cbiAgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkb3ZlcmxheS16LWluZGV4O1xuICB9XG5cbiAgLy8gQSBzaW5nbGUgb3ZlcmxheSBwYW5lLlxuICAuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgZm9yIHRoaXMgb25lIHRvIHN0YXJ0IG9mZiBgYWJzb2x1dGVgLFxuICAgIC8vIGluIG9yZGVyIGZvciB1cyB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgY29ycmVjdGx5LlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6ICRvdmVybGF5LXotaW5kZXg7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkb3ZlcmxheS1iYWNrZHJvcC16LWluZGV4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uICRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgLy8gTm90ZSB0aGF0IHdlIGNhbid0IGltcG9ydCBhbmQgdXNlIHRoZSBgaGlnaC1jb250cmFzdGAgbWl4aW4gZnJvbSBgX2ExMXkuc2Nzc2AsIGJlY2F1c2VcbiAgICAgIC8vIHRoaXMgZmlsZSB3aWxsIGJlIGNvcGllZCB0byB0aGUgdG9wLWxldmVsIGBjZGtgIHBhY2thZ2Ugd2hlbiBwdXR0aW5nIHRvZ2V0aGVyIHRoZSBmaWxlc1xuICAgICAgLy8gZm9yIG5wbS4gQW55IHJlbGF0aXZlIGltcG9ydCBwYXRocyB3ZSB1c2UgaGVyZSB3aWxsIGJlY29tZSBpbnZhbGlkIG9uY2UgdGhlIGZpbGUgaXMgY29waWVkLlxuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAmIHtcbiAgICAgICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByZ2JhIGJhY2tncm91bmQgd2lsbCBiZWNvbWUgc29saWRcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byBmYWxsIGJhY2sgdG8gbWFraW5nIGl0IG9wYXF1ZSB1c2luZyBgb3BhY2l0eWAuXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogJG92ZXJsYXktYmFja2Ryb3AtY29sb3I7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIERlZmluZSBhIHRyYW5zaXRpb24gb24gdGhlIHZpc2liaWxpdHkgc28gdGhhdCB0aGUgYHRyYW5zaXRpb25lbmRgIGV2ZW50IGNhbiBmaXJlIGltbWVkaWF0ZWx5LlxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMW1zIGxpbmVhciwgb3BhY2l0eSAxbXMgbGluZWFyO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAxO1xuXG4gICAgLy8gTm90ZTogYXMgb2YgRmlyZWZveCA1NywgaGF2aW5nIHRoZSBiYWNrZHJvcCBiZSBgYmFja2dyb3VuZDogbm9uZWAgd2lsbCBwcmV2ZW50IGl0IGZyb21cbiAgICAvLyBjYXB0dXJpbmcgdGhlIHVzZXIncyBtb3VzZSBzY3JvbGwgZXZlbnRzLiBTaW5jZSB3ZSBhbHNvIGNhbid0IHVzZSBzb21ldGhpbmcgbGlrZVxuICAgIC8vIGByZ2JhKDAsIDAsIDAsIDApYCwgd2Ugd29yayBhcm91bmQgdGhlIGluY29uc2lzdGVuY3kgYnkgbm90IHNldHRpbmcgdGhlIGJhY2tncm91bmQgYXRcbiAgICAvLyBhbGwgYW5kIHVzaW5nIGBvcGFjaXR5YCB0byBtYWtlIHRoZSBlbGVtZW50IHRyYW5zcGFyZW50LlxuICAgICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gIH1cblxuICAuY2RrLW92ZXJsYXktYmFja2Ryb3Atbm9vcC1hbmltYXRpb24ge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkb3ZlcmxheS16LWluZGV4O1xuXG4gICAgLy8gV2UgdXNlIGBkaXNwbGF5OiBmbGV4YCBvbiB0aGlzIGVsZW1lbnQgZXhjbHVzaXZlbHkgZm9yIGNlbnRlcmluZyBjb25uZWN0ZWQgb3ZlcmxheXMuXG4gICAgLy8gV2hlbiAqbm90KiBjZW50ZXJpbmcsIGEgdG9wL2xlZnQvYm90dG9tL3JpZ2h0IHdpbGwgYmUgc2V0IHdoaWNoIG92ZXJyaWRlcyB0aGUgbm9ybWFsXG4gICAgLy8gZmxleCBsYXlvdXQuXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8vIFdlIHVzZSB0aGUgYGNvbHVtbmAgZGlyZWN0aW9uIGhlcmUgdG8gYXZvaWQgc29tZSBmbGV4Ym94IGlzc3VlcyBpbiBFZGdlXG4gICAgLy8gd2hlbiB1c2luZyB0aGUgXCJncm93IGFmdGVyIG9wZW5cIiBvcHRpb25zLlxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAvLyBBZGQgc29tZSBkaW1lbnNpb25zIHNvIHRoZSBlbGVtZW50IGhhcyBhbiBgaW5uZXJUZXh0YCB3aGljaCBzb21lIHBlb3BsZSBkZXBlbmQgb24gaW4gdGVzdHMuXG4gICAgbWluLXdpZHRoOiAxcHg7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICB9XG5cbiAgLy8gVXNlZCB3aGVuIGRpc2FibGluZyBnbG9iYWwgc2Nyb2xsaW5nLlxuICAuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgLy8gTmVjZXNzYXJ5IGZvciB0aGUgY29udGVudCBub3QgdG8gbG9zZSBpdHMgd2lkdGguIE5vdGUgdGhhdCB3ZSdyZSB1c2luZyAxMDAlLCBpbnN0ZWFkIG9mXG4gICAgLy8gMTAwdncsIGJlY2F1c2UgMTAwdncgaW5jbHVkZXMgdGhlIHdpZHRoIHBsdXMgdGhlIHNjcm9sbGJhciwgd2hlcmVhcyAxMDAlIGlzIHRoZSB3aWR0aFxuICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgaGFkIGJlZm9yZSB3ZSBtYWRlIGl0IGBmaXhlZGAuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAvLyBOb3RlOiB0aGlzIHdpbGwgYWx3YXlzIGFkZCBhIHNjcm9sbGJhciB0byB3aGF0ZXZlciBlbGVtZW50IGl0IGlzIG9uLCB3aGljaCBjYW5cbiAgICAvLyBwb3RlbnRpYWxseSByZXN1bHQgaW4gZG91YmxlIHNjcm9sbGJhcnMuIEl0IHNob3VsZG4ndCBiZSBhbiBpc3N1ZSwgYmVjYXVzZSB3ZSB3b24ndFxuICAgIC8vIGJsb2NrIHNjcm9sbGluZyBvbiBhIHBhZ2UgdGhhdCBkb2Vzbid0IGhhdmUgYSBzY3JvbGxiYXIgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuIiwiLy8gU3RydWN0dXJhbCBzdHlsZXMgZm9yIHRoZSBhdXRvc2l6ZSB0ZXh0IGZpZWxkcy5cbkBtaXhpbiB0ZXh0LWZpZWxkLWF1dG9zaXplKCkge1xuICAvLyBSZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gYXV0b3NpemluZyB0ZXh0YXJlYXMsIGJlY2F1c2Ugd2hhdGV2ZXIgaGVpZ2h0XG4gIC8vIHRoZSB1c2VyIHJlc2l6ZWQgdG8gd2lsbCBiZSBvdmVyd3JpdHRlbiBvbmNlIHRoZXkgc3RhcnQgdHlwaW5nIGFnYWluLlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuXG4gIC8vIFRoaXMgY2xhc3MgaXMgdGVtcG9yYXJpbHkgYXBwbGllZCB0byB0aGUgdGV4dGFyZWEgd2hlbiBpdCBpcyBiZWluZyBtZWFzdXJlZC4gSXQgaXMgaW1tZWRpYXRlbHlcbiAgLy8gcmVtb3ZlZCB3aGVuIG1lYXN1cmluZyBpcyBjb21wbGV0ZS4gV2UgdXNlIGAhaW1wb3J0YW50YCBydWxlcyBoZXJlIHRvIG1ha2Ugc3VyZSB1c2VyLXNwZWNpZmllZFxuICAvLyBydWxlcyBkbyBub3QgaW50ZXJmZXJlIHdpdGggdGhlIG1lYXN1cmVtZW50LlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgICBAaW5jbHVkZSBfYXV0b3NpemUtbWVhc3VyaW5nLWJhc2U7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLy8gU2ltaWxhciB0byB0aGUgYGNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmdgIGNsYXNzLCBidXQgb25seSBhcHBsaWVkIG9uIEZpcmVmb3guIFdlIG5lZWRcbiAgLy8gdG8gdXNlIHRoaXMgY2xhc3MsIGJlY2F1c2UgRmlyZWZveCBoYXMgYSBidWcgd2hlcmUgY2hhbmdpbmcgdGhlIGBvdmVyZmxvd2AgYnJlYWtzIHRoZSB1c2VyJ3NcbiAgLy8gYWJpbGl0eSB0byB1bmRvL3JlZG8gd2hhdCB0aGV5IHdlcmUgdHlwaW5nIChzZWUgIzE2NjI5KS4gVGhpcyBjbGFzcyBpcyBvbmx5IHNjb3BlZCB0byBGaXJlZm94LFxuICAvLyBiZWNhdXNlIHRoZSBtZWFzdXJlbWVudHMgdGhlcmUgZG9uJ3Qgc2VlbSB0byBiZSBhZmZlY3RlZCBieSB0aGUgYGhlaWdodDogMGAsIHdoZXJlYXMgb24gb3RoZXJcbiAgLy8gYnJvd3NlcnMgdGhleSBhcmUsIGUuZy4gQ2hyb21lIGRldGVjdHMgbG9uZ2VyIHRleHQgYW5kIElFIGRvZXMndCByZXNpemUgYmFjayB0byBub3JtYWwuXG4gIC8vIElkZW50aWNhbCBpc3N1ZSByZXBvcnQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQ0ODc4NFxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3gge1xuICAgIEBpbmNsdWRlIF9hdXRvc2l6ZS1tZWFzdXJpbmctYmFzZTtcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGVuYWJsZSBtb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIG9mIHRleHQgZmllbGRzLlxuQG1peGluIHRleHQtZmllbGQtYXV0b2ZpbGwoKSB7XG4gIC8vIEtleWZyYW1lcyB0aGF0IGFwcGx5IG5vIHN0eWxlcywgYnV0IGFsbG93IHVzIHRvIG1vbml0b3Igd2hlbiBhbiB0ZXh0IGZpZWxkIGJlY29tZXMgYXV0b2ZpbGxlZFxuICAvLyBieSB3YXRjaGluZyBmb3IgdGhlIGFuaW1hdGlvbiBldmVudHMgdGhhdCBhcmUgZmlyZWQgd2hlbiB0aGV5IHN0YXJ0LiBOb3RlOiB0aGUgLyohKi8gY29tbWVudCBpc1xuICAvLyBuZWVkZWQgdG8gcHJldmVudCBMaWJTYXNzIGZyb20gc3RyaXBwaW5nIHRoZSBrZXlmcmFtZXMgb3V0LlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7LyohKi99XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsvKiEqL31cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIC8vIFNpbmNlIENocm9tZSA4MCB3ZSBuZWVkIGEgMW1zIGRlbGF5LCBvciB0aGUgYW5pbWF0aW9uc3RhcnQgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtcztcbiAgfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXksIG9yIHRoZSBhbmltYXRpb25zdGFydCBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtcztcbiAgfVxufVxuXG5AbWl4aW4gX2F1dG9zaXplLW1lYXN1cmluZy1iYXNlIHtcbiAgLy8gSGF2aW5nIDJweCB0b3AgYW5kIGJvdHRvbSBwYWRkaW5nIHNlZW1zIHRvIGZpeCBhIGJ1ZyB3aGVyZSBDaHJvbWUgZ2V0cyBhbiBpbmNvcnJlY3RcbiAgLy8gbWVhc3VyZW1lbnQuIFdlIGp1c3QgaGF2ZSB0byBhY2NvdW50IGZvciBpdCBsYXRlciBhbmQgc3VidHJhY3QgaXQgb2ZmIHRoZSBmaW5hbCByZXN1bHQuXG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG59XG5cbi8vIFVzZWQgdG8gZ2VuZXJhdGUgVUlEcyBmb3Iga2V5ZnJhbWVzIHVzZWQgdG8gY2hhbmdlIHRoZSB0ZXh0IGZpZWxkIGF1dG9maWxsIHN0eWxlcy5cbiRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogMDtcblxuLy8gTWl4aW4gdXNlZCB0byBhcHBseSBjdXN0b20gYmFja2dyb3VuZCBhbmQgZm9yZWdyb3VuZCBjb2xvcnMgdG8gYW4gYXV0b2ZpbGxlZCB0ZXh0IGZpZWxkLlxuLy8gQmFzZWQgb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3ODE1NDkvXG4vLyByZW1vdmluZy1pbnB1dC1iYWNrZ3JvdW5kLWNvbG91ci1mb3ItY2hyb21lLWF1dG9jb21wbGV0ZSNhbnN3ZXItMzc0MzIyNjBcbkBtaXhpbiB0ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yKCRiYWNrZ3JvdW5kLCAkZm9yZWdyb3VuZDonJykge1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSB7XG4gICAgdG8ge1xuICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICBAaWYgJGZvcmVncm91bmQgIT0gJycgeyBjb2xvcjogJGZvcmVncm91bmQ7IH1cbiAgICB9XG4gIH1cblxuICAmOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IGJvdGg7XG4gIH1cblxuICAmLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSBmb3IgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQsIG9yIHRoZSBhbmltYXRpb25zdGFydFxuICAgIC8vIGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXMsXG4gICAgICAgICAgICAgICBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0gYm90aDtcbiAgfVxuXG4gICRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogJGF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50ICsgMSAhZ2xvYmFsO1xufVxuXG4vLyBAZGVwcmVjYXRlZCBVc2UgYGF1dG9zaXplYCBhbmQgYGF1dG9maWxsYCBpbnN0ZWFkLlxuQG1peGluIHRleHQtZmllbGQge1xuICBAaW5jbHVkZSB0ZXh0LWZpZWxkLWF1dG9zaXplKCk7XG4gIEBpbmNsdWRlIHRleHQtZmllbGQtYXV0b2ZpbGwoKTtcbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICdAYW5ndWxhci9jZGsnO1xuQHVzZSAnLi4vc3R5bGUvbGF5b3V0LWNvbW1vbic7XG5AdXNlICcuLi90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vdGhlbWluZy9pbnNwZWN0aW9uJztcblxuLy8gUHJpdmF0ZSBzYXNzIHZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgdXNlZCBhcyByZWZlcmVuY2UgdGhyb3VnaG91dCBjb21wb25lbnQgc3R5bGVzaGVldHMuXG4kZGVmYXVsdC1ib3JkZXItd2lkdGg6IDNweDtcbiRkZWZhdWx0LWJvcmRlci1zdHlsZTogc29saWQ7XG4kZGVmYXVsdC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuJGRlZmF1bHQtYm9yZGVyLXJhZGl1czogNHB4O1xuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgdGhlIGZvY3VzIGluZGljYXRvciBzdHJ1Y3R1cmFsIHN0eWxlcy5cbkBtaXhpbiBzdHJ1Y3R1cmFsLXN0eWxpbmcoJHByZWZpeCkge1xuICAuI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBAaW5jbHVkZSBsYXlvdXQtY29tbW9uLmZpbGwoKTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGRpc3BsYXk6IHZhcigtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXksIG5vbmUpOyAvLyBIaWRlIHRoZSBpbmRpY2F0b3IgYnkgZGVmYXVsdC5cbiAgICAgIGJvcmRlcjogdmFyKFxuICAgICAgICAgIC0tI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoLFxuICAgICAgICAgICN7JGRlZmF1bHQtYm9yZGVyLXdpZHRofVxuICAgICAgICApXG4gICAgICAgIHZhcihcbiAgICAgICAgICAtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1zdHlsZSxcbiAgICAgICAgICAjeyRkZWZhdWx0LWJvcmRlci1zdHlsZX1cbiAgICAgICAgKVxuICAgICAgICB2YXIoXG4gICAgICAgICAgLS0jeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItY29sb3IsXG4gICAgICAgICAgI3skZGVmYXVsdC1ib3JkZXItY29sb3J9XG4gICAgICAgICk7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoXG4gICAgICAgIC0tI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1cyxcbiAgICAgICAgI3skZGVmYXVsdC1ib3JkZXItcmFkaXVzfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBCeSBkZWZhdWx0LCByZW5kZXIgdGhlIGZvY3VzIGluZGljYXRvciB3aGVuIHRoZSBmb2N1cyBpbmRpY2F0b3IgaG9zdCBlbGVtZW50IHRha2VzIGZvY3VzLlxuICAgIC8vIERlZmluaW5nIGEgcHNldWRvIGVsZW1lbnQncyBjb250ZW50IHdpbGwgY2F1c2UgaXQgdG8gcmVuZGVyLlxuICAgICY6Zm9jdXM6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICB9XG4gIH1cblxuICAvLyBFbmFibGUgdGhlIGluZGljYXRvciBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuXG4gIEBpbmNsdWRlIGNkay5oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKGRpc3BsYXk6IGJsb2NrKSwgJHByZWZpeCk7XG4gIH1cbn1cblxuLy8gR2VuZXJhdGVzIENTUyB2YXJpYWJsZSBkZWNsYXJhdGlvbnMgZnJvbSBhIG1hcC5cbkBtaXhpbiBfb3V0cHV0LXZhcmlhYmxlcygkbWFwKSB7XG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkbWFwIHtcbiAgICBAaWYgKCR2YWx1ZSkge1xuICAgICAgLS0jeyRrZXl9OiAjeyR2YWx1ZX07XG4gICAgfVxuICB9XG59XG5cbi8vIE1peGluIHRoYXQgZGVkdXBzIENTUyB2YXJpYWJsZXMgZm9yIHRoZSBzdHJvbmctZm9jdXMtaW5kaWNhdG9ycyBtaXhpbi5cbkBtaXhpbiBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnLCAkcHJlZml4KSB7XG4gICRib3JkZXItc3R5bGU6IG1hcC5nZXQoJGNvbmZpZywgYm9yZGVyLXN0eWxlKTtcbiAgJGJvcmRlci13aWR0aDogbWFwLmdldCgkY29uZmlnLCBib3JkZXItd2lkdGgpO1xuICAkYm9yZGVyLXJhZGl1czogbWFwLmdldCgkY29uZmlnLCBib3JkZXItcmFkaXVzKTtcbiAgJGJvcmRlci1jb2xvcjogbWFwLmdldCgkY29uZmlnLCBib3JkZXItY29sb3IpO1xuICAkZGlzcGxheTogbWFwLmdldCgkY29uZmlnLCBkaXNwbGF5KTtcbiAgJG1hcDogKFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItc3R5bGUnOiAkYm9yZGVyLXN0eWxlLFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItd2lkdGgnOiAkYm9yZGVyLXdpZHRoLFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItcmFkaXVzJzogJGJvcmRlci1yYWRpdXMsXG4gICAgJyN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1jb2xvcic6ICRib3JkZXItY29sb3IsXG4gICAgJyN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXknOiAkZGlzcGxheSxcbiAgKTtcblxuICBAaWYgKCYpIHtcbiAgICBAaW5jbHVkZSBfb3V0cHV0LXZhcmlhYmxlcygkbWFwKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgLy8gV2UgdXNlIGBodG1sYCBoZXJlIGluc3RlYWQgb2YgYDpyb290YCwgYmVjYXVzZSB0aGVcbiAgICAvLyBsYXR0ZXIgY2F1c2VzIHNvbWUgaXNzdWVzIHdpdGggaW50ZXJuYWwgdG9vbGluZy5cbiAgICBodG1sIHtcbiAgICAgIEBpbmNsdWRlIF9vdXRwdXQtdmFyaWFibGVzKCRtYXApO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gc3Ryb25nLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZzogKCkpIHtcbiAgLy8gRGVmYXVsdCBmb2N1cyBpbmRpY2F0b3IgY29uZmlnLlxuICAkZGVmYXVsdC1jb25maWc6IChcbiAgICAgIGJvcmRlci1jb2xvcjogYmxhY2ssXG4gICAgICBkaXNwbGF5OiBibG9jayxcbiAgKTtcblxuICAvLyBNZXJnZSBkZWZhdWx0IGNvbmZpZyB3aXRoIHVzZXIgY29uZmlnLlxuICAkY29uZmlnOiBtYXAubWVyZ2UoJGRlZmF1bHQtY29uZmlnLCAkY29uZmlnKTtcblxuICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnLCAnbWF0Jyk7XG59XG5cbkBtaXhpbiBtZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZzogKCkpIHtcbiAgLy8gRGVmYXVsdCBmb2N1cyBpbmRpY2F0b3IgY29uZmlnLlxuICAkZGVmYXVsdC1jb25maWc6IChcbiAgICAgIGJvcmRlci1jb2xvcjogYmxhY2ssXG4gICAgICBkaXNwbGF5OiBibG9jayxcbiAgKTtcblxuICAvLyBNZXJnZSBkZWZhdWx0IGNvbmZpZyB3aXRoIHVzZXIgY29uZmlnLlxuICAkY29uZmlnOiBtYXAubWVyZ2UoJGRlZmF1bHQtY29uZmlnLCAkY29uZmlnKTtcblxuICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnLCAnbWF0LW1kYycpO1xufVxuXG5AbWl4aW4gc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHRoZW1lLW9yLWNvbG9yKSA9PSAnY29sb3InIHtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLW9yLWNvbG9yXG4gICAgKSwgJ21hdCcpO1xuICB9XG4gIEBlbHNlIHtcbiAgICAkYm9yZGVyLWNvbG9yOiBpbnNwZWN0aW9uLmdldC10aGVtZS1jb2xvcigkdGhlbWUtb3ItY29sb3IsIHByaW1hcnkpO1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yXG4gICAgKSwgJ21hdCcpO1xuICB9XG59XG5cbkBtaXhpbiBzdHJvbmctZm9jdXMtaW5kaWNhdG9ycy10aGVtZSgkdGhlbWUtb3ItY29sb3IpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdGhlbWUtb3ItY29sb3IpID09ICdjb2xvcicge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtb3ItY29sb3JcbiAgICApLCAnbWF0Jyk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZS1vci1jb2xvciwgJ21hdC1mb2N1cy1pbmRpY2F0b3JzJykge1xuICAgICAgQGlmIGluc3BlY3Rpb24udGhlbWUtaGFzKCR0aGVtZS1vci1jb2xvciwgY29sb3IpIHtcbiAgICAgICAgQGluY2x1ZGUgc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1kYy1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1jb2xvcigkdGhlbWUtb3ItY29sb3IpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdGhlbWUtb3ItY29sb3IpID09ICdjb2xvcicge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtb3ItY29sb3JcbiAgICApLCAnbWF0LW1kYycpO1xuICB9XG4gIEBlbHNlIHtcbiAgICAkYm9yZGVyLWNvbG9yOiBpbnNwZWN0aW9uLmdldC10aGVtZS1jb2xvcigkdGhlbWUtb3ItY29sb3IsIHByaW1hcnkpO1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yXG4gICAgKSwgJ21hdC1tZGMnKTtcbiAgfVxufVxuXG5AbWl4aW4gbWRjLXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLXRoZW1lKCR0aGVtZS1vci1jb2xvcikge1xuICBAaWYgbWV0YS50eXBlLW9mKCR0aGVtZS1vci1jb2xvcikgPT0gJ2NvbG9yJyB7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKFxuICAgICAgICBib3JkZXItY29sb3I6ICR0aGVtZS1vci1jb2xvclxuICAgICksICdtYXQtbWRjJyk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKFxuICAgICAgICAkdGhlbWUtb3ItY29sb3IsICdtYXQtbWRjLWZvY3VzLWluZGljYXRvcnMnKSB7XG4gICAgICBAaWYgaW5zcGVjdGlvbi50aGVtZS1oYXMoJHRoZW1lLW9yLWNvbG9yLCBjb2xvcikge1xuICAgICAgICBAaW5jbHVkZSBtZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoaXMgbWl4aW4gZW5zdXJlcyBhbiBlbGVtZW50IHNwYW5zIHRvIGZpbGwgdGhlIG5lYXJlc3QgYW5jZXN0b3Igd2l0aCBkZWZpbmVkIHBvc2l0aW9uaW5nLlxuQG1peGluIGZpbGwge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiIsIkB1c2UgJ0Bhbmd1bGFyL2Nkayc7XG5AdXNlICcuL3Rva2Vucy9tMi9tYXQvYXBwJyBhcyB0b2tlbnMtbWF0LWFwcDtcbkB1c2UgJy4vdG9rZW5zL3Rva2VuLXV0aWxzJztcbkB1c2UgJy4vcmlwcGxlL3JpcHBsZSc7XG5AdXNlICcuL2ZvY3VzLWluZGljYXRvcnMvcHJpdmF0ZSc7XG5AdXNlICcuL21kYy1oZWxwZXJzL21kYy1oZWxwZXJzJztcblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBhcmUgbm90IHRoZW1lLWRlcGVuZGVudC5cbkBtaXhpbiBjb3JlKCkge1xuICBAaW5jbHVkZSByaXBwbGUucmlwcGxlKCk7XG4gIEBpbmNsdWRlIGNkay5hMTF5LXZpc3VhbGx5LWhpZGRlbigpO1xuICBAaW5jbHVkZSBjZGsub3ZlcmxheSgpO1xuICBAaW5jbHVkZSBjZGsudGV4dC1maWVsZC1hdXRvc2l6ZSgpO1xuICBAaW5jbHVkZSBjZGsudGV4dC1maWVsZC1hdXRvZmlsbCgpO1xuICBAaW5jbHVkZSBwcml2YXRlLnN0cnVjdHVyYWwtc3R5bGluZygnbWF0Jyk7XG4gIEBpbmNsdWRlIHByaXZhdGUuc3RydWN0dXJhbC1zdHlsaW5nKCdtYXQtbWRjJyk7XG5cbiAgLy8gV3JhcHBlciBlbGVtZW50IHRoYXQgcHJvdmlkZXMgdGhlIHRoZW1lIGJhY2tncm91bmQgd2hlbiB0aGVcbiAgLy8gdXNlcidzIGNvbnRlbnQgaXNuJ3QgaW5zaWRlIG9mIGEgYG1hdC1zaWRlbmF2LWNvbnRhaW5lcmAuXG4gIEBhdC1yb290IHtcbiAgICAubWF0LWFwcC1iYWNrZ3JvdW5kIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1oZWxwZXJzLmRpc2FibGUtbWRjLWZhbGxiYWNrLWRlY2xhcmF0aW9ucyB7XG4gICAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLnVzZS10b2tlbnModG9rZW5zLW1hdC1hcHAuJHByZWZpeCwgdG9rZW5zLW1hdC1hcHAuZ2V0LXRva2VuLXNsb3RzKCkpIHtcbiAgICAgICAgICAvLyBOb3RlOiB3ZSBuZWVkIHRvIGVtaXQgZmFsbGJhY2sgdmFsdWVzIGhlcmUgdG8gYXZvaWQgZXJyb3JzIGluIGludGVybmFsIGJ1aWxkcy5cbiAgICAgICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tc2xvdChiYWNrZ3JvdW5kLWNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc3BhcmVudCk7XG4gICAgICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXNsb3QoY29sb3IsIHRleHQtY29sb3IsIGluaGVyaXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuLy9cblxuQHVzZSAnc2FzczpsaXN0JztcbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuL2dzcyc7XG5cbi8vLyBXaGVuIHRydWUsIGFkZCBhbiBhZGRpdGlvbmFsIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uIGJlZm9yZSBkZWNsYXJhdGlvbnNcbi8vLyB0aGF0IHVzZSBhZHZhbmNlZCBmZWF0dXJlcyBzdWNoIGFzIGN1c3RvbSBwcm9wZXJ0aWVzIG9yIENTUyBmdW5jdGlvbnMuIFRoaXNcbi8vLyBhZGRzIGZhbGxiYWNrIHN1cHBvcnQgZm9yIG9sZGVyIGJyb3dzZXJzIHN1Y2ggYXMgSUUxMSB0aGF0IGRvIG5vdCBzdXBwb3J0XG4vLy8gdGhlc2UgZmVhdHVyZXMgYXQgdGhlIGNvc3Qgb2YgYWRkaXRpb25hbCBDU1MuIFNldCB0aGlzIHZhcmlhYmxlIHRvIGZhbHNlIHRvXG4vLy8gZGlzYWJsZSBnZW5lcmF0aW5nIGZhbGxiYWNrIGRlY2xhcmF0aW9ucy5cbiRlbmFibGUtZmFsbGJhY2stZGVjbGFyYXRpb25zOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gV3JpdGVzIGEgQ1NTIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uLiBUaGlzIG1peGluIGlzIHVzZWQgdGhyb3VnaG91dCB0aGVcbi8vLyB0aGVtZSBwYWNrYWdlIGZvciBjb25zaXN0ZW5jeSBmb3IgZHluYW1pY2FsbHkgc2V0dGluZyBDU1MgcHJvcGVydHkgdmFsdWVzLlxuLy8vXG4vLy8gVGhpcyBtaXhpbiBtYXkgb3B0aW9uYWxseSB0YWtlIGEgZmFsbGJhY2sgdmFsdWUuIEZvciBhZHZhbmNlZCBmZWF0dXJlcyBzdWNoXG4vLy8gYXMgY3VzdG9tIHByb3BlcnRpZXMgb3IgQ1NTIGZ1bmN0aW9ucyBsaWtlIG1pbiBhbmQgbWF4LCBhIGZhbGxiYWNrIHZhbHVlIGlzXG4vLy8gcmVjb21tZW5kZWQgdG8gc3VwcG9ydCBvbGRlciBicm93c2Vycy5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkcHJvcGVydHkgLSBUaGUgQ1NTIHByb3BlcnR5IG9mIHRoZSBkZWNsYXJhdGlvbi5cbi8vLyBAcGFyYW0geyp9ICR2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgQ1NTIGRlY2xhcmF0aW9uLiBUaGUgdmFsdWUgc2hvdWxkIGJlXG4vLy8gICAgIHJlc29sdmVkIGJ5IG90aGVyIHRoZW1lIGZ1bmN0aW9ucyBmaXJzdCAoaS5lLiBjdXN0b20gcHJvcGVydHkgTWFwcyBhbmRcbi8vLyAgICAgTWF0ZXJpYWwgdGhlbWUga2V5cyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIG1peGluKS4gSWYgdGhlIHZhbHVlIGlzXG4vLy8gICAgIG51bGwsIG5vIGRlY2xhcmF0aW9ucyB3aWxsIGJlIGVtaXR0ZWQuXG4vLy8gQHBhcmFtIHsqfSAkZmFsbGJhY2sgLSBBbiBvcHRpb25hbCBmYWxsYmFjayB2YWx1ZSBmb3Igb2xkZXIgYnJvd3NlcnMuIElmXG4vLy8gICAgIHByb3ZpZGVkLCBhIHNlY29uZCBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbiB3aWxsIGJlIGFkZGVkIGJlZm9yZSB0aGVcbi8vLyAgICAgbWFpbiBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbi5cbi8vLyBAcGFyYW0ge01hcH0gJGdzcyAtIEFuIG9wdGlvbmFsIE1hcCBvZiBHU1MgYW5ub3RhdGlvbnMgdG8gYWRkLlxuLy8vIEBwYXJhbSB7Qm9vbH0gJGltcG9ydGFudCAtIElmIHRydWUsIGFkZCBgIWltcG9ydGFudGAgdG8gdGhlIGRlY2xhcmF0aW9uLlxuQG1peGluIGRlY2xhcmF0aW9uKFxuICAkcHJvcGVydHksXG4gICR2YWx1ZSxcbiAgJGZhbGxiYWNrLXZhbHVlOiBudWxsLFxuICAkZ3NzOiAoKSxcbiAgJGltcG9ydGFudDogZmFsc2Vcbikge1xuICAvLyBOb3JtYWxseSBzZXR0aW5nIGEgbnVsbCB2YWx1ZSB0byBhIHByb3BlcnR5IHdpbGwgbm90IGVtaXQgQ1NTLCBzbyBtaXhpbnNcbiAgLy8gd291bGRuJ3QgbmVlZCB0byBjaGVjayB0aGlzLiBIb3dldmVyLCBTYXNzIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlXG4gIC8vIGludGVycG9sYXRlZCBwcm9wZXJ0eSBpcyBhIGN1c3RvbSBwcm9wZXJ0eS5cbiAgQGlmICR2YWx1ZSAhPSBudWxsIHtcbiAgICAkaW1wb3J0YW50LXJ1bGU6IGlmKCRpbXBvcnRhbnQsICcgIWltcG9ydGFudCcsICcnKTtcblxuICAgIEBpZiAkZmFsbGJhY2stdmFsdWUgYW5kICRlbmFibGUtZmFsbGJhY2stZGVjbGFyYXRpb25zIHtcbiAgICAgIEBpbmNsdWRlIGdzcy5hbm5vdGF0ZSgkZ3NzKTtcbiAgICAgICN7JHByb3BlcnR5fTogI3skZmFsbGJhY2stdmFsdWV9ICN7JGltcG9ydGFudC1ydWxlfTtcblxuICAgICAgLy8gQWRkIEBhbHRlcm5hdGUgdG8gYW5ub3RhdGlvbnMuXG4gICAgICAkZ3NzOiBtYXAubWVyZ2UoXG4gICAgICAgICRnc3MsXG4gICAgICAgIChcbiAgICAgICAgICBhbHRlcm5hdGU6IHRydWUsXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgZ3NzLmFubm90YXRlKCRnc3MpO1xuICAgICN7JHByb3BlcnR5fTogI3skdmFsdWV9I3skaW1wb3J0YW50LXJ1bGV9O1xuICB9XG59XG5cbi8vLyBVbnBhY2tzIHNob3J0aGFuZCB2YWx1ZXMgZm9yIENTUyBwcm9wZXJ0aWVzIChpLmUuIGxpc3RzIG9mIDEtMyB2YWx1ZXMpLlxuLy8vIElmIGEgbGlzdCBvZiA0IHZhbHVlcyBpcyBnaXZlbiwgaXQgaXMgcmV0dXJuZWQgYXMtaXMuXG4vLy9cbi8vLyBFeGFtcGxlczpcbi8vL1xuLy8vIHVucGFjay12YWx1ZSg0cHgpID0+IDRweCA0cHggNHB4IDRweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4KSA9PiA0cHggMnB4IDRweCAycHhcbi8vLyB1bnBhY2stdmFsdWUoNHB4IDJweCAycHgpID0+IDRweCAycHggMnB4IDJweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4IDAgMnB4KSA9PiA0cHggMnB4IDAgMnB4XG4vLy9cbi8vLyBAcGFyYW0ge051bWJlciB8IE1hcCB8IExpc3R9ICR2YWx1ZSAtIExpc3Qgb2YgMSB0byA0IHZhbHVlIG51bWJlcnMuXG4vLy8gQHJldHVybiB7TGlzdH0gYSBMaXN0IG9mIDQgdmFsdWUgbnVtYmVycy5cbkBmdW5jdGlvbiB1bnBhY2stdmFsdWUoJHZhbHVlKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHZhbHVlKSA9PSAnbWFwJyBvciBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDEge1xuICAgIEByZXR1cm4gJHZhbHVlICR2YWx1ZSAkdmFsdWUgJHZhbHVlO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gNCB7XG4gICAgQHJldHVybiAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAzIHtcbiAgICBAcmV0dXJuIGxpc3QubnRoKCR2YWx1ZSwgMSkgbGlzdC5udGgoJHZhbHVlLCAyKSBsaXN0Lm50aCgkdmFsdWUsIDMpXG4gICAgICBsaXN0Lm50aCgkdmFsdWUsIDIpO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMiB7XG4gICAgQHJldHVybiBsaXN0Lm50aCgkdmFsdWUsIDEpIGxpc3QubnRoKCR2YWx1ZSwgMikgbGlzdC5udGgoJHZhbHVlLCAxKVxuICAgICAgbGlzdC5udGgoJHZhbHVlLCAyKTtcbiAgfVxuXG4gIEBlcnJvciBcIkludmFsaWQgQ1NTIHByb3BlcnR5IHZhbHVlOiAnI3skdmFsdWV9JyBpcyBtb3JlIHRoYW4gNCB2YWx1ZXNcIjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 1580:
/*!************************************************************************!*\
  !*** ./src/app/multiplication-table/multiplication-table.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MultiplicationTableComponent: () => (/* binding */ MultiplicationTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function MultiplicationTableComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
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
    const num2_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.calculateClasses(i_r3, -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num2_r2);
  }
}
function MultiplicationTableComponent_tr_5_td_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function MultiplicationTableComponent_tr_5_td_3_Template_td_mouseover_0_listener() {
      const col_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4).index;
      const row_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r0.onMouseHover(col_r5, row_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const num2_r7 = ctx.$implicit;
    const col_r5 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const num1_r9 = ctx_r7.$implicit;
    const row_r6 = ctx_r7.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.calculateClasses(col_r5, row_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.calculate(num1_r9, num2_r7));
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
    const num1_r9 = ctx.$implicit;
    const row_r6 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.calculateClasses(-1, row_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](num1_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.tables);
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
    consts: [["class", "equation", 4, "ngIf"], [3, "ngClass", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "equation"], [3, "ngClass"], [3, "ngClass", "mouseover", 4, "ngFor", "ngForOf"], [3, "mouseover", "ngClass"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tables);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
    styles: [".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n  background-color: var(--mat-ripple-color, rgba(0, 0, 0, 0.1));\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start { \n }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end { \n }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: var(--mat-app-background-color, transparent);\n  color: var(--mat-app-text-color, inherit);\n}\n\ntable[_ngcontent-%COMP%] {\n  font-size: larger;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n\n.equation[_ngcontent-%COMP%] {\n  font-size: 27pt;\n  font-weight: bold;\n  padding: 10px;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-style: solid;\n  text-align: center;\n  padding: 0.2em;\n  width: 3rem;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #b2dfdb;\n  color: rgba(0, 0, 0, 0.87);\n}\n\ntd.inPath[_ngcontent-%COMP%] {\n  background-color: #c8e6c9;\n  color: white;\n}\n\nth.inPath[_ngcontent-%COMP%] {\n  background-color: #00796b;\n  color: white;\n}\n\ntd.onHover[_ngcontent-%COMP%] {\n  background-color: #388e3c;\n}\n\n.dark-theme[_nghost-%COMP%]   th[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #cfd8dc;\n  color: rgba(0, 0, 0, 0.87);\n}\n.dark-theme[_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%] {\n  background-color: #ffe57f;\n  color: rgba(0, 0, 0, 0.87);\n}\n.dark-theme[_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%] {\n  background-color: #607d8b;\n  color: white;\n}\n.dark-theme[_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%] {\n  background-color: #ffd740;\n}\n\n.light-theme[_nghost-%COMP%]   th[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n  color: rgba(0, 0, 0, 0.87);\n}\n.light-theme[_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%] {\n  background-color: #d7ccc8;\n  color: rgba(0, 0, 0, 0.87);\n}\n.light-theme[_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.87);\n}\n.light-theme[_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%] {\n  background-color: #bcaaa4;\n}\n\n.deeppurple-amber[_nghost-%COMP%]   th[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #d1c4e9;\n  color: rgba(0, 0, 0, 0.87);\n}\n.deeppurple-amber[_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%] {\n  background-color: #ffe57f;\n  color: rgba(0, 0, 0, 0.87);\n}\n.deeppurple-amber[_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  color: white;\n}\n.deeppurple-amber[_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%] {\n  background-color: #ffd740;\n}\n\n.indigo-pink[_nghost-%COMP%]   th[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #c5cae9;\n  color: rgba(0, 0, 0, 0.87);\n}\n.indigo-pink[_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%] {\n  background-color: #ff80ab;\n  color: white;\n}\n.indigo-pink[_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n.indigo-pink[_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%] {\n  background-color: #ff4081;\n}\n\n.pink-bluegrey[_nghost-%COMP%]   th[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  color: white;\n}\n.pink-bluegrey[_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%] {\n  background-color: #cfd8dc;\n  color: rgba(0, 0, 0, 0.87);\n}\n.pink-bluegrey[_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%] {\n  background-color: #c2185b;\n  color: white;\n}\n.pink-bluegrey[_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%] {\n  background-color: #b0bec5;\n}\n\n.purple-green[_nghost-%COMP%]   th[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #e1bee7;\n  color: rgba(0, 0, 0, 0.87);\n}\n.purple-green[_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%] {\n  background-color: #b9f6ca;\n  color: rgba(0, 0, 0, 0.87);\n}\n.purple-green[_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n  color: white;\n}\n.purple-green[_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%] {\n  background-color: #69f0ae;\n}\n\n.candy[_nghost-%COMP%]   th[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #ffe0b2;\n  color: rgba(0, 0, 0, 0.87);\n}\n.candy[_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   td.inPath[_ngcontent-%COMP%] {\n  background-color: #d7ccc8;\n  color: white;\n}\n.candy[_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   th.inPath[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  color: rgba(0, 0, 0, 0.87);\n}\n.candy[_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   td.onHover[_ngcontent-%COMP%] {\n  background-color: #795548;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL211bHRpcGxpY2F0aW9uLXRhYmxlL211bHRpcGxpY2F0aW9uLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Nkay9hMTF5L19pbmRleC5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Nkay9vdmVybGF5L19pbmRleC5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL2Nkay90ZXh0LWZpZWxkL19pbmRleC5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUvZm9jdXMtaW5kaWNhdG9ycy9fcHJpdmF0ZS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvX2xheW91dC1jb21tb24uc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL19jb3JlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsL3RoZW1lL19jc3Muc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPRTtFQUNFLGdCQUFBO0VBSUEsa0JBQUE7QUNUSjtBRGdCSTtFQUNFLHdCQUFBO0FDZE47O0FEa0JFO0VBQ0UsaUJBQUE7QUNmSjs7QURrQkU7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFFQSw2REFBQTtFQUlBLDJCQUFBO0VBS0UsNkRBQUE7QUN2Qk47QUMrQkk7RUZIRSxhQUFBO0FDekJOOztBQ25CRTtFQUNFLFNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Es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TlI7O0FBaE9JO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQW1PUjtBQWhPSTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUFrT1I7QUEvTkk7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FBaU9SO0FBOU5JO0VBQ0kseUJBQUE7QUFnT1I7O0FBaFBJO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQW1QUjtBQWhQSTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUFrUFI7QUEvT0k7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFpUFI7QUE5T0k7RUFDSSx5QkFBQTtBQWdQUjs7QUFoUUk7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FBbVFSO0FBaFFJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBa1FSO0FBL1BJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBaVFSO0FBOVBJO0VBQ0kseUJBQUE7QUFnUVI7O0FBaFJJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBbVJSO0FBaFJJO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQWtSUjtBQS9RSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQWlSUjtBQTlRSTtFQUNJLHlCQUFBO0FBZ1JSOztBQWhTSTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUFtU1I7QUFoU0k7RUFDSSx5QkFBQTtFQUNBLDBCQUFBO0FBa1NSO0FBL1JJO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBaVNSO0FBOVJJO0VBQ0kseUJBQUE7QUFnU1I7O0FBaFRJO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtBQW1UUjtBQWhUSTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQWtUUjtBQS9TSTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUFpVFI7QUE5U0k7RUFDSSx5QkFBQTtBQWdUUiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ0Bhbmd1bGFyL2Nkayc7XG5AdXNlICcuLi90b2tlbnMvbTIvbWF0L3JpcHBsZScgYXMgdG9rZW5zLW1hdC1yaXBwbGU7XG5AdXNlICcuLi90b2tlbnMvdG9rZW4tdXRpbHMnO1xuXG5AbWl4aW4gcmlwcGxlKCkge1xuICAvLyBUaGUgaG9zdCBlbGVtZW50IG9mIGFuIG1hdC1yaXBwbGUgZGlyZWN0aXZlIHNob3VsZCBhbHdheXMgaGF2ZSBhIHBvc2l0aW9uIG9mIFwiYWJzb2x1dGVcIiBvclxuICAvLyBcInJlbGF0aXZlXCIgc28gdGhhdCB0aGUgcmlwcGxlcyBpbnNpZGUgYXJlIGNvcnJlY3RseSBwb3NpdGlvbmVkIHJlbGF0aXZlbHkgdG8gdGhlIGNvbnRhaW5lci5cbiAgLm1hdC1yaXBwbGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAvLyBCeSBkZWZhdWx0LCBldmVyeSByaXBwbGUgY29udGFpbmVyIHNob3VsZCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBpbiBmYXZvciBvZiBjcmVhdGluZyBhblxuICAgIC8vIGVhc3kgQVBJIGZvciBkZXZlbG9wZXJzIHVzaW5nIHRoZSBNYXRSaXBwbGUgZGlyZWN0aXZlLlxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC8vIFByb21vdGUgY29udGFpbmVycyB0aGF0IGhhdmUgcmlwcGxlcyB0byBhIG5ldyBsYXllci4gV2Ugd2FudCB0byB0YXJnZXQgYDpub3QoOmVtcHR5KWAsXG4gICAgLy8gYmVjYXVzZSB3ZSBkb24ndCB3YW50IGFsbCByaXBwbGUgY29udGFpbmVycyB0byBoYXZlIHRoZWlyIG93biBsYXllciBzaW5jZSB0aGV5J3JlIHVzZWQgaW4gYVxuICAgIC8vIGxvdCBvZiBwbGFjZXMgYW5kIHRoZSBsYXllciBpcyBvbmx5IHJlbGV2YW50IHdoaWxlIGFuaW1hdGluZy4gTm90ZSB0aGF0IGlkZWFsbHkgd2UnZCB1c2VcbiAgICAvLyB0aGUgYGNvbnRhaW5gIHByb3BlcnR5IGhlcmUgKHNlZSAjMTMxNzUpLCBiZWNhdXNlIGA6ZW1wdHlgIGNhbiBiZSBicm9rZW4gYnkgaGF2aW5nIGV4dHJhXG4gICAgLy8gdGV4dCBpbnNpZGUgdGhlIGVsZW1lbnQsIGJ1dCBpdCBpc24ndCB2ZXJ5IHdlbGwgc3VwcG9ydGVkIHlldC5cbiAgICAmOm5vdCg6ZW1wdHkpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcblxuICAgIC8vIFdlIHVzZSBhIDNkIHRyYW5zZm9ybSBoZXJlIGluIG9yZGVyIHRvIGF2b2lkIGFuIGlzc3VlIGluIFNhZmFyaSB3aGVyZVxuICAgIC8vIHRoZSByaXBwbGVzIGFyZW4ndCBjbGlwcGVkIHdoZW4gaW5zaWRlIHRoZSBzaGFkb3cgRE9NIChzZWUgIzI0MDI4KS5cbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMCwgMCk7XG5cbiAgICBAaW5jbHVkZSB0b2tlbi11dGlscy51c2UtdG9rZW5zKFxuICAgICAgdG9rZW5zLW1hdC1yaXBwbGUuJHByZWZpeCwgdG9rZW5zLW1hdC1yaXBwbGUuZ2V0LXRva2VuLXNsb3RzKCkpIHtcbiAgICAgIC8vIFdlIGhhdmUgdG8gZW1pdCBhIGZhbGxiYWNrIHZhbHVlIGhlcmUsIGJlY2F1c2Ugc29tZSBpbnRlcm5hbCBidWlsZHMgZGVwZW5kIG9uIGl0LlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCN7dG9rZW4tdXRpbHMuZ2V0LXRva2VuLXZhcmlhYmxlKGNvbG9yKX0sIHJnYmEoIzAwMCwgMC4xKSk7XG4gICAgfVxuXG4gICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByaXBwbGUgaXMgb3BhcXVlLCBjYXVzaW5nIGl0IHRvIG9ic3RydWN0IHRoZSBjb250ZW50LlxuICAgIEBpbmNsdWRlIGNkay5oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnQGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcclxuQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvdGhlbWVzX3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG50YWJsZSB7XHJcbiAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG4uZXF1YXRpb24ge1xyXG4gICAgZm9udC1zaXplOiAyN3B0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG50ZCxcclxudGgge1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC4yZW07XHJcbiAgICB3aWR0aDogM3JlbTtcclxufVxyXG5cclxuQG1peGluIHdpZGdldC10aGVtZSgkdGhlbWUpIHtcclxuICAgICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XHJcbiAgICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcclxuICAgICRmZzogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xyXG5cclxuICAgICR0aF90ZXh0X2NvbG9yOiAje21hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRmZywgdGV4dCl9O1xyXG5cclxuICAgIHRkLFxyXG4gICAgdGgge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGZnKTtcclxuICAgIH1cclxuXHJcbiAgICB0aCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnksIGxpZ2h0ZXIpO1xyXG4gICAgICAgIGNvbG9yOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSwgbGlnaHRlci1jb250cmFzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGQuaW5QYXRoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50LCBsaWdodGVyKTtcclxuICAgICAgICBjb2xvcjogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCwgZGVmYXVsdC1jb250cmFzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGguaW5QYXRoIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSk7XHJcbiAgICAgICAgY29sb3I6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcclxuICAgIH1cclxuXHJcbiAgICB0ZC5vbkhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50KTtcclxuICAgICAgICBjb2xvcjogbWF0LmdldC1jb250cmFzdC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCwgbGlnaHRlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBlYWNoICR0aGNsYXNzLCAkdGggaW4gJGFsbF90aGVtZXMge1xyXG4gICAgQGlmICR0aGNsYXNzID09IFwiXCIge1xyXG4gICAgICAgIEBpbmNsdWRlIHdpZGdldC10aGVtZSgkdGgpO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgOmhvc3QtY29udGV4dCguI3skdGhjbGFzc30pIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgd2lkZ2V0LXRoZW1lKCR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vLyBFbWl0cyBhIENTUyBjbGFzcywgYC5jZGstdmlzdWFsbHktaGlkZGVuYC4gVGhpcyBjbGFzcyBjYW4gYmUgYXBwbGllZCB0byBhbiBlbGVtZW50XG4vLy8gdG8gbWFrZSB0aGF0IGVsZW1lbnQgdmlzdWFsbHkgaGlkZGVuIHdoaWxlIHJlbWFpbmluZyBhdmFpbGFibGUgdG8gYXNzaXN0aXZlIHRlY2hub2xvZ3kuXG5AbWl4aW4gYTExeS12aXN1YWxseS1oaWRkZW4oKSB7XG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuXG4gICAgLy8gVGhpcyB3b3JrcyBhcm91bmQgYSBDaHJvbWUgYnVnIHRoYXQgY2FuIGNhdXNlIHRoZSB0YWIgdG8gY3Jhc2ggd2hlbiBsYXJnZSBhbW91bnRzIG9mXG4gICAgLy8gbm9uLUVuZ2xpc2ggdGV4dCBnZXQgd3JhcHBlZDogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTIwMTQ0NFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgICAvLyBXZSBuZWVkIGF0IGxlYXN0IG9uZSBvZiB0b3AvYm90dG9tL2xlZnQvcmlnaHQgaW4gb3JkZXIgdG8gcHJldmVudCBjYXNlcyB3aGVyZSB0aGVcbiAgICAvLyBhYnNvbHV0ZS1wb3NpdGlvbmVkIGVsZW1lbnQgaXMgcHVzaGVkIGRvd24gYW5kIGNhbiBhZmZlY3Qgc2Nyb2xsaW5nIChzZWUgIzI0NTk3KS5cbiAgICAvLyBgbGVmdGAgd2FzIGNob3NlbiBoZXJlLCBiZWNhdXNlIGl0J3MgdGhlIGxlYXN0IGxpa2VseSB0byBicmVhayBvdmVycmlkZXMgd2hlcmUgdGhlXG4gICAgLy8gZWxlbWVudCBtaWdodCBoYXZlIGJlZW4gcG9zaXRpb25lZCAoZS5nLiBgbWF0LWNoZWNrYm94YCkuXG4gICAgbGVmdDogMDtcblxuICAgIFtkaXI9J3J0bCddICYge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuXG4vLy8gQGRlcHJlY2F0ZWQgVXNlIGBhMTF5LXZpc3VhbGx5LWhpZGRlbmAuXG5AbWl4aW4gYTExeSgpIHtcbiAgQGluY2x1ZGUgYTExeS12aXN1YWxseS1oaWRkZW47XG59XG5cbi8vLyBFbWl0cyB0aGUgbWl4aW4ncyBjb250ZW50IG5lc3RlZCB1bmRlciBgJHNlbGVjdG9yLWNvbnRleHRgIGlmIGAkc2VsZWN0b3ItY29udGV4dGBcbi8vLyBpcyBub24tZW1wdHkuXG4vLy8gQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yLWNvbnRleHQgVGhlIHNlbGVjdG9yIHVuZGVyIHdoaWNoIHRvIG5lc3QgdGhlIG1peGluJ3MgY29udGVudC5cbkBtaXhpbiBfb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgQGlmICgkc2VsZWN0b3ItY29udGV4dCA9PSAnJykge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBlbHNlIHtcbiAgICAjeyRzZWxlY3Rvci1jb250ZXh0fSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8vIEFwcGxpZXMgc3R5bGVzIGZvciB1c2VycyBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgYXBwbGllc1xuLy8vIHRvIE1pY3Jvc29mdCBicm93c2Vycy4gQ2hyb21lIGNhbiBiZSBpbmNsdWRlZCBieSBjaGVja2luZyBmb3IgdGhlIGBodG1sW2hjXWBcbi8vLyBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXQgVHlwZSBvZiBoaWdoIGNvbnRyYXN0IHNldHRpbmcgdG8gdGFyZ2V0LiBEZWZhdWx0cyB0byBgYWN0aXZlYCwgY2FuIGJlXG4vLy8gICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbi8vLyBAcGFyYW0ge1N0cmluZ30gZW5jYXBzdWxhdGlvbiBXaGV0aGVyIHRvIGVtaXQgc3R5bGVzIGZvciB2aWV3IGVuY2Fwc3VsYXRpb24uIFZhbHVlcyBhcmU6XG4vLy8gICAgICogYG9uYCAtIHdvcmtzIGZvciBgRW11bGF0ZWRgLCBgTmF0aXZlYCwgYW5kIGBTaGFkb3dEb21gXG4vLy8gICAgICogYG9mZmAgLSB3b3JrcyBmb3IgYE5vbmVgXG4vLy8gICAgICogYGFueWAgLSB3b3JrcyBmb3IgYWxsIGVuY2Fwc3VsYXRpb24gbW9kZXMgYnkgZW1pdHRpbmcgdGhlIENTUyB0d2ljZSAoZGVmYXVsdCkuXG5AbWl4aW4gaGlnaC1jb250cmFzdCgkdGFyZ2V0OiBhY3RpdmUsICRlbmNhcHN1bGF0aW9uOiAnYW55Jykge1xuICBAaWYgKCR0YXJnZXQgIT0gJ2FjdGl2ZScgYW5kICR0YXJnZXQgIT0gJ2JsYWNrLW9uLXdoaXRlJyBhbmQgJHRhcmdldCAhPSAnd2hpdGUtb24tYmxhY2snKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IHZhbHVlIFwiI3skdGFyZ2V0fVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcImFjdGl2ZVwiLCBcImJsYWNrLW9uLXdoaXRlXCIsIGFuZCBcIndoaXRlLW9uLWJsYWNrXCInO1xuICB9XG5cbiAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nIGFuZCAkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ2FueScpIHtcbiAgICBAZXJyb3IgJ1Vua25vd24gY2RrLWhpZ2gtY29udHJhc3QgZW5jYXBzdWxhdGlvbiBcIiN7JGVuY2Fwc3VsYXRpb259XCIgcHJvdmlkZWQuICcgK1xuICAgICAgICAgICAnQWxsb3dlZCB2YWx1ZXMgYXJlIFwib25cIiwgXCJvZmZcIiwgYW5kIFwiYW55XCInO1xuICB9XG5cbiAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRleHQgaGFzIG11bHRpcGxlIHBhcnRzLCBzdWNoIGFzIGAuc2VjdGlvbiwgLnJlZ2lvbmAsIGp1c3QgZG9pbmdcbiAgLy8gYC5jZGstaGlnaC1jb250cmFzdC14eHggI3smfWAgd2lsbCBvbmx5IGFwcGx5IHRoZSBwYXJlbnQgc2VsZWN0b3IgdG8gdGhlIGZpcnN0IHBhcnQgb2YgdGhlXG4gIC8vIGNvbnRleHQuIFdlIGFkZHJlc3MgdGhpcyBieSBuZXN0aW5nIHRoZSBzZWxlY3RvciBjb250ZXh0IHVuZGVyIC5jZGstaGlnaC1jb250cmFzdC5cbiAgQGF0LXJvb3Qge1xuICAgICRzZWxlY3Rvci1jb250ZXh0OiAjeyZ9O1xuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nKSB7XG4gICAgICAvLyBOb3RlIHRoYXQgaWYgdGhpcyBzZWxlY3RvciBpcyB1cGRhdGVkLCB0aGUgc2FtZSBjaGFuZ2UgaGFzIHRvIGJlIG1hZGUgaW5zaWRlXG4gICAgICAvLyBgX292ZXJsYXkuc2Nzc2Agd2hpY2ggY2FuJ3QgZGVwZW5kIG9uIHRoaXMgbWl4aW4gZHVlIHRvIHNvbWUgaW5mcmFzdHJ1Y3R1cmUgbGltaXRhdGlvbnMuXG4gICAgICAuY2RrLWhpZ2gtY29udHJhc3QtI3skdGFyZ2V0fSB7XG4gICAgICAgIEBpbmNsdWRlIF9vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJykge1xuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0gOmhvc3Qge1xuICAgICAgICBAaW5jbHVkZSBfb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gV2Ugd2FudCBvdmVybGF5cyB0byBhbHdheXMgYXBwZWFyIG92ZXIgdXNlciBjb250ZW50LCBzbyBzZXQgYSBiYXNlbGluZVxuLy8gdmVyeSBoaWdoIHotaW5kZXggZm9yIHRoZSBvdmVybGF5IGNvbnRhaW5lciwgd2hpY2ggaXMgd2hlcmUgd2UgY3JlYXRlIHRoZSBuZXdcbi8vIHN0YWNraW5nIGNvbnRleHQgZm9yIGFsbCBvdmVybGF5cy5cbiRvdmVybGF5LWNvbnRhaW5lci16LWluZGV4OiAxMDAwICFkZWZhdWx0O1xuJG92ZXJsYXktei1pbmRleDogMTAwMCAhZGVmYXVsdDtcbiRvdmVybGF5LWJhY2tkcm9wLXotaW5kZXg6IDEwMDAgIWRlZmF1bHQ7XG5cbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGFsbCBvZiB0aGUgYmFja2Ryb3BzXG4kb3ZlcmxheS1iYWNrZHJvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKSAhZGVmYXVsdDtcblxuLy8gRGVmYXVsdCBiYWNrZHJvcCBhbmltYXRpb24gaXMgYmFzZWQgb24gdGhlIE1hdGVyaWFsIERlc2lnbiBzd2lmdC1lYXNlLW91dC5cbiRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4vLy8gRW1pdHMgc3RydWN0dXJhbCBzdHlsZXMgcmVxdWlyZWQgZm9yIGNkay9vdmVybGF5IHRvIGZ1bmN0aW9uLlxuQG1peGluIG92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJG92ZXJsYXktY29udGFpbmVyLXotaW5kZXg7XG5cbiAgICAmOmVtcHR5IHtcbiAgICAgIC8vIEhpZGUgdGhlIGVsZW1lbnQgd2hlbiBpdCBkb2Vzbid0IGhhdmUgYW55IGNoaWxkIG5vZGVzLiBUaGlzIGRvZXNuJ3RcbiAgICAgIC8vIGluY2x1ZGUgb3ZlcmxheXMgdGhhdCBoYXZlIGJlZW4gZGV0YWNoZWQsIHJhdGhlciB0aGFuIGRpc3Bvc2VkLlxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAvLyBXZSB1c2UgYW4gZXh0cmEgd3JhcHBlciBlbGVtZW50IGluIG9yZGVyIHRvIHVzZSBtYWtlIHRoZSBvdmVybGF5IGl0c2VsZiBhIGZsZXggaXRlbS5cbiAgLy8gVGhpcyBtYWtlcyBjZW50ZXJpbmcgdGhlIG92ZXJsYXkgZWFzeSB3aXRob3V0IHJ1bm5pbmcgaW50byB0aGUgc3VicGl4ZWwgcmVuZGVyaW5nXG4gIC8vIHByb2JsZW1zIHRpZWQgdG8gdXNpbmcgYHRyYW5zZm9ybWAgYW5kIHdpdGhvdXQgaW50ZXJmZXJpbmcgd2l0aCB0aGUgb3RoZXIgcG9zaXRpb25cbiAgLy8gc3RyYXRlZ2llcy5cbiAgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkb3ZlcmxheS16LWluZGV4O1xuICB9XG5cbiAgLy8gQSBzaW5nbGUgb3ZlcmxheSBwYW5lLlxuICAuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgZm9yIHRoaXMgb25lIHRvIHN0YXJ0IG9mZiBgYWJzb2x1dGVgLFxuICAgIC8vIGluIG9yZGVyIGZvciB1cyB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgY29ycmVjdGx5LlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6ICRvdmVybGF5LXotaW5kZXg7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkb3ZlcmxheS1iYWNrZHJvcC16LWluZGV4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uICRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgLy8gTm90ZSB0aGF0IHdlIGNhbid0IGltcG9ydCBhbmQgdXNlIHRoZSBgaGlnaC1jb250cmFzdGAgbWl4aW4gZnJvbSBgX2ExMXkuc2Nzc2AsIGJlY2F1c2VcbiAgICAgIC8vIHRoaXMgZmlsZSB3aWxsIGJlIGNvcGllZCB0byB0aGUgdG9wLWxldmVsIGBjZGtgIHBhY2thZ2Ugd2hlbiBwdXR0aW5nIHRvZ2V0aGVyIHRoZSBmaWxlc1xuICAgICAgLy8gZm9yIG5wbS4gQW55IHJlbGF0aXZlIGltcG9ydCBwYXRocyB3ZSB1c2UgaGVyZSB3aWxsIGJlY29tZSBpbnZhbGlkIG9uY2UgdGhlIGZpbGUgaXMgY29waWVkLlxuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAmIHtcbiAgICAgICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByZ2JhIGJhY2tncm91bmQgd2lsbCBiZWNvbWUgc29saWRcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byBmYWxsIGJhY2sgdG8gbWFraW5nIGl0IG9wYXF1ZSB1c2luZyBgb3BhY2l0eWAuXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogJG92ZXJsYXktYmFja2Ryb3AtY29sb3I7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIERlZmluZSBhIHRyYW5zaXRpb24gb24gdGhlIHZpc2liaWxpdHkgc28gdGhhdCB0aGUgYHRyYW5zaXRpb25lbmRgIGV2ZW50IGNhbiBmaXJlIGltbWVkaWF0ZWx5LlxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMW1zIGxpbmVhciwgb3BhY2l0eSAxbXMgbGluZWFyO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAxO1xuXG4gICAgLy8gTm90ZTogYXMgb2YgRmlyZWZveCA1NywgaGF2aW5nIHRoZSBiYWNrZHJvcCBiZSBgYmFja2dyb3VuZDogbm9uZWAgd2lsbCBwcmV2ZW50IGl0IGZyb21cbiAgICAvLyBjYXB0dXJpbmcgdGhlIHVzZXIncyBtb3VzZSBzY3JvbGwgZXZlbnRzLiBTaW5jZSB3ZSBhbHNvIGNhbid0IHVzZSBzb21ldGhpbmcgbGlrZVxuICAgIC8vIGByZ2JhKDAsIDAsIDAsIDApYCwgd2Ugd29yayBhcm91bmQgdGhlIGluY29uc2lzdGVuY3kgYnkgbm90IHNldHRpbmcgdGhlIGJhY2tncm91bmQgYXRcbiAgICAvLyBhbGwgYW5kIHVzaW5nIGBvcGFjaXR5YCB0byBtYWtlIHRoZSBlbGVtZW50IHRyYW5zcGFyZW50LlxuICAgICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gIH1cblxuICAuY2RrLW92ZXJsYXktYmFja2Ryb3Atbm9vcC1hbmltYXRpb24ge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkb3ZlcmxheS16LWluZGV4O1xuXG4gICAgLy8gV2UgdXNlIGBkaXNwbGF5OiBmbGV4YCBvbiB0aGlzIGVsZW1lbnQgZXhjbHVzaXZlbHkgZm9yIGNlbnRlcmluZyBjb25uZWN0ZWQgb3ZlcmxheXMuXG4gICAgLy8gV2hlbiAqbm90KiBjZW50ZXJpbmcsIGEgdG9wL2xlZnQvYm90dG9tL3JpZ2h0IHdpbGwgYmUgc2V0IHdoaWNoIG92ZXJyaWRlcyB0aGUgbm9ybWFsXG4gICAgLy8gZmxleCBsYXlvdXQuXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8vIFdlIHVzZSB0aGUgYGNvbHVtbmAgZGlyZWN0aW9uIGhlcmUgdG8gYXZvaWQgc29tZSBmbGV4Ym94IGlzc3VlcyBpbiBFZGdlXG4gICAgLy8gd2hlbiB1c2luZyB0aGUgXCJncm93IGFmdGVyIG9wZW5cIiBvcHRpb25zLlxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAvLyBBZGQgc29tZSBkaW1lbnNpb25zIHNvIHRoZSBlbGVtZW50IGhhcyBhbiBgaW5uZXJUZXh0YCB3aGljaCBzb21lIHBlb3BsZSBkZXBlbmQgb24gaW4gdGVzdHMuXG4gICAgbWluLXdpZHRoOiAxcHg7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICB9XG5cbiAgLy8gVXNlZCB3aGVuIGRpc2FibGluZyBnbG9iYWwgc2Nyb2xsaW5nLlxuICAuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgLy8gTmVjZXNzYXJ5IGZvciB0aGUgY29udGVudCBub3QgdG8gbG9zZSBpdHMgd2lkdGguIE5vdGUgdGhhdCB3ZSdyZSB1c2luZyAxMDAlLCBpbnN0ZWFkIG9mXG4gICAgLy8gMTAwdncsIGJlY2F1c2UgMTAwdncgaW5jbHVkZXMgdGhlIHdpZHRoIHBsdXMgdGhlIHNjcm9sbGJhciwgd2hlcmVhcyAxMDAlIGlzIHRoZSB3aWR0aFxuICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgaGFkIGJlZm9yZSB3ZSBtYWRlIGl0IGBmaXhlZGAuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAvLyBOb3RlOiB0aGlzIHdpbGwgYWx3YXlzIGFkZCBhIHNjcm9sbGJhciB0byB3aGF0ZXZlciBlbGVtZW50IGl0IGlzIG9uLCB3aGljaCBjYW5cbiAgICAvLyBwb3RlbnRpYWxseSByZXN1bHQgaW4gZG91YmxlIHNjcm9sbGJhcnMuIEl0IHNob3VsZG4ndCBiZSBhbiBpc3N1ZSwgYmVjYXVzZSB3ZSB3b24ndFxuICAgIC8vIGJsb2NrIHNjcm9sbGluZyBvbiBhIHBhZ2UgdGhhdCBkb2Vzbid0IGhhdmUgYSBzY3JvbGxiYXIgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuIiwiLy8gU3RydWN0dXJhbCBzdHlsZXMgZm9yIHRoZSBhdXRvc2l6ZSB0ZXh0IGZpZWxkcy5cbkBtaXhpbiB0ZXh0LWZpZWxkLWF1dG9zaXplKCkge1xuICAvLyBSZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gYXV0b3NpemluZyB0ZXh0YXJlYXMsIGJlY2F1c2Ugd2hhdGV2ZXIgaGVpZ2h0XG4gIC8vIHRoZSB1c2VyIHJlc2l6ZWQgdG8gd2lsbCBiZSBvdmVyd3JpdHRlbiBvbmNlIHRoZXkgc3RhcnQgdHlwaW5nIGFnYWluLlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuXG4gIC8vIFRoaXMgY2xhc3MgaXMgdGVtcG9yYXJpbHkgYXBwbGllZCB0byB0aGUgdGV4dGFyZWEgd2hlbiBpdCBpcyBiZWluZyBtZWFzdXJlZC4gSXQgaXMgaW1tZWRpYXRlbHlcbiAgLy8gcmVtb3ZlZCB3aGVuIG1lYXN1cmluZyBpcyBjb21wbGV0ZS4gV2UgdXNlIGAhaW1wb3J0YW50YCBydWxlcyBoZXJlIHRvIG1ha2Ugc3VyZSB1c2VyLXNwZWNpZmllZFxuICAvLyBydWxlcyBkbyBub3QgaW50ZXJmZXJlIHdpdGggdGhlIG1lYXN1cmVtZW50LlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgICBAaW5jbHVkZSBfYXV0b3NpemUtbWVhc3VyaW5nLWJhc2U7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLy8gU2ltaWxhciB0byB0aGUgYGNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmdgIGNsYXNzLCBidXQgb25seSBhcHBsaWVkIG9uIEZpcmVmb3guIFdlIG5lZWRcbiAgLy8gdG8gdXNlIHRoaXMgY2xhc3MsIGJlY2F1c2UgRmlyZWZveCBoYXMgYSBidWcgd2hlcmUgY2hhbmdpbmcgdGhlIGBvdmVyZmxvd2AgYnJlYWtzIHRoZSB1c2VyJ3NcbiAgLy8gYWJpbGl0eSB0byB1bmRvL3JlZG8gd2hhdCB0aGV5IHdlcmUgdHlwaW5nIChzZWUgIzE2NjI5KS4gVGhpcyBjbGFzcyBpcyBvbmx5IHNjb3BlZCB0byBGaXJlZm94LFxuICAvLyBiZWNhdXNlIHRoZSBtZWFzdXJlbWVudHMgdGhlcmUgZG9uJ3Qgc2VlbSB0byBiZSBhZmZlY3RlZCBieSB0aGUgYGhlaWdodDogMGAsIHdoZXJlYXMgb24gb3RoZXJcbiAgLy8gYnJvd3NlcnMgdGhleSBhcmUsIGUuZy4gQ2hyb21lIGRldGVjdHMgbG9uZ2VyIHRleHQgYW5kIElFIGRvZXMndCByZXNpemUgYmFjayB0byBub3JtYWwuXG4gIC8vIElkZW50aWNhbCBpc3N1ZSByZXBvcnQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQ0ODc4NFxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3gge1xuICAgIEBpbmNsdWRlIF9hdXRvc2l6ZS1tZWFzdXJpbmctYmFzZTtcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGVuYWJsZSBtb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIG9mIHRleHQgZmllbGRzLlxuQG1peGluIHRleHQtZmllbGQtYXV0b2ZpbGwoKSB7XG4gIC8vIEtleWZyYW1lcyB0aGF0IGFwcGx5IG5vIHN0eWxlcywgYnV0IGFsbG93IHVzIHRvIG1vbml0b3Igd2hlbiBhbiB0ZXh0IGZpZWxkIGJlY29tZXMgYXV0b2ZpbGxlZFxuICAvLyBieSB3YXRjaGluZyBmb3IgdGhlIGFuaW1hdGlvbiBldmVudHMgdGhhdCBhcmUgZmlyZWQgd2hlbiB0aGV5IHN0YXJ0LiBOb3RlOiB0aGUgLyohKi8gY29tbWVudCBpc1xuICAvLyBuZWVkZWQgdG8gcHJldmVudCBMaWJTYXNzIGZyb20gc3RyaXBwaW5nIHRoZSBrZXlmcmFtZXMgb3V0LlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7LyohKi99XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsvKiEqL31cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIC8vIFNpbmNlIENocm9tZSA4MCB3ZSBuZWVkIGEgMW1zIGRlbGF5LCBvciB0aGUgYW5pbWF0aW9uc3RhcnQgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtcztcbiAgfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXksIG9yIHRoZSBhbmltYXRpb25zdGFydCBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtcztcbiAgfVxufVxuXG5AbWl4aW4gX2F1dG9zaXplLW1lYXN1cmluZy1iYXNlIHtcbiAgLy8gSGF2aW5nIDJweCB0b3AgYW5kIGJvdHRvbSBwYWRkaW5nIHNlZW1zIHRvIGZpeCBhIGJ1ZyB3aGVyZSBDaHJvbWUgZ2V0cyBhbiBpbmNvcnJlY3RcbiAgLy8gbWVhc3VyZW1lbnQuIFdlIGp1c3QgaGF2ZSB0byBhY2NvdW50IGZvciBpdCBsYXRlciBhbmQgc3VidHJhY3QgaXQgb2ZmIHRoZSBmaW5hbCByZXN1bHQuXG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG59XG5cbi8vIFVzZWQgdG8gZ2VuZXJhdGUgVUlEcyBmb3Iga2V5ZnJhbWVzIHVzZWQgdG8gY2hhbmdlIHRoZSB0ZXh0IGZpZWxkIGF1dG9maWxsIHN0eWxlcy5cbiRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogMDtcblxuLy8gTWl4aW4gdXNlZCB0byBhcHBseSBjdXN0b20gYmFja2dyb3VuZCBhbmQgZm9yZWdyb3VuZCBjb2xvcnMgdG8gYW4gYXV0b2ZpbGxlZCB0ZXh0IGZpZWxkLlxuLy8gQmFzZWQgb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3ODE1NDkvXG4vLyByZW1vdmluZy1pbnB1dC1iYWNrZ3JvdW5kLWNvbG91ci1mb3ItY2hyb21lLWF1dG9jb21wbGV0ZSNhbnN3ZXItMzc0MzIyNjBcbkBtaXhpbiB0ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yKCRiYWNrZ3JvdW5kLCAkZm9yZWdyb3VuZDonJykge1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSB7XG4gICAgdG8ge1xuICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICBAaWYgJGZvcmVncm91bmQgIT0gJycgeyBjb2xvcjogJGZvcmVncm91bmQ7IH1cbiAgICB9XG4gIH1cblxuICAmOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IGJvdGg7XG4gIH1cblxuICAmLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSBmb3IgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQsIG9yIHRoZSBhbmltYXRpb25zdGFydFxuICAgIC8vIGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXMsXG4gICAgICAgICAgICAgICBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0gYm90aDtcbiAgfVxuXG4gICRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogJGF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50ICsgMSAhZ2xvYmFsO1xufVxuXG4vLyBAZGVwcmVjYXRlZCBVc2UgYGF1dG9zaXplYCBhbmQgYGF1dG9maWxsYCBpbnN0ZWFkLlxuQG1peGluIHRleHQtZmllbGQge1xuICBAaW5jbHVkZSB0ZXh0LWZpZWxkLWF1dG9zaXplKCk7XG4gIEBpbmNsdWRlIHRleHQtZmllbGQtYXV0b2ZpbGwoKTtcbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICdAYW5ndWxhci9jZGsnO1xuQHVzZSAnLi4vc3R5bGUvbGF5b3V0LWNvbW1vbic7XG5AdXNlICcuLi90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vdGhlbWluZy9pbnNwZWN0aW9uJztcblxuLy8gUHJpdmF0ZSBzYXNzIHZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgdXNlZCBhcyByZWZlcmVuY2UgdGhyb3VnaG91dCBjb21wb25lbnQgc3R5bGVzaGVldHMuXG4kZGVmYXVsdC1ib3JkZXItd2lkdGg6IDNweDtcbiRkZWZhdWx0LWJvcmRlci1zdHlsZTogc29saWQ7XG4kZGVmYXVsdC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuJGRlZmF1bHQtYm9yZGVyLXJhZGl1czogNHB4O1xuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgdGhlIGZvY3VzIGluZGljYXRvciBzdHJ1Y3R1cmFsIHN0eWxlcy5cbkBtaXhpbiBzdHJ1Y3R1cmFsLXN0eWxpbmcoJHByZWZpeCkge1xuICAuI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBAaW5jbHVkZSBsYXlvdXQtY29tbW9uLmZpbGwoKTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGRpc3BsYXk6IHZhcigtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXksIG5vbmUpOyAvLyBIaWRlIHRoZSBpbmRpY2F0b3IgYnkgZGVmYXVsdC5cbiAgICAgIGJvcmRlcjogdmFyKFxuICAgICAgICAgIC0tI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoLFxuICAgICAgICAgICN7JGRlZmF1bHQtYm9yZGVyLXdpZHRofVxuICAgICAgICApXG4gICAgICAgIHZhcihcbiAgICAgICAgICAtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1zdHlsZSxcbiAgICAgICAgICAjeyRkZWZhdWx0LWJvcmRlci1zdHlsZX1cbiAgICAgICAgKVxuICAgICAgICB2YXIoXG4gICAgICAgICAgLS0jeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItY29sb3IsXG4gICAgICAgICAgI3skZGVmYXVsdC1ib3JkZXItY29sb3J9XG4gICAgICAgICk7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoXG4gICAgICAgIC0tI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1cyxcbiAgICAgICAgI3skZGVmYXVsdC1ib3JkZXItcmFkaXVzfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBCeSBkZWZhdWx0LCByZW5kZXIgdGhlIGZvY3VzIGluZGljYXRvciB3aGVuIHRoZSBmb2N1cyBpbmRpY2F0b3IgaG9zdCBlbGVtZW50IHRha2VzIGZvY3VzLlxuICAgIC8vIERlZmluaW5nIGEgcHNldWRvIGVsZW1lbnQncyBjb250ZW50IHdpbGwgY2F1c2UgaXQgdG8gcmVuZGVyLlxuICAgICY6Zm9jdXM6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICB9XG4gIH1cblxuICAvLyBFbmFibGUgdGhlIGluZGljYXRvciBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuXG4gIEBpbmNsdWRlIGNkay5oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKGRpc3BsYXk6IGJsb2NrKSwgJHByZWZpeCk7XG4gIH1cbn1cblxuLy8gR2VuZXJhdGVzIENTUyB2YXJpYWJsZSBkZWNsYXJhdGlvbnMgZnJvbSBhIG1hcC5cbkBtaXhpbiBfb3V0cHV0LXZhcmlhYmxlcygkbWFwKSB7XG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkbWFwIHtcbiAgICBAaWYgKCR2YWx1ZSkge1xuICAgICAgLS0jeyRrZXl9OiAjeyR2YWx1ZX07XG4gICAgfVxuICB9XG59XG5cbi8vIE1peGluIHRoYXQgZGVkdXBzIENTUyB2YXJpYWJsZXMgZm9yIHRoZSBzdHJvbmctZm9jdXMtaW5kaWNhdG9ycyBtaXhpbi5cbkBtaXhpbiBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnLCAkcHJlZml4KSB7XG4gICRib3JkZXItc3R5bGU6IG1hcC5nZXQoJGNvbmZpZywgYm9yZGVyLXN0eWxlKTtcbiAgJGJvcmRlci13aWR0aDogbWFwLmdldCgkY29uZmlnLCBib3JkZXItd2lkdGgpO1xuICAkYm9yZGVyLXJhZGl1czogbWFwLmdldCgkY29uZmlnLCBib3JkZXItcmFkaXVzKTtcbiAgJGJvcmRlci1jb2xvcjogbWFwLmdldCgkY29uZmlnLCBib3JkZXItY29sb3IpO1xuICAkZGlzcGxheTogbWFwLmdldCgkY29uZmlnLCBkaXNwbGF5KTtcbiAgJG1hcDogKFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItc3R5bGUnOiAkYm9yZGVyLXN0eWxlLFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItd2lkdGgnOiAkYm9yZGVyLXdpZHRoLFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItcmFkaXVzJzogJGJvcmRlci1yYWRpdXMsXG4gICAgJyN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1jb2xvcic6ICRib3JkZXItY29sb3IsXG4gICAgJyN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXknOiAkZGlzcGxheSxcbiAgKTtcblxuICBAaWYgKCYpIHtcbiAgICBAaW5jbHVkZSBfb3V0cHV0LXZhcmlhYmxlcygkbWFwKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgLy8gV2UgdXNlIGBodG1sYCBoZXJlIGluc3RlYWQgb2YgYDpyb290YCwgYmVjYXVzZSB0aGVcbiAgICAvLyBsYXR0ZXIgY2F1c2VzIHNvbWUgaXNzdWVzIHdpdGggaW50ZXJuYWwgdG9vbGluZy5cbiAgICBodG1sIHtcbiAgICAgIEBpbmNsdWRlIF9vdXRwdXQtdmFyaWFibGVzKCRtYXApO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gc3Ryb25nLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZzogKCkpIHtcbiAgLy8gRGVmYXVsdCBmb2N1cyBpbmRpY2F0b3IgY29uZmlnLlxuICAkZGVmYXVsdC1jb25maWc6IChcbiAgICAgIGJvcmRlci1jb2xvcjogYmxhY2ssXG4gICAgICBkaXNwbGF5OiBibG9jayxcbiAgKTtcblxuICAvLyBNZXJnZSBkZWZhdWx0IGNvbmZpZyB3aXRoIHVzZXIgY29uZmlnLlxuICAkY29uZmlnOiBtYXAubWVyZ2UoJGRlZmF1bHQtY29uZmlnLCAkY29uZmlnKTtcblxuICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnLCAnbWF0Jyk7XG59XG5cbkBtaXhpbiBtZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZzogKCkpIHtcbiAgLy8gRGVmYXVsdCBmb2N1cyBpbmRpY2F0b3IgY29uZmlnLlxuICAkZGVmYXVsdC1jb25maWc6IChcbiAgICAgIGJvcmRlci1jb2xvcjogYmxhY2ssXG4gICAgICBkaXNwbGF5OiBibG9jayxcbiAgKTtcblxuICAvLyBNZXJnZSBkZWZhdWx0IGNvbmZpZyB3aXRoIHVzZXIgY29uZmlnLlxuICAkY29uZmlnOiBtYXAubWVyZ2UoJGRlZmF1bHQtY29uZmlnLCAkY29uZmlnKTtcblxuICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnLCAnbWF0LW1kYycpO1xufVxuXG5AbWl4aW4gc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHRoZW1lLW9yLWNvbG9yKSA9PSAnY29sb3InIHtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLW9yLWNvbG9yXG4gICAgKSwgJ21hdCcpO1xuICB9XG4gIEBlbHNlIHtcbiAgICAkYm9yZGVyLWNvbG9yOiBpbnNwZWN0aW9uLmdldC10aGVtZS1jb2xvcigkdGhlbWUtb3ItY29sb3IsIHByaW1hcnkpO1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yXG4gICAgKSwgJ21hdCcpO1xuICB9XG59XG5cbkBtaXhpbiBzdHJvbmctZm9jdXMtaW5kaWNhdG9ycy10aGVtZSgkdGhlbWUtb3ItY29sb3IpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdGhlbWUtb3ItY29sb3IpID09ICdjb2xvcicge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtb3ItY29sb3JcbiAgICApLCAnbWF0Jyk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZS1vci1jb2xvciwgJ21hdC1mb2N1cy1pbmRpY2F0b3JzJykge1xuICAgICAgQGlmIGluc3BlY3Rpb24udGhlbWUtaGFzKCR0aGVtZS1vci1jb2xvciwgY29sb3IpIHtcbiAgICAgICAgQGluY2x1ZGUgc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1kYy1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1jb2xvcigkdGhlbWUtb3ItY29sb3IpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdGhlbWUtb3ItY29sb3IpID09ICdjb2xvcicge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtb3ItY29sb3JcbiAgICApLCAnbWF0LW1kYycpO1xuICB9XG4gIEBlbHNlIHtcbiAgICAkYm9yZGVyLWNvbG9yOiBpbnNwZWN0aW9uLmdldC10aGVtZS1jb2xvcigkdGhlbWUtb3ItY29sb3IsIHByaW1hcnkpO1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yXG4gICAgKSwgJ21hdC1tZGMnKTtcbiAgfVxufVxuXG5AbWl4aW4gbWRjLXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLXRoZW1lKCR0aGVtZS1vci1jb2xvcikge1xuICBAaWYgbWV0YS50eXBlLW9mKCR0aGVtZS1vci1jb2xvcikgPT0gJ2NvbG9yJyB7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKFxuICAgICAgICBib3JkZXItY29sb3I6ICR0aGVtZS1vci1jb2xvclxuICAgICksICdtYXQtbWRjJyk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKFxuICAgICAgICAkdGhlbWUtb3ItY29sb3IsICdtYXQtbWRjLWZvY3VzLWluZGljYXRvcnMnKSB7XG4gICAgICBAaWYgaW5zcGVjdGlvbi50aGVtZS1oYXMoJHRoZW1lLW9yLWNvbG9yLCBjb2xvcikge1xuICAgICAgICBAaW5jbHVkZSBtZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoaXMgbWl4aW4gZW5zdXJlcyBhbiBlbGVtZW50IHNwYW5zIHRvIGZpbGwgdGhlIG5lYXJlc3QgYW5jZXN0b3Igd2l0aCBkZWZpbmVkIHBvc2l0aW9uaW5nLlxuQG1peGluIGZpbGwge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiIsIkB1c2UgJ0Bhbmd1bGFyL2Nkayc7XG5AdXNlICcuL3Rva2Vucy9tMi9tYXQvYXBwJyBhcyB0b2tlbnMtbWF0LWFwcDtcbkB1c2UgJy4vdG9rZW5zL3Rva2VuLXV0aWxzJztcbkB1c2UgJy4vcmlwcGxlL3JpcHBsZSc7XG5AdXNlICcuL2ZvY3VzLWluZGljYXRvcnMvcHJpdmF0ZSc7XG5AdXNlICcuL21kYy1oZWxwZXJzL21kYy1oZWxwZXJzJztcblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBhcmUgbm90IHRoZW1lLWRlcGVuZGVudC5cbkBtaXhpbiBjb3JlKCkge1xuICBAaW5jbHVkZSByaXBwbGUucmlwcGxlKCk7XG4gIEBpbmNsdWRlIGNkay5hMTF5LXZpc3VhbGx5LWhpZGRlbigpO1xuICBAaW5jbHVkZSBjZGsub3ZlcmxheSgpO1xuICBAaW5jbHVkZSBjZGsudGV4dC1maWVsZC1hdXRvc2l6ZSgpO1xuICBAaW5jbHVkZSBjZGsudGV4dC1maWVsZC1hdXRvZmlsbCgpO1xuICBAaW5jbHVkZSBwcml2YXRlLnN0cnVjdHVyYWwtc3R5bGluZygnbWF0Jyk7XG4gIEBpbmNsdWRlIHByaXZhdGUuc3RydWN0dXJhbC1zdHlsaW5nKCdtYXQtbWRjJyk7XG5cbiAgLy8gV3JhcHBlciBlbGVtZW50IHRoYXQgcHJvdmlkZXMgdGhlIHRoZW1lIGJhY2tncm91bmQgd2hlbiB0aGVcbiAgLy8gdXNlcidzIGNvbnRlbnQgaXNuJ3QgaW5zaWRlIG9mIGEgYG1hdC1zaWRlbmF2LWNvbnRhaW5lcmAuXG4gIEBhdC1yb290IHtcbiAgICAubWF0LWFwcC1iYWNrZ3JvdW5kIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1oZWxwZXJzLmRpc2FibGUtbWRjLWZhbGxiYWNrLWRlY2xhcmF0aW9ucyB7XG4gICAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLnVzZS10b2tlbnModG9rZW5zLW1hdC1hcHAuJHByZWZpeCwgdG9rZW5zLW1hdC1hcHAuZ2V0LXRva2VuLXNsb3RzKCkpIHtcbiAgICAgICAgICAvLyBOb3RlOiB3ZSBuZWVkIHRvIGVtaXQgZmFsbGJhY2sgdmFsdWVzIGhlcmUgdG8gYXZvaWQgZXJyb3JzIGluIGludGVybmFsIGJ1aWxkcy5cbiAgICAgICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tc2xvdChiYWNrZ3JvdW5kLWNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc3BhcmVudCk7XG4gICAgICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXNsb3QoY29sb3IsIHRleHQtY29sb3IsIGluaGVyaXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuLy9cblxuQHVzZSAnc2FzczpsaXN0JztcbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuL2dzcyc7XG5cbi8vLyBXaGVuIHRydWUsIGFkZCBhbiBhZGRpdGlvbmFsIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uIGJlZm9yZSBkZWNsYXJhdGlvbnNcbi8vLyB0aGF0IHVzZSBhZHZhbmNlZCBmZWF0dXJlcyBzdWNoIGFzIGN1c3RvbSBwcm9wZXJ0aWVzIG9yIENTUyBmdW5jdGlvbnMuIFRoaXNcbi8vLyBhZGRzIGZhbGxiYWNrIHN1cHBvcnQgZm9yIG9sZGVyIGJyb3dzZXJzIHN1Y2ggYXMgSUUxMSB0aGF0IGRvIG5vdCBzdXBwb3J0XG4vLy8gdGhlc2UgZmVhdHVyZXMgYXQgdGhlIGNvc3Qgb2YgYWRkaXRpb25hbCBDU1MuIFNldCB0aGlzIHZhcmlhYmxlIHRvIGZhbHNlIHRvXG4vLy8gZGlzYWJsZSBnZW5lcmF0aW5nIGZhbGxiYWNrIGRlY2xhcmF0aW9ucy5cbiRlbmFibGUtZmFsbGJhY2stZGVjbGFyYXRpb25zOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gV3JpdGVzIGEgQ1NTIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uLiBUaGlzIG1peGluIGlzIHVzZWQgdGhyb3VnaG91dCB0aGVcbi8vLyB0aGVtZSBwYWNrYWdlIGZvciBjb25zaXN0ZW5jeSBmb3IgZHluYW1pY2FsbHkgc2V0dGluZyBDU1MgcHJvcGVydHkgdmFsdWVzLlxuLy8vXG4vLy8gVGhpcyBtaXhpbiBtYXkgb3B0aW9uYWxseSB0YWtlIGEgZmFsbGJhY2sgdmFsdWUuIEZvciBhZHZhbmNlZCBmZWF0dXJlcyBzdWNoXG4vLy8gYXMgY3VzdG9tIHByb3BlcnRpZXMgb3IgQ1NTIGZ1bmN0aW9ucyBsaWtlIG1pbiBhbmQgbWF4LCBhIGZhbGxiYWNrIHZhbHVlIGlzXG4vLy8gcmVjb21tZW5kZWQgdG8gc3VwcG9ydCBvbGRlciBicm93c2Vycy5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkcHJvcGVydHkgLSBUaGUgQ1NTIHByb3BlcnR5IG9mIHRoZSBkZWNsYXJhdGlvbi5cbi8vLyBAcGFyYW0geyp9ICR2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgQ1NTIGRlY2xhcmF0aW9uLiBUaGUgdmFsdWUgc2hvdWxkIGJlXG4vLy8gICAgIHJlc29sdmVkIGJ5IG90aGVyIHRoZW1lIGZ1bmN0aW9ucyBmaXJzdCAoaS5lLiBjdXN0b20gcHJvcGVydHkgTWFwcyBhbmRcbi8vLyAgICAgTWF0ZXJpYWwgdGhlbWUga2V5cyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIG1peGluKS4gSWYgdGhlIHZhbHVlIGlzXG4vLy8gICAgIG51bGwsIG5vIGRlY2xhcmF0aW9ucyB3aWxsIGJlIGVtaXR0ZWQuXG4vLy8gQHBhcmFtIHsqfSAkZmFsbGJhY2sgLSBBbiBvcHRpb25hbCBmYWxsYmFjayB2YWx1ZSBmb3Igb2xkZXIgYnJvd3NlcnMuIElmXG4vLy8gICAgIHByb3ZpZGVkLCBhIHNlY29uZCBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbiB3aWxsIGJlIGFkZGVkIGJlZm9yZSB0aGVcbi8vLyAgICAgbWFpbiBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbi5cbi8vLyBAcGFyYW0ge01hcH0gJGdzcyAtIEFuIG9wdGlvbmFsIE1hcCBvZiBHU1MgYW5ub3RhdGlvbnMgdG8gYWRkLlxuLy8vIEBwYXJhbSB7Qm9vbH0gJGltcG9ydGFudCAtIElmIHRydWUsIGFkZCBgIWltcG9ydGFudGAgdG8gdGhlIGRlY2xhcmF0aW9uLlxuQG1peGluIGRlY2xhcmF0aW9uKFxuICAkcHJvcGVydHksXG4gICR2YWx1ZSxcbiAgJGZhbGxiYWNrLXZhbHVlOiBudWxsLFxuICAkZ3NzOiAoKSxcbiAgJGltcG9ydGFudDogZmFsc2Vcbikge1xuICAvLyBOb3JtYWxseSBzZXR0aW5nIGEgbnVsbCB2YWx1ZSB0byBhIHByb3BlcnR5IHdpbGwgbm90IGVtaXQgQ1NTLCBzbyBtaXhpbnNcbiAgLy8gd291bGRuJ3QgbmVlZCB0byBjaGVjayB0aGlzLiBIb3dldmVyLCBTYXNzIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlXG4gIC8vIGludGVycG9sYXRlZCBwcm9wZXJ0eSBpcyBhIGN1c3RvbSBwcm9wZXJ0eS5cbiAgQGlmICR2YWx1ZSAhPSBudWxsIHtcbiAgICAkaW1wb3J0YW50LXJ1bGU6IGlmKCRpbXBvcnRhbnQsICcgIWltcG9ydGFudCcsICcnKTtcblxuICAgIEBpZiAkZmFsbGJhY2stdmFsdWUgYW5kICRlbmFibGUtZmFsbGJhY2stZGVjbGFyYXRpb25zIHtcbiAgICAgIEBpbmNsdWRlIGdzcy5hbm5vdGF0ZSgkZ3NzKTtcbiAgICAgICN7JHByb3BlcnR5fTogI3skZmFsbGJhY2stdmFsdWV9ICN7JGltcG9ydGFudC1ydWxlfTtcblxuICAgICAgLy8gQWRkIEBhbHRlcm5hdGUgdG8gYW5ub3RhdGlvbnMuXG4gICAgICAkZ3NzOiBtYXAubWVyZ2UoXG4gICAgICAgICRnc3MsXG4gICAgICAgIChcbiAgICAgICAgICBhbHRlcm5hdGU6IHRydWUsXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgZ3NzLmFubm90YXRlKCRnc3MpO1xuICAgICN7JHByb3BlcnR5fTogI3skdmFsdWV9I3skaW1wb3J0YW50LXJ1bGV9O1xuICB9XG59XG5cbi8vLyBVbnBhY2tzIHNob3J0aGFuZCB2YWx1ZXMgZm9yIENTUyBwcm9wZXJ0aWVzIChpLmUuIGxpc3RzIG9mIDEtMyB2YWx1ZXMpLlxuLy8vIElmIGEgbGlzdCBvZiA0IHZhbHVlcyBpcyBnaXZlbiwgaXQgaXMgcmV0dXJuZWQgYXMtaXMuXG4vLy9cbi8vLyBFeGFtcGxlczpcbi8vL1xuLy8vIHVucGFjay12YWx1ZSg0cHgpID0+IDRweCA0cHggNHB4IDRweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4KSA9PiA0cHggMnB4IDRweCAycHhcbi8vLyB1bnBhY2stdmFsdWUoNHB4IDJweCAycHgpID0+IDRweCAycHggMnB4IDJweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4IDAgMnB4KSA9PiA0cHggMnB4IDAgMnB4XG4vLy9cbi8vLyBAcGFyYW0ge051bWJlciB8IE1hcCB8IExpc3R9ICR2YWx1ZSAtIExpc3Qgb2YgMSB0byA0IHZhbHVlIG51bWJlcnMuXG4vLy8gQHJldHVybiB7TGlzdH0gYSBMaXN0IG9mIDQgdmFsdWUgbnVtYmVycy5cbkBmdW5jdGlvbiB1bnBhY2stdmFsdWUoJHZhbHVlKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHZhbHVlKSA9PSAnbWFwJyBvciBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDEge1xuICAgIEByZXR1cm4gJHZhbHVlICR2YWx1ZSAkdmFsdWUgJHZhbHVlO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gNCB7XG4gICAgQHJldHVybiAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAzIHtcbiAgICBAcmV0dXJuIGxpc3QubnRoKCR2YWx1ZSwgMSkgbGlzdC5udGgoJHZhbHVlLCAyKSBsaXN0Lm50aCgkdmFsdWUsIDMpXG4gICAgICBsaXN0Lm50aCgkdmFsdWUsIDIpO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMiB7XG4gICAgQHJldHVybiBsaXN0Lm50aCgkdmFsdWUsIDEpIGxpc3QubnRoKCR2YWx1ZSwgMikgbGlzdC5udGgoJHZhbHVlLCAxKVxuICAgICAgbGlzdC5udGgoJHZhbHVlLCAyKTtcbiAgfVxuXG4gIEBlcnJvciBcIkludmFsaWQgQ1NTIHByb3BlcnR5IHZhbHVlOiAnI3skdmFsdWV9JyBpcyBtb3JlIHRoYW4gNCB2YWx1ZXNcIjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 9174:
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageNotFoundComponent: () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

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
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6096:
/*!**********************************************************!*\
  !*** ./src/app/problem-panel/problem-panel.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProblemPanelComponent: () => (/* binding */ ProblemPanelComponent),
/* harmony export */   ProblemPanelComponentDialog: () => (/* binding */ ProblemPanelComponentDialog)
/* harmony export */ });
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/config */ 1449);
/* harmony import */ var _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/math-question.service */ 3263);
/* harmony import */ var _math_question_math_question_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math-question/math-question.component */ 332);
/* harmony import */ var _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../column-answer/column-answer.component */ 3192);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/config.service */ 3696);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 3804);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../progress-bar/progress-bar.component */ 7212);





















function ProblemPanelComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-math-question", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r1 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("questionId", i_r1)("config", ctx_r1.config)("needReset", ctx_r1.needReset);
  }
}
function ProblemPanelComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 15);
  }
}
function ProblemPanelComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProblemPanelComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r1.validate());
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
    const orientation_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", orientation_r4.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", orientation_r4.label, " ");
  }
}
function ProblemPanelComponent_mat_option_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const answerMode_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", answerMode_r5.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", answerMode_r5.label, " ");
  }
}
const _c0 = ".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n  background-color: var(--mat-ripple-color, rgba(0, 0, 0, 0.1));\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start { \n }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end { \n }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: var(--mat-app-background-color, transparent);\n  color: var(--mat-app-text-color, inherit);\n}\n\n.mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #388e3c;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.dark-theme[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #ffd740;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.light-theme[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #bcaaa4;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.deeppurple-amber[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #ffd740;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.indigo-pink[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #ff4081;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.pink-bluegrey[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #b0bec5;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.purple-green[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #69f0ae;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.candy[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #795548;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.problems[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n\nbutton[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n\n.mat-radio-button[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n\n.orientation-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 10px 0;\n}\n\n.orientation-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n\n.orientation[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3Byb2JsZW0tcGFuZWwvcHJvYmxlbS1wYW5lbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvdGV4dC1maWVsZC9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL2ZvY3VzLWluZGljYXRvcnMvX3ByaXZhdGUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19sYXlvdXQtY29tbW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9fY29yZS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90aGVtZS9fY3NzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxnQkFBQTtFQUlBLGtCQUFBO0FDVEo7QURnQkk7RUFDRSx3QkFBQTtBQ2ROOztBRGtCRTtFQUNFLGlCQUFBO0FDZko7O0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsNkRBQUE7RUFJQSwyQkFBQTtFQUtFLDZEQUFBO0FDdkJOO0FDK0JJO0VGSEUsYUFBQTtBQ3pCTjs7QUNuQkU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFB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QTtBQXdPUjs7QUFsUEk7RUFFSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBb1BSOztBQTlQSTtFQUVJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFnUVI7O0FBMVFJO0VBRUksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTRRUjs7QUF0Ukk7RUFFSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBd1JSOztBQTFRQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUE2UUo7O0FBMVFBO0VBQ0ksa0JBQUE7QUE2UUo7O0FBMVFBO0VBQ0ksaUJBQUE7QUE2UUo7O0FBMVFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQTZRSjs7QUExUUE7RUFDSSxXQUFBO0FBNlFKOztBQTFRQTtFQUNJLHFCQUFBO0FBNlFKIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnQGFuZ3VsYXIvY2RrJztcbkB1c2UgJy4uL3Rva2Vucy9tMi9tYXQvcmlwcGxlJyBhcyB0b2tlbnMtbWF0LXJpcHBsZTtcbkB1c2UgJy4uL3Rva2Vucy90b2tlbi11dGlscyc7XG5cbkBtaXhpbiByaXBwbGUoKSB7XG4gIC8vIFRoZSBob3N0IGVsZW1lbnQgb2YgYW4gbWF0LXJpcHBsZSBkaXJlY3RpdmUgc2hvdWxkIGFsd2F5cyBoYXZlIGEgcG9zaXRpb24gb2YgXCJhYnNvbHV0ZVwiIG9yXG4gIC8vIFwicmVsYXRpdmVcIiBzbyB0aGF0IHRoZSByaXBwbGVzIGluc2lkZSBhcmUgY29ycmVjdGx5IHBvc2l0aW9uZWQgcmVsYXRpdmVseSB0byB0aGUgY29udGFpbmVyLlxuICAubWF0LXJpcHBsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIGV2ZXJ5IHJpcHBsZSBjb250YWluZXIgc2hvdWxkIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlIGluIGZhdm9yIG9mIGNyZWF0aW5nIGFuXG4gICAgLy8gZWFzeSBBUEkgZm9yIGRldmVsb3BlcnMgdXNpbmcgdGhlIE1hdFJpcHBsZSBkaXJlY3RpdmUuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLy8gUHJvbW90ZSBjb250YWluZXJzIHRoYXQgaGF2ZSByaXBwbGVzIHRvIGEgbmV3IGxheWVyLiBXZSB3YW50IHRvIHRhcmdldCBgOm5vdCg6ZW1wdHkpYCxcbiAgICAvLyBiZWNhdXNlIHdlIGRvbid0IHdhbnQgYWxsIHJpcHBsZSBjb250YWluZXJzIHRvIGhhdmUgdGhlaXIgb3duIGxheWVyIHNpbmNlIHRoZXkncmUgdXNlZCBpbiBhXG4gICAgLy8gbG90IG9mIHBsYWNlcyBhbmQgdGhlIGxheWVyIGlzIG9ubHkgcmVsZXZhbnQgd2hpbGUgYW5pbWF0aW5nLiBOb3RlIHRoYXQgaWRlYWxseSB3ZSdkIHVzZVxuICAgIC8vIHRoZSBgY29udGFpbmAgcHJvcGVydHkgaGVyZSAoc2VlICMxMzE3NSksIGJlY2F1c2UgYDplbXB0eWAgY2FuIGJlIGJyb2tlbiBieSBoYXZpbmcgZXh0cmFcbiAgICAvLyB0ZXh0IGluc2lkZSB0aGUgZWxlbWVudCwgYnV0IGl0IGlzbid0IHZlcnkgd2VsbCBzdXBwb3J0ZWQgeWV0LlxuICAgICY6bm90KDplbXB0eSkge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuXG4gICAgLy8gV2UgdXNlIGEgM2QgdHJhbnNmb3JtIGhlcmUgaW4gb3JkZXIgdG8gYXZvaWQgYW4gaXNzdWUgaW4gU2FmYXJpIHdoZXJlXG4gICAgLy8gdGhlIHJpcHBsZXMgYXJlbid0IGNsaXBwZWQgd2hlbiBpbnNpZGUgdGhlIHNoYWRvdyBET00gKHNlZSAjMjQwMjgpLlxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAwLCAwKTtcblxuICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLnVzZS10b2tlbnMoXG4gICAgICB0b2tlbnMtbWF0LXJpcHBsZS4kcHJlZml4LCB0b2tlbnMtbWF0LXJpcHBsZS5nZXQtdG9rZW4tc2xvdHMoKSkge1xuICAgICAgLy8gV2UgaGF2ZSB0byBlbWl0IGEgZmFsbGJhY2sgdmFsdWUgaGVyZSwgYmVjYXVzZSBzb21lIGludGVybmFsIGJ1aWxkcyBkZXBlbmQgb24gaXQuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoI3t0b2tlbi11dGlscy5nZXQtdG9rZW4tdmFyaWFibGUoY29sb3IpfSwgcmdiYSgjMDAwLCAwLjEpKTtcbiAgICB9XG5cbiAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJpcHBsZSBpcyBvcGFxdWUsIGNhdXNpbmcgaXQgdG8gb2JzdHJ1Y3QgdGhlIGNvbnRlbnQuXG4gICAgQGluY2x1ZGUgY2RrLmhpZ2gtY29udHJhc3QoYWN0aXZlLCBvZmYpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iLCIvLyBJbXBvcnQgbGlicmFyeSBmdW5jdGlvbnMgZm9yIHRoZW1lIGNyZWF0aW9uLlxyXG5AdXNlICdzYXNzOm1hcCc7XHJcbkB1c2UgJ0Bhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XHJcbkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL3RoZW1lc192YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuQG1peGluIG1hdGgtcXVlc3Rpb24tdGhlbWUoJHRoZW1lKSB7XHJcbiAgICAvLyBFeHRyYWN0IHRoZSBwYWxldHRlcyB5b3UgbmVlZCBmcm9tIHRoZSB0aGVtZSBkZWZpbml0aW9uLlxyXG4gICAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcclxuICAgICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xyXG5cclxuICAgIC5tYXRoUXVlc3Rpb25XcmFwcGVyIHtcclxuICAgICAgICAvL2ZsZXg6IDEgMSAwO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMDtcclxuICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICBmbGV4LWJhc2lzOiA3JTsgLy8gaW52ZXN0aWdhdGUgdG8gaGF2ZSB0aGUgc2FtZSBzaXplXHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRhY2NlbnQpO1xyXG4gICAgICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBlYWNoICR0aGNsYXNzLCAkdGggaW4gJGFsbF90aGVtZXMge1xyXG4gICAgQGlmICR0aGNsYXNzID09IFwiXCIge1xyXG4gICAgICAgIEBpbmNsdWRlIG1hdGgtcXVlc3Rpb24tdGhlbWUoJHRoKTtcclxuICAgIH0gQGVsc2Uge1xyXG4gICAgICAgIDpob3N0LWNvbnRleHQoLiN7JHRoY2xhc3N9KSB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIG1hdGgtcXVlc3Rpb24tdGhlbWUoJHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9ibGVtcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxuYnV0dG9uIHNwYW4ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcclxufVxyXG5cclxuLm9yaWVudGF0aW9uLXJhZGlvLWdyb3VwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuXHJcbi5vcmllbnRhdGlvbi1yYWRpby1idXR0b24ge1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5vcmllbnRhdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iLCIvLy8gRW1pdHMgYSBDU1MgY2xhc3MsIGAuY2RrLXZpc3VhbGx5LWhpZGRlbmAuIFRoaXMgY2xhc3MgY2FuIGJlIGFwcGxpZWQgdG8gYW4gZWxlbWVudFxuLy8vIHRvIG1ha2UgdGhhdCBlbGVtZW50IHZpc3VhbGx5IGhpZGRlbiB3aGlsZSByZW1haW5pbmcgYXZhaWxhYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2d5LlxuQG1peGluIGExMXktdmlzdWFsbHktaGlkZGVuKCkge1xuICAuY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcblxuICAgIC8vIFRoaXMgd29ya3MgYXJvdW5kIGEgQ2hyb21lIGJ1ZyB0aGF0IGNhbiBjYXVzZSB0aGUgdGFiIHRvIGNyYXNoIHdoZW4gbGFyZ2UgYW1vdW50cyBvZlxuICAgIC8vIG5vbi1FbmdsaXNoIHRleHQgZ2V0IHdyYXBwZWQ6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEyMDE0NDRcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgLy8gQXZvaWQgYnJvd3NlcnMgcmVuZGVyaW5nIHRoZSBmb2N1cyByaW5nIGluIHNvbWUgY2FzZXMuXG4gICAgb3V0bGluZTogMDtcblxuICAgIC8vIEF2b2lkIHNvbWUgY2FzZXMgd2hlcmUgdGhlIGJyb3dzZXIgd2lsbCBzdGlsbCByZW5kZXIgdGhlIG5hdGl2ZSBjb250cm9scyAoc2VlICM5MDQ5KS5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuXG4gICAgLy8gV2UgbmVlZCBhdCBsZWFzdCBvbmUgb2YgdG9wL2JvdHRvbS9sZWZ0L3JpZ2h0IGluIG9yZGVyIHRvIHByZXZlbnQgY2FzZXMgd2hlcmUgdGhlXG4gICAgLy8gYWJzb2x1dGUtcG9zaXRpb25lZCBlbGVtZW50IGlzIHB1c2hlZCBkb3duIGFuZCBjYW4gYWZmZWN0IHNjcm9sbGluZyAoc2VlICMyNDU5NykuXG4gICAgLy8gYGxlZnRgIHdhcyBjaG9zZW4gaGVyZSwgYmVjYXVzZSBpdCdzIHRoZSBsZWFzdCBsaWtlbHkgdG8gYnJlYWsgb3ZlcnJpZGVzIHdoZXJlIHRoZVxuICAgIC8vIGVsZW1lbnQgbWlnaHQgaGF2ZSBiZWVuIHBvc2l0aW9uZWQgKGUuZy4gYG1hdC1jaGVja2JveGApLlxuICAgIGxlZnQ6IDA7XG5cbiAgICBbZGlyPSdydGwnXSAmIHtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuLy8vIEBkZXByZWNhdGVkIFVzZSBgYTExeS12aXN1YWxseS1oaWRkZW5gLlxuQG1peGluIGExMXkoKSB7XG4gIEBpbmNsdWRlIGExMXktdmlzdWFsbHktaGlkZGVuO1xufVxuXG4vLy8gRW1pdHMgdGhlIG1peGluJ3MgY29udGVudCBuZXN0ZWQgdW5kZXIgYCRzZWxlY3Rvci1jb250ZXh0YCBpZiBgJHNlbGVjdG9yLWNvbnRleHRgXG4vLy8gaXMgbm9uLWVtcHR5LlxuLy8vIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3Rvci1jb250ZXh0IFRoZSBzZWxlY3RvciB1bmRlciB3aGljaCB0byBuZXN0IHRoZSBtaXhpbidzIGNvbnRlbnQuXG5AbWl4aW4gX29wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gIEBpZiAoJHNlbGVjdG9yLWNvbnRleHQgPT0gJycpIHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAZWxzZSB7XG4gICAgI3skc2VsZWN0b3ItY29udGV4dH0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vLyBBcHBsaWVzIHN0eWxlcyBmb3IgdXNlcnMgaW4gaGlnaCBjb250cmFzdCBtb2RlLiBOb3RlIHRoYXQgdGhpcyBvbmx5IGFwcGxpZXNcbi8vLyB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4vLy8gYXR0cmlidXRlLCBob3dldmVyIENocm9tZSBoYW5kbGVzIGhpZ2ggY29udHJhc3QgZGlmZmVyZW50bHkuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gdGFyZ2V0IFR5cGUgb2YgaGlnaCBjb250cmFzdCBzZXR0aW5nIHRvIHRhcmdldC4gRGVmYXVsdHMgdG8gYGFjdGl2ZWAsIGNhbiBiZVxuLy8vICAgICBgd2hpdGUtb24tYmxhY2tgIG9yIGBibGFjay1vbi13aGl0ZWAuXG4vLy8gQHBhcmFtIHtTdHJpbmd9IGVuY2Fwc3VsYXRpb24gV2hldGhlciB0byBlbWl0IHN0eWxlcyBmb3IgdmlldyBlbmNhcHN1bGF0aW9uLiBWYWx1ZXMgYXJlOlxuLy8vICAgICAqIGBvbmAgLSB3b3JrcyBmb3IgYEVtdWxhdGVkYCwgYE5hdGl2ZWAsIGFuZCBgU2hhZG93RG9tYFxuLy8vICAgICAqIGBvZmZgIC0gd29ya3MgZm9yIGBOb25lYFxuLy8vICAgICAqIGBhbnlgIC0gd29ya3MgZm9yIGFsbCBlbmNhcHN1bGF0aW9uIG1vZGVzIGJ5IGVtaXR0aW5nIHRoZSBDU1MgdHdpY2UgKGRlZmF1bHQpLlxuQG1peGluIGhpZ2gtY29udHJhc3QoJHRhcmdldDogYWN0aXZlLCAkZW5jYXBzdWxhdGlvbjogJ2FueScpIHtcbiAgQGlmICgkdGFyZ2V0ICE9ICdhY3RpdmUnIGFuZCAkdGFyZ2V0ICE9ICdibGFjay1vbi13aGl0ZScgYW5kICR0YXJnZXQgIT0gJ3doaXRlLW9uLWJsYWNrJykge1xuICAgIEBlcnJvciAnVW5rbm93biBjZGstaGlnaC1jb250cmFzdCB2YWx1ZSBcIiN7JHRhcmdldH1cIiBwcm92aWRlZC4gJyArXG4gICAgICAgICAgICdBbGxvd2VkIHZhbHVlcyBhcmUgXCJhY3RpdmVcIiwgXCJibGFjay1vbi13aGl0ZVwiLCBhbmQgXCJ3aGl0ZS1vbi1ibGFja1wiJztcbiAgfVxuXG4gIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29uJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ29mZicgYW5kICRlbmNhcHN1bGF0aW9uICE9ICdhbnknKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IGVuY2Fwc3VsYXRpb24gXCIjeyRlbmNhcHN1bGF0aW9ufVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcIm9uXCIsIFwib2ZmXCIsIGFuZCBcImFueVwiJztcbiAgfVxuXG4gIC8vIElmIHRoZSBzZWxlY3RvciBjb250ZXh0IGhhcyBtdWx0aXBsZSBwYXJ0cywgc3VjaCBhcyBgLnNlY3Rpb24sIC5yZWdpb25gLCBqdXN0IGRvaW5nXG4gIC8vIGAuY2RrLWhpZ2gtY29udHJhc3QteHh4ICN7Jn1gIHdpbGwgb25seSBhcHBseSB0aGUgcGFyZW50IHNlbGVjdG9yIHRvIHRoZSBmaXJzdCBwYXJ0IG9mIHRoZVxuICAvLyBjb250ZXh0LiBXZSBhZGRyZXNzIHRoaXMgYnkgbmVzdGluZyB0aGUgc2VsZWN0b3IgY29udGV4dCB1bmRlciAuY2RrLWhpZ2gtY29udHJhc3QuXG4gIEBhdC1yb290IHtcbiAgICAkc2VsZWN0b3ItY29udGV4dDogI3smfTtcblxuICAgIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29uJykge1xuICAgICAgLy8gTm90ZSB0aGF0IGlmIHRoaXMgc2VsZWN0b3IgaXMgdXBkYXRlZCwgdGhlIHNhbWUgY2hhbmdlIGhhcyB0byBiZSBtYWRlIGluc2lkZVxuICAgICAgLy8gYF9vdmVybGF5LnNjc3NgIHdoaWNoIGNhbid0IGRlcGVuZCBvbiB0aGlzIG1peGluIGR1ZSB0byBzb21lIGluZnJhc3RydWN0dXJlIGxpbWl0YXRpb25zLlxuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0ge1xuICAgICAgICBAaW5jbHVkZSBfb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29mZicpIHtcbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC0jeyR0YXJnZXR9IDpob3N0IHtcbiAgICAgICAgQGluY2x1ZGUgX29wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIFdlIHdhbnQgb3ZlcmxheXMgdG8gYWx3YXlzIGFwcGVhciBvdmVyIHVzZXIgY29udGVudCwgc28gc2V0IGEgYmFzZWxpbmVcbi8vIHZlcnkgaGlnaCB6LWluZGV4IGZvciB0aGUgb3ZlcmxheSBjb250YWluZXIsIHdoaWNoIGlzIHdoZXJlIHdlIGNyZWF0ZSB0aGUgbmV3XG4vLyBzdGFja2luZyBjb250ZXh0IGZvciBhbGwgb3ZlcmxheXMuXG4kb3ZlcmxheS1jb250YWluZXItei1pbmRleDogMTAwMCAhZGVmYXVsdDtcbiRvdmVybGF5LXotaW5kZXg6IDEwMDAgIWRlZmF1bHQ7XG4kb3ZlcmxheS1iYWNrZHJvcC16LWluZGV4OiAxMDAwICFkZWZhdWx0O1xuXG4vLyBCYWNrZ3JvdW5kIGNvbG9yIGZvciBhbGwgb2YgdGhlIGJhY2tkcm9wc1xuJG92ZXJsYXktYmFja2Ryb3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMikgIWRlZmF1bHQ7XG5cbi8vIERlZmF1bHQgYmFja2Ryb3AgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3dpZnQtZWFzZS1vdXQuXG4kYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuLy8vIEVtaXRzIHN0cnVjdHVyYWwgc3R5bGVzIHJlcXVpcmVkIGZvciBjZGsvb3ZlcmxheSB0byBmdW5jdGlvbi5cbkBtaXhpbiBvdmVybGF5KCkge1xuICAuY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIC8vIERpc2FibGUgZXZlbnRzIGZyb20gYmVpbmcgY2FwdHVyZWQgb24gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgLy8gVGhlIGNvbnRhaW5lciBzaG91bGQgYmUgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0LlxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8vIFRoZSBvdmVybGF5LWNvbnRhaW5lciBpcyBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCBjb250YWlucyBhbGwgaW5kaXZpZHVhbCBvdmVybGF5cy5cbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6ICRvdmVybGF5LWNvbnRhaW5lci16LWluZGV4O1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IHdoZW4gaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZCBub2Rlcy4gVGhpcyBkb2Vzbid0XG4gICAgICAvLyBpbmNsdWRlIG92ZXJsYXlzIHRoYXQgaGF2ZSBiZWVuIGRldGFjaGVkLCByYXRoZXIgdGhhbiBkaXNwb3NlZC5cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgdXNlIGFuIGV4dHJhIHdyYXBwZXIgZWxlbWVudCBpbiBvcmRlciB0byB1c2UgbWFrZSB0aGUgb3ZlcmxheSBpdHNlbGYgYSBmbGV4IGl0ZW0uXG4gIC8vIFRoaXMgbWFrZXMgY2VudGVyaW5nIHRoZSBvdmVybGF5IGVhc3kgd2l0aG91dCBydW5uaW5nIGludG8gdGhlIHN1YnBpeGVsIHJlbmRlcmluZ1xuICAvLyBwcm9ibGVtcyB0aWVkIHRvIHVzaW5nIGB0cmFuc2Zvcm1gIGFuZCB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIG90aGVyIHBvc2l0aW9uXG4gIC8vIHN0cmF0ZWdpZXMuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJG92ZXJsYXktei1pbmRleDtcbiAgfVxuXG4gIC8vIEEgc2luZ2xlIG92ZXJsYXkgcGFuZS5cbiAgLmNkay1vdmVybGF5LXBhbmUge1xuICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IGZvciB0aGlzIG9uZSB0byBzdGFydCBvZmYgYGFic29sdXRlYCxcbiAgICAvLyBpbiBvcmRlciBmb3IgdXMgdG8gYmUgYWJsZSB0byBtZWFzdXJlIGl0IGNvcnJlY3RseS5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB6LWluZGV4OiAkb3ZlcmxheS16LWluZGV4O1xuXG4gICAgLy8gRm9yIGNvbm5lY3RlZC1wb3NpdGlvbiBvdmVybGF5cywgd2Ugc2V0IGBkaXNwbGF5OiBmbGV4YCBpblxuICAgIC8vIG9yZGVyIHRvIGZvcmNlIGBtYXgtd2lkdGhgIGFuZCBgbWF4LWhlaWdodGAgdG8gdGFrZSBlZmZlY3QuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gICAgLy8gVE9ETyhqZWxib3Vybik6IHJldXNlIHNpZGVuYXYgZnVsbHNjcmVlbiBtaXhpbi5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgei1pbmRleDogJG92ZXJsYXktYmFja2Ryb3Atei1pbmRleDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbiAkYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC8vIE5vdGUgdGhhdCB3ZSBjYW4ndCBpbXBvcnQgYW5kIHVzZSB0aGUgYGhpZ2gtY29udHJhc3RgIG1peGluIGZyb20gYF9hMTF5LnNjc3NgLCBiZWNhdXNlXG4gICAgICAvLyB0aGlzIGZpbGUgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIHRvcC1sZXZlbCBgY2RrYCBwYWNrYWdlIHdoZW4gcHV0dGluZyB0b2dldGhlciB0aGUgZmlsZXNcbiAgICAgIC8vIGZvciBucG0uIEFueSByZWxhdGl2ZSBpbXBvcnQgcGF0aHMgd2UgdXNlIGhlcmUgd2lsbCBiZWNvbWUgaW52YWxpZCBvbmNlIHRoZSBmaWxlIGlzIGNvcGllZC5cbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgJiB7XG4gICAgICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmdiYSBiYWNrZ3JvdW5kIHdpbGwgYmVjb21lIHNvbGlkXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrIHRvIG1ha2luZyBpdCBvcGFxdWUgdXNpbmcgYG9wYWNpdHlgLlxuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICRvdmVybGF5LWJhY2tkcm9wLWNvbG9yO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wIHtcbiAgICAvLyBEZWZpbmUgYSB0cmFuc2l0aW9uIG9uIHRoZSB2aXNpYmlsaXR5IHNvIHRoYXQgdGhlIGB0cmFuc2l0aW9uZW5kYCBldmVudCBjYW4gZmlyZSBpbW1lZGlhdGVseS5cbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDFtcyBsaW5lYXIsIG9wYWNpdHkgMW1zIGxpbmVhcjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMTtcblxuICAgIC8vIE5vdGU6IGFzIG9mIEZpcmVmb3ggNTcsIGhhdmluZyB0aGUgYmFja2Ryb3AgYmUgYGJhY2tncm91bmQ6IG5vbmVgIHdpbGwgcHJldmVudCBpdCBmcm9tXG4gICAgLy8gY2FwdHVyaW5nIHRoZSB1c2VyJ3MgbW91c2Ugc2Nyb2xsIGV2ZW50cy4gU2luY2Ugd2UgYWxzbyBjYW4ndCB1c2Ugc29tZXRoaW5nIGxpa2VcbiAgICAvLyBgcmdiYSgwLCAwLCAwLCAwKWAsIHdlIHdvcmsgYXJvdW5kIHRoZSBpbmNvbnNpc3RlbmN5IGJ5IG5vdCBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGF0XG4gICAgLy8gYWxsIGFuZCB1c2luZyBgb3BhY2l0eWAgdG8gbWFrZSB0aGUgZWxlbWVudCB0cmFuc3BhcmVudC5cbiAgICAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wLW5vb3AtYW5pbWF0aW9uIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgLy8gT3ZlcmxheSBwYXJlbnQgZWxlbWVudCB1c2VkIHdpdGggdGhlIGNvbm5lY3RlZCBwb3NpdGlvbiBzdHJhdGVneS4gVXNlZCB0byBjb25zdHJhaW4gdGhlXG4gIC8vIG92ZXJsYXkgZWxlbWVudCdzIHNpemUgdG8gZml0IHdpdGhpbiB0aGUgdmlld3BvcnQuXG4gIC5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJG92ZXJsYXktei1pbmRleDtcblxuICAgIC8vIFdlIHVzZSBgZGlzcGxheTogZmxleGAgb24gdGhpcyBlbGVtZW50IGV4Y2x1c2l2ZWx5IGZvciBjZW50ZXJpbmcgY29ubmVjdGVkIG92ZXJsYXlzLlxuICAgIC8vIFdoZW4gKm5vdCogY2VudGVyaW5nLCBhIHRvcC9sZWZ0L2JvdHRvbS9yaWdodCB3aWxsIGJlIHNldCB3aGljaCBvdmVycmlkZXMgdGhlIG5vcm1hbFxuICAgIC8vIGZsZXggbGF5b3V0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBXZSB1c2UgdGhlIGBjb2x1bW5gIGRpcmVjdGlvbiBoZXJlIHRvIGF2b2lkIHNvbWUgZmxleGJveCBpc3N1ZXMgaW4gRWRnZVxuICAgIC8vIHdoZW4gdXNpbmcgdGhlIFwiZ3JvdyBhZnRlciBvcGVuXCIgb3B0aW9ucy5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLy8gQWRkIHNvbWUgZGltZW5zaW9ucyBzbyB0aGUgZWxlbWVudCBoYXMgYW4gYGlubmVyVGV4dGAgd2hpY2ggc29tZSBwZW9wbGUgZGVwZW5kIG9uIGluIHRlc3RzLlxuICAgIG1pbi13aWR0aDogMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiBkaXNhYmxpbmcgZ2xvYmFsIHNjcm9sbGluZy5cbiAgLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgdGhlIGNvbnRlbnQgbm90IHRvIGxvc2UgaXRzIHdpZHRoLiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgMTAwJSwgaW5zdGVhZCBvZlxuICAgIC8vIDEwMHZ3LCBiZWNhdXNlIDEwMHZ3IGluY2x1ZGVzIHRoZSB3aWR0aCBwbHVzIHRoZSBzY3JvbGxiYXIsIHdoZXJlYXMgMTAwJSBpcyB0aGUgd2lkdGhcbiAgICAvLyB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgd2UgbWFkZSBpdCBgZml4ZWRgLlxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gTm90ZTogdGhpcyB3aWxsIGFsd2F5cyBhZGQgYSBzY3JvbGxiYXIgdG8gd2hhdGV2ZXIgZWxlbWVudCBpdCBpcyBvbiwgd2hpY2ggY2FuXG4gICAgLy8gcG90ZW50aWFsbHkgcmVzdWx0IGluIGRvdWJsZSBzY3JvbGxiYXJzLiBJdCBzaG91bGRuJ3QgYmUgYW4gaXNzdWUsIGJlY2F1c2Ugd2Ugd29uJ3RcbiAgICAvLyBibG9jayBzY3JvbGxpbmcgb24gYSBwYWdlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2Nyb2xsYmFyIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cbiIsIi8vIFN0cnVjdHVyYWwgc3R5bGVzIGZvciB0aGUgYXV0b3NpemUgdGV4dCBmaWVsZHMuXG5AbWl4aW4gdGV4dC1maWVsZC1hdXRvc2l6ZSgpIHtcbiAgLy8gUmVtb3ZlIHRoZSByZXNpemUgaGFuZGxlIG9uIGF1dG9zaXppbmcgdGV4dGFyZWFzLCBiZWNhdXNlIHdoYXRldmVyIGhlaWdodFxuICAvLyB0aGUgdXNlciByZXNpemVkIHRvIHdpbGwgYmUgb3ZlcndyaXR0ZW4gb25jZSB0aGV5IHN0YXJ0IHR5cGluZyBhZ2Fpbi5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cblxuICAvLyBUaGlzIGNsYXNzIGlzIHRlbXBvcmFyaWx5IGFwcGxpZWQgdG8gdGhlIHRleHRhcmVhIHdoZW4gaXQgaXMgYmVpbmcgbWVhc3VyZWQuIEl0IGlzIGltbWVkaWF0ZWx5XG4gIC8vIHJlbW92ZWQgd2hlbiBtZWFzdXJpbmcgaXMgY29tcGxldGUuIFdlIHVzZSBgIWltcG9ydGFudGAgcnVsZXMgaGVyZSB0byBtYWtlIHN1cmUgdXNlci1zcGVjaWZpZWRcbiAgLy8gcnVsZXMgZG8gbm90IGludGVyZmVyZSB3aXRoIHRoZSBtZWFzdXJlbWVudC5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZyB7XG4gICAgQGluY2x1ZGUgX2F1dG9zaXplLW1lYXN1cmluZy1iYXNlO1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIC8vIFNpbWlsYXIgdG8gdGhlIGBjZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nYCBjbGFzcywgYnV0IG9ubHkgYXBwbGllZCBvbiBGaXJlZm94LiBXZSBuZWVkXG4gIC8vIHRvIHVzZSB0aGlzIGNsYXNzLCBiZWNhdXNlIEZpcmVmb3ggaGFzIGEgYnVnIHdoZXJlIGNoYW5naW5nIHRoZSBgb3ZlcmZsb3dgIGJyZWFrcyB0aGUgdXNlcidzXG4gIC8vIGFiaWxpdHkgdG8gdW5kby9yZWRvIHdoYXQgdGhleSB3ZXJlIHR5cGluZyAoc2VlICMxNjYyOSkuIFRoaXMgY2xhc3MgaXMgb25seSBzY29wZWQgdG8gRmlyZWZveCxcbiAgLy8gYmVjYXVzZSB0aGUgbWVhc3VyZW1lbnRzIHRoZXJlIGRvbid0IHNlZW0gdG8gYmUgYWZmZWN0ZWQgYnkgdGhlIGBoZWlnaHQ6IDBgLCB3aGVyZWFzIG9uIG90aGVyXG4gIC8vIGJyb3dzZXJzIHRoZXkgYXJlLCBlLmcuIENocm9tZSBkZXRlY3RzIGxvbmdlciB0ZXh0IGFuZCBJRSBkb2VzJ3QgcmVzaXplIGJhY2sgdG8gbm9ybWFsLlxuICAvLyBJZGVudGljYWwgaXNzdWUgcmVwb3J0OiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00NDg3ODRcbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1maXJlZm94IHtcbiAgICBAaW5jbHVkZSBfYXV0b3NpemUtbWVhc3VyaW5nLWJhc2U7XG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBlbmFibGUgbW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSBvZiB0ZXh0IGZpZWxkcy5cbkBtaXhpbiB0ZXh0LWZpZWxkLWF1dG9maWxsKCkge1xuICAvLyBLZXlmcmFtZXMgdGhhdCBhcHBseSBubyBzdHlsZXMsIGJ1dCBhbGxvdyB1cyB0byBtb25pdG9yIHdoZW4gYW4gdGV4dCBmaWVsZCBiZWNvbWVzIGF1dG9maWxsZWRcbiAgLy8gYnkgd2F0Y2hpbmcgZm9yIHRoZSBhbmltYXRpb24gZXZlbnRzIHRoYXQgYXJlIGZpcmVkIHdoZW4gdGhleSBzdGFydC4gTm90ZTogdGhlIC8qISovIGNvbW1lbnQgaXNcbiAgLy8gbmVlZGVkIHRvIHByZXZlbnQgTGliU2FzcyBmcm9tIHN0cmlwcGluZyB0aGUga2V5ZnJhbWVzIG91dC5cbiAgLy8gQmFzZWQgb246IGh0dHBzOi8vbWVkaXVtLmNvbS9AYnJ1bm4vZGV0ZWN0aW5nLWF1dG9maWxsZWQtZmllbGRzLWluLWphdmFzY3JpcHQtYWVkNTk4ZDI1ZGE3XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgey8qISovfVxuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7LyohKi99XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSwgb3IgdGhlIGFuaW1hdGlvbnN0YXJ0IGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXM7XG4gIH1cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICAgIC8vIFNpbmNlIENocm9tZSA4MCB3ZSBuZWVkIGEgMW1zIGRlbGF5LCBvciB0aGUgYW5pbWF0aW9uc3RhcnQgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCAwcyAxbXM7XG4gIH1cbn1cblxuQG1peGluIF9hdXRvc2l6ZS1tZWFzdXJpbmctYmFzZSB7XG4gIC8vIEhhdmluZyAycHggdG9wIGFuZCBib3R0b20gcGFkZGluZyBzZWVtcyB0byBmaXggYSBidWcgd2hlcmUgQ2hyb21lIGdldHMgYW4gaW5jb3JyZWN0XG4gIC8vIG1lYXN1cmVtZW50LiBXZSBqdXN0IGhhdmUgdG8gYWNjb3VudCBmb3IgaXQgbGF0ZXIgYW5kIHN1YnRyYWN0IGl0IG9mZiB0aGUgZmluYWwgcmVzdWx0LlxuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xufVxuXG4vLyBVc2VkIHRvIGdlbmVyYXRlIFVJRHMgZm9yIGtleWZyYW1lcyB1c2VkIHRvIGNoYW5nZSB0aGUgdGV4dCBmaWVsZCBhdXRvZmlsbCBzdHlsZXMuXG4kYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6IDA7XG5cbi8vIE1peGluIHVzZWQgdG8gYXBwbHkgY3VzdG9tIGJhY2tncm91bmQgYW5kIGZvcmVncm91bmQgY29sb3JzIHRvIGFuIGF1dG9maWxsZWQgdGV4dCBmaWVsZC5cbi8vIEJhc2VkIG9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzgxNTQ5L1xuLy8gcmVtb3ZpbmctaW5wdXQtYmFja2dyb3VuZC1jb2xvdXItZm9yLWNocm9tZS1hdXRvY29tcGxldGUjYW5zd2VyLTM3NDMyMjYwXG5AbWl4aW4gdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvcigkYmFja2dyb3VuZCwgJGZvcmVncm91bmQ6JycpIHtcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0ge1xuICAgIHRvIHtcbiAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgICAgQGlmICRmb3JlZ3JvdW5kICE9ICcnIHsgY29sb3I6ICRmb3JlZ3JvdW5kOyB9XG4gICAgfVxuICB9XG5cbiAgJjotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSBib3RoO1xuICB9XG5cbiAgJi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXkgZm9yIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0LCBvciB0aGUgYW5pbWF0aW9uc3RhcnRcbiAgICAvLyBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zLFxuICAgICAgICAgICAgICAgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IGJvdGg7XG4gIH1cblxuICAkYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6ICRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudCArIDEgIWdsb2JhbDtcbn1cblxuLy8gQGRlcHJlY2F0ZWQgVXNlIGBhdXRvc2l6ZWAgYW5kIGBhdXRvZmlsbGAgaW5zdGVhZC5cbkBtaXhpbiB0ZXh0LWZpZWxkIHtcbiAgQGluY2x1ZGUgdGV4dC1maWVsZC1hdXRvc2l6ZSgpO1xuICBAaW5jbHVkZSB0ZXh0LWZpZWxkLWF1dG9maWxsKCk7XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnQGFuZ3VsYXIvY2RrJztcbkB1c2UgJy4uL3N0eWxlL2xheW91dC1jb21tb24nO1xuQHVzZSAnLi4vdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL3RoZW1pbmcvaW5zcGVjdGlvbic7XG5cbi8vIFByaXZhdGUgc2FzcyB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIHVzZWQgYXMgcmVmZXJlbmNlIHRocm91Z2hvdXQgY29tcG9uZW50IHN0eWxlc2hlZXRzLlxuJGRlZmF1bHQtYm9yZGVyLXdpZHRoOiAzcHg7XG4kZGVmYXVsdC1ib3JkZXItc3R5bGU6IHNvbGlkO1xuJGRlZmF1bHQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiRkZWZhdWx0LWJvcmRlci1yYWRpdXM6IDRweDtcblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIHRoZSBmb2N1cyBpbmRpY2F0b3Igc3RydWN0dXJhbCBzdHlsZXMuXG5AbWl4aW4gc3RydWN0dXJhbC1zdHlsaW5nKCRwcmVmaXgpIHtcbiAgLiN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgQGluY2x1ZGUgbGF5b3V0LWNvbW1vbi5maWxsKCk7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBkaXNwbGF5OiB2YXIoLS0jeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1kaXNwbGF5LCBub25lKTsgLy8gSGlkZSB0aGUgaW5kaWNhdG9yIGJ5IGRlZmF1bHQuXG4gICAgICBib3JkZXI6IHZhcihcbiAgICAgICAgICAtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci13aWR0aCxcbiAgICAgICAgICAjeyRkZWZhdWx0LWJvcmRlci13aWR0aH1cbiAgICAgICAgKVxuICAgICAgICB2YXIoXG4gICAgICAgICAgLS0jeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItc3R5bGUsXG4gICAgICAgICAgI3skZGVmYXVsdC1ib3JkZXItc3R5bGV9XG4gICAgICAgIClcbiAgICAgICAgdmFyKFxuICAgICAgICAgIC0tI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yLFxuICAgICAgICAgICN7JGRlZmF1bHQtYm9yZGVyLWNvbG9yfVxuICAgICAgICApO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKFxuICAgICAgICAtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXMsXG4gICAgICAgICN7JGRlZmF1bHQtYm9yZGVyLXJhZGl1c31cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQnkgZGVmYXVsdCwgcmVuZGVyIHRoZSBmb2N1cyBpbmRpY2F0b3Igd2hlbiB0aGUgZm9jdXMgaW5kaWNhdG9yIGhvc3QgZWxlbWVudCB0YWtlcyBmb2N1cy5cbiAgICAvLyBEZWZpbmluZyBhIHBzZXVkbyBlbGVtZW50J3MgY29udGVudCB3aWxsIGNhdXNlIGl0IHRvIHJlbmRlci5cbiAgICAmOmZvY3VzOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgfVxuICB9XG5cbiAgLy8gRW5hYmxlIHRoZSBpbmRpY2F0b3IgaW4gaGlnaCBjb250cmFzdCBtb2RlLlxuICBAaW5jbHVkZSBjZGsuaGlnaC1jb250cmFzdChhY3RpdmUsIG9mZikge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChkaXNwbGF5OiBibG9jayksICRwcmVmaXgpO1xuICB9XG59XG5cbi8vIEdlbmVyYXRlcyBDU1MgdmFyaWFibGUgZGVjbGFyYXRpb25zIGZyb20gYSBtYXAuXG5AbWl4aW4gX291dHB1dC12YXJpYWJsZXMoJG1hcCkge1xuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJG1hcCB7XG4gICAgQGlmICgkdmFsdWUpIHtcbiAgICAgIC0tI3ska2V5fTogI3skdmFsdWV9O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNaXhpbiB0aGF0IGRlZHVwcyBDU1MgdmFyaWFibGVzIGZvciB0aGUgc3Ryb25nLWZvY3VzLWluZGljYXRvcnMgbWl4aW4uXG5AbWl4aW4gY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZywgJHByZWZpeCkge1xuICAkYm9yZGVyLXN0eWxlOiBtYXAuZ2V0KCRjb25maWcsIGJvcmRlci1zdHlsZSk7XG4gICRib3JkZXItd2lkdGg6IG1hcC5nZXQoJGNvbmZpZywgYm9yZGVyLXdpZHRoKTtcbiAgJGJvcmRlci1yYWRpdXM6IG1hcC5nZXQoJGNvbmZpZywgYm9yZGVyLXJhZGl1cyk7XG4gICRib3JkZXItY29sb3I6IG1hcC5nZXQoJGNvbmZpZywgYm9yZGVyLWNvbG9yKTtcbiAgJGRpc3BsYXk6IG1hcC5nZXQoJGNvbmZpZywgZGlzcGxheSk7XG4gICRtYXA6IChcbiAgICAnI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXN0eWxlJzogJGJvcmRlci1zdHlsZSxcbiAgICAnI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoJzogJGJvcmRlci13aWR0aCxcbiAgICAnI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1cyc6ICRib3JkZXItcmFkaXVzLFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItY29sb3InOiAkYm9yZGVyLWNvbG9yLFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1kaXNwbGF5JzogJGRpc3BsYXksXG4gICk7XG5cbiAgQGlmICgmKSB7XG4gICAgQGluY2x1ZGUgX291dHB1dC12YXJpYWJsZXMoJG1hcCk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC8vIFdlIHVzZSBgaHRtbGAgaGVyZSBpbnN0ZWFkIG9mIGA6cm9vdGAsIGJlY2F1c2UgdGhlXG4gICAgLy8gbGF0dGVyIGNhdXNlcyBzb21lIGlzc3VlcyB3aXRoIGludGVybmFsIHRvb2xpbmcuXG4gICAgaHRtbCB7XG4gICAgICBAaW5jbHVkZSBfb3V0cHV0LXZhcmlhYmxlcygkbWFwKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzKCRjb25maWc6ICgpKSB7XG4gIC8vIERlZmF1bHQgZm9jdXMgaW5kaWNhdG9yIGNvbmZpZy5cbiAgJGRlZmF1bHQtY29uZmlnOiAoXG4gICAgICBib3JkZXItY29sb3I6IGJsYWNrLFxuICAgICAgZGlzcGxheTogYmxvY2ssXG4gICk7XG5cbiAgLy8gTWVyZ2UgZGVmYXVsdCBjb25maWcgd2l0aCB1c2VyIGNvbmZpZy5cbiAgJGNvbmZpZzogbWFwLm1lcmdlKCRkZWZhdWx0LWNvbmZpZywgJGNvbmZpZyk7XG5cbiAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZywgJ21hdCcpO1xufVxuXG5AbWl4aW4gbWRjLXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzKCRjb25maWc6ICgpKSB7XG4gIC8vIERlZmF1bHQgZm9jdXMgaW5kaWNhdG9yIGNvbmZpZy5cbiAgJGRlZmF1bHQtY29uZmlnOiAoXG4gICAgICBib3JkZXItY29sb3I6IGJsYWNrLFxuICAgICAgZGlzcGxheTogYmxvY2ssXG4gICk7XG5cbiAgLy8gTWVyZ2UgZGVmYXVsdCBjb25maWcgd2l0aCB1c2VyIGNvbmZpZy5cbiAgJGNvbmZpZzogbWFwLm1lcmdlKCRkZWZhdWx0LWNvbmZpZywgJGNvbmZpZyk7XG5cbiAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZywgJ21hdC1tZGMnKTtcbn1cblxuQG1peGluIHN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLWNvbG9yKCR0aGVtZS1vci1jb2xvcikge1xuICBAaWYgbWV0YS50eXBlLW9mKCR0aGVtZS1vci1jb2xvcikgPT0gJ2NvbG9yJyB7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKFxuICAgICAgICBib3JkZXItY29sb3I6ICR0aGVtZS1vci1jb2xvclxuICAgICksICdtYXQnKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgJGJvcmRlci1jb2xvcjogaW5zcGVjdGlvbi5nZXQtdGhlbWUtY29sb3IoJHRoZW1lLW9yLWNvbG9yLCBwcmltYXJ5KTtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvclxuICAgICksICdtYXQnKTtcbiAgfVxufVxuXG5AbWl4aW4gc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtdGhlbWUoJHRoZW1lLW9yLWNvbG9yKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHRoZW1lLW9yLWNvbG9yKSA9PSAnY29sb3InIHtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLW9yLWNvbG9yXG4gICAgKSwgJ21hdCcpO1xuICB9XG4gIEBlbHNlIHtcbiAgICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUtb3ItY29sb3IsICdtYXQtZm9jdXMtaW5kaWNhdG9ycycpIHtcbiAgICAgIEBpZiBpbnNwZWN0aW9uLnRoZW1lLWhhcygkdGhlbWUtb3ItY29sb3IsIGNvbG9yKSB7XG4gICAgICAgIEBpbmNsdWRlIHN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLWNvbG9yKCR0aGVtZS1vci1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHRoZW1lLW9yLWNvbG9yKSA9PSAnY29sb3InIHtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLW9yLWNvbG9yXG4gICAgKSwgJ21hdC1tZGMnKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgJGJvcmRlci1jb2xvcjogaW5zcGVjdGlvbi5nZXQtdGhlbWUtY29sb3IoJHRoZW1lLW9yLWNvbG9yLCBwcmltYXJ5KTtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvclxuICAgICksICdtYXQtbWRjJyk7XG4gIH1cbn1cblxuQG1peGluIG1kYy1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy10aGVtZSgkdGhlbWUtb3ItY29sb3IpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdGhlbWUtb3ItY29sb3IpID09ICdjb2xvcicge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtb3ItY29sb3JcbiAgICApLCAnbWF0LW1kYycpO1xuICB9XG4gIEBlbHNlIHtcbiAgICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcyhcbiAgICAgICAgJHRoZW1lLW9yLWNvbG9yLCAnbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3JzJykge1xuICAgICAgQGlmIGluc3BlY3Rpb24udGhlbWUtaGFzKCR0aGVtZS1vci1jb2xvciwgY29sb3IpIHtcbiAgICAgICAgQGluY2x1ZGUgbWRjLXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLWNvbG9yKCR0aGVtZS1vci1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGlzIG1peGluIGVuc3VyZXMgYW4gZWxlbWVudCBzcGFucyB0byBmaWxsIHRoZSBuZWFyZXN0IGFuY2VzdG9yIHdpdGggZGVmaW5lZCBwb3NpdGlvbmluZy5cbkBtaXhpbiBmaWxsIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iLCJAdXNlICdAYW5ndWxhci9jZGsnO1xuQHVzZSAnLi90b2tlbnMvbTIvbWF0L2FwcCcgYXMgdG9rZW5zLW1hdC1hcHA7XG5AdXNlICcuL3Rva2Vucy90b2tlbi11dGlscyc7XG5AdXNlICcuL3JpcHBsZS9yaXBwbGUnO1xuQHVzZSAnLi9mb2N1cy1pbmRpY2F0b3JzL3ByaXZhdGUnO1xuQHVzZSAnLi9tZGMtaGVscGVycy9tZGMtaGVscGVycyc7XG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgYXJlIG5vdCB0aGVtZS1kZXBlbmRlbnQuXG5AbWl4aW4gY29yZSgpIHtcbiAgQGluY2x1ZGUgcmlwcGxlLnJpcHBsZSgpO1xuICBAaW5jbHVkZSBjZGsuYTExeS12aXN1YWxseS1oaWRkZW4oKTtcbiAgQGluY2x1ZGUgY2RrLm92ZXJsYXkoKTtcbiAgQGluY2x1ZGUgY2RrLnRleHQtZmllbGQtYXV0b3NpemUoKTtcbiAgQGluY2x1ZGUgY2RrLnRleHQtZmllbGQtYXV0b2ZpbGwoKTtcbiAgQGluY2x1ZGUgcHJpdmF0ZS5zdHJ1Y3R1cmFsLXN0eWxpbmcoJ21hdCcpO1xuICBAaW5jbHVkZSBwcml2YXRlLnN0cnVjdHVyYWwtc3R5bGluZygnbWF0LW1kYycpO1xuXG4gIC8vIFdyYXBwZXIgZWxlbWVudCB0aGF0IHByb3ZpZGVzIHRoZSB0aGVtZSBiYWNrZ3JvdW5kIHdoZW4gdGhlXG4gIC8vIHVzZXIncyBjb250ZW50IGlzbid0IGluc2lkZSBvZiBhIGBtYXQtc2lkZW5hdi1jb250YWluZXJgLlxuICBAYXQtcm9vdCB7XG4gICAgLm1hdC1hcHAtYmFja2dyb3VuZCB7XG4gICAgICBAaW5jbHVkZSBtZGMtaGVscGVycy5kaXNhYmxlLW1kYy1mYWxsYmFjay1kZWNsYXJhdGlvbnMge1xuICAgICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy51c2UtdG9rZW5zKHRva2Vucy1tYXQtYXBwLiRwcmVmaXgsIHRva2Vucy1tYXQtYXBwLmdldC10b2tlbi1zbG90cygpKSB7XG4gICAgICAgICAgLy8gTm90ZTogd2UgbmVlZCB0byBlbWl0IGZhbGxiYWNrIHZhbHVlcyBoZXJlIHRvIGF2b2lkIGVycm9ycyBpbiBpbnRlcm5hbCBidWlsZHMuXG4gICAgICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXNsb3QoYmFja2dyb3VuZC1jb2xvciwgYmFja2dyb3VuZC1jb2xvciwgdHJhbnNwYXJlbnQpO1xuICAgICAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi1zbG90KGNvbG9yLCB0ZXh0LWNvbG9yLCBpbmhlcml0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIENvcHlyaWdodCAyMDIwIEdvb2dsZSBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cbi8vXG5cbkB1c2UgJ3Nhc3M6bGlzdCc7XG5AdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnLi9nc3MnO1xuXG4vLy8gV2hlbiB0cnVlLCBhZGQgYW4gYWRkaXRpb25hbCBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbiBiZWZvcmUgZGVjbGFyYXRpb25zXG4vLy8gdGhhdCB1c2UgYWR2YW5jZWQgZmVhdHVyZXMgc3VjaCBhcyBjdXN0b20gcHJvcGVydGllcyBvciBDU1MgZnVuY3Rpb25zLiBUaGlzXG4vLy8gYWRkcyBmYWxsYmFjayBzdXBwb3J0IGZvciBvbGRlciBicm93c2VycyBzdWNoIGFzIElFMTEgdGhhdCBkbyBub3Qgc3VwcG9ydFxuLy8vIHRoZXNlIGZlYXR1cmVzIGF0IHRoZSBjb3N0IG9mIGFkZGl0aW9uYWwgQ1NTLiBTZXQgdGhpcyB2YXJpYWJsZSB0byBmYWxzZSB0b1xuLy8vIGRpc2FibGUgZ2VuZXJhdGluZyBmYWxsYmFjayBkZWNsYXJhdGlvbnMuXG4kZW5hYmxlLWZhbGxiYWNrLWRlY2xhcmF0aW9uczogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vIFdyaXRlcyBhIENTUyBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbi4gVGhpcyBtaXhpbiBpcyB1c2VkIHRocm91Z2hvdXQgdGhlXG4vLy8gdGhlbWUgcGFja2FnZSBmb3IgY29uc2lzdGVuY3kgZm9yIGR5bmFtaWNhbGx5IHNldHRpbmcgQ1NTIHByb3BlcnR5IHZhbHVlcy5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gbWF5IG9wdGlvbmFsbHkgdGFrZSBhIGZhbGxiYWNrIHZhbHVlLiBGb3IgYWR2YW5jZWQgZmVhdHVyZXMgc3VjaFxuLy8vIGFzIGN1c3RvbSBwcm9wZXJ0aWVzIG9yIENTUyBmdW5jdGlvbnMgbGlrZSBtaW4gYW5kIG1heCwgYSBmYWxsYmFjayB2YWx1ZSBpc1xuLy8vIHJlY29tbWVuZGVkIHRvIHN1cHBvcnQgb2xkZXIgYnJvd3NlcnMuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHByb3BlcnR5IC0gVGhlIENTUyBwcm9wZXJ0eSBvZiB0aGUgZGVjbGFyYXRpb24uXG4vLy8gQHBhcmFtIHsqfSAkdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIENTUyBkZWNsYXJhdGlvbi4gVGhlIHZhbHVlIHNob3VsZCBiZVxuLy8vICAgICByZXNvbHZlZCBieSBvdGhlciB0aGVtZSBmdW5jdGlvbnMgZmlyc3QgKGkuZS4gY3VzdG9tIHByb3BlcnR5IE1hcHMgYW5kXG4vLy8gICAgIE1hdGVyaWFsIHRoZW1lIGtleXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBtaXhpbikuIElmIHRoZSB2YWx1ZSBpc1xuLy8vICAgICBudWxsLCBubyBkZWNsYXJhdGlvbnMgd2lsbCBiZSBlbWl0dGVkLlxuLy8vIEBwYXJhbSB7Kn0gJGZhbGxiYWNrIC0gQW4gb3B0aW9uYWwgZmFsbGJhY2sgdmFsdWUgZm9yIG9sZGVyIGJyb3dzZXJzLiBJZlxuLy8vICAgICBwcm92aWRlZCwgYSBzZWNvbmQgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24gd2lsbCBiZSBhZGRlZCBiZWZvcmUgdGhlXG4vLy8gICAgIG1haW4gcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24uXG4vLy8gQHBhcmFtIHtNYXB9ICRnc3MgLSBBbiBvcHRpb25hbCBNYXAgb2YgR1NTIGFubm90YXRpb25zIHRvIGFkZC5cbi8vLyBAcGFyYW0ge0Jvb2x9ICRpbXBvcnRhbnQgLSBJZiB0cnVlLCBhZGQgYCFpbXBvcnRhbnRgIHRvIHRoZSBkZWNsYXJhdGlvbi5cbkBtaXhpbiBkZWNsYXJhdGlvbihcbiAgJHByb3BlcnR5LFxuICAkdmFsdWUsXG4gICRmYWxsYmFjay12YWx1ZTogbnVsbCxcbiAgJGdzczogKCksXG4gICRpbXBvcnRhbnQ6IGZhbHNlXG4pIHtcbiAgLy8gTm9ybWFsbHkgc2V0dGluZyBhIG51bGwgdmFsdWUgdG8gYSBwcm9wZXJ0eSB3aWxsIG5vdCBlbWl0IENTUywgc28gbWl4aW5zXG4gIC8vIHdvdWxkbid0IG5lZWQgdG8gY2hlY2sgdGhpcy4gSG93ZXZlciwgU2FzcyB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoZVxuICAvLyBpbnRlcnBvbGF0ZWQgcHJvcGVydHkgaXMgYSBjdXN0b20gcHJvcGVydHkuXG4gIEBpZiAkdmFsdWUgIT0gbnVsbCB7XG4gICAgJGltcG9ydGFudC1ydWxlOiBpZigkaW1wb3J0YW50LCAnICFpbXBvcnRhbnQnLCAnJyk7XG5cbiAgICBAaWYgJGZhbGxiYWNrLXZhbHVlIGFuZCAkZW5hYmxlLWZhbGxiYWNrLWRlY2xhcmF0aW9ucyB7XG4gICAgICBAaW5jbHVkZSBnc3MuYW5ub3RhdGUoJGdzcyk7XG4gICAgICAjeyRwcm9wZXJ0eX06ICN7JGZhbGxiYWNrLXZhbHVlfSAjeyRpbXBvcnRhbnQtcnVsZX07XG5cbiAgICAgIC8vIEFkZCBAYWx0ZXJuYXRlIHRvIGFubm90YXRpb25zLlxuICAgICAgJGdzczogbWFwLm1lcmdlKFxuICAgICAgICAkZ3NzLFxuICAgICAgICAoXG4gICAgICAgICAgYWx0ZXJuYXRlOiB0cnVlLFxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGdzcy5hbm5vdGF0ZSgkZ3NzKTtcbiAgICAjeyRwcm9wZXJ0eX06ICN7JHZhbHVlfSN7JGltcG9ydGFudC1ydWxlfTtcbiAgfVxufVxuXG4vLy8gVW5wYWNrcyBzaG9ydGhhbmQgdmFsdWVzIGZvciBDU1MgcHJvcGVydGllcyAoaS5lLiBsaXN0cyBvZiAxLTMgdmFsdWVzKS5cbi8vLyBJZiBhIGxpc3Qgb2YgNCB2YWx1ZXMgaXMgZ2l2ZW4sIGl0IGlzIHJldHVybmVkIGFzLWlzLlxuLy8vXG4vLy8gRXhhbXBsZXM6XG4vLy9cbi8vLyB1bnBhY2stdmFsdWUoNHB4KSA9PiA0cHggNHB4IDRweCA0cHhcbi8vLyB1bnBhY2stdmFsdWUoNHB4IDJweCkgPT4gNHB4IDJweCA0cHggMnB4XG4vLy8gdW5wYWNrLXZhbHVlKDRweCAycHggMnB4KSA9PiA0cHggMnB4IDJweCAycHhcbi8vLyB1bnBhY2stdmFsdWUoNHB4IDJweCAwIDJweCkgPT4gNHB4IDJweCAwIDJweFxuLy8vXG4vLy8gQHBhcmFtIHtOdW1iZXIgfCBNYXAgfCBMaXN0fSAkdmFsdWUgLSBMaXN0IG9mIDEgdG8gNCB2YWx1ZSBudW1iZXJzLlxuLy8vIEByZXR1cm4ge0xpc3R9IGEgTGlzdCBvZiA0IHZhbHVlIG51bWJlcnMuXG5AZnVuY3Rpb24gdW5wYWNrLXZhbHVlKCR2YWx1ZSkge1xuICBAaWYgbWV0YS50eXBlLW9mKCR2YWx1ZSkgPT0gJ21hcCcgb3IgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAxIHtcbiAgICBAcmV0dXJuICR2YWx1ZSAkdmFsdWUgJHZhbHVlICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDQge1xuICAgIEByZXR1cm4gJHZhbHVlO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMyB7XG4gICAgQHJldHVybiBsaXN0Lm50aCgkdmFsdWUsIDEpIGxpc3QubnRoKCR2YWx1ZSwgMikgbGlzdC5udGgoJHZhbHVlLCAzKVxuICAgICAgbGlzdC5udGgoJHZhbHVlLCAyKTtcbiAgfSBAZWxzZSBpZiBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDIge1xuICAgIEByZXR1cm4gbGlzdC5udGgoJHZhbHVlLCAxKSBsaXN0Lm50aCgkdmFsdWUsIDIpIGxpc3QubnRoKCR2YWx1ZSwgMSlcbiAgICAgIGxpc3QubnRoKCR2YWx1ZSwgMik7XG4gIH1cblxuICBAZXJyb3IgXCJJbnZhbGlkIENTUyBwcm9wZXJ0eSB2YWx1ZTogJyN7JHZhbHVlfScgaXMgbW9yZSB0aGFuIDQgdmFsdWVzXCI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */";
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
    consts: [[3, "totalCount", "progressCount"], [1, "problems"], ["class", "mathQuestionWrapper", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], [1, "orientation"], ["id", "orientation-radio-group-label"], ["aria-labelledby", "orientation-radio-group-label", 1, "orientation-radio-group", 3, "ngModelChange", "ngModel"], ["class", "orientation-radio-button", 3, "value", 4, "ngFor", "ngForOf"], ["labelPosition", "before", 3, "ngModelChange", "ngModel"], ["appearance", "fill"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [1, "mathQuestionWrapper"], [3, "questionId", "config", "needReset"], ["mat-raised-button", "", "color", "accent", 3, "click"], [1, "orientation-radio-button", 3, "value"], [3, "value"]],
    template: function ProblemPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "app-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ProblemPanelComponent_div_2_Template, 2, 3, "div", 2)(3, ProblemPanelComponent_div_3_Template, 1, 0, "div", 2);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.padding(0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.config.realTimeValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.config.orientation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.equationOrientations);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.config.realTimeValidation);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.config.answerMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.ANSWER_MODES);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.config.nbQuestions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_10__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__.MatCheckbox, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _math_question_math_question_component__WEBPACK_IMPORTED_MODULE_2__.MathQuestionComponent, _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_5__.ProgressBarComponent],
    styles: [_c0]
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
      this.congratulationMsg = "Good";
    } else {
      this.congratulationMsg = "Try again";
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
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_6804990303797863301$$SRC_APP_PROBLEM_PANEL_PROBLEM_PANEL_COMPONENT_TS_0 = goog.getMsg("{VAR_PLURAL, plural, =0 {ZERO good answer} =1 {one good answer} other {{INTERPOLATION} good answers}}");
        i18n_0 = MSG_EXTERNAL_6804990303797863301$$SRC_APP_PROBLEM_PANEL_PROBLEM_PANEL_COMPONENT_TS_0;
      } else {
        i18n_0 = "{VAR_PLURAL, plural, =0 {ZERO good answer} =1 {one good answer} other {{INTERPOLATION} good answers}}";
      }
      i18n_0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nPostprocess"](i18n_0, {
        "INTERPOLATION": "\uFFFD1\uFFFD",
        "VAR_PLURAL": "\uFFFD0\uFFFD"
      });
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_congratulationMsg2$$SRC_APP_PROBLEM_PANEL_PROBLEM_PANEL_COMPONENT_TS_1 = goog.getMsg("You got {$icu} from a total of {$interpolation_1} questions.", {
          "icu": i18n_0,
          "interpolation_1": "\uFFFD2\uFFFD"
        }, {
          original_code: {
            "icu": "{data.right, plural, =0 {ZERO good answer} =1 {one good answer} other {{{data.right}} good answers}}",
            "interpolation_1": "{{data.total}}"
          }
        });
        i18n_1 = MSG_EXTERNAL_congratulationMsg2$$SRC_APP_PROBLEM_PANEL_PROBLEM_PANEL_COMPONENT_TS_1;
      } else {
        i18n_1 = "You got " + i18n_0 + " from a total of " + "\uFFFD2\uFFFD" + " questions.";
      }
      return [i18n_1, ["align", "end"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]];
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
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.congratulationMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nExp"](ctx.data.right)(ctx.data.right)(ctx.data.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵi18nApply"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("mat-dialog-close", true);
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogContent],
    styles: [_c0]
  });
}

/***/ }),

/***/ 7212:
/*!********************************************************!*\
  !*** ./src/app/progress-bar/progress-bar.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressBarComponent: () => (/* binding */ ProgressBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-bar */ 6354);


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
    styles: [".mat-progress-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1wcm9ncmVzcy1iYXIge1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 3696:
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigService: () => (/* binding */ ConfigService),
/* harmony export */   ConfigServiceInfo: () => (/* binding */ ConfigServiceInfo)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 521);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ 1449);
/* harmony import */ var _math_generator_worksheets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math-generator/worksheets */ 980);
/* harmony import */ var _math_generator_worksheets2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../math-generator/worksheets2 */ 2932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);





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

/***/ 1449:
/*!************************************!*\
  !*** ./src/app/services/config.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONFIG: () => (/* binding */ CONFIG),
/* harmony export */   EquationOrientations: () => (/* binding */ EquationOrientations),
/* harmony export */   GENERATORS_KEY: () => (/* binding */ GENERATORS_KEY),
/* harmony export */   MATH_EXERCICISES_STORE: () => (/* binding */ MATH_EXERCICISES_STORE)
/* harmony export */ });
/* harmony import */ var _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../column-answer/column-answer.component */ 3192);

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

/***/ 3263:
/*!***************************************************!*\
  !*** ./src/app/services/math-question.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MathQuestionService: () => (/* binding */ MathQuestionService),
/* harmony export */   QuestionStatus: () => (/* binding */ QuestionStatus)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 3119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


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

/***/ 7883:
/*!**********************************************************************!*\
  !*** ./src/app/test-features/display-test/display-test.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayTestComponent: () => (/* binding */ DisplayTestComponent)
/* harmony export */ });
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/config */ 1449);
/* harmony import */ var src_app_column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/column-answer/column-answer.component */ 3192);
/* harmony import */ var _math_generator_worksheets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../math-generator/worksheets */ 980);
/* harmony import */ var _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../math-generator/mathProblemTypes */ 1503);
/* harmony import */ var _math_generator_mathGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../math-generator/mathGenerator */ 6782);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/config.service */ 3696);
/* harmony import */ var _services_math_question_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/math-question.service */ 3263);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _math_question_math_question_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../math-question/math-question.component */ 332);










function DisplayTestComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "app-math-question", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const config_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("questionId", i_r2)("config", config_r1)("needReset", ctx_r2.needReset);
  }
}
class DisplayTestComponent {
  constructor(configService, mathQuestionService) {
    this.configService = configService;
    this.mathQuestionService = mathQuestionService;
    this.needReset = false;
    this.configs = [{
      ..._services_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG,
      answerMode: src_app_column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_1__.ColumnAnswerMode.COLUMNS,
      generators: [{
        func: DisplayTestComponent.testLongNum
      }]
    }, {
      ..._services_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG,
      answerMode: src_app_column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_1__.ColumnAnswerMode.NORMAL,
      generators: [{
        func: DisplayTestComponent.testLongNum
      }]
    }, {
      ..._services_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG,
      answerMode: src_app_column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_1__.ColumnAnswerMode.COLUMNS,
      generators: [{
        func: _math_generator_worksheets__WEBPACK_IMPORTED_MODULE_2__.Worksheets.addTowDigitNumberWithTowDigitNumberWithCarry
      }]
    }, {
      ..._services_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG,
      orientation: "HORIZONTAL"
    }, {
      ..._services_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG,
      answerMode: src_app_column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_1__.ColumnAnswerMode.COLUMNS
    }, {
      ..._services_config__WEBPACK_IMPORTED_MODULE_0__.CONFIG
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
    return _math_generator_mathGenerator__WEBPACK_IMPORTED_MODULE_4__.MathGenerator.getListofRandomNumber(generateRange, _math_generator_mathProblemTypes__WEBPACK_IMPORTED_MODULE_3__.MathProblemTypes.ADDITION);
  }
  static #_ = this.ɵfac = function DisplayTestComponent_Factory(t) {
    return new (t || DisplayTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_5__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_math_question_service__WEBPACK_IMPORTED_MODULE_6__.MathQuestionService));
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
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.configs);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _math_question_math_question_component__WEBPACK_IMPORTED_MODULE_7__.MathQuestionComponent],
    styles: [".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n  background-color: var(--mat-ripple-color, rgba(0, 0, 0, 0.1));\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start { \n }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end { \n }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: var(--mat-app-background-color, transparent);\n  color: var(--mat-app-text-color, inherit);\n}\n\n.mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #388e3c;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.dark-theme[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #ffd740;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.light-theme[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #bcaaa4;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.deeppurple-amber[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #ffd740;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.indigo-pink[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #ff4081;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.pink-bluegrey[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #b0bec5;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.purple-green[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #69f0ae;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.candy[_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   .mathQuestionWrapper[_ngcontent-%COMP%] {\n  flex-grow: 0;\n  flex-shrink: 0;\n  flex-basis: 7%;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #795548;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n}\n\n.problems[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3Rlc3QtZmVhdHVyZXMvZGlzcGxheS10ZXN0L2Rpc3BsYXktdGVzdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvdGV4dC1maWVsZC9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL2ZvY3VzLWluZGljYXRvcnMvX3ByaXZhdGUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19sYXlvdXQtY29tbW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9fY29yZS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90aGVtZS9fY3NzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxnQkFBQTtFQUlBLGtCQUFBO0FDVEo7QURnQkk7RUFDRSx3QkFBQTtBQ2ROOztBRGtCRTtFQUNFLGlCQUFBO0FDZko7O0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsNkRBQUE7RUFJQSwyQkFBQTtFQUtFLDZEQUFBO0FDdkJOO0FDK0JJO0VGSEUsYUFBQTtBQ3pCTjs7QUNuQkU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtC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QUE7RUFDQSxtQkFBQTtBQXlPUjs7QUFuUEk7RUFFSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBcVBSOztBQS9QSTtFQUVJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFpUVI7O0FBM1FJO0VBRUksWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQTZRUjs7QUF2Ukk7RUFFSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBeVJSOztBQTNRQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUE4UUoiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdAYW5ndWxhci9jZGsnO1xuQHVzZSAnLi4vdG9rZW5zL20yL21hdC9yaXBwbGUnIGFzIHRva2Vucy1tYXQtcmlwcGxlO1xuQHVzZSAnLi4vdG9rZW5zL3Rva2VuLXV0aWxzJztcblxuQG1peGluIHJpcHBsZSgpIHtcbiAgLy8gVGhlIGhvc3QgZWxlbWVudCBvZiBhbiBtYXQtcmlwcGxlIGRpcmVjdGl2ZSBzaG91bGQgYWx3YXlzIGhhdmUgYSBwb3NpdGlvbiBvZiBcImFic29sdXRlXCIgb3JcbiAgLy8gXCJyZWxhdGl2ZVwiIHNvIHRoYXQgdGhlIHJpcHBsZXMgaW5zaWRlIGFyZSBjb3JyZWN0bHkgcG9zaXRpb25lZCByZWxhdGl2ZWx5IHRvIHRoZSBjb250YWluZXIuXG4gIC5tYXQtcmlwcGxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgZXZlcnkgcmlwcGxlIGNvbnRhaW5lciBzaG91bGQgaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUgaW4gZmF2b3Igb2YgY3JlYXRpbmcgYW5cbiAgICAvLyBlYXN5IEFQSSBmb3IgZGV2ZWxvcGVycyB1c2luZyB0aGUgTWF0UmlwcGxlIGRpcmVjdGl2ZS5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAvLyBQcm9tb3RlIGNvbnRhaW5lcnMgdGhhdCBoYXZlIHJpcHBsZXMgdG8gYSBuZXcgbGF5ZXIuIFdlIHdhbnQgdG8gdGFyZ2V0IGA6bm90KDplbXB0eSlgLFxuICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBhbGwgcmlwcGxlIGNvbnRhaW5lcnMgdG8gaGF2ZSB0aGVpciBvd24gbGF5ZXIgc2luY2UgdGhleSdyZSB1c2VkIGluIGFcbiAgICAvLyBsb3Qgb2YgcGxhY2VzIGFuZCB0aGUgbGF5ZXIgaXMgb25seSByZWxldmFudCB3aGlsZSBhbmltYXRpbmcuIE5vdGUgdGhhdCBpZGVhbGx5IHdlJ2QgdXNlXG4gICAgLy8gdGhlIGBjb250YWluYCBwcm9wZXJ0eSBoZXJlIChzZWUgIzEzMTc1KSwgYmVjYXVzZSBgOmVtcHR5YCBjYW4gYmUgYnJva2VuIGJ5IGhhdmluZyBleHRyYVxuICAgIC8vIHRleHQgaW5zaWRlIHRoZSBlbGVtZW50LCBidXQgaXQgaXNuJ3QgdmVyeSB3ZWxsIHN1cHBvcnRlZCB5ZXQuXG4gICAgJjpub3QoOmVtcHR5KSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG5cbiAgICAvLyBXZSB1c2UgYSAzZCB0cmFuc2Zvcm0gaGVyZSBpbiBvcmRlciB0byBhdm9pZCBhbiBpc3N1ZSBpbiBTYWZhcmkgd2hlcmVcbiAgICAvLyB0aGUgcmlwcGxlcyBhcmVuJ3QgY2xpcHBlZCB3aGVuIGluc2lkZSB0aGUgc2hhZG93IERPTSAoc2VlICMyNDAyOCkuXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsIDAsIDApO1xuXG4gICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMudXNlLXRva2VucyhcbiAgICAgIHRva2Vucy1tYXQtcmlwcGxlLiRwcmVmaXgsIHRva2Vucy1tYXQtcmlwcGxlLmdldC10b2tlbi1zbG90cygpKSB7XG4gICAgICAvLyBXZSBoYXZlIHRvIGVtaXQgYSBmYWxsYmFjayB2YWx1ZSBoZXJlLCBiZWNhdXNlIHNvbWUgaW50ZXJuYWwgYnVpbGRzIGRlcGVuZCBvbiBpdC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigje3Rva2VuLXV0aWxzLmdldC10b2tlbi12YXJpYWJsZShjb2xvcil9LCByZ2JhKCMwMDAsIDAuMSkpO1xuICAgIH1cblxuICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmlwcGxlIGlzIG9wYXF1ZSwgY2F1c2luZyBpdCB0byBvYnN0cnVjdCB0aGUgY29udGVudC5cbiAgICBAaW5jbHVkZSBjZGsuaGlnaC1jb250cmFzdChhY3RpdmUsIG9mZikge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcclxuQHVzZSAnQGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdGhlbWVzX3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG5AbWl4aW4gbWF0aC1xdWVzdGlvbi10aGVtZSgkdGhlbWUpIHtcclxuICAgIC8vIEV4dHJhY3QgdGhlIHBhbGV0dGVzIHlvdSBuZWVkIGZyb20gdGhlIHRoZW1lIGRlZmluaXRpb24uXHJcbiAgICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xyXG4gICAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XHJcblxyXG4gICAgLm1hdGhRdWVzdGlvbldyYXBwZXIge1xyXG4gICAgICAgIC8vZmxleDogMSAxIDA7XHJcbiAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDclOyAvLyBpbnZlc3RpZ2F0ZSB0byBoYXZlIHRoZSBzYW1lIHNpemVcclxuICAgICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCk7XHJcbiAgICAgICAgbWFyZ2luOiAwLjVlbTtcclxuICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIH1cclxufVxyXG5cclxuQGVhY2ggJHRoY2xhc3MsICR0aCBpbiAkYWxsX3RoZW1lcyB7XHJcbiAgICBAaWYgJHRoY2xhc3MgPT0gXCJcIiB7XHJcbiAgICAgICAgQGluY2x1ZGUgbWF0aC1xdWVzdGlvbi10aGVtZSgkdGgpO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgICAgOmhvc3QtY29udGV4dCguI3skdGhjbGFzc30pIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgbWF0aC1xdWVzdGlvbi10aGVtZSgkdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnByb2JsZW1zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbiIsIi8vLyBFbWl0cyBhIENTUyBjbGFzcywgYC5jZGstdmlzdWFsbHktaGlkZGVuYC4gVGhpcyBjbGFzcyBjYW4gYmUgYXBwbGllZCB0byBhbiBlbGVtZW50XG4vLy8gdG8gbWFrZSB0aGF0IGVsZW1lbnQgdmlzdWFsbHkgaGlkZGVuIHdoaWxlIHJlbWFpbmluZyBhdmFpbGFibGUgdG8gYXNzaXN0aXZlIHRlY2hub2xvZ3kuXG5AbWl4aW4gYTExeS12aXN1YWxseS1oaWRkZW4oKSB7XG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuXG4gICAgLy8gVGhpcyB3b3JrcyBhcm91bmQgYSBDaHJvbWUgYnVnIHRoYXQgY2FuIGNhdXNlIHRoZSB0YWIgdG8gY3Jhc2ggd2hlbiBsYXJnZSBhbW91bnRzIG9mXG4gICAgLy8gbm9uLUVuZ2xpc2ggdGV4dCBnZXQgd3JhcHBlZDogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTIwMTQ0NFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgICAvLyBXZSBuZWVkIGF0IGxlYXN0IG9uZSBvZiB0b3AvYm90dG9tL2xlZnQvcmlnaHQgaW4gb3JkZXIgdG8gcHJldmVudCBjYXNlcyB3aGVyZSB0aGVcbiAgICAvLyBhYnNvbHV0ZS1wb3NpdGlvbmVkIGVsZW1lbnQgaXMgcHVzaGVkIGRvd24gYW5kIGNhbiBhZmZlY3Qgc2Nyb2xsaW5nIChzZWUgIzI0NTk3KS5cbiAgICAvLyBgbGVmdGAgd2FzIGNob3NlbiBoZXJlLCBiZWNhdXNlIGl0J3MgdGhlIGxlYXN0IGxpa2VseSB0byBicmVhayBvdmVycmlkZXMgd2hlcmUgdGhlXG4gICAgLy8gZWxlbWVudCBtaWdodCBoYXZlIGJlZW4gcG9zaXRpb25lZCAoZS5nLiBgbWF0LWNoZWNrYm94YCkuXG4gICAgbGVmdDogMDtcblxuICAgIFtkaXI9J3J0bCddICYge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuXG4vLy8gQGRlcHJlY2F0ZWQgVXNlIGBhMTF5LXZpc3VhbGx5LWhpZGRlbmAuXG5AbWl4aW4gYTExeSgpIHtcbiAgQGluY2x1ZGUgYTExeS12aXN1YWxseS1oaWRkZW47XG59XG5cbi8vLyBFbWl0cyB0aGUgbWl4aW4ncyBjb250ZW50IG5lc3RlZCB1bmRlciBgJHNlbGVjdG9yLWNvbnRleHRgIGlmIGAkc2VsZWN0b3ItY29udGV4dGBcbi8vLyBpcyBub24tZW1wdHkuXG4vLy8gQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yLWNvbnRleHQgVGhlIHNlbGVjdG9yIHVuZGVyIHdoaWNoIHRvIG5lc3QgdGhlIG1peGluJ3MgY29udGVudC5cbkBtaXhpbiBfb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgQGlmICgkc2VsZWN0b3ItY29udGV4dCA9PSAnJykge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBlbHNlIHtcbiAgICAjeyRzZWxlY3Rvci1jb250ZXh0fSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8vIEFwcGxpZXMgc3R5bGVzIGZvciB1c2VycyBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgYXBwbGllc1xuLy8vIHRvIE1pY3Jvc29mdCBicm93c2Vycy4gQ2hyb21lIGNhbiBiZSBpbmNsdWRlZCBieSBjaGVja2luZyBmb3IgdGhlIGBodG1sW2hjXWBcbi8vLyBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXQgVHlwZSBvZiBoaWdoIGNvbnRyYXN0IHNldHRpbmcgdG8gdGFyZ2V0LiBEZWZhdWx0cyB0byBgYWN0aXZlYCwgY2FuIGJlXG4vLy8gICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbi8vLyBAcGFyYW0ge1N0cmluZ30gZW5jYXBzdWxhdGlvbiBXaGV0aGVyIHRvIGVtaXQgc3R5bGVzIGZvciB2aWV3IGVuY2Fwc3VsYXRpb24uIFZhbHVlcyBhcmU6XG4vLy8gICAgICogYG9uYCAtIHdvcmtzIGZvciBgRW11bGF0ZWRgLCBgTmF0aXZlYCwgYW5kIGBTaGFkb3dEb21gXG4vLy8gICAgICogYG9mZmAgLSB3b3JrcyBmb3IgYE5vbmVgXG4vLy8gICAgICogYGFueWAgLSB3b3JrcyBmb3IgYWxsIGVuY2Fwc3VsYXRpb24gbW9kZXMgYnkgZW1pdHRpbmcgdGhlIENTUyB0d2ljZSAoZGVmYXVsdCkuXG5AbWl4aW4gaGlnaC1jb250cmFzdCgkdGFyZ2V0OiBhY3RpdmUsICRlbmNhcHN1bGF0aW9uOiAnYW55Jykge1xuICBAaWYgKCR0YXJnZXQgIT0gJ2FjdGl2ZScgYW5kICR0YXJnZXQgIT0gJ2JsYWNrLW9uLXdoaXRlJyBhbmQgJHRhcmdldCAhPSAnd2hpdGUtb24tYmxhY2snKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IHZhbHVlIFwiI3skdGFyZ2V0fVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcImFjdGl2ZVwiLCBcImJsYWNrLW9uLXdoaXRlXCIsIGFuZCBcIndoaXRlLW9uLWJsYWNrXCInO1xuICB9XG5cbiAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nIGFuZCAkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ2FueScpIHtcbiAgICBAZXJyb3IgJ1Vua25vd24gY2RrLWhpZ2gtY29udHJhc3QgZW5jYXBzdWxhdGlvbiBcIiN7JGVuY2Fwc3VsYXRpb259XCIgcHJvdmlkZWQuICcgK1xuICAgICAgICAgICAnQWxsb3dlZCB2YWx1ZXMgYXJlIFwib25cIiwgXCJvZmZcIiwgYW5kIFwiYW55XCInO1xuICB9XG5cbiAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRleHQgaGFzIG11bHRpcGxlIHBhcnRzLCBzdWNoIGFzIGAuc2VjdGlvbiwgLnJlZ2lvbmAsIGp1c3QgZG9pbmdcbiAgLy8gYC5jZGstaGlnaC1jb250cmFzdC14eHggI3smfWAgd2lsbCBvbmx5IGFwcGx5IHRoZSBwYXJlbnQgc2VsZWN0b3IgdG8gdGhlIGZpcnN0IHBhcnQgb2YgdGhlXG4gIC8vIGNvbnRleHQuIFdlIGFkZHJlc3MgdGhpcyBieSBuZXN0aW5nIHRoZSBzZWxlY3RvciBjb250ZXh0IHVuZGVyIC5jZGstaGlnaC1jb250cmFzdC5cbiAgQGF0LXJvb3Qge1xuICAgICRzZWxlY3Rvci1jb250ZXh0OiAjeyZ9O1xuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nKSB7XG4gICAgICAvLyBOb3RlIHRoYXQgaWYgdGhpcyBzZWxlY3RvciBpcyB1cGRhdGVkLCB0aGUgc2FtZSBjaGFuZ2UgaGFzIHRvIGJlIG1hZGUgaW5zaWRlXG4gICAgICAvLyBgX292ZXJsYXkuc2Nzc2Agd2hpY2ggY2FuJ3QgZGVwZW5kIG9uIHRoaXMgbWl4aW4gZHVlIHRvIHNvbWUgaW5mcmFzdHJ1Y3R1cmUgbGltaXRhdGlvbnMuXG4gICAgICAuY2RrLWhpZ2gtY29udHJhc3QtI3skdGFyZ2V0fSB7XG4gICAgICAgIEBpbmNsdWRlIF9vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJykge1xuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0gOmhvc3Qge1xuICAgICAgICBAaW5jbHVkZSBfb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gV2Ugd2FudCBvdmVybGF5cyB0byBhbHdheXMgYXBwZWFyIG92ZXIgdXNlciBjb250ZW50LCBzbyBzZXQgYSBiYXNlbGluZVxuLy8gdmVyeSBoaWdoIHotaW5kZXggZm9yIHRoZSBvdmVybGF5IGNvbnRhaW5lciwgd2hpY2ggaXMgd2hlcmUgd2UgY3JlYXRlIHRoZSBuZXdcbi8vIHN0YWNraW5nIGNvbnRleHQgZm9yIGFsbCBvdmVybGF5cy5cbiRvdmVybGF5LWNvbnRhaW5lci16LWluZGV4OiAxMDAwICFkZWZhdWx0O1xuJG92ZXJsYXktei1pbmRleDogMTAwMCAhZGVmYXVsdDtcbiRvdmVybGF5LWJhY2tkcm9wLXotaW5kZXg6IDEwMDAgIWRlZmF1bHQ7XG5cbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGFsbCBvZiB0aGUgYmFja2Ryb3BzXG4kb3ZlcmxheS1iYWNrZHJvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKSAhZGVmYXVsdDtcblxuLy8gRGVmYXVsdCBiYWNrZHJvcCBhbmltYXRpb24gaXMgYmFzZWQgb24gdGhlIE1hdGVyaWFsIERlc2lnbiBzd2lmdC1lYXNlLW91dC5cbiRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4vLy8gRW1pdHMgc3RydWN0dXJhbCBzdHlsZXMgcmVxdWlyZWQgZm9yIGNkay9vdmVybGF5IHRvIGZ1bmN0aW9uLlxuQG1peGluIG92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJG92ZXJsYXktY29udGFpbmVyLXotaW5kZXg7XG5cbiAgICAmOmVtcHR5IHtcbiAgICAgIC8vIEhpZGUgdGhlIGVsZW1lbnQgd2hlbiBpdCBkb2Vzbid0IGhhdmUgYW55IGNoaWxkIG5vZGVzLiBUaGlzIGRvZXNuJ3RcbiAgICAgIC8vIGluY2x1ZGUgb3ZlcmxheXMgdGhhdCBoYXZlIGJlZW4gZGV0YWNoZWQsIHJhdGhlciB0aGFuIGRpc3Bvc2VkLlxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAvLyBXZSB1c2UgYW4gZXh0cmEgd3JhcHBlciBlbGVtZW50IGluIG9yZGVyIHRvIHVzZSBtYWtlIHRoZSBvdmVybGF5IGl0c2VsZiBhIGZsZXggaXRlbS5cbiAgLy8gVGhpcyBtYWtlcyBjZW50ZXJpbmcgdGhlIG92ZXJsYXkgZWFzeSB3aXRob3V0IHJ1bm5pbmcgaW50byB0aGUgc3VicGl4ZWwgcmVuZGVyaW5nXG4gIC8vIHByb2JsZW1zIHRpZWQgdG8gdXNpbmcgYHRyYW5zZm9ybWAgYW5kIHdpdGhvdXQgaW50ZXJmZXJpbmcgd2l0aCB0aGUgb3RoZXIgcG9zaXRpb25cbiAgLy8gc3RyYXRlZ2llcy5cbiAgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkb3ZlcmxheS16LWluZGV4O1xuICB9XG5cbiAgLy8gQSBzaW5nbGUgb3ZlcmxheSBwYW5lLlxuICAuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgZm9yIHRoaXMgb25lIHRvIHN0YXJ0IG9mZiBgYWJzb2x1dGVgLFxuICAgIC8vIGluIG9yZGVyIGZvciB1cyB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgY29ycmVjdGx5LlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6ICRvdmVybGF5LXotaW5kZXg7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkb3ZlcmxheS1iYWNrZHJvcC16LWluZGV4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uICRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgLy8gTm90ZSB0aGF0IHdlIGNhbid0IGltcG9ydCBhbmQgdXNlIHRoZSBgaGlnaC1jb250cmFzdGAgbWl4aW4gZnJvbSBgX2ExMXkuc2Nzc2AsIGJlY2F1c2VcbiAgICAgIC8vIHRoaXMgZmlsZSB3aWxsIGJlIGNvcGllZCB0byB0aGUgdG9wLWxldmVsIGBjZGtgIHBhY2thZ2Ugd2hlbiBwdXR0aW5nIHRvZ2V0aGVyIHRoZSBmaWxlc1xuICAgICAgLy8gZm9yIG5wbS4gQW55IHJlbGF0aXZlIGltcG9ydCBwYXRocyB3ZSB1c2UgaGVyZSB3aWxsIGJlY29tZSBpbnZhbGlkIG9uY2UgdGhlIGZpbGUgaXMgY29waWVkLlxuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAmIHtcbiAgICAgICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByZ2JhIGJhY2tncm91bmQgd2lsbCBiZWNvbWUgc29saWRcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byBmYWxsIGJhY2sgdG8gbWFraW5nIGl0IG9wYXF1ZSB1c2luZyBgb3BhY2l0eWAuXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogJG92ZXJsYXktYmFja2Ryb3AtY29sb3I7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIERlZmluZSBhIHRyYW5zaXRpb24gb24gdGhlIHZpc2liaWxpdHkgc28gdGhhdCB0aGUgYHRyYW5zaXRpb25lbmRgIGV2ZW50IGNhbiBmaXJlIGltbWVkaWF0ZWx5LlxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMW1zIGxpbmVhciwgb3BhY2l0eSAxbXMgbGluZWFyO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAxO1xuXG4gICAgLy8gTm90ZTogYXMgb2YgRmlyZWZveCA1NywgaGF2aW5nIHRoZSBiYWNrZHJvcCBiZSBgYmFja2dyb3VuZDogbm9uZWAgd2lsbCBwcmV2ZW50IGl0IGZyb21cbiAgICAvLyBjYXB0dXJpbmcgdGhlIHVzZXIncyBtb3VzZSBzY3JvbGwgZXZlbnRzLiBTaW5jZSB3ZSBhbHNvIGNhbid0IHVzZSBzb21ldGhpbmcgbGlrZVxuICAgIC8vIGByZ2JhKDAsIDAsIDAsIDApYCwgd2Ugd29yayBhcm91bmQgdGhlIGluY29uc2lzdGVuY3kgYnkgbm90IHNldHRpbmcgdGhlIGJhY2tncm91bmQgYXRcbiAgICAvLyBhbGwgYW5kIHVzaW5nIGBvcGFjaXR5YCB0byBtYWtlIHRoZSBlbGVtZW50IHRyYW5zcGFyZW50LlxuICAgICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gIH1cblxuICAuY2RrLW92ZXJsYXktYmFja2Ryb3Atbm9vcC1hbmltYXRpb24ge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkb3ZlcmxheS16LWluZGV4O1xuXG4gICAgLy8gV2UgdXNlIGBkaXNwbGF5OiBmbGV4YCBvbiB0aGlzIGVsZW1lbnQgZXhjbHVzaXZlbHkgZm9yIGNlbnRlcmluZyBjb25uZWN0ZWQgb3ZlcmxheXMuXG4gICAgLy8gV2hlbiAqbm90KiBjZW50ZXJpbmcsIGEgdG9wL2xlZnQvYm90dG9tL3JpZ2h0IHdpbGwgYmUgc2V0IHdoaWNoIG92ZXJyaWRlcyB0aGUgbm9ybWFsXG4gICAgLy8gZmxleCBsYXlvdXQuXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8vIFdlIHVzZSB0aGUgYGNvbHVtbmAgZGlyZWN0aW9uIGhlcmUgdG8gYXZvaWQgc29tZSBmbGV4Ym94IGlzc3VlcyBpbiBFZGdlXG4gICAgLy8gd2hlbiB1c2luZyB0aGUgXCJncm93IGFmdGVyIG9wZW5cIiBvcHRpb25zLlxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAvLyBBZGQgc29tZSBkaW1lbnNpb25zIHNvIHRoZSBlbGVtZW50IGhhcyBhbiBgaW5uZXJUZXh0YCB3aGljaCBzb21lIHBlb3BsZSBkZXBlbmQgb24gaW4gdGVzdHMuXG4gICAgbWluLXdpZHRoOiAxcHg7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICB9XG5cbiAgLy8gVXNlZCB3aGVuIGRpc2FibGluZyBnbG9iYWwgc2Nyb2xsaW5nLlxuICAuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgLy8gTmVjZXNzYXJ5IGZvciB0aGUgY29udGVudCBub3QgdG8gbG9zZSBpdHMgd2lkdGguIE5vdGUgdGhhdCB3ZSdyZSB1c2luZyAxMDAlLCBpbnN0ZWFkIG9mXG4gICAgLy8gMTAwdncsIGJlY2F1c2UgMTAwdncgaW5jbHVkZXMgdGhlIHdpZHRoIHBsdXMgdGhlIHNjcm9sbGJhciwgd2hlcmVhcyAxMDAlIGlzIHRoZSB3aWR0aFxuICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgaGFkIGJlZm9yZSB3ZSBtYWRlIGl0IGBmaXhlZGAuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAvLyBOb3RlOiB0aGlzIHdpbGwgYWx3YXlzIGFkZCBhIHNjcm9sbGJhciB0byB3aGF0ZXZlciBlbGVtZW50IGl0IGlzIG9uLCB3aGljaCBjYW5cbiAgICAvLyBwb3RlbnRpYWxseSByZXN1bHQgaW4gZG91YmxlIHNjcm9sbGJhcnMuIEl0IHNob3VsZG4ndCBiZSBhbiBpc3N1ZSwgYmVjYXVzZSB3ZSB3b24ndFxuICAgIC8vIGJsb2NrIHNjcm9sbGluZyBvbiBhIHBhZ2UgdGhhdCBkb2Vzbid0IGhhdmUgYSBzY3JvbGxiYXIgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuIiwiLy8gU3RydWN0dXJhbCBzdHlsZXMgZm9yIHRoZSBhdXRvc2l6ZSB0ZXh0IGZpZWxkcy5cbkBtaXhpbiB0ZXh0LWZpZWxkLWF1dG9zaXplKCkge1xuICAvLyBSZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gYXV0b3NpemluZyB0ZXh0YXJlYXMsIGJlY2F1c2Ugd2hhdGV2ZXIgaGVpZ2h0XG4gIC8vIHRoZSB1c2VyIHJlc2l6ZWQgdG8gd2lsbCBiZSBvdmVyd3JpdHRlbiBvbmNlIHRoZXkgc3RhcnQgdHlwaW5nIGFnYWluLlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuXG4gIC8vIFRoaXMgY2xhc3MgaXMgdGVtcG9yYXJpbHkgYXBwbGllZCB0byB0aGUgdGV4dGFyZWEgd2hlbiBpdCBpcyBiZWluZyBtZWFzdXJlZC4gSXQgaXMgaW1tZWRpYXRlbHlcbiAgLy8gcmVtb3ZlZCB3aGVuIG1lYXN1cmluZyBpcyBjb21wbGV0ZS4gV2UgdXNlIGAhaW1wb3J0YW50YCBydWxlcyBoZXJlIHRvIG1ha2Ugc3VyZSB1c2VyLXNwZWNpZmllZFxuICAvLyBydWxlcyBkbyBub3QgaW50ZXJmZXJlIHdpdGggdGhlIG1lYXN1cmVtZW50LlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgICBAaW5jbHVkZSBfYXV0b3NpemUtbWVhc3VyaW5nLWJhc2U7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLy8gU2ltaWxhciB0byB0aGUgYGNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmdgIGNsYXNzLCBidXQgb25seSBhcHBsaWVkIG9uIEZpcmVmb3guIFdlIG5lZWRcbiAgLy8gdG8gdXNlIHRoaXMgY2xhc3MsIGJlY2F1c2UgRmlyZWZveCBoYXMgYSBidWcgd2hlcmUgY2hhbmdpbmcgdGhlIGBvdmVyZmxvd2AgYnJlYWtzIHRoZSB1c2VyJ3NcbiAgLy8gYWJpbGl0eSB0byB1bmRvL3JlZG8gd2hhdCB0aGV5IHdlcmUgdHlwaW5nIChzZWUgIzE2NjI5KS4gVGhpcyBjbGFzcyBpcyBvbmx5IHNjb3BlZCB0byBGaXJlZm94LFxuICAvLyBiZWNhdXNlIHRoZSBtZWFzdXJlbWVudHMgdGhlcmUgZG9uJ3Qgc2VlbSB0byBiZSBhZmZlY3RlZCBieSB0aGUgYGhlaWdodDogMGAsIHdoZXJlYXMgb24gb3RoZXJcbiAgLy8gYnJvd3NlcnMgdGhleSBhcmUsIGUuZy4gQ2hyb21lIGRldGVjdHMgbG9uZ2VyIHRleHQgYW5kIElFIGRvZXMndCByZXNpemUgYmFjayB0byBub3JtYWwuXG4gIC8vIElkZW50aWNhbCBpc3N1ZSByZXBvcnQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQ0ODc4NFxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3gge1xuICAgIEBpbmNsdWRlIF9hdXRvc2l6ZS1tZWFzdXJpbmctYmFzZTtcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGVuYWJsZSBtb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIG9mIHRleHQgZmllbGRzLlxuQG1peGluIHRleHQtZmllbGQtYXV0b2ZpbGwoKSB7XG4gIC8vIEtleWZyYW1lcyB0aGF0IGFwcGx5IG5vIHN0eWxlcywgYnV0IGFsbG93IHVzIHRvIG1vbml0b3Igd2hlbiBhbiB0ZXh0IGZpZWxkIGJlY29tZXMgYXV0b2ZpbGxlZFxuICAvLyBieSB3YXRjaGluZyBmb3IgdGhlIGFuaW1hdGlvbiBldmVudHMgdGhhdCBhcmUgZmlyZWQgd2hlbiB0aGV5IHN0YXJ0LiBOb3RlOiB0aGUgLyohKi8gY29tbWVudCBpc1xuICAvLyBuZWVkZWQgdG8gcHJldmVudCBMaWJTYXNzIGZyb20gc3RyaXBwaW5nIHRoZSBrZXlmcmFtZXMgb3V0LlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7LyohKi99XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsvKiEqL31cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIC8vIFNpbmNlIENocm9tZSA4MCB3ZSBuZWVkIGEgMW1zIGRlbGF5LCBvciB0aGUgYW5pbWF0aW9uc3RhcnQgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtcztcbiAgfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXksIG9yIHRoZSBhbmltYXRpb25zdGFydCBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtcztcbiAgfVxufVxuXG5AbWl4aW4gX2F1dG9zaXplLW1lYXN1cmluZy1iYXNlIHtcbiAgLy8gSGF2aW5nIDJweCB0b3AgYW5kIGJvdHRvbSBwYWRkaW5nIHNlZW1zIHRvIGZpeCBhIGJ1ZyB3aGVyZSBDaHJvbWUgZ2V0cyBhbiBpbmNvcnJlY3RcbiAgLy8gbWVhc3VyZW1lbnQuIFdlIGp1c3QgaGF2ZSB0byBhY2NvdW50IGZvciBpdCBsYXRlciBhbmQgc3VidHJhY3QgaXQgb2ZmIHRoZSBmaW5hbCByZXN1bHQuXG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG59XG5cbi8vIFVzZWQgdG8gZ2VuZXJhdGUgVUlEcyBmb3Iga2V5ZnJhbWVzIHVzZWQgdG8gY2hhbmdlIHRoZSB0ZXh0IGZpZWxkIGF1dG9maWxsIHN0eWxlcy5cbiRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogMDtcblxuLy8gTWl4aW4gdXNlZCB0byBhcHBseSBjdXN0b20gYmFja2dyb3VuZCBhbmQgZm9yZWdyb3VuZCBjb2xvcnMgdG8gYW4gYXV0b2ZpbGxlZCB0ZXh0IGZpZWxkLlxuLy8gQmFzZWQgb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3ODE1NDkvXG4vLyByZW1vdmluZy1pbnB1dC1iYWNrZ3JvdW5kLWNvbG91ci1mb3ItY2hyb21lLWF1dG9jb21wbGV0ZSNhbnN3ZXItMzc0MzIyNjBcbkBtaXhpbiB0ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yKCRiYWNrZ3JvdW5kLCAkZm9yZWdyb3VuZDonJykge1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSB7XG4gICAgdG8ge1xuICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICBAaWYgJGZvcmVncm91bmQgIT0gJycgeyBjb2xvcjogJGZvcmVncm91bmQ7IH1cbiAgICB9XG4gIH1cblxuICAmOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IGJvdGg7XG4gIH1cblxuICAmLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSBmb3IgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQsIG9yIHRoZSBhbmltYXRpb25zdGFydFxuICAgIC8vIGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXMsXG4gICAgICAgICAgICAgICBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0gYm90aDtcbiAgfVxuXG4gICRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogJGF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50ICsgMSAhZ2xvYmFsO1xufVxuXG4vLyBAZGVwcmVjYXRlZCBVc2UgYGF1dG9zaXplYCBhbmQgYGF1dG9maWxsYCBpbnN0ZWFkLlxuQG1peGluIHRleHQtZmllbGQge1xuICBAaW5jbHVkZSB0ZXh0LWZpZWxkLWF1dG9zaXplKCk7XG4gIEBpbmNsdWRlIHRleHQtZmllbGQtYXV0b2ZpbGwoKTtcbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICdAYW5ndWxhci9jZGsnO1xuQHVzZSAnLi4vc3R5bGUvbGF5b3V0LWNvbW1vbic7XG5AdXNlICcuLi90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vdGhlbWluZy9pbnNwZWN0aW9uJztcblxuLy8gUHJpdmF0ZSBzYXNzIHZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgdXNlZCBhcyByZWZlcmVuY2UgdGhyb3VnaG91dCBjb21wb25lbnQgc3R5bGVzaGVldHMuXG4kZGVmYXVsdC1ib3JkZXItd2lkdGg6IDNweDtcbiRkZWZhdWx0LWJvcmRlci1zdHlsZTogc29saWQ7XG4kZGVmYXVsdC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuJGRlZmF1bHQtYm9yZGVyLXJhZGl1czogNHB4O1xuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgdGhlIGZvY3VzIGluZGljYXRvciBzdHJ1Y3R1cmFsIHN0eWxlcy5cbkBtaXhpbiBzdHJ1Y3R1cmFsLXN0eWxpbmcoJHByZWZpeCkge1xuICAuI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBAaW5jbHVkZSBsYXlvdXQtY29tbW9uLmZpbGwoKTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGRpc3BsYXk6IHZhcigtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXksIG5vbmUpOyAvLyBIaWRlIHRoZSBpbmRpY2F0b3IgYnkgZGVmYXVsdC5cbiAgICAgIGJvcmRlcjogdmFyKFxuICAgICAgICAgIC0tI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoLFxuICAgICAgICAgICN7JGRlZmF1bHQtYm9yZGVyLXdpZHRofVxuICAgICAgICApXG4gICAgICAgIHZhcihcbiAgICAgICAgICAtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1zdHlsZSxcbiAgICAgICAgICAjeyRkZWZhdWx0LWJvcmRlci1zdHlsZX1cbiAgICAgICAgKVxuICAgICAgICB2YXIoXG4gICAgICAgICAgLS0jeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItY29sb3IsXG4gICAgICAgICAgI3skZGVmYXVsdC1ib3JkZXItY29sb3J9XG4gICAgICAgICk7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoXG4gICAgICAgIC0tI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1cyxcbiAgICAgICAgI3skZGVmYXVsdC1ib3JkZXItcmFkaXVzfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBCeSBkZWZhdWx0LCByZW5kZXIgdGhlIGZvY3VzIGluZGljYXRvciB3aGVuIHRoZSBmb2N1cyBpbmRpY2F0b3IgaG9zdCBlbGVtZW50IHRha2VzIGZvY3VzLlxuICAgIC8vIERlZmluaW5nIGEgcHNldWRvIGVsZW1lbnQncyBjb250ZW50IHdpbGwgY2F1c2UgaXQgdG8gcmVuZGVyLlxuICAgICY6Zm9jdXM6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICB9XG4gIH1cblxuICAvLyBFbmFibGUgdGhlIGluZGljYXRvciBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuXG4gIEBpbmNsdWRlIGNkay5oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKGRpc3BsYXk6IGJsb2NrKSwgJHByZWZpeCk7XG4gIH1cbn1cblxuLy8gR2VuZXJhdGVzIENTUyB2YXJpYWJsZSBkZWNsYXJhdGlvbnMgZnJvbSBhIG1hcC5cbkBtaXhpbiBfb3V0cHV0LXZhcmlhYmxlcygkbWFwKSB7XG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkbWFwIHtcbiAgICBAaWYgKCR2YWx1ZSkge1xuICAgICAgLS0jeyRrZXl9OiAjeyR2YWx1ZX07XG4gICAgfVxuICB9XG59XG5cbi8vIE1peGluIHRoYXQgZGVkdXBzIENTUyB2YXJpYWJsZXMgZm9yIHRoZSBzdHJvbmctZm9jdXMtaW5kaWNhdG9ycyBtaXhpbi5cbkBtaXhpbiBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnLCAkcHJlZml4KSB7XG4gICRib3JkZXItc3R5bGU6IG1hcC5nZXQoJGNvbmZpZywgYm9yZGVyLXN0eWxlKTtcbiAgJGJvcmRlci13aWR0aDogbWFwLmdldCgkY29uZmlnLCBib3JkZXItd2lkdGgpO1xuICAkYm9yZGVyLXJhZGl1czogbWFwLmdldCgkY29uZmlnLCBib3JkZXItcmFkaXVzKTtcbiAgJGJvcmRlci1jb2xvcjogbWFwLmdldCgkY29uZmlnLCBib3JkZXItY29sb3IpO1xuICAkZGlzcGxheTogbWFwLmdldCgkY29uZmlnLCBkaXNwbGF5KTtcbiAgJG1hcDogKFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItc3R5bGUnOiAkYm9yZGVyLXN0eWxlLFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItd2lkdGgnOiAkYm9yZGVyLXdpZHRoLFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItcmFkaXVzJzogJGJvcmRlci1yYWRpdXMsXG4gICAgJyN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1jb2xvcic6ICRib3JkZXItY29sb3IsXG4gICAgJyN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXknOiAkZGlzcGxheSxcbiAgKTtcblxuICBAaWYgKCYpIHtcbiAgICBAaW5jbHVkZSBfb3V0cHV0LXZhcmlhYmxlcygkbWFwKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgLy8gV2UgdXNlIGBodG1sYCBoZXJlIGluc3RlYWQgb2YgYDpyb290YCwgYmVjYXVzZSB0aGVcbiAgICAvLyBsYXR0ZXIgY2F1c2VzIHNvbWUgaXNzdWVzIHdpdGggaW50ZXJuYWwgdG9vbGluZy5cbiAgICBodG1sIHtcbiAgICAgIEBpbmNsdWRlIF9vdXRwdXQtdmFyaWFibGVzKCRtYXApO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gc3Ryb25nLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZzogKCkpIHtcbiAgLy8gRGVmYXVsdCBmb2N1cyBpbmRpY2F0b3IgY29uZmlnLlxuICAkZGVmYXVsdC1jb25maWc6IChcbiAgICAgIGJvcmRlci1jb2xvcjogYmxhY2ssXG4gICAgICBkaXNwbGF5OiBibG9jayxcbiAgKTtcblxuICAvLyBNZXJnZSBkZWZhdWx0IGNvbmZpZyB3aXRoIHVzZXIgY29uZmlnLlxuICAkY29uZmlnOiBtYXAubWVyZ2UoJGRlZmF1bHQtY29uZmlnLCAkY29uZmlnKTtcblxuICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnLCAnbWF0Jyk7XG59XG5cbkBtaXhpbiBtZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZzogKCkpIHtcbiAgLy8gRGVmYXVsdCBmb2N1cyBpbmRpY2F0b3IgY29uZmlnLlxuICAkZGVmYXVsdC1jb25maWc6IChcbiAgICAgIGJvcmRlci1jb2xvcjogYmxhY2ssXG4gICAgICBkaXNwbGF5OiBibG9jayxcbiAgKTtcblxuICAvLyBNZXJnZSBkZWZhdWx0IGNvbmZpZyB3aXRoIHVzZXIgY29uZmlnLlxuICAkY29uZmlnOiBtYXAubWVyZ2UoJGRlZmF1bHQtY29uZmlnLCAkY29uZmlnKTtcblxuICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnLCAnbWF0LW1kYycpO1xufVxuXG5AbWl4aW4gc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHRoZW1lLW9yLWNvbG9yKSA9PSAnY29sb3InIHtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLW9yLWNvbG9yXG4gICAgKSwgJ21hdCcpO1xuICB9XG4gIEBlbHNlIHtcbiAgICAkYm9yZGVyLWNvbG9yOiBpbnNwZWN0aW9uLmdldC10aGVtZS1jb2xvcigkdGhlbWUtb3ItY29sb3IsIHByaW1hcnkpO1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yXG4gICAgKSwgJ21hdCcpO1xuICB9XG59XG5cbkBtaXhpbiBzdHJvbmctZm9jdXMtaW5kaWNhdG9ycy10aGVtZSgkdGhlbWUtb3ItY29sb3IpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdGhlbWUtb3ItY29sb3IpID09ICdjb2xvcicge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtb3ItY29sb3JcbiAgICApLCAnbWF0Jyk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZS1vci1jb2xvciwgJ21hdC1mb2N1cy1pbmRpY2F0b3JzJykge1xuICAgICAgQGlmIGluc3BlY3Rpb24udGhlbWUtaGFzKCR0aGVtZS1vci1jb2xvciwgY29sb3IpIHtcbiAgICAgICAgQGluY2x1ZGUgc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1kYy1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1jb2xvcigkdGhlbWUtb3ItY29sb3IpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdGhlbWUtb3ItY29sb3IpID09ICdjb2xvcicge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtb3ItY29sb3JcbiAgICApLCAnbWF0LW1kYycpO1xuICB9XG4gIEBlbHNlIHtcbiAgICAkYm9yZGVyLWNvbG9yOiBpbnNwZWN0aW9uLmdldC10aGVtZS1jb2xvcigkdGhlbWUtb3ItY29sb3IsIHByaW1hcnkpO1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yXG4gICAgKSwgJ21hdC1tZGMnKTtcbiAgfVxufVxuXG5AbWl4aW4gbWRjLXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLXRoZW1lKCR0aGVtZS1vci1jb2xvcikge1xuICBAaWYgbWV0YS50eXBlLW9mKCR0aGVtZS1vci1jb2xvcikgPT0gJ2NvbG9yJyB7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKFxuICAgICAgICBib3JkZXItY29sb3I6ICR0aGVtZS1vci1jb2xvclxuICAgICksICdtYXQtbWRjJyk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKFxuICAgICAgICAkdGhlbWUtb3ItY29sb3IsICdtYXQtbWRjLWZvY3VzLWluZGljYXRvcnMnKSB7XG4gICAgICBAaWYgaW5zcGVjdGlvbi50aGVtZS1oYXMoJHRoZW1lLW9yLWNvbG9yLCBjb2xvcikge1xuICAgICAgICBAaW5jbHVkZSBtZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoaXMgbWl4aW4gZW5zdXJlcyBhbiBlbGVtZW50IHNwYW5zIHRvIGZpbGwgdGhlIG5lYXJlc3QgYW5jZXN0b3Igd2l0aCBkZWZpbmVkIHBvc2l0aW9uaW5nLlxuQG1peGluIGZpbGwge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiIsIkB1c2UgJ0Bhbmd1bGFyL2Nkayc7XG5AdXNlICcuL3Rva2Vucy9tMi9tYXQvYXBwJyBhcyB0b2tlbnMtbWF0LWFwcDtcbkB1c2UgJy4vdG9rZW5zL3Rva2VuLXV0aWxzJztcbkB1c2UgJy4vcmlwcGxlL3JpcHBsZSc7XG5AdXNlICcuL2ZvY3VzLWluZGljYXRvcnMvcHJpdmF0ZSc7XG5AdXNlICcuL21kYy1oZWxwZXJzL21kYy1oZWxwZXJzJztcblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBhcmUgbm90IHRoZW1lLWRlcGVuZGVudC5cbkBtaXhpbiBjb3JlKCkge1xuICBAaW5jbHVkZSByaXBwbGUucmlwcGxlKCk7XG4gIEBpbmNsdWRlIGNkay5hMTF5LXZpc3VhbGx5LWhpZGRlbigpO1xuICBAaW5jbHVkZSBjZGsub3ZlcmxheSgpO1xuICBAaW5jbHVkZSBjZGsudGV4dC1maWVsZC1hdXRvc2l6ZSgpO1xuICBAaW5jbHVkZSBjZGsudGV4dC1maWVsZC1hdXRvZmlsbCgpO1xuICBAaW5jbHVkZSBwcml2YXRlLnN0cnVjdHVyYWwtc3R5bGluZygnbWF0Jyk7XG4gIEBpbmNsdWRlIHByaXZhdGUuc3RydWN0dXJhbC1zdHlsaW5nKCdtYXQtbWRjJyk7XG5cbiAgLy8gV3JhcHBlciBlbGVtZW50IHRoYXQgcHJvdmlkZXMgdGhlIHRoZW1lIGJhY2tncm91bmQgd2hlbiB0aGVcbiAgLy8gdXNlcidzIGNvbnRlbnQgaXNuJ3QgaW5zaWRlIG9mIGEgYG1hdC1zaWRlbmF2LWNvbnRhaW5lcmAuXG4gIEBhdC1yb290IHtcbiAgICAubWF0LWFwcC1iYWNrZ3JvdW5kIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1oZWxwZXJzLmRpc2FibGUtbWRjLWZhbGxiYWNrLWRlY2xhcmF0aW9ucyB7XG4gICAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLnVzZS10b2tlbnModG9rZW5zLW1hdC1hcHAuJHByZWZpeCwgdG9rZW5zLW1hdC1hcHAuZ2V0LXRva2VuLXNsb3RzKCkpIHtcbiAgICAgICAgICAvLyBOb3RlOiB3ZSBuZWVkIHRvIGVtaXQgZmFsbGJhY2sgdmFsdWVzIGhlcmUgdG8gYXZvaWQgZXJyb3JzIGluIGludGVybmFsIGJ1aWxkcy5cbiAgICAgICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tc2xvdChiYWNrZ3JvdW5kLWNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc3BhcmVudCk7XG4gICAgICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXNsb3QoY29sb3IsIHRleHQtY29sb3IsIGluaGVyaXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuLy9cblxuQHVzZSAnc2FzczpsaXN0JztcbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuL2dzcyc7XG5cbi8vLyBXaGVuIHRydWUsIGFkZCBhbiBhZGRpdGlvbmFsIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uIGJlZm9yZSBkZWNsYXJhdGlvbnNcbi8vLyB0aGF0IHVzZSBhZHZhbmNlZCBmZWF0dXJlcyBzdWNoIGFzIGN1c3RvbSBwcm9wZXJ0aWVzIG9yIENTUyBmdW5jdGlvbnMuIFRoaXNcbi8vLyBhZGRzIGZhbGxiYWNrIHN1cHBvcnQgZm9yIG9sZGVyIGJyb3dzZXJzIHN1Y2ggYXMgSUUxMSB0aGF0IGRvIG5vdCBzdXBwb3J0XG4vLy8gdGhlc2UgZmVhdHVyZXMgYXQgdGhlIGNvc3Qgb2YgYWRkaXRpb25hbCBDU1MuIFNldCB0aGlzIHZhcmlhYmxlIHRvIGZhbHNlIHRvXG4vLy8gZGlzYWJsZSBnZW5lcmF0aW5nIGZhbGxiYWNrIGRlY2xhcmF0aW9ucy5cbiRlbmFibGUtZmFsbGJhY2stZGVjbGFyYXRpb25zOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gV3JpdGVzIGEgQ1NTIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uLiBUaGlzIG1peGluIGlzIHVzZWQgdGhyb3VnaG91dCB0aGVcbi8vLyB0aGVtZSBwYWNrYWdlIGZvciBjb25zaXN0ZW5jeSBmb3IgZHluYW1pY2FsbHkgc2V0dGluZyBDU1MgcHJvcGVydHkgdmFsdWVzLlxuLy8vXG4vLy8gVGhpcyBtaXhpbiBtYXkgb3B0aW9uYWxseSB0YWtlIGEgZmFsbGJhY2sgdmFsdWUuIEZvciBhZHZhbmNlZCBmZWF0dXJlcyBzdWNoXG4vLy8gYXMgY3VzdG9tIHByb3BlcnRpZXMgb3IgQ1NTIGZ1bmN0aW9ucyBsaWtlIG1pbiBhbmQgbWF4LCBhIGZhbGxiYWNrIHZhbHVlIGlzXG4vLy8gcmVjb21tZW5kZWQgdG8gc3VwcG9ydCBvbGRlciBicm93c2Vycy5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkcHJvcGVydHkgLSBUaGUgQ1NTIHByb3BlcnR5IG9mIHRoZSBkZWNsYXJhdGlvbi5cbi8vLyBAcGFyYW0geyp9ICR2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgQ1NTIGRlY2xhcmF0aW9uLiBUaGUgdmFsdWUgc2hvdWxkIGJlXG4vLy8gICAgIHJlc29sdmVkIGJ5IG90aGVyIHRoZW1lIGZ1bmN0aW9ucyBmaXJzdCAoaS5lLiBjdXN0b20gcHJvcGVydHkgTWFwcyBhbmRcbi8vLyAgICAgTWF0ZXJpYWwgdGhlbWUga2V5cyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIG1peGluKS4gSWYgdGhlIHZhbHVlIGlzXG4vLy8gICAgIG51bGwsIG5vIGRlY2xhcmF0aW9ucyB3aWxsIGJlIGVtaXR0ZWQuXG4vLy8gQHBhcmFtIHsqfSAkZmFsbGJhY2sgLSBBbiBvcHRpb25hbCBmYWxsYmFjayB2YWx1ZSBmb3Igb2xkZXIgYnJvd3NlcnMuIElmXG4vLy8gICAgIHByb3ZpZGVkLCBhIHNlY29uZCBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbiB3aWxsIGJlIGFkZGVkIGJlZm9yZSB0aGVcbi8vLyAgICAgbWFpbiBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbi5cbi8vLyBAcGFyYW0ge01hcH0gJGdzcyAtIEFuIG9wdGlvbmFsIE1hcCBvZiBHU1MgYW5ub3RhdGlvbnMgdG8gYWRkLlxuLy8vIEBwYXJhbSB7Qm9vbH0gJGltcG9ydGFudCAtIElmIHRydWUsIGFkZCBgIWltcG9ydGFudGAgdG8gdGhlIGRlY2xhcmF0aW9uLlxuQG1peGluIGRlY2xhcmF0aW9uKFxuICAkcHJvcGVydHksXG4gICR2YWx1ZSxcbiAgJGZhbGxiYWNrLXZhbHVlOiBudWxsLFxuICAkZ3NzOiAoKSxcbiAgJGltcG9ydGFudDogZmFsc2Vcbikge1xuICAvLyBOb3JtYWxseSBzZXR0aW5nIGEgbnVsbCB2YWx1ZSB0byBhIHByb3BlcnR5IHdpbGwgbm90IGVtaXQgQ1NTLCBzbyBtaXhpbnNcbiAgLy8gd291bGRuJ3QgbmVlZCB0byBjaGVjayB0aGlzLiBIb3dldmVyLCBTYXNzIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlXG4gIC8vIGludGVycG9sYXRlZCBwcm9wZXJ0eSBpcyBhIGN1c3RvbSBwcm9wZXJ0eS5cbiAgQGlmICR2YWx1ZSAhPSBudWxsIHtcbiAgICAkaW1wb3J0YW50LXJ1bGU6IGlmKCRpbXBvcnRhbnQsICcgIWltcG9ydGFudCcsICcnKTtcblxuICAgIEBpZiAkZmFsbGJhY2stdmFsdWUgYW5kICRlbmFibGUtZmFsbGJhY2stZGVjbGFyYXRpb25zIHtcbiAgICAgIEBpbmNsdWRlIGdzcy5hbm5vdGF0ZSgkZ3NzKTtcbiAgICAgICN7JHByb3BlcnR5fTogI3skZmFsbGJhY2stdmFsdWV9ICN7JGltcG9ydGFudC1ydWxlfTtcblxuICAgICAgLy8gQWRkIEBhbHRlcm5hdGUgdG8gYW5ub3RhdGlvbnMuXG4gICAgICAkZ3NzOiBtYXAubWVyZ2UoXG4gICAgICAgICRnc3MsXG4gICAgICAgIChcbiAgICAgICAgICBhbHRlcm5hdGU6IHRydWUsXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgZ3NzLmFubm90YXRlKCRnc3MpO1xuICAgICN7JHByb3BlcnR5fTogI3skdmFsdWV9I3skaW1wb3J0YW50LXJ1bGV9O1xuICB9XG59XG5cbi8vLyBVbnBhY2tzIHNob3J0aGFuZCB2YWx1ZXMgZm9yIENTUyBwcm9wZXJ0aWVzIChpLmUuIGxpc3RzIG9mIDEtMyB2YWx1ZXMpLlxuLy8vIElmIGEgbGlzdCBvZiA0IHZhbHVlcyBpcyBnaXZlbiwgaXQgaXMgcmV0dXJuZWQgYXMtaXMuXG4vLy9cbi8vLyBFeGFtcGxlczpcbi8vL1xuLy8vIHVucGFjay12YWx1ZSg0cHgpID0+IDRweCA0cHggNHB4IDRweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4KSA9PiA0cHggMnB4IDRweCAycHhcbi8vLyB1bnBhY2stdmFsdWUoNHB4IDJweCAycHgpID0+IDRweCAycHggMnB4IDJweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4IDAgMnB4KSA9PiA0cHggMnB4IDAgMnB4XG4vLy9cbi8vLyBAcGFyYW0ge051bWJlciB8IE1hcCB8IExpc3R9ICR2YWx1ZSAtIExpc3Qgb2YgMSB0byA0IHZhbHVlIG51bWJlcnMuXG4vLy8gQHJldHVybiB7TGlzdH0gYSBMaXN0IG9mIDQgdmFsdWUgbnVtYmVycy5cbkBmdW5jdGlvbiB1bnBhY2stdmFsdWUoJHZhbHVlKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHZhbHVlKSA9PSAnbWFwJyBvciBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDEge1xuICAgIEByZXR1cm4gJHZhbHVlICR2YWx1ZSAkdmFsdWUgJHZhbHVlO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gNCB7XG4gICAgQHJldHVybiAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAzIHtcbiAgICBAcmV0dXJuIGxpc3QubnRoKCR2YWx1ZSwgMSkgbGlzdC5udGgoJHZhbHVlLCAyKSBsaXN0Lm50aCgkdmFsdWUsIDMpXG4gICAgICBsaXN0Lm50aCgkdmFsdWUsIDIpO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMiB7XG4gICAgQHJldHVybiBsaXN0Lm50aCgkdmFsdWUsIDEpIGxpc3QubnRoKCR2YWx1ZSwgMikgbGlzdC5udGgoJHZhbHVlLCAxKVxuICAgICAgbGlzdC5udGgoJHZhbHVlLCAyKTtcbiAgfVxuXG4gIEBlcnJvciBcIkludmFsaWQgQ1NTIHByb3BlcnR5IHZhbHVlOiAnI3skdmFsdWV9JyBpcyBtb3JlIHRoYW4gNCB2YWx1ZXNcIjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 2354:
/*!*****************************************************************!*\
  !*** ./src/app/test-features/inputtest/input-test.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputTestComponent: () => (/* binding */ InputTestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function InputTestComponent_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const line_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lines);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9700:
/*!**********************************************************!*\
  !*** ./src/app/test-features/test-features.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestFeaturesComponent: () => (/* binding */ TestFeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/animations */ 7172);
/* harmony import */ var _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../column-answer/column-answer.component */ 3192);
/* harmony import */ var _services_math_question_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/math-question.service */ 3263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 5175);











function TestFeaturesComponent_ng_template_2_option_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const x_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", x_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r5);
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
    const answerMode_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", answerMode_r6.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", answerMode_r6.label, " ");
  }
}
function TestFeaturesComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-column-answer", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focusChange", function TestFeaturesComponent_ng_template_2_Template_app_column_answer_focusChange_0_listener($event) {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.onFocusChange($event, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function TestFeaturesComponent_ng_template_2_Template_select_ngModelChange_2_listener($event) {
      const answer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](answer_r4.status, $event) || (answer_r4.status = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TestFeaturesComponent_ng_template_2_option_3_Template, 2, 2, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function TestFeaturesComponent_ng_template_2_Template_input_ngModelChange_5_listener($event) {
      const answer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](answer_r4.value, $event) || (answer_r4.value = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TestFeaturesComponent_ng_template_2_span_6_Template, 2, 0, "span", 11)(7, TestFeaturesComponent_ng_template_2_ng_template_7_Template, 2, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-form-field", 12)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Answer mode");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function TestFeaturesComponent_ng_template_2_Template_mat_select_ngModelChange_12_listener($event) {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.answerInputConfigs[i_r2].mode, $event) || (ctx_r2.answerInputConfigs[i_r2].mode = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, TestFeaturesComponent_ng_template_2_mat_option_13_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-form-field", 13)(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function TestFeaturesComponent_ng_template_2_Template_input_ngModelChange_18_listener($event) {
      const answer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).$implicit;
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](answer_r4.size, $event) || (answer_r4.size = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br")(22, "hr");
  }
  if (rf & 2) {
    const i_r2 = ctx.index;
    const answer_r4 = ctx.$implicit;
    const elseBlock_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("size", answer_r4.size)("mode", answer_r4.mode)("value", answer_r4.value)("id", i_r2.toString())("answerStatus", answer_r4.status)("valueChange", ctx_r2.myCallbackFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", answer_r4.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.inputStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", answer_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.answerInputConfigs[i_r2].inFocus)("ngIfElse", elseBlock_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.answerInputConfigs[i_r2].mode);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.ANSWER_MODES);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", answer_r4.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" value: ", ctx_r2.answerInputConfigs[i_r2].value, " ");
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
    consts: [["elseBlock", ""], ["ngFor", "", 3, "ngForOf"], [1, "primary"], [1, "accent"], [1, "warn"], [3, "click"], [1, "box"], ["value", "test", 1, "box"], [3, "focusChange", "size", "mode", "value", "id", "answerStatus", "valueChange"], [3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "focusIndicator", 4, "ngIf", "ngIfElse"], ["appearance", "fill"], ["appearance", "outline"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "focusIndicator"]],
    template: function TestFeaturesComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, TestFeaturesComponent_ng_template_2_Template, 23, 15, "ng-template", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Test theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Accent");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Test anime");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TestFeaturesComponent_Template_button_click_14_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "toggle1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br")(17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Test color animation");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "br")(21, "input", 7)(22, "br")(23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TestFeaturesComponent_Template_button_click_24_listener() {
          return ctx.toggle();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "br")(27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "button", 5);
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
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_core__WEBPACK_IMPORTED_MODULE_5__.MatOption, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _column_answer_column_answer_component__WEBPACK_IMPORTED_MODULE_0__.ColumnAnswerComponent],
    styles: [".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n  background-color: var(--mat-ripple-color, rgba(0, 0, 0, 0.1));\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start { \n }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end { \n }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: var(--mat-app-background-color, transparent);\n  color: var(--mat-app-text-color, inherit);\n}\n\n.box[_ngcontent-%COMP%] {\n  width: 200px;\n  border: 5px solid black;\n  text-align: center;\n  font-size: 30px;\n  color: white;\n}\n\n.primary[_ngcontent-%COMP%] {\n  background-color: #00796b;\n  color: white;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.accent[_ngcontent-%COMP%] {\n  background-color: #388e3c;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.dark-theme[_nghost-%COMP%]   .primary[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background-color: #607d8b;\n  color: white;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.dark-theme[_nghost-%COMP%]   .accent[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background-color: #ffd740;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.dark-theme[_nghost-%COMP%]   .warn[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: #ff5722;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.light-theme[_nghost-%COMP%]   .primary[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.light-theme[_nghost-%COMP%]   .accent[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background-color: #bcaaa4;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.light-theme[_nghost-%COMP%]   .warn[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: #ffab91;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.deeppurple-amber[_nghost-%COMP%]   .primary[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  color: white;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.deeppurple-amber[_nghost-%COMP%]   .accent[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background-color: #ffd740;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.deeppurple-amber[_nghost-%COMP%]   .warn[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.indigo-pink[_nghost-%COMP%]   .primary[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.indigo-pink[_nghost-%COMP%]   .accent[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background-color: #ff4081;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.indigo-pink[_nghost-%COMP%]   .warn[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.pink-bluegrey[_nghost-%COMP%]   .primary[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background-color: #c2185b;\n  color: white;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.pink-bluegrey[_nghost-%COMP%]   .accent[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background-color: #b0bec5;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.pink-bluegrey[_nghost-%COMP%]   .warn[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.purple-green[_nghost-%COMP%]   .primary[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n  color: white;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.purple-green[_nghost-%COMP%]   .accent[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background-color: #69f0ae;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.purple-green[_nghost-%COMP%]   .warn[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.candy[_nghost-%COMP%]   .primary[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.candy[_nghost-%COMP%]   .accent[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   .accent[_ngcontent-%COMP%] {\n  background-color: #795548;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n.candy[_nghost-%COMP%]   .warn[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   .warn[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n  font-weight: bold;\n  font-weight: bold;\n  margin: 1em;\n  padding: 0.5em;\n  width: 30em;\n}\n\n.focusIndicator[_ngcontent-%COMP%] {\n  border: solid 1px green;\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3Rlc3QtZmVhdHVyZXMvdGVzdC1mZWF0dXJlcy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvdGV4dC1maWVsZC9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL2ZvY3VzLWluZGljYXRvcnMvX3ByaXZhdGUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19sYXlvdXQtY29tbW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9fY29yZS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90aGVtZS9fY3NzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxnQkFBQTtFQUlBLGtCQUFBO0FDVEo7QURnQkk7RUFDRSx3QkFBQTtBQ2ROOztBRGtCRTtFQUNFLGlCQUFBO0FDZko7O0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsNkRBQUE7RUFJQSwyQkFBQTtFQUtFLDZEQUFBO0FDdkJOO0FDK0JJO0VGSEUsYUFBQTtBQ3pCTjs7QUNuQkU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUlBLG1CQUFBO0VBR0EsVUFBQTtFQUdBLHdCQUFBO0VBQ0EscUJBQUE7RUFNQSxPQUFBO0FEVUo7QUNSSTtFQUNFLFVBQUE7RUFDQSxRQUFBO0FEVU47O0FFMUJFO0VBRUUsb0JBQUE7RUFHQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FGMEJKOztBRXRCRTtFQUNFLGVBQUE7RUFDQSxhQTNCd0I7QUZvRDVCO0FFdkJJO0VBR0UsYUFBQTtBRnVCTjs7QUVmRTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBMUNjO0FGNERsQjs7QUVkRTtFQUdFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBcERjO0VBd0RkLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUZZSjs7QUVURTtFQUVFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUVBLGFBcEV1QjtFQXFFdkIsb0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDBEQUFBO0VBQ0EsVUFBQTtBRlVKO0FFUkk7RUFDRSxVQUFBO0FGVU47QUVMTTtFQUdFLFlBQUE7QUZLUjs7QUVBRTtFQUNFLCtCQXRGcUI7QUZ5RnpCOztBRUFFO0VBRUUscURBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUZFSjtBRUlJO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FGRk47O0FFTUU7RUFDRSxnQkFBQTtBRkhKOztBRVFFO0VBQ0Usa0JBQUE7RUFDQSxhQXJIYztFQTBIZCxhQUFBO0VBSUEsc0JBQUE7RUFHQSxjQUFBO0VBQ0EsZUFBQTtBRmRKOztBRWtCRTtFQUNFLGVBQUE7RUFLQSxXQUFBO0VBS0Esa0JBQUE7QUZ2Qko7O0FHMUhFO0VBQ0UsWUFBQTtBSDZISjs7QUd2SEU7RUF5Q0EseUJBQUE7RUFDQSxrQ0FBQTtFQXhDRSx1QkFBQTtFQUNBLDJCQUFBO0FIMkhKOztBR2xIRTtFQTZCQSx5QkFBQTtFQUNBLGtDQUFBO0VBNUJFLG9CQUFBO0FIc0hKOztBRzVHRSwyQ0FBQSxJQUFBLEVBQUE7QUFDQSx5Q0FBQSxJQUFBLEVBQUE7QUFFQTtFQUVFLCtDQUFBO0FINkdKOztBRzFHRTtFQUVFLDZDQUFBO0FINEdKOztBSTFJRTtFQUNFLGtCQUFBO0FKNklKO0FJM0lJO0VDaEJGLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFRGNJLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpREFBQTtFQUNBLHdKQUFBO0VBWUEsNERBQUE7QUpzSU47QUk5SEk7RUFDRSxXQUFBO0FKZ0lOOztBQ3RGTTtFRzVCQSxvQ0FBQTtBSnNITjs7QUlqS0U7RUFDRSxrQkFBQTtBSm9LSjtBSWxLSTtFQ2hCRixNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RURjSSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EscURBQUE7RUFDQSxvS0FBQTtFQVlBLGdFQUFBO0FKNkpOO0FJckpJO0VBQ0UsV0FBQTtBSnVKTjs7QUM3R007RUc1QkEsd0NBQUE7QUo2SU47O0FNbkxJO0VDMERBLDhEQUFBO0VBQUEseUNBQUE7QVA4SEo7O0FBeE1BO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBR0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQXlNRjs7QUF4TEU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFiRixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQXlNRjs7QUEzTEU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkF2Qk07RUFHUixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQW1ORjs7QUE5TEU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkE5Qk07RUFHUixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQTZORjs7QUFyTkU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFiRixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQXNPRjtBQXhORTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkF2Qk07RUFHUixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQStPRjtBQTFORTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQTlCTTtFQUdSLGlCQUhRO0VBSVIsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBd1BGOztBQWhQRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFiRixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQWlRRjtBQW5QRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkF2Qk07RUFHUixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQTBRRjtBQXJQRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkE5Qk07RUFHUixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQW1SRjs7QUEzUUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFiRixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQTRSRjtBQTlRRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkF2Qk07RUFHUixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQXFTRjtBQWhSRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQTlCTTtFQUdSLGlCQUhRO0VBSVIsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBOFNGOztBQXRTRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQWJGLGlCQUhRO0VBSVIsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBdVRGO0FBelNFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBdkJNO0VBR1IsaUJBSFE7RUFJUixXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFnVUY7QUEzU0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkE5Qk07RUFHUixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQXlVRjs7QUFqVUU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFiRixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQWtWRjtBQXBVRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQkF2Qk07RUFHUixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQTJWRjtBQXRVRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQTlCTTtFQUdSLGlCQUhRO0VBSVIsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBb1dGOztBQTVWRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQWJGLGlCQUhRO0VBSVIsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBNldGO0FBL1ZFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQXZCTTtFQUdSLGlCQUhRO0VBSVIsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBc1hGO0FBaldFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBOUJNO0VBR1IsaUJBSFE7RUFJUixXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUErWEY7O0FBdlhFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQWJGLGlCQUhRO0VBSVIsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBd1lGO0FBMVhFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBdkJNO0VBR1IsaUJBSFE7RUFJUixXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFpWkY7QUE1WEU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkE5Qk07RUFHUixpQkFIUTtFQUlSLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQTBaRjs7QUFsWEE7RUFDRSx1QkFBQTtFQUNBLGNBQUE7QUFxWEYiLCJzb3VyY2VzQ29udGVudCI6WyJAdXNlICdAYW5ndWxhci9jZGsnO1xuQHVzZSAnLi4vdG9rZW5zL20yL21hdC9yaXBwbGUnIGFzIHRva2Vucy1tYXQtcmlwcGxlO1xuQHVzZSAnLi4vdG9rZW5zL3Rva2VuLXV0aWxzJztcblxuQG1peGluIHJpcHBsZSgpIHtcbiAgLy8gVGhlIGhvc3QgZWxlbWVudCBvZiBhbiBtYXQtcmlwcGxlIGRpcmVjdGl2ZSBzaG91bGQgYWx3YXlzIGhhdmUgYSBwb3NpdGlvbiBvZiBcImFic29sdXRlXCIgb3JcbiAgLy8gXCJyZWxhdGl2ZVwiIHNvIHRoYXQgdGhlIHJpcHBsZXMgaW5zaWRlIGFyZSBjb3JyZWN0bHkgcG9zaXRpb25lZCByZWxhdGl2ZWx5IHRvIHRoZSBjb250YWluZXIuXG4gIC5tYXQtcmlwcGxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgZXZlcnkgcmlwcGxlIGNvbnRhaW5lciBzaG91bGQgaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUgaW4gZmF2b3Igb2YgY3JlYXRpbmcgYW5cbiAgICAvLyBlYXN5IEFQSSBmb3IgZGV2ZWxvcGVycyB1c2luZyB0aGUgTWF0UmlwcGxlIGRpcmVjdGl2ZS5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAvLyBQcm9tb3RlIGNvbnRhaW5lcnMgdGhhdCBoYXZlIHJpcHBsZXMgdG8gYSBuZXcgbGF5ZXIuIFdlIHdhbnQgdG8gdGFyZ2V0IGA6bm90KDplbXB0eSlgLFxuICAgIC8vIGJlY2F1c2Ugd2UgZG9uJ3Qgd2FudCBhbGwgcmlwcGxlIGNvbnRhaW5lcnMgdG8gaGF2ZSB0aGVpciBvd24gbGF5ZXIgc2luY2UgdGhleSdyZSB1c2VkIGluIGFcbiAgICAvLyBsb3Qgb2YgcGxhY2VzIGFuZCB0aGUgbGF5ZXIgaXMgb25seSByZWxldmFudCB3aGlsZSBhbmltYXRpbmcuIE5vdGUgdGhhdCBpZGVhbGx5IHdlJ2QgdXNlXG4gICAgLy8gdGhlIGBjb250YWluYCBwcm9wZXJ0eSBoZXJlIChzZWUgIzEzMTc1KSwgYmVjYXVzZSBgOmVtcHR5YCBjYW4gYmUgYnJva2VuIGJ5IGhhdmluZyBleHRyYVxuICAgIC8vIHRleHQgaW5zaWRlIHRoZSBlbGVtZW50LCBidXQgaXQgaXNuJ3QgdmVyeSB3ZWxsIHN1cHBvcnRlZCB5ZXQuXG4gICAgJjpub3QoOmVtcHR5KSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWQge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybSAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG5cbiAgICAvLyBXZSB1c2UgYSAzZCB0cmFuc2Zvcm0gaGVyZSBpbiBvcmRlciB0byBhdm9pZCBhbiBpc3N1ZSBpbiBTYWZhcmkgd2hlcmVcbiAgICAvLyB0aGUgcmlwcGxlcyBhcmVuJ3QgY2xpcHBlZCB3aGVuIGluc2lkZSB0aGUgc2hhZG93IERPTSAoc2VlICMyNDAyOCkuXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAsIDAsIDApO1xuXG4gICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMudXNlLXRva2VucyhcbiAgICAgIHRva2Vucy1tYXQtcmlwcGxlLiRwcmVmaXgsIHRva2Vucy1tYXQtcmlwcGxlLmdldC10b2tlbi1zbG90cygpKSB7XG4gICAgICAvLyBXZSBoYXZlIHRvIGVtaXQgYSBmYWxsYmFjayB2YWx1ZSBoZXJlLCBiZWNhdXNlIHNvbWUgaW50ZXJuYWwgYnVpbGRzIGRlcGVuZCBvbiBpdC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigje3Rva2VuLXV0aWxzLmdldC10b2tlbi12YXJpYWJsZShjb2xvcil9LCByZ2JhKCMwMDAsIDAuMSkpO1xuICAgIH1cblxuICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmlwcGxlIGlzIG9wYXF1ZSwgY2F1c2luZyBpdCB0byBvYnN0cnVjdCB0aGUgY29udGVudC5cbiAgICBAaW5jbHVkZSBjZGsuaGlnaC1jb250cmFzdChhY3RpdmUsIG9mZikge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcclxuQHVzZSAnQGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcclxuQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy9zdHlsZXMvdGhlbWVzX3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uYm94IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbiAgLy9kaXNwbGF5OiBibG9jaztcclxuICAvL2xpbmUtaGVpZ2h0OiAzMDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuJGZ3ZWlndGg6IGJvbGQ7XHJcblxyXG5AbWl4aW4gY29tbW9uKCkge1xyXG4gIGZvbnQtd2VpZ2h0OiAkZndlaWd0aDtcclxuICBtYXJnaW46IDFlbTtcclxuICBwYWRkaW5nOiAwLjVlbTtcclxuICB3aWR0aDogMzBlbTtcclxufVxyXG5cclxuQG1peGluIG1hdGgtdGhlbWUoJHRoZW1lKSB7XHJcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcclxuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcclxuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xyXG5cclxuICAucHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xyXG4gICAgQGluY2x1ZGUgY29tbW9uKCk7IFxyXG4gIH1cclxuXHJcbiAgLmFjY2VudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50KTtcclxuICAgIGNvbG9yOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkYWNjZW50LCBkZWZhdWx0LWNvbnRyYXN0KTtcclxuICAgIGZvbnQtd2VpZ2h0OiAkZndlaWd0aDtcclxuICAgIEBpbmNsdWRlIGNvbW1vbigpOyBcclxuICB9XHJcblxyXG4gIC53YXJuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR3YXJuKTtcclxuICAgIGNvbG9yOiBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkd2FybiwgZGVmYXVsdC1jb250cmFzdCk7XHJcbiAgICBmb250LXdlaWdodDogJGZ3ZWlndGg7XHJcbiAgICBAaW5jbHVkZSBjb21tb24oKTsgXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5AZWFjaCAkdGhjbGFzcywgJHRoIGluICRhbGxfdGhlbWVzIHtcclxuICBAaWYgJHRoY2xhc3MgPT0gXCJcIiB7XHJcbiAgICBAaW5jbHVkZSBtYXRoLXRoZW1lKCR0aCk7XHJcbiAgfSBAZWxzZSB7XHJcbiAgICA6aG9zdC1jb250ZXh0KC4jeyR0aGNsYXNzfSkge1xyXG4gICAgICBAaW5jbHVkZSBtYXRoLXRoZW1lKCR0aCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZm9jdXNJbmRpY2F0b3Ige1xyXG4gIGJvcmRlciA6IHNvbGlkIDFweCBncmVlbjtcclxuICBtYXJnaW4gOiAwIDEwcHhcclxufSIsIi8vLyBFbWl0cyBhIENTUyBjbGFzcywgYC5jZGstdmlzdWFsbHktaGlkZGVuYC4gVGhpcyBjbGFzcyBjYW4gYmUgYXBwbGllZCB0byBhbiBlbGVtZW50XG4vLy8gdG8gbWFrZSB0aGF0IGVsZW1lbnQgdmlzdWFsbHkgaGlkZGVuIHdoaWxlIHJlbWFpbmluZyBhdmFpbGFibGUgdG8gYXNzaXN0aXZlIHRlY2hub2xvZ3kuXG5AbWl4aW4gYTExeS12aXN1YWxseS1oaWRkZW4oKSB7XG4gIC5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgICBib3JkZXI6IDA7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4O1xuXG4gICAgLy8gVGhpcyB3b3JrcyBhcm91bmQgYSBDaHJvbWUgYnVnIHRoYXQgY2FuIGNhdXNlIHRoZSB0YWIgdG8gY3Jhc2ggd2hlbiBsYXJnZSBhbW91bnRzIG9mXG4gICAgLy8gbm9uLUVuZ2xpc2ggdGV4dCBnZXQgd3JhcHBlZDogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTIwMTQ0NFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG5cbiAgICAvLyBXZSBuZWVkIGF0IGxlYXN0IG9uZSBvZiB0b3AvYm90dG9tL2xlZnQvcmlnaHQgaW4gb3JkZXIgdG8gcHJldmVudCBjYXNlcyB3aGVyZSB0aGVcbiAgICAvLyBhYnNvbHV0ZS1wb3NpdGlvbmVkIGVsZW1lbnQgaXMgcHVzaGVkIGRvd24gYW5kIGNhbiBhZmZlY3Qgc2Nyb2xsaW5nIChzZWUgIzI0NTk3KS5cbiAgICAvLyBgbGVmdGAgd2FzIGNob3NlbiBoZXJlLCBiZWNhdXNlIGl0J3MgdGhlIGxlYXN0IGxpa2VseSB0byBicmVhayBvdmVycmlkZXMgd2hlcmUgdGhlXG4gICAgLy8gZWxlbWVudCBtaWdodCBoYXZlIGJlZW4gcG9zaXRpb25lZCAoZS5nLiBgbWF0LWNoZWNrYm94YCkuXG4gICAgbGVmdDogMDtcblxuICAgIFtkaXI9J3J0bCddICYge1xuICAgICAgbGVmdDogYXV0bztcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuXG4vLy8gQGRlcHJlY2F0ZWQgVXNlIGBhMTF5LXZpc3VhbGx5LWhpZGRlbmAuXG5AbWl4aW4gYTExeSgpIHtcbiAgQGluY2x1ZGUgYTExeS12aXN1YWxseS1oaWRkZW47XG59XG5cbi8vLyBFbWl0cyB0aGUgbWl4aW4ncyBjb250ZW50IG5lc3RlZCB1bmRlciBgJHNlbGVjdG9yLWNvbnRleHRgIGlmIGAkc2VsZWN0b3ItY29udGV4dGBcbi8vLyBpcyBub24tZW1wdHkuXG4vLy8gQHBhcmFtIHtTdHJpbmd9IHNlbGVjdG9yLWNvbnRleHQgVGhlIHNlbGVjdG9yIHVuZGVyIHdoaWNoIHRvIG5lc3QgdGhlIG1peGluJ3MgY29udGVudC5cbkBtaXhpbiBfb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgQGlmICgkc2VsZWN0b3ItY29udGV4dCA9PSAnJykge1xuICAgIEBjb250ZW50O1xuICB9XG4gIEBlbHNlIHtcbiAgICAjeyRzZWxlY3Rvci1jb250ZXh0fSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8vIEFwcGxpZXMgc3R5bGVzIGZvciB1c2VycyBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuIE5vdGUgdGhhdCB0aGlzIG9ubHkgYXBwbGllc1xuLy8vIHRvIE1pY3Jvc29mdCBicm93c2Vycy4gQ2hyb21lIGNhbiBiZSBpbmNsdWRlZCBieSBjaGVja2luZyBmb3IgdGhlIGBodG1sW2hjXWBcbi8vLyBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSB0YXJnZXQgVHlwZSBvZiBoaWdoIGNvbnRyYXN0IHNldHRpbmcgdG8gdGFyZ2V0LiBEZWZhdWx0cyB0byBgYWN0aXZlYCwgY2FuIGJlXG4vLy8gICAgIGB3aGl0ZS1vbi1ibGFja2Agb3IgYGJsYWNrLW9uLXdoaXRlYC5cbi8vLyBAcGFyYW0ge1N0cmluZ30gZW5jYXBzdWxhdGlvbiBXaGV0aGVyIHRvIGVtaXQgc3R5bGVzIGZvciB2aWV3IGVuY2Fwc3VsYXRpb24uIFZhbHVlcyBhcmU6XG4vLy8gICAgICogYG9uYCAtIHdvcmtzIGZvciBgRW11bGF0ZWRgLCBgTmF0aXZlYCwgYW5kIGBTaGFkb3dEb21gXG4vLy8gICAgICogYG9mZmAgLSB3b3JrcyBmb3IgYE5vbmVgXG4vLy8gICAgICogYGFueWAgLSB3b3JrcyBmb3IgYWxsIGVuY2Fwc3VsYXRpb24gbW9kZXMgYnkgZW1pdHRpbmcgdGhlIENTUyB0d2ljZSAoZGVmYXVsdCkuXG5AbWl4aW4gaGlnaC1jb250cmFzdCgkdGFyZ2V0OiBhY3RpdmUsICRlbmNhcHN1bGF0aW9uOiAnYW55Jykge1xuICBAaWYgKCR0YXJnZXQgIT0gJ2FjdGl2ZScgYW5kICR0YXJnZXQgIT0gJ2JsYWNrLW9uLXdoaXRlJyBhbmQgJHRhcmdldCAhPSAnd2hpdGUtb24tYmxhY2snKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IHZhbHVlIFwiI3skdGFyZ2V0fVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcImFjdGl2ZVwiLCBcImJsYWNrLW9uLXdoaXRlXCIsIGFuZCBcIndoaXRlLW9uLWJsYWNrXCInO1xuICB9XG5cbiAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nIGFuZCAkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ2FueScpIHtcbiAgICBAZXJyb3IgJ1Vua25vd24gY2RrLWhpZ2gtY29udHJhc3QgZW5jYXBzdWxhdGlvbiBcIiN7JGVuY2Fwc3VsYXRpb259XCIgcHJvdmlkZWQuICcgK1xuICAgICAgICAgICAnQWxsb3dlZCB2YWx1ZXMgYXJlIFwib25cIiwgXCJvZmZcIiwgYW5kIFwiYW55XCInO1xuICB9XG5cbiAgLy8gSWYgdGhlIHNlbGVjdG9yIGNvbnRleHQgaGFzIG11bHRpcGxlIHBhcnRzLCBzdWNoIGFzIGAuc2VjdGlvbiwgLnJlZ2lvbmAsIGp1c3QgZG9pbmdcbiAgLy8gYC5jZGstaGlnaC1jb250cmFzdC14eHggI3smfWAgd2lsbCBvbmx5IGFwcGx5IHRoZSBwYXJlbnQgc2VsZWN0b3IgdG8gdGhlIGZpcnN0IHBhcnQgb2YgdGhlXG4gIC8vIGNvbnRleHQuIFdlIGFkZHJlc3MgdGhpcyBieSBuZXN0aW5nIHRoZSBzZWxlY3RvciBjb250ZXh0IHVuZGVyIC5jZGstaGlnaC1jb250cmFzdC5cbiAgQGF0LXJvb3Qge1xuICAgICRzZWxlY3Rvci1jb250ZXh0OiAjeyZ9O1xuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb24nKSB7XG4gICAgICAvLyBOb3RlIHRoYXQgaWYgdGhpcyBzZWxlY3RvciBpcyB1cGRhdGVkLCB0aGUgc2FtZSBjaGFuZ2UgaGFzIHRvIGJlIG1hZGUgaW5zaWRlXG4gICAgICAvLyBgX292ZXJsYXkuc2Nzc2Agd2hpY2ggY2FuJ3QgZGVwZW5kIG9uIHRoaXMgbWl4aW4gZHVlIHRvIHNvbWUgaW5mcmFzdHJ1Y3R1cmUgbGltaXRhdGlvbnMuXG4gICAgICAuY2RrLWhpZ2gtY29udHJhc3QtI3skdGFyZ2V0fSB7XG4gICAgICAgIEBpbmNsdWRlIF9vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQGlmICgkZW5jYXBzdWxhdGlvbiAhPSAnb2ZmJykge1xuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0gOmhvc3Qge1xuICAgICAgICBAaW5jbHVkZSBfb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gV2Ugd2FudCBvdmVybGF5cyB0byBhbHdheXMgYXBwZWFyIG92ZXIgdXNlciBjb250ZW50LCBzbyBzZXQgYSBiYXNlbGluZVxuLy8gdmVyeSBoaWdoIHotaW5kZXggZm9yIHRoZSBvdmVybGF5IGNvbnRhaW5lciwgd2hpY2ggaXMgd2hlcmUgd2UgY3JlYXRlIHRoZSBuZXdcbi8vIHN0YWNraW5nIGNvbnRleHQgZm9yIGFsbCBvdmVybGF5cy5cbiRvdmVybGF5LWNvbnRhaW5lci16LWluZGV4OiAxMDAwICFkZWZhdWx0O1xuJG92ZXJsYXktei1pbmRleDogMTAwMCAhZGVmYXVsdDtcbiRvdmVybGF5LWJhY2tkcm9wLXotaW5kZXg6IDEwMDAgIWRlZmF1bHQ7XG5cbi8vIEJhY2tncm91bmQgY29sb3IgZm9yIGFsbCBvZiB0aGUgYmFja2Ryb3BzXG4kb3ZlcmxheS1iYWNrZHJvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMyKSAhZGVmYXVsdDtcblxuLy8gRGVmYXVsdCBiYWNrZHJvcCBhbmltYXRpb24gaXMgYmFzZWQgb24gdGhlIE1hdGVyaWFsIERlc2lnbiBzd2lmdC1lYXNlLW91dC5cbiRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4vLy8gRW1pdHMgc3RydWN0dXJhbCBzdHlsZXMgcmVxdWlyZWQgZm9yIGNkay9vdmVybGF5IHRvIGZ1bmN0aW9uLlxuQG1peGluIG92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJG92ZXJsYXktY29udGFpbmVyLXotaW5kZXg7XG5cbiAgICAmOmVtcHR5IHtcbiAgICAgIC8vIEhpZGUgdGhlIGVsZW1lbnQgd2hlbiBpdCBkb2Vzbid0IGhhdmUgYW55IGNoaWxkIG5vZGVzLiBUaGlzIGRvZXNuJ3RcbiAgICAgIC8vIGluY2x1ZGUgb3ZlcmxheXMgdGhhdCBoYXZlIGJlZW4gZGV0YWNoZWQsIHJhdGhlciB0aGFuIGRpc3Bvc2VkLlxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAvLyBXZSB1c2UgYW4gZXh0cmEgd3JhcHBlciBlbGVtZW50IGluIG9yZGVyIHRvIHVzZSBtYWtlIHRoZSBvdmVybGF5IGl0c2VsZiBhIGZsZXggaXRlbS5cbiAgLy8gVGhpcyBtYWtlcyBjZW50ZXJpbmcgdGhlIG92ZXJsYXkgZWFzeSB3aXRob3V0IHJ1bm5pbmcgaW50byB0aGUgc3VicGl4ZWwgcmVuZGVyaW5nXG4gIC8vIHByb2JsZW1zIHRpZWQgdG8gdXNpbmcgYHRyYW5zZm9ybWAgYW5kIHdpdGhvdXQgaW50ZXJmZXJpbmcgd2l0aCB0aGUgb3RoZXIgcG9zaXRpb25cbiAgLy8gc3RyYXRlZ2llcy5cbiAgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkb3ZlcmxheS16LWluZGV4O1xuICB9XG5cbiAgLy8gQSBzaW5nbGUgb3ZlcmxheSBwYW5lLlxuICAuY2RrLW92ZXJsYXktcGFuZSB7XG4gICAgLy8gTm90ZTogaXQncyBpbXBvcnRhbnQgZm9yIHRoaXMgb25lIHRvIHN0YXJ0IG9mZiBgYWJzb2x1dGVgLFxuICAgIC8vIGluIG9yZGVyIGZvciB1cyB0byBiZSBhYmxlIHRvIG1lYXN1cmUgaXQgY29ycmVjdGx5LlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHotaW5kZXg6ICRvdmVybGF5LXotaW5kZXg7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkb3ZlcmxheS1iYWNrZHJvcC16LWluZGV4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uICRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgLy8gTm90ZSB0aGF0IHdlIGNhbid0IGltcG9ydCBhbmQgdXNlIHRoZSBgaGlnaC1jb250cmFzdGAgbWl4aW4gZnJvbSBgX2ExMXkuc2Nzc2AsIGJlY2F1c2VcbiAgICAgIC8vIHRoaXMgZmlsZSB3aWxsIGJlIGNvcGllZCB0byB0aGUgdG9wLWxldmVsIGBjZGtgIHBhY2thZ2Ugd2hlbiBwdXR0aW5nIHRvZ2V0aGVyIHRoZSBmaWxlc1xuICAgICAgLy8gZm9yIG5wbS4gQW55IHJlbGF0aXZlIGltcG9ydCBwYXRocyB3ZSB1c2UgaGVyZSB3aWxsIGJlY29tZSBpbnZhbGlkIG9uY2UgdGhlIGZpbGUgaXMgY29waWVkLlxuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LWFjdGl2ZSAmIHtcbiAgICAgICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByZ2JhIGJhY2tncm91bmQgd2lsbCBiZWNvbWUgc29saWRcbiAgICAgICAgLy8gc28gd2UgbmVlZCB0byBmYWxsIGJhY2sgdG8gbWFraW5nIGl0IG9wYXF1ZSB1c2luZyBgb3BhY2l0eWAuXG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogJG92ZXJsYXktYmFja2Ryb3AtY29sb3I7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIERlZmluZSBhIHRyYW5zaXRpb24gb24gdGhlIHZpc2liaWxpdHkgc28gdGhhdCB0aGUgYHRyYW5zaXRpb25lbmRgIGV2ZW50IGNhbiBmaXJlIGltbWVkaWF0ZWx5LlxuICAgIHRyYW5zaXRpb246IHZpc2liaWxpdHkgMW1zIGxpbmVhciwgb3BhY2l0eSAxbXMgbGluZWFyO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBvcGFjaXR5OiAxO1xuXG4gICAgLy8gTm90ZTogYXMgb2YgRmlyZWZveCA1NywgaGF2aW5nIHRoZSBiYWNrZHJvcCBiZSBgYmFja2dyb3VuZDogbm9uZWAgd2lsbCBwcmV2ZW50IGl0IGZyb21cbiAgICAvLyBjYXB0dXJpbmcgdGhlIHVzZXIncyBtb3VzZSBzY3JvbGwgZXZlbnRzLiBTaW5jZSB3ZSBhbHNvIGNhbid0IHVzZSBzb21ldGhpbmcgbGlrZVxuICAgIC8vIGByZ2JhKDAsIDAsIDAsIDApYCwgd2Ugd29yayBhcm91bmQgdGhlIGluY29uc2lzdGVuY3kgYnkgbm90IHNldHRpbmcgdGhlIGJhY2tncm91bmQgYXRcbiAgICAvLyBhbGwgYW5kIHVzaW5nIGBvcGFjaXR5YCB0byBtYWtlIHRoZSBlbGVtZW50IHRyYW5zcGFyZW50LlxuICAgICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gIH1cblxuICAuY2RrLW92ZXJsYXktYmFja2Ryb3Atbm9vcC1hbmltYXRpb24ge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkb3ZlcmxheS16LWluZGV4O1xuXG4gICAgLy8gV2UgdXNlIGBkaXNwbGF5OiBmbGV4YCBvbiB0aGlzIGVsZW1lbnQgZXhjbHVzaXZlbHkgZm9yIGNlbnRlcmluZyBjb25uZWN0ZWQgb3ZlcmxheXMuXG4gICAgLy8gV2hlbiAqbm90KiBjZW50ZXJpbmcsIGEgdG9wL2xlZnQvYm90dG9tL3JpZ2h0IHdpbGwgYmUgc2V0IHdoaWNoIG92ZXJyaWRlcyB0aGUgbm9ybWFsXG4gICAgLy8gZmxleCBsYXlvdXQuXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8vIFdlIHVzZSB0aGUgYGNvbHVtbmAgZGlyZWN0aW9uIGhlcmUgdG8gYXZvaWQgc29tZSBmbGV4Ym94IGlzc3VlcyBpbiBFZGdlXG4gICAgLy8gd2hlbiB1c2luZyB0aGUgXCJncm93IGFmdGVyIG9wZW5cIiBvcHRpb25zLlxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAvLyBBZGQgc29tZSBkaW1lbnNpb25zIHNvIHRoZSBlbGVtZW50IGhhcyBhbiBgaW5uZXJUZXh0YCB3aGljaCBzb21lIHBlb3BsZSBkZXBlbmQgb24gaW4gdGVzdHMuXG4gICAgbWluLXdpZHRoOiAxcHg7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICB9XG5cbiAgLy8gVXNlZCB3aGVuIGRpc2FibGluZyBnbG9iYWwgc2Nyb2xsaW5nLlxuICAuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgLy8gTmVjZXNzYXJ5IGZvciB0aGUgY29udGVudCBub3QgdG8gbG9zZSBpdHMgd2lkdGguIE5vdGUgdGhhdCB3ZSdyZSB1c2luZyAxMDAlLCBpbnN0ZWFkIG9mXG4gICAgLy8gMTAwdncsIGJlY2F1c2UgMTAwdncgaW5jbHVkZXMgdGhlIHdpZHRoIHBsdXMgdGhlIHNjcm9sbGJhciwgd2hlcmVhcyAxMDAlIGlzIHRoZSB3aWR0aFxuICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgaGFkIGJlZm9yZSB3ZSBtYWRlIGl0IGBmaXhlZGAuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAvLyBOb3RlOiB0aGlzIHdpbGwgYWx3YXlzIGFkZCBhIHNjcm9sbGJhciB0byB3aGF0ZXZlciBlbGVtZW50IGl0IGlzIG9uLCB3aGljaCBjYW5cbiAgICAvLyBwb3RlbnRpYWxseSByZXN1bHQgaW4gZG91YmxlIHNjcm9sbGJhcnMuIEl0IHNob3VsZG4ndCBiZSBhbiBpc3N1ZSwgYmVjYXVzZSB3ZSB3b24ndFxuICAgIC8vIGJsb2NrIHNjcm9sbGluZyBvbiBhIHBhZ2UgdGhhdCBkb2Vzbid0IGhhdmUgYSBzY3JvbGxiYXIgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuIiwiLy8gU3RydWN0dXJhbCBzdHlsZXMgZm9yIHRoZSBhdXRvc2l6ZSB0ZXh0IGZpZWxkcy5cbkBtaXhpbiB0ZXh0LWZpZWxkLWF1dG9zaXplKCkge1xuICAvLyBSZW1vdmUgdGhlIHJlc2l6ZSBoYW5kbGUgb24gYXV0b3NpemluZyB0ZXh0YXJlYXMsIGJlY2F1c2Ugd2hhdGV2ZXIgaGVpZ2h0XG4gIC8vIHRoZSB1c2VyIHJlc2l6ZWQgdG8gd2lsbCBiZSBvdmVyd3JpdHRlbiBvbmNlIHRoZXkgc3RhcnQgdHlwaW5nIGFnYWluLlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICAgIHJlc2l6ZTogbm9uZTtcbiAgfVxuXG4gIC8vIFRoaXMgY2xhc3MgaXMgdGVtcG9yYXJpbHkgYXBwbGllZCB0byB0aGUgdGV4dGFyZWEgd2hlbiBpdCBpcyBiZWluZyBtZWFzdXJlZC4gSXQgaXMgaW1tZWRpYXRlbHlcbiAgLy8gcmVtb3ZlZCB3aGVuIG1lYXN1cmluZyBpcyBjb21wbGV0ZS4gV2UgdXNlIGAhaW1wb3J0YW50YCBydWxlcyBoZXJlIHRvIG1ha2Ugc3VyZSB1c2VyLXNwZWNpZmllZFxuICAvLyBydWxlcyBkbyBub3QgaW50ZXJmZXJlIHdpdGggdGhlIG1lYXN1cmVtZW50LlxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgICBAaW5jbHVkZSBfYXV0b3NpemUtbWVhc3VyaW5nLWJhc2U7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB9XG5cbiAgLy8gU2ltaWxhciB0byB0aGUgYGNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmdgIGNsYXNzLCBidXQgb25seSBhcHBsaWVkIG9uIEZpcmVmb3guIFdlIG5lZWRcbiAgLy8gdG8gdXNlIHRoaXMgY2xhc3MsIGJlY2F1c2UgRmlyZWZveCBoYXMgYSBidWcgd2hlcmUgY2hhbmdpbmcgdGhlIGBvdmVyZmxvd2AgYnJlYWtzIHRoZSB1c2VyJ3NcbiAgLy8gYWJpbGl0eSB0byB1bmRvL3JlZG8gd2hhdCB0aGV5IHdlcmUgdHlwaW5nIChzZWUgIzE2NjI5KS4gVGhpcyBjbGFzcyBpcyBvbmx5IHNjb3BlZCB0byBGaXJlZm94LFxuICAvLyBiZWNhdXNlIHRoZSBtZWFzdXJlbWVudHMgdGhlcmUgZG9uJ3Qgc2VlbSB0byBiZSBhZmZlY3RlZCBieSB0aGUgYGhlaWdodDogMGAsIHdoZXJlYXMgb24gb3RoZXJcbiAgLy8gYnJvd3NlcnMgdGhleSBhcmUsIGUuZy4gQ2hyb21lIGRldGVjdHMgbG9uZ2VyIHRleHQgYW5kIElFIGRvZXMndCByZXNpemUgYmFjayB0byBub3JtYWwuXG4gIC8vIElkZW50aWNhbCBpc3N1ZSByZXBvcnQ6IGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQ0ODc4NFxuICB0ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nLWZpcmVmb3gge1xuICAgIEBpbmNsdWRlIF9hdXRvc2l6ZS1tZWFzdXJpbmctYmFzZTtcbiAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGVuYWJsZSBtb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIG9mIHRleHQgZmllbGRzLlxuQG1peGluIHRleHQtZmllbGQtYXV0b2ZpbGwoKSB7XG4gIC8vIEtleWZyYW1lcyB0aGF0IGFwcGx5IG5vIHN0eWxlcywgYnV0IGFsbG93IHVzIHRvIG1vbml0b3Igd2hlbiBhbiB0ZXh0IGZpZWxkIGJlY29tZXMgYXV0b2ZpbGxlZFxuICAvLyBieSB3YXRjaGluZyBmb3IgdGhlIGFuaW1hdGlvbiBldmVudHMgdGhhdCBhcmUgZmlyZWQgd2hlbiB0aGV5IHN0YXJ0LiBOb3RlOiB0aGUgLyohKi8gY29tbWVudCBpc1xuICAvLyBuZWVkZWQgdG8gcHJldmVudCBMaWJTYXNzIGZyb20gc3RyaXBwaW5nIHRoZSBrZXlmcmFtZXMgb3V0LlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7LyohKi99XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsvKiEqL31cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIC8vIFNpbmNlIENocm9tZSA4MCB3ZSBuZWVkIGEgMW1zIGRlbGF5LCBvciB0aGUgYW5pbWF0aW9uc3RhcnQgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtcztcbiAgfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXksIG9yIHRoZSBhbmltYXRpb25zdGFydCBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIDBzIDFtcztcbiAgfVxufVxuXG5AbWl4aW4gX2F1dG9zaXplLW1lYXN1cmluZy1iYXNlIHtcbiAgLy8gSGF2aW5nIDJweCB0b3AgYW5kIGJvdHRvbSBwYWRkaW5nIHNlZW1zIHRvIGZpeCBhIGJ1ZyB3aGVyZSBDaHJvbWUgZ2V0cyBhbiBpbmNvcnJlY3RcbiAgLy8gbWVhc3VyZW1lbnQuIFdlIGp1c3QgaGF2ZSB0byBhY2NvdW50IGZvciBpdCBsYXRlciBhbmQgc3VidHJhY3QgaXQgb2ZmIHRoZSBmaW5hbCByZXN1bHQuXG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7XG59XG5cbi8vIFVzZWQgdG8gZ2VuZXJhdGUgVUlEcyBmb3Iga2V5ZnJhbWVzIHVzZWQgdG8gY2hhbmdlIHRoZSB0ZXh0IGZpZWxkIGF1dG9maWxsIHN0eWxlcy5cbiRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogMDtcblxuLy8gTWl4aW4gdXNlZCB0byBhcHBseSBjdXN0b20gYmFja2dyb3VuZCBhbmQgZm9yZWdyb3VuZCBjb2xvcnMgdG8gYW4gYXV0b2ZpbGxlZCB0ZXh0IGZpZWxkLlxuLy8gQmFzZWQgb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3ODE1NDkvXG4vLyByZW1vdmluZy1pbnB1dC1iYWNrZ3JvdW5kLWNvbG91ci1mb3ItY2hyb21lLWF1dG9jb21wbGV0ZSNhbnN3ZXItMzc0MzIyNjBcbkBtaXhpbiB0ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yKCRiYWNrZ3JvdW5kLCAkZm9yZWdyb3VuZDonJykge1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSB7XG4gICAgdG8ge1xuICAgICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgICBAaWYgJGZvcmVncm91bmQgIT0gJycgeyBjb2xvcjogJGZvcmVncm91bmQ7IH1cbiAgICB9XG4gIH1cblxuICAmOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IGJvdGg7XG4gIH1cblxuICAmLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSBmb3IgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQsIG9yIHRoZSBhbmltYXRpb25zdGFydFxuICAgIC8vIGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXMsXG4gICAgICAgICAgICAgICBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0gYm90aDtcbiAgfVxuXG4gICRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogJGF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50ICsgMSAhZ2xvYmFsO1xufVxuXG4vLyBAZGVwcmVjYXRlZCBVc2UgYGF1dG9zaXplYCBhbmQgYGF1dG9maWxsYCBpbnN0ZWFkLlxuQG1peGluIHRleHQtZmllbGQge1xuICBAaW5jbHVkZSB0ZXh0LWZpZWxkLWF1dG9zaXplKCk7XG4gIEBpbmNsdWRlIHRleHQtZmllbGQtYXV0b2ZpbGwoKTtcbn1cbiIsIkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICdAYW5ndWxhci9jZGsnO1xuQHVzZSAnLi4vc3R5bGUvbGF5b3V0LWNvbW1vbic7XG5AdXNlICcuLi90aGVtaW5nL3RoZW1pbmcnO1xuQHVzZSAnLi4vdGhlbWluZy9pbnNwZWN0aW9uJztcblxuLy8gUHJpdmF0ZSBzYXNzIHZhcmlhYmxlcyB0aGF0IHdpbGwgYmUgdXNlZCBhcyByZWZlcmVuY2UgdGhyb3VnaG91dCBjb21wb25lbnQgc3R5bGVzaGVldHMuXG4kZGVmYXVsdC1ib3JkZXItd2lkdGg6IDNweDtcbiRkZWZhdWx0LWJvcmRlci1zdHlsZTogc29saWQ7XG4kZGVmYXVsdC1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuJGRlZmF1bHQtYm9yZGVyLXJhZGl1czogNHB4O1xuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgdGhlIGZvY3VzIGluZGljYXRvciBzdHJ1Y3R1cmFsIHN0eWxlcy5cbkBtaXhpbiBzdHJ1Y3R1cmFsLXN0eWxpbmcoJHByZWZpeCkge1xuICAuI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3Ige1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICBAaW5jbHVkZSBsYXlvdXQtY29tbW9uLmZpbGwoKTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGRpc3BsYXk6IHZhcigtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXksIG5vbmUpOyAvLyBIaWRlIHRoZSBpbmRpY2F0b3IgYnkgZGVmYXVsdC5cbiAgICAgIGJvcmRlcjogdmFyKFxuICAgICAgICAgIC0tI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoLFxuICAgICAgICAgICN7JGRlZmF1bHQtYm9yZGVyLXdpZHRofVxuICAgICAgICApXG4gICAgICAgIHZhcihcbiAgICAgICAgICAtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1zdHlsZSxcbiAgICAgICAgICAjeyRkZWZhdWx0LWJvcmRlci1zdHlsZX1cbiAgICAgICAgKVxuICAgICAgICB2YXIoXG4gICAgICAgICAgLS0jeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItY29sb3IsXG4gICAgICAgICAgI3skZGVmYXVsdC1ib3JkZXItY29sb3J9XG4gICAgICAgICk7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoXG4gICAgICAgIC0tI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1cyxcbiAgICAgICAgI3skZGVmYXVsdC1ib3JkZXItcmFkaXVzfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBCeSBkZWZhdWx0LCByZW5kZXIgdGhlIGZvY3VzIGluZGljYXRvciB3aGVuIHRoZSBmb2N1cyBpbmRpY2F0b3IgaG9zdCBlbGVtZW50IHRha2VzIGZvY3VzLlxuICAgIC8vIERlZmluaW5nIGEgcHNldWRvIGVsZW1lbnQncyBjb250ZW50IHdpbGwgY2F1c2UgaXQgdG8gcmVuZGVyLlxuICAgICY6Zm9jdXM6OmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICB9XG4gIH1cblxuICAvLyBFbmFibGUgdGhlIGluZGljYXRvciBpbiBoaWdoIGNvbnRyYXN0IG1vZGUuXG4gIEBpbmNsdWRlIGNkay5oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKGRpc3BsYXk6IGJsb2NrKSwgJHByZWZpeCk7XG4gIH1cbn1cblxuLy8gR2VuZXJhdGVzIENTUyB2YXJpYWJsZSBkZWNsYXJhdGlvbnMgZnJvbSBhIG1hcC5cbkBtaXhpbiBfb3V0cHV0LXZhcmlhYmxlcygkbWFwKSB7XG4gIEBlYWNoICRrZXksICR2YWx1ZSBpbiAkbWFwIHtcbiAgICBAaWYgKCR2YWx1ZSkge1xuICAgICAgLS0jeyRrZXl9OiAjeyR2YWx1ZX07XG4gICAgfVxuICB9XG59XG5cbi8vIE1peGluIHRoYXQgZGVkdXBzIENTUyB2YXJpYWJsZXMgZm9yIHRoZSBzdHJvbmctZm9jdXMtaW5kaWNhdG9ycyBtaXhpbi5cbkBtaXhpbiBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnLCAkcHJlZml4KSB7XG4gICRib3JkZXItc3R5bGU6IG1hcC5nZXQoJGNvbmZpZywgYm9yZGVyLXN0eWxlKTtcbiAgJGJvcmRlci13aWR0aDogbWFwLmdldCgkY29uZmlnLCBib3JkZXItd2lkdGgpO1xuICAkYm9yZGVyLXJhZGl1czogbWFwLmdldCgkY29uZmlnLCBib3JkZXItcmFkaXVzKTtcbiAgJGJvcmRlci1jb2xvcjogbWFwLmdldCgkY29uZmlnLCBib3JkZXItY29sb3IpO1xuICAkZGlzcGxheTogbWFwLmdldCgkY29uZmlnLCBkaXNwbGF5KTtcbiAgJG1hcDogKFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItc3R5bGUnOiAkYm9yZGVyLXN0eWxlLFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItd2lkdGgnOiAkYm9yZGVyLXdpZHRoLFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItcmFkaXVzJzogJGJvcmRlci1yYWRpdXMsXG4gICAgJyN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1jb2xvcic6ICRib3JkZXItY29sb3IsXG4gICAgJyN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWRpc3BsYXknOiAkZGlzcGxheSxcbiAgKTtcblxuICBAaWYgKCYpIHtcbiAgICBAaW5jbHVkZSBfb3V0cHV0LXZhcmlhYmxlcygkbWFwKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgLy8gV2UgdXNlIGBodG1sYCBoZXJlIGluc3RlYWQgb2YgYDpyb290YCwgYmVjYXVzZSB0aGVcbiAgICAvLyBsYXR0ZXIgY2F1c2VzIHNvbWUgaXNzdWVzIHdpdGggaW50ZXJuYWwgdG9vbGluZy5cbiAgICBodG1sIHtcbiAgICAgIEBpbmNsdWRlIF9vdXRwdXQtdmFyaWFibGVzKCRtYXApO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gc3Ryb25nLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZzogKCkpIHtcbiAgLy8gRGVmYXVsdCBmb2N1cyBpbmRpY2F0b3IgY29uZmlnLlxuICAkZGVmYXVsdC1jb25maWc6IChcbiAgICAgIGJvcmRlci1jb2xvcjogYmxhY2ssXG4gICAgICBkaXNwbGF5OiBibG9jayxcbiAgKTtcblxuICAvLyBNZXJnZSBkZWZhdWx0IGNvbmZpZyB3aXRoIHVzZXIgY29uZmlnLlxuICAkY29uZmlnOiBtYXAubWVyZ2UoJGRlZmF1bHQtY29uZmlnLCAkY29uZmlnKTtcblxuICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnLCAnbWF0Jyk7XG59XG5cbkBtaXhpbiBtZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZzogKCkpIHtcbiAgLy8gRGVmYXVsdCBmb2N1cyBpbmRpY2F0b3IgY29uZmlnLlxuICAkZGVmYXVsdC1jb25maWc6IChcbiAgICAgIGJvcmRlci1jb2xvcjogYmxhY2ssXG4gICAgICBkaXNwbGF5OiBibG9jayxcbiAgKTtcblxuICAvLyBNZXJnZSBkZWZhdWx0IGNvbmZpZyB3aXRoIHVzZXIgY29uZmlnLlxuICAkY29uZmlnOiBtYXAubWVyZ2UoJGRlZmF1bHQtY29uZmlnLCAkY29uZmlnKTtcblxuICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnLCAnbWF0LW1kYycpO1xufVxuXG5AbWl4aW4gc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHRoZW1lLW9yLWNvbG9yKSA9PSAnY29sb3InIHtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLW9yLWNvbG9yXG4gICAgKSwgJ21hdCcpO1xuICB9XG4gIEBlbHNlIHtcbiAgICAkYm9yZGVyLWNvbG9yOiBpbnNwZWN0aW9uLmdldC10aGVtZS1jb2xvcigkdGhlbWUtb3ItY29sb3IsIHByaW1hcnkpO1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yXG4gICAgKSwgJ21hdCcpO1xuICB9XG59XG5cbkBtaXhpbiBzdHJvbmctZm9jdXMtaW5kaWNhdG9ycy10aGVtZSgkdGhlbWUtb3ItY29sb3IpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdGhlbWUtb3ItY29sb3IpID09ICdjb2xvcicge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtb3ItY29sb3JcbiAgICApLCAnbWF0Jyk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKCR0aGVtZS1vci1jb2xvciwgJ21hdC1mb2N1cy1pbmRpY2F0b3JzJykge1xuICAgICAgQGlmIGluc3BlY3Rpb24udGhlbWUtaGFzKCR0aGVtZS1vci1jb2xvciwgY29sb3IpIHtcbiAgICAgICAgQGluY2x1ZGUgc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1kYy1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1jb2xvcigkdGhlbWUtb3ItY29sb3IpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdGhlbWUtb3ItY29sb3IpID09ICdjb2xvcicge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtb3ItY29sb3JcbiAgICApLCAnbWF0LW1kYycpO1xuICB9XG4gIEBlbHNlIHtcbiAgICAkYm9yZGVyLWNvbG9yOiBpbnNwZWN0aW9uLmdldC10aGVtZS1jb2xvcigkdGhlbWUtb3ItY29sb3IsIHByaW1hcnkpO1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYm9yZGVyLWNvbG9yXG4gICAgKSwgJ21hdC1tZGMnKTtcbiAgfVxufVxuXG5AbWl4aW4gbWRjLXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLXRoZW1lKCR0aGVtZS1vci1jb2xvcikge1xuICBAaWYgbWV0YS50eXBlLW9mKCR0aGVtZS1vci1jb2xvcikgPT0gJ2NvbG9yJyB7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKFxuICAgICAgICBib3JkZXItY29sb3I6ICR0aGVtZS1vci1jb2xvclxuICAgICksICdtYXQtbWRjJyk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIEBpbmNsdWRlIHRoZW1pbmcucHJpdmF0ZS1jaGVjay1kdXBsaWNhdGUtdGhlbWUtc3R5bGVzKFxuICAgICAgICAkdGhlbWUtb3ItY29sb3IsICdtYXQtbWRjLWZvY3VzLWluZGljYXRvcnMnKSB7XG4gICAgICBAaWYgaW5zcGVjdGlvbi50aGVtZS1oYXMoJHRoZW1lLW9yLWNvbG9yLCBjb2xvcikge1xuICAgICAgICBAaW5jbHVkZSBtZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoaXMgbWl4aW4gZW5zdXJlcyBhbiBlbGVtZW50IHNwYW5zIHRvIGZpbGwgdGhlIG5lYXJlc3QgYW5jZXN0b3Igd2l0aCBkZWZpbmVkIHBvc2l0aW9uaW5nLlxuQG1peGluIGZpbGwge1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiIsIkB1c2UgJ0Bhbmd1bGFyL2Nkayc7XG5AdXNlICcuL3Rva2Vucy9tMi9tYXQvYXBwJyBhcyB0b2tlbnMtbWF0LWFwcDtcbkB1c2UgJy4vdG9rZW5zL3Rva2VuLXV0aWxzJztcbkB1c2UgJy4vcmlwcGxlL3JpcHBsZSc7XG5AdXNlICcuL2ZvY3VzLWluZGljYXRvcnMvcHJpdmF0ZSc7XG5AdXNlICcuL21kYy1oZWxwZXJzL21kYy1oZWxwZXJzJztcblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIGFsbCBvZiB0aGUgY29yZSBzdHlsZXMgdGhhdCBhcmUgbm90IHRoZW1lLWRlcGVuZGVudC5cbkBtaXhpbiBjb3JlKCkge1xuICBAaW5jbHVkZSByaXBwbGUucmlwcGxlKCk7XG4gIEBpbmNsdWRlIGNkay5hMTF5LXZpc3VhbGx5LWhpZGRlbigpO1xuICBAaW5jbHVkZSBjZGsub3ZlcmxheSgpO1xuICBAaW5jbHVkZSBjZGsudGV4dC1maWVsZC1hdXRvc2l6ZSgpO1xuICBAaW5jbHVkZSBjZGsudGV4dC1maWVsZC1hdXRvZmlsbCgpO1xuICBAaW5jbHVkZSBwcml2YXRlLnN0cnVjdHVyYWwtc3R5bGluZygnbWF0Jyk7XG4gIEBpbmNsdWRlIHByaXZhdGUuc3RydWN0dXJhbC1zdHlsaW5nKCdtYXQtbWRjJyk7XG5cbiAgLy8gV3JhcHBlciBlbGVtZW50IHRoYXQgcHJvdmlkZXMgdGhlIHRoZW1lIGJhY2tncm91bmQgd2hlbiB0aGVcbiAgLy8gdXNlcidzIGNvbnRlbnQgaXNuJ3QgaW5zaWRlIG9mIGEgYG1hdC1zaWRlbmF2LWNvbnRhaW5lcmAuXG4gIEBhdC1yb290IHtcbiAgICAubWF0LWFwcC1iYWNrZ3JvdW5kIHtcbiAgICAgIEBpbmNsdWRlIG1kYy1oZWxwZXJzLmRpc2FibGUtbWRjLWZhbGxiYWNrLWRlY2xhcmF0aW9ucyB7XG4gICAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLnVzZS10b2tlbnModG9rZW5zLW1hdC1hcHAuJHByZWZpeCwgdG9rZW5zLW1hdC1hcHAuZ2V0LXRva2VuLXNsb3RzKCkpIHtcbiAgICAgICAgICAvLyBOb3RlOiB3ZSBuZWVkIHRvIGVtaXQgZmFsbGJhY2sgdmFsdWVzIGhlcmUgdG8gYXZvaWQgZXJyb3JzIGluIGludGVybmFsIGJ1aWxkcy5cbiAgICAgICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tc2xvdChiYWNrZ3JvdW5kLWNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc3BhcmVudCk7XG4gICAgICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXNsb3QoY29sb3IsIHRleHQtY29sb3IsIGluaGVyaXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvL1xuLy8gQ29weXJpZ2h0IDIwMjAgR29vZ2xlIEluYy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4vLyBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4vLyBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4vLyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4vLyBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbi8vIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbi8vIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1Jcbi8vIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuLy8gRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4vLyBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4vLyBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuLy8gT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuLy8gVEhFIFNPRlRXQVJFLlxuLy9cblxuQHVzZSAnc2FzczpsaXN0JztcbkB1c2UgJ3Nhc3M6bWFwJztcbkB1c2UgJ3Nhc3M6bWV0YSc7XG5AdXNlICcuL2dzcyc7XG5cbi8vLyBXaGVuIHRydWUsIGFkZCBhbiBhZGRpdGlvbmFsIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uIGJlZm9yZSBkZWNsYXJhdGlvbnNcbi8vLyB0aGF0IHVzZSBhZHZhbmNlZCBmZWF0dXJlcyBzdWNoIGFzIGN1c3RvbSBwcm9wZXJ0aWVzIG9yIENTUyBmdW5jdGlvbnMuIFRoaXNcbi8vLyBhZGRzIGZhbGxiYWNrIHN1cHBvcnQgZm9yIG9sZGVyIGJyb3dzZXJzIHN1Y2ggYXMgSUUxMSB0aGF0IGRvIG5vdCBzdXBwb3J0XG4vLy8gdGhlc2UgZmVhdHVyZXMgYXQgdGhlIGNvc3Qgb2YgYWRkaXRpb25hbCBDU1MuIFNldCB0aGlzIHZhcmlhYmxlIHRvIGZhbHNlIHRvXG4vLy8gZGlzYWJsZSBnZW5lcmF0aW5nIGZhbGxiYWNrIGRlY2xhcmF0aW9ucy5cbiRlbmFibGUtZmFsbGJhY2stZGVjbGFyYXRpb25zOiB0cnVlICFkZWZhdWx0O1xuXG4vLy8gV3JpdGVzIGEgQ1NTIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uLiBUaGlzIG1peGluIGlzIHVzZWQgdGhyb3VnaG91dCB0aGVcbi8vLyB0aGVtZSBwYWNrYWdlIGZvciBjb25zaXN0ZW5jeSBmb3IgZHluYW1pY2FsbHkgc2V0dGluZyBDU1MgcHJvcGVydHkgdmFsdWVzLlxuLy8vXG4vLy8gVGhpcyBtaXhpbiBtYXkgb3B0aW9uYWxseSB0YWtlIGEgZmFsbGJhY2sgdmFsdWUuIEZvciBhZHZhbmNlZCBmZWF0dXJlcyBzdWNoXG4vLy8gYXMgY3VzdG9tIHByb3BlcnRpZXMgb3IgQ1NTIGZ1bmN0aW9ucyBsaWtlIG1pbiBhbmQgbWF4LCBhIGZhbGxiYWNrIHZhbHVlIGlzXG4vLy8gcmVjb21tZW5kZWQgdG8gc3VwcG9ydCBvbGRlciBicm93c2Vycy5cbi8vL1xuLy8vIEBwYXJhbSB7U3RyaW5nfSAkcHJvcGVydHkgLSBUaGUgQ1NTIHByb3BlcnR5IG9mIHRoZSBkZWNsYXJhdGlvbi5cbi8vLyBAcGFyYW0geyp9ICR2YWx1ZSAtIFRoZSB2YWx1ZSBvZiB0aGUgQ1NTIGRlY2xhcmF0aW9uLiBUaGUgdmFsdWUgc2hvdWxkIGJlXG4vLy8gICAgIHJlc29sdmVkIGJ5IG90aGVyIHRoZW1lIGZ1bmN0aW9ucyBmaXJzdCAoaS5lLiBjdXN0b20gcHJvcGVydHkgTWFwcyBhbmRcbi8vLyAgICAgTWF0ZXJpYWwgdGhlbWUga2V5cyBhcmUgbm90IHN1cHBvcnRlZCBpbiB0aGlzIG1peGluKS4gSWYgdGhlIHZhbHVlIGlzXG4vLy8gICAgIG51bGwsIG5vIGRlY2xhcmF0aW9ucyB3aWxsIGJlIGVtaXR0ZWQuXG4vLy8gQHBhcmFtIHsqfSAkZmFsbGJhY2sgLSBBbiBvcHRpb25hbCBmYWxsYmFjayB2YWx1ZSBmb3Igb2xkZXIgYnJvd3NlcnMuIElmXG4vLy8gICAgIHByb3ZpZGVkLCBhIHNlY29uZCBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbiB3aWxsIGJlIGFkZGVkIGJlZm9yZSB0aGVcbi8vLyAgICAgbWFpbiBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbi5cbi8vLyBAcGFyYW0ge01hcH0gJGdzcyAtIEFuIG9wdGlvbmFsIE1hcCBvZiBHU1MgYW5ub3RhdGlvbnMgdG8gYWRkLlxuLy8vIEBwYXJhbSB7Qm9vbH0gJGltcG9ydGFudCAtIElmIHRydWUsIGFkZCBgIWltcG9ydGFudGAgdG8gdGhlIGRlY2xhcmF0aW9uLlxuQG1peGluIGRlY2xhcmF0aW9uKFxuICAkcHJvcGVydHksXG4gICR2YWx1ZSxcbiAgJGZhbGxiYWNrLXZhbHVlOiBudWxsLFxuICAkZ3NzOiAoKSxcbiAgJGltcG9ydGFudDogZmFsc2Vcbikge1xuICAvLyBOb3JtYWxseSBzZXR0aW5nIGEgbnVsbCB2YWx1ZSB0byBhIHByb3BlcnR5IHdpbGwgbm90IGVtaXQgQ1NTLCBzbyBtaXhpbnNcbiAgLy8gd291bGRuJ3QgbmVlZCB0byBjaGVjayB0aGlzLiBIb3dldmVyLCBTYXNzIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgdGhlXG4gIC8vIGludGVycG9sYXRlZCBwcm9wZXJ0eSBpcyBhIGN1c3RvbSBwcm9wZXJ0eS5cbiAgQGlmICR2YWx1ZSAhPSBudWxsIHtcbiAgICAkaW1wb3J0YW50LXJ1bGU6IGlmKCRpbXBvcnRhbnQsICcgIWltcG9ydGFudCcsICcnKTtcblxuICAgIEBpZiAkZmFsbGJhY2stdmFsdWUgYW5kICRlbmFibGUtZmFsbGJhY2stZGVjbGFyYXRpb25zIHtcbiAgICAgIEBpbmNsdWRlIGdzcy5hbm5vdGF0ZSgkZ3NzKTtcbiAgICAgICN7JHByb3BlcnR5fTogI3skZmFsbGJhY2stdmFsdWV9ICN7JGltcG9ydGFudC1ydWxlfTtcblxuICAgICAgLy8gQWRkIEBhbHRlcm5hdGUgdG8gYW5ub3RhdGlvbnMuXG4gICAgICAkZ3NzOiBtYXAubWVyZ2UoXG4gICAgICAgICRnc3MsXG4gICAgICAgIChcbiAgICAgICAgICBhbHRlcm5hdGU6IHRydWUsXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgZ3NzLmFubm90YXRlKCRnc3MpO1xuICAgICN7JHByb3BlcnR5fTogI3skdmFsdWV9I3skaW1wb3J0YW50LXJ1bGV9O1xuICB9XG59XG5cbi8vLyBVbnBhY2tzIHNob3J0aGFuZCB2YWx1ZXMgZm9yIENTUyBwcm9wZXJ0aWVzIChpLmUuIGxpc3RzIG9mIDEtMyB2YWx1ZXMpLlxuLy8vIElmIGEgbGlzdCBvZiA0IHZhbHVlcyBpcyBnaXZlbiwgaXQgaXMgcmV0dXJuZWQgYXMtaXMuXG4vLy9cbi8vLyBFeGFtcGxlczpcbi8vL1xuLy8vIHVucGFjay12YWx1ZSg0cHgpID0+IDRweCA0cHggNHB4IDRweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4KSA9PiA0cHggMnB4IDRweCAycHhcbi8vLyB1bnBhY2stdmFsdWUoNHB4IDJweCAycHgpID0+IDRweCAycHggMnB4IDJweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4IDAgMnB4KSA9PiA0cHggMnB4IDAgMnB4XG4vLy9cbi8vLyBAcGFyYW0ge051bWJlciB8IE1hcCB8IExpc3R9ICR2YWx1ZSAtIExpc3Qgb2YgMSB0byA0IHZhbHVlIG51bWJlcnMuXG4vLy8gQHJldHVybiB7TGlzdH0gYSBMaXN0IG9mIDQgdmFsdWUgbnVtYmVycy5cbkBmdW5jdGlvbiB1bnBhY2stdmFsdWUoJHZhbHVlKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHZhbHVlKSA9PSAnbWFwJyBvciBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDEge1xuICAgIEByZXR1cm4gJHZhbHVlICR2YWx1ZSAkdmFsdWUgJHZhbHVlO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gNCB7XG4gICAgQHJldHVybiAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAzIHtcbiAgICBAcmV0dXJuIGxpc3QubnRoKCR2YWx1ZSwgMSkgbGlzdC5udGgoJHZhbHVlLCAyKSBsaXN0Lm50aCgkdmFsdWUsIDMpXG4gICAgICBsaXN0Lm50aCgkdmFsdWUsIDIpO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMiB7XG4gICAgQHJldHVybiBsaXN0Lm50aCgkdmFsdWUsIDEpIGxpc3QubnRoKCR2YWx1ZSwgMikgbGlzdC5udGgoJHZhbHVlLCAxKVxuICAgICAgbGlzdC5udGgoJHZhbHVlLCAyKTtcbiAgfVxuXG4gIEBlcnJvciBcIkludmFsaWQgQ1NTIHByb3BlcnR5IHZhbHVlOiAnI3skdmFsdWV9JyBpcyBtb3JlIHRoYW4gNCB2YWx1ZXNcIjtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
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

/***/ 1133:
/*!**********************************************************************!*\
  !*** ./src/app/test-features/test-palette/test-palette.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TestPaletteComponent: () => (/* binding */ TestPaletteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function TestPaletteComponent_section_0_section_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const shade_r1 = ctx.$implicit;
    const hue_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("tp-", hue_r2, "-", shade_r1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](shade_r1);
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
    const hue_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hue_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.shades);
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
    styles: [".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n  background-color: var(--mat-ripple-color, rgba(0, 0, 0, 0.1));\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start { \n }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end { \n }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: var(--mat-app-background-color, transparent);\n  color: var(--mat-app-text-color, inherit);\n}\n\n.tp-red[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n}\n\n.tp-red-50[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-red-50[_ngcontent-%COMP%]::after {\n  content: \" color: #ffebee hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-red-100[_ngcontent-%COMP%] {\n  background-color: #ffcdd2;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-red-100[_ngcontent-%COMP%]::after {\n  content: \" color: #ffcdd2 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-red-200[_ngcontent-%COMP%] {\n  background-color: #ef9a9a;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-red-200[_ngcontent-%COMP%]::after {\n  content: \" color: #ef9a9a hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-red-300[_ngcontent-%COMP%] {\n  background-color: #e57373;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-red-300[_ngcontent-%COMP%]::after {\n  content: \" color: #e57373 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-red-400[_ngcontent-%COMP%] {\n  background-color: #ef5350;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-red-400[_ngcontent-%COMP%]::after {\n  content: \" color: #ef5350 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-red-500[_ngcontent-%COMP%] {\n  background-color: #f44336;\n  color: white;\n}\n\n.tp-red-500[_ngcontent-%COMP%]::after {\n  content: \" color: #f44336 hue: 500 contrast: white\";\n}\n\n.tp-red-600[_ngcontent-%COMP%] {\n  background-color: #e53935;\n  color: white;\n}\n\n.tp-red-600[_ngcontent-%COMP%]::after {\n  content: \" color: #e53935 hue: 600 contrast: white\";\n}\n\n.tp-red-700[_ngcontent-%COMP%] {\n  background-color: #d32f2f;\n  color: white;\n}\n\n.tp-red-700[_ngcontent-%COMP%]::after {\n  content: \" color: #d32f2f hue: 700 contrast: white\";\n}\n\n.tp-red-800[_ngcontent-%COMP%] {\n  background-color: #c62828;\n  color: white;\n}\n\n.tp-red-800[_ngcontent-%COMP%]::after {\n  content: \" color: #c62828 hue: 800 contrast: white\";\n}\n\n.tp-red-900[_ngcontent-%COMP%] {\n  background-color: #b71c1c;\n  color: white;\n}\n\n.tp-red-900[_ngcontent-%COMP%]::after {\n  content: \" color: #b71c1c hue: 900 contrast: white\";\n}\n\n.tp-red-A100[_ngcontent-%COMP%] {\n  background-color: #ff8a80;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-red-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ff8a80 hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-red-A200[_ngcontent-%COMP%] {\n  background-color: #ff5252;\n  color: white;\n}\n\n.tp-red-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #ff5252 hue: A200 contrast: white\";\n}\n\n.tp-red-A400[_ngcontent-%COMP%] {\n  background-color: #ff1744;\n  color: white;\n}\n\n.tp-red-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #ff1744 hue: A400 contrast: white\";\n}\n\n.tp-red-A700[_ngcontent-%COMP%] {\n  background-color: #d50000;\n  color: white;\n}\n\n.tp-red-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #d50000 hue: A700 contrast: white\";\n}\n\n.tp-pink[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  color: white;\n}\n\n.tp-pink-50[_ngcontent-%COMP%] {\n  background-color: #fce4ec;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-pink-50[_ngcontent-%COMP%]::after {\n  content: \" color: #fce4ec hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-pink-100[_ngcontent-%COMP%] {\n  background-color: #f8bbd0;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-pink-100[_ngcontent-%COMP%]::after {\n  content: \" color: #f8bbd0 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-pink-200[_ngcontent-%COMP%] {\n  background-color: #f48fb1;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-pink-200[_ngcontent-%COMP%]::after {\n  content: \" color: #f48fb1 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-pink-300[_ngcontent-%COMP%] {\n  background-color: #f06292;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-pink-300[_ngcontent-%COMP%]::after {\n  content: \" color: #f06292 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-pink-400[_ngcontent-%COMP%] {\n  background-color: #ec407a;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-pink-400[_ngcontent-%COMP%]::after {\n  content: \" color: #ec407a hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-pink-500[_ngcontent-%COMP%] {\n  background-color: #e91e63;\n  color: white;\n}\n\n.tp-pink-500[_ngcontent-%COMP%]::after {\n  content: \" color: #e91e63 hue: 500 contrast: white\";\n}\n\n.tp-pink-600[_ngcontent-%COMP%] {\n  background-color: #d81b60;\n  color: white;\n}\n\n.tp-pink-600[_ngcontent-%COMP%]::after {\n  content: \" color: #d81b60 hue: 600 contrast: white\";\n}\n\n.tp-pink-700[_ngcontent-%COMP%] {\n  background-color: #c2185b;\n  color: white;\n}\n\n.tp-pink-700[_ngcontent-%COMP%]::after {\n  content: \" color: #c2185b hue: 700 contrast: white\";\n}\n\n.tp-pink-800[_ngcontent-%COMP%] {\n  background-color: #ad1457;\n  color: white;\n}\n\n.tp-pink-800[_ngcontent-%COMP%]::after {\n  content: \" color: #ad1457 hue: 800 contrast: white\";\n}\n\n.tp-pink-900[_ngcontent-%COMP%] {\n  background-color: #880e4f;\n  color: white;\n}\n\n.tp-pink-900[_ngcontent-%COMP%]::after {\n  content: \" color: #880e4f hue: 900 contrast: white\";\n}\n\n.tp-pink-A100[_ngcontent-%COMP%] {\n  background-color: #ff80ab;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-pink-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ff80ab hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-pink-A200[_ngcontent-%COMP%] {\n  background-color: #ff4081;\n  color: white;\n}\n\n.tp-pink-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #ff4081 hue: A200 contrast: white\";\n}\n\n.tp-pink-A400[_ngcontent-%COMP%] {\n  background-color: #f50057;\n  color: white;\n}\n\n.tp-pink-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #f50057 hue: A400 contrast: white\";\n}\n\n.tp-pink-A700[_ngcontent-%COMP%] {\n  background-color: #c51162;\n  color: white;\n}\n\n.tp-pink-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #c51162 hue: A700 contrast: white\";\n}\n\n.tp-purple[_ngcontent-%COMP%] {\n  background-color: #9c27b0;\n  color: white;\n}\n\n.tp-purple-50[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-purple-50[_ngcontent-%COMP%]::after {\n  content: \" color: #f3e5f5 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-purple-100[_ngcontent-%COMP%] {\n  background-color: #e1bee7;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-purple-100[_ngcontent-%COMP%]::after {\n  content: \" color: #e1bee7 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-purple-200[_ngcontent-%COMP%] {\n  background-color: #ce93d8;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-purple-200[_ngcontent-%COMP%]::after {\n  content: \" color: #ce93d8 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-purple-300[_ngcontent-%COMP%] {\n  background-color: #ba68c8;\n  color: white;\n}\n\n.tp-purple-300[_ngcontent-%COMP%]::after {\n  content: \" color: #ba68c8 hue: 300 contrast: white\";\n}\n\n.tp-purple-400[_ngcontent-%COMP%] {\n  background-color: #ab47bc;\n  color: white;\n}\n\n.tp-purple-400[_ngcontent-%COMP%]::after {\n  content: \" color: #ab47bc hue: 400 contrast: white\";\n}\n\n.tp-purple-500[_ngcontent-%COMP%] {\n  background-color: #9c27b0;\n  color: white;\n}\n\n.tp-purple-500[_ngcontent-%COMP%]::after {\n  content: \" color: #9c27b0 hue: 500 contrast: white\";\n}\n\n.tp-purple-600[_ngcontent-%COMP%] {\n  background-color: #8e24aa;\n  color: white;\n}\n\n.tp-purple-600[_ngcontent-%COMP%]::after {\n  content: \" color: #8e24aa hue: 600 contrast: white\";\n}\n\n.tp-purple-700[_ngcontent-%COMP%] {\n  background-color: #7b1fa2;\n  color: white;\n}\n\n.tp-purple-700[_ngcontent-%COMP%]::after {\n  content: \" color: #7b1fa2 hue: 700 contrast: white\";\n}\n\n.tp-purple-800[_ngcontent-%COMP%] {\n  background-color: #6a1b9a;\n  color: white;\n}\n\n.tp-purple-800[_ngcontent-%COMP%]::after {\n  content: \" color: #6a1b9a hue: 800 contrast: white\";\n}\n\n.tp-purple-900[_ngcontent-%COMP%] {\n  background-color: #4a148c;\n  color: white;\n}\n\n.tp-purple-900[_ngcontent-%COMP%]::after {\n  content: \" color: #4a148c hue: 900 contrast: white\";\n}\n\n.tp-purple-A100[_ngcontent-%COMP%] {\n  background-color: #ea80fc;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-purple-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ea80fc hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-purple-A200[_ngcontent-%COMP%] {\n  background-color: #e040fb;\n  color: white;\n}\n\n.tp-purple-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #e040fb hue: A200 contrast: white\";\n}\n\n.tp-purple-A400[_ngcontent-%COMP%] {\n  background-color: #d500f9;\n  color: white;\n}\n\n.tp-purple-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #d500f9 hue: A400 contrast: white\";\n}\n\n.tp-purple-A700[_ngcontent-%COMP%] {\n  background-color: #aa00ff;\n  color: white;\n}\n\n.tp-purple-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #aa00ff hue: A700 contrast: white\";\n}\n\n.tp-deep-purple[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  color: white;\n}\n\n.tp-deep-purple-50[_ngcontent-%COMP%] {\n  background-color: #ede7f6;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-purple-50[_ngcontent-%COMP%]::after {\n  content: \" color: #ede7f6 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-purple-100[_ngcontent-%COMP%] {\n  background-color: #d1c4e9;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-purple-100[_ngcontent-%COMP%]::after {\n  content: \" color: #d1c4e9 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-purple-200[_ngcontent-%COMP%] {\n  background-color: #b39ddb;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-purple-200[_ngcontent-%COMP%]::after {\n  content: \" color: #b39ddb hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-purple-300[_ngcontent-%COMP%] {\n  background-color: #9575cd;\n  color: white;\n}\n\n.tp-deep-purple-300[_ngcontent-%COMP%]::after {\n  content: \" color: #9575cd hue: 300 contrast: white\";\n}\n\n.tp-deep-purple-400[_ngcontent-%COMP%] {\n  background-color: #7e57c2;\n  color: white;\n}\n\n.tp-deep-purple-400[_ngcontent-%COMP%]::after {\n  content: \" color: #7e57c2 hue: 400 contrast: white\";\n}\n\n.tp-deep-purple-500[_ngcontent-%COMP%] {\n  background-color: #673ab7;\n  color: white;\n}\n\n.tp-deep-purple-500[_ngcontent-%COMP%]::after {\n  content: \" color: #673ab7 hue: 500 contrast: white\";\n}\n\n.tp-deep-purple-600[_ngcontent-%COMP%] {\n  background-color: #5e35b1;\n  color: white;\n}\n\n.tp-deep-purple-600[_ngcontent-%COMP%]::after {\n  content: \" color: #5e35b1 hue: 600 contrast: white\";\n}\n\n.tp-deep-purple-700[_ngcontent-%COMP%] {\n  background-color: #512da8;\n  color: white;\n}\n\n.tp-deep-purple-700[_ngcontent-%COMP%]::after {\n  content: \" color: #512da8 hue: 700 contrast: white\";\n}\n\n.tp-deep-purple-800[_ngcontent-%COMP%] {\n  background-color: #4527a0;\n  color: white;\n}\n\n.tp-deep-purple-800[_ngcontent-%COMP%]::after {\n  content: \" color: #4527a0 hue: 800 contrast: white\";\n}\n\n.tp-deep-purple-900[_ngcontent-%COMP%] {\n  background-color: #311b92;\n  color: white;\n}\n\n.tp-deep-purple-900[_ngcontent-%COMP%]::after {\n  content: \" color: #311b92 hue: 900 contrast: white\";\n}\n\n.tp-deep-purple-A100[_ngcontent-%COMP%] {\n  background-color: #b388ff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-purple-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #b388ff hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-purple-A200[_ngcontent-%COMP%] {\n  background-color: #7c4dff;\n  color: white;\n}\n\n.tp-deep-purple-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #7c4dff hue: A200 contrast: white\";\n}\n\n.tp-deep-purple-A400[_ngcontent-%COMP%] {\n  background-color: #651fff;\n  color: white;\n}\n\n.tp-deep-purple-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #651fff hue: A400 contrast: white\";\n}\n\n.tp-deep-purple-A700[_ngcontent-%COMP%] {\n  background-color: #6200ea;\n  color: white;\n}\n\n.tp-deep-purple-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #6200ea hue: A700 contrast: white\";\n}\n\n.tp-indigo[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n\n.tp-indigo-50[_ngcontent-%COMP%] {\n  background-color: #e8eaf6;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-indigo-50[_ngcontent-%COMP%]::after {\n  content: \" color: #e8eaf6 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-indigo-100[_ngcontent-%COMP%] {\n  background-color: #c5cae9;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-indigo-100[_ngcontent-%COMP%]::after {\n  content: \" color: #c5cae9 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-indigo-200[_ngcontent-%COMP%] {\n  background-color: #9fa8da;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-indigo-200[_ngcontent-%COMP%]::after {\n  content: \" color: #9fa8da hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-indigo-300[_ngcontent-%COMP%] {\n  background-color: #7986cb;\n  color: white;\n}\n\n.tp-indigo-300[_ngcontent-%COMP%]::after {\n  content: \" color: #7986cb hue: 300 contrast: white\";\n}\n\n.tp-indigo-400[_ngcontent-%COMP%] {\n  background-color: #5c6bc0;\n  color: white;\n}\n\n.tp-indigo-400[_ngcontent-%COMP%]::after {\n  content: \" color: #5c6bc0 hue: 400 contrast: white\";\n}\n\n.tp-indigo-500[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: white;\n}\n\n.tp-indigo-500[_ngcontent-%COMP%]::after {\n  content: \" color: #3f51b5 hue: 500 contrast: white\";\n}\n\n.tp-indigo-600[_ngcontent-%COMP%] {\n  background-color: #3949ab;\n  color: white;\n}\n\n.tp-indigo-600[_ngcontent-%COMP%]::after {\n  content: \" color: #3949ab hue: 600 contrast: white\";\n}\n\n.tp-indigo-700[_ngcontent-%COMP%] {\n  background-color: #303f9f;\n  color: white;\n}\n\n.tp-indigo-700[_ngcontent-%COMP%]::after {\n  content: \" color: #303f9f hue: 700 contrast: white\";\n}\n\n.tp-indigo-800[_ngcontent-%COMP%] {\n  background-color: #283593;\n  color: white;\n}\n\n.tp-indigo-800[_ngcontent-%COMP%]::after {\n  content: \" color: #283593 hue: 800 contrast: white\";\n}\n\n.tp-indigo-900[_ngcontent-%COMP%] {\n  background-color: #1a237e;\n  color: white;\n}\n\n.tp-indigo-900[_ngcontent-%COMP%]::after {\n  content: \" color: #1a237e hue: 900 contrast: white\";\n}\n\n.tp-indigo-A100[_ngcontent-%COMP%] {\n  background-color: #8c9eff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-indigo-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #8c9eff hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-indigo-A200[_ngcontent-%COMP%] {\n  background-color: #536dfe;\n  color: white;\n}\n\n.tp-indigo-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #536dfe hue: A200 contrast: white\";\n}\n\n.tp-indigo-A400[_ngcontent-%COMP%] {\n  background-color: #3d5afe;\n  color: white;\n}\n\n.tp-indigo-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #3d5afe hue: A400 contrast: white\";\n}\n\n.tp-indigo-A700[_ngcontent-%COMP%] {\n  background-color: #304ffe;\n  color: white;\n}\n\n.tp-indigo-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #304ffe hue: A700 contrast: white\";\n}\n\n.tp-blue[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n  color: white;\n}\n\n.tp-blue-50[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-50[_ngcontent-%COMP%]::after {\n  content: \" color: #e3f2fd hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-100[_ngcontent-%COMP%] {\n  background-color: #bbdefb;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-100[_ngcontent-%COMP%]::after {\n  content: \" color: #bbdefb hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-200[_ngcontent-%COMP%] {\n  background-color: #90caf9;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-200[_ngcontent-%COMP%]::after {\n  content: \" color: #90caf9 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-300[_ngcontent-%COMP%] {\n  background-color: #64b5f6;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-300[_ngcontent-%COMP%]::after {\n  content: \" color: #64b5f6 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-400[_ngcontent-%COMP%] {\n  background-color: #42a5f5;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-400[_ngcontent-%COMP%]::after {\n  content: \" color: #42a5f5 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-500[_ngcontent-%COMP%] {\n  background-color: #2196f3;\n  color: white;\n}\n\n.tp-blue-500[_ngcontent-%COMP%]::after {\n  content: \" color: #2196f3 hue: 500 contrast: white\";\n}\n\n.tp-blue-600[_ngcontent-%COMP%] {\n  background-color: #1e88e5;\n  color: white;\n}\n\n.tp-blue-600[_ngcontent-%COMP%]::after {\n  content: \" color: #1e88e5 hue: 600 contrast: white\";\n}\n\n.tp-blue-700[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n}\n\n.tp-blue-700[_ngcontent-%COMP%]::after {\n  content: \" color: #1976d2 hue: 700 contrast: white\";\n}\n\n.tp-blue-800[_ngcontent-%COMP%] {\n  background-color: #1565c0;\n  color: white;\n}\n\n.tp-blue-800[_ngcontent-%COMP%]::after {\n  content: \" color: #1565c0 hue: 800 contrast: white\";\n}\n\n.tp-blue-900[_ngcontent-%COMP%] {\n  background-color: #0d47a1;\n  color: white;\n}\n\n.tp-blue-900[_ngcontent-%COMP%]::after {\n  content: \" color: #0d47a1 hue: 900 contrast: white\";\n}\n\n.tp-blue-A100[_ngcontent-%COMP%] {\n  background-color: #82b1ff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #82b1ff hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-A200[_ngcontent-%COMP%] {\n  background-color: #448aff;\n  color: white;\n}\n\n.tp-blue-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #448aff hue: A200 contrast: white\";\n}\n\n.tp-blue-A400[_ngcontent-%COMP%] {\n  background-color: #2979ff;\n  color: white;\n}\n\n.tp-blue-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #2979ff hue: A400 contrast: white\";\n}\n\n.tp-blue-A700[_ngcontent-%COMP%] {\n  background-color: #2962ff;\n  color: white;\n}\n\n.tp-blue-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #2962ff hue: A700 contrast: white\";\n}\n\n.tp-light-blue[_ngcontent-%COMP%] {\n  background-color: #03a9f4;\n  color: white;\n}\n\n.tp-light-blue-50[_ngcontent-%COMP%] {\n  background-color: #e1f5fe;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-50[_ngcontent-%COMP%]::after {\n  content: \" color: #e1f5fe hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-100[_ngcontent-%COMP%] {\n  background-color: #b3e5fc;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-100[_ngcontent-%COMP%]::after {\n  content: \" color: #b3e5fc hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-200[_ngcontent-%COMP%] {\n  background-color: #81d4fa;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-200[_ngcontent-%COMP%]::after {\n  content: \" color: #81d4fa hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-300[_ngcontent-%COMP%] {\n  background-color: #4fc3f7;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-300[_ngcontent-%COMP%]::after {\n  content: \" color: #4fc3f7 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-400[_ngcontent-%COMP%] {\n  background-color: #29b6f6;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-400[_ngcontent-%COMP%]::after {\n  content: \" color: #29b6f6 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-500[_ngcontent-%COMP%] {\n  background-color: #03a9f4;\n  color: white;\n}\n\n.tp-light-blue-500[_ngcontent-%COMP%]::after {\n  content: \" color: #03a9f4 hue: 500 contrast: white\";\n}\n\n.tp-light-blue-600[_ngcontent-%COMP%] {\n  background-color: #039be5;\n  color: white;\n}\n\n.tp-light-blue-600[_ngcontent-%COMP%]::after {\n  content: \" color: #039be5 hue: 600 contrast: white\";\n}\n\n.tp-light-blue-700[_ngcontent-%COMP%] {\n  background-color: #0288d1;\n  color: white;\n}\n\n.tp-light-blue-700[_ngcontent-%COMP%]::after {\n  content: \" color: #0288d1 hue: 700 contrast: white\";\n}\n\n.tp-light-blue-800[_ngcontent-%COMP%] {\n  background-color: #0277bd;\n  color: white;\n}\n\n.tp-light-blue-800[_ngcontent-%COMP%]::after {\n  content: \" color: #0277bd hue: 800 contrast: white\";\n}\n\n.tp-light-blue-900[_ngcontent-%COMP%] {\n  background-color: #01579b;\n  color: white;\n}\n\n.tp-light-blue-900[_ngcontent-%COMP%]::after {\n  content: \" color: #01579b hue: 900 contrast: white\";\n}\n\n.tp-light-blue-A100[_ngcontent-%COMP%] {\n  background-color: #80d8ff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #80d8ff hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-A200[_ngcontent-%COMP%] {\n  background-color: #40c4ff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #40c4ff hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-A400[_ngcontent-%COMP%] {\n  background-color: #00b0ff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-blue-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #00b0ff hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-blue-A700[_ngcontent-%COMP%] {\n  background-color: #0091ea;\n  color: white;\n}\n\n.tp-light-blue-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #0091ea hue: A700 contrast: white\";\n}\n\n.tp-cyan[_ngcontent-%COMP%] {\n  background-color: #00bcd4;\n  color: white;\n}\n\n.tp-cyan-50[_ngcontent-%COMP%] {\n  background-color: #e0f7fa;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-50[_ngcontent-%COMP%]::after {\n  content: \" color: #e0f7fa hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-100[_ngcontent-%COMP%] {\n  background-color: #b2ebf2;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-100[_ngcontent-%COMP%]::after {\n  content: \" color: #b2ebf2 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-200[_ngcontent-%COMP%] {\n  background-color: #80deea;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-200[_ngcontent-%COMP%]::after {\n  content: \" color: #80deea hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-300[_ngcontent-%COMP%] {\n  background-color: #4dd0e1;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-300[_ngcontent-%COMP%]::after {\n  content: \" color: #4dd0e1 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-400[_ngcontent-%COMP%] {\n  background-color: #26c6da;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-400[_ngcontent-%COMP%]::after {\n  content: \" color: #26c6da hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-500[_ngcontent-%COMP%] {\n  background-color: #00bcd4;\n  color: white;\n}\n\n.tp-cyan-500[_ngcontent-%COMP%]::after {\n  content: \" color: #00bcd4 hue: 500 contrast: white\";\n}\n\n.tp-cyan-600[_ngcontent-%COMP%] {\n  background-color: #00acc1;\n  color: white;\n}\n\n.tp-cyan-600[_ngcontent-%COMP%]::after {\n  content: \" color: #00acc1 hue: 600 contrast: white\";\n}\n\n.tp-cyan-700[_ngcontent-%COMP%] {\n  background-color: #0097a7;\n  color: white;\n}\n\n.tp-cyan-700[_ngcontent-%COMP%]::after {\n  content: \" color: #0097a7 hue: 700 contrast: white\";\n}\n\n.tp-cyan-800[_ngcontent-%COMP%] {\n  background-color: #00838f;\n  color: white;\n}\n\n.tp-cyan-800[_ngcontent-%COMP%]::after {\n  content: \" color: #00838f hue: 800 contrast: white\";\n}\n\n.tp-cyan-900[_ngcontent-%COMP%] {\n  background-color: #006064;\n  color: white;\n}\n\n.tp-cyan-900[_ngcontent-%COMP%]::after {\n  content: \" color: #006064 hue: 900 contrast: white\";\n}\n\n.tp-cyan-A100[_ngcontent-%COMP%] {\n  background-color: #84ffff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #84ffff hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-A200[_ngcontent-%COMP%] {\n  background-color: #18ffff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #18ffff hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-A400[_ngcontent-%COMP%] {\n  background-color: #00e5ff;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #00e5ff hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-cyan-A700[_ngcontent-%COMP%] {\n  background-color: #00b8d4;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-cyan-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #00b8d4 hue: A700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal[_ngcontent-%COMP%] {\n  background-color: #009688;\n  color: white;\n}\n\n.tp-teal-50[_ngcontent-%COMP%] {\n  background-color: #e0f2f1;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-50[_ngcontent-%COMP%]::after {\n  content: \" color: #e0f2f1 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-100[_ngcontent-%COMP%] {\n  background-color: #b2dfdb;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-100[_ngcontent-%COMP%]::after {\n  content: \" color: #b2dfdb hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-200[_ngcontent-%COMP%] {\n  background-color: #80cbc4;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-200[_ngcontent-%COMP%]::after {\n  content: \" color: #80cbc4 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-300[_ngcontent-%COMP%] {\n  background-color: #4db6ac;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-300[_ngcontent-%COMP%]::after {\n  content: \" color: #4db6ac hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-400[_ngcontent-%COMP%] {\n  background-color: #26a69a;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-400[_ngcontent-%COMP%]::after {\n  content: \" color: #26a69a hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-500[_ngcontent-%COMP%] {\n  background-color: #009688;\n  color: white;\n}\n\n.tp-teal-500[_ngcontent-%COMP%]::after {\n  content: \" color: #009688 hue: 500 contrast: white\";\n}\n\n.tp-teal-600[_ngcontent-%COMP%] {\n  background-color: #00897b;\n  color: white;\n}\n\n.tp-teal-600[_ngcontent-%COMP%]::after {\n  content: \" color: #00897b hue: 600 contrast: white\";\n}\n\n.tp-teal-700[_ngcontent-%COMP%] {\n  background-color: #00796b;\n  color: white;\n}\n\n.tp-teal-700[_ngcontent-%COMP%]::after {\n  content: \" color: #00796b hue: 700 contrast: white\";\n}\n\n.tp-teal-800[_ngcontent-%COMP%] {\n  background-color: #00695c;\n  color: white;\n}\n\n.tp-teal-800[_ngcontent-%COMP%]::after {\n  content: \" color: #00695c hue: 800 contrast: white\";\n}\n\n.tp-teal-900[_ngcontent-%COMP%] {\n  background-color: #004d40;\n  color: white;\n}\n\n.tp-teal-900[_ngcontent-%COMP%]::after {\n  content: \" color: #004d40 hue: 900 contrast: white\";\n}\n\n.tp-teal-A100[_ngcontent-%COMP%] {\n  background-color: #a7ffeb;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #a7ffeb hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-A200[_ngcontent-%COMP%] {\n  background-color: #64ffda;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #64ffda hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-A400[_ngcontent-%COMP%] {\n  background-color: #1de9b6;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #1de9b6 hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-teal-A700[_ngcontent-%COMP%] {\n  background-color: #00bfa5;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-teal-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #00bfa5 hue: A700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-50[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-50[_ngcontent-%COMP%]::after {\n  content: \" color: #e8f5e9 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-100[_ngcontent-%COMP%] {\n  background-color: #c8e6c9;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-100[_ngcontent-%COMP%]::after {\n  content: \" color: #c8e6c9 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-200[_ngcontent-%COMP%] {\n  background-color: #a5d6a7;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-200[_ngcontent-%COMP%]::after {\n  content: \" color: #a5d6a7 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-300[_ngcontent-%COMP%] {\n  background-color: #81c784;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-300[_ngcontent-%COMP%]::after {\n  content: \" color: #81c784 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-400[_ngcontent-%COMP%] {\n  background-color: #66bb6a;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-400[_ngcontent-%COMP%]::after {\n  content: \" color: #66bb6a hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-500[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-500[_ngcontent-%COMP%]::after {\n  content: \" color: #4caf50 hue: 500 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-600[_ngcontent-%COMP%] {\n  background-color: #43a047;\n  color: white;\n}\n\n.tp-green-600[_ngcontent-%COMP%]::after {\n  content: \" color: #43a047 hue: 600 contrast: white\";\n}\n\n.tp-green-700[_ngcontent-%COMP%] {\n  background-color: #388e3c;\n  color: white;\n}\n\n.tp-green-700[_ngcontent-%COMP%]::after {\n  content: \" color: #388e3c hue: 700 contrast: white\";\n}\n\n.tp-green-800[_ngcontent-%COMP%] {\n  background-color: #2e7d32;\n  color: white;\n}\n\n.tp-green-800[_ngcontent-%COMP%]::after {\n  content: \" color: #2e7d32 hue: 800 contrast: white\";\n}\n\n.tp-green-900[_ngcontent-%COMP%] {\n  background-color: #1b5e20;\n  color: white;\n}\n\n.tp-green-900[_ngcontent-%COMP%]::after {\n  content: \" color: #1b5e20 hue: 900 contrast: white\";\n}\n\n.tp-green-A100[_ngcontent-%COMP%] {\n  background-color: #b9f6ca;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #b9f6ca hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-A200[_ngcontent-%COMP%] {\n  background-color: #69f0ae;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #69f0ae hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-A400[_ngcontent-%COMP%] {\n  background-color: #00e676;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #00e676 hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-green-A700[_ngcontent-%COMP%] {\n  background-color: #00c853;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-green-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #00c853 hue: A700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green[_ngcontent-%COMP%] {\n  background-color: #8bc34a;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-50[_ngcontent-%COMP%] {\n  background-color: #f1f8e9;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-50[_ngcontent-%COMP%]::after {\n  content: \" color: #f1f8e9 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-100[_ngcontent-%COMP%] {\n  background-color: #dcedc8;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-100[_ngcontent-%COMP%]::after {\n  content: \" color: #dcedc8 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-200[_ngcontent-%COMP%] {\n  background-color: #c5e1a5;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-200[_ngcontent-%COMP%]::after {\n  content: \" color: #c5e1a5 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-300[_ngcontent-%COMP%] {\n  background-color: #aed581;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-300[_ngcontent-%COMP%]::after {\n  content: \" color: #aed581 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-400[_ngcontent-%COMP%] {\n  background-color: #9ccc65;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-400[_ngcontent-%COMP%]::after {\n  content: \" color: #9ccc65 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-500[_ngcontent-%COMP%] {\n  background-color: #8bc34a;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-500[_ngcontent-%COMP%]::after {\n  content: \" color: #8bc34a hue: 500 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-600[_ngcontent-%COMP%] {\n  background-color: #7cb342;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-600[_ngcontent-%COMP%]::after {\n  content: \" color: #7cb342 hue: 600 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-700[_ngcontent-%COMP%] {\n  background-color: #689f38;\n  color: white;\n}\n\n.tp-light-green-700[_ngcontent-%COMP%]::after {\n  content: \" color: #689f38 hue: 700 contrast: white\";\n}\n\n.tp-light-green-800[_ngcontent-%COMP%] {\n  background-color: #558b2f;\n  color: white;\n}\n\n.tp-light-green-800[_ngcontent-%COMP%]::after {\n  content: \" color: #558b2f hue: 800 contrast: white\";\n}\n\n.tp-light-green-900[_ngcontent-%COMP%] {\n  background-color: #33691e;\n  color: white;\n}\n\n.tp-light-green-900[_ngcontent-%COMP%]::after {\n  content: \" color: #33691e hue: 900 contrast: white\";\n}\n\n.tp-light-green-A100[_ngcontent-%COMP%] {\n  background-color: #ccff90;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ccff90 hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-A200[_ngcontent-%COMP%] {\n  background-color: #b2ff59;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #b2ff59 hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-A400[_ngcontent-%COMP%] {\n  background-color: #76ff03;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #76ff03 hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-light-green-A700[_ngcontent-%COMP%] {\n  background-color: #64dd17;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-light-green-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #64dd17 hue: A700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime[_ngcontent-%COMP%] {\n  background-color: #cddc39;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-50[_ngcontent-%COMP%] {\n  background-color: #f9fbe7;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-50[_ngcontent-%COMP%]::after {\n  content: \" color: #f9fbe7 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-100[_ngcontent-%COMP%] {\n  background-color: #f0f4c3;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-100[_ngcontent-%COMP%]::after {\n  content: \" color: #f0f4c3 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-200[_ngcontent-%COMP%] {\n  background-color: #e6ee9c;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-200[_ngcontent-%COMP%]::after {\n  content: \" color: #e6ee9c hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-300[_ngcontent-%COMP%] {\n  background-color: #dce775;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-300[_ngcontent-%COMP%]::after {\n  content: \" color: #dce775 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-400[_ngcontent-%COMP%] {\n  background-color: #d4e157;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-400[_ngcontent-%COMP%]::after {\n  content: \" color: #d4e157 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-500[_ngcontent-%COMP%] {\n  background-color: #cddc39;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-500[_ngcontent-%COMP%]::after {\n  content: \" color: #cddc39 hue: 500 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-600[_ngcontent-%COMP%] {\n  background-color: #c0ca33;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-600[_ngcontent-%COMP%]::after {\n  content: \" color: #c0ca33 hue: 600 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-700[_ngcontent-%COMP%] {\n  background-color: #afb42b;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-700[_ngcontent-%COMP%]::after {\n  content: \" color: #afb42b hue: 700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-800[_ngcontent-%COMP%] {\n  background-color: #9e9d24;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-800[_ngcontent-%COMP%]::after {\n  content: \" color: #9e9d24 hue: 800 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-900[_ngcontent-%COMP%] {\n  background-color: #827717;\n  color: white;\n}\n\n.tp-lime-900[_ngcontent-%COMP%]::after {\n  content: \" color: #827717 hue: 900 contrast: white\";\n}\n\n.tp-lime-A100[_ngcontent-%COMP%] {\n  background-color: #f4ff81;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #f4ff81 hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-A200[_ngcontent-%COMP%] {\n  background-color: #eeff41;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #eeff41 hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-A400[_ngcontent-%COMP%] {\n  background-color: #c6ff00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #c6ff00 hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-lime-A700[_ngcontent-%COMP%] {\n  background-color: #aeea00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-lime-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #aeea00 hue: A700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow[_ngcontent-%COMP%] {\n  background-color: #ffeb3b;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-50[_ngcontent-%COMP%] {\n  background-color: #fffde7;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-50[_ngcontent-%COMP%]::after {\n  content: \" color: #fffde7 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-100[_ngcontent-%COMP%] {\n  background-color: #fff9c4;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-100[_ngcontent-%COMP%]::after {\n  content: \" color: #fff9c4 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-200[_ngcontent-%COMP%] {\n  background-color: #fff59d;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-200[_ngcontent-%COMP%]::after {\n  content: \" color: #fff59d hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-300[_ngcontent-%COMP%] {\n  background-color: #fff176;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-300[_ngcontent-%COMP%]::after {\n  content: \" color: #fff176 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-400[_ngcontent-%COMP%] {\n  background-color: #ffee58;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-400[_ngcontent-%COMP%]::after {\n  content: \" color: #ffee58 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-500[_ngcontent-%COMP%] {\n  background-color: #ffeb3b;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-500[_ngcontent-%COMP%]::after {\n  content: \" color: #ffeb3b hue: 500 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-600[_ngcontent-%COMP%] {\n  background-color: #fdd835;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-600[_ngcontent-%COMP%]::after {\n  content: \" color: #fdd835 hue: 600 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-700[_ngcontent-%COMP%] {\n  background-color: #fbc02d;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-700[_ngcontent-%COMP%]::after {\n  content: \" color: #fbc02d hue: 700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-800[_ngcontent-%COMP%] {\n  background-color: #f9a825;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-800[_ngcontent-%COMP%]::after {\n  content: \" color: #f9a825 hue: 800 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-900[_ngcontent-%COMP%] {\n  background-color: #f57f17;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-900[_ngcontent-%COMP%]::after {\n  content: \" color: #f57f17 hue: 900 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-A100[_ngcontent-%COMP%] {\n  background-color: #ffff8d;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ffff8d hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-A200[_ngcontent-%COMP%] {\n  background-color: yellow;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-A200[_ngcontent-%COMP%]::after {\n  content: \" color: yellow hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-A400[_ngcontent-%COMP%] {\n  background-color: #ffea00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #ffea00 hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-yellow-A700[_ngcontent-%COMP%] {\n  background-color: #ffd600;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-yellow-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #ffd600 hue: A700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-50[_ngcontent-%COMP%] {\n  background-color: #fff8e1;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-50[_ngcontent-%COMP%]::after {\n  content: \" color: #fff8e1 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-100[_ngcontent-%COMP%] {\n  background-color: #ffecb3;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-100[_ngcontent-%COMP%]::after {\n  content: \" color: #ffecb3 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-200[_ngcontent-%COMP%] {\n  background-color: #ffe082;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-200[_ngcontent-%COMP%]::after {\n  content: \" color: #ffe082 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-300[_ngcontent-%COMP%] {\n  background-color: #ffd54f;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-300[_ngcontent-%COMP%]::after {\n  content: \" color: #ffd54f hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-400[_ngcontent-%COMP%] {\n  background-color: #ffca28;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-400[_ngcontent-%COMP%]::after {\n  content: \" color: #ffca28 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-500[_ngcontent-%COMP%] {\n  background-color: #ffc107;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-500[_ngcontent-%COMP%]::after {\n  content: \" color: #ffc107 hue: 500 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-600[_ngcontent-%COMP%] {\n  background-color: #ffb300;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-600[_ngcontent-%COMP%]::after {\n  content: \" color: #ffb300 hue: 600 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-700[_ngcontent-%COMP%] {\n  background-color: #ffa000;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-700[_ngcontent-%COMP%]::after {\n  content: \" color: #ffa000 hue: 700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-800[_ngcontent-%COMP%] {\n  background-color: #ff8f00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-800[_ngcontent-%COMP%]::after {\n  content: \" color: #ff8f00 hue: 800 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-900[_ngcontent-%COMP%] {\n  background-color: #ff6f00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-900[_ngcontent-%COMP%]::after {\n  content: \" color: #ff6f00 hue: 900 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-A100[_ngcontent-%COMP%] {\n  background-color: #ffe57f;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ffe57f hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-A200[_ngcontent-%COMP%] {\n  background-color: #ffd740;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #ffd740 hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-A400[_ngcontent-%COMP%] {\n  background-color: #ffc400;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #ffc400 hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-amber-A700[_ngcontent-%COMP%] {\n  background-color: #ffab00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-amber-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #ffab00 hue: A700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-50[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-50[_ngcontent-%COMP%]::after {\n  content: \" color: #fff3e0 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-100[_ngcontent-%COMP%] {\n  background-color: #ffe0b2;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-100[_ngcontent-%COMP%]::after {\n  content: \" color: #ffe0b2 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-200[_ngcontent-%COMP%] {\n  background-color: #ffcc80;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-200[_ngcontent-%COMP%]::after {\n  content: \" color: #ffcc80 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-300[_ngcontent-%COMP%] {\n  background-color: #ffb74d;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-300[_ngcontent-%COMP%]::after {\n  content: \" color: #ffb74d hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-400[_ngcontent-%COMP%] {\n  background-color: #ffa726;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-400[_ngcontent-%COMP%]::after {\n  content: \" color: #ffa726 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-500[_ngcontent-%COMP%] {\n  background-color: #ff9800;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-500[_ngcontent-%COMP%]::after {\n  content: \" color: #ff9800 hue: 500 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-600[_ngcontent-%COMP%] {\n  background-color: #fb8c00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-600[_ngcontent-%COMP%]::after {\n  content: \" color: #fb8c00 hue: 600 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-700[_ngcontent-%COMP%] {\n  background-color: #f57c00;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-700[_ngcontent-%COMP%]::after {\n  content: \" color: #f57c00 hue: 700 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-800[_ngcontent-%COMP%] {\n  background-color: #ef6c00;\n  color: white;\n}\n\n.tp-orange-800[_ngcontent-%COMP%]::after {\n  content: \" color: #ef6c00 hue: 800 contrast: white\";\n}\n\n.tp-orange-900[_ngcontent-%COMP%] {\n  background-color: #e65100;\n  color: white;\n}\n\n.tp-orange-900[_ngcontent-%COMP%]::after {\n  content: \" color: #e65100 hue: 900 contrast: white\";\n}\n\n.tp-orange-A100[_ngcontent-%COMP%] {\n  background-color: #ffd180;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ffd180 hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-A200[_ngcontent-%COMP%] {\n  background-color: #ffab40;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #ffab40 hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-A400[_ngcontent-%COMP%] {\n  background-color: #ff9100;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-orange-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #ff9100 hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-orange-A700[_ngcontent-%COMP%] {\n  background-color: #ff6d00;\n  color: black;\n}\n\n.tp-orange-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #ff6d00 hue: A700 contrast: black\";\n}\n\n.tp-deep-orange[_ngcontent-%COMP%] {\n  background-color: #ff5722;\n  color: white;\n}\n\n.tp-deep-orange-50[_ngcontent-%COMP%] {\n  background-color: #fbe9e7;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-orange-50[_ngcontent-%COMP%]::after {\n  content: \" color: #fbe9e7 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-orange-100[_ngcontent-%COMP%] {\n  background-color: #ffccbc;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-orange-100[_ngcontent-%COMP%]::after {\n  content: \" color: #ffccbc hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-orange-200[_ngcontent-%COMP%] {\n  background-color: #ffab91;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-orange-200[_ngcontent-%COMP%]::after {\n  content: \" color: #ffab91 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-orange-300[_ngcontent-%COMP%] {\n  background-color: #ff8a65;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-orange-300[_ngcontent-%COMP%]::after {\n  content: \" color: #ff8a65 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-orange-400[_ngcontent-%COMP%] {\n  background-color: #ff7043;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-orange-400[_ngcontent-%COMP%]::after {\n  content: \" color: #ff7043 hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-orange-500[_ngcontent-%COMP%] {\n  background-color: #ff5722;\n  color: white;\n}\n\n.tp-deep-orange-500[_ngcontent-%COMP%]::after {\n  content: \" color: #ff5722 hue: 500 contrast: white\";\n}\n\n.tp-deep-orange-600[_ngcontent-%COMP%] {\n  background-color: #f4511e;\n  color: white;\n}\n\n.tp-deep-orange-600[_ngcontent-%COMP%]::after {\n  content: \" color: #f4511e hue: 600 contrast: white\";\n}\n\n.tp-deep-orange-700[_ngcontent-%COMP%] {\n  background-color: #e64a19;\n  color: white;\n}\n\n.tp-deep-orange-700[_ngcontent-%COMP%]::after {\n  content: \" color: #e64a19 hue: 700 contrast: white\";\n}\n\n.tp-deep-orange-800[_ngcontent-%COMP%] {\n  background-color: #d84315;\n  color: white;\n}\n\n.tp-deep-orange-800[_ngcontent-%COMP%]::after {\n  content: \" color: #d84315 hue: 800 contrast: white\";\n}\n\n.tp-deep-orange-900[_ngcontent-%COMP%] {\n  background-color: #bf360c;\n  color: white;\n}\n\n.tp-deep-orange-900[_ngcontent-%COMP%]::after {\n  content: \" color: #bf360c hue: 900 contrast: white\";\n}\n\n.tp-deep-orange-A100[_ngcontent-%COMP%] {\n  background-color: #ff9e80;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-orange-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #ff9e80 hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-orange-A200[_ngcontent-%COMP%] {\n  background-color: #ff6e40;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-deep-orange-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #ff6e40 hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-deep-orange-A400[_ngcontent-%COMP%] {\n  background-color: #ff3d00;\n  color: white;\n}\n\n.tp-deep-orange-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #ff3d00 hue: A400 contrast: white\";\n}\n\n.tp-deep-orange-A700[_ngcontent-%COMP%] {\n  background-color: #dd2c00;\n  color: white;\n}\n\n.tp-deep-orange-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #dd2c00 hue: A700 contrast: white\";\n}\n\n.tp-brown[_ngcontent-%COMP%] {\n  background-color: #795548;\n  color: white;\n}\n\n.tp-brown-50[_ngcontent-%COMP%] {\n  background-color: #efebe9;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-brown-50[_ngcontent-%COMP%]::after {\n  content: \" color: #efebe9 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-brown-100[_ngcontent-%COMP%] {\n  background-color: #d7ccc8;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-brown-100[_ngcontent-%COMP%]::after {\n  content: \" color: #d7ccc8 hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-brown-200[_ngcontent-%COMP%] {\n  background-color: #bcaaa4;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-brown-200[_ngcontent-%COMP%]::after {\n  content: \" color: #bcaaa4 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-brown-300[_ngcontent-%COMP%] {\n  background-color: #a1887f;\n  color: white;\n}\n\n.tp-brown-300[_ngcontent-%COMP%]::after {\n  content: \" color: #a1887f hue: 300 contrast: white\";\n}\n\n.tp-brown-400[_ngcontent-%COMP%] {\n  background-color: #8d6e63;\n  color: white;\n}\n\n.tp-brown-400[_ngcontent-%COMP%]::after {\n  content: \" color: #8d6e63 hue: 400 contrast: white\";\n}\n\n.tp-brown-500[_ngcontent-%COMP%] {\n  background-color: #795548;\n  color: white;\n}\n\n.tp-brown-500[_ngcontent-%COMP%]::after {\n  content: \" color: #795548 hue: 500 contrast: white\";\n}\n\n.tp-brown-600[_ngcontent-%COMP%] {\n  background-color: #6d4c41;\n  color: white;\n}\n\n.tp-brown-600[_ngcontent-%COMP%]::after {\n  content: \" color: #6d4c41 hue: 600 contrast: white\";\n}\n\n.tp-brown-700[_ngcontent-%COMP%] {\n  background-color: #5d4037;\n  color: white;\n}\n\n.tp-brown-700[_ngcontent-%COMP%]::after {\n  content: \" color: #5d4037 hue: 700 contrast: white\";\n}\n\n.tp-brown-800[_ngcontent-%COMP%] {\n  background-color: #4e342e;\n  color: white;\n}\n\n.tp-brown-800[_ngcontent-%COMP%]::after {\n  content: \" color: #4e342e hue: 800 contrast: white\";\n}\n\n.tp-brown-900[_ngcontent-%COMP%] {\n  background-color: #3e2723;\n  color: white;\n}\n\n.tp-brown-900[_ngcontent-%COMP%]::after {\n  content: \" color: #3e2723 hue: 900 contrast: white\";\n}\n\n.tp-brown-A100[_ngcontent-%COMP%] {\n  background-color: #d7ccc8;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-brown-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #d7ccc8 hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-brown-A200[_ngcontent-%COMP%] {\n  background-color: #bcaaa4;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-brown-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #bcaaa4 hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-brown-A400[_ngcontent-%COMP%] {\n  background-color: #8d6e63;\n  color: white;\n}\n\n.tp-brown-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #8d6e63 hue: A400 contrast: white\";\n}\n\n.tp-brown-A700[_ngcontent-%COMP%] {\n  background-color: #5d4037;\n  color: white;\n}\n\n.tp-brown-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #5d4037 hue: A700 contrast: white\";\n}\n\n.tp-grey[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-50[_ngcontent-%COMP%] {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-50[_ngcontent-%COMP%]::after {\n  content: \" color: #fafafa hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-100[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-100[_ngcontent-%COMP%]::after {\n  content: \" color: whitesmoke hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-200[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-200[_ngcontent-%COMP%]::after {\n  content: \" color: #eeeeee hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-300[_ngcontent-%COMP%] {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-300[_ngcontent-%COMP%]::after {\n  content: \" color: #e0e0e0 hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-400[_ngcontent-%COMP%] {\n  background-color: #bdbdbd;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-400[_ngcontent-%COMP%]::after {\n  content: \" color: #bdbdbd hue: 400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-500[_ngcontent-%COMP%] {\n  background-color: #9e9e9e;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-500[_ngcontent-%COMP%]::after {\n  content: \" color: #9e9e9e hue: 500 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-600[_ngcontent-%COMP%] {\n  background-color: #757575;\n  color: white;\n}\n\n.tp-grey-600[_ngcontent-%COMP%]::after {\n  content: \" color: #757575 hue: 600 contrast: white\";\n}\n\n.tp-grey-700[_ngcontent-%COMP%] {\n  background-color: #616161;\n  color: white;\n}\n\n.tp-grey-700[_ngcontent-%COMP%]::after {\n  content: \" color: #616161 hue: 700 contrast: white\";\n}\n\n.tp-grey-800[_ngcontent-%COMP%] {\n  background-color: #424242;\n  color: white;\n}\n\n.tp-grey-800[_ngcontent-%COMP%]::after {\n  content: \" color: #424242 hue: 800 contrast: white\";\n}\n\n.tp-grey-900[_ngcontent-%COMP%] {\n  background-color: #212121;\n  color: white;\n}\n\n.tp-grey-900[_ngcontent-%COMP%]::after {\n  content: \" color: #212121 hue: 900 contrast: white\";\n}\n\n.tp-grey-A100[_ngcontent-%COMP%] {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-A100[_ngcontent-%COMP%]::after {\n  content: \" color: white hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-A200[_ngcontent-%COMP%] {\n  background-color: #eeeeee;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #eeeeee hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-A400[_ngcontent-%COMP%] {\n  background-color: #bdbdbd;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-grey-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #bdbdbd hue: A400 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-grey-A700[_ngcontent-%COMP%] {\n  background-color: #616161;\n  color: white;\n}\n\n.tp-grey-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #616161 hue: A700 contrast: white\";\n}\n\n.tp-blue-grey[_ngcontent-%COMP%] {\n  background-color: #607d8b;\n  color: white;\n}\n\n.tp-blue-grey-50[_ngcontent-%COMP%] {\n  background-color: #eceff1;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-grey-50[_ngcontent-%COMP%]::after {\n  content: \" color: #eceff1 hue: 50 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-grey-100[_ngcontent-%COMP%] {\n  background-color: #cfd8dc;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-grey-100[_ngcontent-%COMP%]::after {\n  content: \" color: #cfd8dc hue: 100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-grey-200[_ngcontent-%COMP%] {\n  background-color: #b0bec5;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-grey-200[_ngcontent-%COMP%]::after {\n  content: \" color: #b0bec5 hue: 200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-grey-300[_ngcontent-%COMP%] {\n  background-color: #90a4ae;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-grey-300[_ngcontent-%COMP%]::after {\n  content: \" color: #90a4ae hue: 300 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-grey-400[_ngcontent-%COMP%] {\n  background-color: #78909c;\n  color: white;\n}\n\n.tp-blue-grey-400[_ngcontent-%COMP%]::after {\n  content: \" color: #78909c hue: 400 contrast: white\";\n}\n\n.tp-blue-grey-500[_ngcontent-%COMP%] {\n  background-color: #607d8b;\n  color: white;\n}\n\n.tp-blue-grey-500[_ngcontent-%COMP%]::after {\n  content: \" color: #607d8b hue: 500 contrast: white\";\n}\n\n.tp-blue-grey-600[_ngcontent-%COMP%] {\n  background-color: #546e7a;\n  color: white;\n}\n\n.tp-blue-grey-600[_ngcontent-%COMP%]::after {\n  content: \" color: #546e7a hue: 600 contrast: white\";\n}\n\n.tp-blue-grey-700[_ngcontent-%COMP%] {\n  background-color: #455a64;\n  color: white;\n}\n\n.tp-blue-grey-700[_ngcontent-%COMP%]::after {\n  content: \" color: #455a64 hue: 700 contrast: white\";\n}\n\n.tp-blue-grey-800[_ngcontent-%COMP%] {\n  background-color: #37474f;\n  color: white;\n}\n\n.tp-blue-grey-800[_ngcontent-%COMP%]::after {\n  content: \" color: #37474f hue: 800 contrast: white\";\n}\n\n.tp-blue-grey-900[_ngcontent-%COMP%] {\n  background-color: #263238;\n  color: white;\n}\n\n.tp-blue-grey-900[_ngcontent-%COMP%]::after {\n  content: \" color: #263238 hue: 900 contrast: white\";\n}\n\n.tp-blue-grey-A100[_ngcontent-%COMP%] {\n  background-color: #cfd8dc;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-grey-A100[_ngcontent-%COMP%]::after {\n  content: \" color: #cfd8dc hue: A100 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-grey-A200[_ngcontent-%COMP%] {\n  background-color: #b0bec5;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.tp-blue-grey-A200[_ngcontent-%COMP%]::after {\n  content: \" color: #b0bec5 hue: A200 contrast: rgba(0, 0, 0, 0.87)\";\n}\n\n.tp-blue-grey-A400[_ngcontent-%COMP%] {\n  background-color: #78909c;\n  color: white;\n}\n\n.tp-blue-grey-A400[_ngcontent-%COMP%]::after {\n  content: \" color: #78909c hue: A400 contrast: white\";\n}\n\n.tp-blue-grey-A700[_ngcontent-%COMP%] {\n  background-color: #455a64;\n  color: white;\n}\n\n.tp-blue-grey-A700[_ngcontent-%COMP%]::after {\n  content: \" color: #455a64 hue: A700 contrast: white\";\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3Rlc3QtZmVhdHVyZXMvdGVzdC1wYWxldHRlL3Rlc3QtcGFsZXR0ZS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvdGV4dC1maWVsZC9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL2ZvY3VzLWluZGljYXRvcnMvX3ByaXZhdGUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19sYXlvdXQtY29tbW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9fY29yZS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90aGVtZS9fY3NzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxnQkFBQTtFQUlBLGtCQUFBO0FDVEo7QURnQkk7RUFDRSx3QkFBQTtBQ2ROOztBRGtCRTtFQUNFLGlCQUFBO0FDZko7O0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsNkRBQUE7RUFJQSwyQkFBQTtFQUtFLDZEQUFBO0FDdkJOO0FDK0JJO0VGSEUsYUFBQTtBQ3pCTjs7QUNuQkU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtC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QUNJLG1EQUFBO0FBd2dGWjs7QUE5Z0ZRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBaWhGWjs7QUE5Z0ZRO0VBQ0ksbURBQUE7QUFpaEZaOztBQXZoRlE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUEwaEZaOztBQXZoRlE7RUFDSSxtREFBQTtBQTBoRlo7O0FBaGlGUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQW1pRlo7O0FBaGlGUTtFQUNJLG1EQUFBO0FBbWlGWjs7QUF6aUZRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBNGlGWjs7QUF6aUZRO0VBQ0ksbURBQUE7QUE0aUZaOztBQWxqRlE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUFxakZaOztBQWxqRlE7RUFDSSxtREFBQTtBQXFqRlo7O0FBM2pGUTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUE4akZaOztBQTNqRlE7RUFDSSxrRUFBQTtBQThqRlo7O0FBcGtGUTtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUF1a0ZaOztBQXBrRlE7RUFDSSxrRUFBQTtBQXVrRlo7O0FBN2tGUTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQWdsRlo7O0FBN2tGUTtFQUNJLG9EQUFBO0FBZ2xGWjs7QUF0bEZRO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBeWxGWjs7QUF0bEZRO0VBQ0ksb0RBQUE7QUF5bEZaIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSAnQGFuZ3VsYXIvY2RrJztcbkB1c2UgJy4uL3Rva2Vucy9tMi9tYXQvcmlwcGxlJyBhcyB0b2tlbnMtbWF0LXJpcHBsZTtcbkB1c2UgJy4uL3Rva2Vucy90b2tlbi11dGlscyc7XG5cbkBtaXhpbiByaXBwbGUoKSB7XG4gIC8vIFRoZSBob3N0IGVsZW1lbnQgb2YgYW4gbWF0LXJpcHBsZSBkaXJlY3RpdmUgc2hvdWxkIGFsd2F5cyBoYXZlIGEgcG9zaXRpb24gb2YgXCJhYnNvbHV0ZVwiIG9yXG4gIC8vIFwicmVsYXRpdmVcIiBzbyB0aGF0IHRoZSByaXBwbGVzIGluc2lkZSBhcmUgY29ycmVjdGx5IHBvc2l0aW9uZWQgcmVsYXRpdmVseSB0byB0aGUgY29udGFpbmVyLlxuICAubWF0LXJpcHBsZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC8vIEJ5IGRlZmF1bHQsIGV2ZXJ5IHJpcHBsZSBjb250YWluZXIgc2hvdWxkIGhhdmUgcG9zaXRpb246IHJlbGF0aXZlIGluIGZhdm9yIG9mIGNyZWF0aW5nIGFuXG4gICAgLy8gZWFzeSBBUEkgZm9yIGRldmVsb3BlcnMgdXNpbmcgdGhlIE1hdFJpcHBsZSBkaXJlY3RpdmUuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLy8gUHJvbW90ZSBjb250YWluZXJzIHRoYXQgaGF2ZSByaXBwbGVzIHRvIGEgbmV3IGxheWVyLiBXZSB3YW50IHRvIHRhcmdldCBgOm5vdCg6ZW1wdHkpYCxcbiAgICAvLyBiZWNhdXNlIHdlIGRvbid0IHdhbnQgYWxsIHJpcHBsZSBjb250YWluZXJzIHRvIGhhdmUgdGhlaXIgb3duIGxheWVyIHNpbmNlIHRoZXkncmUgdXNlZCBpbiBhXG4gICAgLy8gbG90IG9mIHBsYWNlcyBhbmQgdGhlIGxheWVyIGlzIG9ubHkgcmVsZXZhbnQgd2hpbGUgYW5pbWF0aW5nLiBOb3RlIHRoYXQgaWRlYWxseSB3ZSdkIHVzZVxuICAgIC8vIHRoZSBgY29udGFpbmAgcHJvcGVydHkgaGVyZSAoc2VlICMxMzE3NSksIGJlY2F1c2UgYDplbXB0eWAgY2FuIGJlIGJyb2tlbiBieSBoYXZpbmcgZXh0cmFcbiAgICAvLyB0ZXh0IGluc2lkZSB0aGUgZWxlbWVudCwgYnV0IGl0IGlzbid0IHZlcnkgd2VsbCBzdXBwb3J0ZWQgeWV0LlxuICAgICY6bm90KDplbXB0eSkge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuXG4gICAgLy8gV2UgdXNlIGEgM2QgdHJhbnNmb3JtIGhlcmUgaW4gb3JkZXIgdG8gYXZvaWQgYW4gaXNzdWUgaW4gU2FmYXJpIHdoZXJlXG4gICAgLy8gdGhlIHJpcHBsZXMgYXJlbid0IGNsaXBwZWQgd2hlbiBpbnNpZGUgdGhlIHNoYWRvdyBET00gKHNlZSAjMjQwMjgpLlxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLCAwLCAwKTtcblxuICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLnVzZS10b2tlbnMoXG4gICAgICB0b2tlbnMtbWF0LXJpcHBsZS4kcHJlZml4LCB0b2tlbnMtbWF0LXJpcHBsZS5nZXQtdG9rZW4tc2xvdHMoKSkge1xuICAgICAgLy8gV2UgaGF2ZSB0byBlbWl0IGEgZmFsbGJhY2sgdmFsdWUgaGVyZSwgYmVjYXVzZSBzb21lIGludGVybmFsIGJ1aWxkcyBkZXBlbmQgb24gaXQuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoI3t0b2tlbi11dGlscy5nZXQtdG9rZW4tdmFyaWFibGUoY29sb3IpfSwgcmdiYSgjMDAwLCAwLjEpKTtcbiAgICB9XG5cbiAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJpcHBsZSBpcyBvcGFxdWUsIGNhdXNpbmcgaXQgdG8gb2JzdHJ1Y3QgdGhlIGNvbnRlbnQuXG4gICAgQGluY2x1ZGUgY2RrLmhpZ2gtY29udHJhc3QoYWN0aXZlLCBvZmYpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XHJcbkB1c2UgJ0Bhbmd1bGFyL21hdGVyaWFsJyBhcyBtYXQ7XHJcblxyXG5AaW5jbHVkZSBtYXQuY29yZSgpO1xyXG5cclxuJGNvbG9yczogKFxyXG4gICAgXCJyZWRcIjogbWF0LiRyZWQtcGFsZXR0ZSxcclxuICAgIFwicGlua1wiOiBtYXQuJHBpbmstcGFsZXR0ZSxcclxuICAgIFwicHVycGxlXCI6IG1hdC4kcHVycGxlLXBhbGV0dGUsXHJcbiAgICBcImRlZXAtcHVycGxlXCI6IG1hdC4kZGVlcC1wdXJwbGUtcGFsZXR0ZSxcclxuICAgIFwiaW5kaWdvXCI6IG1hdC4kaW5kaWdvLXBhbGV0dGUsXHJcbiAgICBcImJsdWVcIjogbWF0LiRibHVlLXBhbGV0dGUsXHJcbiAgICBcImxpZ2h0LWJsdWVcIjogbWF0LiRsaWdodC1ibHVlLXBhbGV0dGUsXHJcbiAgICBcImN5YW5cIjogbWF0LiRjeWFuLXBhbGV0dGUsXHJcbiAgICBcInRlYWxcIjogbWF0LiR0ZWFsLXBhbGV0dGUsXHJcbiAgICBcImdyZWVuXCI6IG1hdC4kZ3JlZW4tcGFsZXR0ZSxcclxuICAgIFwibGlnaHQtZ3JlZW5cIjogbWF0LiRsaWdodC1ncmVlbi1wYWxldHRlLFxyXG4gICAgXCJsaW1lXCI6IG1hdC4kbGltZS1wYWxldHRlLFxyXG4gICAgXCJ5ZWxsb3dcIjogbWF0LiR5ZWxsb3ctcGFsZXR0ZSxcclxuICAgIFwiYW1iZXJcIjogbWF0LiRhbWJlci1wYWxldHRlLFxyXG4gICAgXCJvcmFuZ2VcIjogbWF0LiRvcmFuZ2UtcGFsZXR0ZSxcclxuICAgIFwiZGVlcC1vcmFuZ2VcIjogbWF0LiRkZWVwLW9yYW5nZS1wYWxldHRlLFxyXG4gICAgXCJicm93blwiOiBtYXQuJGJyb3duLXBhbGV0dGUsXHJcbiAgICBcImdyZXlcIjogbWF0LiRncmV5LXBhbGV0dGUsXHJcbiAgICBcImJsdWUtZ3JleVwiOiBtYXQuJGJsdWUtZ3JleS1wYWxldHRlLFxyXG4pO1xyXG5cclxuJGh1ZXM6IDUwLCAxMDAsIDIwMCwgMzAwLCA0MDAsIDUwMCwgNjAwLCA3MDAsIDgwMCwgOTAwLCBBMTAwLCBBMjAwLCBBNDAwLCBBNzAwO1xyXG5cclxuXHJcbkBlYWNoICRjb2xvck5hbWUsICRtYXRWYWwgaW4gJGNvbG9ycyB7XHJcbiAgICAkdmFyOiBtYXQuZGVmaW5lLXBhbGV0dGUoJG1hdFZhbCk7XHJcbiAgICAudHAtI3skY29sb3JOYW1lfSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHZhcik7XHJcbiAgICAgICAgY29sb3I6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR2YXIsIGRlZmF1bHQtY29udHJhc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIEBlYWNoICRoIGluICRodWVzIHtcclxuICAgICAgICAudHAtI3skY29sb3JOYW1lfS0jeyRofSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCR2YXIsJGgpO1xyXG4gICAgICAgICAgICBjb2xvcjogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJHZhciwgXCIjeyRofS1jb250cmFzdFwiKTs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudHAtI3skY29sb3JOYW1lfS0jeyRofTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiBcIiBjb2xvcjogXCIgKyBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkdmFyLCRoKSArIFwiIGh1ZTogXCIgKyAkaCArIFwiIGNvbnRyYXN0OiBcIiArICBtYXQuZ2V0LWNvbG9yLWZyb20tcGFsZXR0ZSgkdmFyLCBcIiN7JGh9LWNvbnRyYXN0XCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvLy8gRW1pdHMgYSBDU1MgY2xhc3MsIGAuY2RrLXZpc3VhbGx5LWhpZGRlbmAuIFRoaXMgY2xhc3MgY2FuIGJlIGFwcGxpZWQgdG8gYW4gZWxlbWVudFxuLy8vIHRvIG1ha2UgdGhhdCBlbGVtZW50IHZpc3VhbGx5IGhpZGRlbiB3aGlsZSByZW1haW5pbmcgYXZhaWxhYmxlIHRvIGFzc2lzdGl2ZSB0ZWNobm9sb2d5LlxuQG1peGluIGExMXktdmlzdWFsbHktaGlkZGVuKCkge1xuICAuY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcblxuICAgIC8vIFRoaXMgd29ya3MgYXJvdW5kIGEgQ2hyb21lIGJ1ZyB0aGF0IGNhbiBjYXVzZSB0aGUgdGFiIHRvIGNyYXNoIHdoZW4gbGFyZ2UgYW1vdW50cyBvZlxuICAgIC8vIG5vbi1FbmdsaXNoIHRleHQgZ2V0IHdyYXBwZWQ6IGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTEyMDE0NDRcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgLy8gQXZvaWQgYnJvd3NlcnMgcmVuZGVyaW5nIHRoZSBmb2N1cyByaW5nIGluIHNvbWUgY2FzZXMuXG4gICAgb3V0bGluZTogMDtcblxuICAgIC8vIEF2b2lkIHNvbWUgY2FzZXMgd2hlcmUgdGhlIGJyb3dzZXIgd2lsbCBzdGlsbCByZW5kZXIgdGhlIG5hdGl2ZSBjb250cm9scyAoc2VlICM5MDQ5KS5cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuXG4gICAgLy8gV2UgbmVlZCBhdCBsZWFzdCBvbmUgb2YgdG9wL2JvdHRvbS9sZWZ0L3JpZ2h0IGluIG9yZGVyIHRvIHByZXZlbnQgY2FzZXMgd2hlcmUgdGhlXG4gICAgLy8gYWJzb2x1dGUtcG9zaXRpb25lZCBlbGVtZW50IGlzIHB1c2hlZCBkb3duIGFuZCBjYW4gYWZmZWN0IHNjcm9sbGluZyAoc2VlICMyNDU5NykuXG4gICAgLy8gYGxlZnRgIHdhcyBjaG9zZW4gaGVyZSwgYmVjYXVzZSBpdCdzIHRoZSBsZWFzdCBsaWtlbHkgdG8gYnJlYWsgb3ZlcnJpZGVzIHdoZXJlIHRoZVxuICAgIC8vIGVsZW1lbnQgbWlnaHQgaGF2ZSBiZWVuIHBvc2l0aW9uZWQgKGUuZy4gYG1hdC1jaGVja2JveGApLlxuICAgIGxlZnQ6IDA7XG5cbiAgICBbZGlyPSdydGwnXSAmIHtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuLy8vIEBkZXByZWNhdGVkIFVzZSBgYTExeS12aXN1YWxseS1oaWRkZW5gLlxuQG1peGluIGExMXkoKSB7XG4gIEBpbmNsdWRlIGExMXktdmlzdWFsbHktaGlkZGVuO1xufVxuXG4vLy8gRW1pdHMgdGhlIG1peGluJ3MgY29udGVudCBuZXN0ZWQgdW5kZXIgYCRzZWxlY3Rvci1jb250ZXh0YCBpZiBgJHNlbGVjdG9yLWNvbnRleHRgXG4vLy8gaXMgbm9uLWVtcHR5LlxuLy8vIEBwYXJhbSB7U3RyaW5nfSBzZWxlY3Rvci1jb250ZXh0IFRoZSBzZWxlY3RvciB1bmRlciB3aGljaCB0byBuZXN0IHRoZSBtaXhpbidzIGNvbnRlbnQuXG5AbWl4aW4gX29wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gIEBpZiAoJHNlbGVjdG9yLWNvbnRleHQgPT0gJycpIHtcbiAgICBAY29udGVudDtcbiAgfVxuICBAZWxzZSB7XG4gICAgI3skc2VsZWN0b3ItY29udGV4dH0ge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vLyBBcHBsaWVzIHN0eWxlcyBmb3IgdXNlcnMgaW4gaGlnaCBjb250cmFzdCBtb2RlLiBOb3RlIHRoYXQgdGhpcyBvbmx5IGFwcGxpZXNcbi8vLyB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4vLy8gYXR0cmlidXRlLCBob3dldmVyIENocm9tZSBoYW5kbGVzIGhpZ2ggY29udHJhc3QgZGlmZmVyZW50bHkuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gdGFyZ2V0IFR5cGUgb2YgaGlnaCBjb250cmFzdCBzZXR0aW5nIHRvIHRhcmdldC4gRGVmYXVsdHMgdG8gYGFjdGl2ZWAsIGNhbiBiZVxuLy8vICAgICBgd2hpdGUtb24tYmxhY2tgIG9yIGBibGFjay1vbi13aGl0ZWAuXG4vLy8gQHBhcmFtIHtTdHJpbmd9IGVuY2Fwc3VsYXRpb24gV2hldGhlciB0byBlbWl0IHN0eWxlcyBmb3IgdmlldyBlbmNhcHN1bGF0aW9uLiBWYWx1ZXMgYXJlOlxuLy8vICAgICAqIGBvbmAgLSB3b3JrcyBmb3IgYEVtdWxhdGVkYCwgYE5hdGl2ZWAsIGFuZCBgU2hhZG93RG9tYFxuLy8vICAgICAqIGBvZmZgIC0gd29ya3MgZm9yIGBOb25lYFxuLy8vICAgICAqIGBhbnlgIC0gd29ya3MgZm9yIGFsbCBlbmNhcHN1bGF0aW9uIG1vZGVzIGJ5IGVtaXR0aW5nIHRoZSBDU1MgdHdpY2UgKGRlZmF1bHQpLlxuQG1peGluIGhpZ2gtY29udHJhc3QoJHRhcmdldDogYWN0aXZlLCAkZW5jYXBzdWxhdGlvbjogJ2FueScpIHtcbiAgQGlmICgkdGFyZ2V0ICE9ICdhY3RpdmUnIGFuZCAkdGFyZ2V0ICE9ICdibGFjay1vbi13aGl0ZScgYW5kICR0YXJnZXQgIT0gJ3doaXRlLW9uLWJsYWNrJykge1xuICAgIEBlcnJvciAnVW5rbm93biBjZGstaGlnaC1jb250cmFzdCB2YWx1ZSBcIiN7JHRhcmdldH1cIiBwcm92aWRlZC4gJyArXG4gICAgICAgICAgICdBbGxvd2VkIHZhbHVlcyBhcmUgXCJhY3RpdmVcIiwgXCJibGFjay1vbi13aGl0ZVwiLCBhbmQgXCJ3aGl0ZS1vbi1ibGFja1wiJztcbiAgfVxuXG4gIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29uJyBhbmQgJGVuY2Fwc3VsYXRpb24gIT0gJ29mZicgYW5kICRlbmNhcHN1bGF0aW9uICE9ICdhbnknKSB7XG4gICAgQGVycm9yICdVbmtub3duIGNkay1oaWdoLWNvbnRyYXN0IGVuY2Fwc3VsYXRpb24gXCIjeyRlbmNhcHN1bGF0aW9ufVwiIHByb3ZpZGVkLiAnICtcbiAgICAgICAgICAgJ0FsbG93ZWQgdmFsdWVzIGFyZSBcIm9uXCIsIFwib2ZmXCIsIGFuZCBcImFueVwiJztcbiAgfVxuXG4gIC8vIElmIHRoZSBzZWxlY3RvciBjb250ZXh0IGhhcyBtdWx0aXBsZSBwYXJ0cywgc3VjaCBhcyBgLnNlY3Rpb24sIC5yZWdpb25gLCBqdXN0IGRvaW5nXG4gIC8vIGAuY2RrLWhpZ2gtY29udHJhc3QteHh4ICN7Jn1gIHdpbGwgb25seSBhcHBseSB0aGUgcGFyZW50IHNlbGVjdG9yIHRvIHRoZSBmaXJzdCBwYXJ0IG9mIHRoZVxuICAvLyBjb250ZXh0LiBXZSBhZGRyZXNzIHRoaXMgYnkgbmVzdGluZyB0aGUgc2VsZWN0b3IgY29udGV4dCB1bmRlciAuY2RrLWhpZ2gtY29udHJhc3QuXG4gIEBhdC1yb290IHtcbiAgICAkc2VsZWN0b3ItY29udGV4dDogI3smfTtcblxuICAgIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29uJykge1xuICAgICAgLy8gTm90ZSB0aGF0IGlmIHRoaXMgc2VsZWN0b3IgaXMgdXBkYXRlZCwgdGhlIHNhbWUgY2hhbmdlIGhhcyB0byBiZSBtYWRlIGluc2lkZVxuICAgICAgLy8gYF9vdmVybGF5LnNjc3NgIHdoaWNoIGNhbid0IGRlcGVuZCBvbiB0aGlzIG1peGluIGR1ZSB0byBzb21lIGluZnJhc3RydWN0dXJlIGxpbWl0YXRpb25zLlxuICAgICAgLmNkay1oaWdoLWNvbnRyYXN0LSN7JHRhcmdldH0ge1xuICAgICAgICBAaW5jbHVkZSBfb3B0aW9uYWxseS1uZXN0LWNvbnRlbnQoJHNlbGVjdG9yLWNvbnRleHQpIHtcbiAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBpZiAoJGVuY2Fwc3VsYXRpb24gIT0gJ29mZicpIHtcbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC0jeyR0YXJnZXR9IDpob3N0IHtcbiAgICAgICAgQGluY2x1ZGUgX29wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIFdlIHdhbnQgb3ZlcmxheXMgdG8gYWx3YXlzIGFwcGVhciBvdmVyIHVzZXIgY29udGVudCwgc28gc2V0IGEgYmFzZWxpbmVcbi8vIHZlcnkgaGlnaCB6LWluZGV4IGZvciB0aGUgb3ZlcmxheSBjb250YWluZXIsIHdoaWNoIGlzIHdoZXJlIHdlIGNyZWF0ZSB0aGUgbmV3XG4vLyBzdGFja2luZyBjb250ZXh0IGZvciBhbGwgb3ZlcmxheXMuXG4kb3ZlcmxheS1jb250YWluZXItei1pbmRleDogMTAwMCAhZGVmYXVsdDtcbiRvdmVybGF5LXotaW5kZXg6IDEwMDAgIWRlZmF1bHQ7XG4kb3ZlcmxheS1iYWNrZHJvcC16LWluZGV4OiAxMDAwICFkZWZhdWx0O1xuXG4vLyBCYWNrZ3JvdW5kIGNvbG9yIGZvciBhbGwgb2YgdGhlIGJhY2tkcm9wc1xuJG92ZXJsYXktYmFja2Ryb3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMikgIWRlZmF1bHQ7XG5cbi8vIERlZmF1bHQgYmFja2Ryb3AgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3dpZnQtZWFzZS1vdXQuXG4kYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuLy8vIEVtaXRzIHN0cnVjdHVyYWwgc3R5bGVzIHJlcXVpcmVkIGZvciBjZGsvb3ZlcmxheSB0byBmdW5jdGlvbi5cbkBtaXhpbiBvdmVybGF5KCkge1xuICAuY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIC8vIERpc2FibGUgZXZlbnRzIGZyb20gYmVpbmcgY2FwdHVyZWQgb24gdGhlIG92ZXJsYXkgY29udGFpbmVyLlxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgLy8gVGhlIGNvbnRhaW5lciBzaG91bGQgYmUgdGhlIHNpemUgb2YgdGhlIHZpZXdwb3J0LlxuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC8vIFRoZSBvdmVybGF5LWNvbnRhaW5lciBpcyBhbiBpbnZpc2libGUgZWxlbWVudCB3aGljaCBjb250YWlucyBhbGwgaW5kaXZpZHVhbCBvdmVybGF5cy5cbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6ICRvdmVybGF5LWNvbnRhaW5lci16LWluZGV4O1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IHdoZW4gaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZCBub2Rlcy4gVGhpcyBkb2Vzbid0XG4gICAgICAvLyBpbmNsdWRlIG92ZXJsYXlzIHRoYXQgaGF2ZSBiZWVuIGRldGFjaGVkLCByYXRoZXIgdGhhbiBkaXNwb3NlZC5cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgdXNlIGFuIGV4dHJhIHdyYXBwZXIgZWxlbWVudCBpbiBvcmRlciB0byB1c2UgbWFrZSB0aGUgb3ZlcmxheSBpdHNlbGYgYSBmbGV4IGl0ZW0uXG4gIC8vIFRoaXMgbWFrZXMgY2VudGVyaW5nIHRoZSBvdmVybGF5IGVhc3kgd2l0aG91dCBydW5uaW5nIGludG8gdGhlIHN1YnBpeGVsIHJlbmRlcmluZ1xuICAvLyBwcm9ibGVtcyB0aWVkIHRvIHVzaW5nIGB0cmFuc2Zvcm1gIGFuZCB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIG90aGVyIHBvc2l0aW9uXG4gIC8vIHN0cmF0ZWdpZXMuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJG92ZXJsYXktei1pbmRleDtcbiAgfVxuXG4gIC8vIEEgc2luZ2xlIG92ZXJsYXkgcGFuZS5cbiAgLmNkay1vdmVybGF5LXBhbmUge1xuICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IGZvciB0aGlzIG9uZSB0byBzdGFydCBvZmYgYGFic29sdXRlYCxcbiAgICAvLyBpbiBvcmRlciBmb3IgdXMgdG8gYmUgYWJsZSB0byBtZWFzdXJlIGl0IGNvcnJlY3RseS5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB6LWluZGV4OiAkb3ZlcmxheS16LWluZGV4O1xuXG4gICAgLy8gRm9yIGNvbm5lY3RlZC1wb3NpdGlvbiBvdmVybGF5cywgd2Ugc2V0IGBkaXNwbGF5OiBmbGV4YCBpblxuICAgIC8vIG9yZGVyIHRvIGZvcmNlIGBtYXgtd2lkdGhgIGFuZCBgbWF4LWhlaWdodGAgdG8gdGFrZSBlZmZlY3QuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcCB7XG4gICAgLy8gVE9ETyhqZWxib3Vybik6IHJldXNlIHNpZGVuYXYgZnVsbHNjcmVlbiBtaXhpbi5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuXG4gICAgei1pbmRleDogJG92ZXJsYXktYmFja2Ryb3Atei1pbmRleDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbiAkYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC8vIE5vdGUgdGhhdCB3ZSBjYW4ndCBpbXBvcnQgYW5kIHVzZSB0aGUgYGhpZ2gtY29udHJhc3RgIG1peGluIGZyb20gYF9hMTF5LnNjc3NgLCBiZWNhdXNlXG4gICAgICAvLyB0aGlzIGZpbGUgd2lsbCBiZSBjb3BpZWQgdG8gdGhlIHRvcC1sZXZlbCBgY2RrYCBwYWNrYWdlIHdoZW4gcHV0dGluZyB0b2dldGhlciB0aGUgZmlsZXNcbiAgICAgIC8vIGZvciBucG0uIEFueSByZWxhdGl2ZSBpbXBvcnQgcGF0aHMgd2UgdXNlIGhlcmUgd2lsbCBiZWNvbWUgaW52YWxpZCBvbmNlIHRoZSBmaWxlIGlzIGNvcGllZC5cbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC1hY3RpdmUgJiB7XG4gICAgICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmdiYSBiYWNrZ3JvdW5kIHdpbGwgYmVjb21lIHNvbGlkXG4gICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrIHRvIG1ha2luZyBpdCBvcGFxdWUgdXNpbmcgYG9wYWNpdHlgLlxuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICRvdmVybGF5LWJhY2tkcm9wLWNvbG9yO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wIHtcbiAgICAvLyBEZWZpbmUgYSB0cmFuc2l0aW9uIG9uIHRoZSB2aXNpYmlsaXR5IHNvIHRoYXQgdGhlIGB0cmFuc2l0aW9uZW5kYCBldmVudCBjYW4gZmlyZSBpbW1lZGlhdGVseS5cbiAgICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5IDFtcyBsaW5lYXIsIG9wYWNpdHkgMW1zIGxpbmVhcjtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMTtcblxuICAgIC8vIE5vdGU6IGFzIG9mIEZpcmVmb3ggNTcsIGhhdmluZyB0aGUgYmFja2Ryb3AgYmUgYGJhY2tncm91bmQ6IG5vbmVgIHdpbGwgcHJldmVudCBpdCBmcm9tXG4gICAgLy8gY2FwdHVyaW5nIHRoZSB1c2VyJ3MgbW91c2Ugc2Nyb2xsIGV2ZW50cy4gU2luY2Ugd2UgYWxzbyBjYW4ndCB1c2Ugc29tZXRoaW5nIGxpa2VcbiAgICAvLyBgcmdiYSgwLCAwLCAwLCAwKWAsIHdlIHdvcmsgYXJvdW5kIHRoZSBpbmNvbnNpc3RlbmN5IGJ5IG5vdCBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGF0XG4gICAgLy8gYWxsIGFuZCB1c2luZyBgb3BhY2l0eWAgdG8gbWFrZSB0aGUgZWxlbWVudCB0cmFuc3BhcmVudC5cbiAgICAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wLW5vb3AtYW5pbWF0aW9uIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG5cbiAgLy8gT3ZlcmxheSBwYXJlbnQgZWxlbWVudCB1c2VkIHdpdGggdGhlIGNvbm5lY3RlZCBwb3NpdGlvbiBzdHJhdGVneS4gVXNlZCB0byBjb25zdHJhaW4gdGhlXG4gIC8vIG92ZXJsYXkgZWxlbWVudCdzIHNpemUgdG8gZml0IHdpdGhpbiB0aGUgdmlld3BvcnQuXG4gIC5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJG92ZXJsYXktei1pbmRleDtcblxuICAgIC8vIFdlIHVzZSBgZGlzcGxheTogZmxleGAgb24gdGhpcyBlbGVtZW50IGV4Y2x1c2l2ZWx5IGZvciBjZW50ZXJpbmcgY29ubmVjdGVkIG92ZXJsYXlzLlxuICAgIC8vIFdoZW4gKm5vdCogY2VudGVyaW5nLCBhIHRvcC9sZWZ0L2JvdHRvbS9yaWdodCB3aWxsIGJlIHNldCB3aGljaCBvdmVycmlkZXMgdGhlIG5vcm1hbFxuICAgIC8vIGZsZXggbGF5b3V0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBXZSB1c2UgdGhlIGBjb2x1bW5gIGRpcmVjdGlvbiBoZXJlIHRvIGF2b2lkIHNvbWUgZmxleGJveCBpc3N1ZXMgaW4gRWRnZVxuICAgIC8vIHdoZW4gdXNpbmcgdGhlIFwiZ3JvdyBhZnRlciBvcGVuXCIgb3B0aW9ucy5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLy8gQWRkIHNvbWUgZGltZW5zaW9ucyBzbyB0aGUgZWxlbWVudCBoYXMgYW4gYGlubmVyVGV4dGAgd2hpY2ggc29tZSBwZW9wbGUgZGVwZW5kIG9uIGluIHRlc3RzLlxuICAgIG1pbi13aWR0aDogMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiBkaXNhYmxpbmcgZ2xvYmFsIHNjcm9sbGluZy5cbiAgLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgdGhlIGNvbnRlbnQgbm90IHRvIGxvc2UgaXRzIHdpZHRoLiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgMTAwJSwgaW5zdGVhZCBvZlxuICAgIC8vIDEwMHZ3LCBiZWNhdXNlIDEwMHZ3IGluY2x1ZGVzIHRoZSB3aWR0aCBwbHVzIHRoZSBzY3JvbGxiYXIsIHdoZXJlYXMgMTAwJSBpcyB0aGUgd2lkdGhcbiAgICAvLyB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgd2UgbWFkZSBpdCBgZml4ZWRgLlxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gTm90ZTogdGhpcyB3aWxsIGFsd2F5cyBhZGQgYSBzY3JvbGxiYXIgdG8gd2hhdGV2ZXIgZWxlbWVudCBpdCBpcyBvbiwgd2hpY2ggY2FuXG4gICAgLy8gcG90ZW50aWFsbHkgcmVzdWx0IGluIGRvdWJsZSBzY3JvbGxiYXJzLiBJdCBzaG91bGRuJ3QgYmUgYW4gaXNzdWUsIGJlY2F1c2Ugd2Ugd29uJ3RcbiAgICAvLyBibG9jayBzY3JvbGxpbmcgb24gYSBwYWdlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2Nyb2xsYmFyIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cbiIsIi8vIFN0cnVjdHVyYWwgc3R5bGVzIGZvciB0aGUgYXV0b3NpemUgdGV4dCBmaWVsZHMuXG5AbWl4aW4gdGV4dC1maWVsZC1hdXRvc2l6ZSgpIHtcbiAgLy8gUmVtb3ZlIHRoZSByZXNpemUgaGFuZGxlIG9uIGF1dG9zaXppbmcgdGV4dGFyZWFzLCBiZWNhdXNlIHdoYXRldmVyIGhlaWdodFxuICAvLyB0aGUgdXNlciByZXNpemVkIHRvIHdpbGwgYmUgb3ZlcndyaXR0ZW4gb25jZSB0aGV5IHN0YXJ0IHR5cGluZyBhZ2Fpbi5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cblxuICAvLyBUaGlzIGNsYXNzIGlzIHRlbXBvcmFyaWx5IGFwcGxpZWQgdG8gdGhlIHRleHRhcmVhIHdoZW4gaXQgaXMgYmVpbmcgbWVhc3VyZWQuIEl0IGlzIGltbWVkaWF0ZWx5XG4gIC8vIHJlbW92ZWQgd2hlbiBtZWFzdXJpbmcgaXMgY29tcGxldGUuIFdlIHVzZSBgIWltcG9ydGFudGAgcnVsZXMgaGVyZSB0byBtYWtlIHN1cmUgdXNlci1zcGVjaWZpZWRcbiAgLy8gcnVsZXMgZG8gbm90IGludGVyZmVyZSB3aXRoIHRoZSBtZWFzdXJlbWVudC5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZyB7XG4gICAgQGluY2x1ZGUgX2F1dG9zaXplLW1lYXN1cmluZy1iYXNlO1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgfVxuXG4gIC8vIFNpbWlsYXIgdG8gdGhlIGBjZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nYCBjbGFzcywgYnV0IG9ubHkgYXBwbGllZCBvbiBGaXJlZm94LiBXZSBuZWVkXG4gIC8vIHRvIHVzZSB0aGlzIGNsYXNzLCBiZWNhdXNlIEZpcmVmb3ggaGFzIGEgYnVnIHdoZXJlIGNoYW5naW5nIHRoZSBgb3ZlcmZsb3dgIGJyZWFrcyB0aGUgdXNlcidzXG4gIC8vIGFiaWxpdHkgdG8gdW5kby9yZWRvIHdoYXQgdGhleSB3ZXJlIHR5cGluZyAoc2VlICMxNjYyOSkuIFRoaXMgY2xhc3MgaXMgb25seSBzY29wZWQgdG8gRmlyZWZveCxcbiAgLy8gYmVjYXVzZSB0aGUgbWVhc3VyZW1lbnRzIHRoZXJlIGRvbid0IHNlZW0gdG8gYmUgYWZmZWN0ZWQgYnkgdGhlIGBoZWlnaHQ6IDBgLCB3aGVyZWFzIG9uIG90aGVyXG4gIC8vIGJyb3dzZXJzIHRoZXkgYXJlLCBlLmcuIENocm9tZSBkZXRlY3RzIGxvbmdlciB0ZXh0IGFuZCBJRSBkb2VzJ3QgcmVzaXplIGJhY2sgdG8gbm9ybWFsLlxuICAvLyBJZGVudGljYWwgaXNzdWUgcmVwb3J0OiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD00NDg3ODRcbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZy1maXJlZm94IHtcbiAgICBAaW5jbHVkZSBfYXV0b3NpemUtbWVhc3VyaW5nLWJhc2U7XG4gICAgaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBlbmFibGUgbW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSBvZiB0ZXh0IGZpZWxkcy5cbkBtaXhpbiB0ZXh0LWZpZWxkLWF1dG9maWxsKCkge1xuICAvLyBLZXlmcmFtZXMgdGhhdCBhcHBseSBubyBzdHlsZXMsIGJ1dCBhbGxvdyB1cyB0byBtb25pdG9yIHdoZW4gYW4gdGV4dCBmaWVsZCBiZWNvbWVzIGF1dG9maWxsZWRcbiAgLy8gYnkgd2F0Y2hpbmcgZm9yIHRoZSBhbmltYXRpb24gZXZlbnRzIHRoYXQgYXJlIGZpcmVkIHdoZW4gdGhleSBzdGFydC4gTm90ZTogdGhlIC8qISovIGNvbW1lbnQgaXNcbiAgLy8gbmVlZGVkIHRvIHByZXZlbnQgTGliU2FzcyBmcm9tIHN0cmlwcGluZyB0aGUga2V5ZnJhbWVzIG91dC5cbiAgLy8gQmFzZWQgb246IGh0dHBzOi8vbWVkaXVtLmNvbS9AYnJ1bm4vZGV0ZWN0aW5nLWF1dG9maWxsZWQtZmllbGRzLWluLWphdmFzY3JpcHQtYWVkNTk4ZDI1ZGE3XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgey8qISovfVxuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCB7LyohKi99XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSwgb3IgdGhlIGFuaW1hdGlvbnN0YXJ0IGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCAwcyAxbXM7XG4gIH1cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICAgIC8vIFNpbmNlIENocm9tZSA4MCB3ZSBuZWVkIGEgMW1zIGRlbGF5LCBvciB0aGUgYW5pbWF0aW9uc3RhcnQgZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZCAwcyAxbXM7XG4gIH1cbn1cblxuQG1peGluIF9hdXRvc2l6ZS1tZWFzdXJpbmctYmFzZSB7XG4gIC8vIEhhdmluZyAycHggdG9wIGFuZCBib3R0b20gcGFkZGluZyBzZWVtcyB0byBmaXggYSBidWcgd2hlcmUgQ2hyb21lIGdldHMgYW4gaW5jb3JyZWN0XG4gIC8vIG1lYXN1cmVtZW50LiBXZSBqdXN0IGhhdmUgdG8gYWNjb3VudCBmb3IgaXQgbGF0ZXIgYW5kIHN1YnRyYWN0IGl0IG9mZiB0aGUgZmluYWwgcmVzdWx0LlxuICBwYWRkaW5nOiAycHggMCAhaW1wb3J0YW50O1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xufVxuXG4vLyBVc2VkIHRvIGdlbmVyYXRlIFVJRHMgZm9yIGtleWZyYW1lcyB1c2VkIHRvIGNoYW5nZSB0aGUgdGV4dCBmaWVsZCBhdXRvZmlsbCBzdHlsZXMuXG4kYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6IDA7XG5cbi8vIE1peGluIHVzZWQgdG8gYXBwbHkgY3VzdG9tIGJhY2tncm91bmQgYW5kIGZvcmVncm91bmQgY29sb3JzIHRvIGFuIGF1dG9maWxsZWQgdGV4dCBmaWVsZC5cbi8vIEJhc2VkIG9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzgxNTQ5L1xuLy8gcmVtb3ZpbmctaW5wdXQtYmFja2dyb3VuZC1jb2xvdXItZm9yLWNocm9tZS1hdXRvY29tcGxldGUjYW5zd2VyLTM3NDMyMjYwXG5AbWl4aW4gdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvcigkYmFja2dyb3VuZCwgJGZvcmVncm91bmQ6JycpIHtcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0ge1xuICAgIHRvIHtcbiAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgICAgQGlmICRmb3JlZ3JvdW5kICE9ICcnIHsgY29sb3I6ICRmb3JlZ3JvdW5kOyB9XG4gICAgfVxuICB9XG5cbiAgJjotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSBib3RoO1xuICB9XG5cbiAgJi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXkgZm9yIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0LCBvciB0aGUgYW5pbWF0aW9uc3RhcnRcbiAgICAvLyBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zLFxuICAgICAgICAgICAgICAgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IGJvdGg7XG4gIH1cblxuICAkYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6ICRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudCArIDEgIWdsb2JhbDtcbn1cblxuLy8gQGRlcHJlY2F0ZWQgVXNlIGBhdXRvc2l6ZWAgYW5kIGBhdXRvZmlsbGAgaW5zdGVhZC5cbkBtaXhpbiB0ZXh0LWZpZWxkIHtcbiAgQGluY2x1ZGUgdGV4dC1maWVsZC1hdXRvc2l6ZSgpO1xuICBAaW5jbHVkZSB0ZXh0LWZpZWxkLWF1dG9maWxsKCk7XG59XG4iLCJAdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnQGFuZ3VsYXIvY2RrJztcbkB1c2UgJy4uL3N0eWxlL2xheW91dC1jb21tb24nO1xuQHVzZSAnLi4vdGhlbWluZy90aGVtaW5nJztcbkB1c2UgJy4uL3RoZW1pbmcvaW5zcGVjdGlvbic7XG5cbi8vIFByaXZhdGUgc2FzcyB2YXJpYWJsZXMgdGhhdCB3aWxsIGJlIHVzZWQgYXMgcmVmZXJlbmNlIHRocm91Z2hvdXQgY29tcG9uZW50IHN0eWxlc2hlZXRzLlxuJGRlZmF1bHQtYm9yZGVyLXdpZHRoOiAzcHg7XG4kZGVmYXVsdC1ib3JkZXItc3R5bGU6IHNvbGlkO1xuJGRlZmF1bHQtYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiRkZWZhdWx0LWJvcmRlci1yYWRpdXM6IDRweDtcblxuLy8gTWl4aW4gdGhhdCByZW5kZXJzIHRoZSBmb2N1cyBpbmRpY2F0b3Igc3RydWN0dXJhbCBzdHlsZXMuXG5AbWl4aW4gc3RydWN0dXJhbC1zdHlsaW5nKCRwcmVmaXgpIHtcbiAgLiN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgQGluY2x1ZGUgbGF5b3V0LWNvbW1vbi5maWxsKCk7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBkaXNwbGF5OiB2YXIoLS0jeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1kaXNwbGF5LCBub25lKTsgLy8gSGlkZSB0aGUgaW5kaWNhdG9yIGJ5IGRlZmF1bHQuXG4gICAgICBib3JkZXI6IHZhcihcbiAgICAgICAgICAtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci13aWR0aCxcbiAgICAgICAgICAjeyRkZWZhdWx0LWJvcmRlci13aWR0aH1cbiAgICAgICAgKVxuICAgICAgICB2YXIoXG4gICAgICAgICAgLS0jeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItc3R5bGUsXG4gICAgICAgICAgI3skZGVmYXVsdC1ib3JkZXItc3R5bGV9XG4gICAgICAgIClcbiAgICAgICAgdmFyKFxuICAgICAgICAgIC0tI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yLFxuICAgICAgICAgICN7JGRlZmF1bHQtYm9yZGVyLWNvbG9yfVxuICAgICAgICApO1xuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKFxuICAgICAgICAtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXMsXG4gICAgICAgICN7JGRlZmF1bHQtYm9yZGVyLXJhZGl1c31cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQnkgZGVmYXVsdCwgcmVuZGVyIHRoZSBmb2N1cyBpbmRpY2F0b3Igd2hlbiB0aGUgZm9jdXMgaW5kaWNhdG9yIGhvc3QgZWxlbWVudCB0YWtlcyBmb2N1cy5cbiAgICAvLyBEZWZpbmluZyBhIHBzZXVkbyBlbGVtZW50J3MgY29udGVudCB3aWxsIGNhdXNlIGl0IHRvIHJlbmRlci5cbiAgICAmOmZvY3VzOjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgfVxuICB9XG5cbiAgLy8gRW5hYmxlIHRoZSBpbmRpY2F0b3IgaW4gaGlnaCBjb250cmFzdCBtb2RlLlxuICBAaW5jbHVkZSBjZGsuaGlnaC1jb250cmFzdChhY3RpdmUsIG9mZikge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChkaXNwbGF5OiBibG9jayksICRwcmVmaXgpO1xuICB9XG59XG5cbi8vIEdlbmVyYXRlcyBDU1MgdmFyaWFibGUgZGVjbGFyYXRpb25zIGZyb20gYSBtYXAuXG5AbWl4aW4gX291dHB1dC12YXJpYWJsZXMoJG1hcCkge1xuICBAZWFjaCAka2V5LCAkdmFsdWUgaW4gJG1hcCB7XG4gICAgQGlmICgkdmFsdWUpIHtcbiAgICAgIC0tI3ska2V5fTogI3skdmFsdWV9O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNaXhpbiB0aGF0IGRlZHVwcyBDU1MgdmFyaWFibGVzIGZvciB0aGUgc3Ryb25nLWZvY3VzLWluZGljYXRvcnMgbWl4aW4uXG5AbWl4aW4gY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZywgJHByZWZpeCkge1xuICAkYm9yZGVyLXN0eWxlOiBtYXAuZ2V0KCRjb25maWcsIGJvcmRlci1zdHlsZSk7XG4gICRib3JkZXItd2lkdGg6IG1hcC5nZXQoJGNvbmZpZywgYm9yZGVyLXdpZHRoKTtcbiAgJGJvcmRlci1yYWRpdXM6IG1hcC5nZXQoJGNvbmZpZywgYm9yZGVyLXJhZGl1cyk7XG4gICRib3JkZXItY29sb3I6IG1hcC5nZXQoJGNvbmZpZywgYm9yZGVyLWNvbG9yKTtcbiAgJGRpc3BsYXk6IG1hcC5nZXQoJGNvbmZpZywgZGlzcGxheSk7XG4gICRtYXA6IChcbiAgICAnI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXN0eWxlJzogJGJvcmRlci1zdHlsZSxcbiAgICAnI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXdpZHRoJzogJGJvcmRlci13aWR0aCxcbiAgICAnI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXJhZGl1cyc6ICRib3JkZXItcmFkaXVzLFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItY29sb3InOiAkYm9yZGVyLWNvbG9yLFxuICAgICcjeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1kaXNwbGF5JzogJGRpc3BsYXksXG4gICk7XG5cbiAgQGlmICgmKSB7XG4gICAgQGluY2x1ZGUgX291dHB1dC12YXJpYWJsZXMoJG1hcCk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC8vIFdlIHVzZSBgaHRtbGAgaGVyZSBpbnN0ZWFkIG9mIGA6cm9vdGAsIGJlY2F1c2UgdGhlXG4gICAgLy8gbGF0dGVyIGNhdXNlcyBzb21lIGlzc3VlcyB3aXRoIGludGVybmFsIHRvb2xpbmcuXG4gICAgaHRtbCB7XG4gICAgICBAaW5jbHVkZSBfb3V0cHV0LXZhcmlhYmxlcygkbWFwKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIHN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzKCRjb25maWc6ICgpKSB7XG4gIC8vIERlZmF1bHQgZm9jdXMgaW5kaWNhdG9yIGNvbmZpZy5cbiAgJGRlZmF1bHQtY29uZmlnOiAoXG4gICAgICBib3JkZXItY29sb3I6IGJsYWNrLFxuICAgICAgZGlzcGxheTogYmxvY2ssXG4gICk7XG5cbiAgLy8gTWVyZ2UgZGVmYXVsdCBjb25maWcgd2l0aCB1c2VyIGNvbmZpZy5cbiAgJGNvbmZpZzogbWFwLm1lcmdlKCRkZWZhdWx0LWNvbmZpZywgJGNvbmZpZyk7XG5cbiAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZywgJ21hdCcpO1xufVxuXG5AbWl4aW4gbWRjLXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzKCRjb25maWc6ICgpKSB7XG4gIC8vIERlZmF1bHQgZm9jdXMgaW5kaWNhdG9yIGNvbmZpZy5cbiAgJGRlZmF1bHQtY29uZmlnOiAoXG4gICAgICBib3JkZXItY29sb3I6IGJsYWNrLFxuICAgICAgZGlzcGxheTogYmxvY2ssXG4gICk7XG5cbiAgLy8gTWVyZ2UgZGVmYXVsdCBjb25maWcgd2l0aCB1c2VyIGNvbmZpZy5cbiAgJGNvbmZpZzogbWFwLm1lcmdlKCRkZWZhdWx0LWNvbmZpZywgJGNvbmZpZyk7XG5cbiAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoJGNvbmZpZywgJ21hdC1tZGMnKTtcbn1cblxuQG1peGluIHN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLWNvbG9yKCR0aGVtZS1vci1jb2xvcikge1xuICBAaWYgbWV0YS50eXBlLW9mKCR0aGVtZS1vci1jb2xvcikgPT0gJ2NvbG9yJyB7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKFxuICAgICAgICBib3JkZXItY29sb3I6ICR0aGVtZS1vci1jb2xvclxuICAgICksICdtYXQnKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgJGJvcmRlci1jb2xvcjogaW5zcGVjdGlvbi5nZXQtdGhlbWUtY29sb3IoJHRoZW1lLW9yLWNvbG9yLCBwcmltYXJ5KTtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvclxuICAgICksICdtYXQnKTtcbiAgfVxufVxuXG5AbWl4aW4gc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtdGhlbWUoJHRoZW1lLW9yLWNvbG9yKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHRoZW1lLW9yLWNvbG9yKSA9PSAnY29sb3InIHtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLW9yLWNvbG9yXG4gICAgKSwgJ21hdCcpO1xuICB9XG4gIEBlbHNlIHtcbiAgICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcygkdGhlbWUtb3ItY29sb3IsICdtYXQtZm9jdXMtaW5kaWNhdG9ycycpIHtcbiAgICAgIEBpZiBpbnNwZWN0aW9uLnRoZW1lLWhhcygkdGhlbWUtb3ItY29sb3IsIGNvbG9yKSB7XG4gICAgICAgIEBpbmNsdWRlIHN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLWNvbG9yKCR0aGVtZS1vci1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtY29sb3IoJHRoZW1lLW9yLWNvbG9yKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHRoZW1lLW9yLWNvbG9yKSA9PSAnY29sb3InIHtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLW9yLWNvbG9yXG4gICAgKSwgJ21hdC1tZGMnKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgJGJvcmRlci1jb2xvcjogaW5zcGVjdGlvbi5nZXQtdGhlbWUtY29sb3IoJHRoZW1lLW9yLWNvbG9yLCBwcmltYXJ5KTtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlci1jb2xvclxuICAgICksICdtYXQtbWRjJyk7XG4gIH1cbn1cblxuQG1peGluIG1kYy1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy10aGVtZSgkdGhlbWUtb3ItY29sb3IpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdGhlbWUtb3ItY29sb3IpID09ICdjb2xvcicge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtb3ItY29sb3JcbiAgICApLCAnbWF0LW1kYycpO1xuICB9XG4gIEBlbHNlIHtcbiAgICBAaW5jbHVkZSB0aGVtaW5nLnByaXZhdGUtY2hlY2stZHVwbGljYXRlLXRoZW1lLXN0eWxlcyhcbiAgICAgICAgJHRoZW1lLW9yLWNvbG9yLCAnbWF0LW1kYy1mb2N1cy1pbmRpY2F0b3JzJykge1xuICAgICAgQGlmIGluc3BlY3Rpb24udGhlbWUtaGFzKCR0aGVtZS1vci1jb2xvciwgY29sb3IpIHtcbiAgICAgICAgQGluY2x1ZGUgbWRjLXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLWNvbG9yKCR0aGVtZS1vci1jb2xvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBUaGlzIG1peGluIGVuc3VyZXMgYW4gZWxlbWVudCBzcGFucyB0byBmaWxsIHRoZSBuZWFyZXN0IGFuY2VzdG9yIHdpdGggZGVmaW5lZCBwb3NpdGlvbmluZy5cbkBtaXhpbiBmaWxsIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iLCJAdXNlICdAYW5ndWxhci9jZGsnO1xuQHVzZSAnLi90b2tlbnMvbTIvbWF0L2FwcCcgYXMgdG9rZW5zLW1hdC1hcHA7XG5AdXNlICcuL3Rva2Vucy90b2tlbi11dGlscyc7XG5AdXNlICcuL3JpcHBsZS9yaXBwbGUnO1xuQHVzZSAnLi9mb2N1cy1pbmRpY2F0b3JzL3ByaXZhdGUnO1xuQHVzZSAnLi9tZGMtaGVscGVycy9tZGMtaGVscGVycyc7XG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgYXJlIG5vdCB0aGVtZS1kZXBlbmRlbnQuXG5AbWl4aW4gY29yZSgpIHtcbiAgQGluY2x1ZGUgcmlwcGxlLnJpcHBsZSgpO1xuICBAaW5jbHVkZSBjZGsuYTExeS12aXN1YWxseS1oaWRkZW4oKTtcbiAgQGluY2x1ZGUgY2RrLm92ZXJsYXkoKTtcbiAgQGluY2x1ZGUgY2RrLnRleHQtZmllbGQtYXV0b3NpemUoKTtcbiAgQGluY2x1ZGUgY2RrLnRleHQtZmllbGQtYXV0b2ZpbGwoKTtcbiAgQGluY2x1ZGUgcHJpdmF0ZS5zdHJ1Y3R1cmFsLXN0eWxpbmcoJ21hdCcpO1xuICBAaW5jbHVkZSBwcml2YXRlLnN0cnVjdHVyYWwtc3R5bGluZygnbWF0LW1kYycpO1xuXG4gIC8vIFdyYXBwZXIgZWxlbWVudCB0aGF0IHByb3ZpZGVzIHRoZSB0aGVtZSBiYWNrZ3JvdW5kIHdoZW4gdGhlXG4gIC8vIHVzZXIncyBjb250ZW50IGlzbid0IGluc2lkZSBvZiBhIGBtYXQtc2lkZW5hdi1jb250YWluZXJgLlxuICBAYXQtcm9vdCB7XG4gICAgLm1hdC1hcHAtYmFja2dyb3VuZCB7XG4gICAgICBAaW5jbHVkZSBtZGMtaGVscGVycy5kaXNhYmxlLW1kYy1mYWxsYmFjay1kZWNsYXJhdGlvbnMge1xuICAgICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy51c2UtdG9rZW5zKHRva2Vucy1tYXQtYXBwLiRwcmVmaXgsIHRva2Vucy1tYXQtYXBwLmdldC10b2tlbi1zbG90cygpKSB7XG4gICAgICAgICAgLy8gTm90ZTogd2UgbmVlZCB0byBlbWl0IGZhbGxiYWNrIHZhbHVlcyBoZXJlIHRvIGF2b2lkIGVycm9ycyBpbiBpbnRlcm5hbCBidWlsZHMuXG4gICAgICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMuY3JlYXRlLXRva2VuLXNsb3QoYmFja2dyb3VuZC1jb2xvciwgYmFja2dyb3VuZC1jb2xvciwgdHJhbnNwYXJlbnQpO1xuICAgICAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi1zbG90KGNvbG9yLCB0ZXh0LWNvbG9yLCBpbmhlcml0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIENvcHlyaWdodCAyMDIwIEdvb2dsZSBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cbi8vXG5cbkB1c2UgJ3Nhc3M6bGlzdCc7XG5AdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnLi9nc3MnO1xuXG4vLy8gV2hlbiB0cnVlLCBhZGQgYW4gYWRkaXRpb25hbCBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbiBiZWZvcmUgZGVjbGFyYXRpb25zXG4vLy8gdGhhdCB1c2UgYWR2YW5jZWQgZmVhdHVyZXMgc3VjaCBhcyBjdXN0b20gcHJvcGVydGllcyBvciBDU1MgZnVuY3Rpb25zLiBUaGlzXG4vLy8gYWRkcyBmYWxsYmFjayBzdXBwb3J0IGZvciBvbGRlciBicm93c2VycyBzdWNoIGFzIElFMTEgdGhhdCBkbyBub3Qgc3VwcG9ydFxuLy8vIHRoZXNlIGZlYXR1cmVzIGF0IHRoZSBjb3N0IG9mIGFkZGl0aW9uYWwgQ1NTLiBTZXQgdGhpcyB2YXJpYWJsZSB0byBmYWxzZSB0b1xuLy8vIGRpc2FibGUgZ2VuZXJhdGluZyBmYWxsYmFjayBkZWNsYXJhdGlvbnMuXG4kZW5hYmxlLWZhbGxiYWNrLWRlY2xhcmF0aW9uczogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vIFdyaXRlcyBhIENTUyBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbi4gVGhpcyBtaXhpbiBpcyB1c2VkIHRocm91Z2hvdXQgdGhlXG4vLy8gdGhlbWUgcGFja2FnZSBmb3IgY29uc2lzdGVuY3kgZm9yIGR5bmFtaWNhbGx5IHNldHRpbmcgQ1NTIHByb3BlcnR5IHZhbHVlcy5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gbWF5IG9wdGlvbmFsbHkgdGFrZSBhIGZhbGxiYWNrIHZhbHVlLiBGb3IgYWR2YW5jZWQgZmVhdHVyZXMgc3VjaFxuLy8vIGFzIGN1c3RvbSBwcm9wZXJ0aWVzIG9yIENTUyBmdW5jdGlvbnMgbGlrZSBtaW4gYW5kIG1heCwgYSBmYWxsYmFjayB2YWx1ZSBpc1xuLy8vIHJlY29tbWVuZGVkIHRvIHN1cHBvcnQgb2xkZXIgYnJvd3NlcnMuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHByb3BlcnR5IC0gVGhlIENTUyBwcm9wZXJ0eSBvZiB0aGUgZGVjbGFyYXRpb24uXG4vLy8gQHBhcmFtIHsqfSAkdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIENTUyBkZWNsYXJhdGlvbi4gVGhlIHZhbHVlIHNob3VsZCBiZVxuLy8vICAgICByZXNvbHZlZCBieSBvdGhlciB0aGVtZSBmdW5jdGlvbnMgZmlyc3QgKGkuZS4gY3VzdG9tIHByb3BlcnR5IE1hcHMgYW5kXG4vLy8gICAgIE1hdGVyaWFsIHRoZW1lIGtleXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBtaXhpbikuIElmIHRoZSB2YWx1ZSBpc1xuLy8vICAgICBudWxsLCBubyBkZWNsYXJhdGlvbnMgd2lsbCBiZSBlbWl0dGVkLlxuLy8vIEBwYXJhbSB7Kn0gJGZhbGxiYWNrIC0gQW4gb3B0aW9uYWwgZmFsbGJhY2sgdmFsdWUgZm9yIG9sZGVyIGJyb3dzZXJzLiBJZlxuLy8vICAgICBwcm92aWRlZCwgYSBzZWNvbmQgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24gd2lsbCBiZSBhZGRlZCBiZWZvcmUgdGhlXG4vLy8gICAgIG1haW4gcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24uXG4vLy8gQHBhcmFtIHtNYXB9ICRnc3MgLSBBbiBvcHRpb25hbCBNYXAgb2YgR1NTIGFubm90YXRpb25zIHRvIGFkZC5cbi8vLyBAcGFyYW0ge0Jvb2x9ICRpbXBvcnRhbnQgLSBJZiB0cnVlLCBhZGQgYCFpbXBvcnRhbnRgIHRvIHRoZSBkZWNsYXJhdGlvbi5cbkBtaXhpbiBkZWNsYXJhdGlvbihcbiAgJHByb3BlcnR5LFxuICAkdmFsdWUsXG4gICRmYWxsYmFjay12YWx1ZTogbnVsbCxcbiAgJGdzczogKCksXG4gICRpbXBvcnRhbnQ6IGZhbHNlXG4pIHtcbiAgLy8gTm9ybWFsbHkgc2V0dGluZyBhIG51bGwgdmFsdWUgdG8gYSBwcm9wZXJ0eSB3aWxsIG5vdCBlbWl0IENTUywgc28gbWl4aW5zXG4gIC8vIHdvdWxkbid0IG5lZWQgdG8gY2hlY2sgdGhpcy4gSG93ZXZlciwgU2FzcyB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoZVxuICAvLyBpbnRlcnBvbGF0ZWQgcHJvcGVydHkgaXMgYSBjdXN0b20gcHJvcGVydHkuXG4gIEBpZiAkdmFsdWUgIT0gbnVsbCB7XG4gICAgJGltcG9ydGFudC1ydWxlOiBpZigkaW1wb3J0YW50LCAnICFpbXBvcnRhbnQnLCAnJyk7XG5cbiAgICBAaWYgJGZhbGxiYWNrLXZhbHVlIGFuZCAkZW5hYmxlLWZhbGxiYWNrLWRlY2xhcmF0aW9ucyB7XG4gICAgICBAaW5jbHVkZSBnc3MuYW5ub3RhdGUoJGdzcyk7XG4gICAgICAjeyRwcm9wZXJ0eX06ICN7JGZhbGxiYWNrLXZhbHVlfSAjeyRpbXBvcnRhbnQtcnVsZX07XG5cbiAgICAgIC8vIEFkZCBAYWx0ZXJuYXRlIHRvIGFubm90YXRpb25zLlxuICAgICAgJGdzczogbWFwLm1lcmdlKFxuICAgICAgICAkZ3NzLFxuICAgICAgICAoXG4gICAgICAgICAgYWx0ZXJuYXRlOiB0cnVlLFxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGdzcy5hbm5vdGF0ZSgkZ3NzKTtcbiAgICAjeyRwcm9wZXJ0eX06ICN7JHZhbHVlfSN7JGltcG9ydGFudC1ydWxlfTtcbiAgfVxufVxuXG4vLy8gVW5wYWNrcyBzaG9ydGhhbmQgdmFsdWVzIGZvciBDU1MgcHJvcGVydGllcyAoaS5lLiBsaXN0cyBvZiAxLTMgdmFsdWVzKS5cbi8vLyBJZiBhIGxpc3Qgb2YgNCB2YWx1ZXMgaXMgZ2l2ZW4sIGl0IGlzIHJldHVybmVkIGFzLWlzLlxuLy8vXG4vLy8gRXhhbXBsZXM6XG4vLy9cbi8vLyB1bnBhY2stdmFsdWUoNHB4KSA9PiA0cHggNHB4IDRweCA0cHhcbi8vLyB1bnBhY2stdmFsdWUoNHB4IDJweCkgPT4gNHB4IDJweCA0cHggMnB4XG4vLy8gdW5wYWNrLXZhbHVlKDRweCAycHggMnB4KSA9PiA0cHggMnB4IDJweCAycHhcbi8vLyB1bnBhY2stdmFsdWUoNHB4IDJweCAwIDJweCkgPT4gNHB4IDJweCAwIDJweFxuLy8vXG4vLy8gQHBhcmFtIHtOdW1iZXIgfCBNYXAgfCBMaXN0fSAkdmFsdWUgLSBMaXN0IG9mIDEgdG8gNCB2YWx1ZSBudW1iZXJzLlxuLy8vIEByZXR1cm4ge0xpc3R9IGEgTGlzdCBvZiA0IHZhbHVlIG51bWJlcnMuXG5AZnVuY3Rpb24gdW5wYWNrLXZhbHVlKCR2YWx1ZSkge1xuICBAaWYgbWV0YS50eXBlLW9mKCR2YWx1ZSkgPT0gJ21hcCcgb3IgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAxIHtcbiAgICBAcmV0dXJuICR2YWx1ZSAkdmFsdWUgJHZhbHVlICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDQge1xuICAgIEByZXR1cm4gJHZhbHVlO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMyB7XG4gICAgQHJldHVybiBsaXN0Lm50aCgkdmFsdWUsIDEpIGxpc3QubnRoKCR2YWx1ZSwgMikgbGlzdC5udGgoJHZhbHVlLCAzKVxuICAgICAgbGlzdC5udGgoJHZhbHVlLCAyKTtcbiAgfSBAZWxzZSBpZiBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDIge1xuICAgIEByZXR1cm4gbGlzdC5udGgoJHZhbHVlLCAxKSBsaXN0Lm50aCgkdmFsdWUsIDIpIGxpc3QubnRoKCR2YWx1ZSwgMSlcbiAgICAgIGxpc3QubnRoKCR2YWx1ZSwgMik7XG4gIH1cblxuICBAZXJyb3IgXCJJbnZhbGlkIENTUyBwcm9wZXJ0eSB2YWx1ZTogJyN7JHZhbHVlfScgaXMgbW9yZSB0aGFuIDQgdmFsdWVzXCI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2224:
/*!**********************************************************!*\
  !*** ./src/app/workout-panel/workout-panel.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkoutPanelComponent: () => (/* binding */ WorkoutPanelComponent)
/* harmony export */ });
/* harmony import */ var _worktask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./worktask */ 4529);
/* harmony import */ var _math_generator_mathGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math-generator/mathGenerator */ 6782);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 7912);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/config.service */ 3696);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../progress-bar/progress-bar.component */ 7212);













const _c0 = ["answerField"];
const _c1 = a0 => ({
  "equation": true,
  "stacked": a0
});
function WorkoutPanelComponent_mat_card_title_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](3, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.index + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r0.tasks.length, " ");
  }
}
function WorkoutPanelComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkoutPanelComponent_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.start());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-form-field", 18)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](5, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkoutPanelComponent_div_5_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.updateNumberOfQuestions($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.config.nbQuestions);
  }
}
function WorkoutPanelComponent_div_6_ng_template_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.currentTask.operator);
  }
}
function WorkoutPanelComponent_div_6_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WorkoutPanelComponent_div_6_ng_template_2_span_2_Template, 2, 1, "span", 26);
  }
  if (rf & 2) {
    const num_r4 = ctx.$implicit;
    const last_r5 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](num_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", last_r5 == false);
  }
}
function WorkoutPanelComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 20)(1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WorkoutPanelComponent_div_6_ng_template_2_Template, 3, 2, "ng-template", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "=");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 24, 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function WorkoutPanelComponent_div_6_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r0.userInput, $event) || (ctx_r0.userInput = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keypress", function WorkoutPanelComponent_div_6_Template_input_keypress_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.typeKey($event));
    })("keyup", function WorkoutPanelComponent_div_6_Template_input_keyup_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.check($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c1, ctx_r0.stacked));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.currentTask.values);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r0.userInput);
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
    const task_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](task_r7.problem.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](task_r7.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", task_r7.getTimeInSec(), " sec.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](task_r7.errors);
  }
}
function WorkoutPanelComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table", 28)(4, "thead")(5, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](8, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](10, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](12, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](14, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, WorkoutPanelComponent_div_7_tr_16_Template, 11, 5, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-card-actions")(18, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkoutPanelComponent_div_7_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.start());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](19, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-form-field", 18)(21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵi18n"](22, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkoutPanelComponent_div_7_Template_input_ngModelChange_23_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r0.updateNumberOfQuestions($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.tasks);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.config.nbQuestions);
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
    consts: () => {
      let i18n_0;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_progressionMessage$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_0 = goog.getMsg(" of ");
        i18n_0 = MSG_EXTERNAL_progressionMessage$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_0;
      } else {
        i18n_0 = " of ";
      }
      let i18n_1;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_startButton$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_1 = goog.getMsg("Start");
        i18n_1 = MSG_EXTERNAL_startButton$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_1;
      } else {
        i18n_1 = "Start";
      }
      let i18n_2;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Number_of_questions$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_2 = goog.getMsg("Number of questions");
        i18n_2 = MSG_EXTERNAL_Number_of_questions$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_2;
      } else {
        i18n_2 = "Number of questions";
      }
      let i18n_3;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_finished$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_3 = goog.getMsg("Finished");
        i18n_3 = MSG_EXTERNAL_finished$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_3;
      } else {
        i18n_3 = "Finished";
      }
      let i18n_4;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_resultEquation$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_4 = goog.getMsg("Equation");
        i18n_4 = MSG_EXTERNAL_resultEquation$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_4;
      } else {
        i18n_4 = "Equation";
      }
      let i18n_5;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_resultAnswer$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_5 = goog.getMsg("Answer");
        i18n_5 = MSG_EXTERNAL_resultAnswer$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_5;
      } else {
        i18n_5 = "Answer";
      }
      let i18n_6;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_resultTime$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_6 = goog.getMsg("Time");
        i18n_6 = MSG_EXTERNAL_resultTime$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_6;
      } else {
        i18n_6 = "Time";
      }
      let i18n_7;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_resultMistakes$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_7 = goog.getMsg("Mistakes");
        i18n_7 = MSG_EXTERNAL_resultMistakes$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_7;
      } else {
        i18n_7 = "Mistakes";
      }
      let i18n_8;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_startAgainButton$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_8 = goog.getMsg("Start again");
        i18n_8 = MSG_EXTERNAL_startAgainButton$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_8;
      } else {
        i18n_8 = "Start again";
      }
      let i18n_9;
      if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
        /**
         * @suppress {msgDescriptions}
         */
        const MSG_EXTERNAL_Number_of_questions$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_9 = goog.getMsg("Number of questions");
        i18n_9 = MSG_EXTERNAL_Number_of_questions$$SRC_APP_WORKOUT_PANEL_WORKOUT_PANEL_COMPONENT_TS_9;
      } else {
        i18n_9 = "Number of questions";
      }
      return [["answerField", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, i18n_8, i18n_9, [3, "totalCount", "progressCount"], [1, "main-div"], [1, "center"], [1, "progressBar"], [4, "ngIf"], ["class", "mathQuestion", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["appearance", "outline"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel"], [1, "mathQuestion"], [3, "ngClass"], ["ngFor", "", 3, "ngForOf"], [1, "equals"], ["autofocus", "autofocus", "autocomplete", "off", "placeholder", "?", "type", "number", "autofocus", "", 1, "answerField", 3, "ngModelChange", "keypress", "keyup", "ngModel"], [1, "number"], ["class", "operator", 4, "ngIf"], [1, "operator"], [1, "results"], [4, "ngFor", "ngForOf"]];
    },
    template: function WorkoutPanelComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-progress-bar", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12)(2, "mat-card", 13)(3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, WorkoutPanelComponent_mat_card_title_4_Template, 5, 2, "mat-card-title", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, WorkoutPanelComponent_div_5_Template, 7, 1, "div", 15)(6, WorkoutPanelComponent_div_6_Template, 7, 5, "div", 16)(7, WorkoutPanelComponent_div_7_Template, 24, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("totalCount", ctx.totalCount)("progressCount", ctx.index);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.tasks && ctx.index < ctx.tasks.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status == ctx.WorkoutStatusEnum.Begin);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status == ctx.WorkoutStatusEnum.Work);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.status == ctx.WorkoutStatusEnum.Finish);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_3__.ProgressBarComponent],
    styles: [".mat-ripple[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: relative;\n}\n.mat-ripple[_ngcontent-%COMP%]:not(:empty) {\n  transform: translateZ(0);\n}\n\n.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.mat-ripple-element[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale3d(0, 0, 0);\n  background-color: var(--mat-ripple-color, rgba(0, 0, 0, 0.1));\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.cdk-visually-hidden[_ngcontent-%COMP%] {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  white-space: nowrap;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  left: 0;\n}\n[dir=rtl][_ngcontent-%COMP%]   .cdk-visually-hidden[_ngcontent-%COMP%] {\n  left: auto;\n  right: 0;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%], .cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.cdk-overlay-container[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n}\n.cdk-overlay-container[_ngcontent-%COMP%]:empty {\n  display: none;\n}\n\n.cdk-global-overlay-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  z-index: 1000;\n}\n\n.cdk-overlay-pane[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.cdk-overlay-backdrop[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0;\n}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.cdk-high-contrast-active[_ngcontent-%COMP%]   .cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.cdk-overlay-dark-backdrop[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0.32);\n}\n\n.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%] {\n  transition: visibility 1ms linear, opacity 1ms linear;\n  visibility: hidden;\n  opacity: 1;\n}\n.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: visible;\n}\n\n.cdk-overlay-backdrop-noop-animation[_ngcontent-%COMP%] {\n  transition: none;\n}\n\n.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px;\n}\n\n.cdk-global-scrollblock[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll;\n}\n\ntextarea.cdk-textarea-autosize[_ngcontent-%COMP%] {\n  resize: none;\n}\n\ntextarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: auto !important;\n  overflow: hidden !important;\n}\n\ntextarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%] {\n  padding: 2px 0 !important;\n  box-sizing: content-box !important;\n  height: 0 !important;\n}\n\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-start { \n }\n@keyframes _ngcontent-%COMP%_cdk-text-field-autofill-end { \n }\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-start 0s 1ms;\n}\n\n.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill) {\n  animation: _ngcontent-%COMP%_cdk-text-field-autofill-end 0s 1ms;\n}\n\n.mat-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-focus-indicator-display, none);\n  border: var(--mat-focus-indicator-border-width, 3px) var(--mat-focus-indicator-border-style, solid) var(--mat-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-focus-indicator-border-radius, 4px);\n}\n.mat-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-focus-indicator-display: block;\n}\n\n.mat-mdc-focus-indicator[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]::before {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  box-sizing: border-box;\n  pointer-events: none;\n  display: var(--mat-mdc-focus-indicator-display, none);\n  border: var(--mat-mdc-focus-indicator-border-width, 3px) var(--mat-mdc-focus-indicator-border-style, solid) var(--mat-mdc-focus-indicator-border-color, transparent);\n  border-radius: var(--mat-mdc-focus-indicator-border-radius, 4px);\n}\n.mat-mdc-focus-indicator[_ngcontent-%COMP%]:focus::before {\n  content: \"\";\n}\n\n.cdk-high-contrast-active[_ngcontent-%COMP%] {\n  --mat-mdc-focus-indicator-display: block;\n}\n\n.mat-app-background[_ngcontent-%COMP%] {\n  background-color: var(--mat-app-background-color, transparent);\n  color: var(--mat-app-text-color, inherit);\n}\n\n  :root {\n  --equationFontSize: 48px;\n}\n\n.mathQuestion[_ngcontent-%COMP%] {\n  border-width: 2px;\n  border-style: solid;\n  margin: 0.5em;\n  padding: 1em;\n  border-radius: 15px;\n  font-size: var(--equationFontSize);\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.mathQuestion[_ngcontent-%COMP%] {\n  border-color: #388e3c;\n}\n\n.dark-theme[_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%], .dark-theme   [_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%] {\n  border-color: #ffd740;\n}\n\n.light-theme[_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%], .light-theme   [_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%] {\n  border-color: #bcaaa4;\n}\n\n.deeppurple-amber[_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%], .deeppurple-amber   [_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%] {\n  border-color: #ffd740;\n}\n\n.indigo-pink[_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%], .indigo-pink   [_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%] {\n  border-color: #ff4081;\n}\n\n.pink-bluegrey[_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%], .pink-bluegrey   [_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%] {\n  border-color: #b0bec5;\n}\n\n.purple-green[_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%], .purple-green   [_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%] {\n  border-color: #69f0ae;\n}\n\n.candy[_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%], .candy   [_nghost-%COMP%]   .mathQuestion[_ngcontent-%COMP%] {\n  border-color: #795548;\n}\n\n.main-div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: top;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin: 10px auto;\n}\n\ninput.answerField[_ngcontent-%COMP%] {\n  font-size: var(--equationFontSize);\n  text-align: right;\n  margin-top: 5px;\n  width: 4em;\n}\n\n.number[_ngcontent-%COMP%] {\n  line-height: calc(var(--equationFontSize) * 1.25);\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .mathAnswer[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 5px;\n}\n\n.equation.stacked[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: 1em;\n  text-align: right;\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .operator[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.equation.stacked[_ngcontent-%COMP%]   .equals[_ngcontent-%COMP%] {\n  display: block;\n  height: 0;\n  padding-bottom: 3px;\n  border-bottom: solid 2px;\n  overflow: hidden;\n}\n\n.equation[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0.5em;\n}\n\ninput[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.progressBar[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n\n.results[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]    + th[_ngcontent-%COMP%], .results[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]    + td[_ngcontent-%COMP%] {\n  padding-left: 1em;\n}\n\nbutton[_ngcontent-%COMP%]    + *[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3JpcHBsZS9fcmlwcGxlLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3dvcmtvdXQtcGFuZWwvd29ya291dC1wYW5lbC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvYTExeS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvb3ZlcmxheS9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9jZGsvdGV4dC1maWVsZC9faW5kZXguc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL2ZvY3VzLWluZGljYXRvcnMvX3ByaXZhdGUuc2NzcyIsIndlYnBhY2s6Ly8uL25vZGVfbW9kdWxlcy9AYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL19sYXlvdXQtY29tbW9uLnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9fY29yZS5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90aGVtZS9fY3NzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxnQkFBQTtFQUlBLGtCQUFBO0FDVEo7QURnQkk7RUFDRSx3QkFBQTtBQ2ROOztBRGtCRTtFQUNFLGlCQUFBO0FDZko7O0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBRUEsNkRBQUE7RUFJQSwyQkFBQTtFQUtFLDZEQUFBO0FDdkJOO0FDK0JJO0VGSEUsYUFBQTtBQ3pCTjs7QUNuQkU7RUFDRSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFB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QTtBQW1ORjs7QUFoTkE7RUFDRSxpREFBQTtBQW1ORjs7QUEvTUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFrTkY7O0FBL01BO0VBQ0UscUJBQUE7QUFrTkY7O0FBL01BO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBRUEsaUJBQUE7QUFpTkY7O0FBOU1BO0VBQ0UsV0FBQTtBQWlORjs7QUE5TUE7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFFQSxnQkFBQTtBQWdORjs7QUE3TUE7RUFFRSxrQkFBQTtBQStNRjs7QUE1TUE7O0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBK01GOztBQTVNQTtFQUNFLGtCQUFBO0FBK01GOztBQTVNQTs7RUFFRSxpQkFBQTtBQStNRjs7QUE1TUE7RUFDRSxnQkFBQTtBQStNRiIsInNvdXJjZXNDb250ZW50IjpbIkB1c2UgJ0Bhbmd1bGFyL2Nkayc7XG5AdXNlICcuLi90b2tlbnMvbTIvbWF0L3JpcHBsZScgYXMgdG9rZW5zLW1hdC1yaXBwbGU7XG5AdXNlICcuLi90b2tlbnMvdG9rZW4tdXRpbHMnO1xuXG5AbWl4aW4gcmlwcGxlKCkge1xuICAvLyBUaGUgaG9zdCBlbGVtZW50IG9mIGFuIG1hdC1yaXBwbGUgZGlyZWN0aXZlIHNob3VsZCBhbHdheXMgaGF2ZSBhIHBvc2l0aW9uIG9mIFwiYWJzb2x1dGVcIiBvclxuICAvLyBcInJlbGF0aXZlXCIgc28gdGhhdCB0aGUgcmlwcGxlcyBpbnNpZGUgYXJlIGNvcnJlY3RseSBwb3NpdGlvbmVkIHJlbGF0aXZlbHkgdG8gdGhlIGNvbnRhaW5lci5cbiAgLm1hdC1yaXBwbGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAvLyBCeSBkZWZhdWx0LCBldmVyeSByaXBwbGUgY29udGFpbmVyIHNob3VsZCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBpbiBmYXZvciBvZiBjcmVhdGluZyBhblxuICAgIC8vIGVhc3kgQVBJIGZvciBkZXZlbG9wZXJzIHVzaW5nIHRoZSBNYXRSaXBwbGUgZGlyZWN0aXZlLlxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC8vIFByb21vdGUgY29udGFpbmVycyB0aGF0IGhhdmUgcmlwcGxlcyB0byBhIG5ldyBsYXllci4gV2Ugd2FudCB0byB0YXJnZXQgYDpub3QoOmVtcHR5KWAsXG4gICAgLy8gYmVjYXVzZSB3ZSBkb24ndCB3YW50IGFsbCByaXBwbGUgY29udGFpbmVycyB0byBoYXZlIHRoZWlyIG93biBsYXllciBzaW5jZSB0aGV5J3JlIHVzZWQgaW4gYVxuICAgIC8vIGxvdCBvZiBwbGFjZXMgYW5kIHRoZSBsYXllciBpcyBvbmx5IHJlbGV2YW50IHdoaWxlIGFuaW1hdGluZy4gTm90ZSB0aGF0IGlkZWFsbHkgd2UnZCB1c2VcbiAgICAvLyB0aGUgYGNvbnRhaW5gIHByb3BlcnR5IGhlcmUgKHNlZSAjMTMxNzUpLCBiZWNhdXNlIGA6ZW1wdHlgIGNhbiBiZSBicm9rZW4gYnkgaGF2aW5nIGV4dHJhXG4gICAgLy8gdGV4dCBpbnNpZGUgdGhlIGVsZW1lbnQsIGJ1dCBpdCBpc24ndCB2ZXJ5IHdlbGwgc3VwcG9ydGVkIHlldC5cbiAgICAmOm5vdCg6ZW1wdHkpIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcblxuICAgIC8vIFdlIHVzZSBhIDNkIHRyYW5zZm9ybSBoZXJlIGluIG9yZGVyIHRvIGF2b2lkIGFuIGlzc3VlIGluIFNhZmFyaSB3aGVyZVxuICAgIC8vIHRoZSByaXBwbGVzIGFyZW4ndCBjbGlwcGVkIHdoZW4gaW5zaWRlIHRoZSBzaGFkb3cgRE9NIChzZWUgIzI0MDI4KS5cbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMCwgMCwgMCk7XG5cbiAgICBAaW5jbHVkZSB0b2tlbi11dGlscy51c2UtdG9rZW5zKFxuICAgICAgdG9rZW5zLW1hdC1yaXBwbGUuJHByZWZpeCwgdG9rZW5zLW1hdC1yaXBwbGUuZ2V0LXRva2VuLXNsb3RzKCkpIHtcbiAgICAgIC8vIFdlIGhhdmUgdG8gZW1pdCBhIGZhbGxiYWNrIHZhbHVlIGhlcmUsIGJlY2F1c2Ugc29tZSBpbnRlcm5hbCBidWlsZHMgZGVwZW5kIG9uIGl0LlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCN7dG9rZW4tdXRpbHMuZ2V0LXRva2VuLXZhcmlhYmxlKGNvbG9yKX0sIHJnYmEoIzAwMCwgMC4xKSk7XG4gICAgfVxuXG4gICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByaXBwbGUgaXMgb3BhcXVlLCBjYXVzaW5nIGl0IHRvIG9ic3RydWN0IHRoZSBjb250ZW50LlxuICAgIEBpbmNsdWRlIGNkay5oaWdoLWNvbnRyYXN0KGFjdGl2ZSwgb2ZmKSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnQGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcbkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvc3R5bGVzL3RoZW1lc192YXJpYWJsZXMuc2Nzc1wiO1xuXG4vLyRlcXVhdGlvbi1mb250LXNpemU6IDQ4cHg7XG5cbjo6bmctZGVlcCA6cm9vdCB7XG4gIC0tZXF1YXRpb25Gb250U2l6ZTogNDhweDtcbn1cblxuLm1hdGhRdWVzdGlvbiB7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBtYXJnaW46IDAuNWVtO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZXF1YXRpb25Gb250U2l6ZSk7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuQG1peGluIG1hdGgtcXVlc3Rpb24tdGhlbWUoJHRoZW1lKSB7XG4gIC8vIEV4dHJhY3QgdGhlIHBhbGV0dGVzIHlvdSBuZWVkIGZyb20gdGhlIHRoZW1lIGRlZmluaXRpb24uXG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuXG4gIC5tYXRoUXVlc3Rpb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LmdldC1jb2xvci1mcm9tLXBhbGV0dGUoJGFjY2VudCk7XG4gIH1cbn1cblxuQGVhY2ggJHRoY2xhc3MsICR0aCBpbiAkYWxsX3RoZW1lcyB7XG4gIEBpZiAkdGhjbGFzcyA9PSBcIlwiIHtcbiAgICBAaW5jbHVkZSBtYXRoLXF1ZXN0aW9uLXRoZW1lKCR0aCk7XG4gIH0gQGVsc2Uge1xuICAgIDpob3N0LWNvbnRleHQoLiN7JHRoY2xhc3N9KSB7XG4gICAgICBAaW5jbHVkZSBtYXRoLXF1ZXN0aW9uLXRoZW1lKCR0aCk7XG4gICAgfVxuICB9XG59XG5cbi5tYWluLWRpdiB7XG4gIC8vaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgLy9qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IHRvcDtcbn1cblxuLmNlbnRlciB7XG4gIC8vd2lkdGg6IDc1JTtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5cbmlucHV0LmFuc3dlckZpZWxkIHtcbiAgZm9udC1zaXplOiB2YXIoLS1lcXVhdGlvbkZvbnRTaXplKTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgd2lkdGg6IDRlbTtcbn1cblxuLm51bWJlciB7XG4gIGxpbmUtaGVpZ2h0OiBjYWxjKHZhcigtLWVxdWF0aW9uRm9udFNpemUpICogMS4yNSk7XG4gIC8vdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmVxdWF0aW9uLnN0YWNrZWQgLm1hdGhBbnN3ZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uZXF1YXRpb24uc3RhY2tlZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmVxdWF0aW9uLnN0YWNrZWQgLm51bWJlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICAvLyBzcGFjZSBmb3IgdGhlIG9wZXJhdG9yXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uZXF1YXRpb24uc3RhY2tlZCAub3BlcmF0b3Ige1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmVxdWF0aW9uLnN0YWNrZWQgLmVxdWFscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAzcHg7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDJweDtcbiAgLy9ib3JkZXItY29sb3I6IG1hdC5nZXQtY29sb3ItZnJvbS1wYWxldHRlKCRwcmltYXJ5KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmVxdWF0aW9uIDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIC8vYXZvaWQgdGhlIG1hcmdpbiBsZWZ0IHdoZW4gc3RhY2tlZFxuICBtYXJnaW4tbGVmdDogMC41ZW07XG59XG5cbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBtYXJnaW46IDA7XG59XG5cbi5wcm9ncmVzc0JhciB7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuLnJlc3VsdHMgdGggKyB0aCxcbi5yZXN1bHRzIHRkICsgdGQge1xuICBwYWRkaW5nLWxlZnQ6IDFlbTtcbn1cblxuYnV0dG9uICsgKiB7XG4gIG1hcmdpbi1sZWZ0OiAxZW07XG59IiwiLy8vIEVtaXRzIGEgQ1NTIGNsYXNzLCBgLmNkay12aXN1YWxseS1oaWRkZW5gLiBUaGlzIGNsYXNzIGNhbiBiZSBhcHBsaWVkIHRvIGFuIGVsZW1lbnRcbi8vLyB0byBtYWtlIHRoYXQgZWxlbWVudCB2aXN1YWxseSBoaWRkZW4gd2hpbGUgcmVtYWluaW5nIGF2YWlsYWJsZSB0byBhc3Npc3RpdmUgdGVjaG5vbG9neS5cbkBtaXhpbiBhMTF5LXZpc3VhbGx5LWhpZGRlbigpIHtcbiAgLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG5cbiAgICAvLyBUaGlzIHdvcmtzIGFyb3VuZCBhIENocm9tZSBidWcgdGhhdCBjYW4gY2F1c2UgdGhlIHRhYiB0byBjcmFzaCB3aGVuIGxhcmdlIGFtb3VudHMgb2ZcbiAgICAvLyBub24tRW5nbGlzaCB0ZXh0IGdldCB3cmFwcGVkOiBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0xMjAxNDQ0XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgIC8vIEF2b2lkIGJyb3dzZXJzIHJlbmRlcmluZyB0aGUgZm9jdXMgcmluZyBpbiBzb21lIGNhc2VzLlxuICAgIG91dGxpbmU6IDA7XG5cbiAgICAvLyBBdm9pZCBzb21lIGNhc2VzIHdoZXJlIHRoZSBicm93c2VyIHdpbGwgc3RpbGwgcmVuZGVyIHRoZSBuYXRpdmUgY29udHJvbHMgKHNlZSAjOTA0OSkuXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcblxuICAgIC8vIFdlIG5lZWQgYXQgbGVhc3Qgb25lIG9mIHRvcC9ib3R0b20vbGVmdC9yaWdodCBpbiBvcmRlciB0byBwcmV2ZW50IGNhc2VzIHdoZXJlIHRoZVxuICAgIC8vIGFic29sdXRlLXBvc2l0aW9uZWQgZWxlbWVudCBpcyBwdXNoZWQgZG93biBhbmQgY2FuIGFmZmVjdCBzY3JvbGxpbmcgKHNlZSAjMjQ1OTcpLlxuICAgIC8vIGBsZWZ0YCB3YXMgY2hvc2VuIGhlcmUsIGJlY2F1c2UgaXQncyB0aGUgbGVhc3QgbGlrZWx5IHRvIGJyZWFrIG92ZXJyaWRlcyB3aGVyZSB0aGVcbiAgICAvLyBlbGVtZW50IG1pZ2h0IGhhdmUgYmVlbiBwb3NpdGlvbmVkIChlLmcuIGBtYXQtY2hlY2tib3hgKS5cbiAgICBsZWZ0OiAwO1xuXG4gICAgW2Rpcj0ncnRsJ10gJiB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICB9XG59XG5cbi8vLyBAZGVwcmVjYXRlZCBVc2UgYGExMXktdmlzdWFsbHktaGlkZGVuYC5cbkBtaXhpbiBhMTF5KCkge1xuICBAaW5jbHVkZSBhMTF5LXZpc3VhbGx5LWhpZGRlbjtcbn1cblxuLy8vIEVtaXRzIHRoZSBtaXhpbidzIGNvbnRlbnQgbmVzdGVkIHVuZGVyIGAkc2VsZWN0b3ItY29udGV4dGAgaWYgYCRzZWxlY3Rvci1jb250ZXh0YFxuLy8vIGlzIG5vbi1lbXB0eS5cbi8vLyBAcGFyYW0ge1N0cmluZ30gc2VsZWN0b3ItY29udGV4dCBUaGUgc2VsZWN0b3IgdW5kZXIgd2hpY2ggdG8gbmVzdCB0aGUgbWl4aW4ncyBjb250ZW50LlxuQG1peGluIF9vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICBAaWYgKCRzZWxlY3Rvci1jb250ZXh0ID09ICcnKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbiAgQGVsc2Uge1xuICAgICN7JHNlbGVjdG9yLWNvbnRleHR9IHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLy8gQXBwbGllcyBzdHlsZXMgZm9yIHVzZXJzIGluIGhpZ2ggY29udHJhc3QgbW9kZS4gTm90ZSB0aGF0IHRoaXMgb25seSBhcHBsaWVzXG4vLy8gdG8gTWljcm9zb2Z0IGJyb3dzZXJzLiBDaHJvbWUgY2FuIGJlIGluY2x1ZGVkIGJ5IGNoZWNraW5nIGZvciB0aGUgYGh0bWxbaGNdYFxuLy8vIGF0dHJpYnV0ZSwgaG93ZXZlciBDaHJvbWUgaGFuZGxlcyBoaWdoIGNvbnRyYXN0IGRpZmZlcmVudGx5LlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9IHRhcmdldCBUeXBlIG9mIGhpZ2ggY29udHJhc3Qgc2V0dGluZyB0byB0YXJnZXQuIERlZmF1bHRzIHRvIGBhY3RpdmVgLCBjYW4gYmVcbi8vLyAgICAgYHdoaXRlLW9uLWJsYWNrYCBvciBgYmxhY2stb24td2hpdGVgLlxuLy8vIEBwYXJhbSB7U3RyaW5nfSBlbmNhcHN1bGF0aW9uIFdoZXRoZXIgdG8gZW1pdCBzdHlsZXMgZm9yIHZpZXcgZW5jYXBzdWxhdGlvbi4gVmFsdWVzIGFyZTpcbi8vLyAgICAgKiBgb25gIC0gd29ya3MgZm9yIGBFbXVsYXRlZGAsIGBOYXRpdmVgLCBhbmQgYFNoYWRvd0RvbWBcbi8vLyAgICAgKiBgb2ZmYCAtIHdvcmtzIGZvciBgTm9uZWBcbi8vLyAgICAgKiBgYW55YCAtIHdvcmtzIGZvciBhbGwgZW5jYXBzdWxhdGlvbiBtb2RlcyBieSBlbWl0dGluZyB0aGUgQ1NTIHR3aWNlIChkZWZhdWx0KS5cbkBtaXhpbiBoaWdoLWNvbnRyYXN0KCR0YXJnZXQ6IGFjdGl2ZSwgJGVuY2Fwc3VsYXRpb246ICdhbnknKSB7XG4gIEBpZiAoJHRhcmdldCAhPSAnYWN0aXZlJyBhbmQgJHRhcmdldCAhPSAnYmxhY2stb24td2hpdGUnIGFuZCAkdGFyZ2V0ICE9ICd3aGl0ZS1vbi1ibGFjaycpIHtcbiAgICBAZXJyb3IgJ1Vua25vd24gY2RrLWhpZ2gtY29udHJhc3QgdmFsdWUgXCIjeyR0YXJnZXR9XCIgcHJvdmlkZWQuICcgK1xuICAgICAgICAgICAnQWxsb3dlZCB2YWx1ZXMgYXJlIFwiYWN0aXZlXCIsIFwiYmxhY2stb24td2hpdGVcIiwgYW5kIFwid2hpdGUtb24tYmxhY2tcIic7XG4gIH1cblxuICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvbicgYW5kICRlbmNhcHN1bGF0aW9uICE9ICdvZmYnIGFuZCAkZW5jYXBzdWxhdGlvbiAhPSAnYW55Jykge1xuICAgIEBlcnJvciAnVW5rbm93biBjZGstaGlnaC1jb250cmFzdCBlbmNhcHN1bGF0aW9uIFwiI3skZW5jYXBzdWxhdGlvbn1cIiBwcm92aWRlZC4gJyArXG4gICAgICAgICAgICdBbGxvd2VkIHZhbHVlcyBhcmUgXCJvblwiLCBcIm9mZlwiLCBhbmQgXCJhbnlcIic7XG4gIH1cblxuICAvLyBJZiB0aGUgc2VsZWN0b3IgY29udGV4dCBoYXMgbXVsdGlwbGUgcGFydHMsIHN1Y2ggYXMgYC5zZWN0aW9uLCAucmVnaW9uYCwganVzdCBkb2luZ1xuICAvLyBgLmNkay1oaWdoLWNvbnRyYXN0LXh4eCAjeyZ9YCB3aWxsIG9ubHkgYXBwbHkgdGhlIHBhcmVudCBzZWxlY3RvciB0byB0aGUgZmlyc3QgcGFydCBvZiB0aGVcbiAgLy8gY29udGV4dC4gV2UgYWRkcmVzcyB0aGlzIGJ5IG5lc3RpbmcgdGhlIHNlbGVjdG9yIGNvbnRleHQgdW5kZXIgLmNkay1oaWdoLWNvbnRyYXN0LlxuICBAYXQtcm9vdCB7XG4gICAgJHNlbGVjdG9yLWNvbnRleHQ6ICN7Jn07XG5cbiAgICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvbicpIHtcbiAgICAgIC8vIE5vdGUgdGhhdCBpZiB0aGlzIHNlbGVjdG9yIGlzIHVwZGF0ZWQsIHRoZSBzYW1lIGNoYW5nZSBoYXMgdG8gYmUgbWFkZSBpbnNpZGVcbiAgICAgIC8vIGBfb3ZlcmxheS5zY3NzYCB3aGljaCBjYW4ndCBkZXBlbmQgb24gdGhpcyBtaXhpbiBkdWUgdG8gc29tZSBpbmZyYXN0cnVjdHVyZSBsaW1pdGF0aW9ucy5cbiAgICAgIC5jZGstaGlnaC1jb250cmFzdC0jeyR0YXJnZXR9IHtcbiAgICAgICAgQGluY2x1ZGUgX29wdGlvbmFsbHktbmVzdC1jb250ZW50KCRzZWxlY3Rvci1jb250ZXh0KSB7XG4gICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAaWYgKCRlbmNhcHN1bGF0aW9uICE9ICdvZmYnKSB7XG4gICAgICAuY2RrLWhpZ2gtY29udHJhc3QtI3skdGFyZ2V0fSA6aG9zdCB7XG4gICAgICAgIEBpbmNsdWRlIF9vcHRpb25hbGx5LW5lc3QtY29udGVudCgkc2VsZWN0b3ItY29udGV4dCkge1xuICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBXZSB3YW50IG92ZXJsYXlzIHRvIGFsd2F5cyBhcHBlYXIgb3ZlciB1c2VyIGNvbnRlbnQsIHNvIHNldCBhIGJhc2VsaW5lXG4vLyB2ZXJ5IGhpZ2ggei1pbmRleCBmb3IgdGhlIG92ZXJsYXkgY29udGFpbmVyLCB3aGljaCBpcyB3aGVyZSB3ZSBjcmVhdGUgdGhlIG5ld1xuLy8gc3RhY2tpbmcgY29udGV4dCBmb3IgYWxsIG92ZXJsYXlzLlxuJG92ZXJsYXktY29udGFpbmVyLXotaW5kZXg6IDEwMDAgIWRlZmF1bHQ7XG4kb3ZlcmxheS16LWluZGV4OiAxMDAwICFkZWZhdWx0O1xuJG92ZXJsYXktYmFja2Ryb3Atei1pbmRleDogMTAwMCAhZGVmYXVsdDtcblxuLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIG9mIHRoZSBiYWNrZHJvcHNcbiRvdmVybGF5LWJhY2tkcm9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzIpICFkZWZhdWx0O1xuXG4vLyBEZWZhdWx0IGJhY2tkcm9wIGFuaW1hdGlvbiBpcyBiYXNlZCBvbiB0aGUgTWF0ZXJpYWwgRGVzaWduIHN3aWZ0LWVhc2Utb3V0LlxuJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cbi8vLyBFbWl0cyBzdHJ1Y3R1cmFsIHN0eWxlcyByZXF1aXJlZCBmb3IgY2RrL292ZXJsYXkgdG8gZnVuY3Rpb24uXG5AbWl4aW4gb3ZlcmxheSgpIHtcbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciwgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICAvLyBEaXNhYmxlIGV2ZW50cyBmcm9tIGJlaW5nIGNhcHR1cmVkIG9uIHRoZSBvdmVybGF5IGNvbnRhaW5lci5cbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIC8vIFRoZSBjb250YWluZXIgc2hvdWxkIGJlIHRoZSBzaXplIG9mIHRoZSB2aWV3cG9ydC5cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAvLyBUaGUgb3ZlcmxheS1jb250YWluZXIgaXMgYW4gaW52aXNpYmxlIGVsZW1lbnQgd2hpY2ggY29udGFpbnMgYWxsIGluZGl2aWR1YWwgb3ZlcmxheXMuXG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAkb3ZlcmxheS1jb250YWluZXItei1pbmRleDtcblxuICAgICY6ZW1wdHkge1xuICAgICAgLy8gSGlkZSB0aGUgZWxlbWVudCB3aGVuIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgY2hpbGQgbm9kZXMuIFRoaXMgZG9lc24ndFxuICAgICAgLy8gaW5jbHVkZSBvdmVybGF5cyB0aGF0IGhhdmUgYmVlbiBkZXRhY2hlZCwgcmF0aGVyIHRoYW4gZGlzcG9zZWQuXG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC8vIFdlIHVzZSBhbiBleHRyYSB3cmFwcGVyIGVsZW1lbnQgaW4gb3JkZXIgdG8gdXNlIG1ha2UgdGhlIG92ZXJsYXkgaXRzZWxmIGEgZmxleCBpdGVtLlxuICAvLyBUaGlzIG1ha2VzIGNlbnRlcmluZyB0aGUgb3ZlcmxheSBlYXN5IHdpdGhvdXQgcnVubmluZyBpbnRvIHRoZSBzdWJwaXhlbCByZW5kZXJpbmdcbiAgLy8gcHJvYmxlbXMgdGllZCB0byB1c2luZyBgdHJhbnNmb3JtYCBhbmQgd2l0aG91dCBpbnRlcmZlcmluZyB3aXRoIHRoZSBvdGhlciBwb3NpdGlvblxuICAvLyBzdHJhdGVnaWVzLlxuICAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRvdmVybGF5LXotaW5kZXg7XG4gIH1cblxuICAvLyBBIHNpbmdsZSBvdmVybGF5IHBhbmUuXG4gIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCBmb3IgdGhpcyBvbmUgdG8gc3RhcnQgb2ZmIGBhYnNvbHV0ZWAsXG4gICAgLy8gaW4gb3JkZXIgZm9yIHVzIHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCBjb3JyZWN0bHkuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogJG92ZXJsYXktei1pbmRleDtcblxuICAgIC8vIEZvciBjb25uZWN0ZWQtcG9zaXRpb24gb3ZlcmxheXMsIHdlIHNldCBgZGlzcGxheTogZmxleGAgaW5cbiAgICAvLyBvcmRlciB0byBmb3JjZSBgbWF4LXdpZHRoYCBhbmQgYG1heC1oZWlnaHRgIHRvIHRha2UgZWZmZWN0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktYmFja2Ryb3Age1xuICAgIC8vIFRPRE8oamVsYm91cm4pOiByZXVzZSBzaWRlbmF2IGZ1bGxzY3JlZW4gbWl4aW4uXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcblxuICAgIHotaW5kZXg6ICRvdmVybGF5LWJhY2tkcm9wLXotaW5kZXg7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb24gJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb247XG4gICAgb3BhY2l0eTogMDtcblxuICAgICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAxO1xuXG4gICAgICAvLyBOb3RlIHRoYXQgd2UgY2FuJ3QgaW1wb3J0IGFuZCB1c2UgdGhlIGBoaWdoLWNvbnRyYXN0YCBtaXhpbiBmcm9tIGBfYTExeS5zY3NzYCwgYmVjYXVzZVxuICAgICAgLy8gdGhpcyBmaWxlIHdpbGwgYmUgY29waWVkIHRvIHRoZSB0b3AtbGV2ZWwgYGNka2AgcGFja2FnZSB3aGVuIHB1dHRpbmcgdG9nZXRoZXIgdGhlIGZpbGVzXG4gICAgICAvLyBmb3IgbnBtLiBBbnkgcmVsYXRpdmUgaW1wb3J0IHBhdGhzIHdlIHVzZSBoZXJlIHdpbGwgYmVjb21lIGludmFsaWQgb25jZSB0aGUgZmlsZSBpcyBjb3BpZWQuXG4gICAgICAuY2RrLWhpZ2gtY29udHJhc3QtYWN0aXZlICYge1xuICAgICAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJnYmEgYmFja2dyb3VuZCB3aWxsIGJlY29tZSBzb2xpZFxuICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIGZhbGwgYmFjayB0byBtYWtpbmcgaXQgb3BhcXVlIHVzaW5nIGBvcGFjaXR5YC5cbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kOiAkb3ZlcmxheS1iYWNrZHJvcC1jb2xvcjtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCB7XG4gICAgLy8gRGVmaW5lIGEgdHJhbnNpdGlvbiBvbiB0aGUgdmlzaWJpbGl0eSBzbyB0aGF0IHRoZSBgdHJhbnNpdGlvbmVuZGAgZXZlbnQgY2FuIGZpcmUgaW1tZWRpYXRlbHkuXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAxbXMgbGluZWFyLCBvcGFjaXR5IDFtcyBsaW5lYXI7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDE7XG5cbiAgICAvLyBOb3RlOiBhcyBvZiBGaXJlZm94IDU3LCBoYXZpbmcgdGhlIGJhY2tkcm9wIGJlIGBiYWNrZ3JvdW5kOiBub25lYCB3aWxsIHByZXZlbnQgaXQgZnJvbVxuICAgIC8vIGNhcHR1cmluZyB0aGUgdXNlcidzIG1vdXNlIHNjcm9sbCBldmVudHMuIFNpbmNlIHdlIGFsc28gY2FuJ3QgdXNlIHNvbWV0aGluZyBsaWtlXG4gICAgLy8gYHJnYmEoMCwgMCwgMCwgMClgLCB3ZSB3b3JrIGFyb3VuZCB0aGUgaW5jb25zaXN0ZW5jeSBieSBub3Qgc2V0dGluZyB0aGUgYmFja2dyb3VuZCBhdFxuICAgIC8vIGFsbCBhbmQgdXNpbmcgYG9wYWNpdHlgIHRvIG1ha2UgdGhlIGVsZW1lbnQgdHJhbnNwYXJlbnQuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgfVxuXG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcC1ub29wLWFuaW1hdGlvbiB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxuXG4gIC8vIE92ZXJsYXkgcGFyZW50IGVsZW1lbnQgdXNlZCB3aXRoIHRoZSBjb25uZWN0ZWQgcG9zaXRpb24gc3RyYXRlZ3kuIFVzZWQgdG8gY29uc3RyYWluIHRoZVxuICAvLyBvdmVybGF5IGVsZW1lbnQncyBzaXplIHRvIGZpdCB3aXRoaW4gdGhlIHZpZXdwb3J0LlxuICAuY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRvdmVybGF5LXotaW5kZXg7XG5cbiAgICAvLyBXZSB1c2UgYGRpc3BsYXk6IGZsZXhgIG9uIHRoaXMgZWxlbWVudCBleGNsdXNpdmVseSBmb3IgY2VudGVyaW5nIGNvbm5lY3RlZCBvdmVybGF5cy5cbiAgICAvLyBXaGVuICpub3QqIGNlbnRlcmluZywgYSB0b3AvbGVmdC9ib3R0b20vcmlnaHQgd2lsbCBiZSBzZXQgd2hpY2ggb3ZlcnJpZGVzIHRoZSBub3JtYWxcbiAgICAvLyBmbGV4IGxheW91dC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLy8gV2UgdXNlIHRoZSBgY29sdW1uYCBkaXJlY3Rpb24gaGVyZSB0byBhdm9pZCBzb21lIGZsZXhib3ggaXNzdWVzIGluIEVkZ2VcbiAgICAvLyB3aGVuIHVzaW5nIHRoZSBcImdyb3cgYWZ0ZXIgb3BlblwiIG9wdGlvbnMuXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC8vIEFkZCBzb21lIGRpbWVuc2lvbnMgc28gdGhlIGVsZW1lbnQgaGFzIGFuIGBpbm5lclRleHRgIHdoaWNoIHNvbWUgcGVvcGxlIGRlcGVuZCBvbiBpbiB0ZXN0cy5cbiAgICBtaW4td2lkdGg6IDFweDtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gIH1cblxuICAvLyBVc2VkIHdoZW4gZGlzYWJsaW5nIGdsb2JhbCBzY3JvbGxpbmcuXG4gIC5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG5cbiAgICAvLyBOZWNlc3NhcnkgZm9yIHRoZSBjb250ZW50IG5vdCB0byBsb3NlIGl0cyB3aWR0aC4gTm90ZSB0aGF0IHdlJ3JlIHVzaW5nIDEwMCUsIGluc3RlYWQgb2ZcbiAgICAvLyAxMDB2dywgYmVjYXVzZSAxMDB2dyBpbmNsdWRlcyB0aGUgd2lkdGggcGx1cyB0aGUgc2Nyb2xsYmFyLCB3aGVyZWFzIDEwMCUgaXMgdGhlIHdpZHRoXG4gICAgLy8gdGhhdCB0aGUgZWxlbWVudCBoYWQgYmVmb3JlIHdlIG1hZGUgaXQgYGZpeGVkYC5cbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC8vIE5vdGU6IHRoaXMgd2lsbCBhbHdheXMgYWRkIGEgc2Nyb2xsYmFyIHRvIHdoYXRldmVyIGVsZW1lbnQgaXQgaXMgb24sIHdoaWNoIGNhblxuICAgIC8vIHBvdGVudGlhbGx5IHJlc3VsdCBpbiBkb3VibGUgc2Nyb2xsYmFycy4gSXQgc2hvdWxkbid0IGJlIGFuIGlzc3VlLCBiZWNhdXNlIHdlIHdvbid0XG4gICAgLy8gYmxvY2sgc2Nyb2xsaW5nIG9uIGEgcGFnZSB0aGF0IGRvZXNuJ3QgaGF2ZSBhIHNjcm9sbGJhciBpbiB0aGUgZmlyc3QgcGxhY2UuXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG59XG4iLCIvLyBTdHJ1Y3R1cmFsIHN0eWxlcyBmb3IgdGhlIGF1dG9zaXplIHRleHQgZmllbGRzLlxuQG1peGluIHRleHQtZmllbGQtYXV0b3NpemUoKSB7XG4gIC8vIFJlbW92ZSB0aGUgcmVzaXplIGhhbmRsZSBvbiBhdXRvc2l6aW5nIHRleHRhcmVhcywgYmVjYXVzZSB3aGF0ZXZlciBoZWlnaHRcbiAgLy8gdGhlIHVzZXIgcmVzaXplZCB0byB3aWxsIGJlIG92ZXJ3cml0dGVuIG9uY2UgdGhleSBzdGFydCB0eXBpbmcgYWdhaW4uXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG5cbiAgLy8gVGhpcyBjbGFzcyBpcyB0ZW1wb3JhcmlseSBhcHBsaWVkIHRvIHRoZSB0ZXh0YXJlYSB3aGVuIGl0IGlzIGJlaW5nIG1lYXN1cmVkLiBJdCBpcyBpbW1lZGlhdGVseVxuICAvLyByZW1vdmVkIHdoZW4gbWVhc3VyaW5nIGlzIGNvbXBsZXRlLiBXZSB1c2UgYCFpbXBvcnRhbnRgIHJ1bGVzIGhlcmUgdG8gbWFrZSBzdXJlIHVzZXItc3BlY2lmaWVkXG4gIC8vIHJ1bGVzIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWVhc3VyZW1lbnQuXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICAgIEBpbmNsdWRlIF9hdXRvc2l6ZS1tZWFzdXJpbmctYmFzZTtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIH1cblxuICAvLyBTaW1pbGFyIHRvIHRoZSBgY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZ2AgY2xhc3MsIGJ1dCBvbmx5IGFwcGxpZWQgb24gRmlyZWZveC4gV2UgbmVlZFxuICAvLyB0byB1c2UgdGhpcyBjbGFzcywgYmVjYXVzZSBGaXJlZm94IGhhcyBhIGJ1ZyB3aGVyZSBjaGFuZ2luZyB0aGUgYG92ZXJmbG93YCBicmVha3MgdGhlIHVzZXInc1xuICAvLyBhYmlsaXR5IHRvIHVuZG8vcmVkbyB3aGF0IHRoZXkgd2VyZSB0eXBpbmcgKHNlZSAjMTY2MjkpLiBUaGlzIGNsYXNzIGlzIG9ubHkgc2NvcGVkIHRvIEZpcmVmb3gsXG4gIC8vIGJlY2F1c2UgdGhlIG1lYXN1cmVtZW50cyB0aGVyZSBkb24ndCBzZWVtIHRvIGJlIGFmZmVjdGVkIGJ5IHRoZSBgaGVpZ2h0OiAwYCwgd2hlcmVhcyBvbiBvdGhlclxuICAvLyBicm93c2VycyB0aGV5IGFyZSwgZS5nLiBDaHJvbWUgZGV0ZWN0cyBsb25nZXIgdGV4dCBhbmQgSUUgZG9lcyd0IHJlc2l6ZSBiYWNrIHRvIG5vcm1hbC5cbiAgLy8gSWRlbnRpY2FsIGlzc3VlIHJlcG9ydDogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDQ4Nzg0XG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmctZmlyZWZveCB7XG4gICAgQGluY2x1ZGUgX2F1dG9zaXplLW1lYXN1cmluZy1iYXNlO1xuICAgIGhlaWdodDogMCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIENvcmUgc3R5bGVzIHRoYXQgZW5hYmxlIG1vbml0b3JpbmcgYXV0b2ZpbGwgc3RhdGUgb2YgdGV4dCBmaWVsZHMuXG5AbWl4aW4gdGV4dC1maWVsZC1hdXRvZmlsbCgpIHtcbiAgLy8gS2V5ZnJhbWVzIHRoYXQgYXBwbHkgbm8gc3R5bGVzLCBidXQgYWxsb3cgdXMgdG8gbW9uaXRvciB3aGVuIGFuIHRleHQgZmllbGQgYmVjb21lcyBhdXRvZmlsbGVkXG4gIC8vIGJ5IHdhdGNoaW5nIGZvciB0aGUgYW5pbWF0aW9uIGV2ZW50cyB0aGF0IGFyZSBmaXJlZCB3aGVuIHRoZXkgc3RhcnQuIE5vdGU6IHRoZSAvKiEqLyBjb21tZW50IGlzXG4gIC8vIG5lZWRlZCB0byBwcmV2ZW50IExpYlNhc3MgZnJvbSBzdHJpcHBpbmcgdGhlIGtleWZyYW1lcyBvdXQuXG4gIC8vIEJhc2VkIG9uOiBodHRwczovL21lZGl1bS5jb20vQGJydW5uL2RldGVjdGluZy1hdXRvZmlsbGVkLWZpZWxkcy1pbi1qYXZhc2NyaXB0LWFlZDU5OGQyNWRhN1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IHsvKiEqL31cbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgey8qISovfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgLy8gU2luY2UgQ2hyb21lIDgwIHdlIG5lZWQgYSAxbXMgZGVsYXksIG9yIHRoZSBhbmltYXRpb25zdGFydCBldmVudCB3b24ndCBmaXJlLlxuICAgIGFuaW1hdGlvbjogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQgMHMgMW1zO1xuICB9XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcbiAgICAvLyBTaW5jZSBDaHJvbWUgODAgd2UgbmVlZCBhIDFtcyBkZWxheSwgb3IgdGhlIGFuaW1hdGlvbnN0YXJ0IGV2ZW50IHdvbid0IGZpcmUuXG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgMHMgMW1zO1xuICB9XG59XG5cbkBtaXhpbiBfYXV0b3NpemUtbWVhc3VyaW5nLWJhc2Uge1xuICAvLyBIYXZpbmcgMnB4IHRvcCBhbmQgYm90dG9tIHBhZGRpbmcgc2VlbXMgdG8gZml4IGEgYnVnIHdoZXJlIENocm9tZSBnZXRzIGFuIGluY29ycmVjdFxuICAvLyBtZWFzdXJlbWVudC4gV2UganVzdCBoYXZlIHRvIGFjY291bnQgZm9yIGl0IGxhdGVyIGFuZCBzdWJ0cmFjdCBpdCBvZmYgdGhlIGZpbmFsIHJlc3VsdC5cbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbn1cblxuLy8gVXNlZCB0byBnZW5lcmF0ZSBVSURzIGZvciBrZXlmcmFtZXMgdXNlZCB0byBjaGFuZ2UgdGhlIHRleHQgZmllbGQgYXV0b2ZpbGwgc3R5bGVzLlxuJGF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OiAwO1xuXG4vLyBNaXhpbiB1c2VkIHRvIGFwcGx5IGN1c3RvbSBiYWNrZ3JvdW5kIGFuZCBmb3JlZ3JvdW5kIGNvbG9ycyB0byBhbiBhdXRvZmlsbGVkIHRleHQgZmllbGQuXG4vLyBCYXNlZCBvbjogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjc4MTU0OS9cbi8vIHJlbW92aW5nLWlucHV0LWJhY2tncm91bmQtY29sb3VyLWZvci1jaHJvbWUtYXV0b2NvbXBsZXRlI2Fuc3dlci0zNzQzMjI2MFxuQG1peGluIHRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3IoJGJhY2tncm91bmQsICRmb3JlZ3JvdW5kOicnKSB7XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IHtcbiAgICB0byB7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgICAgIEBpZiAkZm9yZWdyb3VuZCAhPSAnJyB7IGNvbG9yOiAkZm9yZWdyb3VuZDsgfVxuICAgIH1cbiAgfVxuXG4gICY6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRhdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0gYm90aDtcbiAgfVxuXG4gICYuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIC8vIFNpbmNlIENocm9tZSA4MCB3ZSBuZWVkIGEgMW1zIGRlbGF5IGZvciBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCwgb3IgdGhlIGFuaW1hdGlvbnN0YXJ0XG4gICAgLy8gZXZlbnQgd29uJ3QgZmlyZS5cbiAgICBhbmltYXRpb246IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IDBzIDFtcyxcbiAgICAgICAgICAgICAgIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fSBib3RoO1xuICB9XG5cbiAgJGF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50OiAkYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQgKyAxICFnbG9iYWw7XG59XG5cbi8vIEBkZXByZWNhdGVkIFVzZSBgYXV0b3NpemVgIGFuZCBgYXV0b2ZpbGxgIGluc3RlYWQuXG5AbWl4aW4gdGV4dC1maWVsZCB7XG4gIEBpbmNsdWRlIHRleHQtZmllbGQtYXV0b3NpemUoKTtcbiAgQGluY2x1ZGUgdGV4dC1maWVsZC1hdXRvZmlsbCgpO1xufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJ0Bhbmd1bGFyL2Nkayc7XG5AdXNlICcuLi9zdHlsZS9sYXlvdXQtY29tbW9uJztcbkB1c2UgJy4uL3RoZW1pbmcvdGhlbWluZyc7XG5AdXNlICcuLi90aGVtaW5nL2luc3BlY3Rpb24nO1xuXG4vLyBQcml2YXRlIHNhc3MgdmFyaWFibGVzIHRoYXQgd2lsbCBiZSB1c2VkIGFzIHJlZmVyZW5jZSB0aHJvdWdob3V0IGNvbXBvbmVudCBzdHlsZXNoZWV0cy5cbiRkZWZhdWx0LWJvcmRlci13aWR0aDogM3B4O1xuJGRlZmF1bHQtYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiRkZWZhdWx0LWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4kZGVmYXVsdC1ib3JkZXItcmFkaXVzOiA0cHg7XG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyB0aGUgZm9jdXMgaW5kaWNhdG9yIHN0cnVjdHVyYWwgc3R5bGVzLlxuQG1peGluIHN0cnVjdHVyYWwtc3R5bGluZygkcHJlZml4KSB7XG4gIC4jeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgIEBpbmNsdWRlIGxheW91dC1jb21tb24uZmlsbCgpO1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgZGlzcGxheTogdmFyKC0tI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItZGlzcGxheSwgbm9uZSk7IC8vIEhpZGUgdGhlIGluZGljYXRvciBieSBkZWZhdWx0LlxuICAgICAgYm9yZGVyOiB2YXIoXG4gICAgICAgICAgLS0jeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItd2lkdGgsXG4gICAgICAgICAgI3skZGVmYXVsdC1ib3JkZXItd2lkdGh9XG4gICAgICAgIClcbiAgICAgICAgdmFyKFxuICAgICAgICAgIC0tI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLXN0eWxlLFxuICAgICAgICAgICN7JGRlZmF1bHQtYm9yZGVyLXN0eWxlfVxuICAgICAgICApXG4gICAgICAgIHZhcihcbiAgICAgICAgICAtLSN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1jb2xvcixcbiAgICAgICAgICAjeyRkZWZhdWx0LWJvcmRlci1jb2xvcn1cbiAgICAgICAgKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcihcbiAgICAgICAgLS0jeyRwcmVmaXh9LWZvY3VzLWluZGljYXRvci1ib3JkZXItcmFkaXVzLFxuICAgICAgICAjeyRkZWZhdWx0LWJvcmRlci1yYWRpdXN9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEJ5IGRlZmF1bHQsIHJlbmRlciB0aGUgZm9jdXMgaW5kaWNhdG9yIHdoZW4gdGhlIGZvY3VzIGluZGljYXRvciBob3N0IGVsZW1lbnQgdGFrZXMgZm9jdXMuXG4gICAgLy8gRGVmaW5pbmcgYSBwc2V1ZG8gZWxlbWVudCdzIGNvbnRlbnQgd2lsbCBjYXVzZSBpdCB0byByZW5kZXIuXG4gICAgJjpmb2N1czo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgIH1cbiAgfVxuXG4gIC8vIEVuYWJsZSB0aGUgaW5kaWNhdG9yIGluIGhpZ2ggY29udHJhc3QgbW9kZS5cbiAgQGluY2x1ZGUgY2RrLmhpZ2gtY29udHJhc3QoYWN0aXZlLCBvZmYpIHtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoZGlzcGxheTogYmxvY2spLCAkcHJlZml4KTtcbiAgfVxufVxuXG4vLyBHZW5lcmF0ZXMgQ1NTIHZhcmlhYmxlIGRlY2xhcmF0aW9ucyBmcm9tIGEgbWFwLlxuQG1peGluIF9vdXRwdXQtdmFyaWFibGVzKCRtYXApIHtcbiAgQGVhY2ggJGtleSwgJHZhbHVlIGluICRtYXAge1xuICAgIEBpZiAoJHZhbHVlKSB7XG4gICAgICAtLSN7JGtleX06ICN7JHZhbHVlfTtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWl4aW4gdGhhdCBkZWR1cHMgQ1NTIHZhcmlhYmxlcyBmb3IgdGhlIHN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzIG1peGluLlxuQG1peGluIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKCRjb25maWcsICRwcmVmaXgpIHtcbiAgJGJvcmRlci1zdHlsZTogbWFwLmdldCgkY29uZmlnLCBib3JkZXItc3R5bGUpO1xuICAkYm9yZGVyLXdpZHRoOiBtYXAuZ2V0KCRjb25maWcsIGJvcmRlci13aWR0aCk7XG4gICRib3JkZXItcmFkaXVzOiBtYXAuZ2V0KCRjb25maWcsIGJvcmRlci1yYWRpdXMpO1xuICAkYm9yZGVyLWNvbG9yOiBtYXAuZ2V0KCRjb25maWcsIGJvcmRlci1jb2xvcik7XG4gICRkaXNwbGF5OiBtYXAuZ2V0KCRjb25maWcsIGRpc3BsYXkpO1xuICAkbWFwOiAoXG4gICAgJyN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1zdHlsZSc6ICRib3JkZXItc3R5bGUsXG4gICAgJyN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci13aWR0aCc6ICRib3JkZXItd2lkdGgsXG4gICAgJyN7JHByZWZpeH0tZm9jdXMtaW5kaWNhdG9yLWJvcmRlci1yYWRpdXMnOiAkYm9yZGVyLXJhZGl1cyxcbiAgICAnI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yJzogJGJvcmRlci1jb2xvcixcbiAgICAnI3skcHJlZml4fS1mb2N1cy1pbmRpY2F0b3ItZGlzcGxheSc6ICRkaXNwbGF5LFxuICApO1xuXG4gIEBpZiAoJikge1xuICAgIEBpbmNsdWRlIF9vdXRwdXQtdmFyaWFibGVzKCRtYXApO1xuICB9XG4gIEBlbHNlIHtcbiAgICAvLyBXZSB1c2UgYGh0bWxgIGhlcmUgaW5zdGVhZCBvZiBgOnJvb3RgLCBiZWNhdXNlIHRoZVxuICAgIC8vIGxhdHRlciBjYXVzZXMgc29tZSBpc3N1ZXMgd2l0aCBpbnRlcm5hbCB0b29saW5nLlxuICAgIGh0bWwge1xuICAgICAgQGluY2x1ZGUgX291dHB1dC12YXJpYWJsZXMoJG1hcCk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBzdHJvbmctZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnOiAoKSkge1xuICAvLyBEZWZhdWx0IGZvY3VzIGluZGljYXRvciBjb25maWcuXG4gICRkZWZhdWx0LWNvbmZpZzogKFxuICAgICAgYm9yZGVyLWNvbG9yOiBibGFjayxcbiAgICAgIGRpc3BsYXk6IGJsb2NrLFxuICApO1xuXG4gIC8vIE1lcmdlIGRlZmF1bHQgY29uZmlnIHdpdGggdXNlciBjb25maWcuXG4gICRjb25maWc6IG1hcC5tZXJnZSgkZGVmYXVsdC1jb25maWcsICRjb25maWcpO1xuXG4gIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKCRjb25maWcsICdtYXQnKTtcbn1cblxuQG1peGluIG1kYy1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycygkY29uZmlnOiAoKSkge1xuICAvLyBEZWZhdWx0IGZvY3VzIGluZGljYXRvciBjb25maWcuXG4gICRkZWZhdWx0LWNvbmZpZzogKFxuICAgICAgYm9yZGVyLWNvbG9yOiBibGFjayxcbiAgICAgIGRpc3BsYXk6IGJsb2NrLFxuICApO1xuXG4gIC8vIE1lcmdlIGRlZmF1bHQgY29uZmlnIHdpdGggdXNlciBjb25maWcuXG4gICRjb25maWc6IG1hcC5tZXJnZSgkZGVmYXVsdC1jb25maWcsICRjb25maWcpO1xuXG4gIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKCRjb25maWcsICdtYXQtbWRjJyk7XG59XG5cbkBtaXhpbiBzdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1jb2xvcigkdGhlbWUtb3ItY29sb3IpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdGhlbWUtb3ItY29sb3IpID09ICdjb2xvcicge1xuICAgIEBpbmNsdWRlIGN1c3RvbWl6ZS1mb2N1cy1pbmRpY2F0b3JzKChcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGhlbWUtb3ItY29sb3JcbiAgICApLCAnbWF0Jyk7XG4gIH1cbiAgQGVsc2Uge1xuICAgICRib3JkZXItY29sb3I6IGluc3BlY3Rpb24uZ2V0LXRoZW1lLWNvbG9yKCR0aGVtZS1vci1jb2xvciwgcHJpbWFyeSk7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKFxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3JcbiAgICApLCAnbWF0Jyk7XG4gIH1cbn1cblxuQG1peGluIHN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLXRoZW1lKCR0aGVtZS1vci1jb2xvcikge1xuICBAaWYgbWV0YS50eXBlLW9mKCR0aGVtZS1vci1jb2xvcikgPT0gJ2NvbG9yJyB7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKFxuICAgICAgICBib3JkZXItY29sb3I6ICR0aGVtZS1vci1jb2xvclxuICAgICksICdtYXQnKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoJHRoZW1lLW9yLWNvbG9yLCAnbWF0LWZvY3VzLWluZGljYXRvcnMnKSB7XG4gICAgICBAaWYgaW5zcGVjdGlvbi50aGVtZS1oYXMoJHRoZW1lLW9yLWNvbG9yLCBjb2xvcikge1xuICAgICAgICBAaW5jbHVkZSBzdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1jb2xvcigkdGhlbWUtb3ItY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWRjLXN0cm9uZy1mb2N1cy1pbmRpY2F0b3JzLWNvbG9yKCR0aGVtZS1vci1jb2xvcikge1xuICBAaWYgbWV0YS50eXBlLW9mKCR0aGVtZS1vci1jb2xvcikgPT0gJ2NvbG9yJyB7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKFxuICAgICAgICBib3JkZXItY29sb3I6ICR0aGVtZS1vci1jb2xvclxuICAgICksICdtYXQtbWRjJyk7XG4gIH1cbiAgQGVsc2Uge1xuICAgICRib3JkZXItY29sb3I6IGluc3BlY3Rpb24uZ2V0LXRoZW1lLWNvbG9yKCR0aGVtZS1vci1jb2xvciwgcHJpbWFyeSk7XG4gICAgQGluY2x1ZGUgY3VzdG9taXplLWZvY3VzLWluZGljYXRvcnMoKFxuICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXItY29sb3JcbiAgICApLCAnbWF0LW1kYycpO1xuICB9XG59XG5cbkBtaXhpbiBtZGMtc3Ryb25nLWZvY3VzLWluZGljYXRvcnMtdGhlbWUoJHRoZW1lLW9yLWNvbG9yKSB7XG4gIEBpZiBtZXRhLnR5cGUtb2YoJHRoZW1lLW9yLWNvbG9yKSA9PSAnY29sb3InIHtcbiAgICBAaW5jbHVkZSBjdXN0b21pemUtZm9jdXMtaW5kaWNhdG9ycygoXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRoZW1lLW9yLWNvbG9yXG4gICAgKSwgJ21hdC1tZGMnKTtcbiAgfVxuICBAZWxzZSB7XG4gICAgQGluY2x1ZGUgdGhlbWluZy5wcml2YXRlLWNoZWNrLWR1cGxpY2F0ZS10aGVtZS1zdHlsZXMoXG4gICAgICAgICR0aGVtZS1vci1jb2xvciwgJ21hdC1tZGMtZm9jdXMtaW5kaWNhdG9ycycpIHtcbiAgICAgIEBpZiBpbnNwZWN0aW9uLnRoZW1lLWhhcygkdGhlbWUtb3ItY29sb3IsIGNvbG9yKSB7XG4gICAgICAgIEBpbmNsdWRlIG1kYy1zdHJvbmctZm9jdXMtaW5kaWNhdG9ycy1jb2xvcigkdGhlbWUtb3ItY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gVGhpcyBtaXhpbiBlbnN1cmVzIGFuIGVsZW1lbnQgc3BhbnMgdG8gZmlsbCB0aGUgbmVhcmVzdCBhbmNlc3RvciB3aXRoIGRlZmluZWQgcG9zaXRpb25pbmcuXG5AbWl4aW4gZmlsbCB7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuIiwiQHVzZSAnQGFuZ3VsYXIvY2RrJztcbkB1c2UgJy4vdG9rZW5zL20yL21hdC9hcHAnIGFzIHRva2Vucy1tYXQtYXBwO1xuQHVzZSAnLi90b2tlbnMvdG9rZW4tdXRpbHMnO1xuQHVzZSAnLi9yaXBwbGUvcmlwcGxlJztcbkB1c2UgJy4vZm9jdXMtaW5kaWNhdG9ycy9wcml2YXRlJztcbkB1c2UgJy4vbWRjLWhlbHBlcnMvbWRjLWhlbHBlcnMnO1xuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGFyZSBub3QgdGhlbWUtZGVwZW5kZW50LlxuQG1peGluIGNvcmUoKSB7XG4gIEBpbmNsdWRlIHJpcHBsZS5yaXBwbGUoKTtcbiAgQGluY2x1ZGUgY2RrLmExMXktdmlzdWFsbHktaGlkZGVuKCk7XG4gIEBpbmNsdWRlIGNkay5vdmVybGF5KCk7XG4gIEBpbmNsdWRlIGNkay50ZXh0LWZpZWxkLWF1dG9zaXplKCk7XG4gIEBpbmNsdWRlIGNkay50ZXh0LWZpZWxkLWF1dG9maWxsKCk7XG4gIEBpbmNsdWRlIHByaXZhdGUuc3RydWN0dXJhbC1zdHlsaW5nKCdtYXQnKTtcbiAgQGluY2x1ZGUgcHJpdmF0ZS5zdHJ1Y3R1cmFsLXN0eWxpbmcoJ21hdC1tZGMnKTtcblxuICAvLyBXcmFwcGVyIGVsZW1lbnQgdGhhdCBwcm92aWRlcyB0aGUgdGhlbWUgYmFja2dyb3VuZCB3aGVuIHRoZVxuICAvLyB1c2VyJ3MgY29udGVudCBpc24ndCBpbnNpZGUgb2YgYSBgbWF0LXNpZGVuYXYtY29udGFpbmVyYC5cbiAgQGF0LXJvb3Qge1xuICAgIC5tYXQtYXBwLWJhY2tncm91bmQge1xuICAgICAgQGluY2x1ZGUgbWRjLWhlbHBlcnMuZGlzYWJsZS1tZGMtZmFsbGJhY2stZGVjbGFyYXRpb25zIHtcbiAgICAgICAgQGluY2x1ZGUgdG9rZW4tdXRpbHMudXNlLXRva2Vucyh0b2tlbnMtbWF0LWFwcC4kcHJlZml4LCB0b2tlbnMtbWF0LWFwcC5nZXQtdG9rZW4tc2xvdHMoKSkge1xuICAgICAgICAgIC8vIE5vdGU6IHdlIG5lZWQgdG8gZW1pdCBmYWxsYmFjayB2YWx1ZXMgaGVyZSB0byBhdm9pZCBlcnJvcnMgaW4gaW50ZXJuYWwgYnVpbGRzLlxuICAgICAgICAgIEBpbmNsdWRlIHRva2VuLXV0aWxzLmNyZWF0ZS10b2tlbi1zbG90KGJhY2tncm91bmQtY29sb3IsIGJhY2tncm91bmQtY29sb3IsIHRyYW5zcGFyZW50KTtcbiAgICAgICAgICBAaW5jbHVkZSB0b2tlbi11dGlscy5jcmVhdGUtdG9rZW4tc2xvdChjb2xvciwgdGV4dC1jb2xvciwgaW5oZXJpdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBDb3B5cmlnaHQgMjAyMCBHb29nbGUgSW5jLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG4vL1xuXG5AdXNlICdzYXNzOmxpc3QnO1xuQHVzZSAnc2FzczptYXAnO1xuQHVzZSAnc2FzczptZXRhJztcbkB1c2UgJy4vZ3NzJztcblxuLy8vIFdoZW4gdHJ1ZSwgYWRkIGFuIGFkZGl0aW9uYWwgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24gYmVmb3JlIGRlY2xhcmF0aW9uc1xuLy8vIHRoYXQgdXNlIGFkdmFuY2VkIGZlYXR1cmVzIHN1Y2ggYXMgY3VzdG9tIHByb3BlcnRpZXMgb3IgQ1NTIGZ1bmN0aW9ucy4gVGhpc1xuLy8vIGFkZHMgZmFsbGJhY2sgc3VwcG9ydCBmb3Igb2xkZXIgYnJvd3NlcnMgc3VjaCBhcyBJRTExIHRoYXQgZG8gbm90IHN1cHBvcnRcbi8vLyB0aGVzZSBmZWF0dXJlcyBhdCB0aGUgY29zdCBvZiBhZGRpdGlvbmFsIENTUy4gU2V0IHRoaXMgdmFyaWFibGUgdG8gZmFsc2UgdG9cbi8vLyBkaXNhYmxlIGdlbmVyYXRpbmcgZmFsbGJhY2sgZGVjbGFyYXRpb25zLlxuJGVuYWJsZS1mYWxsYmFjay1kZWNsYXJhdGlvbnM6IHRydWUgIWRlZmF1bHQ7XG5cbi8vLyBXcml0ZXMgYSBDU1MgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24uIFRoaXMgbWl4aW4gaXMgdXNlZCB0aHJvdWdob3V0IHRoZVxuLy8vIHRoZW1lIHBhY2thZ2UgZm9yIGNvbnNpc3RlbmN5IGZvciBkeW5hbWljYWxseSBzZXR0aW5nIENTUyBwcm9wZXJ0eSB2YWx1ZXMuXG4vLy9cbi8vLyBUaGlzIG1peGluIG1heSBvcHRpb25hbGx5IHRha2UgYSBmYWxsYmFjayB2YWx1ZS4gRm9yIGFkdmFuY2VkIGZlYXR1cmVzIHN1Y2hcbi8vLyBhcyBjdXN0b20gcHJvcGVydGllcyBvciBDU1MgZnVuY3Rpb25zIGxpa2UgbWluIGFuZCBtYXgsIGEgZmFsbGJhY2sgdmFsdWUgaXNcbi8vLyByZWNvbW1lbmRlZCB0byBzdXBwb3J0IG9sZGVyIGJyb3dzZXJzLlxuLy8vXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRwcm9wZXJ0eSAtIFRoZSBDU1MgcHJvcGVydHkgb2YgdGhlIGRlY2xhcmF0aW9uLlxuLy8vIEBwYXJhbSB7Kn0gJHZhbHVlIC0gVGhlIHZhbHVlIG9mIHRoZSBDU1MgZGVjbGFyYXRpb24uIFRoZSB2YWx1ZSBzaG91bGQgYmVcbi8vLyAgICAgcmVzb2x2ZWQgYnkgb3RoZXIgdGhlbWUgZnVuY3Rpb25zIGZpcnN0IChpLmUuIGN1c3RvbSBwcm9wZXJ0eSBNYXBzIGFuZFxuLy8vICAgICBNYXRlcmlhbCB0aGVtZSBrZXlzIGFyZSBub3Qgc3VwcG9ydGVkIGluIHRoaXMgbWl4aW4pLiBJZiB0aGUgdmFsdWUgaXNcbi8vLyAgICAgbnVsbCwgbm8gZGVjbGFyYXRpb25zIHdpbGwgYmUgZW1pdHRlZC5cbi8vLyBAcGFyYW0geyp9ICRmYWxsYmFjayAtIEFuIG9wdGlvbmFsIGZhbGxiYWNrIHZhbHVlIGZvciBvbGRlciBicm93c2Vycy4gSWZcbi8vLyAgICAgcHJvdmlkZWQsIGEgc2Vjb25kIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uIHdpbGwgYmUgYWRkZWQgYmVmb3JlIHRoZVxuLy8vICAgICBtYWluIHByb3BlcnR5L3ZhbHVlIGRlY2xhcmF0aW9uLlxuLy8vIEBwYXJhbSB7TWFwfSAkZ3NzIC0gQW4gb3B0aW9uYWwgTWFwIG9mIEdTUyBhbm5vdGF0aW9ucyB0byBhZGQuXG4vLy8gQHBhcmFtIHtCb29sfSAkaW1wb3J0YW50IC0gSWYgdHJ1ZSwgYWRkIGAhaW1wb3J0YW50YCB0byB0aGUgZGVjbGFyYXRpb24uXG5AbWl4aW4gZGVjbGFyYXRpb24oXG4gICRwcm9wZXJ0eSxcbiAgJHZhbHVlLFxuICAkZmFsbGJhY2stdmFsdWU6IG51bGwsXG4gICRnc3M6ICgpLFxuICAkaW1wb3J0YW50OiBmYWxzZVxuKSB7XG4gIC8vIE5vcm1hbGx5IHNldHRpbmcgYSBudWxsIHZhbHVlIHRvIGEgcHJvcGVydHkgd2lsbCBub3QgZW1pdCBDU1MsIHNvIG1peGluc1xuICAvLyB3b3VsZG4ndCBuZWVkIHRvIGNoZWNrIHRoaXMuIEhvd2V2ZXIsIFNhc3Mgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGVcbiAgLy8gaW50ZXJwb2xhdGVkIHByb3BlcnR5IGlzIGEgY3VzdG9tIHByb3BlcnR5LlxuICBAaWYgJHZhbHVlICE9IG51bGwge1xuICAgICRpbXBvcnRhbnQtcnVsZTogaWYoJGltcG9ydGFudCwgJyAhaW1wb3J0YW50JywgJycpO1xuXG4gICAgQGlmICRmYWxsYmFjay12YWx1ZSBhbmQgJGVuYWJsZS1mYWxsYmFjay1kZWNsYXJhdGlvbnMge1xuICAgICAgQGluY2x1ZGUgZ3NzLmFubm90YXRlKCRnc3MpO1xuICAgICAgI3skcHJvcGVydHl9OiAjeyRmYWxsYmFjay12YWx1ZX0gI3skaW1wb3J0YW50LXJ1bGV9O1xuXG4gICAgICAvLyBBZGQgQGFsdGVybmF0ZSB0byBhbm5vdGF0aW9ucy5cbiAgICAgICRnc3M6IG1hcC5tZXJnZShcbiAgICAgICAgJGdzcyxcbiAgICAgICAgKFxuICAgICAgICAgIGFsdGVybmF0ZTogdHJ1ZSxcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBnc3MuYW5ub3RhdGUoJGdzcyk7XG4gICAgI3skcHJvcGVydHl9OiAjeyR2YWx1ZX0jeyRpbXBvcnRhbnQtcnVsZX07XG4gIH1cbn1cblxuLy8vIFVucGFja3Mgc2hvcnRoYW5kIHZhbHVlcyBmb3IgQ1NTIHByb3BlcnRpZXMgKGkuZS4gbGlzdHMgb2YgMS0zIHZhbHVlcykuXG4vLy8gSWYgYSBsaXN0IG9mIDQgdmFsdWVzIGlzIGdpdmVuLCBpdCBpcyByZXR1cm5lZCBhcy1pcy5cbi8vL1xuLy8vIEV4YW1wbGVzOlxuLy8vXG4vLy8gdW5wYWNrLXZhbHVlKDRweCkgPT4gNHB4IDRweCA0cHggNHB4XG4vLy8gdW5wYWNrLXZhbHVlKDRweCAycHgpID0+IDRweCAycHggNHB4IDJweFxuLy8vIHVucGFjay12YWx1ZSg0cHggMnB4IDJweCkgPT4gNHB4IDJweCAycHggMnB4XG4vLy8gdW5wYWNrLXZhbHVlKDRweCAycHggMCAycHgpID0+IDRweCAycHggMCAycHhcbi8vL1xuLy8vIEBwYXJhbSB7TnVtYmVyIHwgTWFwIHwgTGlzdH0gJHZhbHVlIC0gTGlzdCBvZiAxIHRvIDQgdmFsdWUgbnVtYmVycy5cbi8vLyBAcmV0dXJuIHtMaXN0fSBhIExpc3Qgb2YgNCB2YWx1ZSBudW1iZXJzLlxuQGZ1bmN0aW9uIHVucGFjay12YWx1ZSgkdmFsdWUpIHtcbiAgQGlmIG1ldGEudHlwZS1vZigkdmFsdWUpID09ICdtYXAnIG9yIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMSB7XG4gICAgQHJldHVybiAkdmFsdWUgJHZhbHVlICR2YWx1ZSAkdmFsdWU7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSA0IHtcbiAgICBAcmV0dXJuICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDMge1xuICAgIEByZXR1cm4gbGlzdC5udGgoJHZhbHVlLCAxKSBsaXN0Lm50aCgkdmFsdWUsIDIpIGxpc3QubnRoKCR2YWx1ZSwgMylcbiAgICAgIGxpc3QubnRoKCR2YWx1ZSwgMik7XG4gIH0gQGVsc2UgaWYgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAyIHtcbiAgICBAcmV0dXJuIGxpc3QubnRoKCR2YWx1ZSwgMSkgbGlzdC5udGgoJHZhbHVlLCAyKSBsaXN0Lm50aCgkdmFsdWUsIDEpXG4gICAgICBsaXN0Lm50aCgkdmFsdWUsIDIpO1xuICB9XG5cbiAgQGVycm9yIFwiSW52YWxpZCBDU1MgcHJvcGVydHkgdmFsdWU6ICcjeyR2YWx1ZX0nIGlzIG1vcmUgdGhhbiA0IHZhbHVlc1wiO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4529:
/*!*******************************************!*\
  !*** ./src/app/workout-panel/worktask.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkTask: () => (/* binding */ WorkTask)
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

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
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

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map