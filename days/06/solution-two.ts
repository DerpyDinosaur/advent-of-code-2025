function ceph_calc(values: number[], operation: "*" | "+") {
  return values
    .slice(1)
    .reduce(
      (sum, value) => (operation === "*" ? (sum! *= value) : (sum! += value)),
      values[0],
    )!;
}

export default async function solution(puzzle: string[]) {
  let homework: any[] = [];
  let answer = 0;

  const op_pattern = /[+*]\s*?(?=\s[+*]|$)/gm;
  const num_pattern = /\d+/g;

  let operations: (string | number)[][] = [];
  puzzle[puzzle.length - 1].match(op_pattern)?.forEach((x) => {
    operations.push([x[0], x.length]);
  });

  const width = puzzle[0].match(num_pattern);
  if (width === null || width.length === 0) {
    throw Error("Shit hit the fan");
  }
  for (let row = 0; row < puzzle.length - 1; row++) {
    let start = 0;
    for (let col = 0; col < width.length; col++) {
      if (!homework[col]) homework[col] = [];
      const size = operations[col][1] as number;
      const value = puzzle[row].slice(start, size + start);

      for (let i = 0; i < size; i++) {
        const char = value[i];
        if (char) {
          homework[col][i] = !homework[col][i] ? char : homework[col][i] + char;
        }
      }
      start += size + 1;
    }
  }

  for (let i = 0; i < homework.length; i++) {
    const numbers = [...homework[i]]
      .reverse()
      .map((x) => parseInt(x.replaceAll(" ", "")));
    console.log("problem", numbers);

    answer += ceph_calc(numbers, operations[i][0] as "+" | "*");
  }

  return answer;
}
