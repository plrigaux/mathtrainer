import { MathProblem } from './mathGenerator';
import { GenerateRange, MathProblemTypes, Relation } from './mathProblemTypes';

class Worksheets {

    addSingleDigitNumber() {

        let generateRange: GenerateRange[] = [
            { min: 0, max: 10 },
            { min: 0, max: 10 }
        ];

        MathProblem.getListofRandomNumber(generateRange, MathProblemTypes.ADDITION, null);
    }

    addSingleDigitNumberSum10orLess() {
        let generateRange: GenerateRange[] = [
            { min: 0, max: 10 },
            { min: 0, max: 10 }
        ];

        let answer = {
            value : 10,
            relation : Relation.LESS
        }

        MathProblem.getListofRandomNumber(generateRange, MathProblemTypes.ADDITION, answer);
    }
}