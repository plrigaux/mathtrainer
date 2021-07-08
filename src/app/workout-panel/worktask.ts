import { MathProblem } from "../math-generator/mathProblem";

export class WorkTask {
    problem: MathProblem;
    time: number = 0;
    //userAnswer: number[];
    startTime: number = 0;
    endTime: number = 0;
    errors: number = 0;
    
    constructor(problem: MathProblem) {
        this.problem = problem
    }

    get answer(): number {
        return this.problem.answer;
    };

    get values(): number[] {
        return this.problem.values
    }

    get operator(): string {
        return this.problem.mathProplemActions.operator;
    }

    setStartTime() {
        this.startTime = Date.now()
    }

    setEndTime() {
        this.endTime = Date.now()
    }

    getTime() : number {
        return this.endTime - this.startTime;
    }

    getTimeInSec() : string {
         return (this.getTime() / 1000).toFixed(1);
    }
}

