import { Component, OnInit } from '@angular/core';
import { MathProblem } from '../mathGenerator'
import { Config } from '../config';
import { ConfigService } from '../config.service'
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { MathQuestionService, MathQuestionNotifier } from '../math-question.service';

@Component({
  selector: 'app-problem-panel',
  templateUrl: './problem-panel.component.html',
  styleUrls: ['./problem-panel.component.scss']
})

export class ProblemPanelComponent implements OnInit {

  //cfg: Config;
  problems: MathProblem[];
  
  panelForm: FormGroup;
  answersFormArray: FormArray;
  progress: number;
  successCount: number;

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
        for(let i = this.answersFormArray.length; i > this.problems.length; ) {
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

    this.mathQuestionService.observable.subscribe( notification => {
      if (notification.success) {
        this.successCount++;
        this.progress = Math.round(( this.successCount / this.problemsCount) * 100);

        console.log(`SC: ${this.successCount} PR: ${this.progress}`);
      }
    }
    );
  }

  ngOnDestroy(): void {
    this.configService.unsubscribe()
    this.mathQuestionService.unsubscribe()
  }

  clearForm() {
    this.panelForm = new FormGroup({
      answers : new FormArray([])
    })
    this.answersFormArray = this.panelForm.get('answers') as FormArray;
  }

  get problemsCount() : number {
    return this.problems.length;
  }
}
