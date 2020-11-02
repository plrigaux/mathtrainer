import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-main-buttons',
  templateUrl: './main-buttons.component.html',
  styleUrls: ['./main-buttons.component.scss']
})
export class MainButtonsComponent implements OnInit {

  @Input() nbQuestions: number
  @Input() disableButton: boolean
  @Output() pushButtonEvent = new EventEmitter<ButtonPushed>();

  constructor() { }

  ngOnInit(): void {

  }

  goToProblems() {
    this.pushButtonEvent.emit(
      {
        status: ButtonPushedStatus.TO_PROBLEMS,
        nbQuestions: this.nbQuestions
      })
  }

  goToWorkout() {
    this.pushButtonEvent.emit(
      {
        status: ButtonPushedStatus.TO_WORKOUT,
        nbQuestions: this.nbQuestions
      })
  }

  clear() {
    this.pushButtonEvent.emit(
      {
        status: ButtonPushedStatus.CLEAR,
        nbQuestions: this.nbQuestions
      })
  }
}

export interface ButtonPushed {
  status: ButtonPushedStatus;
  nbQuestions: number;
}

export enum ButtonPushedStatus {
  TO_PROBLEMS,
  TO_WORKOUT,
  CLEAR
}