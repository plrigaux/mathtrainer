import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiplication-table',
  templateUrl: './multiplication-table.component.html',
  styleUrls: ['./multiplication-table.component.scss']
})
export class MultiplicationTableComponent implements OnInit {


  tables: number[]
  tablesSelected: number[] = []

  column: number = null
  row: number = null

  constructor() {
    let start = 1;
    let end = 12;

    this.tables = Array(end - start + 1).fill(null).map((_, idx: number) => start + idx)
  }

  ngOnInit(): void {
  }

  onMouseHover(c: number, r: number) {
    this.column = c;
    this.row = r;
  }

  calculateClasses(col: number, row: number) {
    if (row == this.row) {
      if (col == this.column) {
        return "onHover"
      } else if (col < this.column) {
        return "inPath"
      }
    } else if (row < this.row) {
      if (col == this.column) {
        return "inPath"
      }
    }
    return null
  }

  isColRowSet(): boolean {
    return this.row != null && this.column != null;
  }
}
