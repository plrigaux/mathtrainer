import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface MathQuestionValidation {
  id : number;
  correct: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ValidateAllService {

  myValidation = new Subject<MathQuestionValidation[]>();

  constructor() { }

  getValidation(): Observable<MathQuestionValidation[]> {
    return this.myValidation.asObservable();
  }

  updateValidation(validation: MathQuestionValidation[]): void {
    this.myValidation.next(validation);
  }
}
