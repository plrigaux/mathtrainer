import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MathGenerator } from '../math-generator/mathGenerator'
import { MathProblem } from "../math-generator/mathProblem";
import { Config } from '../config';
import { ConfigService } from '../config.service'
import { Subscription } from 'rxjs';
import { ValidateAllService, MathQuestionValidation } from '../validate-all.service'
import { MathQuestionService, QuestionStatus, MathQuestionNotifier } from '../math-question.service';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';
import { ColumnAnswerComponent, ColumnAnswerMode } from '../column-answer/column-answer.component'

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
  private config: Config;
  @Input() readonly questionId: number;
  controlIndex: number;
  @ViewChild(ColumnAnswerComponent, { static: false }) private inputRef: ColumnAnswerComponent;
  inFocus = false;
  size = 3;
  mode = ColumnAnswerMode.COLUMNS;

  constructor(private configService: ConfigService, private validateAllService: ValidateAllService,
    private mathQuestionService: MathQuestionService) {
    this.status = QuestionStatus.EMPTY
    this.stacked = true;
  }

  ngOnInit(): void {
    console.debug(this.log("QID " + this.questionId));
    this.controlIndex = this.questionId - 1;

    this.myEventSubscriptions.push(
      this.configService.subscribe(
        cfsi => {
          this.config = cfsi.config;
          this.stacked = this.config.orientation == "VERTICAL";
          if (cfsi.needReset) {
            this.reset();
          }
        }
      )
    );
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

  onValueChange(userInput: string) {
    console.debug(this.log(`onValueChange userInput ${userInput}`))
    this.userInput = userInput;

    let answer = this.problem.answer;
    console.debug(this.log(`User Input: ${this.userInput} Answer: ${answer}`));

    let userAnswer = parseInt(this.userInput);

    console.debug(this.log(`User Input: ${this.userInput} userAnswer: ${userAnswer}`))

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
    console.debug(this.log("Config " + this.config.nbNumbers));
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
    console.debug(this.log("PROBLEM !!!"));
    console.debug(this.log(this._problem));
    console.debug(this.log(this.config));
    this.status = QuestionStatus.EMPTY;
    this.userInput = null;
  }

  clear() {
    this.inFocus = false;
    this.onValueChange(null);
  }

  notRight(): boolean {
    return this.status !== QuestionStatus.RIGHT;
  }

  onFocusChange(isFocus: boolean) {
    console.debug(this.log(`On focus Change ${isFocus ? "FOCUS" : "BLUR"} UI: "${this.userInput}"`))
    let currentFocus = this.inFocus;
    this.inFocus = isFocus;
    if (isFocus) {
      if (!currentFocus) {
        setTimeout(() => {
          if (this.status !== QuestionStatus.WRONG) {
            this.status = QuestionStatus.FOCUS;
          }
        })
      }
    } else if (currentFocus) {
      this.onValueChange(this.userInput)
    }
  }

  focus() {
    console.debug(console.debug(this.log(`focus  ${this.name} `)));
    console.debug(console.debug(this.log(this.inputRef)));
    this.inFocus = true;
    setTimeout(() => {
      this.inputRef.focus();
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