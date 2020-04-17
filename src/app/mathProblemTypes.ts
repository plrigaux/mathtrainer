export enum MathProblemTypes {
    ADDITION,
    SUBTRACTION,
    MULTIPICATION,
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

export type MathProblemTypesKey = "ADDITION" | "SUBTRACTION" | "MULTIPICATION" | "DIVISION";

export type MathProblemTypesMap = Record<MathProblemTypesKey, MathProblemTypesData>;


export const mathProplemActions: MathProblemTypesMap = {
    "ADDITION": {
        name: "ADDITION",
        code: MathProblemTypes.ADDITION,
        op: "+",
        opFunc: (value: number[]) => {
            return 3;}
        
    },
    "SUBTRACTION": {
        name: "SUBTRACTION",
        code: MathProblemTypes.SUBTRACTION,
        op: "-",
        opFunc: (value: number[]) => {
            return 3;}
    },
    "MULTIPICATION": {
        name: "MULTIPICATION",
        code: MathProblemTypes.MULTIPICATION,
        op: "x",
        opFunc: (value: number[]) => {
            return 3;}
    },
    "DIVISION": {
        name: "DIVISION",
        code: MathProblemTypes.DIVISION,
        op: "/",
        opFunc: (value: number[]) => {
            return 3;}
    }
}




