import { MathProblem } from './mathGenerator';
import { GenerateRange, MathProblemTypes, Relation } from './mathProblemTypes';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Worksheets {



    addSingleDigitNumber() : number [] {

        let generateRange: GenerateRange[] = [
            { min: 0, max: 10 },
            { min: 0, max: 10 }
        ];

        return MathProblem.getListofRandomNumber(generateRange, MathProblemTypes.ADDITION, null);
    }

    addSingleDigitNumberSum10orLess() {
        let generateRange: GenerateRange[] = [
            { min: 0, max: 10 },
            { min: 0, max: 10 }
        ];

        let answer = {
            value: 10,
            relation: Relation.LESS
        };

        MathProblem.getListofRandomNumber(generateRange, MathProblemTypes.ADDITION, answer);
    }
}
