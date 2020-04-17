import { Config } from './config'
import { MathProblemTypes, mathProplemActions, MathProblemTypesData, MathProblemTypesKey } from './mathProblemTypes';

export class MathProblem {

    question: String;
    values: number[];
    config: Config;

    constructor() {
        this.values = []
        this.question = ""
    }

    getAnswer(): number {

        //let key = MathProblemTypes.getStr(this.config.mathProblemTypes);
        var mptd : MathProblemTypesData = mathProplemActions[this.config.mathProblemTypes];
        
        let val = mptd.opFunc(this.values);

        return val;
    }

    static generateProblem(config: Config): MathProblem {
        var mp = new MathProblem()
        mp.values = MathProblem.getListofRandomInt(config.nbNumbers)


        // let key = MathProblemTypes.getStr(config.mathProblemTypes)

        var mptd : MathProblemTypesData = mathProplemActions[config.mathProblemTypes];

        mp.question = mp.values.join(` ${mptd.op} `) + " = "
        mp.config = config;

        return mp
    }

    static getListofRandomInt(num: number): number[] {
        var values: number[] = []
        for (var i = 0; i < num; i++) {
            var value = Math.floor(Math.random() * 10)
            values.push(value)
        }

        return values
    }
}
