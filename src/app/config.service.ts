import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
import { BehaviorSubject, Subscription, Subscribable, PartialObserver } from 'rxjs';
import { Config, CONFIG, MATH_EXERCICISES_STORE } from './config';
import { WorksheetsMap } from './math-generator/worksheetsMap';
import { Worksheets } from './math-generator/worksheets';

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

    if (cf.generator != null) {
      let func = Worksheets[cf.generator.funcName]

      if (func === undefined) {
        cf.generator = null;
      } else {
        cf.generator.func = func;
      }
    }

    console.log(cf);

    this.configSource = new BehaviorSubject<ConfigServiceInfo>({ config: cf, needReset: true });
    //this.configObservable = this.configSource.asObservable();
  }


  subscribe(observer?: PartialObserver<ConfigServiceInfo>): Subscription;
  subscribe(next?: (value: ConfigServiceInfo) => void, error?: (error: any) => void, complete?: () => void): Subscription;
  subscribe(generatorOrNext?: any, error?: any, complete?: any): Subscription {
    return this.configSource.subscribe(generatorOrNext, error, complete);
  }

  unsubscribe() {
    if (this.configSource) {
      this.configSource.unsubscribe();
    }
  }

  next(value: Config, needReset: boolean) {
    this.configSource.next({ config: value, needReset: needReset });

    //copy
    let cf = { ...value };

    if (cf.generator != null) {
      console.log(cf.generator.func);
      console.log(cf.generator.func.name);
    }

    let json = JSON.stringify(cf);

    console.log("json config")
    console.log(json)


    localStorage.setItem(MATH_EXERCICISES_STORE, json);
  }
}
