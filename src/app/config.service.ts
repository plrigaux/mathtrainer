import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
import { BehaviorSubject, Subscription, Subscribable, PartialObserver } from 'rxjs';
import { Config, CONFIG, MATH_EXERCICISES_STORE } from './config';


@Injectable({
  providedIn: 'root'
})



export class ConfigService implements Subscribable<Config> {

  private configSource: BehaviorSubject<Config>;
  //private configObservable: Observable<Config>;

  constructor() {

    let storedData = localStorage.getItem(MATH_EXERCICISES_STORE);
    let sdObject: object;

    sdObject = (storedData == null) ? {} : JSON.parse(storedData);
    console.log("storedData")
    console.log(storedData)
    console.log("storedData")

    let cf = { ...CONFIG, ...sdObject };
    console.log(cf);


    this.configSource = new BehaviorSubject<Config>(cf);
    //this.configObservable = this.configSource.asObservable();
  }


  subscribe(observer?: PartialObserver<Config>): Subscription;
  subscribe(next?: (value: Config) => void, error?: (error: any) => void, complete?: () => void): Subscription;
  subscribe(generatorOrNext?: any, error?: any, complete?: any): Subscription {
    return this.configSource.subscribe(generatorOrNext, error, complete);
  }

  unsubscribe() {
    this.configSource.unsubscribe();
  }

  next(value: Config) {
    this.configSource.next(value);
    localStorage.setItem(MATH_EXERCICISES_STORE, JSON.stringify(value));
  }
}
