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
    console.debug("QID " + this.questionId);
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
      console.debug(`subscription.unsubscribe() ${subscription}`)
      subscription.unsubscribe()
    });
  }

  onValueChange(userInput: string) {
    console.log(`onValueChange userInput ${userInput}`)
    this.userInput = userInput;

    let answer = this.problem.answer;
    console.debug(`User Input: ${this.userInput} Answer: ${answer}`);

    let userAnswer = parseInt(this.userInput);
    console.debug(`User Input: ${this.userInput} userAnswer: ${userAnswer}`)

    if (userAnswer === answer) {
      console.debug("R")
      this.status = QuestionStatus.RIGHT;
    }
    else if (this.inFocus) {
      console.debug("Infocus")
      this.status = QuestionStatus.FOCUS;
    }
    else if (isNaN(userAnswer)) {
      console.debug("Void")
      this.status = QuestionStatus.EMPTY;
    }
    else {
      console.debug("W")
      this.status = QuestionStatus.WRONG;
    }
    this.informParent();
    console.debug("Config " + this.config.nbNumbers);
  }

  preventUpDown(event: KeyboardEvent) {
    if (event.code === "ArrowUp" || event.code === "ArrowDown") {
      event.preventDefault();
    }
  }

  typeKey(event: KeyboardEvent) {
    console.debug("typeKey");
    console.debug(event);
  }

  reset() {
    this._problem = MathGenerator.generateProblemNext(this.config, this.questionId);
    console.debug("PROBLEM !!!");
    console.debug(this._problem);
    console.debug(this.config);
    this.status = QuestionStatus.EMPTY;
    this.userInput = "";
    //this.logger.debug(`FA ${this.answers.length}`);
  }

  clear() {
    this.inFocus = false;
    this.onValueChange(null);
  }

  notRight(): boolean {
    return this.status !== QuestionStatus.RIGHT;
  }

  onFocusChange(isFocus : boolean) {
    console.log(`On focus Change ${isFocus} ${this.questionId} ui: "${this.userInput}"`)
    if (isFocus) {
      this.inFocus = true;
      setTimeout(() => {this.status = QuestionStatus.FOCUS;})
      
    } else {
      this.inFocus = false;
      this.onValueChange(this.userInput)
    }
  }

  focus() {
    console.debug(`focus  ${this.name} `);
    console.debug(this.inputRef);
    this.inFocus = true;
    setTimeout(() => {
      this.inputRef.focus();
    })
  }

  notEmpty(): boolean {
    return /*this.status == QuestionStatus.WRONG || this.status == QuestionStatus.RIGHT || */ this.userInput.length != 0;
  }

  private informParent() {
    /*
        if (trigger === TriggerType.ON_BLUR && this.status === QuestionStatus.RIGHT) {
          //return;
        }
    */
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
}