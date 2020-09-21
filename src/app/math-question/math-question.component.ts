import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MathGenerator } from '../math-generator/mathGenerator'
import { MathProblem } from "../math-generator/mathProblem";
import { Config } from '../config';
import { ConfigService } from '../config.service'
import { ResetService } from '../reset.service'
import { Subscription } from 'rxjs';
import { ValidateAllService, MathQuestionValidation } from '../validate-all.service'
import { MathQuestionService, QuestionStatus, MathQuestionNotifier, TriggerType } from '../math-question.service';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';

const regexNumVal = /[0-9,-\.]/

@Component({
  selector: 'app-math-question',
  templateUrl: './math-question.component.html',
  styleUrls: ['./math-question.component.scss'],
  animations: [
    trigger('answerStatus', [
      state(QuestionStatus.RIGHT, style({ backgroundColor: 'limegreen' })),
      state(QuestionStatus.WRONG, style({ backgroundColor: 'red' })),
      state(QuestionStatus.EMPTY, style({ backgroundColor: 'white' })),
      state(QuestionStatus.FOCUS, style({ backgroundColor: 'lightyellow' })),
    ])
  ],
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
  @ViewChild("inputReference", { static: false }) private inputRef: ElementRef;

  constructor(private configService: ConfigService, private validateAllService: ValidateAllService,
    private resetService: ResetService,
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
    this.myEventSubscriptions.push(
      this.resetService.obs.subscribe({
        next: () => { this.reset() }
      })
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

    //this.answers.removeAt(this.controlIndex);
  }

  validateAnswerRealTime(infocus: boolean, trigger: TriggerType): void {
    if (this.config.realTimeValidation === true) {
      this.validateAnswer(infocus, trigger);
    }
  }

  private validateAnswer(infocus: boolean, trigger: TriggerType): void {
    let answer = this.problem.answer;
    console.debug(`User Input: ${this.userInput} Answer: ${answer}`);

    let userAnswer = parseInt(this.userInput);
    console.debug(`User Input: ${this.userInput} userAnswer: ${userAnswer}`)

    if (userAnswer === answer) {
      console.debug("R")
      this.status = QuestionStatus.RIGHT;
      this.informParent(trigger);
    }
    else if (isNaN(userAnswer)) {
      console.debug("Void")
      this.setVoid(trigger);
    }
    else if (infocus) {
      console.debug("Infocus")
      this.status = QuestionStatus.FOCUS;
      this.informParent(trigger);
    }
    else {
      console.debug("W")
      this.status = QuestionStatus.WRONG;
      //this.mathQuestionService.next(this.questionId.toString(), this.controlIndex, QuestionStatus.WRONG);
      this.informParent(trigger);
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
      this.setVoid(TriggerType.ON_BLUR);
    }
  }

  typeKey(event: KeyboardEvent) {
    console.debug("typeKey");
    console.debug(event);
  }

  check(event: KeyboardEvent) {
    console.debug("check");
    console.debug(event);
    this.validateAnswerRealTime(true, TriggerType.ON_TYPE);
  }

  clearInput(): void {
    this.setVoid(TriggerType.ON_BLUR)
    this.focus()
  }

  setVoid(trigger: TriggerType) {
    this.status = QuestionStatus.EMPTY;
    this.userInput = "";
    this.informParent(trigger);
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

  notRight(): boolean {
    return this.status !== QuestionStatus.RIGHT;
  }

  focus() {
    console.debug("focus " + this.name);
    console.debug(this.inputRef);
    this.inputRef.nativeElement.focus();
  }

  onBlur() {
    console.debug("blur");
    this.validateAnswerRealTime(false, TriggerType.ON_BLUR);
  }

  onFocus() {
    this.status = QuestionStatus.FOCUS;
  }

  notEmpty(): boolean {
    return /*this.status == QuestionStatus.WRONG || this.status == QuestionStatus.RIGHT || */ this.userInput.length != 0;
  }

  private informParent(trigger: TriggerType) {

    if (trigger === TriggerType.ON_BLUR && this.status === QuestionStatus.RIGHT) {
      //return;
    }

    let notification: MathQuestionNotifier = {
      status: this.status,
      id: this.questionId.toString(),
      index: this.controlIndex,
      trigger : trigger
    }

    this.mathQuestionService.next(notification);
  }

  validateAnswerEnter() {
    this.validateAnswerRealTime(false, TriggerType.ON_TYPE)
  }
}

