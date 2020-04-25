import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ValidateAllService {

  myValidation = new Subject<string[]>();

  constructor() { }

  getValidation(): Observable<string[]> {
    return this.myValidation.asObservable();
  }

  updateValidation(validation: string[]): void {
    this.myValidation.next(validation);
  }
}
