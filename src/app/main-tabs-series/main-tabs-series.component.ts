import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-tabs-series',
  templateUrl: './main-tabs-series.component.html',
  styleUrls: ['./main-tabs-series.component.scss']
})
export class MainTabsSeriesComponent implements OnInit {


  tables : number[]
  tablesSelected : number[] = []

  constructor() { 
    let start = 1;
    let end = 12;

    this.tables = Array(end - start + 1).fill(null).map((_, idx : number) => start + idx)
  }

  ngOnInit(): void {
  }

  clear() {
    this.tablesSelected = [];
  }

  toDisable() : boolean {
    return this.tablesSelected.length == 0
  }

}
