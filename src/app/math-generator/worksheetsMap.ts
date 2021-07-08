import { MathProblem } from "./mathProblem";
import { MathProblemTypes } from './mathProblemTypes';
import { Worksheets } from './worksheets'
import { Worksheets2 } from './worksheets2'
import { MultiParam, WorksheetsItem, GeneratorFunctionCB } from './worksheetsDefinitions'

export class WorksheetsMap {

    private static worksheetsMap : WorksheetsMap = null;
    private map : Map<string, WorksheetsItem> = new Map();
    private index : number = 0
    private values : WorksheetsItem[] = [
        this.generateMapItem(
            $localize `:@@addSingleDigitNumberNoCarry:Add Single Digit Number NoCarry`,
            Worksheets.addSingleDigitNumberNoCarry,
            1,
            MathProblemTypes.ADDITION
        ),
        this.generateMapItem(
            $localize `:@@addTowSingleDigitNumberSum10orLess:Adding two single-digit numbers - sum 10 or less`,
            Worksheets.addTowSingleDigitNumberSum10orLess,
            1,
            MathProblemTypes.ADDITION
        ),
        this.generateMapItem(
            $localize `:@@addSingleDigitNumber:Add Single Digit Number`,
            Worksheets.addSingleDigitNumber,
            1,
            MathProblemTypes.ADDITION
        ),
        this.generateMapItem(
            $localize `:@@addDoubleDigitWithSingleDigitNumberNoCarry:Add a 2-digit number and a 1-digit number mentally - within the same ten`,
            Worksheets.addDoubleDigitWithSingleDigitNumberNoCarry,
            2,
            MathProblemTypes.ADDITION

        ),
        this.generateMapItem(
            $localize `:@@addTowDoubleDigitNumbersNoCarry:Add a 2-digit number and a 1-digit number in columns`,
            Worksheets.addTowDoubleDigitNumbersNoCarry,
            2,
            MathProblemTypes.ADDITION

        ),
        this.generateMapItem(
            $localize `:@@addTowDigitNumberWithTowDigitNumberWithCarry:Add a 2 digit number with a 2 digit number with carry`,
            Worksheets.addTowDigitNumberWithTowDigitNumberWithCarry,
            2,
            MathProblemTypes.ADDITION
        ),
        this.generateMapItem(
            $localize `:@@addTwoNumbersAnswerBellow20:Add Two Numbers Answer Bellow 20`,
            Worksheets.addTwoNumbersAnswerBellow20,
            2,
            MathProblemTypes.ADDITION
        ),
        this.generateMapItem(
            $localize `:@@subtractOneDigitNumberFromOneDigitNumberWithoutRegrouping:Subtraction facts - numbers up to 10`,
            Worksheets.subtractOneDigitNumberFromOneDigitNumberWithoutRegrouping,
            2,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            $localize `:@@subtractAnswerbelow10:Subtraction facts - answer below 10`,
            Worksheets.subtractAnswerbelow10,
            2,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            $localize `:@@subtractOneDigitNumberFromTwoDigitNumberWithoutRegrouping:Subtract a one-digit number from a two-digit number - without regrouping`,
            Worksheets.subtractOneDigitNumberFromTwoDigitNumberWithoutRegrouping,
            2,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            $localize `:@@subtractMultiplesOf10:Subtract multiples of 10`,
            Worksheets.subtractMultiplesOf10,
            2,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            $localize `:@@subtractOneDigitNumberFromTwoDigitNumberWithRegrouping:Subtract a one-digit number from a two-digit number - with regrouping`,
            Worksheets.subtractOneDigitNumberFromTwoDigitNumberWithRegrouping,
            2,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            $localize `:@@subtractTowDigitNumberFromTwoDigitNumberWithoutRegrouping:Subtract two two-digit numbers - without regrouping`,
            Worksheets.subtractTowDigitNumberFromTwoDigitNumberWithoutRegrouping,
            2,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            $localize `:@@subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping:Subtract two two-digit numbers - with regrouping`,
            Worksheets.subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping,
            2,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            $localize `:@@subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping:Subtract two two-digit numbers - with regrouping`,
            Worksheets.subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping,
            2,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            $localize `:@@Multiply_2_single_digits:Multiply two single digit numbers`,
            Worksheets2.multiplySingleDigitNumber,
            3,
            MathProblemTypes.MULTIPLICATION
        )

    ];

    static getWorksheetsItem(): WorksheetsItem[] {
        return this.getInstance().values;
    }

    static has(code: string): boolean {
        return this.getInstance().map.has(code);
    }

    static getInstance() : WorksheetsMap {
        if (this.worksheetsMap == null) {
            this.worksheetsMap = new WorksheetsMap();
        }
        return this.worksheetsMap;
    }

    private generateMapItem(label: string,
        func: GeneratorFunctionCB,
        grade : number,
        mathProblemType: MathProblemTypes, param? : MultiParam): WorksheetsItem {

        let w: WorksheetsItem = {
            label: label,
            func: func,
            funcName: func.name,
            mathProblemType: mathProblemType,
            code: mathProblemType + "_" + this.index++,
            parameters: param,
            grade: grade
        }

        this.map.set(w.code, w)
        return w
    }

    constructor () {

        for (let i = 1; i <= 12; i++ ) {

            let workSheetItem = this.generateMapItem(
                $localize `:@@MultiplicationTable:${i} time table`,
                Worksheets2.multiplicationTable,
                3,
                MathProblemTypes.MULTIPLICATION,
                {
                    problemTypes : MathProblemTypes.MULTIPLICATION,
                    numbers1 : i.toString(),
                    numbers2 : "1-12",
                    shuffle: true
                }
            )
            this.values.push(workSheetItem);
        }
    }
}