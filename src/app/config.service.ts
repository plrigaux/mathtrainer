import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
import { BehaviorSubject, Subscription, Subscribable, PartialObserver } from 'rxjs';
import { Config, CONFIG, MATH_EXERCICISES_STORE, GENERATORS_KEY } from './config';
import { WorksheetsItem } from './math-generator/worksheetsMap';
import { Worksheets } from './math-generator/worksheets';
import { stringify } from '@angular/compiler/src/util';

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

    let cf : Config = {} as Config;

    for (const key of Object.keys(CONFIG)) {
      let val = sdObject[key];
      
      if (val === undefined) {
        val = CONFIG[key];
      }

      cf[key] = val;
      //console.log(`${cf[key]} = ${sdObject[key]}`);
    }
    
    let generatorsObj = sdObject[GENERATORS_KEY];

    if (generatorsObj !== undefined) {
      let map: Map<string, WorksheetsItem> = new Map();

      for (const value of Object.values(generatorsObj)) {

        let worksheetsItem : WorksheetsItem = value as WorksheetsItem

        let func = Worksheets[worksheetsItem.funcName]

        if (func === undefined) {
          console.warn(`"${worksheetsItem.funcName}" not in Worksheets`);
        } else {
          worksheetsItem.func = func;
          map.set(worksheetsItem.code, worksheetsItem);
        }
      }
      cf[GENERATORS_KEY] = map;
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

  next(config: Config, needReset: boolean) {
    this.configSource.next({ config: config, needReset: needReset });

    let cf: Record<string, any> = {  };
    //copy
    for (const key of Object.keys(CONFIG)) {
      cf[key] = config[key];
      //console.log(`${cf[key]} = ${sdObject[key]}`);
    }

    //transform map to object
    let generatorsObj: Object = {}
    config.generators.forEach((val, key) => {
      generatorsObj[key] = val;
    });

    cf[GENERATORS_KEY] = generatorsObj;

    let json = JSON.stringify(cf);

    console.log("json config")
    console.log(config)
    console.log(json)


    localStorage.setItem(MATH_EXERCICISES_STORE, json);
  }
}
