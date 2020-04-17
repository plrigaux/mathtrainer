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

    export function getStr(id : number) {
        return Object.keys(MathProblemTypes)[id + 4]
    }
}

export const MPT = {
    ADDITION: {
        name: "ADDITION",
        code: MathProblemTypes.ADDITION,
        op: "+",
        func: (a: number, b: number) => a + b
    },
    SUBTRACTION: {
        name: "SUBTRACTION",
        code: MathProblemTypes.SUBTRACTION,
        op: "-",
        func: (a: number, b: number) => a - b
    },
    MULTIPICATION: {
        name: "MULTIPICATION",
        code: MathProblemTypes.MULTIPICATION,
        op: "x",
        func: (a: number, b: number) => a * b
    },
    DIVISION: {
        name: "DIVISION",
        code: MathProblemTypes.DIVISION,
        op: "/",
        func: (a: number, b: number) => a / b
    }
}

