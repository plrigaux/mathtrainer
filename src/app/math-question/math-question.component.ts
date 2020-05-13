import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MathProblem } from '../mathGenerator'
import { Config } from '../config';
import { ConfigService } from '../config.service'
import { ResetService } from '../reset.service'
import { Subscription } from 'rxjs';
import { ValidateAllService, MathQuestionValidation } from '../validate-all.service'
import { NGXLogger } from 'ngx-logger';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

const regexNumVal = /[0-9,-\.]/

@Component({
  selector: 'app-math-question',
  templateUrl: './math-question.component.html',
  styleUrls: ['./math-question.component.scss']
})

export class MathQuestionComponent implements OnInit {
  //value: number;
  right: boolean;
  wrong: boolean;
  stacked: boolean;
  problem: MathProblem;
  myEventSubscriptions: Subscription[] = [];
  config: Config;
  answer: FormControl;
  @Input() readonly questionId: number;
  @Input() readonly panelForm: FormGroup;
  controlIndex: number;

  constructor(private configService: ConfigService, private validateAllService: ValidateAllService,
    private logger: NGXLogger,
    private resetService : ResetService) {
    this.right = false;
    this.wrong = false;
    this.stacked = true;

    

  }

  ngOnInit(): void {
    console.log("QID " + this.questionId);

    if (this.questionId > this.answers.length ) {
      this.answer = new FormControl('',Validators.required);
      this.answers.push(this.answer);
      this.controlIndex = this.answers.length - 1;
    } else {
      this.controlIndex = this.questionId - 1;
      this.answer = this.answers.at(this.controlIndex) as FormControl;
    }
    
    //console.log(this.answers)
    //console.log(`Control index= ${this.controlIndex}`)
    this.myEventSubscriptions.push(this.configService.configSource.subscribe(
      cf => {
        this.config = cf;
        this.stacked = cf.stacked;
        this.reset();
      }
    ));

    this.myEventSubscriptions.push(this.validateAllService.getValidation().subscribe({
      next: (v) => {
        this.validateAnswer()
        let mqv: MathQuestionValidation = {
          id: this.questionId,
          correct: this.right
        }
        v.push(mqv)
        this.logger.debug('Delay mqi ' + this.questionId + " vl " + v.length)
      },
      error: err => console.error('Observer got an error: ' + err),
      complete: () => {
        this.logger.debug("This is the end");
      }
    }));

    this.myEventSubscriptions.push(this.resetService.obs.subscribe({
      next : () => {this.reset()}
    }));
    
  }

  get name(): string {
    return "mqid_" + this.questionId
  }

  ngOnDestroy(): void {
    this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());

    //this.answers.removeAt(this.controlIndex);
  }


  validateAnswerRealTime(): void {
    if (this.config.realTimeValidation === true) {
      this.validateAnswer();
    }
  }

  validateAnswer(): void {
    let answer = this.problem.getAnswer();
    this.logger.debug(`User Input: ${this.answer.value} Answer: ${answer}`);

    if (this.answer.value == answer) {
      console.log("R")
      this.right = true;
      this.wrong = false;
    }
    //WARN works only if number, Need to consider string cases
    else if (this.answer.value == null) {
      console.log("void")
      this.clearInput();
    }
    else {
      console.log("W")
      this.right = false;
      this.wrong = true;
    }

    this.logger.debug("Config " + this.config.nbNumbers);
  }

  isNumberKey(evt: KeyboardEvent): boolean {

    const key = evt.key
    const test = regexNumVal.test(evt.key);
    this.logger.trace(`Key ${key} test ${test}`)

    return test;
    //return true;
  }

  checkChange(event: Event) {

    this.logger.debug(event)
    this.logger.debug((event.target as HTMLInputElement).value)

    const inputValue: string = (event.target as HTMLInputElement).value
    this.logger.debug(`Change! val="${inputValue}"`)
    if (inputValue == "") {
      this.clearInput();
    }
  }

  clearInput(): void {
    this.right = false;
    this.wrong = false;
    this.answer.setValue(null);
  }

  reset() {
    this.problem = MathProblem.generateProblem(this.config);
    this.right = false;
    this.wrong = false;
    this.answer.setValue(null);
    this.logger.debug(`FA ${this.answers.length}`);
  }

  get answers() {
    return this.panelForm.get('answers') as FormArray;
  }

  answerControl() {
    return this.answers.at(this.controlIndex) as FormControl;
  }
}
