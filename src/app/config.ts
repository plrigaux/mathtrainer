import { MathProblemTypes, GenerateRange } from './math-generator/mathProblemTypes'
import { WorksheetsItem } from './math-generator/worksheetsMap'


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
    //mathProblemTypes: MathProblemTypes;
    generateRange: GenerateRange[];
    orientation: OrientationTypesKey;
    realTimeValidation: boolean;
    theme: string;
    generators: Map<string, WorksheetsItem>;
}

export const CONFIG: Config = {
    nbNumbers: 2,
    nbProblems: 20,
    //mathProblemTypes: MathProblemTypes.ADDITION,
    generateRange: [{ min: 10, max: 30 }, { min: 1, max: 9 }],
    orientation: "VERTICAL",
    realTimeValidation: true,
    theme: "pink-bluegrey",
    generators: new Map()
}

export const MATH_EXERCICISES_STORE: string = "MATH_CONFIG";
export const GENERATORS_KEY: string = "generators";