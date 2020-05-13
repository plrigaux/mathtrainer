import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetService {

  obs: Subject<any>;


  constructor() {
    this.obs = new Subject();
  }
}
