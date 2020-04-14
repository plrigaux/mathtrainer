import { Component, OnInit, NgModule } from '@angular/core';
import { MathProblem } from '../mathGenerator'
import { MathQuestionComponent } from '../math-question/math-question.component';
/*
@NgModule({
  declarations: [MathQuestionComponent],
  exports:[MathQuestionComponent]
})
*/
@Component({
  selector: 'app-problem-panel',
  templateUrl: './problem-panel.component.html',
  styleUrls: ['./problem-panel.component.css']
})
export class ProblemPanelComponent implements OnInit {

  constructor() { }

  problems: MathProblem[];

  ngOnInit(): void {
    this.problems = [];
    for(var i = 0;i < 10; i++) {
      let problem = MathProblem.generateProblem(3);
      this.problems.push(problem)
    }
  }

}
