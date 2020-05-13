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

  cfg: Config;
  problems: MathProblem[];
  
  panelForm: FormGroup;
  answersFormArray: FormArray;
  constructor(private configService: ConfigService) {

    this.panelForm = new FormGroup({
      answers : new FormArray([])
    })

    this.answersFormArray = this.panelForm.get('answers') as FormArray;

    console.log(this.answersFormArray)
    //this.answersFormArray.push(new FormControl());
  }

  ngOnInit(): void {
    this.configService.configSource.subscribe(
      cf => {
        this.problems = new Array(cf.nbProblems >= 1 ? cf.nbProblems : 1); //TODO make an universal function
      }
    );
  }

  ngOnDestroy(): void {
    this.configService.configSource.unsubscribe()
  }
}
