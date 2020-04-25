import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { MathProblem } from '../mathGenerator'
import { Config } from '../config';
import { ConfigService } from '../config.service'
import { Subscription } from 'rxjs';
import { ValidateAllService } from '../validate-all.service'

const regexNumVal = /^[0-9,-\.]$/g

@Component({
  selector: 'app-math-question',
  templateUrl: './math-question.component.html',
  styleUrls: ['./math-question.component.scss']
})

export class MathQuestionComponent implements OnInit {
  userInput: number;
  right: boolean;
  wrong: boolean;
  stacked: boolean;
  problem: MathProblem;
  myEventSubscriptions: Subscription[] = [];

  constructor(private configService: ConfigService, private validateAllService: ValidateAllService) {
    this.right = false;
    this.wrong = false;
    this.stacked = true;
  }

  @Input() questionId: number;
  config: Config;

  ngOnInit(): void {
    this.myEventSubscriptions.push(this.configService.configSource.subscribe(
      cf => {
        this.config = cf;
        this.problem = MathProblem.generateProblem(this.config);
        this.right = false;
        this.wrong = false;
        this.userInput = null;
        this.stacked = cf.stacked;
      }
    ));

    this.myEventSubscriptions.push(this.validateAllService.getValidation().subscribe({
      next: (v) => v.push('Math question ID:' + this.questionId)
    }));
  }

  ngOnDestroy(): void {
    this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

  validateAnswer(): void {
    let answer = this.problem.getAnswer();
    console.log(`User Input: ${this.userInput} Answer: ${answer}`);

    if (this.userInput == answer) {
      this.right = true;
      this.wrong = false;
    }
    else if (this.userInput == null) {
      this.right = false;
      this.wrong = false;
    }
    else {
      this.right = false;
      this.wrong = true;
    }

    console.log("Config " + this.config.nbNumbers);
  }

  isNumberKey(evt: KeyboardEvent): boolean {
    //console.log(evt.key)
    //return regexNumVal.test(evt.key);
    return true;
  }

}
