import { MathProblem } from "./mathProblem";
import { MathProblemTypes } from './mathProblemTypes';

export interface MultiParam {
    problemTypes: MathProblemTypes,
    numbers1: string,
    numbers2: string,
    shuffle: boolean,
}

export type GeneratorFunctionCB =   (parameters: WorksheetsItem) => MathProblem;

export interface WorksheetsItem extends WorksheetsItemStore {
    [index: string]: any;
    label: string;
    func: GeneratorFunctionCB;
    mathProblemType: MathProblemTypes;
    _context?: object;
    grade: number;
}



export interface WorksheetsItemStore {
    funcName: string,
    code: string,
    parameters?: MultiParam
}