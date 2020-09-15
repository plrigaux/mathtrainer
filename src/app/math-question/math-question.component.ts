import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MathGenerator } from '../math-generator/mathGenerator'
import { MathProblem } from "../math-generator/mathProblem";
import { Config } from '../config';
import { ConfigService } from '../config.service'
import { ResetService } from '../reset.service'
import { Subscription } from 'rxjs';
import { ValidateAllService, MathQuestionValidation } from '../validate-all.service'
import { NGXLogger } from 'ngx-logger';
import { MathQuestionService, QuestionStatus, MathQuestionNotifier } from '../math-question.service';
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
    private logger: NGXLogger,
    private resetService: ResetService, 
    private mathQuestionService: MathQuestionService) {
    this.status = QuestionStatus.EMPTY
    this.stacked = true;
  }

  ngOnInit(): void {
    console.log("QID " + this.questionId);
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
      console.log(`subscription.unsubscribe() ${subscription}`)
      subscription.unsubscribe()
    });

    //this.answers.removeAt(this.controlIndex);
  }

  validateAnswerRealTime(infocus: boolean): void {
    if (this.config.realTimeValidation === true) {
      this.validateAnswer(infocus);
    }
  }

  private validateAnswer(infocus: boolean): void {
    let answer = this.problem.answer;
    this.logger.debug(`User Input: ${this.userInput} Answer: ${answer}`);

    let userAnswer = parseInt(this.userInput);
    console.log(`User Input: ${this.userInput} userAnswer: ${userAnswer}`)

    if (userAnswer === answer) {
      console.log("R")
      this.status = QuestionStatus.RIGHT;
      this.informParent();
    }
    else if (isNaN(userAnswer)) {
      console.log("Void")
      this.setVoid();
    }
    else if (infocus) {
      console.log("Infocus")
      this.status = QuestionStatus.EMPTY;
      this.informParent();
    }
    else {
      console.log("W")
      this.status = QuestionStatus.WRONG;
      //this.mathQuestionService.next(this.questionId.toString(), this.controlIndex, QuestionStatus.WRONG);
      this.informParent();
    }

    this.logger.debug("Config " + this.config.nbNumbers);
  }

  preventUpDown(event: KeyboardEvent) {
    if (event.keyCode === 38 || event.keyCode === 40) {
      event.preventDefault();
    }
  }

  checkChange(event: Event) {

    this.logger.debug(event)
    this.logger.debug((event.target as HTMLInputElement).value)

    const inputValue: string = (event.target as HTMLInputElement).value
    this.logger.debug(`Change! val="${inputValue}"`)
    if (inputValue == "") {
      this.setVoid();
    }
  }

  typeKey(event: KeyboardEvent) {
    console.log("typeKey");
    console.log(event);
  }

  check(event: KeyboardEvent) {
    console.log("check");
    console.log(event);
    this.validateAnswerRealTime(true);
  }

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
    console.log("PROBLEM !!!");
    console.log(this._problem);
    console.log(this.config);
    this.status = QuestionStatus.EMPTY;
    this.userInput = "";
    //this.logger.debug(`FA ${this.answers.length}`);
  }

  notRight(): boolean {
    return this.status !== QuestionStatus.RIGHT;
  }

  focus() {
    console.log("focus " + this.name);
    console.log(this.inputRef);
    this.inputRef.nativeElement.focus();
  }

  onBlur() {
    console.log("blur");
    this.validateAnswerRealTime(false);
  }
 
  onFocus() {
    this.status = QuestionStatus.FOCUS;
  }

  notEmpty() : boolean {
    return this.status == QuestionStatus.WRONG || this.status == QuestionStatus.RIGHT;
  }

  private informParent() {
    let notification : MathQuestionNotifier = {
      status : this.status,
      id: this.questionId.toString(),
      index : this.controlIndex
    }
    //console.log("sent notification -->" + notification)
    //this.messageEvent.emit(notification);
    this.mathQuestionService.next(notification);
  }
}
