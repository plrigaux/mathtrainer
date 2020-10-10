import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication-table',
  templateUrl: './multiplication-table.component.html',
  styleUrls: ['./multiplication-table.component.scss']
})
export class MultiplicationTableComponent implements OnInit {


  tables : number[]
  tablesSelected : number[] = []

  constructor() { 
    let start = 1;
    let end = 12;

    this.tables = Array(end - start + 1).fill(null).map((_, idx : number) => start + idx)
  }


  ngOnInit(): void {
  }

}
