import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';
import { MATH_EXERCICISES_STORE } from '../config';
import { ColumnAnswerComponent, ColumnAnswerMode } from '../column-answer/column-answer.component'
import { QuestionStatus } from '../math-question.service';


const testcomponent = 3;
interface AnswerInputConfig {
  size: number;
  mode: ColumnAnswerMode;
  status: QuestionStatus;
  value: string;
}

@Component({
  selector: 'app-test-features',
  templateUrl: './test-features.component.html',
  styleUrls: ['./test-features.component.scss'],
  animations: [
    trigger('slideStatus', [
      state('inactive', style({ backgroundColor: 'blue' })),
      state('active', style({ backgroundColor: 'orange' })),

      transition('* => active', [
        animate('2s', keyframes([
          style({ backgroundColor: 'blue', offset: 0 }),
          style({ backgroundColor: 'red', offset: 0.8 }),
          style({ backgroundColor: 'orange', offset: 1.0 })
        ])),
      ]),
      transition('* => inactive', [
        animate('2s', keyframes([
          style({ backgroundColor: 'orange', offset: 0 }),
          style({ backgroundColor: 'red', offset: 0.2 }),
          style({ backgroundColor: 'blue', offset: 1.0 })
        ]))
      ]),

      transition('* => active', [
        animate('2s', keyframes([
          style({ backgroundColor: 'blue' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: 'orange' })
        ]))
      ]),
    ])
  ]
})
export class TestFeaturesComponent implements OnInit {
  status: 'active' | 'inactive' = 'inactive';

  inputStatus: string[] = []


  //value: string[] = new Array(testcomponent);
  //statusOfInput: QuestionStatus[] = new Array(testcomponent);


  answerInputConfigs : AnswerInputConfig[]  = [

    {  
      size: 5,
      mode: ColumnAnswerMode.NORMAL,
      status: QuestionStatus.EMPTY,
      value: "67"
    },
    {  
      size: 5,
      mode: ColumnAnswerMode.COLUMNS,
      status: QuestionStatus.EMPTY,
      value: ""
    },
    {  
      size: 3,
      mode: ColumnAnswerMode.COLUMNS,
      status: QuestionStatus.EMPTY,
      value: ""
    },
    {  
      size: 4,
      mode: ColumnAnswerMode.NORMAL,
      status: QuestionStatus.EMPTY,
      value: ""
    }
  ]

  constructor() {
    for (var enumMember in QuestionStatus) {
      console.log("enum member: ", enumMember);
      this.inputStatus.push(enumMember)
    }
  }

  ngOnInit(): void {
  }

  toggle() {
    if (this.status === 'active') {
      this.status = 'inactive';
    } else {
      this.status = 'active';
    }
  }

  clearStorage() {
    localStorage.clear();
  }

  onValueChange(value: string, index: number) {
    console.log(`onValueChange ${value} ${index}`)
    this.answerInputConfigs[index].value = value;
  }

}
