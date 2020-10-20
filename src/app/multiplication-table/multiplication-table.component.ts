import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, UrlSegment } from '@angular/router';

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
  addition = false
  operator : string = null

  constructor(private route: ActivatedRoute) {
    let start = 1;
    let end = 12;

    this.tables = Array(end - start + 1).fill(null).map((_, idx: number) => start + idx)


  }

  ngOnInit(): void {
    this.route.url.subscribe((x: UrlSegment[]) => {
      if (x[0].path === "additiontable") {
        this.addition = true;
        this.calculate = this.calculateAddition
        this.operator = "+"
      } else {
        this.addition = false;
        this.calculate = this.calculateMultiplication
        this.operator = "x"
      }
    }
    );
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

  calculate : (num1 : number, num2 : number) => number = null;

  calculateAddition(num1 : number, num2 : number) : number {
    return num1 + num2
  }

  calculateMultiplication(num1 : number, num2 : number) {
    return num1 * num2
  }
}
