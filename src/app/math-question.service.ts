import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

export enum QuestionStatus {
  RIGHT = "RIGHT",
  WRONG = "WRONG",
  EMPTY = "EMPTY",
  FOCUS = "FOCUS"
}

export interface MathQuestionNotifier {
  status: QuestionStatus;
  index: number;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class MathQuestionService {

  observable: Subject<MathQuestionNotifier>;

  constructor() {
    this.observable = new Subject();
  }

  unsubscribe() {
    if (this.observable) {
      this.observable.unsubscribe();
    }
  }

  next(id: string, index: number, status: QuestionStatus) {
    this.observable.next({ id: id, index: index, status: status });
  }
}