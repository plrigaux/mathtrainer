import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service'
import { MathQuestionService, MathQuestionNotifier, QuestionStatus } from '../../services/math-question.service';
import { Config, CONFIG, MATH_EXERCICISES_STORE, GENERATORS_KEY } from '../../services/config';
import { ColumnAnswerMode } from 'src/app/column-answer/column-answer.component';
import { WorksheetsItem } from '../../math-generator/worksheetsDefinitions';
import { Worksheets } from '../../math-generator/worksheets';
import { MathProblem } from "../../math-generator/mathProblem";
import { MathProblemTypes, GenerateRange } from '../../math-generator/mathProblemTypes';
import { MathGenerator } from '../../math-generator/mathGenerator';

@Component({
  selector: 'app-display-test',
  templateUrl: './display-test.component.html',
  styleUrls: ['./display-test.component.scss']
})
export class DisplayTestComponent implements OnInit {
  progress: number;
  successCount: number;
  needReset: boolean = false;


  configs: Config[] = [
    {
      ...CONFIG,
      answerMode: ColumnAnswerMode.COLUMNS,
      generators: [{
        func: DisplayTestComponent.testLongNum,
      } as unknown as WorksheetsItem]
    },
    {
      ...CONFIG,
      answerMode: ColumnAnswerMode.NORMAL,
      generators: [{
        func: DisplayTestComponent.testLongNum,
      } as unknown as WorksheetsItem]
    },
    {
      ...CONFIG,
      answerMode: ColumnAnswerMode.COLUMNS,
      generators: [{
        func: Worksheets.addTowDigitNumberWithTowDigitNumberWithCarry,
      } as unknown as WorksheetsItem]
    },
    {
      ...CONFIG,
      orientation: "HORIZONTAL"
    }, {
      ...CONFIG,
      answerMode: ColumnAnswerMode.COLUMNS,
    }, { ...CONFIG },
  ]

  constructor(private configService: ConfigService,
    private mathQuestionService: MathQuestionService) {
    this.progress = 0;
    this.successCount = 0;
  }

  ngOnInit(): void {

  }

  static testLongNum(): MathProblem {

    let generateRange: GenerateRange[] = [
      { min: 1000000, max: 10000000 },
      { min: 1000000, max: 10000000 }
    ];

    return MathGenerator.getListofRandomNumber(generateRange, MathProblemTypes.ADDITION);

  }
}