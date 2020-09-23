export enum MathProblemTypes {
    ADDITION = "ADDITION",
    SUBTRACTION = "SUBTRACTION",
    MULTIPLICATION = "MULTIPLICATION",
    DIVISION = "DIVISION"
}
/*
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
*/
export interface MathProblemTypesData {
    name: string;
    code: MathProblemTypes;
    operator: string;
    opFunc: (value: number[]) => number;
}

//export type MathProblemTypesKey = "ADDITION" | "SUBTRACTION" | "MULTIPLICATION" | "DIVISION";

export type MathProblemTypesMap = Record<MathProblemTypes, MathProblemTypesData>;


export const mathProplemActions: MathProblemTypesMap = {
    "ADDITION" : {
        name: "Addition",
        code: MathProblemTypes.ADDITION,
        operator: "+",
        opFunc: (value: number[]) => {
            return value.reduce((a, b) => a + b, 0);
        }
        
    },
    "SUBTRACTION": {
        name: "Subtraction",
        code: MathProblemTypes.SUBTRACTION,
        operator: "-",
        opFunc: (value: number[]) => {
            return value.reduce((total, num) => total - num);
        }
    },
    "MULTIPLICATION": {
        name: "Multiplication",
        code: MathProblemTypes.MULTIPLICATION,
        operator: "x",
        opFunc: (value: number[]) => {
            return value.reduce((total, num) => total * num);
        }
    },
    "DIVISION": {
        name: "Division",
        code: MathProblemTypes.DIVISION,
        operator: "÷",
        opFunc: (value: number[]) => {
            return value.reduce((total, num) => total / num);
        }
    }
}

export interface GenerateRange {
    min: number;
    max: number;
}

export enum Relation {
    LESS,
    LESS_EQUALS,
    EQUALS,
    GREATER_EQUALS,
    GREATER,
    NOT_EQUALS
}

export interface Answer {
    min: number;
    max: number;
    relation: Relation;
}

