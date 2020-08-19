import { MathProblem, MathGenerator } from './mathGenerator';
import { GenerateRange, MathProblemTypes, Relation, Answer } from './mathProblemTypes';
import { Injectable } from '@angular/core';
import { Config } from '../config';

@Injectable({
    providedIn: 'root'
})
export class Worksheets {


    static addSingleDigitNumber(): MathProblem {

        let generateRange: GenerateRange[] = [
            { min: 0, max: 10 },
            { min: 0, max: 10 }
        ];

        return MathGenerator.getListofRandomNumber(generateRange, MathProblemTypes.ADDITION);
    }

    static addSingleDigitNumberNoCarry(): MathProblem {

        let prog = {
            answer: [{ min: 1, max: 9 }],
            number: [{ min: 1, max: 9 }],
            mathProblemType: MathProblemTypes.ADDITION
        };

        return Worksheets.addTowXDigitNumbersNoCarryProg(prog);
    }

    //Adding two single-digit numbers - sum 10 or less
    static addTowSingleDigitNumberSum10orLess(): MathProblem {
        return Worksheets.addTowXDigitNumbersNoCarry(1);
    }

    //Add a 2-digit number and a 1-digit number mentally - within the same ten
    static addDoubleDigitWithSingleDigitNumberNoCarry(): MathProblem {

        let prog = {
            answer: [{ min: 1, max: 9 }, { min: 0, max: 9 }],
            number: [{ min: 0, max: 0 }, { min: 0, max: 9 }],
            mathProblemType: MathProblemTypes.ADDITION
        };

        return Worksheets.addTowXDigitNumbersNoCarryProg(prog);
    }

    //Add a 2-digit number and a 1-digit number in columns
    static addTowDoubleDigitNumbersNoCarry(): MathProblem {
        return Worksheets.addTowXDigitNumbersNoCarry(2);
    }

    //Add a 2-digit number and a 1-digit number in columns
    static addTowXDigitNumbersNoCarry(xDigit: number): MathProblem {
        let prog = new WorksheetProgram(xDigit, MathProblemTypes.ADDITION);

        for (let i = 0; i < xDigit; ++i) {
            let instruction: WorksheetProgramInstruction = {
                min: i == 0 ? 1 : 0,
                max: 9
            }

            prog.answer[i] = instruction;
            prog.number[i] = instruction;
        }

        return Worksheets.addTowXDigitNumbersNoCarryProg(prog);
    }

    static addTowXDigitNumbersNoCarryProg(prog: WorksheetProgram): MathProblem {

        let answer: number = 0;
        let number2: number = 0;
        let xDigit = prog.answer.length;

        for (let i = 0; i < xDigit;) {
            let a = MathGenerator.getRandomIntInclusive(prog.answer[i].min, prog.answer[i].max);
            
            let valmax = Math.min(a, prog.number[i].max)
            let n = MathGenerator.getRandomIntInclusive(prog.number[i].min, valmax);

            let pow = xDigit - ++i;
            answer += a * (10 ** pow);
            number2 += n * (10 ** pow);
        }

        let number1: number = answer - number2;

        let mp: MathProblem = new MathProblem(prog.mathProblemType, answer, [number1, number2]);

        //mp.shuffle();

        return mp;
    }

    static addTowDigitNumberWithTowDigitNumberWithCarry(): MathProblem {
        let prog = {
            answer: [{ min: 1, max: 9 }, { min: 0, max: 8 }],
            number: [{ min: 1, max: 9 }, { min: 0, max: 9 }],
            mathProblemType: MathProblemTypes.ADDITION
        };

        return Worksheets.addTowXDigitNumbersWithCarry(prog);
    }
    //TODO test
    static addTowXDigitNumbersWithCarry(prog: WorksheetProgram): MathProblem {

        let answer: number = 0;
        let number2: number = 0;
        let xDigit = prog.answer.length;

        for (let i = 0; i < xDigit;) {

            let a = MathGenerator.getRandomIntInclusive(prog.answer[i].min, prog.answer[i].max);

            let valmin : number = prog.number[i].min;
            let valmax : number = prog.number[i].max;

            if ( i + 1 >= xDigit ) {
                valmin = a + 1;
            } else {
                valmax = Math.min(a - 1, prog.number[i].max)
                valmin = Math.min(valmin, valmax)
            }

            let n = MathGenerator.getRandomIntInclusive(valmin, valmax);

            let pow = xDigit - ++i;
            answer += a * (10 ** pow);
            number2 += n * (10 ** pow);
        }

        let number1: number = answer - number2;

        let mp: MathProblem = new MathProblem(prog.mathProblemType, answer, [number1, number2]);

        mp.shuffle();

        return mp;
    }

    static addTwoNumbersAnswerBellow20(): MathProblem {
        let answer = MathGenerator.getRandomIntInclusive(2, 19);
        let number2 = MathGenerator.getRandomIntInclusive(0, answer);

        let number1: number = answer - number2;

        let mp: MathProblem = new MathProblem(MathProblemTypes.ADDITION, answer, [number1, number2]);

        mp.shuffle();
        return mp;
    }

    static addTwoNumbersAnswerBetwen10And20(): MathProblem {
        let answer = MathGenerator.getRandomIntInclusive(10, 20);
        let number2 = MathGenerator.getRandomIntInclusive(0, answer);

        let number1: number = answer - number2;

        let mp: MathProblem = new MathProblem(MathProblemTypes.ADDITION, answer, [number1, number2]);

        mp.shuffle();
        return mp;
    }

    //Subtraction facts - numbers up to 10
    static subtractOneDigitNumberFromOneDigitNumberWithoutRegrouping(): MathProblem {

        let prog = {
            answer: [{ min: 1, max: 9 }],
            number: [{ min: 0, max: 9 }],
            mathProblemType: MathProblemTypes.SUBTRACTION
        };

        return Worksheets.subtractXDigitNumberFromXDigitNumberWithoutRegrouping(prog);
    }
    //Subtract multiples of 10
    //Subtract a one-digit number from a two-digit number - without regrouping
    static subtractOneDigitNumberFromTwoDigitNumberWithoutRegrouping(): MathProblem {

        let prog = {
            answer: [{ min: 1, max: 9 }, { min: 0, max: 9 }],
            number: [{ min: 0, max: 0 }, { min: 0, max: 9 }],
            mathProblemType: MathProblemTypes.SUBTRACTION
        };

        return Worksheets.subtractXDigitNumberFromXDigitNumberWithoutRegrouping(prog);
    }

    //Subtract a one-digit number from a two-digit number - with regrouping
    static subtractOneDigitNumberFromTwoDigitNumberWithRegrouping(): MathProblem {

        let prog = {
            answer: [{ min: 1, max: 9 }, { min: 0, max: 8 }],
            number: [{ min: 0, max: 0 }, { min: 0, max: 9 }],
            mathProblemType: MathProblemTypes.SUBTRACTION
        };

        return Worksheets.subtractXDigitNumberFromXDigitNumberWithRegrouping(prog);
    }

    //Subtract two two-digit numbers - without regrouping
    static subtractTowDigitNumberFromTwoDigitNumberWithoutRegrouping(): MathProblem {

        let prog = {
            answer: [{ min: 1, max: 9 }, { min: 0, max: 9 }],
            number: [{ min: 0, max: 0 }, { min: 0, max: 9 }],
            mathProblemType: MathProblemTypes.SUBTRACTION
        };

        return Worksheets.subtractXDigitNumberFromXDigitNumberWithoutRegrouping(prog);
    }

    //Subtract two two-digit numbers - with regrouping
    static subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping(): MathProblem {

        let prog = {
            answer: [{ min: 2, max: 9 }, { min: 0, max: 8 }],
            number: [{ min: 1, max: 9 }, { min: 0, max: 9 }],
            mathProblemType: MathProblemTypes.SUBTRACTION
        };

        return Worksheets.subtractXDigitNumberFromXDigitNumberWithRegrouping(prog);
    }

    static subtractXDigitNumberFromXDigitNumberWithoutRegrouping(prog: WorksheetProgram): MathProblem {
        return Worksheets.subtractXDigitNumberFromXDigitNumber(prog, false);
    }

    static subtractXDigitNumberFromXDigitNumberWithRegrouping(prog: WorksheetProgram): MathProblem {
        return Worksheets.subtractXDigitNumberFromXDigitNumber(prog, true);
    }

    static subtractXDigitNumberFromXDigitNumber(prog: WorksheetProgram, withRegrouping: boolean): MathProblem {
        let answer: number = 0;
        let number2: number = 0;
        let xDigit = prog.answer.length;

        for (let i = 0; i < xDigit;) {

            let a = MathGenerator.getRandomIntInclusive(prog.answer[i].min, prog.answer[i].max);
            let valmin: number = prog.number[i].min;
            let valmax: number = prog.number[i].max;

            if (withRegrouping) {
                if (i == 0) { //is first
                    valmax = Math.min(prog.number[i].max, a - 1);
                } else {
                    valmin = a + 1
                };
            } else {
                if (i + 1 >= xDigit) { // is last
                    valmax = a;
                } 
            }

            let n = MathGenerator.getRandomIntInclusive(valmin, valmax);

            let pow = xDigit - ++i;
            answer += a * (10 ** pow);
            number2 += n * (10 ** pow);
        }

        let number1: number = answer - number2;

        let mp: MathProblem = new MathProblem(prog.mathProblemType, number1, [answer, number2]);

        return mp;
    }
}

export class WorksheetProgram {
    answer: WorksheetProgramInstruction[]
    number: WorksheetProgramInstruction[]
    mathProblemType: MathProblemTypes

    constructor(xDigit: number, mathProblemType: MathProblemTypes) {
        this.answer = new Array(xDigit);
        this.number = new Array(xDigit);
        mathProblemType = mathProblemType;
    }
}

export class WorksheetProgramInstruction {
    min: number;
    max: number
}