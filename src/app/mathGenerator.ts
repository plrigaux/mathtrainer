import { Config } from './config'
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
            var value = Math.floor(Math.random() * 10)
            values.push(value)
        }

        if (config.mathProblemTypes === "SUBTRACTION") {
            //Keep the result positive
            values.sort();
            values.reverse();
        }

        return values
    }
}
