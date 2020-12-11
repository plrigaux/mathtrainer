import { MathProblem } from "./mathProblem";
import { MathProblemTypes } from './mathProblemTypes';

export interface MultiParam {
    problemTypes : MathProblemTypes,
    numbers1 : string ,
    numbers2 : string ,
    shuffle: boolean,
}

export interface WorksheetsItem extends WorksheetsItemStore {
    label: string
    func: (parameters : Object) => MathProblem
    mathProblemType: MathProblemTypes,
    _context?: object,
    grade: number
}

export interface WorksheetsItemStore {
    funcName: string,
    code: string,
    parameters?: MultiParam
}