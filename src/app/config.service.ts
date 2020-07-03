import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
import { BehaviorSubject, Subscription, Subscribable, PartialObserver } from 'rxjs';
import { Config, CONFIG, MATH_EXERCICISES_STORE } from './config';

export class ConfigServiceInfo {
  config: Config;
  needReset: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private configSource: BehaviorSubject<ConfigServiceInfo>;
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


    this.configSource = new BehaviorSubject<ConfigServiceInfo>({config: cf, needReset: true});
    //this.configObservable = this.configSource.asObservable();
  }


  subscribe(observer?: PartialObserver<ConfigServiceInfo>): Subscription;
  subscribe(next?: (value: ConfigServiceInfo) => void, error?: (error: any) => void, complete?: () => void): Subscription;
  subscribe(generatorOrNext?: any, error?: any, complete?: any): Subscription {
    return this.configSource.subscribe(generatorOrNext, error, complete);
  }

  unsubscribe() {
    this.configSource.unsubscribe();
  }

  next(value: Config, needReset: boolean) {
    this.configSource.next({config: value, needReset: needReset});
    localStorage.setItem(MATH_EXERCICISES_STORE, JSON.stringify(value));
  }
}
