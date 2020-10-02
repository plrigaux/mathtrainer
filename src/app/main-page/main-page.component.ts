import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { WorksheetsMap, WorksheetsItem } from '../math-generator/worksheetsMap'
import { MathProblemTypes } from '../math-generator/mathProblemTypes';
import { ConfigService } from '../services/config.service'
import { Config } from '../services/config';
import { Subscription } from 'rxjs';
import { MatCheckbox } from '@angular/material/checkbox';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  exercises: WorksheetsItem[];
  private worksheetsItems: Map<string, WorksheetsItem> = new Map();
  private config: Config;
  private myEventSubscriptions: Subscription[] = [];
  @ViewChildren(MatCheckbox) checkboxes: QueryList<MatCheckbox>;

  constructor(private router: Router, private configService: ConfigService) {

  }

  ngOnInit(): void {
    this.exercises = WorksheetsMap.getWorksheetsItem();

    this.myEventSubscriptions.push(this.configService.subscribe(
      cfi => {
        this.config = cfi.config;
        this.config.generators.forEach(worksheetsItem => {
          this.fillMap(true, worksheetsItem);
        });
      }
    ));
  }

  ngOnDestroy(): void {
    this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());
    this.myEventSubscriptions = [];
    console.log("DEStroy !!!!!!!!!!!!");
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

    let generators: WorksheetsItem[] = new Array(this.worksheetsItems.size);

    let i = 0;
    this.worksheetsItems.forEach((value: WorksheetsItem) => {
      generators[i++] = value
    });

    this.config.generators = generators
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

  checkboxChange(checked: boolean, item: WorksheetsItem) {
    console.log(checked);
    console.log(item);

    this.fillMap(checked, item);
  }

  private fillMap(checked: boolean, item: WorksheetsItem) {
    if (checked) {
      this.worksheetsItems.set(item.code, item);
    } else {
      this.worksheetsItems.delete(item.code);
    }
    console.log(this.worksheetsItems)
  }

  unCheckAll() {
    this.checkboxes.forEach(element => {
      element.checked = false
    });
    this.worksheetsItems.clear();
  }

  isSelected(worksheetsItem: WorksheetsItem): boolean {
    let selected = this.worksheetsItems.has(worksheetsItem.code);
    return selected;
  }
}
