import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { ValidateCB } from '../math-question/math-question.component';
import { QuestionStatus } from '../services/math-question.service';
import { FocusType } from '../column-answer/column-answer.component';

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
  @ViewChildren('answer_input') inputs: QueryList<ElementRef>;

  private currentFocus = FocusType.BLUR;
  private isSwitchColunm: boolean = false;
  @Output() focusChange = new EventEmitter<FocusType>();

  @Input() answerStatus: QuestionStatus = QuestionStatus.EMPTY;

  clearInput() {
    this.log(`clearInput`);
    //this.value = '';
    //this.answerStatus = QuestionStatus.EMPTY;
    this.modelChangeNormal("")
  }


  log(msg: any) {
    console.log("ASW", this.id, " - ", msg)
  }

  isEmpty(): boolean {
    return this.value == null || this.value.length === 0;
  }

  modelChangeNormal(change: string): void {
    this.log(`value change from: ${this.value} to: ${change}`)

    this.value = change;
    //this.valueChange.emit(this.value);
    let answerStatus = this.answerStatus
   
    let newStatus = this.valueChange(this.value, this.id)
    this.log("newStatus: " + newStatus);

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

      case QuestionStatus.FOCUS:
        clazz = 'focus'
        break;
    }

    return clazz
  }

  onFocusSimple(e: FocusEvent) {
    this.setInFocus(FocusType.FOCUS);
  }

  onBlurSimple(e: FocusEvent) {
    this.setInFocus(FocusType.BLUR);
  }

  private setInFocus(newFocus: FocusType) {

    this.log(`newFocus ${newFocus} this.inFocus ${this.currentFocus}  this.isSwitchColunm ${this.isSwitchColunm}`)
    if (this.currentFocus !== newFocus) {
      if (this.isSwitchColunm == false) {
        this.focusChange.emit(newFocus);
      } else {
        this.isSwitchColunm = false;
      }

      if (newFocus == FocusType.FOCUS) {
        this.answerStatus = QuestionStatus.FOCUS
      } else if (newFocus == FocusType.BLUR) {
        if (this.isEmpty()) {
          this.answerStatus = QuestionStatus.EMPTY
        }
      }
      this.set_class()
    }

    this.currentFocus = newFocus;
  }

  focus() {
    this.inputs.first.nativeElement.focus();
  }
}
