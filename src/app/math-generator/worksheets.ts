import { MathProblem } from './mathGenerator';
import { GenerateRange, MathProblemTypes, Relation, Answer } from './mathProblemTypes';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Worksheets {



    addSingleDigitNumber() : MathProblem {

        let generateRange: GenerateRange[] = [
            { min: 0, max: 10 },
            { min: 0, max: 10 }
        ];

        return MathProblem.getListofRandomNumber(generateRange, MathProblemTypes.ADDITION);
    }

    //Adding two single-digit numbers - sum 10 or less
    addSingleDigitNumberSum10orLess() : MathProblem {
        let generateRange: GenerateRange[] = [
            { min: 2, max: 10 }
            //,
            //{ min: 0, max: 10 }
        ];

        let answer : Answer = {
            min: 0,
            max: 10,
            relation: Relation.LESS_EQUALS
        };


        let mp : MathProblem = MathProblem.getListofRandomNumber(generateRange, MathProblemTypes.ADDITION, answer);

        let answerVal = mp.values[0];

        generateRange = [
            { min: 0, max: answerVal }
        ];

        mp = MathProblem.getListofRandomNumber(generateRange, MathProblemTypes.ADDITION, answer);

        let otherVal : number = answerVal - mp.values[0];
        
        mp.values.push(otherVal);

        return mp;
    }

    //Add a 2-digit number and a 1-digit number mentally - within the same ten

    //Add a 2-digit number and a 1-digit number in columns
//Add two 2-digit numbers in columns - no carrying

}
