import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { MathGenerator } from '../math-generator/mathGenerator'
import { MathProblem } from "../math-generator/mathProblem";
import { Config } from '../services/config';
import { ConfigService } from '../services/config.service'
import { Subscription } from 'rxjs';
import { ValidateAllService, MathQuestionValidation } from '../services/validate-all.service'
import { MathQuestionService, QuestionStatus, MathQuestionNotifier } from '../services/math-question.service';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';
import { ColumnAnswerComponent, ValidateCB } from '../column-answer/column-answer.component'

const regexNumVal = /[0-9,-\.]/

@Component({
  selector: 'app-math-question',
  templateUrl: './math-question.component.html',
  styleUrls: ['./math-question.component.scss']
})

export class MathQuestionComponent implements OnInit {
  userInput: string
  status: QuestionStatus;
  stacked: boolean;
  private _problem: MathProblem;
  private myEventSubscriptions: Subscription[] = [];
  @Input() config: Config;
  @Input() readonly questionId: number;
  @Input() needReset: boolean;
  controlIndex: number;
  @ViewChild(ColumnAnswerComponent, { static: false }) private columnAnswerComponent: ColumnAnswerComponent;
  inFocus = false;
  size = 3;

  constructor(
    private mathQuestionService: MathQuestionService) {
    this.status = QuestionStatus.EMPTY
    this.stacked = true;
  }

  ngOnInit(): void {
    console.debug(this.log("QID " + this.questionId));
    this.controlIndex = this.questionId - 1;
    /*
        this.myEventSubscriptions.push(
          this.configService.subscribe(
            configServiceInfo => {
              this.config = configServiceInfo.config;
              this.stacked = this.config.orientation == "VERTICAL";
              if (configServiceInfo.needReset) {
                this.reset();
              }
            }
          )
        );
        */
  }

  get name(): string {
    return "mqid_" + this.questionId
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

onValueChange : ValidateCB = (userInput: string, callerId: string): QuestionStatus => {
    console.debug(this.log(`onValueChange userInput ${userInput} callerId ${callerId}`))
    this.userInput = userInput;

    let answer = this.problem.answer;
    console.debug(this.log(`User Input: ${this.userInput} Answer: ${answer}`));

    let userAnswer = parseInt(this.userInput);

    console.debug(this.log(`User Input: ${this.userInput} userAnswer: ${userAnswer}`))

    let oldStatus = this.status;
    if (userAnswer === answer) {
      console.debug(this.log("R"))
      this.status = QuestionStatus.RIGHT;
    }
    else if (this.inFocus) {
      let userAnswerLength = userAnswer.toString().length; //this to ensure raw string length (it trims)
      let answerLength = answer.toString().length
      if (userAnswerLength >= answerLength) {
        console.debug(this.log("W Length"))
        this.status = QuestionStatus.WRONG;
      } else {
        console.debug(this.log("Infocus"))
        this.status = QuestionStatus.FOCUS;
      }
    }
    else if (isNaN(userAnswer)) {
      console.debug(this.log("Void"))
      this.status = QuestionStatus.EMPTY;
    }
    else {
      console.debug(this.log("W"))
      this.status = QuestionStatus.WRONG;
    }
    this.informParent();

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
    this.status = QuestionStatus.EMPTY;
    this.userInput = null;
  }

  clear() {
    this.inFocus = false;
    this.onValueChange(null, "THIS");
  }

  notRight(): boolean {
    return this.status !== QuestionStatus.RIGHT;
  }

  onFocusChange(isFocus: boolean) {
    console.debug(this.log(`On focus Change ${isFocus ? "FOCUS" : "BLUR"} UI: "${this.userInput}"`))
    let currentFocus = this.inFocus;
    this.inFocus = isFocus;
    if (isFocus) {

      setTimeout(() => {
        if (this.status !== QuestionStatus.WRONG) {
          this.status = QuestionStatus.FOCUS;
        }
      })

    } else if (currentFocus) {
      this.onValueChange(this.userInput, "THIS")
    }
  }

  focus() {
    console.debug(console.debug(this.log(`focus  ${this.name} `)));
    console.debug(console.debug(this.log(this.columnAnswerComponent)));
    this.inFocus = true;
    setTimeout(() => {
      this.columnAnswerComponent.focus();
    })
  }

  notEmpty(): boolean {
    return this.userInput.length != 0;
  }

  private informParent() {
    let notification: MathQuestionNotifier = {
      status: this.status,
      id: this.questionId.toString(),
      index: this.controlIndex,
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