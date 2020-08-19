import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorksheetsMap, WorksheetsItem } from '../math-generator/worksheetsMap'
import { MathProblemTypes } from '../math-generator/mathProblemTypes';
import { ConfigService } from '../config.service'
import { Config } from '../config';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  exercises: WorksheetsItem[];
  worksheetsItem : WorksheetsItem = null;
  config: Config;
  myEventSubscriptions: Subscription[] = [];

  constructor(private router: Router, private configService: ConfigService) {

  }

  ngOnInit(): void {
    this.exercises = WorksheetsMap.getWorksheetsItem();
/*
    this.myEventSubscriptions.push(this.configService.subscribe(
      cfi => { this.config = cfi.config; }
    ));*/
//TODO investigate
    this.configService.subscribe(
      cfi => { this.config = cfi.config; }
    )
  }

  ngOnDestroy(): void {
    //this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());
    //this.myEventSubscriptions = [];
  }


  goToProblems() {
    this.setUpConfig();
    this.router.navigate(['/problems']);
  }

  goToWorkout() {
    this.setUpConfig();
    this.router.navigate(['/workout']);
  }

  setUpConfig() {
    this.config.generator = this.worksheetsItem
    if (this.worksheetsItem != null) {
      this.config.mathProblemTypes = this.worksheetsItem.mathProblemType;
    }
    this.configService.next(this.config, true)
  }

  getAdditions(): WorksheetsItem[] {
    console.log("getAdditions");
    return this.exercises;
  }

  filterAdditions(item: WorksheetsItem): boolean {
    return item.mathProblemType === MathProblemTypes.ADDITION
  }

  filterSubtraction(item: WorksheetsItem): boolean {
    return item.mathProblemType === MathProblemTypes.SUBTRACTION
  }

  checkboxChange(checked: boolean, item : WorksheetsItem) {
    console.log(checked);
    console.log(item);

    if (checked) {
      this.worksheetsItem = item;
    } else {
      this.worksheetsItem = null;
    }
  }
}
