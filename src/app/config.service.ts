import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs';
import { Config, CONFIG, MATH_EXERCICISES_STORE } from './config';


@Injectable({
  providedIn: 'root'
})



export class ConfigService {

  configSource : BehaviorSubject<Config>;
  config : Observable<Config>;

  constructor() { 

    let storedData = localStorage.getItem(MATH_EXERCICISES_STORE);
    let sdObject: object;

    sdObject = (storedData == null)? {} : JSON.parse(storedData);
    console.log("storedData")
    console.log(storedData)
    console.log("storedData")

    let cf = {...CONFIG, ...sdObject};
    console.log(cf);

    
    this.configSource = new BehaviorSubject<Config>(cf);
    this.config = this.configSource.asObservable();
  }

  updatedDataSelection(conf: Config) {
    this.configSource.next(conf);
  }
}
