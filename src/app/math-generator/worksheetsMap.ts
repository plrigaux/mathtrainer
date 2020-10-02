import { MathProblem } from "./mathProblem";
import { MathProblemTypes } from './mathProblemTypes';
import { Worksheets } from './worksheets'


export class WorksheetsMap {
    private static i: number = 0
    private static values: WorksheetsItem[] = [
        WorksheetsMap.generateMapItem(
            "Add Single Digit Number NoCarry",
            Worksheets.addSingleDigitNumberNoCarry,
            MathProblemTypes.ADDITION
        ),
        WorksheetsMap.generateMapItem(
            "Adding two single-digit numbers - sum 10 or less",
            Worksheets.addTowSingleDigitNumberSum10orLess,
            MathProblemTypes.ADDITION
        ),
        WorksheetsMap.generateMapItem(
            "Add Single Digit Number",
            Worksheets.addSingleDigitNumber,
            MathProblemTypes.ADDITION
        ),
        WorksheetsMap.generateMapItem(
            "Add a 2-digit number and a 1-digit number mentally - within the same ten",
            Worksheets.addDoubleDigitWithSingleDigitNumberNoCarry,
            MathProblemTypes.ADDITION

        ),
        WorksheetsMap.generateMapItem(
            "Add a 2-digit number and a 1-digit number in columns",
            Worksheets.addTowDoubleDigitNumbersNoCarry,
            MathProblemTypes.ADDITION

        ),
        WorksheetsMap.generateMapItem(
            "Add a 2 digit number with a 2 digit number with carry",
            Worksheets.addTowDigitNumberWithTowDigitNumberWithCarry,
            MathProblemTypes.ADDITION
        ),
        WorksheetsMap.generateMapItem(
            "Add Two Numbers Answer Bellow 20",
            Worksheets.addTwoNumbersAnswerBellow20,
            MathProblemTypes.ADDITION
        ),
        WorksheetsMap.generateMapItem(
            "Subtraction facts - numbers up to 10",
            Worksheets.subtractOneDigitNumberFromOneDigitNumberWithoutRegrouping,
            MathProblemTypes.SUBTRACTION
        ),
        WorksheetsMap.generateMapItem(
            "Subtraction facts - answer below 10",
            Worksheets.subtractAnswerbelow10,
            MathProblemTypes.SUBTRACTION
        ),
        WorksheetsMap.generateMapItem(
            "Subtract a one-digit number from a two-digit number - without regrouping",
            Worksheets.subtractOneDigitNumberFromTwoDigitNumberWithoutRegrouping,
            MathProblemTypes.SUBTRACTION
        ),
        WorksheetsMap.generateMapItem(
            "Subtract multiples of 10",
            Worksheets.subtractMultiplesOf10,
            MathProblemTypes.SUBTRACTION
        ),
        WorksheetsMap.generateMapItem(
            "Subtract a one-digit number from a two-digit number - with regrouping",
            Worksheets.subtractOneDigitNumberFromTwoDigitNumberWithRegrouping,
            MathProblemTypes.SUBTRACTION
        ),
        WorksheetsMap.generateMapItem(
            "Subtract two two-digit numbers - without regrouping",
            Worksheets.subtractTowDigitNumberFromTwoDigitNumberWithoutRegrouping,
            MathProblemTypes.SUBTRACTION
        ),
        WorksheetsMap.generateMapItem(
            "Subtract two two-digit numbers - with regrouping",
            Worksheets.subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping,
            MathProblemTypes.SUBTRACTION
        )

    ];

    static getWorksheetsItem(): WorksheetsItem[] {
        return this.values;
    }
    /*
        private static generateMap() {
            WorksheetsMap.generateMapItem(
                "Subtract two two-digit numbers - with regrouping",
                Worksheets.subtractTwoDigitNumberFromTwoDigitNumberWithRegrouping,
                MathProblemTypes.SUBTRACTION
            );
        }
    */
    private static generateMapItem(label: string,
        func: () => MathProblem,
        mathProblemType: MathProblemTypes): WorksheetsItem {

        return {
            label: label,
            func: func,
            funcName: func.name,
            mathProblemType: mathProblemType,
            code: mathProblemType + "_" + WorksheetsMap.i++
        }
    }
}

export interface WorksheetsItem extends WorksheetsItemStore {
    label: string
    func: () => MathProblem
    mathProblemType: MathProblemTypes

}

export interface WorksheetsItemStore {
    funcName: string,
    code: string
}