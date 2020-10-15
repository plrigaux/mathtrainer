import { MathProblem } from "./mathProblem";
import { MathProblemTypes } from './mathProblemTypes';

export interface MultiParam {
    numbers: number[],
    start: number,
    end: number,
    shuffle: boolean,
    _next?: number,
    _series?: MathProblem[]
}

export interface WorksheetsItem extends WorksheetsItemStore {
    label: string
    func: (parameters : Object) => MathProblem
    mathProblemType: MathProblemTypes,
}

export interface WorksheetsItemStore {
    funcName: string,
    code: string,
    parameters?: MultiParam
}