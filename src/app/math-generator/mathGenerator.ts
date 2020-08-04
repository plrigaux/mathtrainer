import { Config } from '../config'
import { MathProblemTypes, mathProplemActions, MathProblemTypesData, GenerateRange, Answer } from './mathProblemTypes';
//import { MathProblem } from './mathProblem';

export class MathGenerator {

    static generateProblem(config: Config): MathProblem {
        return MathGenerator.getListofRandomNumber(config.generateRange, config.mathProblemTypes, null);
    }

    static getListofRandomNumber(generateRange: GenerateRange[], mathProblemTypes: MathProblemTypes, answer: Answer = null): MathProblem {
        var values: number[] = []

        var values: number[] = []
        for (var i = 0; i < generateRange.length; i++) {
            let rg: GenerateRange = generateRange[i];

            let value = MathGenerator.getRandomIntInclusive(rg?.min, rg?.max)
            values.push(value)
        }

        //Avoid negative for substraction
        if (mathProblemTypes === MathProblemTypes.SUBTRACTION) {
            console.log(values)
            //Keep the result positive
            values.sort((a, b) => b - a);
            console.log(values)
        }

        return new MathProblem(mathProblemTypes, null, values);
    }

    static getRandomIntInclusive(min: number = 1, max: number = 10) {
        //min = Math.ceil(min);
        //max = Math.floor(max);
        let val = max - min + 1
        return Math.floor(Math.random() * val) + min; //The maximum is inclusive and the minimum is inclusive 
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

    static toArray(a: number, b: number): number[] {
        return [a, b];
    }
}

export class MathProblem {

    questionStr: String;
    values: number[];
    mptd: MathProblemTypesData;
    private _answer: number;

    constructor(mathProblemType: MathProblemTypes, answer : number , values: number[]) {
        this.values = values;
        this.questionStr = null;
        this._answer = answer;
        this.mptd = mathProplemActions[mathProblemType]
    }

    get answer(): number {
        if (this._answer == null) {
            this._answer = this.mptd.opFunc(this.values);
        }
        return this._answer;
    }

    get question() {
        if (this.questionStr == null) {
            let q = ""
            let first = true;
            for (let index = 0; index < this.values.length; ++index) {
                if (!first) {
                    q += " " + this.mptd.op + " ";
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

    shuffle() : void {
        this.values = MathGenerator.shuffle(this.values);
    }

    orderAssending() : void {
        this.values.sort((a, b) => a - b);
    }

    orderDescending() : void {
        this.values.sort((a, b) => b - a);
    }
}