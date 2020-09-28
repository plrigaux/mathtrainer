import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MathGenerator } from '../math-generator/mathGenerator'
import { MathProblem } from "../math-generator/mathProblem";
import { Config } from '../config';
import { ConfigService } from '../config.service'
import { Subscription } from 'rxjs';
import { ValidateAllService, MathQuestionValidation } from '../validate-all.service'
import { MathQuestionService, QuestionStatus, MathQuestionNotifier, TriggerType } from '../math-question.service';
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

  size = 3;
  mode = ColumnAnswerMode.NORMAL;

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
    /*
        this.myEventSubscriptions.push(
          this.validateAllService.getValidation().subscribe({
            next: (v) => {
              this.validateAnswer(false)
              let mqv: MathQuestionValidation = {
                id: this.questionId,
                correct: this.status === QuestionStatus.RIGHT
              }
              v.push(mqv)
              this.logger.debug('Delay mqi ' + this.questionId + " vl " + v.length)
            },
            error: err => console.error('Observer got an error: ' + err),
            complete: () => {
              this.logger.debug("This is the end");
            }
          })
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
      console.debug(`subscription.unsubscribe() ${subscription}`)
      subscription.unsubscribe()
    });

    //this.answers.removeAt(this.controlIndex);
  }

  onValueChange(userInput: string) {
    let infocus = true;
    this.userInput = userInput;
    let answer = this.problem.answer;
    console.debug(`User Input: ${this.userInput} Answer: ${answer}`);

    let userAnswer = parseInt(this.userInput);
    console.debug(`User Input: ${this.userInput} userAnswer: ${userAnswer}`)

    if (userAnswer === answer) {
      console.debug("R")
      this.status = QuestionStatus.RIGHT;
      this.informParent();
    }
    else if (isNaN(userAnswer)) {
      console.debug("Void")
      this.setVoid();
    }
    else if (infocus) {
      console.debug("Infocus")
      this.status = QuestionStatus.FOCUS;
      this.informParent();
    }
    else {
      console.debug("W")
      this.status = QuestionStatus.WRONG;
      //this.mathQuestionService.next(this.questionId.toString(), this.controlIndex, QuestionStatus.WRONG);
      this.informParent();
    }

    console.debug("Config " + this.config.nbNumbers);
  }

 

  preventUpDown(event: KeyboardEvent) {
    if (event.code === "ArrowUp" || event.code === "ArrowDown") {
      event.preventDefault();
    }
  }

  checkChange(event: Event) {

    console.debug(event)
    console.debug((event.target as HTMLInputElement).value)

    const inputValue: string = (event.target as HTMLInputElement).value
    console.debug(`Change! val="${inputValue}"`)
    if (inputValue == "") {
      this.setVoid();
    }
  }

  typeKey(event: KeyboardEvent) {
    console.debug("typeKey");
    console.debug(event);
  }
  /*
    check(event: KeyboardEvent) {
      console.debug("check");
      console.debug(event);
      this.validateAnswerRealTime(true, TriggerType.ON_TYPE);
    }
  */
  clearInput(): void {
    this.setVoid()
    this.focus()
  }

  setVoid() {
    this.status = QuestionStatus.EMPTY;
    this.userInput = "";
    this.informParent();
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
    this.userInput = "";
    this.status = QuestionStatus.EMPTY;
  }

  notRight(): boolean {
    return this.status !== QuestionStatus.RIGHT;
  }

  focus() {
    console.debug("focus " + this.name);
    console.debug(this.inputRef);
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
      trigger: TriggerType.ON_TYPE
    }

    this.mathQuestionService.next(notification);
  }

  invert(): void {
    this._problem = this._problem.getInvert();
    this.clear();
  }
}