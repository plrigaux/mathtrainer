import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MathProblem } from 'src/app/math-generator/mathProblem';
import { Worksheets } from 'src/app/math-generator/worksheets';

@Component({
  selector: 'app-test-generator',
  standalone: true,
  imports: [MatButtonModule, MatTableModule, MatSortModule],
  templateUrl: './test-generator.component.html',
  styleUrl: './test-generator.component.scss'
})
export class TestGeneratorComponent implements OnInit , AfterViewInit{

  generation = 20

  displayedColumns: string[] = ['position', 'question', 'answer'];
  mathProblems = new MatTableDataSource([])
  mathProblemsOrg = new MatTableDataSource([])

  @ViewChild('table1') sort1: MatSort;
  @ViewChild('table2') sort2: MatSort;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  ngOnInit(): void {
    this.generate();
  }

  ngAfterViewInit() {
    this.mathProblems.sort = this.sort1;
    this.mathProblemsOrg.sort = this.sort2;
  }

  generate() {


    let mathProblems: MathProblem[] = []
    let mathProblemsOrg: MathProblem[] = []
    for (var i = 0; i < this.generation; ++i) {
      let mathProblem: MathProblem = Worksheets.addSingleDigitNumberNoCarry2();
      mathProblems.push(mathProblem);

      let mathProblem2: MathProblem = Worksheets.addSingleDigitNumberNoCarry();
      mathProblemsOrg.push(mathProblem2);
    }

    console.log("generate", mathProblems)


    this.mathProblems.data = mathProblems
    this.mathProblemsOrg.data = mathProblemsOrg
  }

   /** Announce the change in sort state for assistive technology. */
   /*
   announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
  */
}