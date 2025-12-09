function ceph_calc(values: number[], operation: "*"|"+") {
    return values.slice(1).reduce((sum, value) => operation==="*" ?
        sum! *= value :
        sum! += value
    , values[0])!
}

function calculate(values: string[], operation: "*"|"+" = "*") {
    let numbers: number[] = []

    for (let i = 2; i >= 0; i--) {
        let num = "";
        for (const value of values) {
            const char = value[i];
            if (char === "0" || !char) continue;
            num += char
        }

        numbers.push(Number(num))
    }
    return ceph_calc(numbers, operation);
}

export default async function solution(puzzle: string[]) {
    let homework: string[][] = [];
    let answer = 0;

    const op_pattern = /[+*]\s*?(?=\s[+*]|$)/gm;
    const num_pattern = /\d+/g;

    let operations: (string|number)[][] = [];
    puzzle[puzzle.length - 1].match(op_pattern)?.forEach(x => {
        operations.push([x[0], x.length]);
    });

    for (let row = 0; row < puzzle.length - 1; row++) {
        const width = puzzle[row].match(num_pattern);
        if (width === null || width.length === 0) {
            throw Error("Shit hit the fan");
        }

        let start = 0;
        for (let col = 0; col < width.length; col++) {
            if (!homework[col]) homework[col] = [];
            const size = operations[col][1] as number;
            // console.log('start:', start, 'size:', size);

            // const regex = new RegExp(`.{${start},${size}}`, 'g');
            // const matches = puzzle[row].match(regex);
            const value = puzzle[row].slice(start, size + start)
            console.log(value)

            for (let i = 0; i < size; i++) {
                const char = value[i];
                if (!homework[row][i]) homework[row][i] = "";
                if (char) {
                    homework[row][i] += char;
                }
            }

            start += size+1;
        }
        break;
    }

    console.log('homework:', homework[0])

    // console.log(puzzle)





    // for (let i = 0; i < puzzle.length - 1; i++){
    //     console.log(puzzle[i])
    //     let width = puzzle[i].split(" ").filter(Boolean).length;

    //     for (let col = 0; col < width; col++){
    //         const size = operations[0][1] as number;

    //         const regex = new RegExp(`.{1,${size + 1}}`, 'g')
    //         const matches = puzzle[i].match(regex);
    //         console.log(matches)
    //         if (!matches) {
    //             throw Error("Shit broke")
    //         }

    //         const new_value = matches[col].replaceAll(" ", "0").slice(0, size);
    //         if (!homework[col]) {
    //             homework[col] = []
    //         }
    //         homework[col] = [...homework[col], new_value];
    //     }
    // }

    // for (let i = 0; i < homework.length; i++) {
    //     console.log('problem', homework[i])
    //     answer += calculate(homework[i], operations[i][0] as "+"|"*");
    // }

    return answer;
}
