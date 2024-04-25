import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MathProblem } from 'src/app/math-generator/mathProblem';
import { Worksheets } from 'src/app/math-generator/worksheets';

@Component({
  selector: 'app-test-generator',
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
  templateUrl: './test-generator.component.html',
  styleUrl: './test-generator.component.scss'
})
export class TestGeneratorComponent implements OnInit {

  generation = 20

  displayedColumns: string[] = ['position', 'question', 'answer'];
  mathProblems: MathProblem[] = []

  ngOnInit(): void {
    this.generate();
  }

  generate() {


    let mathProblems: MathProblem[] = []
    for (var i = 0; i < this.generation; ++i) {
      let mathProblem: MathProblem = Worksheets.addSingleDigitNumberNoCarry();
      mathProblems.push(mathProblem);
    }

    console.log("generate", mathProblems)

    this.mathProblems = mathProblems
  }
}