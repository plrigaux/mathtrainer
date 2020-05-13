import { MathProblemTypesKey } from './mathProblemTypes'

export interface GenerateRange {
    min: number;
    max: number;
}

export type OrientationTypesKey = "VERTICAL" | "HORIZONTAL";

export interface EquationOrientation {
    code: OrientationTypesKey;
    label: string;
};

export const EquationOrientations: EquationOrientation[] = [
    { code: "VERTICAL", label: "Vertical" },
    { code: "HORIZONTAL", label: "Horizontal" }];

export interface Config {
    nbProblems: number;
    nbNumbers: number;
    mathProblemTypes: MathProblemTypesKey;
    generateRange: GenerateRange[];
    orientation: OrientationTypesKey;
    realTimeValidation: boolean;
}

export const CONFIG: Config = {
    nbNumbers: 2,
    nbProblems: 20,
    mathProblemTypes: "ADDITION",
    generateRange: [{ min: 10, max: 110 }, { min: 1, max: 9 }],
    orientation: "VERTICAL",
    realTimeValidation: true
}

export const MATH_EXERCICISES_STORE: string = "MATH_CONFIG";