import { Component, OnInit } from '@angular/core';
import { MathProblem } from '../mathGenerator'
import { Config } from '../config';
import { ConfigService } from '../config.service'
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

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
  constructor(private configService: ConfigService) {

    // this.panelForm = new FormGroup({
    //   answers : new FormArray([])
    // })

   

    console.log(this.answersFormArray)
    //this.answersFormArray.push(new FormControl());
    this.clearForm();
  }

  ngOnInit(): void {
    this.configService.subscribe(
      cf => {
        this.problems = new Array(cf.nbProblems >= 1 ? cf.nbProblems : 1); //TODO make an universal function
        for(let i = this.answersFormArray.length; i > this.problems.length; ) {
          this.answersFormArray.removeAt(--i);
          console.log("FA: " + this.answersFormArray.length);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.configService.unsubscribe()
  }

  clearForm() {
    this.panelForm = new FormGroup({
      answers : new FormArray([])
    })
    this.answersFormArray = this.panelForm.get('answers') as FormArray;
  }
}
