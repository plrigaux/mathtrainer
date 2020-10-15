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

    static multiplicationTable(worksheetsItem: WorksheetsItem): MathProblem {

        let parameters = worksheetsItem.parameters

        if (!parameters) {
            console.warn(`Parameters == null or undef`);
        }

        let parametersType: MultiParam = parameters as MultiParam;

        if (worksheetsItem._context == null) {

            let series: MathProblem[] = MathGenerator.getSeries(parameters.problemTypes,
                parametersType.numbers, parametersType.start, parametersType.end, parameters.shuffle);

            worksheetsItem._context = {
                next: 0,
                series: series
            }
        } else {
            worksheetsItem._context["next"]++
        }

        return worksheetsItem._context["series"][worksheetsItem._context["next"] % worksheetsItem._context["series"].length];
    }
}
