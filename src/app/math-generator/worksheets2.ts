import { MathGenerator } from './mathGenerator';
import { MathProblem } from "./mathProblem";
import { GenerateRange, MathProblemTypes, Relation, Answer } from './mathProblemTypes';

export class Worksheets2 {


    static multiplySingleDigitNumber(): MathProblem {

        let generateRange: GenerateRange[] = [
            { min: 0, max: 10 },
            { min: 0, max: 10 }
        ];

        return MathGenerator.getListofRandomNumber(generateRange, MathProblemTypes.MULTIPLICATION);
    }

   
}

