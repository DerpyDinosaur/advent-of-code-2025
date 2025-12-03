function combinations(arr: number[]) {
  const result: number[][] = [[]];

  for (const item of arr) {
    const currentLength = result.length;
    for (let i = 0; i < currentLength; i++) {
        const combination = [...result[i]!, item];
        result.push(combination);
    }
  }

  return Math.max(...result
    .filter(x => x.length === 12)
    .map(x => Number(x.toString().split(',').join(''))))
}

export default async function solution(puzzle: string[]): Promise<number> {
    let answer = 0;

    for (const line of puzzle) {
        const bank = line.split("").map(Number);
        let maxJoltage = 0;

        let joltage = combinations(bank);
        console.log(joltage)
        // console.log(joltage)
        // joltage.forEach(x => {
        //     const n = Number(x.toString().split(',').join(''));
        //     maxJoltage = Math.max(maxJoltage, n);
        // });

        answer += maxJoltage;
    }

    return answer;
}
