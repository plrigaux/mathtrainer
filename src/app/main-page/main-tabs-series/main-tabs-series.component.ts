import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorksheetsItem, MultiParam } from '../../math-generator/worksheetsDefinitions';
import { Worksheets2 } from '../../math-generator/worksheets2'
import { ConfigService, ConfigServiceInfo } from '../../services/config.service'
import { Config } from '../../services/config';
import { Subscription } from 'rxjs';
import { MathProblemTypes, MathProblemTypesData } from '../../math-generator/mathProblemTypes';
import { MATHProplemActions } from '../../math-generator/mathProblemTypes'
import { ButtonPushed, ButtonPushedStatus } from '../main-buttons/main-buttons.component'
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { RangeManager, Range } from '../../math-generator/rangeManager';

@Component({
  selector: 'app-main-tabs-series',
  templateUrl: './main-tabs-series.component.html',
  styleUrls: ['./main-tabs-series.component.scss']
})
export class MainTabsSeriesComponent implements OnInit {
  tables: number[]
  config: Config;
  private myEventSubscriptions: Subscription[] = [];

  numberForControl1: FormControl;
  numberForControl2: FormControl;

  params: MultiParam = {
    problemTypes: MathProblemTypes.MULTIPLICATION,
    numbers1: "2",
    numbers2: "1 - 12",
    shuffle: false,
  }

  constructor(private router: Router, private configService: ConfigService) {

    let start = 1;
    let end = 12;

    this.tables = Array(end - start + 1).fill(null).map((_, idx: number) => start + idx)

    let vdator = [
      Validators.required, Validators.pattern(/^(\s*-?\d+\s*\-\s*-?\d+\s*,?|\s*-?\d+\s*,?)+$/)
    ]

    this.numberForControl1 = new FormControl('', vdator);
    this.numberForControl2 = new FormControl('', vdator);
  }

  ngOnInit(): void {
    this.myEventSubscriptions.push(this.configService.subscribe(
      (cfi: ConfigServiceInfo) => {
        this.config = { ...cfi.config };
        this.config.generators.forEach(worksheetsItem => {
          this.fillPageData(worksheetsItem);
        });
      }
    ));
    this.clear()
  }

  fillPageData(worksheetsItem: WorksheetsItem) {
    if (worksheetsItem.func == Worksheets2.multiplicationTable) {

      if (worksheetsItem?.parameters) {

        this.params = Object.assign(this.params, worksheetsItem.parameters)
        this.numberForControl1.setValue(this.params.numbers1);
        this.numberForControl2.setValue(this.params.numbers2);
      }
    }
  }

  clear() {
    this.numberForControl1.setValue("");
    this.numberForControl2.setValue("");
  }

  toDisable(): boolean {
    return false //go to regex
  }

  setUpConfig(): void {
    let generators: WorksheetsItem[] = new Array(1);

    console.warn(this.params.numbers1)

    //console.warn(this.params.numbers)

    this.params.numbers1 = RangeManager.toString(RangeManager.rangeParser(this.numberForControl1.value, true))
    this.params.numbers2 = RangeManager.toString(RangeManager.rangeParser(this.numberForControl2.value, true))


    let wi: WorksheetsItem = {
      label: "no",
      func: Worksheets2.multiplicationTable,
      code: "MultiSeries1",
      funcName: Worksheets2.multiplicationTable.name,
      grade: 3,
      mathProblemType: MathProblemTypes.MULTIPLICATION,
      parameters: { ...this.params }
    };

    generators[0] = wi;
    this.config.generators = generators

    this.configService.next(this.config, true)
  }

  isDisabled(): boolean {
    //console.log(`ISNSA '${this.params.numbers[0]}' ${isNaN(this.params.numbers[0])}`)
    return this.numberForControl1.valid == false || this.numberForControl2.valid == false || this.params.problemTypes == null
  }

  mathProplemActions(): MathProblemTypesData[] {
    let val: MathProblemTypesData[] = Object.values(MATHProplemActions);
    return val;
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
        this.clear();
        break;
    }
  }
}