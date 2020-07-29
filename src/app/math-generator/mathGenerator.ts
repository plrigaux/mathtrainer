import { Config } from '../config'
import { MathProblemTypes, mathProplemActions, MathProblemTypesData, GenerateRange, Answer } from './mathProblemTypes';

export class MathProblem {

    questionStr: String;
    values: number[];
    mptd: MathProblemTypesData;
    answer: number;

    constructor(values: number[], mathProblemType : MathProblemTypes) {
        this.values = values;
        this.questionStr = null;
        this.answer = null;
        this.mptd = mathProplemActions[mathProblemType]
    }

    getAnswer(): number {
        if (this.answer == null) {
            this.answer = this.mptd.opFunc(this.values);
        }

        return this.answer;
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

    static generateProblem(config: Config): MathProblem {
          return MathProblem.getListofRandomNumber(config.generateRange, config.mathProblemTypes, null);
    }

    static getListofRandomNumber(generateRange : GenerateRange[], mathProblemTypes : MathProblemTypes, answer : Answer = null): MathProblem {
        var values: number[] = []

        var values: number[] = []
        for (var i = 0; i < generateRange.length; i++) {
            let rg : GenerateRange = generateRange[i];

            let value = MathProblem.getRandomIntInclusive(rg?.min, rg?.max)
            values.push(value)
        }

        //Avoid negative for substraction
        if (mathProblemTypes === MathProblemTypes.SUBTRACTION) {
            console.log(values)
            //Keep the result positive
            values.sort((a, b) => b - a);
            console.log(values)
        }

        return new MathProblem(values, mathProblemTypes);
    }

    static getRandomIntInclusive(min: number = 1, max: number = 10) {
        //min = Math.ceil(min);
        //max = Math.floor(max);
        let val = max - min + 1
        return Math.floor(Math.random() * val) + min; //The maximum is inclusive and the minimum is inclusive 
    }
}
