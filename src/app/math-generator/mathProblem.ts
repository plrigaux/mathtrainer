import { Expression } from '@angular/compiler';
import { MathProblemTypes, GenerateRange, Answer, MathProblemTypesData, MATHProplemActions } from './mathProblemTypes';
//import { MathGenerator } from './mathGenerator';

export class MathProblem {

    questionStr: String;
    values: number[];
    mathProplemActions: MathProblemTypesData;
    private _answer: number;

    constructor(mathProblemType: MathProblemTypes, values: number[], answer: number = null) {
        this.values = values;
        this.questionStr = null;
        this._answer = answer;
        this.mathProplemActions = MATHProplemActions[mathProblemType]
    }

    get answer(): number {
        if (this._answer == null) {
            this._answer = this.mathProplemActions.opFunc(this.values);
        }
        return this._answer;
    }

    get question() {
        if (this.questionStr == null) {
            let q = ""
            let first = true;
            for (let index = 0; index < this.values.length; ++index) {
                if (!first) {
                    q += " " + this.mathProplemActions.operator + " ";
                } else {
                    first = false;
                }
                q += this.values[index]
            }
            q += ' = '
            this.questionStr = q;
        }

        return this.questionStr;
    }

    shuffle(): void {
        this.values = MathProblem.shuffle(this.values);
    }

    orderAssending(): void {
        this.values.sort((a, b) => a - b);
    }

    orderDescending(): void {
        this.values.sort((a, b) => b - a);
    }

    static shuffle(array: any[]) : any[] {
        let currentIndex: number = array.length
        let temporaryValue: number;
        let randomIndex: number;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    getInvert(): MathProblem {
        return MathProblem.getInvert(this);
    }


    static getInvert(mathProblem: MathProblem): MathProblem {
        let answer: number = null;
        let values: number[];

        let mathProblemType: MathProblemTypes;


        switch (mathProblem.mathProplemActions.code) {

            case MathProblemTypes.ADDITION:
                mathProblemType = MathProblemTypes.SUBTRACTION;
                values = [mathProblem.answer, ...mathProblem.values.filter((v, index) => index !== 0)];
                break;

            case MathProblemTypes.SUBTRACTION:
                mathProblemType = MathProblemTypes.ADDITION
                values = [mathProblem.answer, ...mathProblem.values.filter((v, index) => index !== 0)];
                break;

            case MathProblemTypes.MULTIPLICATION:
                mathProblemType = MathProblemTypes.DIVISION
                values = [mathProblem.answer, ...mathProblem.values.filter((v, index) => index !== 0)];
                break;

            case MathProblemTypes.DIVISION:
                mathProblemType = MathProblemTypes.MULTIPLICATION
                values = [mathProblem.answer, ...mathProblem.values.filter((v, index) => index !== 0)];
                break;
            default:
                console.error(`Wrong type ${mathProblem.mathProplemActions.code}`);
        }

        return new MathProblem(mathProblemType, values, answer);
    }

    get displaySize(): number {
        return Math.max(...  this.values.map(x => x.toString().length))
    }
}