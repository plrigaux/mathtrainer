import { MathGenerator } from './mathGenerator';
import { MathProblem } from "./mathProblem";
import { GenerateRange, MathProblemTypes, Relation, Answer } from './mathProblemTypes';

export class Worksheets {


    static addSingleDigitNumber(): MathProblem {

        let generateRange: GenerateRange[] = [
            { min: 0, max: 10 },
            { min: 1, max: 10 }
        ];

        return MathGenerator.getListofRandomNumber(generateRange, MathProblemTypes.ADDITION);
    }

    static testLongNum(): MathProblem {

        let generateRange: GenerateRange[] = [
            { min: 10000, max: 100000 },
            { min: 10000, max: 100000 }
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
            let first = i === 0;

            let instruction: WorksheetProgramInstruction = {
                min: 0,
                max: 9
            }

            prog.answer[i] = instruction;
            prog.number[i] = { ...instruction };

            if (first) {
                prog.answer[i].min = 2;
                prog.number[i].min = 1;
            } else {
                prog.answer[i].min = 1;
            }
        }
        return Worksheets.addTowXDigitNumbersNoCarryProg(prog);
    }

    static addTowXDigitNumbersNoCarryProg(prog: WorksheetProgram): MathProblem {

        let answer: number = 0;
        let number2: number = 0;
        let xDigit = prog.answer.length;


        for (let i = 0; i < xDigit;) {
            let first = i == 0;

            let a = MathGenerator.getRandomIntInclusive(prog.answer[i].min, prog.answer[i].max);

            let valmax = Math.min(first ? a - 1 : a, prog.number[i].max)
            let valmin = first ? 1 : prog.number[i].min

            let n = MathGenerator.getRandomIntInclusive(valmin, valmax);

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
            answer: [{ min: 3, max: 9 }, { min: 0, max: 8 }],
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
            let first = i === 0;
            let last = i + 1 >= xDigit;

            let a = MathGenerator.getRandomIntInclusive(prog.answer[i].min, prog.answer[i].max);

            let valmin: number = prog.number[i].min;
            let valmax: number = prog.number[i].max;

            if (first) {
                valmax = Math.min(a - 2, prog.number[i].max)
            } if (last) {
                valmin = a + 1;
            } else {
                valmax = Math.min(a - 1, prog.number[i].max)
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

    static subtractAnswerbelow10(): MathProblem {

        let highNumber = MathGenerator.getRandomIntInclusive(2, 9 + 9);
        let min = (highNumber % 10) + 1
        let answer = MathGenerator.getRandomIntInclusive(min, 9);
        
        if (highNumber < answer) {
            let tmp = highNumber;
            highNumber = answer;
            answer = tmp;
        }

        let number = highNumber - answer;

        let mp: MathProblem = new MathProblem(MathProblemTypes.SUBTRACTION, answer, [highNumber, number]);

        return mp;
    }

    static subtractAnswerbelow10_1(): MathProblem {
        let answer = MathGenerator.getRandomIntInclusive(1, 9);
        let number2 = MathGenerator.getRandomIntInclusive(0, 9);
        let number1 = answer + number2

        let mp: MathProblem = new MathProblem(MathProblemTypes.SUBTRACTION, answer, [number1, number2]);

        return mp;
    }

    //Subtract multiples of 10
    static subtractMultiplesOf10(): MathProblem {

        let prog = {
            answer: [{ min: 1, max: 9 }, { min: 0, max: 0 }],
            number: [{ min: 1, max: 9 }, { min: 0, max: 0 }],
            mathProblemType: MathProblemTypes.SUBTRACTION
        };

        return Worksheets.subtractXDigitNumberFromXDigitNumberWithoutRegrouping(prog);
    }

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
            number: [{ min: 0, max: 0 }, { min: 1, max: 9 }],
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
        let number1: number = 0;
        let number2: number = 0;
        let xDigit = prog.answer.length;

        for (let i = 0; i < xDigit;) {

            let a = MathGenerator.getRandomIntInclusive(prog.answer[i].min, prog.answer[i].max);
            let valmin: number = prog.number[i].min;
            let valmax: number = prog.number[i].max;
            let n = MathGenerator.getRandomIntInclusive(valmin, valmax);

            let isFirst = i == 0;
            let isLast = i + 1 >= xDigit

            if (isFirst) {
                if (a < n) {
                    let tmp = a;
                    a = n
                    n = tmp
                }

                if (withRegrouping) {
                    if (a === n) { //if equals, it will go bellow 0 
                        ++a;
                    }
                }
            } else {
                if (withRegrouping) {
                    if (a === n) { //if equals there are no regroupping
                        ++n
                    } else if (a > n) {
                        let tmp = a;
                        a = n
                        n = tmp
                    }
                } else {
                    if (a < n) {
                        let tmp = a;
                        a = n
                        n = tmp
                    }
                }
            }

            let pow = xDigit - ++i;
            number1 += a * (10 ** pow);
            number2 += n * (10 ** pow);
        }

        let answer: number = number1 - number2;

        let mp: MathProblem = new MathProblem(prog.mathProblemType, answer, [number1, number2]);

        return mp;
    }

    static subtractXDigitNumberFromXDigitNumber_back(prog: WorksheetProgram, withRegrouping: boolean): MathProblem {
        let number1: number = 0;
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
            } else {/*
                if (i + 1 >= xDigit) { // is last
                    valmax = a;
                } else {
                    valmax = Math.min(prog.number[i].max, a - 1);
                }*/
                valmax = a
            }

            let n = MathGenerator.getRandomIntInclusive(valmin, valmax);

            let pow = xDigit - ++i;
            number1 += a * (10 ** pow);
            number2 += n * (10 ** pow);
        }

        let answer: number = number1 - number2;

        let mp: MathProblem = new MathProblem(prog.mathProblemType, answer, [number1, number2]);

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
        this.mathProblemType = mathProblemType;
    }
}

export class WorksheetProgramInstruction {
    min: number;
    max: number
}