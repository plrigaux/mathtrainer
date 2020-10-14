import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorksheetsItem, MultiParam } from '../math-generator/worksheetsDefinitions';
import { Worksheets2 } from '../math-generator/worksheets2'
import { ConfigService, ConfigServiceInfo } from '../services/config.service'
import { Config } from '../services/config';
import { Subscription } from 'rxjs';
import { MathProblemTypes } from '../math-generator/mathProblemTypes';

@Component({
  selector: 'app-main-tabs-series',
  templateUrl: './main-tabs-series.component.html',
  styleUrls: ['./main-tabs-series.component.scss']
})
export class MainTabsSeriesComponent implements OnInit {


  tables: number[]
  tablesSelected: number[] = []
  start: number;
  end: number;
  private config: Config;
  private myEventSubscriptions: Subscription[] = [];

  constructor(private router: Router, private configService: ConfigService) {

    let start = 1;
    let end = 12;

    this.tables = Array(end - start + 1).fill(null).map((_, idx: number) => start + idx)

    this.start = start;
    this.end = end;
  }

  ngOnInit(): void {
    this.myEventSubscriptions.push(this.configService.subscribe(
      (cfi: ConfigServiceInfo) => {
        this.config = cfi.config;
        this.config.generators.forEach(worksheetsItem => {
          this.fillPageData(worksheetsItem);
        });
      }
    ));
  }

  fillPageData(worksheetsItem: WorksheetsItem) {
    if (worksheetsItem.func == Worksheets2.multiplicationTable) {

      if (worksheetsItem?.parameters?.start) {
        this.start = worksheetsItem.parameters.start
      }

      if (worksheetsItem?.parameters?.end) {
        this.end = worksheetsItem.parameters.end
      }

      if (worksheetsItem?.parameters?.number) {
        this.tablesSelected.push(worksheetsItem?.parameters?.number)
      }
    }
  }

  clear() {
    this.tablesSelected = [];
  }

  toDisable(): boolean {
    return this.tablesSelected.length == 0
  }

  goToProblems() {
    this.setUpConfig();
    this.router.navigate(['/problems']);
  }

  setUpConfig() {

    let multiParam: MultiParam = {
      number: this.tablesSelected[0],
      start: this.start,
      end: this.end
    }

    let generators: WorksheetsItem[] = new Array(1);

    let wi: WorksheetsItem = {
      label: "no",
      func: Worksheets2.multiplicationTable,
      code: "MultiSeries1",
      funcName: Worksheets2.multiplicationTable.name,
      mathProblemType: MathProblemTypes.MULTIPLICATION,
      parameters: multiParam
    };

    generators[0] = wi;
    this.config.generators = generators
    this.configService.next(this.config, true)

  }

  isDisabled(): boolean {
    //console.log(`this.tablesSelected.length > 0 ${this.tablesSelected.length > 0}`)
    return this.tablesSelected.length == 0
  }
}
