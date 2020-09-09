import { Config } from '../config'
import { MathProblemTypes, GenerateRange, Answer } from './mathProblemTypes';
import { MathProblem } from './mathProblem';
import { WorksheetsItem, WorksheetsMap } from './worksheetsMap';
//import { Worksheets } from './worksheets';

export class MathGenerator {

    static generateProblem(config: Config): MathProblem {
        return MathGenerator.generateProblemNext(config, 0);
    }

    static generateProblemNext(config: Config, index: number): MathProblem {
        //TODO Change this!!!!!!!!!!!!!!!
        //console.log("//TODO Change this!!!!!!!!!!!!!!!")

        let it: Iterator<WorksheetsItem> = config.generators.values();

        let itres: IteratorResult<WorksheetsItem> = it.next()
        let idx = 0
        let mp : WorksheetsItem = null;
        while (!itres.done) {
            mp = itres.value;
            console.log(mp.funcName)
            if (++idx >= index) {
                break;
            }

            itres = it.next()
            if (itres.done) {
                it = config.generators.values();
                itres = it.next();
                console.log(itres.done)
            } 
        }
        console.log(mp)
        if (mp == null) {
            return MathGenerator.default();
        }
        return mp.func();
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

    static toArray(a: number, b: number): number[] {
        return [a, b];
    }

    static default(): MathProblem {

        let generateRange: GenerateRange[] = [
            { min: 1, max: 1 },
            { min: 1, max: 1 }
        ];

        return MathGenerator.getListofRandomNumber(generateRange, MathProblemTypes.ADDITION);
    }
}

