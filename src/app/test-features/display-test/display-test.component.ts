import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service'
import { MathQuestionService, MathQuestionNotifier, QuestionStatus } from '../../services/math-question.service';
import { Config, CONFIG, MATH_EXERCICISES_STORE, GENERATORS_KEY } from '../../services/config';
import { ColumnAnswerMode } from 'src/app/column-answer/column-answer.component';
import { WorksheetsItem } from '../../math-generator/worksheetsMap';
import { Worksheets } from '../../math-generator/worksheets';
import { MathProblem } from "../../math-generator/mathProblem";
import { MathProblemTypes } from '../../math-generator/mathProblemTypes';

@Component({
  selector: 'app-display-test',
  templateUrl: './display-test.component.html',
  styleUrls: ['./display-test.component.scss']
})
export class DisplayTestComponent implements OnInit {
  progress: number;
  successCount: number;
  needReset: boolean = false;


  configs: Config[] = [{ ...CONFIG }, { ...CONFIG }, { ...CONFIG }, { ...CONFIG }]

  constructor(private configService: ConfigService,
    private mathQuestionService: MathQuestionService) {
    this.progress = 0;
    this.successCount = 0;


    this.configs[1].orientation = "HORIZONTAL";
    this.configs[2].answerMode = ColumnAnswerMode.COLUMNS;
    this.configs[3] = { ...this.configs[3], ...{ answerMode: ColumnAnswerMode.COLUMNS } };



    this.configs[3].generators = [{
      label: "string",
      func: Worksheets.addTowDigitNumberWithTowDigitNumberWithCarry,
      funcName: "string",
      mathProblemType: MathProblemTypes.DIVISION,
      code: "string"
    }]
  }

  ngOnInit(): void {

  }


}