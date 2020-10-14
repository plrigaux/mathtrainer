import { MathGenerator } from './mathGenerator';
import { MathProblem } from "./mathProblem";
import { GenerateRange, MathProblemTypes, Relation, Answer } from './mathProblemTypes';
import { WorksheetsItem, MultiParam } from './worksheetsDefinitions'

export class Worksheets2 {


    static multiplySingleDigitNumber(): MathProblem {

        let generateRange: GenerateRange[] = [
            { min: 0, max: 10 },
            { min: 0, max: 10 }
        ];

        return MathGenerator.getListofRandomNumber(generateRange, MathProblemTypes.MULTIPLICATION);
    }

    static multiplicationTable(parameters: MultiParam): MathProblem {

        if (!parameters) {
            console.warn(`Parameters == null or undef`);
        }

        let parametersType: MultiParam = parameters as MultiParam;

        if (parametersType._next == null) {
            parametersType._next = 0;
        } else {
            parametersType._next = parametersType._next + 1
        }

        if (!parametersType._series) {
            parametersType._series = MathGenerator.getSeries(MathProblemTypes.MULTIPLICATION, parametersType.number, parametersType.start, parametersType.end);
        }

        return parametersType._series[parametersType._next % parametersType._series.length];
    }
}
