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

@Component({
  selector: 'app-main-tabs-series',
  templateUrl: './main-tabs-series.component.html',
  styleUrls: ['./main-tabs-series.component.scss']
})
export class MainTabsSeriesComponent implements OnInit {


  tables: number[]
  config: Config;
  private myEventSubscriptions: Subscription[] = [];


  params: MultiParam = {
    problemTypes: MathProblemTypes.MULTIPLICATION,
    numbers: [],
    start: 1,
    end: 12,
    shuffle: false,
  }

  constructor(private router: Router, private configService: ConfigService) {

    let start = 1;
    let end = 12;

    this.tables = Array(end - start + 1).fill(null).map((_, idx: number) => start + idx)
    this.clear()
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
  }

  fillPageData(worksheetsItem: WorksheetsItem) {
    if (worksheetsItem.func == Worksheets2.multiplicationTable) {

      if (worksheetsItem?.parameters) {

        let raw = worksheetsItem.parameters

        //copy by removing context data
        /*
        let filtered = Object.keys(worksheetsItem.parameters)
          .filter(key => !key.startsWith("_"))
          .reduce((obj, key) => {
            return {
              ...obj,
              [key]: raw[key]
            };
          }, {}) as MultiParam;
*/
        this.params = worksheetsItem.parameters
      }
    }
  }

  clear() {
    this.params.numbers = [null];
  }

  toDisable(): boolean {
    return this.params.numbers.length == 0
  }

  setUpConfig() {


    let generators: WorksheetsItem[] = new Array(1);

    console.warn(this.params.numbers)
    // filter empty string ==> we want just numbers
    this.params.numbers = this.params.numbers.filter(x => {
      return isNaN(parseInt(x as undefined as string)) == false
    });
    console.warn(this.params.numbers)
    let wi: WorksheetsItem = {
      label: "no",
      func: Worksheets2.multiplicationTable,
      code: "MultiSeries1",
      funcName: Worksheets2.multiplicationTable.name,
      mathProblemType: MathProblemTypes.MULTIPLICATION,
      parameters: { ...this.params }
    };

    generators[0] = wi;
    this.config.generators = generators

    this.configService.next(this.config, true)
  }

  isDisabled(): boolean {
    //console.log(`ISNSA '${this.params.numbers[0]}' ${isNaN(this.params.numbers[0])}`)
    return this.params.numbers.length == 0 || this.params.numbers[0] == null
  }

  mathProplemActions(): MathProblemTypesData[] {
    let val: MathProblemTypesData[] = Object.values(MATHProplemActions);
    return val;
  }

  addNumber(): void {
    this.params.numbers.push("" as unknown as number);
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