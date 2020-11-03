
export interface Range {
    start: number;
    end: number;
}

export class RangeManager {

    private static instance: RangeManager;

    private constructor() {

    }

    public static getInstance(): RangeManager {
        if (!RangeManager.instance) {
            RangeManager.instance = new RangeManager();
        }

        return RangeManager.instance;
    }


    getNumbers(ranges: Range[]): number[] {
        let result: number[] = [];


        ranges.forEach(r => {

            for (let i = r.start; i <= r.start; i++) {
                result.push(i);
            }
        })

        return result;
    }

    rangeParser(str: string, combine: boolean): Range[] {

        // split the range string
        let arr: string[] = str.split(',')
        let ranges: Range[] = []

        // parse all ranges
        for (let i = 0; i < arr.length; i++) {
            let range: string[] = arr[i].split('-')


            let rangeNum: number[] = []
            let k = 0;

            let previousIsNaN = false
            for (let j = 0; j < range.length; j++) {
                let a = parseInt(range[j])

                if (isNaN(a)) {
                    previousIsNaN = true;
                } else {
                    rangeNum.push(previousIsNaN ? a * -1 : a)
                    previousIsNaN = false;
                }
            }

            if (rangeNum.length == 0) {
                throw Error(`Malformed range '${arr[i]}'`)
            }

            let start = rangeNum[0]
            let end = rangeNum.length > 1 ? rangeNum[1] : start

            // -nnn
            if (isNaN(start)) {
                console.warn(`isNaN(start)`)
            } else if (isNaN(end)) {
                end = start
            } else if (end < start) {
                let tmp = end;
                end = start
                start = tmp
            }

            // add range
            ranges.push({
                start: start,
                end: end
            })
        }

        return combine
            ? this.combineRanges(ranges)
            : ranges
    }

    /**
     * Combine overlapping & adjacent ranges.
     * @private
     */
    combineRanges(ranges: Range[]) {
        let ordered: Range[] = ranges.sort((a: Range, b: Range) => {
            return a.start - b.start
        })

        let range = ordered[0]
        let combined: Range[] = [range]

        for (let i = 1; i < ordered.length; i++) {

            let current = ordered[i]

            if (range.end + 1 >= current.start) {
                range.end = current.end
            } else {
                range = current
                combined.push(range)
            }
        }

        return combined
    }

    getSize(ranges : Range[]) : number {
        let size = 0
        ranges.forEach(r => size += (r.end + 1 - r.start))
        return size;
    }
}
