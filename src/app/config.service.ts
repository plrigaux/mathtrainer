import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Config } from './config';
import { CONFIG } from './mock-config'


@Injectable({
  providedIn: 'root'
})



export class ConfigService {

  constructor() { }
  
  getConfig(): Observable<Config> {
    return of(CONFIG);
  }
}
