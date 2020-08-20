import { Component, OnInit}  from '@angular/core';
import { MathProblem } from '../math-generator/mathGenerator'
import { ConfigService } from '../config.service'
import { FormGroup, FormArray } from '@angular/forms';
import { MathQuestionService } from '../math-question.service';

@Component({
  selector: 'app-problem-panel',
  templateUrl: './problem-panel.component.html',
  styleUrls: ['./problem-panel.component.scss']
})

export class ProblemPanelComponent implements OnInit {
  problems: MathProblem[];

  panelForm: FormGroup;
  answersFormArray: FormArray;
  progress: number;
  successCount: number;
  answerMap = new Map();

  constructor(private configService: ConfigService, private mathQuestionService: MathQuestionService) {
    console.log(this.answersFormArray)
    //this.answersFormArray.push(new FormControl());
    this.clearForm();
    this.progress = 0;
    this.successCount = 0;
  }

  ngOnInit(): void {
    this.configService.subscribe(
      cfsi => {
        this.problems = new Array(cfsi.config.nbProblems >= 1 ? cfsi.config.nbProblems : 1); //TODO make an universal function
        for (let i = this.answersFormArray.length; i > this.problems.length;) {
          this.answersFormArray.removeAt(--i);
          console.log("FA: " + this.answersFormArray.length);
        }

        //reset state
        if (cfsi.needReset) {
          this.progress = 0;
          this.successCount = 0;
        }
      }
    );

    this.mathQuestionService.observable.subscribe(notification => {
      let val = this.answerMap.get(notification.id)
      console.log(notification)
      console.log(val)
      if ((val === undefined || val === false) && notification.success) {
        this.successCount++;
        this.progress = Math.round((this.successCount / this.problemsCount) * 100);

        console.log(`SC: ${this.successCount} PR: ${this.progress}`);
      } else if ( val === true && notification.success === false) {
        this.successCount--;
        this.progress = Math.round((this.successCount / this.problemsCount) * 100);
      }

      this.answerMap.set(notification.id, notification.success);
    }
    );
  }

  ngOnDestroy(): void {
    this.configService.unsubscribe()
    this.mathQuestionService.unsubscribe()
  }

  clearForm() {
    this.panelForm = new FormGroup({
      answers: new FormArray([])
    })
    this.answersFormArray = this.panelForm.get('answers') as FormArray;
  }

  get problemsCount(): number {
    return this.problems.length;
  }

  padding(padSize: number): any[] {
    return new Array(padSize);
  }
}
