export class MathProblem {

    question: String;
    values: number[];

    constructor() {
        this.values = []
        this.question = ""
    }

    getAnswer(): number {
        return this.values.reduce((a, b) => a + b, 0)
    }

    static generateProblem(nbElem: number) : MathProblem {
        var mp = new MathProblem()
        mp.values = MathProblem.getListofRandomInt(nbElem)
        var q = mp.values.join(" + ")
        q += " = "
        mp.question = q

        return mp
    }

    static getListofRandomInt(num: number): number[] {
        var values: number[] = []
        for (var i = 0; i < num; i++) {
            var value = Math.floor(Math.random() * 10)
            values.push(value)
        }

        return values
    }
}
