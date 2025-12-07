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
    let width = puzzle[0].split(" ").filter(Boolean).length;
    let answer = 0;

    const pattern = /[+*]\s*?(?=\s[+*]|$)/gm
    let operations: (string|number)[][] = [];
    puzzle[puzzle.length - 1].match(pattern)?.forEach(x => {
        operations.push([x[0], x.length]);
    });

    for (let i = 0; i < puzzle.length - 1; i++){
        for (let col = 0; col < width; col++) {
            const size = operations[col][1] as number;
            // console.log('size:', size)

            const start = col * size === 0 ? 0 : col * size + 1;
            console.log('size:', start)
            console.log('size:', size)
            console.log(puzzle[i])

            let value = puzzle[i].slice(start, size);
            value = value.replaceAll(" ", "0");
            console.log(value)

            if(!homework[col]){
                homework[col] = [];
            }
            homework[col] = [...homework[col], value];
        }
    }

    for (let i = 0; i < homework.length; i++) {
        console.log('problem', homework[i])
        answer += calculate(homework[i], operations[i][0] as "+"|"*");
    }

    return answer;
}
