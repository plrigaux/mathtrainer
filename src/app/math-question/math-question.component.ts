import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, SimpleChanges, OnDestroy } from '@angular/core';
import { MathGenerator } from '../math-generator/mathGenerator'
import { MathProblem } from "../math-generator/mathProblem";
import { Config } from '../services/config';
import { ConfigService } from '../services/config.service'
import { Subscription } from 'rxjs';
import { MathQuestionService, QuestionStatus, MathQuestionNotifier } from '../services/math-question.service';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';
import { ColumnAnswerComponent, FocusType, ColumnAnswerMode } from '../column-answer/column-answer.component'
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { AnswerValueComponent } from '../answer-value/answer-value.component';
const regexNumVal = /[0-9,-\.]/

@Component({
  selector: 'app-math-question',
  templateUrl: './math-question.component.html',
  styleUrls: ['./math-question.component.scss']
})

export class MathQuestionComponent implements OnInit, OnDestroy {
  userInput: string
  status: QuestionStatus = QuestionStatus.EMPTY;
  stacked: boolean = true;
  private _problem: MathProblem;
  private myEventSubscriptions: Subscription[] = [];
  @Input() config: Config;
  @Input() questionId: number;
  @Input() needReset: boolean;
  //controlIndex: number;
  @ViewChild(ColumnAnswerComponent, { static: false }) private columnAnswerComponent: ColumnAnswerComponent;
  @ViewChild(AnswerValueComponent, { static: false }) private answer_value_component: AnswerValueComponent;
  currentFocus = FocusType.BLUR;
  size = 3;
  columnAnswerMode = ColumnAnswerMode;

  constructor(
    private mathQuestionService: MathQuestionService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    
      iconRegistry.addSvgIcon(
      'delete-cross',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/delete_icon.svg'));

  }

  ngOnInit(): void {
    this.debug("QID " + this.id);
  }

  get id(): string {
    return "mq" + this.questionId
  }

  get problem() {
    return this._problem;
  }

  ngOnDestroy(): void {
    this.myEventSubscriptions.forEach(subscription => {
      this.debug(`subscription.unsubscribe() ${subscription}`)
      subscription.unsubscribe()
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']) {
      this.stacked = this.config.orientation == "VERTICAL";
    }

    if (changes['needReset']) {
      if (this.needReset || changes['needReset'].isFirstChange()) {
        this.reset();
      }
    }
  }

  onValueChange: ValidateCB = (userInput: string, callerId: number): QuestionStatus => {
    this.log(`onValueChange userInput ${userInput} ${typeof userInput} callerId: ${callerId} config_rt: ${this.config.realTimeValidation}`)

    this.userInput = userInput;
    let status: QuestionStatus = null;
    if (this.config.realTimeValidation) {
      status = this.validateAnswer(true)
    } else {
      status = this.validateInput();
    }
    return status;
  }

  validateInput() {

    let empty = this.userInput == null || (typeof this.userInput == "string" && this.userInput.trim().length == 0);
    let status = this.status;

    if (this.currentFocus == FocusType.FOCUS) {
      status = QuestionStatus.FOCUS
    } else {
      status = empty ? QuestionStatus.EMPTY : QuestionStatus.ANSWERED
    }

    this.changeStatus(status, false, true)

    return this.status;
  }

  validateAnswer(informParent: boolean): QuestionStatus {
    let answer = this.problem.answer;
    this.log(`User Input: ${this.userInput} Answer: ${answer}`);

    let userAnswer = parseInt(this.userInput);

    this.log(`User Input: ${this.userInput} userAnswer: ${userAnswer}`)
    let status = this.status;
    if (userAnswer === answer) {
      this.debug("R")
      status = QuestionStatus.RIGHT;
    }
    else if (isNaN(userAnswer)) {
      this.debug("Void")
      status = this.currentFocus == FocusType.FOCUS ? QuestionStatus.FOCUS : QuestionStatus.EMPTY;
    }
    else if (this.currentFocus == FocusType.FOCUS) {
      let userAnswerLength = userAnswer.toString().length; //this to ensure raw string length (it trims)
      let answerLength = answer.toString().length
      if (userAnswerLength >= answerLength) {
        this.debug("W Length")
        status = QuestionStatus.WRONG;
      } else {
        this.debug("Infocus")
        status = QuestionStatus.FOCUS;
      }
    }
    else {
      this.debug("W")
      status = QuestionStatus.WRONG;
    }

    this.changeStatus(status, false, informParent)

    return this.status
  }

  preventUpDown(event: KeyboardEvent) {
    if (event.code === "ArrowUp" || event.code === "ArrowDown") {
      event.preventDefault();
    }
  }

  typeKey(event: KeyboardEvent) {
    this.debug("typeKey");
    this.debug(event);
  }

  reset() {
    this._problem = MathGenerator.generateProblemNext(this.config, this.questionId);
    this.size = Math.max(this.problem.displaySize + 1, 3);
    this.debug("PROBLEM !!!");
    this.debug(this._problem);
    this.debug(this.config);
    this.changeStatus(QuestionStatus.EMPTY, false, false)
    this.userInput = null;
  }

  clear() {
    this.currentFocus = FocusType.BLUR;
    this.onValueChange(null, 0);
  }

  notRight(): boolean {
    return this.status !== QuestionStatus.RIGHT;
  }

  onFocusChange(newFocus: FocusType) {
    let focucusingOut = this.currentFocus == FocusType.FOCUS && newFocus == FocusType.BLUR;
    this.log(`onFocusChange ${newFocus} currentFocus ${this.currentFocus} focusingOut: ${focucusingOut} UserIinput: "${this.userInput}"`)

    this.currentFocus = newFocus;

    setTimeout(() => {
      if (newFocus === FocusType.FOCUS) {
        switch (this.status) {
          case QuestionStatus.WRONG:
          case QuestionStatus.EMPTY:
          case QuestionStatus.ANSWERED:
            this.changeStatus(QuestionStatus.FOCUS, false, true)
            break;
        }
      }
    });

    if (focucusingOut) {
      this.onValueChange(this.userInput, 0)
    }
  }

  on_status_change(new_status: QuestionStatus) {
    let forceExitFocus = true

    switch (new_status) {
      case QuestionStatus.EMPTY:
        forceExitFocus = false;
        break;

      case QuestionStatus.WRONG:
        forceExitFocus = false;
        break;

      case QuestionStatus.FOCUS:
        forceExitFocus = false;
        break;
    }

    this.debug(`on_status_change new: ${new_status} old: ${this.status}`)

    this.changeStatus(new_status, forceExitFocus, true)
  }

  private changeStatus(newStatus: QuestionStatus, forceExitFocus: boolean, isParentCanValidate: boolean) {
    if (this.status !== newStatus) {
      this.status = newStatus
      this.informParent(forceExitFocus, isParentCanValidate)
    }
  }

  existFocus(event: any) {
    console.warn(this.log("exitWidget"))
    this.informParent(true, true);
  }

  focus() {
    this.debug(`focus  ${this.id} `);
    this.debug(this.columnAnswerComponent);
    //this.inFocus = true;
    setTimeout(() => {
      if (this.columnAnswerComponent) {
        this.columnAnswerComponent.focus();
      } else if (this.answer_value_component) {
        this.answer_value_component.focus();
      }
    })
  }

  notEmpty(): boolean {
    return this.userInput.length != 0;
  }

  private informParent(forceExit: boolean, isParentCanValidate: boolean) {
    let notification: MathQuestionNotifier = {
      status: this.status,
      id: this.id,
      index: this.questionId,
      forceExitFocus: forceExit,
      isParentCanValidate: isParentCanValidate
    }

    this.mathQuestionService.next(notification);
  }

  invert(): void {
    this._problem = this._problem.getInvert();
    this.clear();
  }

  private log(message: any): any {
    console.log(this.format_trace(message))
  }

  private debug(message: any): any {
    console.debug(this.format_trace(message))
  }

  private format_trace(message: any): any {
    let type = typeof message;
    if (type == 'string' || type == 'number') {
      return `MQ${this.questionId} - ${message}`
    } else {
      return message
    }
  }
}

export type ValidateCB = (newValue: string, index: number) => QuestionStatus;