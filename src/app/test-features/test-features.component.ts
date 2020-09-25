import { Component, OnInit } from '@angular/core';
import { trigger, transition, state, animate, style, keyframes } from '@angular/animations';
import { MATH_EXERCICISES_STORE } from '../config';
import { ColumnAnswerComponent } from  '../column-answer/column-answer.component'

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

  value1 :string;
  value2 : string;
  constructor() { }

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

  onValueChange1(value : string) {
    this.value1 = value; 
  }

  onValueChange2(value : string) {
    this.value2 = value; 
  }
}
