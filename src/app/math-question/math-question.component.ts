import { Component, OnInit, Input, ViewChild, ElementRef, Directive } from '@angular/core';
import { MathGenerator } from '../math-generator/mathGenerator'
import { MathProblem } from "../math-generator/mathProblem";
import { Config } from '../config';
import { ConfigService } from '../config.service'
import { ResetService } from '../reset.service'
import { Subscription } from 'rxjs';
import { ValidateAllService, MathQuestionValidation } from '../validate-all.service'
import { NGXLogger } from 'ngx-logger';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MathQuestionService, QuestionStatus } from '../math-question.service';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';

const regexNumVal = /[0-9,-\.]/

@Component({
  selector: 'app-math-question',

  animations: [
    trigger('answerStatus', [
      state(QuestionStatus.RIGHT, style({ backgroundColor: 'limegreen' })),
      state(QuestionStatus.WRONG, style({ backgroundColor: 'red' })),
      state(QuestionStatus.EMPTY, style({ backgroundColor: 'white' })),

      transition('* => ' + QuestionStatus.RIGHT + "", [
        animate('1s', keyframes([
          style({ backgroundColor: "white", color: "red" }),
          style({ backgroundColor: "red", color: "blue" }),
          style({ backgroundColor: "limegreen", color: "orange" })
        ]))

        /*animate('2s', keyframes([
          style({ backgroundColor: 'blue', offset: 0}),
          style({ backgroundColor: 'red', offset: 0.8}),
          style({ backgroundColor: 'orange', offset: 1.0})
        ])),*/
      ]),
      transition('* => ' + QuestionStatus.WRONG, [
        animate('0.5s')/*
        animate('2s', keyframes([
          style({ backgroundColor: 'orange', offset: 0}),
          style({ backgroundColor: 'red', offset: 0.2}),
          style({ backgroundColor: 'blue', offset: 1.0})
        ]))*/
      ])
    ])
  ],
  templateUrl: './math-question.component.html',
  styleUrls: ['./math-question.component.scss'],
})
export class MathQuestionComponent implements OnInit {

  //value: number;
  //right: boolean;
  //wrong: boolean;
  status: QuestionStatus;
  stacked: boolean;
  private _problem: MathProblem;
  private myEventSubscriptions: Subscription[] = [];
  private config: Config;
  answerFC: FormControl;
  @Input() readonly questionId: number;
  @Input() readonly panelForm: FormGroup;
  controlIndex: number;
  @ViewChild("inputReference", { static: false }) private inputRef: ElementRef;

  constructor(private configService: ConfigService, private validateAllService: ValidateAllService,
    private logger: NGXLogger,
    private resetService: ResetService, private mathQuestionService: MathQuestionService) {
    this.status = QuestionStatus.EMPTY
    this.stacked = true;
  }

  ngOnInit(): void {
    console.log("QID " + this.questionId);

    if (this.questionId > this.answers.length) {
      this.answerFC = new FormControl('', Validators.required);
      this.answers.push(this.answerFC);
      this.controlIndex = this.answers.length - 1;
    } else {
      this.controlIndex = this.questionId - 1;
      this.answerFC = this.answers.at(this.controlIndex) as FormControl;
    }

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

  validateAnswer(infocus: boolean): void {
    let answer = this.problem.answer;
    this.logger.debug(`User Input: ${this.answerFC.value} Answer: ${answer}`);

    if (this.answerFC.value === answer) {
      console.log("R")
      this.status = QuestionStatus.RIGHT;
      this.mathQuestionService.next(this.questionId.toString(), this.controlIndex, QuestionStatus.RIGHT);
    }
    //WARN works only if number, Need to consider string cases
    else if (this.answerFC.value == null) {
      console.log("void")
      this.setVoid();
    }
    else if (infocus) {
      console.log("Infocus")
      //this.right = false;
      //this.wrong = false;
      this.status = QuestionStatus.EMPTY;
      this.mathQuestionService.next(this.questionId.toString(), this.controlIndex, QuestionStatus.EMPTY);
    }
    else {
      console.log("W")
      this.status = QuestionStatus.WRONG;
      this.mathQuestionService.next(this.questionId.toString(), this.controlIndex, QuestionStatus.WRONG);
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
    this.answerFC.setValue(null);
    this.mathQuestionService.next(this.questionId.toString(), this.controlIndex, QuestionStatus.EMPTY);
  }

  reset() {
    this._problem = MathGenerator.generateProblem(this.config);
    console.log("PROBLEM !!!");
    console.log(this._problem);
    console.log(this.config);
    this.status = QuestionStatus.EMPTY;
    this.answerFC.setValue(null);
    this.logger.debug(`FA ${this.answers.length}`);
  }

  get answers() {
    return this.panelForm.get('answers') as FormArray;
  }

  answerControl() {
    return this.answers.at(this.controlIndex) as FormControl;
  }

  notRight(): boolean {
    return this.status !== QuestionStatus.RIGHT;
  }

  focus() {
    console.log("focus " + this.name);
    console.log(this.inputRef);
    this.inputRef.nativeElement.focus();
  }
}
