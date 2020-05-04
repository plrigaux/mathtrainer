export enum MathProblemTypes {
    ADDITION,
    SUBTRACTION,
    MULTIPLICATION,
    DIVISION
}

export namespace MathProblemTypes {

    export function values() {
        //console.log(Object.keys(MathProblemTypes));
        return Object.keys(MathProblemTypes).filter(
            (type) => isNaN(<any>type) && type !== 'values' && type !== 'getStr'
        );
    }

    export function getStr(id: number) {
        return Object.keys(MathProblemTypes)[id + 4]
    }
}

export interface MathProblemTypesData {
    name: string;
    code: number;
    op: string;
    opFunc: (value: number[]) => number;
}

export type MathProblemTypesKey = "ADDITION" | "SUBTRACTION" | "MULTIPLICATION" | "DIVISION";

export type MathProblemTypesMap = Record<MathProblemTypesKey, MathProblemTypesData>;


export const mathProplemActions: MathProblemTypesMap = {
    "ADDITION": {
        name: "Addition",
        code: MathProblemTypes.ADDITION,
        op: "+",
        opFunc: (value: number[]) => {
            return value.reduce((a, b) => a + b, 0);
        }
        
    },
    "SUBTRACTION": {
        name: "Subtraction",
        code: MathProblemTypes.SUBTRACTION,
        op: "-",
        opFunc: (value: number[]) => {
            return value.reduce((total, num) => total - num);
        }
    },
    "MULTIPLICATION": {
        name: "Multiplication",
        code: MathProblemTypes.MULTIPLICATION,
        op: "x",
        opFunc: (value: number[]) => {
            return value.reduce((total, num) => total * num);
        }
    },
    "DIVISION": {
        name: "Division",
        code: MathProblemTypes.DIVISION,
        op: "÷",
        opFunc: (value: number[]) => {
            return value.reduce((total, num) => total / num);
        }
    }
}




