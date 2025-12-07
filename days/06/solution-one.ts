const parse_line = (line: string) => line.split(" ").filter(Boolean);

function ceph_calc(values: number[], operation: "*"|"+") {
    return values.slice(1).reduce((sum, value) => operation==="*" ?
        sum! *= value :
        sum! += value
    , values[0])!
}

export default async function solution(puzzle: string[]) {
    let homework = puzzle.map(line => line.split(" ").filter(Boolean));
    let width = homework[0]!.length;
    let height = homework.length - 1;
    let answer = 0;

    for (let col = 0; col < width; col++) {
        let values: number[] = [];
        for (let row = 0; row < height; row++) {
            values.push(Number(homework[row]![col]))
        }
        answer += ceph_calc(values, homework[homework.length - 1]![col] as "*" | "+")
    }

    return answer;
}
