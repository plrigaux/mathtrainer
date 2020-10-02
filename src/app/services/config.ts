import { MathProblemTypes, GenerateRange } from '../math-generator/mathProblemTypes'
import { WorksheetsItem } from '../math-generator/worksheetsMap'
import { ColumnAnswerMode } from '../column-answer/column-answer.component'

export type OrientationTypesKey = "VERTICAL" | "HORIZONTAL";

export interface EquationOrientation {
    code: OrientationTypesKey;
    label: string;
};

export const EquationOrientations: EquationOrientation[] = [
    { code: "VERTICAL", label: "Vertical" },
    { code: "HORIZONTAL", label: "Horizontal" }];

export interface Config {
    nbQuestions: number;
    nbNumbers: number;
    answerMode: ColumnAnswerMode;
    generateRange: GenerateRange[];
    orientation: OrientationTypesKey;
    realTimeValidation: boolean;
    theme: string;
    generators: Map<string, WorksheetsItem>;
}

export const CONFIG: Config = {
    nbNumbers: 2,
    nbQuestions: 20,
    answerMode: ColumnAnswerMode.NORMAL,
    generateRange: [{ min: 10, max: 30 }, { min: 1, max: 9 }],
    orientation: "VERTICAL",
    realTimeValidation: true,
    theme: "pink-bluegrey",
    generators: new Map()
}

export const MATH_EXERCICISES_STORE: string = "MATH_CONFIG";
export const GENERATORS_KEY: string = "generators";