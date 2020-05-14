import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

export class MathQuestionNotifier {
  success: boolean;
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
    this.observable.unsubscribe();
  }

  next(id: string, success: boolean) {
    this.observable.next({ id: id, success: success });
  }
}
