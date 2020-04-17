import { Injectable } from '@angular/core';
//import { Observable, of } from 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs';
import { Config } from './config';
import { CONFIG } from './mock-config'


@Injectable({
  providedIn: 'root'
})



export class ConfigService {

  configSource : BehaviorSubject<Config> = new BehaviorSubject<Config>({ ...CONFIG });
  config : Observable<Config> = this.configSource.asObservable();

  constructor() { }

  updatedDataSelection(conf: Config) {
    this.configSource.next(conf);
  }
}
