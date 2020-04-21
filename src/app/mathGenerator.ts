import { Config, GenerateRange } from './config'
import { MathProblemTypes, mathProplemActions, MathProblemTypesData, MathProblemTypesKey } from './mathProblemTypes';

export class MathProblem {

    question: String;
    values: number[];
    config: Config;
    mptd: MathProblemTypesData;

    constructor() {
        this.values = []
        this.question = ""
    }

    getAnswer(): number {

        var mptd: MathProblemTypesData = mathProplemActions[this.config.mathProblemTypes];

        let val = mptd.opFunc(this.values);

        return val;
    }

    static generateProblem(config: Config): MathProblem {
        var mp = new MathProblem()
        mp.values = MathProblem.getListofRandomInt(config)

        mp.mptd = mathProplemActions[config.mathProblemTypes];

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

        mp.question = q; //mp.values.join(` ${mptd.op} `) + " = "
        mp.config = config;

        return mp
    }

    static getListofRandomInt(config: Config): number[] {
        var values: number[] = []
        for (var i = 0; i < config.nbNumbers; i++) {
            let rg : GenerateRange = config.generateRange[i];

            let value = MathProblem.getRandomIntInclusive( rg?.min, rg?.max)
            values.push(value)
        }

        if (config.mathProblemTypes === "SUBTRACTION") {
            console.log(config);
            console.log(values)
            //Keep the result positive
            values.sort((a,b) => b - a);
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
