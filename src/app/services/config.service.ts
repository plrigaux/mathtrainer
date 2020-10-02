import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, PartialObserver } from 'rxjs';
import { Config, CONFIG, MATH_EXERCICISES_STORE, GENERATORS_KEY } from './config';
import { WorksheetsItem, WorksheetsItemStore } from '../math-generator/worksheetsMap';
import { Worksheets } from '../math-generator/worksheets';

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

    let cf: Config = {} as Config;

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
      let generators: WorksheetsItem[] = [];

      for (const value of Object.values(generatorsObj)) {

        let worksheetsItem: WorksheetsItem = value as WorksheetsItem

        let func = Worksheets[worksheetsItem.funcName]

        if (func === undefined) {
          console.warn(`"${worksheetsItem.funcName}" not in Worksheets`);
        } else {
          worksheetsItem.func = func;
          generators.push(worksheetsItem)
        }
      }
      cf[GENERATORS_KEY] = generators;
    }

    console.log(cf);


    this.configSource = new BehaviorSubject<ConfigServiceInfo>({ config: cf, needReset: true });
    //this.configObservable = this.configSource.asObservable();
  }

  subscribe(any: any): Subscription {
    return this.configSource.subscribe(any);
  }

  unsubscribe() {
    if (this.configSource) {
      this.configSource.unsubscribe();
    }
  }

  next(config: Config, needReset: boolean) {
    this.configSource.next({ config: config, needReset: needReset });


    let temp: WorksheetsItemStore = {
      code: null,
      funcName: null
    }

    let cf: Record<string, any> = {};
    //copy
    for (const key of Object.keys(CONFIG)) {
      cf[key] = config[key];
      //console.log(`${cf[key]} = ${sdObject[key]}`);
    }

    //transform map to object
    let generators: Object[] = []
    config.generators.forEach((val) => {

      let generatorsObj: Object = {}
      for (const key of Object.keys(temp)) {
        generatorsObj[key] = val[key];
      }
      generators.push(generatorsObj);
    });

    cf[GENERATORS_KEY] = generators;



    let json = JSON.stringify(cf);

    console.log("json config -- " + json)
    console.log(config)

    localStorage.setItem(MATH_EXERCICISES_STORE, json);
  }
}
