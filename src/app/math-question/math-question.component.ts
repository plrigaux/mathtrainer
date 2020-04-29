import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MathProblem } from '../mathGenerator'
import { Config } from '../config';
import { ConfigService } from '../config.service'
import { Subscription } from 'rxjs';
import { ValidateAllService, MathQuestionValidation } from '../validate-all.service'
import { NGXLogger } from 'ngx-logger';

const regexNumVal = /[0-9,-\.]/

@Component({
  selector: 'app-math-question',
  templateUrl: './math-question.component.html',
  styleUrls: ['./math-question.component.scss']
})

export class MathQuestionComponent implements OnInit {
  value: number;
  right: boolean;
  wrong: boolean;
  stacked: boolean;
  problem: MathProblem;
  myEventSubscriptions: Subscription[] = [];
  config: Config;
  @Input() readonly questionId: number;

  constructor(private configService: ConfigService, private validateAllService: ValidateAllService,
    private logger: NGXLogger) {
    this.right = false;
    this.wrong = false;
    this.stacked = true;
  }

  ngOnInit(): void {
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
  }

  get name() : string {
    return "mqid_" + this.questionId
  }

  ngOnDestroy(): void {
    this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());
  }


  validateAnswerRealTime(): void {
    if (this.config.realTimeValidation === true) {
      this.validateAnswer();
    }
  }

  validateAnswer(): void {
    let answer = this.problem.getAnswer();
    this.logger.debug(`User Input: ${this.value} Answer: ${answer}`);

    if (this.value == answer) {
      this.right = true;
      this.wrong = false;
    }
    else if (this.value == null) {
      this.right = false;
      this.wrong = false;
    }
    else {
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
    this.logger.debug("Change!")
    this.logger.debug(event)
    this.logger.debug((event.target as HTMLInputElement).value)

    const inputValue: string = (event.target as HTMLInputElement).value

    if (inputValue == "") {
      this.clearFormat();
    }
  }

  clearFormat(): void {
    this.right = false;
    this.wrong = false;
  }

  reset() {
    this.problem = MathProblem.generateProblem(this.config);
    this.right = false;
    this.wrong = false;
    this.value = null;
  }
}
