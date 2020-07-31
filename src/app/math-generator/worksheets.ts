import { MathProblem, MathGenerator } from './mathGenerator';
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

        return MathGenerator.getListofRandomNumber(generateRange, MathProblemTypes.ADDITION);
    }

    //Adding two single-digit numbers - sum 10 or less
    addTowSingleDigitNumberSum10orLess() : MathProblem {


        let answer : number = MathGenerator.getRandomIntInclusive(2, 9);

        let answerValStr = answer.toString();

        let unit = answerValStr[answerValStr.length - 1]

        let number2 : number = MathGenerator.getRandomIntInclusive(0, parseInt(unit, 10));
        let number1 : number = answer - number2;
        
        let mp : MathProblem = new MathProblem(MathProblemTypes.ADDITION, [number1, number2]);
        
        mp.shuffle();

        return mp;
    }

    //Add a 2-digit number and a 1-digit number mentally - within the same ten
    addDoubleDigitWithSingleDigitNumberSum10orLess() : MathProblem {
        let answer : number = MathGenerator.getRandomIntInclusive(10, 99);

        let answerValStr = answer.toString();

        let unit = answerValStr[answerValStr.length - 1]

        let number2 : number = MathGenerator.getRandomIntInclusive(0, parseInt(unit, 10));
        let number1 : number = answer - number2;
        
        let mp : MathProblem = new MathProblem(MathProblemTypes.ADDITION, [number1, number2]);
        
        mp.shuffle();

        return mp;
    }

    //Add a 2-digit number and a 1-digit number in columns
    addTowDoubleDigitNumberNoCarry() : MathProblem {


        let answerUnit : number = MathGenerator.getRandomIntInclusive(0, 9);
        let answerTen : number = MathGenerator.getRandomIntInclusive(1, 9);

        
        let answer : number = MathGenerator.getRandomIntInclusive(10, 99);

        let answerValStr = answer.toString();

        let unit = answerValStr[answerValStr.length - 1]

        let number2 : number = MathGenerator.getRandomIntInclusive(0, parseInt(unit, 10));
        let number1 : number = answer - number2;
        
        let mp : MathProblem = new MathProblem(MathProblemTypes.ADDITION, [number1, number2]);
        
        mp.shuffle();

        return mp;
    }
//Add two 2-digit numbers in columns - no carrying


}
