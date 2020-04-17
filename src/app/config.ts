import {MathProblemTypesKey} from './mathProblemTypes'

export interface Config {
    nbProblems: number;
    nbNumbers: number;
    mathProblemTypes : MathProblemTypesKey;
}

export const CONFIG: Config = {
    nbNumbers: 2,
    nbProblems: 10,
    mathProblemTypes: "ADDITION"
}