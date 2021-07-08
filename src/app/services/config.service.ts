import { Injectable } from '@angular/core';
import { BehaviorSubject, Subscription, PartialObserver } from 'rxjs';
import { Config, CONFIG, MATH_EXERCICISES_STORE, GENERATORS_KEY } from './config';
import { WorksheetsItem, WorksheetsItemStore } from '../math-generator/worksheetsDefinitions';
import { Worksheets } from '../math-generator/worksheets';
import { Worksheets2 } from '../math-generator/worksheets2';
import { MathProblem } from "../math-generator/mathProblem";

export class ConfigServiceInfo {
  config: Config;
  needReset: boolean;
}


export interface ConfigServiceMarchelor {
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

    this.loadConfig();
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
    this.configSource.next({ config: config, needReset: needReset } as ConfigServiceMarchelor);

    this.saveConfig(config);
  }

  private loadConfig() {
    let storedData = localStorage.getItem(MATH_EXERCICISES_STORE);
    let sdObject : {[index: string]:any} = (storedData == null) ? {} : JSON.parse(storedData);
    console.log("storedData")
    console.log(storedData)
    console.log("storedData")

    let cf: Config = {} as Config;

    for (const key of Object.keys(CONFIG)) {
      let val = sdObject[key];

      if (val === undefined) {
        val = CONFIG[key];
      }

      cf[key.toString()] = val;
      //console.log(`${cf[key]} = ${sdObject[key]}`);
    }

    let generatorsObj = sdObject[GENERATORS_KEY];

    if (generatorsObj !== undefined) {
      let generators: WorksheetsItem[] = [];

      for (const value of Object.values(generatorsObj)) {

        let worksheetsItem: WorksheetsItem = value as WorksheetsItem

        let func : (parameters: WorksheetsItem) => MathProblem = Worksheets[worksheetsItem.funcName]

        if (func === undefined) {
          func = Worksheets2[worksheetsItem.funcName]
        }

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
  }

  private saveConfig(config: Config) {

    let temp: WorksheetsItemStore = {
      code: null,
      funcName: null,
      parameters: null
    }

    let cf: Record<string, any> = {};
    //copy
    for (const key of Object.keys(CONFIG)) {
      cf[key] = config[key.toString()];
      //console.log(`${cf[key]} = ${sdObject[key]}`);
    }

    //transform map to object
    let generators: Object[] = []
    config.generators.forEach((val: WorksheetsItem) => {

      let generatorsObj: { [index: string]: any } = {}
      for (const key of Object.keys(temp)) {
        generatorsObj[key] = val[key];
      }
      generators.push(generatorsObj);
    });

    cf[GENERATORS_KEY] = generators;

    let json = JSON.stringify(cf, ConfigService.jsonReplacer, " ");

    console.log("json config -- " + json)
    console.log(config)

    localStorage.setItem(MATH_EXERCICISES_STORE, json);
  }

  static jsonReplacer(key: string, value: any): any {
    if (key.startsWith("_")) {
      return undefined
    }

    return value;
  }
}
