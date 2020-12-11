import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { WorksheetsMap } from '../../math-generator/worksheetsMap'
import { MathProblemTypes } from '../../math-generator/mathProblemTypes';
import { ConfigService, ConfigServiceInfo } from '../../services/config.service'
import { Config } from '../../services/config';
import { Subscription } from 'rxjs';
import { MatCheckbox } from '@angular/material/checkbox';
import { WorksheetsItem } from '../../math-generator/worksheetsDefinitions'
import { ButtonPushed, ButtonPushedStatus } from '../main-buttons/main-buttons.component'
import { MATHProplemActions, MathProblemTypesMap, MathProblemTypesData } from '../../math-generator/mathProblemTypes'

export interface WorksheetsItemPerOperation {
  exercises: WorksheetsItem[];
  mathProblemTypesData: MathProblemTypesData;
}

@Component({
  selector: 'app-main-tabs-programs',
  templateUrl: './main-tabs-programs.component.html',
  styleUrls: ['./main-tabs-programs.component.scss']
})
export class MainTabsProgramsComponent implements OnInit {
  exercises: WorksheetsItem[];
  worksheetsItemPerOperations: WorksheetsItemPerOperation[] = [];
  private worksheetsItems: Map<string, WorksheetsItem> = new Map();
  config: Config;
  private myEventSubscriptions: Subscription[] = [];
  @ViewChildren(MatCheckbox) checkboxes: QueryList<MatCheckbox>;
  selectedTabIndex: number = null;
  problemTypes: MathProblemTypes[] = null;
  mathProblemTypesMap: MathProblemTypesMap = MATHProplemActions;
  removable = true;


  constructor(private router: Router, private configService: ConfigService) {
    this.exercises = WorksheetsMap.getWorksheetsItem();

    let exercicesPerOP: Map<MathProblemTypes, WorksheetsItemPerOperation> = new Map();
    //Fill map
    Object.values(MATHProplemActions).forEach(x => exercicesPerOP.set(x.code, {
      exercises: [],
      mathProblemTypesData: x
    }));

    this.exercises.forEach((x: WorksheetsItem) => {
      let a: WorksheetsItemPerOperation = exercicesPerOP.get(x.mathProblemType);
      a.exercises.push(x);
    });

    //clean empty
    exercicesPerOP.forEach((v: WorksheetsItemPerOperation, k: MathProblemTypes) => {
      if (v.exercises.length != 0) {
        this.worksheetsItemPerOperations.push(v);
      }
    });
  }

  ngOnInit(): void {
    this.myEventSubscriptions.push(this.configService.subscribe(
      (cfi: ConfigServiceInfo) => {
        this.config = cfi.config;
        this.config.generators.forEach(worksheetsItem => {

          if (WorksheetsMap.has(worksheetsItem.code)) {
            this.fillMap(true, worksheetsItem);
          }
        });
      }
    ));
  }

  ngOnDestroy(): void {
    this.myEventSubscriptions.forEach(subscription => subscription.unsubscribe());
    this.myEventSubscriptions = [];
    console.log("DEStroy !!!!!!!!!!!!");
  }

  setUpConfig() {

    let generators: WorksheetsItem[] = new Array(this.worksheetsItems.size);

    let i = 0;
    this.worksheetsItems.forEach((value: WorksheetsItem) => {
      generators[i++] = value
    });

    this.config.generators = generators
    console.warn(this.config.generators)
    this.configService.next(this.config, true)
  }

  getAdditions(): WorksheetsItem[] {
    console.log("getAdditions");
    return this.exercises;
  }

  filterOperation(a: any, b: MathProblemTypesData) {
    return a.mathProblemType === b.code;
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

  pushedButton(buttonPushed: ButtonPushed) {
    switch (buttonPushed.status) {
      case ButtonPushedStatus.TO_PROBLEMS:
        this.config.nbQuestions = buttonPushed.nbQuestions
        this.setUpConfig();
        this.router.navigate(['/problems']);
        break;
      case ButtonPushedStatus.TO_WORKOUT:
        this.config.nbQuestions = buttonPushed.nbQuestions
        this.setUpConfig();
        this.router.navigate(['/workout']);
        break;
      case ButtonPushedStatus.CLEAR:
        this.unCheckAll();
        break;
    }
  }

  mathProplemActions(): MathProblemTypesData[] {
    let val: MathProblemTypesData[] = Object.values(MATHProplemActions);
    return val;
  }

  operationToDisplay(): WorksheetsItemPerOperation[] {

    if (!this.problemTypes) {
      return this.worksheetsItemPerOperations
    } else {
      return this.worksheetsItemPerOperations.filter(x => this.problemTypes.includes(x.mathProblemTypesData.code))
    }
  }
}