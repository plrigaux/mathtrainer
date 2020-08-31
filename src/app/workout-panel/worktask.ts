import { MathProblem } from "../math-generator/mathProblem";

export class WorkTask {
    problem: MathProblem;
    time: number;
    //userAnswer: number[];
    startTime: number;
    endTime: number;
    errors: number;
    
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

