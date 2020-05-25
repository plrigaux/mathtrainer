import { MathProblem } from '../mathGenerator'

export class WorkTask {
    problem: MathProblem;
    time: number;
    userAnswer: number[];

    get answer() : number {
        return this.problem.getAnswer();
    };

    get values() : number[] {
        return this.problem.values
    }

    get operator() : string {
        return this.problem.mptd.op;
    }
}