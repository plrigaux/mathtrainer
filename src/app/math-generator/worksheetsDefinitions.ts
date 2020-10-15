import { MathProblem } from "./mathProblem";
import { MathProblemTypes } from './mathProblemTypes';

export interface MultiParam {
    problemTypes : MathProblemTypes,
    numbers: number[],
    start: number,
    end: number,
    shuffle: boolean,
}

export interface WorksheetsItem extends WorksheetsItemStore {
    label: string
    func: (parameters : Object) => MathProblem
    mathProblemType: MathProblemTypes,
    _context?: object
}

export interface WorksheetsItemStore {
    funcName: string,
    code: string,
    parameters?: MultiParam
}