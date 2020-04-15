import { Injectable } from '@angular/core';
import { Config } from './config';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getConfig(): Config {
    return { nbNumbers: 2, nbProblems: 5 };
  }
}
