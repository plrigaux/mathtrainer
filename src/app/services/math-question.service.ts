import { Injectable } from '@angular/core';
import { Subject, Subscription, queueScheduler } from 'rxjs'
import { observeOn } from "rxjs/operators";

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


  private observable: Subject<MathQuestionNotifier>;

  constructor() {
    this.observable = new Subject();
  }

  unsubscribe() {
    if (this.observable) {
      this.observable.unsubscribe();
    }
  }

  next(notification: MathQuestionNotifier) {
    //this.observable.toPromise().then(notification);
    this.observable.next(notification);
  }

  subscribe(func: (notification: MathQuestionNotifier) => void): Subscription {
    
    return this.observable.subscribe(func);
  }
}