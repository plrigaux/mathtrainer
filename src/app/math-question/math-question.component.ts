import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { MathGenerator } from '../math-generator/mathGenerator'
import { MathProblem } from "../math-generator/mathProblem";
import { Config } from '../services/config';
import { ConfigService } from '../services/config.service'
import { Subscription } from 'rxjs';
import { MathQuestionService, QuestionStatus, MathQuestionNotifier } from '../services/math-question.service';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';
import { ColumnAnswerComponent, ValidateCB, FocusType, ColumnAnswerMode } from '../column-answer/column-answer.component'

const regexNumVal = /[0-9,-\.]/

@Component({
  selector: 'app-math-question',
  templateUrl: './math-question.component.html',
  styleUrls: ['./math-question.component.scss']
})

export class MathQuestionComponent implements OnInit {
  userInput: string
  status: QuestionStatus = QuestionStatus.EMPTY;
  stacked: boolean = true;
  private _problem: MathProblem;
  private myEventSubscriptions: Subscription[] = [];
  @Input() config: Config;
  @Input() readonly questionId: number;
  @Input() needReset: boolean;
  //controlIndex: number;
  @ViewChild(ColumnAnswerComponent, { static: false }) private columnAnswerComponent: ColumnAnswerComponent;
  currentFocus = FocusType.BLUR;
  size = 3;
  columnAnswerMode = ColumnAnswerMode;

  constructor(
    private mathQuestionService: MathQuestionService) {

  }

  ngOnInit(): void {
    console.debug(this.log("QID " + this.id));
  }

  get id(): string {
    return "mq" + this.questionId
  }

  get problem() {
    return this._problem;
  }

  ngOnDestroy(): void {
    this.myEventSubscriptions.forEach(subscription => {
      console.debug(this.log(`subscription.unsubscribe() ${subscription}`))
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

  onValueChange: ValidateCB = (userInput: string, callerId: string): QuestionStatus => {
    console.debug(this.log(`onValueChange userInput ${userInput} ${typeof userInput} callerId ${callerId}`))

    this.userInput = userInput;
    let status : QuestionStatus = null;
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
    console.debug(this.log(`User Input: ${this.userInput} Answer: ${answer}`));

    let userAnswer = parseInt(this.userInput);

    console.debug(this.log(`User Input: ${this.userInput} userAnswer: ${userAnswer}`))
    let status = this.status;
    if (userAnswer === answer) {
      console.debug(this.log("R"))
      status = QuestionStatus.RIGHT;
    }
    else if (isNaN(userAnswer)) {
      console.debug(this.log("Void"))
      status = this.currentFocus == FocusType.FOCUS ? QuestionStatus.FOCUS : QuestionStatus.EMPTY;
    }
    else if (this.currentFocus == FocusType.FOCUS) {
      let userAnswerLength = userAnswer.toString().length; //this to ensure raw string length (it trims)
      let answerLength = answer.toString().length
      if (userAnswerLength >= answerLength) {
        console.debug(this.log("W Length"))
        status = QuestionStatus.WRONG;
      } else {
        console.debug(this.log("Infocus"))
        status = QuestionStatus.FOCUS;
      }
    }
    else {
      console.debug(this.log("W"))
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
    console.debug(this.log("typeKey"));
    console.debug(this.log(event));
  }

  reset() {
    this._problem = MathGenerator.generateProblemNext(this.config, this.questionId);
    this.size = Math.max(this.problem.displaySize + 1, 3);
    console.debug(this.log("PROBLEM !!!"));
    console.debug(this.log(this._problem));
    console.debug(this.log(this.config));
    this.changeStatus(QuestionStatus.EMPTY, false, false)
    this.userInput = null;
  }

  clear() {
    this.currentFocus = FocusType.BLUR;
    this.onValueChange(null, "THIS");
  }

  notRight(): boolean {
    return this.status !== QuestionStatus.RIGHT;
  }

  onFocusChange(newFocus: FocusType) {
    let focucusingOut = this.currentFocus == FocusType.FOCUS && newFocus == FocusType.BLUR;
    console.debug(this.log(`onFocusChange ${newFocus} currentFocus ${this.currentFocus} focusingOut: ${focucusingOut} UserIinput: "${this.userInput}"`))

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
      this.onValueChange(this.userInput, "THIS")
    }
  }

  private changeStatus(newStatus: QuestionStatus, forceExitFocus: boolean, isParentCanValidate: boolean) {
    if (this.status !== newStatus) {
      this.status = newStatus
      this.informParent(forceExitFocus, isParentCanValidate)
    }
  }

  existFocus() {
    console.warn(this.log("exitWidget"))
    this.informParent(true, true);
  }

  focus() {
    console.debug(this.log(`focus  ${this.id} `));
    console.debug(this.log(this.columnAnswerComponent));
    //this.inFocus = true;
    setTimeout(() => {
      this.columnAnswerComponent.focus();
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
    let type = typeof message;
    if (type == 'string' || type == 'number') {
      return `MQ${this.questionId} - ${message}`
    } else {
      return message
    }
  }
}