import { Component, Input } from '@angular/core';
import { ValidateCB } from '../math-question/math-question.component';
import { QuestionStatus } from '../services/math-question.service';

@Component({
  selector: 'app-answer-value',
  standalone: false,
  templateUrl: './answer-value.component.html',
  styleUrl: './answer-value.component.scss'
})
export class AnswerValueComponent {
  @Input() value: string = '';
  @Input() id: number = -1;
  @Input() valueChange: ValidateCB;

  answerStatus: QuestionStatus = QuestionStatus.EMPTY;
  clearInput() {
    this.log(`clearInput`);
    this.value = '';
    this.answerStatus = QuestionStatus.EMPTY;
  }


  log(msg: any) {
    console.log("ASW", this.id, " - ", msg)
  }

  isEmpty(): boolean {
    return this.value == null || this.value.length === 0;
  }

  modelChangeNormal(change: string): void {
    this.log(`change ${change} model val ${this.value}`)

    this.value = change;
    //this.valueChange.emit(this.value);
    let answerStatus = this.answerStatus
    let newStatus =  this.valueChange(this.value, this.id)
    this.log(newStatus);

    let leaveCursorThere: boolean;
    switch (answerStatus) {
      case QuestionStatus.EMPTY:
      case QuestionStatus.FOCUS:
        leaveCursorThere = newStatus == QuestionStatus.WRONG || newStatus == QuestionStatus.RIGHT;
        break;
      case QuestionStatus.WRONG:
        leaveCursorThere = newStatus == QuestionStatus.RIGHT;
        break;
      case QuestionStatus.RIGHT:
        leaveCursorThere = false;
        break;
      case QuestionStatus.ANSWERED:
        leaveCursorThere = false;
        break;
    }

    this.answerStatus = newStatus
  }

  set_class() {
    let clazz = ''
    switch (this.answerStatus) {

      case QuestionStatus.WRONG:
        clazz = 'wrong'
        break;
      case QuestionStatus.RIGHT:
        clazz = 'right'
        break;
    }

    return clazz
  }
}
