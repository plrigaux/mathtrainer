import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { WorksheetsMap } from '../math-generator/worksheetsMap'
import { MathProblemTypes } from '../math-generator/mathProblemTypes';
import { ConfigService, ConfigServiceInfo } from '../services/config.service'
import { Config } from '../services/config';
import { Subscription } from 'rxjs';
import { MatCheckbox } from '@angular/material/checkbox';
import { WorksheetsItem } from '../math-generator/worksheetsDefinitions'

@Component({
  selector: 'app-main-tabs-programs',
  templateUrl: './main-tabs-programs.component.html',
  styleUrls: ['./main-tabs-programs.component.scss']
})
export class MainTabsProgramsComponent implements OnInit {
  exercises: WorksheetsItem[];
  private worksheetsItems: Map<string, WorksheetsItem> = new Map();
  private config: Config;
  private myEventSubscriptions: Subscription[] = [];
  @ViewChildren(MatCheckbox) checkboxes: QueryList<MatCheckbox>;
  selectedTabIndex : number = null;

  constructor(private router: Router, private configService: ConfigService) {

  }

  ngOnInit(): void {
    this.exercises = WorksheetsMap.getWorksheetsItem();

    this.myEventSubscriptions.push(this.configService.subscribe(
      (cfi : ConfigServiceInfo) => {
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

  filterMultiplication(item: WorksheetsItem): boolean {
    return item.mathProblemType === MathProblemTypes.MULTIPLICATION
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
