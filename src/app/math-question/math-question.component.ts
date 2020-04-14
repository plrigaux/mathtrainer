import { Component, OnInit, Input } from '@angular/core';
import { MathProblem } from '../mathGenerator.js'

@Component({
  selector: 'app-math-question',
  templateUrl: './math-question.component.html',
  styleUrls: ['./math-question.component.css']
})
export class MathQuestionComponent implements OnInit {
  userInput: number;
  right: boolean;
  wrong: boolean;
  problem: MathProblem;

  constructor() {
    this.right = false;
    this.wrong = false;
  }

  @Input() questionId: number;

  ngOnInit(): void {
    this.problem = MathProblem.generateProblem(3);
  }

  validateAnswer(): void {
    console.log("User Input: " + this.userInput);

    let answer = this.problem.getAnswer();

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
  }

}
