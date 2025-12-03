import { Component, ElementRef, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { ValidateCB } from '../math-question/math-question.component';
import { MathQuestionNotifier, QuestionStatus } from '../services/math-question.service';
import { FocusType } from '../column-answer/column-answer.component';
import { Subscription } from 'rxjs';
import { Config } from '../services/config';

@Component({
  selector: 'app-answer-value',
  standalone: false,
  templateUrl: './answer-value.component.html',
  styleUrl: './answer-value.component.scss'
})
export class AnswerValueComponent {
  @Input() user_input_value: string = '';
  @Input() id: string = "NO_ID";
  @Input() real_answer: number;
  @Input() config: Config;
  @Output() status_change = new EventEmitter<QuestionStatus>();

  @ViewChildren('answer_input') inputs: QueryList<ElementRef>;

  private myEventSubscriptions: Subscription[] = [];
  private currentFocus = FocusType.BLUR;
  private isSwitchColunm: boolean = false;
  //@Output() focusChange = new EventEmitter<FocusType>();

  private answerStatus: QuestionStatus = QuestionStatus.EMPTY;

  ngOnDestroy(): void {
    this.myEventSubscriptions.forEach(subscription => {
      console.debug(this.log(`subscription.unsubscribe() ${subscription}`))
      subscription.unsubscribe()
    });
  }


  clearInput() {
    this.log(`clearInput`);
    //this.value = '';
    //this.answerStatus = QuestionStatus.EMPTY;
    this.modelChangeNormal("")
  }


  log(msg: any) {
    console.log(`ASW - ${this.id} -`, msg)
  }

  isEmpty(): boolean {
    return this.user_input_value == null || this.user_input_value.length === 0;
  }

  modelChangeNormal(change: string): void {
    this.log(`value change from: "${this.user_input_value}" to: "${change}"`)

    this.user_input_value = change;
    //this.valueChange.emit(this.value);
    let answerStatus = this.answerStatus

    let newStatus = this.validate_value_change()
    this.log("New status: " + newStatus);

    this.answerStatus = newStatus
  }

  validate_value_change(): QuestionStatus {
    let status: QuestionStatus = null;
    if (this.config.realTimeValidation) {
      status = this.validate_answer_real_time(true)
    } else {
      status = this.validate_answer_on_blur();
    }
    return status;
  }


  validate_answer_on_blur(): QuestionStatus {

    let empty = this.isEmpty()
    let status = this.answerStatus;

    if (this.currentFocus == FocusType.FOCUS) {
      status = QuestionStatus.FOCUS
    } else {
      status = empty ? QuestionStatus.EMPTY : QuestionStatus.ANSWERED
    }

    return this.changeStatus(status, false, true)

  }

  validate_answer_real_time(informParent: boolean): QuestionStatus {

    this.log(`User Input: ${this.user_input_value} Answer: ${this.real_answer}`);

    let userAnswer = parseInt(this.user_input_value);

    this.log(`User Input: ${this.user_input_value} userAnswer: ${userAnswer}`)
    let status = this.answerStatus;
    if (userAnswer === this.real_answer) {
      console.debug(this.log("R"))
      status = QuestionStatus.RIGHT;
    }
    else if (isNaN(userAnswer)) {
      console.debug(this.log("Void"))
      status = this.currentFocus == FocusType.FOCUS ? QuestionStatus.FOCUS : QuestionStatus.EMPTY;
    }
    else if (this.currentFocus == FocusType.FOCUS) {
      let userAnswerLength = userAnswer.toString().length; //this to ensure raw string length (it trims)
      let answerLength = this.real_answer.toString().length
      if (userAnswerLength >= answerLength) {
        console.debug(this.log("W Length"))
        status = QuestionStatus.WRONG;
      } else {
        console.debug(this.log("Infocus"))
        status = QuestionStatus.FOCUS;
      }
    }
    else {
      console.debug(this.log("W"))
      status = QuestionStatus.WRONG;
    }

    return this.changeStatus(status, false, informParent)
  }

  private changeStatus(newStatus: QuestionStatus, forceExitFocus: boolean, isParentCanValidate: boolean): QuestionStatus {
    if (this.answerStatus !== newStatus) {
      this.answerStatus = newStatus
      this.status_change.emit(this.answerStatus)
    }

    return this.answerStatus
  }

  get_class() : string {
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
    this.log(`Focus ${newFocus} this.inFocus ${this.currentFocus}  this.isSwitchColunm ${this.isSwitchColunm}`)

    if (this.currentFocus !== newFocus) {
      if (this.isSwitchColunm == false) {
        //this.focusChange.emit(newFocus);
      } else {
        this.isSwitchColunm = false;
      }

      if (newFocus == FocusType.FOCUS) {
        if (this.isEmpty()) {
          this.answerStatus = QuestionStatus.FOCUS
        }
      } else if (newFocus == FocusType.BLUR) {
        if (this.isEmpty()) {
          this.answerStatus = QuestionStatus.EMPTY
        }
      }
    }

    this.currentFocus = newFocus;
  }

  focus() {
    this.inputs.first.nativeElement.focus();
  }
}
