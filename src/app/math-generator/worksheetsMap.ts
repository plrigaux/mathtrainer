import { MathProblem } from "./mathProblem";
import { MathProblemTypes } from './mathProblemTypes';
import { Worksheets } from './worksheets'
import { Worksheets2 } from './worksheets2'
import { MultiParam, WorksheetsItem } from './worksheetsDefinitions'

export class WorksheetsMap {

    private static worksheetsMap : WorksheetsMap = null;
    private map : Map<string, WorksheetsItem> = new Map();
    private index : number = 0
    private values : WorksheetsItem[] = [
        this.generateMapItem(
            "Add Single Digit Number NoCarry",
            Worksheets.addSingleDigitNumberNoCarry,
            MathProblemTypes.ADDITION
        ),
        this.generateMapItem(
            "Adding two single-digit numbers - sum 10 or less",
            Worksheets.addTowSingleDigitNumberSum10orLess,
            MathProblemTypes.ADDITION
        ),
        this.generateMapItem(
            "Add Single Digit Number",
            Worksheets.addSingleDigitNumber,
            MathProblemTypes.ADDITION
        ),
        this.generateMapItem(
            "Add a 2-digit number and a 1-digit number mentally - within the same ten",
            Worksheets.addDoubleDigitWithSingleDigitNumberNoCarry,
            MathProblemTypes.ADDITION

        ),
        this.generateMapItem(
            "Add a 2-digit number and a 1-digit number in columns",
            Worksheets.addTowDoubleDigitNumbersNoCarry,
            MathProblemTypes.ADDITION

        ),
        this.generateMapItem(
            "Add a 2 digit number with a 2 digit number with carry",
            Worksheets.addTowDigitNumberWithTowDigitNumberWithCarry,
            MathProblemTypes.ADDITION
        ),
        this.generateMapItem(
            "Add Two Numbers Answer Bellow 20",
            Worksheets.addTwoNumbersAnswerBellow20,
            MathProblemTypes.ADDITION
        ),
        this.generateMapItem(
            "Subtraction facts - numbers up to 10",
            Worksheets.subtractOneDigitNumberFromOneDigitNumberWithoutRegrouping,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            "Subtraction facts - answer below 10",
            Worksheets.subtractAnswerbelow10,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            "Subtract a one-digit number from a two-digit number - without regrouping",
            Worksheets.subtractOneDigitNumberFromTwoDigitNumberWithoutRegrouping,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            "Subtract multiples of 10",
            Worksheets.subtractMultiplesOf10,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            "Subtract a one-digit number from a two-digit number - with regrouping",
            Worksheets.subtractOneDigitNumberFromTwoDigitNumberWithRegrouping,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            "Subtract two two-digit numbers - without regrouping",
            Worksheets.subtractTowDigitNumberFromTwoDigitNumberWithoutRegrouping,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            "Subtract two two-digit numbers - with regrouping",
            Worksheets.subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            "Subtract two two-digit numbers - with regrouping",
            Worksheets.subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping,
            MathProblemTypes.SUBTRACTION
        ),
        this.generateMapItem(
            $localize `:@@Multiply_2_single_digits:Multiply two single digit numbers`,
            Worksheets2.multiplySingleDigitNumber,
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
        func: (worksheetsItem: WorksheetsItem) => MathProblem,
        mathProblemType: MathProblemTypes, param? : MultiParam): WorksheetsItem {

        let w: WorksheetsItem = {
            label: label,
            func: func,
            funcName: func.name,
            mathProblemType: mathProblemType,
            code: mathProblemType + "_" + this.index++,
            parameters: param
        }

        this.map.set(w.code, w)
        return w
    }

    constructor () {

        for (let i = 1; i <= 12; i++ ) {

            let workSheetItem = this.generateMapItem(
                $localize `:@@MultiplicationTable:${i} time table`,
                Worksheets2.multiplicationTable,
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