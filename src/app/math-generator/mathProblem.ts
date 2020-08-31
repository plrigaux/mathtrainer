import { MathProblemTypes, GenerateRange, Answer, MathProblemTypesData, mathProplemActions } from './mathProblemTypes';
//import { MathGenerator } from './mathGenerator';

export class MathProblem {

    questionStr: String;
    values: number[];
    mathProplemActions: MathProblemTypesData;
    private _answer: number;

    constructor(mathProblemType: MathProblemTypes, answer: number, values: number[]) {
        this.values = values;
        this.questionStr = null;
        this._answer = answer;
        this.mathProplemActions = mathProplemActions[mathProblemType]
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

    static shuffle(array: any[]) {
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
}