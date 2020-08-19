import { MathProblem } from './mathGenerator';
import { MathProblemTypes } from './mathProblemTypes';
import { Worksheets } from './worksheets'


export class WorksheetsMap {
    private static i: number = 0
    private static values: WorksheetsItem[] = [
        {
            label: "Add Single Digit Number NoCarry",
            func: Worksheets.addSingleDigitNumberNoCarry,
            mathProblemType: MathProblemTypes.ADDITION,
            code: "" + WorksheetsMap.i++
        },
        {
            label: "Add Single Digit Number NoCarry",
            func: Worksheets.addSingleDigitNumberNoCarry,
            mathProblemType: MathProblemTypes.ADDITION,
            code: "" + WorksheetsMap.i++
        },
        {
            label: "Adding two single-digit numbers - sum 10 or less",
            func: Worksheets.addTowSingleDigitNumberSum10orLess,
            mathProblemType: MathProblemTypes.ADDITION,
            code: "" + WorksheetsMap.i++
        },
        {
            label: "Add a 2-digit number and a 1-digit number mentally - within the same ten",
            func: Worksheets.addDoubleDigitWithSingleDigitNumberNoCarry,
            mathProblemType: MathProblemTypes.ADDITION,
            code: "" + WorksheetsMap.i++

        },
        {
            label: "Add a 2-digit number and a 1-digit number in columns",
            func: Worksheets.addTowDoubleDigitNumbersNoCarry,
            mathProblemType: MathProblemTypes.ADDITION,
            code: "" + WorksheetsMap.i++

        }, {
            label: "Add Tow Digit Number With Tow Digit Number With Carry",
            func: Worksheets.addTowDigitNumberWithTowDigitNumberWithCarry,
            mathProblemType: MathProblemTypes.ADDITION,
            code: "" + WorksheetsMap.i++
        }, {
            label: "Add Two Numbers Answer Bellow 20",
            func: Worksheets.addTwoNumbersAnswerBellow20,
            mathProblemType: MathProblemTypes.ADDITION,
            code: "" + WorksheetsMap.i++
        },
        {
            label: "Subtraction facts - numbers up to 10",
            func: Worksheets.subtractOneDigitNumberFromOneDigitNumberWithoutRegrouping,
            mathProblemType: MathProblemTypes.SUBTRACTION,
            code: "" + WorksheetsMap.i++
        },
        {
            label: "Subtract a one-digit number from a two-digit number - without regrouping",
            func: Worksheets.subtractOneDigitNumberFromTwoDigitNumberWithoutRegrouping,
            mathProblemType: MathProblemTypes.SUBTRACTION,
            code: "" + WorksheetsMap.i++
        },
        {
            label: "Subtract multiples of 10",
            func: Worksheets.subtractMultiplesOf10,
            mathProblemType: MathProblemTypes.SUBTRACTION,
            code: "" + WorksheetsMap.i++
        },
        {
            label: "Subtract a one-digit number from a two-digit number - with regrouping",
            func: Worksheets.subtractOneDigitNumberFromTwoDigitNumberWithRegrouping,
            mathProblemType: MathProblemTypes.SUBTRACTION,
            code: "" + WorksheetsMap.i++
        },
        {
            label: "Subtract two two-digit numbers - without regrouping",
            func: Worksheets.subtractTowDigitNumberFromTwoDigitNumberWithoutRegrouping,
            mathProblemType: MathProblemTypes.SUBTRACTION,
            code: "" + WorksheetsMap.i++
        },
        {
            label: "Subtract two two-digit numbers - with regrouping",
            func: Worksheets.subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping,
            mathProblemType: MathProblemTypes.SUBTRACTION,
            code: "" + WorksheetsMap.i++
        }

    ];

    static getWorksheetsItem(): WorksheetsItem[] {
        return this.values;
    }
}

export interface WorksheetsItem {
    label: string
    func: () => MathProblem
    mathProblemType: MathProblemTypes
    code: string
}