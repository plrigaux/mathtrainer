import { Config } from '../config'
import { MathProblemTypes, mathProplemActions, MathProblemTypesData, GenerateRange, Answer } from './mathProblemTypes';

export class MathProblem {

    questionStr: String;
    values: number[];
    config: Config;
    mptd: MathProblemTypesData;
    answer: number;

    constructor() {
        this.values = []
        this.questionStr = null;
        this.answer = null;
    }

    getAnswer(): number {
        if (this.answer == null) {
            var mptd: MathProblemTypesData = mathProplemActions[this.config.mathProblemTypes];
            this.answer = mptd.opFunc(this.values);
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
        var mp = new MathProblem()
        mp.values = MathProblem.getListofRandomInt(config)

        mp.mptd = mathProplemActions[config.mathProblemTypes];
        /*
                let q = ""
                q += '<span class="equation">'
        
                let first = true;
                for (let index = 0; index < mp.values.length; ++index) {
                    if (!first) {
                        q += `<span class="operator">${mp.mptd.op}</span>`;
                    } else {
                        first = false;
                    }
                    q += `<span class="number">${mp.values[index]}</span>`
                }
        
                q += '<span class="equals">=</span>'
                q += '</span>'
        */
        //mp.question = q; //mp.values.join(` ${mptd.op} `) + " = "
        mp.config = config;

        return mp
    }

    static getListofRandomInt(config: Config): number[] {
        return MathProblem.getListofRandomNumber(config.generateRange, config.mathProblemTypes, null);
    }

    static getListofRandomNumber(generateRange : GenerateRange[], mathProblemTypes : MathProblemTypes, answer : Answer): number[] {
        var values: number[] = []

        var values: number[] = []
        for (var i = 0; i < generateRange.length; i++) {
            let rg : GenerateRange = generateRange[i];

            let value = MathProblem.getRandomIntInclusive(rg?.min, rg?.max)
            values.push(value)
        }

        if (mathProblemTypes === MathProblemTypes.SUBTRACTION) {
            console.log(values)
            //Keep the result positive
            values.sort((a, b) => b - a);
            console.log(values)
        }
        return values
    }

    static getRandomIntInclusive(min: number = 1, max: number = 10) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }
}
