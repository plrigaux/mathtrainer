import { MathProblemTypesKey } from './mathProblemTypes'

export interface GenerateRange {
    min: number;
    max: number;
}

export interface Config {
    nbProblems: number;
    nbNumbers: number;
    mathProblemTypes: MathProblemTypesKey;
    generateRange: GenerateRange[];
}

export const CONFIG: Config = {
    nbNumbers: 2,
    nbProblems: 20,
    mathProblemTypes: "SUBTRACTION",
    generateRange: [{ min: 10, max: 110 }, { min: 1, max: 9 }]
}