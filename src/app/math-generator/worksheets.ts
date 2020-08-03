import { MathProblem, MathGenerator } from './mathGenerator';
import { GenerateRange, MathProblemTypes, Relation, Answer } from './mathProblemTypes';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class Worksheets {

    addSingleDigitNumber(): MathProblem {

        let generateRange: GenerateRange[] = [
            { min: 0, max: 10 },
            { min: 0, max: 10 }
        ];

        return MathGenerator.getListofRandomNumber(generateRange, MathProblemTypes.ADDITION);
    }

    //Adding two single-digit numbers - sum 10 or less
    addTowSingleDigitNumberSum10orLess(): MathProblem {
        return this.addTowXDigitNumbersNoCarry(1);
    }

    //Add a 2-digit number and a 1-digit number mentally - within the same ten
    addDoubleDigitWithSingleDigitNumberSum10orLess(): MathProblem {

        let prog = {
            answer: [{ min: 1, max: 9 }, { min: 0, max: 9 }],
            number: [{ min: 0, max: 0 }, { min: 1, max: 9 }]
        };

        return this.addTowXDigitNumbersNoCarryProg(prog);
    }

    //Add a 2-digit number and a 1-digit number in columns
    addTowDoubleDigitNumbersNoCarry(): MathProblem {
        return this.addTowXDigitNumbersNoCarry(2);
    }

    //Add a 2-digit number and a 1-digit number in columns
    addTowXDigitNumbersNoCarry(xDigit: number): MathProblem {
        let prog = new WorksheetProgram(xDigit);

        for (let i = 0; i < xDigit; ++i) {
            let instruction: WorksheetProgramInstruction = {
                min: i == 0 ? 1 : 0,
                max: 9
            }

            prog.answer[i] = instruction;
            prog.number[i] = instruction;
        }

        return this.addTowXDigitNumbersNoCarryProg(prog);
    }

    addTowXDigitNumbersNoCarryProg(prog: WorksheetProgram): MathProblem {

        let answer: number = 0;
        let number2: number = 0;
        let xDigit = prog.answer.length;

        for (let i = 0; i < xDigit;) {

            let a = MathGenerator.getRandomIntInclusive(prog.answer[i].min, prog.answer[i].max);
            let n = MathGenerator.getRandomIntInclusive(prog.number[i].min, prog.number[i].max);

            if (a < n) {
                let tmp = a;
                a = n;
                n = tmp;
            }

            let pow = xDigit - ++i;
            answer += a * (10 ** pow);
            number2 += n * (10 ** pow);
        }

        let number1: number = answer - number2;

        let mp: MathProblem = new MathProblem(MathProblemTypes.ADDITION, [number1, number2]);

        mp.shuffle();

        return mp;
    }
    //Add two 2-digit numbers in columns - no carrying
}

export class WorksheetProgram {
    answer: WorksheetProgramInstruction[]
    number: WorksheetProgramInstruction[]

    constructor(xDigit : number) {
        this.answer = new Array(xDigit);
        this.number = new Array(xDigit);
    }
}

export class WorksheetProgramInstruction {
    min: number;
    max: number
}