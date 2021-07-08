import { MathGenerator } from './mathGenerator';
import { MathProblem } from "./mathProblem";
import { GenerateRange, MathProblemTypes, Relation, Answer } from './mathProblemTypes';
import { RangeManager, Range } from './rangeManager';
import { WorksheetsItem, MultiParam } from './worksheetsDefinitions'

export class Worksheets2 {
    static [index: string] : any;

    static multiplySingleDigitNumber(): MathProblem {

        let generateRange: GenerateRange[] = [
            { min: 0, max: 10 },
            { min: 0, max: 10 }
        ];

        return MathGenerator.getListofRandomNumber(generateRange, MathProblemTypes.MULTIPLICATION);
    }

    static multiplicationTable(worksheetsItem: WorksheetsItem): MathProblem {

        let parameters = worksheetsItem.parameters

        if (!parameters) {
            console.warn(`Parameters == null or undefined`);
        }

        let parametersType: MultiParam = parameters as MultiParam;

        let context: MultiplicationTableSaveContext = worksheetsItem._context as MultiplicationTableSaveContext

        if (context == null) {

            let numbersRange1: Range[] = RangeManager.rangeParser(parametersType.numbers1, true)

            let numbersRange2: Range[] = RangeManager.rangeParser(parametersType.numbers2, true)

            let series: MathProblem[] = MathGenerator.getSeries(parameters.problemTypes, numbersRange1, numbersRange2, parameters.shuffle);

            context = {
                next: 0,
                series: series
            };

            worksheetsItem._context = context
        } else {
            context.next++
        }

        let mathProblem = context.series[context.next % context.series.length];

        return mathProblem
    }
}

interface MultiplicationTableSaveContext {
    next: number;
    series: MathProblem[]
}