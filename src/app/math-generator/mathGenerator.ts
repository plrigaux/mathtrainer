import { Config } from '../services/config'
import { MathProblemTypes, GenerateRange, Answer, MATHProplemActions } from './mathProblemTypes';
import { MathProblem } from './mathProblem';
import { WorksheetsMap } from './worksheetsMap';
import { WorksheetsItem } from './worksheetsDefinitions'
import { Range, RangeManager } from './rangeManager'
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
        let worksheetItem: WorksheetsItem = null;
        while (!itres.done) {
            worksheetItem = itres.value;
            //console.log(mp.funcName)
            if (++idx >= index) {
                break;
            }

            itres = it.next()
            if (itres.done) {
                it = config.generators.values();
                itres = it.next();
                //console.log(itres.done)
            }
        }
        console.log(worksheetItem)
        if (worksheetItem == null) {
            return MathGenerator.default();
        }

        return worksheetItem.func(worksheetItem);
    }

    static getListofRandomNumber(generateRange: GenerateRange[], mathProblemTypes: MathProblemTypes): MathProblem {
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

        return new MathProblem(mathProblemTypes, values);
    }

    static getRandomIntInclusive(min: number = 1, max: number = 10): number {
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

    static getSeries(type: MathProblemTypes, numbers1: Range[], numbers2: Range[], shuffle: boolean = false): MathProblem[] {

        let size = RangeManager.getInstance().getSize(numbers1) * RangeManager.getInstance().getSize(numbers2)
        let list: MathProblem[] = new Array(size);

        let invert: boolean = false
        switch (type) {
            case MathProblemTypes.SUBTRACTION:
            case MathProblemTypes.DIVISION:
                type = MATHProplemActions[type].invert
                invert = true;
                break;
        }

        let i = 0

        for (let range1 of numbers1) {
            for (let number1 = range1.start; number1 <= range1.end; number1++) {
                for (let range2 of numbers2) {
                    for (let number2 = range2.start; number2 <= range2.end; number2++) {
                        let mathProblem: MathProblem;

                        if (invert) {
                            mathProblem = new MathProblem(type, [number1, number2]).getInvert();
                        } else {
                            mathProblem = new MathProblem(type, [number1, number2]);
                        }


                        list[i++] = mathProblem;
                    }
                }
            }
        }


        if (shuffle) {
            list = MathProblem.shuffle(list);
        }

        return list;
    }

    static getSeries2(type: MathProblemTypes, numbers: number[], start: number, end: number, shuffle: boolean = false): MathProblem[] {

        let size = (end - start + 1) * numbers.length;
        let list: MathProblem[] = new Array(size);

        let invert: boolean = false
        switch (type) {
            case MathProblemTypes.SUBTRACTION:
            case MathProblemTypes.DIVISION:
                type = MATHProplemActions[type].invert
                invert = true;
                break;
        }

        let number2 = start;
        for (let i = 0; i < size; i) {
            for (let number of numbers) {

                let mathProblem: MathProblem;

                if (invert) {
                    mathProblem = new MathProblem(type, [number2, number]).getInvert();
                } else {
                    mathProblem = new MathProblem(type, [number, number2]);
                }


                list[i++] = mathProblem;
            }
            number2++;
        }

        if (shuffle) {
            list = MathProblem.shuffle(list);
        }

        return list;
    }
}