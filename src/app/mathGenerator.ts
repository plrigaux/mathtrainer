import { Config } from './config'
import { MathProblemTypes, MPT } from './mathProblemTypes';

export class MathProblem {

    question: String;
    values: number[];
    config: Config;

    constructor() {
        this.values = []
        this.question = ""
    }

    getAnswer(): number {

        let key = MathProblemTypes.getStr(this.config.mathProblemTypes);
        let fc = MPT[key].func;

        let val = this.values.reduce(fc, 0)

        return val;
    }

    static generateProblem(config: Config): MathProblem {
        var mp = new MathProblem()
        mp.values = MathProblem.getListofRandomInt(config.nbNumbers)


        let op : string;
/*
        switch (config.mathProblemTypes) {
            case MathProblemTypes.ADDITION:
                op = '+'
                break;
            case MathProblemTypes.SUBTRACTION:
                op = '-'
                break;
            case MathProblemTypes.MULTIPICATION:
                op = 'x'
                break;
            case MathProblemTypes.DIVISION:
                op = '/'
                break;
            default:
        }

        console.log(MathProblemTypes);
        console.log(MathProblemTypes.SUBTRACTION);
        console.log(MathProblemTypes.getStr(MathProblemTypes.SUBTRACTION));
        console.log(MPT);
        console.log(MPT[MathProblemTypes.SUBTRACTION]);
*/
        let key = MathProblemTypes.getStr(config.mathProblemTypes)
        op = MPT[key].op

        mp.question = mp.values.join(` ${op} `) + " = "
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
