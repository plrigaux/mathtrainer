import { Config } from '../config'
import { MathProblemTypes, GenerateRange, Answer } from './mathProblemTypes';
import { MathProblem } from './mathProblem';

export class MathGenerator {

    static generateProblem(config: Config): MathProblem {

        if (config.generators == null || config.generators.size === 0) {
            //return MathGenerator.getListofRandomNumber(config.generateRange, config.mathProblemTypes, null);
return null;
        } else {
            try {
                return config.generators.values().next().value.func();
            } catch (error) {
                console.error(error)
                console.log(config)
            }
        }
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
}

